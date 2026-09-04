import { useState } from 'react';
import { Reveal, Hero, SectionHead } from '../components/chrome';
import { useLang, useData } from '../i18n';

type Tech = { img: string; title: string; enTitle: string; desc: string; enDesc: string; detail: string; enDetail: string };

/* 工艺详情弹窗 */
function TechModal({ tech, onClose, closeLabel, lang }: { tech: Tech | null; onClose: () => void; closeLabel: string; lang: string }) {
  if (!tech) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-[#2a251f]/45 backdrop-blur-sm" />
      <div className="relative bg-[#f8f5f0] max-w-3xl w-full grid md:grid-cols-2 max-h-[86vh] overflow-hidden"
        onClick={e => e.stopPropagation()}>
        <div className="hidden md:block">
          <img src={tech.img} alt={lang === 'en' ? tech.enTitle : tech.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-10 overflow-y-auto">
          <p className="text-[11px] tracking-[0.35em] text-[#a8895b]">CRAFTSMANSHIP</p>
          <h3 className="font-serif-d text-3xl font-medium mt-2">{lang === 'en' ? tech.enTitle : tech.title}</h3>
          <div className="w-8 h-px bg-[#a8895b] my-5" />
          <p className="text-[14px] leading-[2] text-[#6b6257]">{lang === 'en' ? tech.enDetail : tech.detail}</p>
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
  const { t, lang } = useLang();
  const { HERO_CRAFT, TECHS, PROMISES, PARTNERS } = useData();

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
        <div className="mt-16 overflow-x-auto pb-4">
          <div className="min-w-[1000px] relative">
            {/* 上排 01-13 */}
            <div className="flex">
              {[
                { no: '01', name: t('纱线到厂', 'Yarn Arrival') },
                { no: '02', name: t('纱线质检', 'Yarn Inspection') },
                { no: '03', name: t('纱线入库', 'Yarn Storage') },
                { no: '04', name: t('横机编织', 'Flat Knitting') },
                { no: '05', name: t('横机半成品检验（批件检验）', 'Semi-finished Inspection (Batch)') },
                { no: '06', name: t('套口缝合', 'Linking') },
                { no: '07', name: t('套口检验', 'Linking Inspection') },
                { no: '08', name: t('手缝', 'Hand Sewing') },
                { no: '09', name: t('洗前照灯检验', 'Pre-wash Light Inspection') },
                { no: '10', name: t('小烫', 'Light Pressing') },
                { no: '11', name: t('洗水', 'Washing') },
                { no: '12', name: t('烘干', 'Drying') },
                { no: '13', name: t('洗后照灯检验', 'Post-wash Light Inspection') },
              ].map((step, i) => (
                <Reveal key={step.no} delay={i * 40} className="flex-1 text-center relative group">
                  <div className="relative inline-block">
                    <div className="w-9 h-9 rounded-full border border-[#d8d0c2] bg-[#f8f5f0] flex items-center justify-center text-[12px] text-[#8a8177] group-hover:border-[#a8895b] group-hover:text-[#a8895b] transition-colors duration-300 mx-auto">
                      {step.no}
                    </div>
                    {i === 12 && <div className="absolute left-1/2 top-full w-px h-16 bg-[#d8d0c2] -translate-x-1/2" />}
                  </div>
                  <p className="text-[11px] text-[#8a8177] mt-3 leading-tight group-hover:text-[#2a251f] transition-colors duration-300 px-0.5">
                    {step.name}
                  </p>
                  {i < 12 && (
                    <div className="absolute top-[18px] left-[calc(50%+20px)] right-[calc(-50%+20px)] h-px bg-[#d8d0c2]" />
                  )}
                </Reveal>
              ))}
            </div>

            {/* 下排 出货 + 25-14 */}
            <div className="flex mt-10">
              {/* 检验合格出货 */}
              <Reveal delay={520} className="flex-1 text-center relative">
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full bg-[#a8895b] flex items-center justify-center text-white text-lg mx-auto">
                    ✓
                  </div>
                  <div className="absolute left-1/2 bottom-full w-px h-8 bg-[#d8d0c2] -translate-x-1/2" />
                </div>
                <p className="text-[12px] font-medium text-[#2a251f] mt-2">{t('检验合格', 'Inspection Passed')}</p>
                <p className="text-[12px] font-medium text-[#2a251f]">{t('出货', '& Shipped')}</p>
                <div className="absolute top-[24px] left-[calc(50%+26px)] right-[calc(-50%+26px)] h-px bg-[#d8d0c2]" />
              </Reveal>

              {[
                { no: '25', name: t('成箱后QC抽检', 'Post-boxing QC Spot Check') },
                { no: '24', name: t('装箱', 'Boxing') },
                { no: '23', name: t('检针', 'Needle Detection') },
                { no: '22', name: t('QC抽检', 'QC Spot Check') },
                { no: '21', name: t('包装', 'Packaging') },
                { no: '20', name: t('挂吊牌', 'Tagging') },
                { no: '19', name: t('成品检验', 'Final Inspection') },
                { no: '18', name: t('复尺检验', 'Re-measurement') },
                { no: '17', name: t('整烫', 'Final Pressing') },
                { no: '16', name: t('半成品检验', 'Semi-finished QC') },
                { no: '15', name: t('平车（订标，纽扣，拉链等）', 'Overlock (Labels, Buttons, Zippers)') },
                { no: '14', name: t('小烫', 'Light Pressing') },
              ].map((step, i) => (
                <Reveal key={step.no} delay={(14 + i) * 40} className="flex-1 text-center relative group">
                  <div className="relative inline-block">
                    <div className="w-9 h-9 rounded-full border border-[#d8d0c2] bg-[#f8f5f0] flex items-center justify-center text-[12px] text-[#8a8177] group-hover:border-[#a8895b] group-hover:text-[#a8895b] transition-colors duration-300 mx-auto">
                      {step.no}
                    </div>
                    {i === 11 && <div className="absolute left-1/2 bottom-full w-px h-8 bg-[#d8d0c2] -translate-x-1/2" />}
                  </div>
                  <p className="text-[11px] text-[#8a8177] mt-3 leading-tight group-hover:text-[#2a251f] transition-colors duration-300 px-0.5">
                    {step.name}
                  </p>
                  {i < 11 && (
                    <div className="absolute top-[18px] left-[calc(50%+20px)] right-[calc(-50%+20px)] h-px bg-[#d8d0c2]" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 创新工艺与技术 —— 了解更多打开详情弹窗 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="INNOVATION" zh="创新工艺与技术" enTitle="Innovation & Technology" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {TECHS.map((tech, i) => (
              <Reveal key={tech.title} delay={i * 110}>
                <div className="group">
                  <button onClick={() => setActive(i)} className="zoom-img block w-full aspect-[4/3] bg-white">
                    <img src={tech.img} alt={lang === 'en' ? tech.enTitle : tech.title} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                  <h3 className="font-serif-d text-xl font-medium mt-5">{lang === 'en' ? tech.enTitle : tech.title}</h3>
                  <p className="text-[12px] leading-relaxed text-[#8a8177] mt-2">{lang === 'en' ? tech.enDesc : tech.desc}</p>
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
                <span key={p}
                className="font-serif-d text-2xl md:text-3xl font-medium tracking-wide text-[#2a251f] hover:text-[#a8895b] transition-colors cursor-default md:px-10 md:border-r last:border-0 border-[#d8d0c2]">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <TechModal tech={active !== null ? TECHS[active] : null} onClose={() => setActive(null)} closeLabel={t('关闭', 'Close')} lang={lang} />
  </>
);
}