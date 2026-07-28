import styles from '../layout/PageLayout.module.scss';

interface AvatarProps {
  sticky?: boolean;
}

export function Avatar({ sticky = false }: AvatarProps) {
  return <img className={`${styles.avatar} ${sticky ? styles.sticky : ''}`} src="/assets/imagem.png" alt="Gabriel Raiol" />;
}
