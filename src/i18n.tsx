import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import * as zh from './data';
import * as en from './data-en';

export type Lang = 'zh' | 'en';

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (zhText: string, enText: string) => string };

const Ctx = createContext<LangCtx>({ lang: 'zh', setLang: () => {}, t: z => z });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'en' || q === 'zh') return q;
      return (localStorage.getItem('rainbow-lang') as Lang) || 'zh';
    } catch { return 'zh'; }
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('rainbow-lang', l); } catch { /* ignore */ }
  };
  useEffect(() => { document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'; }, [lang]);
  const t = (z: string, e: string) => (lang === 'en' ? e : z);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** 按当前语言返回整站数据（图片路径两语言共用） */
export function useData() {
  const { lang } = useLang();
  return lang === 'en' ? en : zh;
}
