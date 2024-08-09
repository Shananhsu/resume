import { useTranslation } from "react-i18next";

const useChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
  };
  return { changeLanguage };
};

export default useChangeLanguage;
