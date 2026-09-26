// utils/theme.js
export function applyTheme(theme) {
  const style = document.createElement("style");
  style.type = "text/css";

  const variables =
    theme === "dark"
      ? `
	  $bgColor: #1a1a1a;
	  $pure: #2e2e2e;
	  $textFused: #b0b0b0;
	  $primary: #5AB2FF;
	  $secondary: #cf7d4e;
	  $boxShadow: 3px 3px 15px -8px rgba(0, 0, 0, 0.7);
	  $boxShadowHover: 3px 3px 17px -4px rgba(0, 0, 0, 0.7);
	`
      : `
	  $bgColor: #f1eaff;
	  $pure: #ffffff;
	  $textFused: #787a91;
	  $primary: #5AB2FF;
	  $secondary: #5AB2FF;
	  $boxShadow: 3px 3px 15px -8px rgba(0, 0, 0, 0.3);
	  $boxShadowHover: 3px 3px 17px -4px rgba(0, 0, 0, 0.3);
	`;

  style.innerHTML = `
	  :root {
		${variables}
	  }
	`;

  document.head.appendChild(style);
}
