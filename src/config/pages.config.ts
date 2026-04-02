export const PAGES = {
  HOME: '/',
  EXPLORE: '/explore',
  PROFILE: '/profile-fake',
  SHOP: '/shop',
  SSG: '/shop/ssg',
  ISR: '/shop/isr',
} as const;

export default PAGES;

export const PROFILE = (username: string) => `/u/${username}`;
