import type { ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: ReactNode;
  aside: ReactNode;
}

export function PageLayout({ children, aside }: PageLayoutProps) {
  return <main className={styles.presentation}><section className={styles.content}>{children}</section>{aside}</main>;
}
