import type ptBR from '../locales/pt-BR.json';

export type Language = 'pt-BR' | 'en-US';
export type Translation = Record<keyof typeof ptBR, string>;

export interface TranslatableProps {
  content: Translation;
}
