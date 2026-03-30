export const PAGES = {
  HOME: '/',
  EXPLORE: '/explore',
  PROFILE: '/profile-fake',
} as const;

export default PAGES;

export const PROFILE = (username: string) => `/u/${encodeURIComponent(username)}`;
