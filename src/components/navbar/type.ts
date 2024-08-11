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

export interface mobileNavbarProps {
  handlePageMenu: handleToggle;
  handleLangMenu: handleToggle;
}

export interface dropDownMenuProps {
  handlePageMenu: handleToggle;
}

export interface languageMenuProps {
  handleLangMenu: handleToggle;
}
