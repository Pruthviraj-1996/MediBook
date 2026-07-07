import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] =
    useState(false);

  function toggleTheme() {
    setDark(!dark);

    document.body.style.background =
      dark ? "#f4f7fc" : "#111827";

    document.body.style.color =
      dark ? "#000" : "#fff";
  }

  return (
    <button
      className="btn"
      onClick={toggleTheme}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;