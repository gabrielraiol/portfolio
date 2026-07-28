import type { NavigationItem, PageId } from '../types/navigation';

export const navigationItems: readonly NavigationItem[] = [
  { page: 'home', path: '/', desktopLabel: 'dl1', mobileLabel: 'ml1' },
  { page: 'about', path: '/about', desktopLabel: 'dl2', mobileLabel: 'ml2' },
  { page: 'experience', path: '/experience', desktopLabel: 'dl3', mobileLabel: 'ml3' },
  { page: 'education', path: '/education', desktopLabel: 'dl4', mobileLabel: 'ml4' },
];

const legacyPaths: Record<string, PageId> = {
  '/index.html': 'home',
  '/about.html': 'about',
  '/experience.html': 'experience',
  '/education.html': 'education',
};

export const pageByPath: Record<string, PageId> = {
  ...legacyPaths,
  ...Object.fromEntries(navigationItems.map(({ page, path }) => [path, page])) as Record<string, PageId>,
};

export const pageTitleKey: Record<PageId, 'home-title' | 'about-head-title' | 'experience-head-title' | 'edu-head-title'> = {
  home: 'home-title',
  about: 'about-head-title',
  experience: 'experience-head-title',
  education: 'edu-head-title',
};
