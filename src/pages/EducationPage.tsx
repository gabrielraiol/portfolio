import { PageLayout } from '../components/layout/PageLayout';
import { Avatar } from '../components/ui/Avatar';
import { RichText } from '../components/ui/RichText';
import { certificateIds } from '../constants/portfolio';
import type { TranslatableProps } from '../types/content';
import styles from '../components/layout/PageLayout.module.scss';

export function EducationPage({ content }: TranslatableProps) {
  return <PageLayout aside={<Avatar sticky />}>
    <h1 className={styles.title}>{content['edu-academic']}</h1>
    <div className={`${styles.paragraph} ${styles.small}`}><RichText html={content['edu-academic-info']} /></div>
    <h1 className={styles.title}>{content['edu-certificates']}</h1>
    <ul className={`${styles.paragraph} ${styles.small} ${styles.initial} ${styles.certificates}`}>
      {certificateIds.map((id) => <li key={id}><RichText html={content[`edu-certificate-${id}`]} /></li>)}
    </ul>
    <h1 className={styles.title}>{content['edu-language']}</h1>
    <ul className={`${styles.paragraph} ${styles.small}`}><RichText html={content['edu-language-content']} /></ul>
  </PageLayout>;
}
