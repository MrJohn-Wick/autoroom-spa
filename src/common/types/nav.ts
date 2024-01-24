export interface NavItemProps {
  title: string;
  link: string;
}

export interface NavProps {
  title: string;
  link: string;
  subMenu?: NavItemProps[];
}
