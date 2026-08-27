// ============================================================
// 英文版内容 —— 结构与 data.ts 完全对应，图片路径共用
// ============================================================

export { IMG, LOGO, NAV, HERO_IMG, HERO_CRAFT, HERO_STORY, HERO_CONTACT, CERT_DUNS, CERT_BSCI, PARTNERS, COLLABS, SOCIALS } from './data';
export type { PageKey } from './data';

import { IMG } from './data';

// ---------- Collections ----------
export const COLLECTIONS = [
  { id: 'fashion', img: IMG('col-fashion.jpg'), zh: 'Fashion', en: '时装系列', desc: 'Classic, warm and refined tailoring for elegant fashion knitwear.' },
  { id: 'golf', img: IMG('col-golf.jpg'), zh: 'Golf', en: '高尔夫系列', desc: 'Comfortable, stretchy fabrics crafted for the golf course.' },
  { id: 'ski', img: IMG('col-ski.jpg'), zh: 'Ski', en: '滑雪系列', desc: 'Warm, professional cold-weather gear that adapts to the severe cold.' },
  { id: 'trail', img: IMG('col-trail.jpg'), zh: 'Trail Running', en: '越野跑系列', desc: 'Moisture-wicking knitwear that moves with you on the trail.' },
];

export const PRODUCTS = [
  { id: 'turtleneck', img: IMG('p-turtleneck.jpg'), name: 'Cashmere Turtleneck', en: '羊绒高领毛衣', series: ['fashion', 'ski'],
    desc: 'Made from traceable cashmere yarn, the turtleneck hugs the neckline while ribbed knitting gives natural stretch — a timeless choice for autumn and winter.',
    crafts: [['Stitch', '2x2 Rib + Stockinette Body'], ['Gauge', '22 Gauge Fine'], ['Yarn', '100% Traceable Cashmere'], ['Technique', 'Fully Fashioned · Hand Linking']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-hands.jpg'), IMG('proc-wash.jpg')] },
  { id: 'zip', img: IMG('p-zip.jpg'), name: 'Merino Half-Zip', en: '美利奴半拉链毛衣', series: ['golf', 'trail'],
    desc: 'Knitted from extra-fine merino wool, the half-zip design regulates temperature during exercise, with ergonomic underarm cutting for free movement.',
    crafts: [['Stitch', 'Stockinette + Ribbed Cuffs'], ['Gauge', '22 Gauge Fine'], ['Yarn', '19.5μm Extra-Fine Merino'], ['Technique', 'Hand-Finished Zip Placket']],
    details: [IMG('m-wool.jpg'), IMG('proc-machine.jpg'), IMG('proc-wash.jpg')] },
  { id: 'vest', img: IMG('p-vest.jpg'), name: 'Classic Knit Vest', en: '经典保暖针织背心', series: ['fashion', 'golf'],
    desc: 'A classic V-neck silhouette, light and warm without bulk — perfect layered over shirts or turtlenecks, for both commuting and the course.',
    crafts: [['Stitch', 'Stockinette + V-Neck Shaping'], ['Gauge', '22 Gauge Fine'], ['Yarn', 'Wool-Cashmere Blend'], ['Technique', 'Fully Fashioned Neckline']],
    details: [IMG('m-wool.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'hoodie', img: IMG('p-hoodie.jpg'), name: 'Fine-Gauge Knit Hoodie', en: '细针距针织连帽衫', series: ['ski', 'trail'],
    desc: 'Knitted at a fine 22 Gauge, the fabric is smooth and gentle — comfortable for sports and everyday wear, light yet warm.',
    crafts: [['Stitch', 'Stockinette + Ribbed Trims'], ['Gauge', '22 Gauge Fine'], ['Yarn', 'Recycled Nylon Blend'], ['Technique', 'Fully Fashioned · Linked Seams']],
    details: [IMG('tech-3d.jpg'), IMG('m-nylon.jpg'), IMG('proc-machine.jpg')] },
  { id: 'cardigan', img: IMG('p-cardigan.jpg'), name: 'Combed Cardigan', en: '精梳开衫', series: ['fashion'],
    desc: 'Knitted from combed long-staple yarn and finished with natural horn buttons — a soft, draping outer layer for all seasons.',
    crafts: [['Stitch', 'Stockinette + Ribbed Placket'], ['Gauge', '22 Gauge Fine'], ['Yarn', 'Combed Cotton-Wool Blend'], ['Technique', 'Hand-Sewn Buttons · Linked Edges']],
    details: [IMG('m-cotton.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'vneck', img: IMG('p-vneck.jpg'), name: 'Fine-Gauge V-Neck', en: '细支针织上衣', series: ['fashion', 'golf'],
    desc: 'High-count fine knitting, thin as a second skin; the V-neck flatters the neckline, elegant worn alone or as a base layer.',
    crafts: [['Stitch', 'Fine Stockinette'], ['Gauge', '22 Gauge Fine'], ['Yarn', 'High-Count Cotton-Cashmere'], ['Technique', 'Fully Fashioned · Low-Temperature Setting']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-wash.jpg'), IMG('proc-machine.jpg')] },
    { id: 'skibase', img: IMG('ski1.png'), name: 'Ski Base Layer', en: '滑雪速干衣', series: ['ski'],
      desc: '15-gauge double-yarn knitting, crafted with 91% Merino superfine wool and elastic fiber blend. High stretch recovery, anti-shrinkage, machine washable, tight structure anti-pilling. Provides next-to-skin comfort and temperature regulation for skiing.',
      crafts: [['Stitch', '1P+1P Double Yarn'], ['Gauge', '15 Gauge (15GG)'], ['Yarn', 'SARMA TEC 2/60Nm, 91% Merino Superfine Wool + 9% Elastane'], ['Technique', 'Worsted 2-Ply · Anti-Shrinkage · High-Stretch Anti-Pilling']],
      details: [] },
    { id: 'skipants', img: IMG('ski2.png'), name: 'Ski Base Pants', en: '滑雪速干裤', series: ['ski'],
      desc: '15-gauge double-yarn knitting, crafted with 91% Merino superfine wool and elastic fiber blend. High stretch recovery, anti-shrinkage, machine washable, tight structure anti-pilling. Provides next-to-skin comfort and temperature regulation for skiing.',
      crafts: [['Stitch', '1P+1P Double Yarn'], ['Gauge', '15 Gauge (15GG)'], ['Yarn', 'SARMA TEC 2/60Nm, 91% Merino Superfine Wool + 9% Elastane'], ['Technique', 'Worsted 2-Ply · Anti-Shrinkage · High-Stretch Anti-Pilling']],
      details: [] },
      { id: 'golfset', img: IMG('golfset.jpg'), name: 'Diamond Pattern Golf Set', en: '菱格纹套装', series: ['golf'],
        desc: '14-gauge single jersey base with intarsia diamond pattern, 50% wool 50% acrylic blend, V-neck collar with ribbed trims, two-piece set.',
        crafts: [['Stitch', '14G 1P Stockinette + Intarsia'], ['Gauge', '14 Gauge'], ['Yarn', '50% Wool 50% Acrylic 2070-1.6'], ['Technique', 'Intarsia · V-Neck Collar · Ribbed Trims · Two-Piece Set']],
        details: [] },
      { id: 'handhook', img: IMG('handhook.jpg'), name: 'Hand-Crochet Mesh Top', en: '墨绿色手勾上衣', series: ['fashion'],
          desc: 'Handmade crochet open-work mesh in 1/5NM rayon yarn. Square-neck, fitted waist silhouette with hand-sewn sequins and sheer镂空 design.',
          crafts: [['Stitch', 'Handmade Crochet / Open-work Mesh'], ['Gauge', 'Handmade (No Machine Gauge)'], ['Yarn', '1/5NM 100% Rayon'], ['Technique', 'Hand Crochet · Sequin Embellishment · Square Neck · Sheer Mesh']],
          details: [] },
      { id: 'cardigan2', img: IMG('cardigan.jpg'), name: 'Oatmeal Sequin Cardigan', en: '燕麦色闪片开衫', series: ['fashion'],
            desc: '5-gauge open-work pointelle knit with 2P+1P2 yarn feeding. Cotton-linen-nylon-sequin blend in vertical镂空 stripes. Round-neck button-front cardigan.',
            crafts: [['Stitch', '2P+1P2 Pointelle Open-work + Rib Trim'], ['Gauge', '5 Gauge Coarse'], ['Yarn', '61% Cotton 30% Linen 5% Nylon 4% Sequin, 1/11 & 2/32 Mixed'], ['Technique', 'Pointelle Knit · Sequin Accent · Cardigan Structure · Linking · Ribbed Hem']],
            details: [] },
  ];

export const LOOKBOOK = [
  { img: IMG('lookbook.jpg'), caption: 'Between nature and light' },
  { img: IMG('col-fashion.jpg'), caption: 'The warmth of fashion' },
  { img: IMG('col-aya.jpg'), caption: 'Light layering' },
  { img: IMG('contact.jpg'), caption: 'Fabric in dialogue with stone' },
  { img: IMG('col-coperni.jpg'), caption: 'Sculptural silhouettes' },
  { img: IMG('yarn.jpg'), caption: 'It begins with fibre' },
  { img: IMG('col-loverboy.jpg'), caption: 'Playful knits' },
  { img: IMG('hero.jpg'), caption: 'Quiet luxury' },
];

// ---------- Craftsmanship ----------
export const PROCESS = [
  { img: IMG('yarn.jpg'), no: '01', title: 'Yarn Intake', desc: 'Premium yarns are carefully selected, inspected and stored — quality starts at the source.' },
  { img: IMG('real-machine.jpg'), no: '02', title: 'Flat Knitting', desc: 'High-precision flat knitting machines ensure stability and consistency in every piece.' },
  { img: IMG('proc-hands.jpg'), no: '03', title: 'Linking', desc: 'Experienced linking artisans sew each seam with precision, perfecting every detail.' },
  { img: IMG('proc-wash.jpg'), no: '04', title: 'Washing & Drying', desc: 'Advanced washing and drying give the fabric a soft touch and natural drape.' },
  { img: IMG('proc-pack.jpg'), no: '05', title: 'Packing & Shipping', desc: 'Elegant packaging and quality inspection ensure products arrive safely and on time.' },
];

export const TECHS = [
  { img: IMG('tech-3d.jpg'), title: '3D Seamless Knitting', desc: 'Innovative 3D seamless knitting — 22 GAUGE TECHNOLOGY, our innovation in fineness.',
    detail: '3D seamless knitting forms an entire garment in one pass on computerized flat knitting machines — no cutting, no sewing — completely eliminating side-seam friction and waste. Yarn utilization approaches 100%, and each garment goes from yarn to finished panel in a single process, reducing material loss while fitting like a second skin. We apply it to our sports collections and premium base-layer knits; it is also our technological foundation for cross-industry expansion into medical and automotive fields.' },
  { img: IMG('proc-wash.jpg'), title: '22 Gauge Craft', desc: 'Fine 22-gauge knitting achieves a lighter, more delicate touch — technology and craftsmanship in every stitch.',
    detail: 'The finer the gauge, the lighter and more delicate the fabric. 22 gauge means 22 needles per inch — a demanding test of yarn count, machine precision and operator experience. The resulting fabric is thin yet dense, soft yet structured, naturally draping and shape-retaining. Paired with high-count cashmere or extra-fine merino, it achieves a silk-like lustre and hand feel — the signature craft of premium fine-gauge knitwear.' },
  { img: IMG('real-machine.jpg'), title: 'Precision Equipment', desc: 'High-end knitting equipment ensures stability and consistency in every premium knitted piece.',
    detail: 'Our factory is equipped with fully automatic computerized flat knitting machines and precision linking equipment, digitally managed from tension control to density calibration. Every batch of knitted panels is tested item by item for gauge, weight and colour consistency, ensuring highly uniform quality across batches and orders. Regularly maintained and calibrated equipment, combined with a temperature- and humidity-controlled workshop, allows premium yarns to be knitted in their optimal state.' },
];

export const PROMISES = [
  { title: 'Quality First', desc: 'We always uphold the principle of "Quality First", crafting every knitted product with dedication.' },
  { title: 'Lifetime Warranty', desc: 'We provide a lifetime warranty on our products, letting quality accompany every important moment.' },
  { title: '99% Pass Rate', desc: 'We promise a factory pass rate of up to 99%, guarding every finished piece with rigorous standards.' },
];

// ---------- Brand Story ----------
export const TIMELINE = [
  { date: '2016.11.17', title: 'Founded', desc: 'Established on November 17, 2016, specializing in sweater design, production and service.' },
  { date: 'Today', title: 'Steady Progress', desc: 'Continuously deepening our knitwear expertise, focusing on craft innovation and quality, growing together with our brand partners.' },
];

export const VISION = [
  { period: '2–3 Years', desc: 'Break through the limits of the textile and apparel industry, expanding cross-industry applications of seamless knitting.' },
  { period: '3–5 Years', desc: 'Bring products for robotic skin, medical and automotive fields to market and mass production, becoming a technology leader in 3D seamless knitting and a new image of Chinese manufacturing.' },
];

export const MISSION = ['Create value for customers', 'Create value for the industry', 'Create value for a better life for our employees', 'Stay committed to quality'];

export const TEAM_STATS = [
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 10, suffix: '+', label: 'Technical Specialists' },
  { value: 10, suffix: '+ yrs', label: 'Avg. Industry Experience' },
];

// ---------- Sustainability ----------
export const COMMITMENTS = [
  { title: 'Eco-Friendly', desc: 'Reduce resource consumption and emissions, promote recycling, and protect ecological balance.' },
  { title: 'Responsible Materials', desc: 'Prioritize renewable, traceable raw materials with strict animal-welfare and land-health standards.' },
  { title: 'Green Manufacturing', desc: 'Build a green factory, continuously optimizing processes and energy structure to cut our carbon footprint.' },
  { title: 'People First', desc: 'Protect employee rights, health and safety, fostering a diverse, equal and inclusive workplace.' },
  { title: 'Win-Win Cooperation', desc: 'Work closely with suppliers, customers and industry partners to advance a sustainable value chain.' },
];

export const CERTS_ENV = [
  { img: IMG('cert-gots.png'), label: 'GOTS — Global Organic Textile Standard' },
  { img: IMG('cert-o100.png'), label: 'OCS 100 — Organic Content Standard' },
  { img: IMG('cert-ob.png'), label: 'OCS Blended — Organic Content Standard' },
  { img: IMG('cert-grs.png'), label: 'GRS — Global Recycled Standard' },
  { img: IMG('cert-ras.png'), label: 'RAS — Responsible Alpaca Standard' },
  { img: IMG('cert-rms.png'), label: 'RMS — Responsible Mohair Standard' },
  { img: IMG('cert-rws.png'), label: 'RWS — Responsible Wool Standard' },
  { img: IMG('cert-sfa.png'), label: 'SFA — Sustainable Fibre Alliance' },
];

export const MATERIALS = [
  { img: IMG('m-wool.jpg'), zh: 'Traceable Wool', en: '可追溯羊毛', desc: 'Sourced from RWS-certified farms, fully traceable from pasture to garment, safeguarding animal welfare and land health.' },
  { img: IMG('m-cashmere.jpg'), zh: 'Traceable Cashmere', en: '可追溯羊绒', desc: 'Premium cashmere from carefully selected goats — fine, soft fibres with transparent sourcing, combining luxury with ecological responsibility.' },
  { img: IMG('m-cotton.jpg'), zh: 'Organic Cotton', en: '有机棉', desc: 'GOTS / OCS certified organically grown cotton, free of harmful chemical residues — skin-friendly, breathable and kinder to the environment.' },
  { img: IMG('m-nylon.jpg'), zh: 'Recycled Nylon', en: '再生尼龙', desc: 'GRS-certified recycled fibre regenerated from reclaimed materials, reducing virgin resource consumption and carbon emissions.' },
];

export const IMPACT = [
  { value: -32, suffix: '%', label: 'Carbon emissions per product vs. 2021' },
  { value: -28, suffix: '%', label: 'Energy consumption per product vs. 2021' },
  { value: 78, suffix: '%', label: 'Renewable energy share' },
  { value: 92, suffix: '%', label: 'Certified eco-material usage' },
  { value: 100, suffix: '%', label: 'Compliant emissions & wastewater treatment' },
];

// ---------- Contact ----------
export const CONTACT = {
  address: 'Group 4, Shishe Village, Linhu Town, Wuzhong District, Suzhou, China',
  phone: '+86 180 2146 1929',
  email: 'sales@szrainbow.cn',
  hours: 'Mon–Fri 9:00 – 18:00 (UTC+8)',
};

export const FAQS = [
  { q: 'What products does Rainbow offer?', a: 'We specialize in premium fine-gauge knitwear across four collections — Fashion, Golf, Ski and Trail Running — including sweaters, cardigans, vests, hoodies and more. We also master 22-gauge 3D seamless knitting, offering a complete service from solutions and product development to production.' },
  { q: 'Can I request samples?', a: 'Yes. We support sample requests and prototyping. Send your requirements via the message form or email, and our team will reply within 1–2 business days.' },
  { q: 'What is the minimum order quantity?', a: 'We offer flexible production with no minimum order quantity, responding quickly to your needs and helping your brand operate with agility.' },
  { q: 'Do you offer private label or OEM/ODM services?', a: 'Yes, we provide complete OEM/ODM services including custom labels, packaging and pattern development — one-stop support from design to delivery.' },
  { q: 'Can you provide 3D seamless knitting?', a: 'Yes. We master 22-gauge 3D seamless knitting and provide a complete service from solutions and product development to manufacturing: one-piece forming with fewer seams, balancing wearing comfort and production efficiency.' },
  { q: 'What certifications do your products and factory hold?', a: 'Our factory holds environmental certifications including GOTS, OCS, RWS, RMS, RAS, GRS and SFA, as well as amfori BSCI social responsibility certification and Dun & Bradstreet registration.' },
  { q: 'How do we start working together?', a: 'Contact us via the form on this page, by email or by phone. We will assign a dedicated consultant to handle your requirements, quotation and sampling process.' },
];
