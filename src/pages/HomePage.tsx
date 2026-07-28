import { socialProfiles } from '../constants/portfolio';
import { Avatar } from '../components/ui/Avatar';
import { RichText } from '../components/ui/RichText';
import { PageLayout } from '../components/layout/PageLayout';
import type { TranslatableProps } from '../types/content';
import styles from '../components/layout/PageLayout.module.scss';

export function HomePage({ content }: TranslatableProps) {
  return <PageLayout aside={<Avatar />}>
    <h1 className={`${styles.title} ${styles.center}`}><RichText html={content['home-title']} /></h1>
    <p className={`${styles.paragraph} ${styles.center}`}><RichText html={content['home-content']} /></p>
    <div className={styles.socialLinks}>
      <h2>{content['apresentacao__links__subtitulo']}</h2>
      {socialProfiles.map(({ label, url, icon }) => <a className={styles.socialButton} key={label} href={url} target="_blank" rel="noreferrer"><img src={icon} alt="" />{label}</a>)}
    </div>
  </PageLayout>;
}
