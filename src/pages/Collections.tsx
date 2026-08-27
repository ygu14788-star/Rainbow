import { Reveal, Hero, SectionHead } from '../components/chrome';
import { useLang, useData } from '../i18n';

type Go = (page: string, param?: string) => void;

export default function Collections({ go }: { go: Go }) {
  const { t, lang } = useLang();
  const { COLLECTIONS, PRODUCTS, HERO_IMG, IMG } = useData();
  return (
    <>
      <Hero
        title={lang === 'en'
          ? <>Premium Quality <span className="text-[#a8895b]">&</span> Innovation</>
          : <>高端品质<span className="text-[#a8895b]">与</span>创新技术</>}
        lines={t('无起订量，快速响应|灵活交期与全面服务', 'No minimum order, rapid response|Flexible lead times and full service').split('|')}
        img={HERO_IMG} tall
      />

      {/* 产品系列 —— 点击进入对应系列页 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHead en="OUR COLLECTIONS" zh="产品系列" enTitle="Our Collections" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <button onClick={() => go('collections', c.id)} className="group block w-full text-left bg-white">
                <div className="p-6 pb-2">
                  <h3 className="font-serif-d text-2xl font-medium">{c.zh}</h3>
                  <p className="text-[13px] text-[#8a8177] mt-1">{c.en}</p>
                  <p className="text-[12px] leading-relaxed text-[#8a8177] mt-3 min-h-[54px]">{c.desc}</p>
                  <span className="arrow-link text-[12px] tracking-widest border-b border-[#2a251f] pb-0.5 mt-2">
                    {t('探索系列', 'Explore')} <span className="arr">→</span>
                  </span>
                </div>
                <div className="zoom-img aspect-[3/4] mt-4">
                  <img src={c.img} alt={c.zh} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 精选单品 —— 点击进入单品详情页 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="SELECTED PIECES" zh="精选单品" enTitle="Selected Pieces" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {PRODUCTS.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <button onClick={() => go('product', p.id)} className="group block w-full text-left">
                  <div className="zoom-img aspect-square bg-white">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-center text-[13px] mt-4 group-hover:text-[#a8895b] transition-colors">{p.name}</p>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-14">
            <button onClick={() => go('collections', 'all')} className="arrow-link text-[13px] tracking-[0.2em] border-b border-[#2a251f] pb-1">
              {t('查看全部产品', 'View All Products')} <span className="arr">→</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Lookbook —— 点击进入灵感集 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">LOOKBOOK</p>
          <h2 className="font-serif-d text-4xl md:text-5xl font-medium">Lookbook</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#6b6257]">{t('在自然与光影之间，感受针织的温度与质感。', 'Between nature and light, feel the warmth and texture of knitwear.')}</p>
          <button onClick={() => go('lookbook')} className="arrow-link text-[13px] tracking-[0.2em] border-b border-[#2a251f] pb-1 mt-8">
            {t('查看灵感集', 'View Lookbook')} <span className="arr">→</span>
          </button>
        </Reveal>
        <Reveal delay={150}>
          <button onClick={() => go('lookbook')} className="zoom-img block w-full aspect-[4/3]">
            <img src={IMG('lookbook.jpg')} alt="Lookbook" className="w-full h-full object-cover" loading="lazy" />
          </button>
        </Reveal>
      </section>

      {/* 材质故事 —— 跳转可持续性材料 */}
      <section className="bg-[#f2eee6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 md:order-1">
            <button onClick={() => go('sustainability')} className="zoom-img block w-full aspect-[4/3]">
              <img src={IMG('yarn.jpg')} alt={t('材质故事', 'Material Story')} className="w-full h-full object-cover" loading="lazy" />
            </button>
          </Reveal>
          <Reveal delay={150} className="order-1 md:order-2">
            <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">MATERIAL STORY</p>
            <h2 className="font-serif-d text-4xl md:text-5xl font-medium">{t('材质故事', 'Material Story')}</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b6257]">{t('从纤维到成衣，每一件都承载着对品质与匠心的坚持。', 'From fibre to finished garment, every piece carries our commitment to quality and craftsmanship.')}</p>
            <button onClick={() => go('sustainability')} className="arrow-link text-[13px] tracking-[0.2em] border-b border-[#2a251f] pb-1 mt-8">
              {t('探索更多', 'Discover More')} <span className="arr">→</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* 为什么选择闰博尔 */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHead en="WHY RAINBOW" zh="为什么选择闰博尔" enTitle="Why Rainbow" />
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            { icon: '◷', t: t('无起订量，快速响应', 'No MOQ, Rapid Response'), d: t('灵活的生产模式，快速响应您的需求，助力品牌灵活运作。', 'Flexible production that responds quickly to your needs, helping your brand stay agile.') },
            { icon: '♡', t: t('灵活交期与全面服务', 'Flexible Lead Times, Full Service'), d: t('提供灵活的交期安排与全方位服务，成为您值得信赖的合作伙伴。', 'Flexible scheduling and comprehensive service — a partner you can trust.') },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 120} className="text-center px-6">
              <span className="text-4xl text-[#a8895b]">{x.icon}</span>
              <h3 className="font-serif-d text-2xl font-medium mt-4">{x.t}</h3>
              <p className="text-[13px] leading-relaxed text-[#8a8177] mt-3">{x.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
