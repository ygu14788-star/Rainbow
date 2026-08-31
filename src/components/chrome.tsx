import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NAV, LOGO, type PageKey } from '../data';
import { useLang, useData } from '../i18n';

/* ---------- 滚动显现容器 ---------- */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    // 兜底：2.5s 后强制显示，避免任何情况下内容不可见
    const t = setTimeout(() => el.classList.add('in'), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` } as React.CSSProperties}>{children}</div>;
}

/* ---------- 数字滚动 ---------- */
export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1600, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    // 兜底：3s 后直接显示最终值，避免极端情况下停在 0
    const t = setTimeout(() => setN(value), 3000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------- 区块标题 ---------- */
export function SectionHead({ en, zh, enTitle }: { en: string; zh: string; enTitle?: string }) {
  const { lang } = useLang();
  return (
    <Reveal className="text-center mb-14 md:mb-20">
      <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">{en}</p>
      <h2 className="font-serif-d text-3xl md:text-[42px] leading-tight font-medium">{lang === 'en' ? (enTitle || en) : zh}</h2>
      <div className="w-8 h-px bg-[#a8895b] mx-auto mt-5" />
    </Reveal>
  );
}

/* ---------- 首屏（各页共用结构） ---------- */
export function Hero({ title, sub, lines, img, tall = false, pos = 'center', contain = false }: { title: ReactNode; sub?: ReactNode; lines?: string[]; img: string; tall?: boolean; pos?: string; contain?: boolean }) {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`relative grid md:grid-cols-2 items-center bg-[#f2eee6] overflow-hidden ${tall ? 'min-h-[82vh]' : 'min-h-[70vh]'}`}>
      <div className="px-8 md:px-16 lg:px-24 py-24 md:py-0 relative z-10">
        <Reveal>
          <h1 className="font-serif-d text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1]">{title}</h1>
          {sub && <div className="mt-4 text-lg md:text-xl tracking-wide text-[#6b6257]">{sub}</div>}
          <div className="w-10 h-px bg-[#a8895b] my-8" />
          {lines && <div className="space-y-2 text-[15px] leading-relaxed text-[#6b6257]">{lines.map((l, i) => <p key={i}>{l}</p>)}</div>}
        </Reveal>
      </div>
      <div className="relative h-[50vh] md:h-full overflow-hidden" style={contain ? { background: '#dbd0c0' } : undefined}>
        {contain ? (
          <img src={img} alt="" className="absolute inset-0 w-full h-full object-contain" />
        ) : (
          <div ref={imgRef} className="parallax-img absolute inset-0 -top-[15%] h-[130%]">
            <img src={img} alt="" className="w-full h-full object-cover" style={{ objectPosition: pos }} />
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- 顶部导航 ---------- */
export function Nav({ page, go }: { page: PageKey; go: (p: PageKey) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // 可持续性页首屏为深色大图，未滚动时导航用白色
  const light = !scrolled && !open && page === 'sustainability';
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-[#f8f5f0]/95 backdrop-blur shadow-[0_1px_0_var(--line)]' : light ? 'bg-gradient-to-b from-black/40 via-black/15 to-transparent' : 'bg-gradient-to-b from-[#f8f5f0]/80 via-[#f8f5f0]/40 to-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        <button onClick={() => go('collections')} className={`flex items-center gap-3 ${light ? 'text-white' : ''}`}>
          <img src={LOGO} alt="Rainbow" className={`h-9 w-auto transition-all ${light ? 'brightness-0 invert' : ''}`} />
          <span className="font-serif-d text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">{lang === 'en' ? 'Rainbow' : 'Rainbow 闰博尔'}</span>
        </button>
        <div className={`hidden md:flex items-center gap-9 ${light ? 'nav-light' : ''}`}>
          {NAV.map(n => (
            <button key={n.key} onClick={() => go(n.key)}
              className={`nav-link text-[14px] tracking-[0.15em] transition-colors ${light
                ? (page === n.key ? 'active text-white' : 'text-white/80 hover:text-white')
                : (page === n.key ? 'active' : 'text-[#6b6257] hover:text-[#2a251f]')}`}
              style={light ? { textShadow: '0 1px 6px rgba(0,0,0,0.45)' } : undefined}>
              {lang === 'en' ? n.en : n.label}
            </button>
          ))}
          {/* 中英切换 */}
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className={`text-[12px] tracking-[0.15em] border px-3 py-1 rounded-full transition-colors ${light
              ? 'border-white/60 text-white hover:bg-white/15'
              : 'border-[#c9c0b2] text-[#6b6257] hover:border-[#2a251f] hover:text-[#2a251f]'}`}
            style={light ? { textShadow: '0 1px 6px rgba(0,0,0,0.45)' } : undefined}
            aria-label="Switch language">
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className={`text-[12px] tracking-[0.15em] border px-3 py-1 rounded-full transition-colors ${light
              ? 'border-white/60 text-white'
              : 'border-[#c9c0b2] text-[#6b6257]'}`}
            aria-label="Switch language">
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className={`p-2 ${light ? 'text-white' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <div className={`w-6 h-px bg-current mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <div className={`w-6 h-px bg-current transition-transform ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-[#f8f5f0]/95 backdrop-blur">
          {NAV.map(n => (
            <button key={n.key} onClick={() => { go(n.key); setOpen(false); }}
              className={`text-left text-sm tracking-wider ${page === n.key ? 'text-[#a8895b]' : 'text-[#6b6257]'}`}>
              {lang === 'en' ? n.en : `${n.label} · ${n.en}`}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ---------- 页脚 ---------- */
export function Footer({ go }: { go: (p: PageKey, param?: string) => void }) {
  const { t, lang } = useLang();
  const { CONTACT } = useData();
  const cols = [
    { 
      title: t('系列产品', 'Collections'), 
      items: [
        { label: t('时装系列', 'Fashion'), action: () => go('collections', 'fashion') },
        { label: t('高尔夫系列', 'Golf'), action: () => go('collections', 'golf') },
        { label: t('滑雪系列', 'Ski'), action: () => go('collections', 'ski') },
        { label: t('越野跑系列', 'Trail Running'), action: () => go('collections', 'trail') },
      ]
    },
    { 
      title: t('精湛工艺', 'Craftsmanship'), 
      items: [
        { label: t('我们的流程', 'Our Process'), action: () => go('craftsmanship') },
        { label: t('材料', 'Materials'), action: () => go('craftsmanship') },
        { label: t('品质承诺', 'Quality Promise'), action: () => go('craftsmanship') },
      ]
    },
    { 
      title: t('品牌故事', 'Our Story'), 
      items: [
        { label: t('我们的故事', 'About Us'), action: () => go('story') },
        { label: t('匠心工艺', 'Craft'), action: () => go('story') },
        { label: t('可持续性', 'Sustainability'), action: () => go('sustainability') },
      ]
    },
    { 
      title: t('客户服务', 'Customer Care'), 
      items: [
        { label: t('常见问题', 'FAQ'), action: () => go('contact') },
        { label: t('联系我们', 'Contact Us'), action: () => go('contact') },
      ]
    },
  ];
  return (
    <footer className="bg-[#f2eee6] border-t border-[#e4ddd1]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Rainbow" className="h-10 w-auto" />
              <p className="font-serif-d text-2xl font-medium">{lang === 'en' ? 'Rainbow' : 'Rainbow 闰博尔'}</p>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[#8a8177] max-w-xs">
              {t('成立于2016年，闰博尔是一家高端针织服装品牌，致力于以卓越材料、精湛工艺和负责任的制造，成就恒久品质。',
                 'Founded in 2016, Rainbow is a premium knitwear manufacturer dedicated to exceptional materials, refined craftsmanship and responsible production for enduring quality.')}
            </p>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <p className="text-[13px] font-medium tracking-widest mb-4">{c.title}</p>
              <ul className="space-y-2.5">
              {c.items.map(i => (
                <li key={i.label}>
                  <button onClick={i.action} className="text-[13px] text-[#8a8177] hover:text-[#2a251f] transition-colors">{i.label}</button>
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-[#e4ddd1] flex flex-col md:flex-row justify-between gap-3 text-[12px] text-[#8a8177]">
          <p>{t('© 2016-2026 Rainbow 闰博尔，保留所有权利。', '© 2016-2026 Rainbow. All rights reserved.')}</p>
          <p>{CONTACT.email}　·　{CONTACT.phone}</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- 返回顶部 ---------- */
export function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`to-top ${show ? '' : 'hide'} fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full border border-[#2a251f] bg-[#f8f5f0]/90 backdrop-blur flex items-center justify-center hover:bg-[#2a251f] hover:text-[#f8f5f0] transition-colors`}
      aria-label="返回顶部">↑</button>
  );
}
