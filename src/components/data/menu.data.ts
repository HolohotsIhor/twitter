import PAGES from '@/config/pages.config';

export interface IMenuItem {
  href: string;
  text: string;
}

export const MENU = [
  { href: PAGES.HOME, text: 'Home' },
  { href: PAGES.EXPLORE, text: 'Explore' },
  { href: PAGES.PROFILE, text: 'Profile' },
  { href: PAGES.SHOP, text: 'Shop' },
];
