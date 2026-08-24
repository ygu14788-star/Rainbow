import { Reveal, Hero, SectionHead, CountUp } from '../components/chrome';
import { useLang, useData } from '../i18n';

export default function Story() {
  const { t } = useLang();
  const { TIMELINE, VISION, MISSION, COLLABS, PARTNERS, TEAM_STATS, HERO_STORY, IMG } = useData();
  return (
    <>
      <Hero
        title={<span className="tracking-[0.2em]">{t('品牌故事', 'Our Story')}</span>}
        sub="OUR STORY · DISCOVER OUR JOURNEY"
        lines={['Be Better, See Smarter.']}
        img={HERO_STORY} tall contain
      />

      {/* 品牌信念 */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <SectionHead en="OUR BELIEF" zh="Be Better, See Smarter." enTitle="Be Better, See Smarter." />
        <Reveal>
          <p className="text-[15px] leading-[2.2] text-[#6b6257]">
            {t('闰博尔致力于高端针织新品的智造，自成立以来，一直以匠心与品质为核心，工艺与美学为驱动，通过多年的研发与沉淀，与全球优质资源携手共创，为现代生活带来兼具质感与温度的针织体验。',
               'Rainbow is dedicated to the intelligent creation of premium knitwear. Since our founding, craftsmanship and quality have been our core, driven by technique and aesthetics. Through years of research and dedication, we work hand in hand with the world\'s finest resources to bring modern life a knitting experience of both texture and warmth.')}
          </p>
          <p className="text-[15px] leading-[2.2] text-[#6b6257] mt-6">
            {t('Be Better, See Smarter. —— 做更好的产品，见更远的未来。我们相信，正直的品格终将迎来时间的考验，以更好的标准要求自己，以更智慧的眼光看待制造，终将在风雨之后，见证彩虹的美好。',
               'Be Better, See Smarter. — Make better products, see further into the future. We believe integrity will stand the test of time. By holding ourselves to higher standards and viewing manufacturing with wiser eyes, we will witness the beauty of the rainbow after the storm.')}
          </p>
        </Reveal>
      </section>

      {/* 我们的历程 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <SectionHead en="OUR JOURNEY" zh="我们的历程" enTitle="Our Journey" />
          <div className="relative grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="hidden md:block absolute top-[9px] left-0 right-0 h-px bg-[#2a251f]" />
            {TIMELINE.map((tl, i) => (
              <Reveal key={tl.date} delay={i * 150} className={i === 1 ? 'md:text-right' : ''}>
                <div className="relative pt-8">
                  <span className={`absolute top-0 w-[7px] h-[7px] rounded-full bg-[#2a251f] ${i === 0 ? 'left-0 md:left-[8%]' : 'left-0 md:right-[8%] md:left-auto'}`} />
                  <p className="font-serif-d text-2xl font-medium">{tl.date}</p>
                  <h3 className="text-lg font-medium mt-2">{tl.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#8a8177] mt-3 max-w-xs md:inline-block">{tl.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 愿景 · 使命 */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHead en="OUR VISION & MISSION" zh="公司愿景 · 使命" enTitle="Vision & Mission" />
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] text-[#a8895b]">VISION</p>
            <h3 className="font-serif-d text-3xl font-medium mt-3">{t('公司愿景', 'Our Vision')}</h3>
            <p className="text-lg mt-1 mb-8">{t('跨界突破与技术引领', 'Cross-Industry Breakthroughs & Technical Leadership')}</p>
            <div className="space-y-8">
              {VISION.map(v => (
                <div key={v.period} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2a251f] group-hover:bg-[#a8895b] transition-colors" />
                    <span className="w-px flex-1 bg-[#e4ddd1]" />
                  </div>
                  <div className="pb-2">
                    <p className="font-medium">{v.period}</p>
                    <p className="text-[13px] leading-relaxed text-[#8a8177] mt-2">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[11px] tracking-[0.35em] text-[#a8895b]">MISSION</p>
            <h3 className="font-serif-d text-3xl font-medium mt-3">{t('公司使命', 'Our Mission')}</h3>
            <p className="text-lg mt-1 mb-8">{t('创造多元价值', 'Creating Diverse Value')}</p>
            <div className="space-y-6">
              {MISSION.map(m => (
                <div key={m} className="flex items-center gap-5 group">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2a251f] group-hover:bg-[#a8895b] transition-colors shrink-0" />
                  <p className="text-[15px] group-hover:translate-x-1 transition-transform">{m}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 设计师品牌合作 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="DESIGNER COLLABORATIONS" zh="设计师品牌合作" enTitle="Designer Collaborations" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COLLABS.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <div className="zoom-img relative aspect-[3/4] group cursor-pointer">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white font-serif-d text-xl md:text-2xl font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{c.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <p className="text-[14px] leading-relaxed text-[#6b6257] max-w-2xl mx-auto">
              {t('我们与国际知名设计师品牌保持长期合作，融合前沿设计理念与精湛制造工艺，共同打造兼具美学与品质的针织作品。',
                 'We maintain long-term partnerships with internationally renowned designer brands, combining cutting-edge design with exquisite manufacturing to create knitwear of both beauty and quality.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 优质原料合作伙伴 */}
      <section className="py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="PREMIUM MATERIAL PARTNERS" zh="优质原料合作伙伴" enTitle="Premium Material Partners" />
          <Reveal>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {PARTNERS.map(p => (
                <span key={p} className="font-serif-d text-2xl md:text-3xl font-medium text-[#2a251f] hover:text-[#a8895b] transition-colors cursor-default md:px-10 md:border-r last:border-0 border-[#e4ddd1]">{p}</span>
              ))}
            </div>
            <p className="text-[14px] leading-relaxed text-[#6b6257] max-w-2xl mx-auto mt-12">
              {t('我们与全球优质原料供应商建立长期合作，精选天然、环保、高性能的优质原料，从源头保障产品的卓越品质与可持续发展。',
                 'We build long-term partnerships with premium material suppliers worldwide, selecting natural, eco-friendly and high-performance materials to guarantee outstanding quality and sustainability from the source.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 我们的团队 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="OUR TEAM" zh="我们的团队" enTitle="Our Team" />
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="zoom-img aspect-[4/3]">
                <img src={IMG('team.jpg')} alt={t('我们的团队', 'Our team')} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="font-serif-d text-3xl font-medium">{t('匠心团队 · 追求卓越', 'A Dedicated Team, Pursuing Excellence')}</h3>
              <p className="text-[14px] leading-relaxed text-[#6b6257] mt-5 max-w-md">
                {t('我们拥有一支资历丰富、充满热情的团队，从设计研发、生产到运营品质管理，每一个环节精益求精，只为成就每一件有温度的针织作品。',
                   'Our experienced and passionate team pursues excellence at every step — from design and R&D to production and quality management — crafting knitwear with warmth in every piece.')}
              </p>
              <div className="flex gap-12 mt-10">
                {TEAM_STATS.map(s => (
                  <div key={s.label}>
                    <p className="font-serif-d text-4xl font-medium"><CountUp value={s.value} suffix={s.suffix} /></p>
                    <p className="text-[12px] text-[#8a8177] mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
