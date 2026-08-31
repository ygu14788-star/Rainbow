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
  { id: 'seamless', img: IMG('seamless.jpg'), name: '22G Macel Hemp Lyocell Wholegarment Seamless Sports Bra', en: '22针全成型汉麻莱赛尔平针无缝运动背心', series: ['fashion', 'trail'],
    desc: '22-gauge ultra-fine macel hemp lyocell with spandex, wholegarment seamless knit. Tank-style U-neck bodysuit cut, 47g ultra-light body-hugging fit, breathable and skin-friendly, for sports and spring-summer layering or solo wear.',
    crafts: [['Stitch', '1P Wholegarment Seamless'], ['Gauge', '22 Gauge'], ['Yarn', '98% Macel Hemp Lyocell 2% Spandex'], ['Technique', 'Hemp-Lyocell Blend · Wholegarment Seamless · Tank Bodysuit · U-Neck Body Fit']],
    details: [] },
  { id: 'sequin-dress', img: IMG('sequin-dress.jpg'), name: 'Hand-Crochet Sequin Dress', en: '手钩亮片裙', series: ['fashion'],
    desc: 'Handmade crochet mesh dress in 1/5NM rayon and 1/7.5NM viscose. Spaghetti-strap, square-neck, bodycon fit with iridescent paillette sequins throughout.',
    crafts: [['Stitch', 'Handmade Crochet Mesh'], ['Gauge', 'Handmade (No Machine Gauge)'], ['Yarn', '1/5NM 100% Rayon + 1/7.5NM 100% Viscose'], ['Technique', 'Hand Crochet · Sequin Embellishment · Spaghetti Strap · Sheer Mesh']],
    details: [] },
  { id: 'golfset', img: IMG('golfset.jpg'), name: 'Diamond Pattern Golf Set', en: '菱格纹套装', series: ['golf'],
    desc: '14-gauge single jersey base with intarsia diamond pattern, 50% wool 50% acrylic blend, V-neck collar with ribbed trims, two-piece set.',
    crafts: [['Stitch', '14G 1P Stockinette + Intarsia'], ['Gauge', '14 Gauge'], ['Yarn', '50% Wool 50% Acrylic 2070-1.6'], ['Technique', 'Intarsia · V-Neck Collar · Ribbed Trims · Two-Piece Set']],
    details: [] },
  { id: 'cardigan2', img: IMG('cardigan.jpg'), name: 'Oatmeal Sequin Cardigan', en: '燕麦色闪片开衫', series: ['fashion'],
        desc: '5-gauge open-work pointelle knit with 2P+1P2 yarn feeding. Cotton-linen-nylon-sequin blend in vertical镂空 stripes. Round-neck button-front cardigan.',
        crafts: [['Stitch', '2P+1P2 Pointelle Open-work + Rib Trim'], ['Gauge', '5 Gauge Coarse'], ['Yarn', '61% Cotton 30% Linen 5% Nylon 4% Sequin, 1/11 & 2/32 Mixed'], ['Technique', 'Pointelle Knit · Sequin Accent · Cardigan Structure · Linking · Ribbed Hem']],
        details: [] },
  { id: 'turtleneck', img: IMG('p-turtleneck.jpg'), name: 'Cashmere Turtleneck', en: '羊绒高领毛衣', series: ['fashion', 'ski'],
    desc: 'Made from traceable cashmere yarn, the turtleneck hugs the neckline while ribbed knitting gives natural stretch — a timeless choice for autumn and winter.',
    crafts: [['Stitch', '2x2 Rib + Stockinette Body'], ['Gauge', '22 Gauge Fine'], ['Yarn', '100% Traceable Cashmere'], ['Technique', 'Fully Fashioned · Hand Linking']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-hands.jpg'), IMG('proc-wash.jpg')] },
  { id: 'coldchange', img: IMG('coldchange.jpg'), name: '16G Super-fine Merino Cold-Sensitive Color-Changing Down Jacket', en: '16针超细美丽奴羊毛冷感变色羽绒服', series: ['ski'],
      desc: '16-gauge superfine Merino wool combined with cold-sensitive color-changing yarn, presenting unique color shifts in low temperatures. Quilted structure with zip front, lightweight and warm.',
      crafts: [['Stitch', '1P Stockinette + Rib Trim'], ['Gauge', '16 Gauge'], ['Yarn', '100% Super-fine Merino Wool / 100% Polyester Cold-Sensitive Yarn'], ['Technique', 'Superfine Merino Knit · Cold-Sensitive Color Change · Quilted Padding · Zip Front']],
      details: [] },
  { id: 'zip', img: IMG('p-zip.jpg'), name: 'Merino Half-Zip', en: '美利奴半拉链毛衣', series: ['fashion'],
    desc: 'Knitted from extra-fine merino wool, the half-zip design regulates temperature during exercise, with ergonomic underarm cutting for free movement.',
    crafts: [['Stitch', 'Stockinette + Ribbed Cuffs'], ['Gauge', '22 Gauge Fine'], ['Yarn', '19.5μm Extra-Fine Merino'], ['Technique', 'Hand-Finished Zip Placket']],
    details: [IMG('m-wool.jpg'), IMG('proc-machine.jpg'), IMG('proc-wash.jpg')] },
  { id: 'vest', img: IMG('p-vest.jpg'), name: 'Classic Knit Vest', en: '经典保暖针织背心', series: ['fashion', 'golf'],
    desc: 'A classic V-neck silhouette, light and warm without bulk — perfect layered over shirts or turtlenecks, for both commuting and the course.',
    crafts: [['Stitch', 'Stockinette + V-Neck Shaping'], ['Gauge', '22 Gauge Fine'], ['Yarn', 'Wool-Cashmere Blend'], ['Technique', 'Fully Fashioned Neckline']],
    details: [IMG('m-wool.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'hoodie', img: IMG('p-hoodie.jpg'), name: 'Fine-Gauge Knit Hoodie', en: '细针距针织连帽衫', series: ['fashion'],
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
  { id: 'handhook', img: IMG('handhook.jpg'), name: 'Hand-Crochet Mesh Top', en: '墨绿色手勾上衣', series: ['fashion'],
        desc: 'Handmade crochet open-work mesh in 1/5NM rayon yarn. Square-neck, fitted waist silhouette with hand-sewn sequins and sheer镂空 design.',
        crafts: [['Stitch', 'Handmade Crochet / Open-work Mesh'], ['Gauge', 'Handmade (No Machine Gauge)'], ['Yarn', '1/5NM 100% Rayon'], ['Technique', 'Hand Crochet · Sequin Embellishment · Square Neck · Sheer Mesh']],
        details: [] },
  { id: 'jumpsuit', img: IMG('jumpsuit.jpg'), name: '15G Seamless Wool Recycled Nylon Camo Jumpsuit', en: '15针无缝羊毛再生尼龙平针迷彩拼接拉链连体衣', series: ['ski'],
          desc: '15-gauge seamless wool-recycled nylon blend with multi-stitch camo patchwork. Zip mock-neck jumpsuit cut, 558g body-hugging warmth for skiing and outdoor sports.',
          crafts: [['Stitch', 'Seamless Jacquard + Rib + Multi-Stitch Camo Patchwork'], ['Gauge', '15 Gauge'], ['Yarn', '65% Wool 35% Recycled Nylon'], ['Technique', 'Wool-Nylon Blend · Camo Multi-Stitch Patchwork · Zip Mock-Neck Jumpsuit · Body-Hugging Cut']],
          details: [] },
  { id: 'tiedye', img: IMG('tie-dye.jpg'), name: '15G Seamless Wool Recycled Nylon Tie-Dye High Neck Pullover', en: '15针无缝一体成型羊毛再生尼龙提花扎染高领紧身衣', series: ['ski', 'fashion'],
          desc: '15-gauge seamless wholegarment wool-recycled nylon blend with hand tie-dye technique creating unique black-and-white blur effects. High-neck body-hugging cut, lightweight warmth for layering or solo wear.',
          crafts: [['Stitch', 'Stockinette + Ribbed High Neck/Cuffs'], ['Gauge', '15 Gauge'], ['Yarn', '100% Wool 100% Recycled Nylon (2/48 & 1/38 Double Yarn)'], ['Technique', 'Wool-Nylon Blend · Hand Tie-Dye · High-Neck Body Fit · Ribbed Trim']],
          details: [] },
  { id: 'golfjacket', img: IMG('golfjacket.jpg'), name: '18G Wool PBT Blend Hooded Zip Golf Jacket', en: '18针羊毛PBT混纺平针连帽拉链高尔夫外套', series: ['golf', 'fashion'],
            desc: '18-gauge fine wool PBT blend with 17.5 micron superfine wool for a soft, skin-friendly touch. Hooded zip structure with functional pockets, perfect for golf and casual wear.',
            crafts: [['Stitch', '3P Plain Knit + Rib Trim'], ['Gauge', '18 Gauge'], ['Yarn', '85% Wool (17.5μm) 15% PBT'], ['Technique', 'Wool-PBT Blend · Hooded Zip · Functional Pockets · Ribbed Cuffs']],
            details: [] },
  { id: 'vent', img: IMG('vent.jpg'), name: '22G Viscose Polyethylene Underarm Vent Trail Seamless Ultra Light-Weight Tee', en: '22针全成型粘胶聚乙烯平针腋下挑孔透气超轻越野跑无缝T恤', series: ['trail'],
      desc: '22-gauge ultra-fine viscose-polyethylene blend, wholegarment seamless knit. Underarm pointelle vent structure designed for trail running, enhancing heat dissipation and moisture wicking. 61g ultra-light semi-sheer, slim-fit short sleeves, cool-to-touch, for high-intensity outdoor sports.',
      crafts: [['Stitch', '1P Stockinette + Underarm Pointelle Vent + Wholegarment Seamless'], ['Gauge', '22 Gauge'], ['Yarn', '50% Viscose 50% Polyethylene'], ['Technique', 'Viscose-Polyethylene Blend · Wholegarment Seamless · Underarm Pointelle Vent · Ultra-Light Semi-Sheer · Trail Running Cut']],
      details: [] },
  { id: 'side-vent', img: IMG('side-vent.jpg'), name: '22G Recycled Cool Polyester Cotton Pattern Knit Side Vent Trail Seamless Ultra Light-Weight Vest', en: '22针全成型再生凉感聚酯棉平针花纹组织侧身挑孔透气越野跑无缝超轻背心', series: ['trail'],
      desc: '22-gauge ultra-fine recycled cool polyester-cotton blend, wholegarment seamless knit. Front features pattern stitch variation, side pointelle vent structure designed for trail running, enhancing heat dissipation and moisture wicking. Ultra-light 90g breathable, sleeveless vest cut, for high-intensity outdoor sports.',
      crafts: [['Stitch', '1P Stockinette + Front Pattern Stitch + Side Pointelle Vent + Wholegarment Seamless'], ['Gauge', '22 Gauge'], ['Yarn', '52% Recycled Cool Polyester 48% Cotton'], ['Technique', 'Recycled Cool Polyester-Cotton Blend · Wholegarment Seamless · Front Pattern Stitch · Side Pointelle Vent · Trail Running Cut']],
      details: [] },
      { id: 'cashmere-crew', img: IMG('cashmere.jpg'), name: '18G 100% Cashmere Ribbed Slim Fit Crew Neck Sweater', en: '18针全羊绒罗纹修身圆领针织衫', series: ['fashion'],
        desc: '18-gauge fine 100% cashmere, 3/68NM high-count worsted. Ribbed slim fit contours the body, 155g lightweight warmth. Crew neck long sleeves, a premium daily essential for autumn and winter.',
        crafts: [['Stitch', '1P Rib Knit + Ribbed Crew Neck/Cuffs/Hem'], ['Gauge', '18 Gauge'], ['Yarn', '100% Cashmere (3/68NM)'], ['Technique', 'High-Count Worsted Cashmere · Ribbed Slim Fit · Crew Neck Long Sleeve · Ribbed Trim']],
        details: [] },
      { id: 'steel-top', img: IMG('steel.jpg'), name: '14G Viscose Steel Yarn Plain Knit Sheer Long Sleeve Top', en: '14针粘胶金属丝平针轻薄光泽感长袖上衣', series: ['fashion'],
        desc: '14-gauge fine viscose-steel yarn blend, 18g ultra-lightweight semi-sheer. Steel yarn adds unique luster and structure. Crew neck relaxed long sleeve, perfect for spring-summer layering or solo wear.',
        crafts: [['Stitch', '1P Stockinette + Ribbed Crew Neck/Cuffs'], ['Gauge', '14 Gauge'], ['Yarn', '67% Viscose 33% Steel Yarn'], ['Technique', 'Viscose-Steel Blend · Ultra-Light Semi-Sheer · Lustrous Fabric · Relaxed Long Sleeve']],
        details: [] },
      { id: 'merino-tee', img: IMG('merino-tee.jpg'), name: '22G Superfine Merino Wool Anti-Shrinkage Short Sleeve Knit Tee', en: '22针超细美利奴羊毛平针防缩短袖针织衫', series: ['fashion'],
        desc: '22-gauge ultra-fine 100% superfine Merino wool (Super 120\'s, 17.5 micron), 87g lightweight and breathable. Anti-shrinkage treated, machine washable. Crew neck short sleeve relaxed fit, ideal for spring-summer daily commute.',
        crafts: [['Stitch', '1P Stockinette + Ribbed Crew Neck/Cuffs/Hem'], ['Gauge', '22 Gauge'], ['Yarn', '100% Superfine Merino Wool Super 120\'s (17.5μ, Anti-Shrinkage)'], ['Technique', 'Superfine Merino · Anti-Shrink Machine Washable · Lightweight · Crew Neck Short Sleeve']],
        details: [] },
      { id: 'sequin-skirt', img: IMG('sequin.jpg'), name: '5G Wool Polyester Sequin Pencil Skirt', en: '5针羊毛聚酯亮片双床平针包臀半身裙', series: ['fashion'],
        desc: '5-gauge coarse wool and polyester sequin yarn blend, 462g substantial texture. 1P+3P double-bed stitch creates rich texture, all-over sequin embellishment sparkles. Bodycon pencil cut, a statement piece for parties or daily wear.',
        crafts: [['Stitch', '1P+3P Double-Bed Stockinette + Ribbed Waistband'], ['Gauge', '5 Gauge'], ['Yarn', '100% Wool / 100% Polyester (Sequin Yarn)'], ['Technique', 'Wool-Polyester Blend · Sequin Accent · Double-Bed Texture · Bodycon Pencil']],
        details: [] },
      { id: 'steel-rib', img: IMG('steel-rib.jpg'), name: '14G Viscose Steel Yarn Ribbed High Neck Slim Long Sleeve Top', en: '14针粘胶金属丝罗纹高领修身长袖上衣', series: ['fashion'],
        desc: '14-gauge fine viscose-steel yarn blend, 61g lightweight with sheen. Vertical rib texture slimming effect, high neck elegant design, long sleeve body-hugging cut. Perfect for spring-summer layering or solo wear.',
        crafts: [['Stitch', '1P Rib Knit + High Neck Rib'], ['Gauge', '14 Gauge'], ['Yarn', '67% Viscose 33% Steel Yarn'], ['Technique', 'Viscose-Steel Blend · Vertical Rib · High Neck Slim Fit · Lustrous Fabric']],
        details: [] },
      { id: 'space-dye', img: IMG('space-dye.jpg'), name: '18G Recycled Polyester Wool Nylon Long Space Dye Gradient Loose Sweater', en: '18针再生聚酯羊毛尼龙长段染渐变平针宽松长袖毛衣', series: ['fashion'],
        desc: '18-gauge fine recycled polyester-wool-nylon-spandex blend, 204g medium weight. Long space dye creates blue-yellow gradient stripes, relaxed drop-shoulder silhouette. Crew neck long sleeve, a highlight for autumn-winter daily wear.',
        crafts: [['Stitch', '1P Stockinette + Ribbed Crew Neck/Cuffs/Hem'], ['Gauge', '18 Gauge'], ['Yarn', '57% Recycled Polyester 20% Nylon 20% Wool 3% Spandex'], ['Technique', 'Recycled Blend · Long Space Dye Gradient · Drop-Shoulder Relaxed · Crew Neck Long Sleeve']],
        details: [] },
      { id: 'crochet-vest', img: IMG('crochet.jpg'), name: 'Hand-hooked Mercerized Cotton Swarovski Rhinestone V-Neck Slimming Vest', en: '手钩丝光棉施华洛世奇水钻V领修身背心', series: ['fashion'],
        desc: '100% mercerized cotton hand-crochet, 118g breathable with structure. All-over hand-crochet openwork texture, adorned with Swarovski rhinestones. V-neck slim short cut, perfect for spring-summer parties or daily wear.',
        crafts: [['Stitch', 'Hand Crochet + V-Neck + Rhinestone Accent'], ['Gauge', 'Handmade'], ['Yarn', '100% Mercerized Cotton (1/6.3NM)'], ['Technique', 'Hand Crochet · Mercerized Cotton · Rhinestone Accent · Openwork Texture · V-Neck Slim Fit']],
        details: [] },
      { id: 'crochet-dress', img: IMG('crochet-dress.jpg'), name: 'Hand Crochet 100% Cotton V-Neck Cutout Lace Maxi Dress', en: '手钩全棉V领镂空拼接立体钩花修身长裙', series: ['fashion'],
        desc: '100% cotton high-count worsted (2/68NM) hand-crochet, 723g heavyweight texture. Deep V-neck elegant and sensual, waist cutout mesh panel defines the silhouette, skirt features 3D crochet floral texture. Slim maxi cut, ideal for parties and upscale occasions.',
        crafts: [['Stitch', 'Hand Crochet + V-Neck + Waist Cutout Panel + 3D Floral Skirt'], ['Gauge', 'Handmade'], ['Yarn', '100% Cotton (2/68NM)'], ['Technique', 'Hand Crochet · High-Count Worsted Cotton · Deep V-Neck · Waist Cutout Panel · 3D Floral Texture · Slim Maxi']],
        details: [] },
      { id: 'aran', img: IMG('aran.jpg'), name: '7G 100% Wool Diamond-Shaped Checkered Waist-Cinching One-Piece Sweater', en: '7针全羊毛绞花菱形格收腰连体毛衣', series: ['fashion'],
        desc: '7-gauge coarse 100% wool, 566g heavyweight and substantial. Classic cable knit, front center cable with diamond check and moss stitch side panels, rich layering. Waist-cinching slim fit, three-quarter sleeves, a warm statement piece for autumn-winter.',
        crafts: [['Stitch', 'Cable + Diamond Check + Moss Stitch + Stockinette Splice + Ribbed High Neck/Cuffs/Hem'], ['Gauge', '7 Gauge'], ['Yarn', '100% Wool (2/30)'], ['Technique', 'Heavyweight Wool · Cable Knit · Diamond Check Panel · Moss Stitch Texture · High Neck Waist-Cinching']],
        details: [] },
      { id: 'ribbed-waist', img: IMG('ribbed-waist.jpg'), name: '22G BCI Cotton Silk Polyester Ribbed Waist Seamless Long Sleeve Top', en: '22针BCI棉丝聚酯平针罗纹拼接收腰全成型无缝长袖上衣', series: ['fashion'],
        desc: '22-gauge ultra-fine BCI cotton-silk blend with polyester, wholegarment seamless knit. Upper body stockinette for close fit, waist and cuffs ribbed panels for strong waist definition. 220g medium weight, crew neck long sleeve, perfect for inner or outer wear in autumn-winter.',
        crafts: [['Stitch', '1P Stockinette + Waist/Cuff Ribbed Panel + Wholegarment Seamless'], ['Gauge', '22 Gauge'], ['Yarn', '95% BCI Cotton 5% Silk / 100% Polyester'], ['Technique', 'BCI Cotton-Silk Blend · Wholegarment Seamless · Waist Rib Definition · Cuff Rib Panel · Crew Neck Long Sleeve']],
        details: [] },
      { id: 'cashmere-down', img: IMG('cashmere-down.jpg'), name: '7G 100% Cashmere Plain Knit Spliced Down Quilted Crew Neck Cardigan', en: '7针全羊绒平针拼接羽绒绗缝圆领开衫', series: ['fashion'],
        desc: '7-gauge coarse 100% cashmere knit sleeves spliced with down quilted body, 364g lightweight warmth. Crew neck single-breasted cardigan, cashmere meets down for soft touch and fluffy warmth. Premium autumn-winter commuting piece.',
        crafts: [['Stitch', 'Stockinette (Sleeves) + Down Quilted Filling (Body) + Ribbed Crew Neck/Cuffs'], ['Gauge', '7 Gauge'], ['Yarn', '100% Cashmere + Down Filling'], ['Technique', 'Cashmere Knit · Down Quilted Splice · Crew Neck Single-Breasted Cardigan · Material Contrast Design']],
        details: [] },
      { id: 'pleated-skirt', img: IMG('pleated-skirt.jpg'), name: '12G Wool Cotton Plain Knit Ribbed Pleated Hem Skirt', en: '12针羊毛棉平针罗纹拼接百褶下摆半身裙', series: ['fashion'],
        desc: '12-gauge fine wool-cotton blend, 237g medium weight. Upper body stockinette with ribbed waistband and hem, lower body spliced with dark blue pleated chiffon. Knit meets flowing fabric, elegant and intellectual. Perfect for autumn-winter daily wear.',
        crafts: [['Stitch', '1P Stockinette + Ribbed Waistband/Hem Splice'], ['Gauge', '12 Gauge'], ['Yarn', '50% Wool 50% Cotton (2/30)'], ['Technique', 'Wool-Cotton Blend · Knit-Pleated Chiffon Splice · Ribbed Waistband · Elegant Midi Skirt']],
        details: [] },
      { id: 'cashmere-dress', img: IMG('cashmere-dress.jpg'), name: '15G 100% Cashmere Ribbed Half-Zip Fitted Dress', en: '15针全羊绒罗纹半拉链修身连衣裙', series: ['fashion'],
        desc: '15-gauge fine 100% cashmere, 454g heavyweight warmth. All-over rib texture slimming effect, half-zip stand collar adjustable neckline. Long sleeve knee-length dress cut, perfect for premium commuting and parties in autumn-winter.',
        crafts: [['Stitch', 'Rib Knit + Half-Zip Stand Collar'], ['Gauge', '15 Gauge'], ['Yarn', '100% Cashmere'], ['Technique', 'Heavyweight Cashmere Rib · Half-Zip Stand Collar · Slim Fit Dress · Knee Length']],
        details: [] },
      { id: 'tweed-skirt', img: IMG('tweed-skirt.jpg'), name: '5G Multi-Yarn Tweed Check Sequin Skirt', en: '5针多材质格纹粗花呢亮片半身裙', series: ['fashion'],
        desc: '5-gauge coarse multi-yarn blend, 419g substantial and structured. Nylon paper yarn, cotton, linen and polyester interwoven creating classic tweed check texture, sequin details. Ribbed waistband, bodycon short cut, elegant autumn-winter commuting piece.',
        crafts: [['Stitch', 'Multi-Yarn Tweed Check + Ribbed Waistband'], ['Gauge', '5 Gauge'], ['Yarn', '65% Nylon 35% Paper Yarn / 100% Cotton / 40% Linen 33% Cotton 27% Nylon / 100% Polyester (Multi-Yarn Blend)'], ['Technique', 'Multi-Material Blend · Tweed Check Texture · Sequin Accent · Ribbed Waistband · Bodycon Midi']],
        details: [] },
      { id: 'sequin-dress2', img: IMG('sequin-dress2.jpg'), name: '5G Nylon Metallised Viscose PBT Sequin Cutout V-Neck Sleeveless Dress', en: '5针尼龙金属丝粘胶PBT亮片V领镂空无袖连衣裙', series: ['fashion'],
        desc: '5-gauge coarse nylon-metallised and viscose-PBT blend, 699g heavyweight texture. All-over sequin embellishment dazzles, chest triangle cutout adds sensual detail. V-neck sleeveless slim cut, irregular hem, perfect for parties and upscale occasions.',
        crafts: [['Stitch', '1P Stockinette + Chest Cutout + Ribbed Neckline/Armhole'], ['Gauge', '5 Gauge'], ['Yarn', '91% Nylon 9% Metallised Fibre / 72% Viscose 28% PBT'], ['Technique', 'Nylon-Metallised Blend · All-Over Sequin · Chest Triangle Cutout · V-Neck Sleeveless · Irregular Hem']],
        details: [] },
      { id: 'metallic-dress', img: IMG('metallic-dress.jpg'), name: '14G Polyester Metallic Two-Texture Spliced Sleeveless Maxi Dress', en: '14针聚酯金属丝双组织拼接无袖长款连衣裙', series: ['fashion'],
        desc: '14-gauge fine polyester-metallised blend, 260g medium weight. Upper body fine stockinette close fit, lower body coarse texture splice creates contrast. Sleeveless maxi cut, metallised yarn gives subtle sheen, ideal for dinner and upscale occasions.',
        crafts: [['Stitch', 'Stockinette + Lower Body Coarse Texture Splice'], ['Gauge', '14 Gauge'], ['Yarn', '71% Polyester 29% Metallised Yarn (1/85NM)'], ['Technique', 'Polyester-Metallised Blend · Two-Texture Splice · Sleeveless Maxi · Subtle Sheen']],
        details: [] },
      { id: 'silk-cotton-dress', img: IMG('silk-cotton-dress.jpg'), name: '14G Silk Cotton 2P Plain Knit Raw Edge Round Neck Sleeveless Pocket Dress', en: '14针丝棉双平针流苏装饰圆领无袖口袋连衣裙', series: ['fashion'],
        desc: '14-gauge fine silk-cotton blend (2/48NM), 455g heavyweight texture. 2P plain knit tight and structured, neckline, armhole and pocket edges with raw edge fringe detail. Crew neck sleeveless slim long cut, side patch pockets for utility and style. Perfect for autumn-winter daily commute.',
        crafts: [['Stitch', '2P Double Plain Knit + Fringe Trim Neckline/Armhole/Pockets'], ['Gauge', '14 Gauge'], ['Yarn', '55% Silk 45% Cotton (2/48NM)'], ['Technique', 'Silk-Cotton Blend · Double Plain Knit · Fringe Trim · Crew Neck Sleeveless · Side Patch Pockets']],
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
