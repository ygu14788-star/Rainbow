import { useState } from 'react';
import { Reveal, Hero, SectionHead } from '../components/chrome';
import { useLang, useData } from '../i18n';

type Tech = { img: string; title: string; desc: string; detail: string };

/* 工艺详情弹窗 */
function TechModal({ tech, onClose, closeLabel }: { tech: Tech | null; onClose: () => void; closeLabel: string }) {
  if (!tech) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-[#2a251f]/45 backdrop-blur-sm" />
      <div className="relative bg-[#f8f5f0] max-w-3xl w-full grid md:grid-cols-2 max-h-[86vh] overflow-hidden"
        onClick={e => e.stopPropagation()}>
        <div className="hidden md:block">
          <img src={tech.img} alt={tech.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-10 overflow-y-auto">
          <p className="text-[11px] tracking-[0.35em] text-[#a8895b]">CRAFTSMANSHIP</p>
          <h3 className="font-serif-d text-3xl font-medium mt-2">{tech.title}</h3>
          <div className="w-8 h-px bg-[#a8895b] my-5" />
          <p className="text-[14px] leading-[2] text-[#6b6257]">{tech.detail}</p>
          <button onClick={onClose}
            className="mt-8 border border-[#2a251f] px-8 py-2.5 text-[12px] tracking-[0.25em] hover:bg-[#2a251f] hover:text-[#f8f5f0] transition-colors">
            {closeLabel}
          </button>
        </div>
        <button onClick={onClose} className="absolute top-4 right-5 text-2xl text-[#8a8177] hover:text-[#2a251f] transition-colors" aria-label="Close">×</button>
      </div>
    </div>
  );
}

export default function Craftsmanship() {
  const [active, setActive] = useState<number | null>(null);
  const { t } = useLang();
  const { PROCESS, TECHS, PROMISES, PARTNERS, HERO_CRAFT } = useData();

  return (
    <>
      <Hero
        title={t('高端针织产品制造', 'Premium Knitwear Manufacturing')}
        lines={t(
          '闰博尔致力于高端精纺针织品的制造，|自成立以来，一直以建立一个绿色工厂为愿景。|我们始终秉承"质量第一"的原则，|承诺产品出厂合格率高达 99%。',
          'Rainbow is dedicated to manufacturing premium fine-gauge knitwear.|Since our founding, our vision has been to build a green factory.|We always uphold the principle of "Quality First",|with a factory pass rate of up to 99%.'
        ).split('|')}
        img={HERO_CRAFT} tall
      />

      {/* 生产流程 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHead en="OUR PROCESS" zh="生产流程" enTitle="Our Process" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.no} delay={i * 90}>
              <div className="group">
                <div className="zoom-img aspect-square bg-white">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-serif-d text-xl text-[#a8895b]">{p.no}</span>
                  <h3 className="text-[15px] font-medium">{p.title}</h3>
                  {i < PROCESS.length - 1 && <span className="hidden md:inline text-[#c9c0b2]">→</span>}
                </div>
                <p className="text-[12px] leading-relaxed text-[#8a8177] mt-2">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 创新工艺与技术 —— 了解更多打开详情弹窗 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="INNOVATION" zh="创新工艺与技术" enTitle="Innovation & Technology" />
          <div className="grid md:grid-cols-3 gap-8">
            {TECHS.map((tech, i) => (
              <Reveal key={tech.title} delay={i * 110}>
                <div className="group">
                  <button onClick={() => setActive(i)} className="zoom-img block w-full aspect-[4/3] bg-white">
                    <img src={tech.img} alt={tech.title} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                  <h3 className="font-serif-d text-2xl font-medium mt-6">{tech.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#8a8177] mt-3">{tech.desc}</p>
                  <button onClick={() => setActive(i)} className="arrow-link text-[12px] tracking-[0.2em] border-b border-[#2a251f] pb-0.5 mt-4">
                    {t('了解更多', 'Learn More')} <span className="arr">→</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 品质承诺 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHead en="QUALITY PROMISE" zh="我们的品质承诺" enTitle="Our Quality Promise" />
        <div className="grid md:grid-cols-3 gap-10">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="text-center px-8 md:border-r last:border-0 border-[#e4ddd1]">
              <svg viewBox="0 0 48 48" className="w-14 h-14 mx-auto text-[#a8895b]" fill="none" stroke="currentColor" strokeWidth="1.2">
                {i === 0 && <><path d="M24 4l16 6v12c0 10-7 18-16 22-9-4-16-12-16-22V10l16-6z" /><path d="M17 24l5 5 9-10" /></>}
                {i === 1 && <><circle cx="24" cy="20" r="12" /><path d="M24 14l2 4 4.5.5-3.3 3 1 4.5-4.2-2.4-4.2 2.4 1-4.5-3.3-3L22 18l2-4z" /><path d="M17 30l-4 12 11-6 11 6-4-12" /></>}
                {i === 2 && <><circle cx="24" cy="24" r="18" /><path d="M15 24l6 6 12-13" /></>}
              </svg>
              <h3 className="font-serif-d text-2xl font-medium mt-5">{p.title}</h3>
              <p className="text-[13px] leading-relaxed text-[#8a8177] mt-3">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 合作供应商 */}
      <section className="bg-[#f2eee6] py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="OUR PARTNERS" zh="合作供应商" enTitle="Our Partners" />
          <Reveal>
            <p className="text-[14px] leading-relaxed text-[#6b6257] max-w-2xl mx-auto">
              {t('经过多年的砥砺前行，闰博尔已与业界众多顶级合作品牌建立了紧密的合作关系，同时与业界顶尖的原料供应商建立了强大的合作关系。',
                 'After years of dedicated progress, Rainbow has built close partnerships with many top brands in the industry, as well as strong relationships with leading yarn suppliers.')}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mt-14">
              {PARTNERS.map(p => (
                <span key={p} className="font-serif-d text-2xl md:text-3xl font-medium tracking-wide text-[#2a251f] hover:text-[#a8895b] transition-colors cursor-default md:px-10 md:border-r last:border-0 border-[#d8d0c2]">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <TechModal tech={active !== null ? TECHS[active] : null} onClose={() => setActive(null)} closeLabel={t('关闭', 'Close')} />
    </>
  );
}
