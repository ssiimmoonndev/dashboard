import React from "react";
import { useTranslation } from "react-i18next";

function Select() {
  const traduction = useTranslation();
  const i18n = traduction.i18n;

  function changeLanguage(event) {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  }
  return (
    <div className="select-language">
      <select value={i18n.language} onChange={changeLanguage}>
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  )
}

export default Select;
