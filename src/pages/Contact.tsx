import { useState } from 'react';
import { Reveal, Hero, SectionHead } from '../components/chrome';
import { useLang, useData } from '../i18n';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const { t, lang } = useLang();
  const { CONTACT, FAQS, SOCIALS, HERO_CONTACT, IMG } = useData();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { label: t('地址', 'Address'), value: CONTACT.address, icon: <path d="M24 44s-14-12-14-24a14 14 0 0128 0c0 12-14 24-14 24zm0-19a5 5 0 100-10 5 5 0 000 10z" /> },
    { label: t('电话', 'Phone'), value: CONTACT.phone, icon: <path d="M10 6h8l4 10-6 4a26 26 0 0012 12l4-6 10 4v8a4 4 0 01-4 4A34 34 0 016 10a4 4 0 014-4z" /> },
    { label: t('邮箱', 'Email'), value: CONTACT.email, icon: <><rect x="6" y="10" width="36" height="28" rx="2" /><path d="M6 12l18 14 18-14" /></> },
    { label: t('营业时间', 'Hours'), value: CONTACT.hours, icon: <><circle cx="24" cy="24" r="18" /><path d="M24 14v10l7 4" /></> },
  ];

  return (
    <>
      <Hero
        title={t('联系', 'Contact')}
        lines={t('让我们保持联系。|我们欢迎咨询、合作|以及共创非凡的机会。', "Let's stay in touch.|We welcome inquiries, collaborations,|and opportunities to create the extraordinary.").split('|')}
        img={HERO_CONTACT}
      />

      {/* 留言表单 */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-14">
        <Reveal>
          <p className="text-[13px] tracking-widest text-[#8a8177] mb-2">{t('获取联系', 'GET IN TOUCH')}</p>
          <h2 className="font-serif-d text-4xl md:text-5xl font-medium mb-10">{t('给我们留言', 'Leave Us a Message')}</h2>
          <form onSubmit={submit} className="space-y-7">
            {[
              { label: t('姓名 *', 'Name *'), type: 'text', ph: t('请输入姓名', 'Your name'), req: true },
              { label: t('邮箱 *', 'Email *'), type: 'email', ph: t('请输入邮箱', 'Your email'), req: true },
              { label: t('电话', 'Phone'), type: 'tel', ph: t('请输入电话号码', 'Your phone number'), req: false },
            ].map(f => (
              <div key={f.label}>
                <label className="text-[13px] text-[#6b6257]">{f.label}</label>
                <input type={f.type} placeholder={f.ph} required={f.req}
                  className="w-full mt-2 bg-transparent border-b border-[#d8d0c2] focus:border-[#2a251f] outline-none py-2.5 text-[14px] placeholder:text-[#b6ada0] transition-colors" />
              </div>
            ))}
            <div>
              <label className="text-[13px] text-[#6b6257]">{t('留言 *', 'Message *')}</label>
              <textarea placeholder={t('请输入留言', 'Your message')} required rows={4}
                className="w-full mt-2 bg-transparent border-b border-[#d8d0c2] focus:border-[#2a251f] outline-none py-2.5 text-[14px] placeholder:text-[#b6ada0] resize-none transition-colors" />
            </div>
            <button type="submit"
              className="bg-[#2a251f] text-[#f8f5f0] px-10 py-3 text-[13px] tracking-[0.25em] hover:bg-[#a8895b] transition-colors duration-400">
              {sent ? t('已发送 ✓', 'Sent ✓') : t('发送留言', 'Send Message')}
            </button>
            {sent && <p className="text-[13px] text-[#a8895b]">{t('感谢您的留言，我们会尽快与您联系。', 'Thank you for your message. We will get back to you shortly.')}</p>}
          </form>
        </Reveal>
        <Reveal delay={150}>
          <div className="zoom-img aspect-[4/3] md:sticky md:top-28">
            <img src={IMG('contact.jpg')} alt={t('联系我们', 'Contact us')} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* 公司联系信息 */}
      <section className="bg-[#f2eee6] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHead en="CONTACT INFORMATION" zh="公司联系信息" enTitle="Contact Information" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {info.map((x, i) => (
              <Reveal key={x.label} delay={i * 90} className="text-center group">
                <svg viewBox="0 0 48 48" className="w-11 h-11 mx-auto text-[#2a251f] group-hover:text-[#a8895b] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  {x.icon}
                </svg>
                <p className="text-[14px] font-medium mt-4">{x.label}</p>
                <p className="text-[13px] text-[#8a8177] mt-2 leading-relaxed">{x.value}</p>
              </Reveal>
            ))}
          </div>

          {/* 地图 */}
          <Reveal className="mt-16">
            <p className="text-[13px] tracking-widest text-[#8a8177] mb-5">{t('找到我们', 'FIND US')}</p>
            <div className="relative aspect-[16/6] bg-[#ece7de] overflow-hidden">
              <svg viewBox="0 0 800 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="800" height="300" fill="#ece7de" />
                <g stroke="#dcd4c6" strokeWidth="10" fill="none">
                  <path d="M0 90 Q200 60 400 110 T800 90" /><path d="M0 220 Q260 180 520 230 T800 200" />
                  <path d="M180 0 Q200 150 150 300" /><path d="M520 0 Q500 140 560 300" /><path d="M700 0 Q680 160 720 300" />
                </g>
                <g stroke="#e4ddd1" strokeWidth="3" fill="none">
                  <path d="M0 150 H800" /><path d="M340 0 V300" /><path d="M60 0 Q100 150 60 300" /><path d="M0 260 Q400 230 800 260" />
                </g>
                <text x="430" y="105" fontSize="13" fill="#b6ada0" letterSpacing="4">{lang === 'en' ? 'HUANTAIHU AVENUE' : '环 太 湖 大 道'}</text>
                <text x="190" y="270" fontSize="12" fill="#b6ada0">{lang === 'en' ? 'SHISHE VILLAGE' : '石舍村'}</text>
              </svg>
              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <span className="w-11 h-11 rounded-full bg-[#2a251f] text-[#f8f5f0] font-serif-d text-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2.4s' }}>R</span>
                <span className="w-2 h-2 rotate-45 bg-[#2a251f] -mt-1" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <SectionHead en="FAQ" zh="常见问题" enTitle="Frequently Asked Questions" />
        <div>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className={`faq-item border-b border-[#e4ddd1] ${openFaq === i ? 'open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 text-left group">
                  <span className={`text-[15px] transition-colors ${openFaq === i ? 'text-[#a8895b]' : 'group-hover:text-[#a8895b]'}`}>{f.q}</span>
                  <span className="plus text-xl text-[#8a8177] shrink-0 ml-6">+</span>
                </button>
                <div className="faq-body"><div>
                  <p className="pb-6 text-[13px] leading-relaxed text-[#8a8177]">{f.a}</p>
                </div></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 关注我们 */}
      <section className="bg-[#f2eee6] py-16 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.35em] text-[#a8895b] mb-3">FOLLOW US</p>
          <h2 className="font-serif-d text-3xl font-medium mb-8">{t('关注我们', 'Follow Us')}</h2>
          <div className="flex justify-center gap-10">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} target={s.url === '#' ? undefined : '_blank'} rel="noreferrer"
                onClick={s.url === '#' ? (e => e.preventDefault()) : undefined}
                className="text-[13px] tracking-widest text-[#6b6257] hover:text-[#a8895b] hover:-translate-y-0.5 transition-all">{s.name}</a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
