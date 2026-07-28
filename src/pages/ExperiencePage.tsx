import { PageLayout } from '../components/layout/PageLayout';
import { Avatar } from '../components/ui/Avatar';
import { RichText } from '../components/ui/RichText';
import { experienceIds } from '../constants/portfolio';
import type { TranslatableProps, Translation } from '../types/content';
import styles from '../components/layout/PageLayout.module.scss';

interface ExperienceItemProps {
  id: typeof experienceIds[number];
  content: Translation;
}

function ExperienceItem({ id, content }: ExperienceItemProps) {
  return <article className={styles.job}>
    <div className={styles.jobHeading}><h2>{content[`experience-role-${id}`]}</h2><h3>{content[`experience-company-${id}`]}</h3><h3>{content[`experience-date-${id}`]}</h3></div>
    <ul className={`${styles.paragraph} ${styles.small} ${styles.initial}`}><RichText html={content[`experience-content-${id}`]} /></ul>
    <p className={`${styles.paragraph} ${styles.small}`}><RichText html={content[`experience-skills-${id}`]} /></p>
  </article>;
}

export function ExperiencePage({ content }: TranslatableProps) {
  return <PageLayout aside={<Avatar sticky />}>
    <h1 className={styles.title}>{content['experience-title']}</h1>
    {experienceIds.map((id) => <ExperienceItem key={id} id={id} content={content} />)}
  </PageLayout>;
}
