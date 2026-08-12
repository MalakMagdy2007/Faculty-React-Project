import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

    localStorage.setItem("language", language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("ar")}>
        العربية
      </button>
    </div>
  );
}

export default LanguageSwitcher;