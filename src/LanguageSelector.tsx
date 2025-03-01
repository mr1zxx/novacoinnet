import React, { useState, useEffect } from "react";
import "./LanguageSelector.css"; 

import flagUK from "./assets/uk.png";
import flagBrazil from "./assets/brazil.png";
import flagIndia from "./assets/india.png";
import flagRussia from "./assets/russia.png";
import flagIndonesia from "./assets/indonesia.png";
import flagJapan from "./assets/japan.png";
import flagChina from "./assets/china.png";
import flagSpain from "./assets/spain.png";

const languages = [
  { code: "en", name: "English", flag: flagUK },
  { code: "pt", name: "Português", flag: flagBrazil },
  { code: "hi", name: "हिन्दी", flag: flagIndia },
  { code: "ru", name: "Русский", flag: flagRussia },
  { code: "id", name: "Bahasa Indonesia", flag: flagIndonesia },
  { code: "ja", name: "日本語", flag: flagJapan },
  { code: "zh", name: "中文", flag: flagChina },
  { code: "es", name: "Español", flag: flagSpain },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Padrão: inglês
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedLanguageCode = localStorage.getItem('selectedLanguage');
    if (storedLanguageCode) {
      const matchedLanguage = languages.find(lang => lang.code === storedLanguageCode);
      if (matchedLanguage) {
        setSelectedLanguage(matchedLanguage);
      }
    }
  }, []);

  const handleSelectLanguage = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
    setMenuOpen(false);
    const currentPath = window.location.pathname.split('/').slice(2).join('/');
    window.location.href = `/${language.code}/${currentPath}`;
  };

  return (
    <div className="language-selector">
      <button className="lang-button" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.name} className="lang-flag" />
      </button>

      {menuOpen && (
        <div className="lang-menu">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="lang-option"
              onClick={() => handleSelectLanguage(lang)}
            >
              <img src={lang.flag} alt={lang.name} className="lang-flag" />
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;