import { useEffect, useState } from 'react';
import { translations } from '../locales';
import type { Language } from '../types/content';

const storageKey = 'languagePreference';
const defaultLanguage: Language = 'pt-BR';

const isLanguage = (value: string | null): value is Language => value === 'pt-BR' || value === 'en-US';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(storageKey);
    return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
  }, [language]);

  return { content: translations[language], language, setLanguage };
}
