export type FooterLink = {
  label: string;
  href: string;
};

export type FooterItem = string | FooterLink;

export type FooterSection = {
  title: string;
  items: FooterItem[];
};

export type FooterGroup = {
  id: string;
  sections: FooterSection[];
};
