//i18n
import { useTranslation } from "react-i18next";

//type
import { languageMenuProps } from "../type.ts";

const LanguageMenu = ({
  languageData,
  handleLangMenu,
  changeLanguage,
}: languageMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className="fixed w-full h-screen bg-mask bg-opacity-50 left-0 top-0 flex items-center justify-center">
      <div className="bg-black w-10/12 rounded-md text-center py-2 text-sm">
        <p className="my-1 text-green-400">{t("navbar.chooseLanguage")}</p>
        <div>
          {languageData.map((item) => (
            <button
              key={item.id}
              className="w-full my-1"
              onClick={() => changeLanguage(item.lang)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <button
          className="w-full text-center text-white my-1"
          onClick={handleLangMenu}
        >
          {t("navbar.close")}
        </button>
      </div>
    </div>
  );
};
export default LanguageMenu;
