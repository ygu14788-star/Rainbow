import { useEffect } from 'react';
import { Reveal, SectionHead } from '../components/chrome';
import { useLang, useData } from '../i18n';

type Go = (page: string, param?: string) => void;

function Back({ go, label }: { go: Go; label: string }) {
  return (
    <button onClick={() => go('collections')} className="arrow-link text-[13px] tracking-[0.2em] text-[#8a8177] hover:text-[#2a251f] transition-colors">
      <span className="arr" style={{ transform: 'rotate(180deg)' }}>→</span> {label}
    </button>
  );
}

/* ---------- 系列页：展示该系列的产品 ---------- */
export function CollectionDetail({ id, go }: { id: string; go: Go }) {
  const { t } = useLang();
  const { COLLECTIONS, PRODUCTS } = useData();
  const col = COLLECTIONS.find(c => c.id === id);
  const items = PRODUCTS.filter(p => !col || p.series.includes(col.id));
  useEffect(() => window.scrollTo(0, 0), [id]);
  return (
    <div className="pt-[72px]">
      {/* 系列横幅 */}
      <div className="relative h-[46vh] min-h-[340px] overflow-hidden">
        <img src={col ? col.img : PRODUCTS[0].img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a251f]/55 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 max-w-[1400px] mx-auto px-6 md:px-12 pb-10 text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] opacity-80">{col ? col.en : 'ALL PRODUCTS'}</p>
            <h1 className="font-serif-d text-4xl md:text-6xl font-medium mt-2">{col ? col.zh : t('全部产品', 'All Products')}</h1>
            {col && <p className="mt-3 text-[14px] opacity-90 max-w-lg">{col.desc}</p>}
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">
        <Back go={go} label={t('返回产品系列', 'Back to Collections')} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <button onClick={() => go('product', p.id)} className="group block w-full text-left">
                <div className="zoom-img aspect-square bg-white">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-[14px] mt-4 group-hover:text-[#a8895b] transition-colors">{p.name}</p>
                <p className="text-[11px] text-[#8a8177] tracking-wider">{p.en}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 单品详情页：细节图 + 针织工艺 ---------- */
export function ProductDetail({ id, go }: { id: string; go: Go }) {
  const { t } = useLang();
  const { COLLECTIONS, PRODUCTS } = useData();
  const p = PRODUCTS.find(x => x.id === id);
  useEffect(() => window.scrollTo(0, 0), [id]);
  if (!p) return null;
  const seriesNames = p.series.map(s => COLLECTIONS.find(c => c.id === s)?.zh).filter(Boolean);
  return (
    <div className="pt-[72px] max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">
      <Back go={go} label={t('返回产品列表', 'Back to Products')} />
      <div className="grid md:grid-cols-2 gap-14 mt-10">
        <Reveal>
          <div className="zoom-img aspect-square bg-white md:sticky md:top-24">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex gap-2 mb-5">
            {seriesNames.map(s => (
              <span key={s} className="text-[11px] tracking-widest border border-[#d8d0c2] px-3 py-1 text-[#8a8177]">{s}</span>
            ))}
          </div>
          <h1 className="font-serif-d text-4xl md:text-5xl font-medium">{p.name}</h1>
          <p className="text-[13px] tracking-[0.25em] text-[#a8895b] mt-2">{p.en}</p>
          <div className="w-10 h-px bg-[#a8895b] my-7" />
          <p className="text-[14px] leading-[2] text-[#6b6257]">{p.desc}</p>

          <h2 className="text-[13px] tracking-[0.3em] text-[#8a8177] mt-10 mb-4">{t('针织工艺', 'KNITTING CRAFT')}</h2>
          <dl className="divide-y divide-[#e4ddd1] border-y border-[#e4ddd1]">
            {p.crafts.map(([k, v]) => (
              <div key={k} className="flex py-3.5 text-[13px]">
                <dt className="w-28 shrink-0 text-[#8a8177]">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <button onClick={() => go('contact')}
            className="mt-10 bg-[#2a251f] text-[#f8f5f0] px-10 py-3 text-[13px] tracking-[0.25em] hover:bg-[#a8895b] transition-colors duration-400">
            {t('咨询此产品', 'Inquire About This Product')}
          </button>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Lookbook 灵感集 ---------- */
export function Lookbook({ go }: { go: Go }) {
  const { t } = useLang();
  const { LOOKBOOK } = useData();
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="pt-[72px] max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">
      <Back go={go} label={t('返回系列产品', 'Back to Collections')} />
      <SectionHead en="LOOKBOOK" zh="灵感集" enTitle="Lookbook" />
      <div className="columns-2 md:columns-3 gap-5 [&>*]:mb-5">
        {LOOKBOOK.map((l, i) => (
          <Reveal key={l.img} delay={(i % 3) * 80}>
            <figure className="zoom-img group break-inside-avoid">
              <img src={l.img} alt={l.caption} className="w-full" loading="lazy" />
              <figcaption className="text-[12px] text-[#8a8177] mt-2 tracking-wider">{l.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
