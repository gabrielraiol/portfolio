import type { TranslatableProps } from '../../types/content';
import styles from './Footer.module.scss';

export function Footer({ content }: TranslatableProps) {
  return <footer className={styles.footer}>{content.rodape}</footer>;
}
