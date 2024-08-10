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

interface handleToggle {
  (): void;
}

interface changeLanguage {
  (lan: string): void;
}

export interface desktopNavbarProps {
  menuData: menuData[];
  languageData: languageData[];
  changeLanguage: changeLanguage;
}

export interface mobileNavbarProps {
  handlePageMenu: handleToggle;
  handleLangMenu: handleToggle;
}

export interface dropDownMenuProps {
  handlePageMenu: handleToggle;
  menuData: menuData[];
}

export interface languageMenuProps {
  languageData: languageData[];
  handleLangMenu: handleToggle;
  changeLanguage: changeLanguage;
}
