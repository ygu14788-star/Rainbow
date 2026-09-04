import { Reveal, SectionHead, CountUp } from '../components/chrome';
import { useLang, useData } from '../i18n';
import type { Go } from '../App';

const ICONS = [
  <path key="0" d="M8 40C8 22 22 8 40 8c0 18-14 32-32 32zm0 0c4-8 10-14 18-18" />,
  <path key="1" d="M24 6l7 12 7-2-2 8 8 4-8 4 2 8-7-2-7 12-7-12-7 2 2-8-8-4 8-4-2-8 7 2 7-12z M24 18v12 M18 24h12" />,
  <path key="2" d="M10 40V20l8-6v-6h4v4l8 6v22 M20 40v-10h8v10" />,
  <path key="3" d="M16 18a5 5 0 100-10 5 5 0 000 10zm16 0a5 5 0 100-10 5 5 0 000 10zM6 40v-6a8 8 0 0114-5m8 5a8 8 0 0114 5v6" />,
  <path key="4" d="M24 42s-16-9-16-21a8 8 0 0114-5l2 2 2-2a8 8 0 0114 5c0 12-16 21-16 21z" />,
];

export default function Sustainability({ go }: { go: Go }) {
  const { t } = useLang();
  const { COMMITMENTS, CERTS_ENV, CERT_BSCI, CERT_DUNS, MATERIALS, IMPACT, IMG } = useData();
  return (
    <>
      {/* 全幅自然首屏 */}
      <header className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <img src={IMG('nature.jpg')} alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
        {/* 极浅的暗色渐变，仅用于衬托白色文字 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f5f0] to-transparent" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <Reveal>
            <h1 className="font-serif-d text-5xl md:text-7xl font-medium tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">SUSTAINABILITY</h1>
            <p className="mt-4 text-lg italic font-serif-d text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">From Nature, With Respect.</p>
            <p className="mt-6 text-[15px] tracking-wide text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              {t('源于自然，敬畏自然', 'Born of nature, in respect of nature')}<br />
              {t('为地球，为人，为未来', 'For the planet, for people, for the future')}
            </p>
          </Reveal>
        </div>
      </header>

      {/* 打造绿色工厂 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">OUR VISION</p>
          <h2 className="font-serif-d text-4xl md:text-5xl font-medium">{t('打造绿色工厂', 'Building a Green Factory')}</h2>
          <div className="w-10 h-px bg-[#a8895b] my-8" />
          <p className="text-[14px] leading-[2] text-[#6b6257]">
            {t('闰博尔致力于高端精纺针织品的制造，自成立以来，一直以建立一个绿色工厂为愿景。我们将可持续发展融入产品全生命周期，从原料选择、生产到流通包装运输，以负责任的态度，守护自然与未来。',
               'Rainbow is dedicated to manufacturing premium fine-gauge knitwear, and since our founding, building a green factory has been our vision. We integrate sustainability into the entire product lifecycle — from material selection and production to packaging and logistics — protecting nature and the future with a responsible attitude.')}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="zoom-img aspect-[4/3]">
            <img src={IMG('factory.jpg')} alt={t('绿色工厂', 'Green factory')} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* 环保承诺 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="OUR COMMITMENT" zh="环保承诺" enTitle="Our Commitment" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="text-center">
                <svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto text-[#a8895b]" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i]}
                </svg>
                <h3 className="text-[15px] font-medium mt-4">{c.title}</h3>
                <p className="text-[12px] leading-relaxed text-[#8a8177] mt-2">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 环境认证 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <SectionHead en="ENVIRONMENTAL CERTIFICATIONS" zh="环境认证" enTitle="Environmental Certifications" />
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {CERTS_ENV.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <div className="group flex flex-col items-center gap-3 cursor-default" title={c.label}>
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-[#e4ddd1] shadow-[0_2px_12px_rgba(42,37,31,0.06)] flex items-center justify-center p-4 transition-all duration-500 group-hover:shadow-[0_8px_24px_rgba(42,37,31,0.12)] group-hover:-translate-y-1 group-hover:border-[#a8895b]/60">
                  <img src={c.img} alt={c.label} className="max-w-full max-h-full object-contain" width="128" height="128" />
                </div>
                <p className="text-[11px] tracking-wide text-[#8a8177] group-hover:text-[#2a251f] transition-colors duration-500 max-w-[140px]">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-[13px] text-[#8a8177]">{t('我们通过权威的环境认证，确保从原料到成品的每一个环节符合国际可持续标准。', 'Certified by leading authorities, every step from raw material to finished product meets international sustainability standards.')}</p>
        </Reveal>
      </section>

      {/* 社会责任认证 */}
      <section className="bg-[#f2eee6] py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="SOCIAL RESPONSIBILITY" zh="全面认证与社会责任" enTitle="Certifications & Social Responsibility" />
          <Reveal>
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
              <div className="bg-white rounded-2xl border border-[#e4ddd1] shadow-[0_2px_12px_rgba(42,37,31,0.06)] px-10 py-8 flex flex-col items-center justify-center gap-4 min-w-[280px]">
                <img src={CERT_BSCI} alt="amfori BSCI" className="h-12 md:h-14 w-auto" />
                <div>
                  <p className="text-[13px] text-[#6b6257]">{t('欧盟 amfori BSCI 商界社会责任倡议', 'amfori BSCI — Business Social Compliance Initiative')}</p>
                  <p className="text-[12px] tracking-wider text-[#8a8177] mt-1">{t('编码：', 'Code: ')}156-005247-000</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-[#e4ddd1] shadow-[0_2px_12px_rgba(42,37,31,0.06)] px-10 py-8 flex flex-col items-center justify-center gap-4 min-w-[280px]">
                <img src={CERT_DUNS} alt="D-U-N-S Registered" className="h-16 md:h-20 w-auto" />
                <div>
                  <p className="text-[13px] text-[#6b6257]">{t('邓白氏企业认证 D-U-N-S® Registered', 'Dun & Bradstreet D-U-N-S® Registered')}</p>
                  <p className="text-[12px] tracking-wider text-[#8a8177] mt-1">{t('编码：', 'Code: ')}53-996-1254</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-[14px] leading-relaxed text-[#6b6257] max-w-xl mx-auto mt-6">
              {t('我们通过社会责任认证，保障员工权益，推动公平、透明、负责任的供应链管理。',
                 'Through social responsibility certifications, we protect employee rights and promote fair, transparent and responsible supply chain management.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 社会责任认证 */}
            <section className="bg-[#f2eee6] py-20 md:py-24 text-center">
        ...
      </section>
      {/* 彩虹公益·暖冬项目 */}
      <section className="bg-[#f8f5f0] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* 左侧文字 */}
            <Reveal>
              <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">RAINBOW CHARITY · WARM WINTER PROJECT</p>
              <h2 className="font-serif-d text-4xl md:text-5xl font-medium">彩虹公益·暖冬项目</h2>
              <p className="text-[15px] text-[#6b6257] mt-4 italic">温暖童心，守护冬日暖阳</p>
              <div className="w-10 h-px bg-[#a8895b] my-8" />
              <p className="text-[14px] leading-[2] text-[#6b6257]">
                {t('闰博尔积极投身公益事业，每年冬季为偏远地区的孩子们捐赠亲手编织的帽子、围巾与手套。一针一线，承载着我们对下一代的关爱与温度。我们坚信，企业的价值不仅在于创造优质的产品，更在于回馈社会、传递温暖。',
                   'Rainbow is actively committed to public welfare. Every winter, we donate hand-knitted hats, scarves and gloves to children in remote areas. Every stitch carries our care and warmth for the next generation. We believe that a company\'s value lies not only in creating excellent products, but also in giving back to society and spreading warmth.')}
              </p>
              <p className="text-[13px] leading-relaxed text-[#8a8177] mt-4">
                {t('自项目启动以来，已累计为超过 3,000 名儿童送去暖冬物资。未来，我们将继续扩大公益版图，让针织的温度触达更多需要帮助的角落。',
                   'Since its launch, the project has delivered warm winter supplies to over 3,000 children. We will continue to expand our charitable reach, letting the warmth of knitwear touch more corners in need.')}
              </p>
            </Reveal>
            {/* 右侧图片 */}
            <Reveal delay={140}>
              <div className="zoom-img aspect-[4/3]">
                <img src={IMG('charity.jpg')} alt={t('彩虹公益暖冬项目', 'Rainbow Charity Warm Winter Project')} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-[11px] text-[#8a8177] mt-3 text-center tracking-wide">{t('孩子们戴上闰博尔捐赠的针织帽与围巾', 'Children wearing Rainbow-donated knit hats and scarves')}</p>
            </Reveal>
          </div>
        </div>
      </section>
      {/* 可持续材料 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-14 items-start">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">SUSTAINABLE MATERIALS</p>
            <h2 className="font-serif-d text-4xl font-medium">{t('可持续材料', 'Sustainable Materials')}</h2>
            <div className="w-10 h-px bg-[#a8895b] my-7" />
            <p className="text-[14px] leading-relaxed text-[#6b6257]">
              {t('我们甄选优质天然与再生纤维，结合创新科技，打造轻盈、舒适、耐久的高端针织产品。每一种材料都可追溯、可验证，并通过国际权威认证。',
                 'We select premium natural and recycled fibres combined with innovative technology to create light, comfortable and durable premium knitwear. Every material is traceable, verifiable and internationally certified.')}
            </p>
            <p className="text-[13px] leading-relaxed text-[#8a8177] mt-4">{t('将鼠标悬停在材料卡片上，了解每种材料的来源与特性。', 'Hover over a material card to learn about its origin and properties.')}</p>
            <button onClick={() => go('craftsmanship')} className="arrow-link text-[13px] tracking-[0.2em] border-b border-[#2a251f] pb-1 mt-8">
              {t('了解我们的工艺', 'Explore Our Craft')} <span className="arr">→</span>
            </button>
          </Reveal>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.zh} delay={i * 90}>
                <div className="group relative overflow-hidden aspect-[3/4] cursor-default">
                  <img src={m.img} alt={m.zh} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {/* 底部常显名称 */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2a251f]/80 via-[#2a251f]/30 to-transparent p-4 pt-12 transition-opacity duration-500 group-hover:opacity-0">
                    <p className="text-[13px] font-medium text-white">{m.zh}</p>
                    <p className="text-[10px] tracking-widest text-white/70">{m.en}</p>
                  </div>
                  {/* 悬停显示详情 */}
                  <div className="absolute inset-0 bg-[#2a251f]/85 p-5 flex flex-col justify-end opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-[14px] font-medium text-white">{m.zh}</p>
                    <p className="text-[10px] tracking-widest text-[#a8895b] mt-1">{m.en}</p>
                    <div className="w-6 h-px bg-[#a8895b] my-3" />
                    <p className="text-[11px] leading-relaxed text-white/80">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 可持续数据 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="OUR IMPACT" zh="可持续数据" enTitle="Our Impact" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
            {IMPACT.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <p className="font-serif-d text-4xl md:text-5xl font-medium text-[#2a251f]">
                  {s.value < 0 && '−'}<CountUp value={Math.abs(s.value)} suffix={s.suffix} />
                </p>
                <p className="text-[12px] leading-relaxed text-[#8a8177] mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <p className="text-[12px] text-[#8a8177]">{t('数据基于 2024 年内部统计，相比基准年 2021 年。', 'Figures based on 2024 internal statistics, against the 2021 baseline year.')}</p>
            <button onClick={() => go('contact')} className="arrow-link text-[13px] tracking-[0.2em] border-b border-[#2a251f] pb-1 mt-6">
              {t('联系我们索取完整可持续报告', 'Contact Us for the Full Sustainability Report')} <span className="arr">→</span>
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
