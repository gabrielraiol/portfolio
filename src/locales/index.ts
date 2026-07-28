import enUS from './en-US.json';
import ptBR from './pt-BR.json';
import type { Language, Translation } from '../types/content';

export const translations: Record<Language, Translation> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};
