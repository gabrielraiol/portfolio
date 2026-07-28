export type PageId = 'home' | 'about' | 'experience' | 'education';

export interface NavigationItem {
  page: PageId;
  path: string;
  desktopLabel: 'dl1' | 'dl2' | 'dl3' | 'dl4';
  mobileLabel: 'ml1' | 'ml2' | 'ml3' | 'ml4';
}
