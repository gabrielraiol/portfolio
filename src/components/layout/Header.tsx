import { useState, type MouseEvent } from 'react';
import { navigationItems } from '../../constants/navigation';
import type { TranslatableProps } from '../../types/content';
import styles from './Header.module.scss';

interface HeaderProps extends TranslatableProps {
  onNavigate: (path: string) => void;
}

export function Header({ content, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return <header className={styles.header}>
    <nav className={styles.desktopNav} aria-label="Main navigation">
      {navigationItems.map(({ path, desktopLabel }) => <a key={path} className={styles.link} href={path} onClick={(event) => handleNavigation(event, path)}>{content[desktopLabel]}</a>)}
    </nav>
    <div className={styles.mobileNav}>
      <button className={`${styles.menuButton} ${isMobileMenuOpen ? styles.active : ''}`} type="button" aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}><span /><span /><span /></button>
      <nav className={`${styles.mobileLinks} ${isMobileMenuOpen ? styles.show : ''}`} aria-label="Mobile navigation">
        {navigationItems.map(({ path, mobileLabel }) => <a key={path} className={styles.link} href={path} onClick={(event) => handleNavigation(event, path)}>{content[mobileLabel]}</a>)}
      </nav>
    </div>
  </header>;
}
