interface menuData {
  id: number;
  title: string;
  link: string;
}

interface languageData {
  id: number;
  title: string;
  lang: string;
}

interface changeLanguage {
  (lan: string): void;
}

export interface desktopNavbarProps {
  menuData: menuData[];
  languageData: languageData[];
  changeLanguage: changeLanguage;
}

export interface dropDownMenuProps {
  handleToggle: () => void;
  menuData: menuData[];
}
