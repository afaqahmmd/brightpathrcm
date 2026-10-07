import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/siteConfig";

// Nodemailer needs Node APIs (not the Edge runtime); never cache this route.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { firstName: 100, lastName: 100, email: 200, phone: 40, date: 20, time: 20, message: 5000 };
const LABELS = { firstName: "first name", lastName: "last name", email: "email", phone: "phone", date: "date", time: "time", message: "message" };
const REQUIRED = ["firstName", "lastName", "email", "phone"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let transporter;
const getTransporter = () => {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      // EHLO hostname. Defaults to the server's machine name (random on Vercel), which spam filters penalise.
      name: new URL(siteConfig.url).hostname.replace(/^www\./, ""),
      port,
      secure: port === 465, // implicit TLS on 465; STARTTLS otherwise
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
      // Fail fast so visitors aren't left waiting if the mail server is unreachable
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
  }
  return transporter;
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const json = (body, status = 200) => Response.json(body, { status });

export async function POST(request) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error("Contact form: SMTP environment variables are not set.");
    return json({ error: "The contact form is not configured yet. Please call or email us." }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real users never see or fill this field. Pretend success so bots move on.
  // The field name is deliberately meaningless so browser autofill won't populate it.
  if (body.bp_hp) {
    console.warn("Contact form: honeypot filled, submission discarded.");
    return json({ ok: true });
  }

  const data = {};
  for (const [field, max] of Object.entries(LIMITS)) {
    const value = typeof body[field] === "string" ? body[field].trim() : "";
    if (value.length > max) return json({ error: `The ${LABELS[field]} field is too long.` }, 400);
    data[field] = value;
  }
  const missing = REQUIRED.filter((field) => !data[field]);
  if (missing.length) return json({ error: "Please fill in all required fields." }, 400);
  if (!EMAIL_RE.test(data.email)) return json({ error: "Please enter a valid email address." }, 400);

  const fullName = `${data.firstName} ${data.lastName}`;
  const rows = [
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Preferred date", data.date || "Not specified"],
    ["Preferred time", data.time || "Not specified"],
  ];

  const text = [
    `New consultation request from the ${siteConfig.name} website`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    data.message || "(none)",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0a1b37;line-height:1.5">
      <h2 style="margin:0 0 16px">New consultation request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#677386;padding-right:16px">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${data.message ? escapeHtml(data.message) : "<em>(none)</em>"}</p>
    </div>`;

  try {
    const info = await getTransporter().sendMail({
      from: `"${siteConfig.name} Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: `"${fullName.replace(/"/g, "")}" <${data.email}>`,
      subject: `New consultation request: ${fullName}`,
      text,
      html,
    });
    console.info("Contact form: email sent.", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
    if (info.rejected?.length) throw new Error(`Recipient rejected: ${info.rejected.join(", ")}`);
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return json({ error: "We couldn't send your request. Please try again, or contact us by phone or email." }, 502);
  }

  return json({ ok: true });
}
