import type { Language } from '../../types/content';
import styles from './LanguageSelector.module.scss';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const supportedLanguages: ReadonlyArray<{ code: Language; flagPath: string }> = [
  { code: 'pt-BR', flagPath: '/assets/br-flag.svg' },
  { code: 'en-US', flagPath: '/assets/us-flag.svg' },
];

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return <div className={styles.languageButtons}>
    {supportedLanguages.map(({ code, flagPath }) => (
      <button key={code} className={`${styles.languageButton} ${currentLanguage === code ? styles.selected : ''}`} type="button" aria-label={`Change language to ${code}`} onClick={() => onLanguageChange(code)}>
        <img src={flagPath} alt={code} />
      </button>
    ))}
  </div>;
}
