import { createContext, useContext, useState, ReactNode } from 'react';
import type { Lang } from './types';
import { common } from './common';
import { home } from './home';
import { research } from './research';
import { framework } from './framework';
import { about } from './about';
import { papers } from './papers';
import { facility } from './facility';

export type { Lang };

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

const translations = {
  ...common,
  ...home,
  ...research,
  ...framework,
  ...about,
  ...papers,
  ...facility,
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggle = () => setLang((prev) => (prev === 'en' ? 'ja' : 'en'));

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
