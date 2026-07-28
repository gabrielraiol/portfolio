import { PageLayout } from '../components/layout/PageLayout';
import { Avatar } from '../components/ui/Avatar';
import { RichText } from '../components/ui/RichText';
import type { TranslatableProps } from '../types/content';
import styles from '../components/layout/PageLayout.module.scss';

export function AboutPage({ content }: TranslatableProps) {
  return <PageLayout aside={<Avatar />}>
    <h1 className={`${styles.title} ${styles.center}`}>{content['about-title']}</h1>
    <p className={`${styles.paragraph} ${styles.center}`}><RichText html={content['about-content']} /></p>
  </PageLayout>;
}
