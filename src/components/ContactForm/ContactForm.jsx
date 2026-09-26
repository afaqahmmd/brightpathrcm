"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { PiArrowRight, PiCheckCircle, PiWarningCircle } from "react-icons/pi";

// Field names must match the EmailJS template variables.
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};

const Field = ({ label, name, optional, children }) => (
  <div className="field">
    <label htmlFor={name} className="field__label">
      {label}
      {optional && <span className="field__optional">Optional</span>}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSuccess(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_KEY,
        }
      );

      setSuccess("Thank you. Your request has been sent and our team will be in touch.");
      setFormData(initialForm);
    } catch (error) {
      setError("We couldn't send your request. Please try again, or contact us by phone or email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset className="contact-form__group">
        <legend className="contact-form__legend">
          <span className="mono">01</span> About you
        </legend>
        <div className="contact-form__grid">
          <Field label="First name" name="firstName">
            <input id="firstName" type="text" name="firstName" autoComplete="given-name"
              value={formData.firstName} onChange={handleChange} required />
          </Field>
          <Field label="Last name" name="lastName">
            <input id="lastName" type="text" name="lastName" autoComplete="family-name"
              value={formData.lastName} onChange={handleChange} required />
          </Field>
          <Field label="Work email" name="email">
            <input id="email" type="email" name="email" autoComplete="email"
              value={formData.email} onChange={handleChange} required />
          </Field>
          <Field label="Phone" name="phone">
            <input id="phone" type="tel" name="phone" autoComplete="tel"
              value={formData.phone} onChange={handleChange} required />
          </Field>
        </div>
      </fieldset>

      <fieldset className="contact-form__group">
        <legend className="contact-form__legend">
          <span className="mono">02</span> Preferred time for a call
        </legend>
        <div className="contact-form__grid">
          <Field label="Date" name="date">
            <input id="date" type="date" name="date"
              value={formData.date} onChange={handleChange} required />
          </Field>
          <Field label="Time" name="time">
            <input id="time" type="time" name="time"
              value={formData.time} onChange={handleChange} required />
          </Field>
        </div>
      </fieldset>

      <fieldset className="contact-form__group">
        <legend className="contact-form__legend">
          <span className="mono">03</span> Your practice
        </legend>
        <Field label="What would you like help with?" name="message" optional>
          <textarea id="message" name="message" rows="6"
            placeholder="Specialty, number of providers, current billing setup, what's not working…"
            value={formData.message} onChange={handleChange} />
        </Field>
      </fieldset>

      <div className="contact-form__submit">
        <button className="btn btn--lg" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send request"} <PiArrowRight />
        </button>
        <div aria-live="polite">
          {success && (
            <p className="form-message form-message--success" role="status">
              <PiCheckCircle aria-hidden="true" /> {success}
            </p>
          )}
          {error && (
            <p className="form-message form-message--error" role="alert">
              <PiWarningCircle aria-hidden="true" /> {error}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
