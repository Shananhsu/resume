interface handleToggle {
  (): void;
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
