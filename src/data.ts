// ============================================================
// 全站内容配置 —— 修改文字 / 替换配图都只需改这一个文件
// 配图替换：把新图片放入 public/images/ 并修改下方路径即可
// ============================================================

export const NAV = [
  { key: 'collections', label: '系列产品', en: 'Collections' },
  { key: 'craftsmanship', label: '精湛工艺', en: 'Craftsmanship' },
  { key: 'story', label: '品牌故事', en: 'Our Story' },
  { key: 'sustainability', label: '可持续性', en: 'Sustainability' },
  { key: 'contact', label: '联系', en: 'Contact' },
] as const;

export type PageKey = (typeof NAV)[number]['key'];

export const IMG = (n: string) => `${import.meta.env.BASE_URL}images/${n}`;

export const LOGO = IMG('logo.png');

export const HERO_IMG = IMG('hero.jpg'); // Collections 首屏
export const HERO_CRAFT = IMG('real-machine.jpg');   // 精湛工艺首屏（岛精22针无缝横机）
export const HERO_STORY = IMG('logo-wall.jpg');   // 品牌故事首屏（企业 logo 墙）
export const HERO_CONTACT = IMG('hero-contact.jpg'); // 联系页首屏

// ---------- Collections ----------
export const COLLECTIONS = [
  { id: 'fashion', img: IMG('col-fashion.jpg'), zh: '时装系列', en: 'Fashion', desc: '融合经典、温暖与精致剪裁，打造优雅的时尚针织。' },
  { id: 'golf', img: IMG('col-golf.jpg'), zh: '高尔夫系列', en: 'Golf', desc: '选用舒适高弹面料，专为高尔夫运动场景而生的精致针织。' },
  { id: 'ski', img: IMG('col-ski.jpg'), zh: '滑雪系列', en: 'Ski', desc: '注重保暖、专业贴心，灵活应对严寒的专业防寒装备。' },
  { id: 'trail', img: IMG('col-trail.jpg'), zh: '越野跑系列', en: 'Trail Running', desc: '有效排汗、随行而动，为越野跑提供安全舒适体验。' },
  { id: 'accessories', img: IMG('col-accessories.jpg'), zh: '配饰系列', en: 'Accessories', desc: '精选针织配饰，从围巾帽饰到精致手套，点缀细节之美。' },
];

// 单品：series 对应上方系列 id；crafts 为针织工艺说明；details 为细节图
export const PRODUCTS = [
  { id: 'seamless', img: IMG('seamless.jpg'), name: '22针全成型汉麻莱赛尔平针无缝运动背心', en: '22G Macel Hemp Lyocell Wholegarment Seamless Sports Bra', series: ['trail'],
    desc: '22针极细针距汉麻莱赛尔混纺氨纶，全成型无缝一体织造。背心式U领连体剪裁，47g超轻贴身，透气亲肤，适合运动以及春夏内搭或单穿。',
    crafts: [['针法', '全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '98% 汉麻莱赛尔（macel）2% 氨纶'], ['工艺', '汉麻莱赛尔混纺 · 全成型无缝一体织造 · 背心式连体 · U领贴身']],
    details: [] },
  { id: 'sequin-dress', img: IMG('sequin-dress.jpg'), name: '手钩亮片裙', en: 'Hand-Crochet Sequin Dress', series: ['fashion'],
    desc: '纯手工钩编网眼组织，人造丝与粘胶纤维混用，细肩带方领修身包臀款，全身幻彩扇形亮片点缀，镂空透视优雅别致。',
    crafts: [['针法', '手工钩编网眼组织'], ['针距', 'Handmade 手工制作'], ['纱线', '100% Rayon + 100% Viscose'], ['工艺', '手工钩编 · 亮片装饰 · 细肩带修身 · 透视效果']],
    details: [] },
  { id: 'cardigan2', img: IMG('cardigan.jpg'), name: '燕麦色闪片开衫', en: 'Oatmeal Sequin Cardigan', series: ['fashion'],
    desc: '5针粗针距挑孔镂空组织，并线进纱，棉麻锦纶亮片混纺，圆领前中开扣开衫，竖向镂空纹理透气富有层次。',
    crafts: [['针法', '挑孔镂空 + 罗纹收口'], ['针距', '5 针（5G）粗针距'], ['纱线', '61%棉 30%亚麻 5%锦纶 4%亮片'], ['工艺', '挑孔镂空编织 · 亮片点缀 · 开衫结构 · 套口缝合 · 罗纹收口']],
    details: [] },
  { id: 'golfset', img: IMG('golfset.jpg'), name: '菱格纹套装', en: 'Diamond Pattern Golf Set', series: ['golf'],
      desc: '14针单面进纱平针底组织，提花嵌花工艺呈现菱形格纹，50%羊毛50%腈纶混纺，翻领设计搭配罗纹收口，上衣半裙两件套组合。',
      crafts: [['针法', '14G 平针 + 提花嵌花'], ['针距', '14 针（14G）'], ['纱线', '50% 羊毛 50% 腈纶混纺'], ['工艺', '提花嵌花 · 翻领设计 · 罗纹收口 · 套装结构']],
      details: [] },
  { id: 'coldchange', img: IMG('coldchange.jpg'), name: '16针超细美丽奴羊毛冷感变色羽绒服', en: '16G Super-fine Merino Cold-Sensitive Color-Changing Down Jacket', series: ['ski'],
        desc: '16针超细美利奴羊毛结合冷感变色纱线，低温环境下呈现独特色彩变化。蓬松绗缝结构搭配拉链开襟，轻盈保暖。',
        crafts: [['针法', ' 平针编织 + 罗纹收口'], ['针距', '16G（16针）'], ['纱线', '100% 超细美利奴羊毛 / 100% 聚酯纤维冷感变色纱'], ['工艺', '超细美利奴羊毛编织 · 冷感低温变色 · 绗缝填充保暖 · 拉链开襟']],
        details: [] },
  { id: 'turtleneck', img: IMG('p-turtleneck.jpg'), name: '羊绒高领毛衣', en: 'Cashmere Turtleneck', series: ['fashion', 'ski'],
    desc: '甄选可追溯羊绒纱线，高领贴合颈部曲线，罗纹织法赋予自然弹性，是秋冬衣橱的恒久之选。',
    crafts: [['针法', '2x2 罗纹 + 平针主体'], ['针距', '12 针细针距'], ['纱线', '100% 可追溯羊绒'], ['工艺', '整件缝盘 · 手工套口']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-hands.jpg'), IMG('proc-wash.jpg')] },
  { id: 'zip', img: IMG('p-zip.jpg'), name: '美利奴半拉链毛衣', en: 'Merino Half-Zip', series: ['golf', 'fashion'],
    desc: '超细美利奴羊毛织造，半拉链设计便于运动时调节体温，腋下立体剪裁活动自如。',
    crafts: [['针法', '平针 + 袖口罗纹'], ['针距', '12 针细针距'], ['纱线', '超细美利奴'], ['工艺', '拉链门襟手工包边']],
    details: [IMG('m-wool.jpg'), IMG('proc-machine.jpg'), IMG('proc-wash.jpg')] },
  { id: 'vest', img: IMG('p-vest.jpg'), name: '经典保暖针织背心', en: 'Classic Knit Vest', series: ['fashion', 'golf'],
    desc: 'V 领经典版型，轻盈保暖不臃肿，叠穿衬衫或高领皆宜，通勤与球场两相宜。',
    crafts: [['针法', '平针 + V 领收针'], ['针距', '12 针细针距'], ['纱线', '羊毛羊绒混纺'], ['工艺', '领口一体成型编织']],
    details: [IMG('m-wool.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'hoodie', img: IMG('p-hoodie.jpg'), name: '细针距针织连帽衫', en: 'Fine-Gauge Knit Hoodie', series: ['fashion'],
    desc: '22 Gauge 细针距织就，布面细腻轻柔，运动与日常场景皆舒适贴合，轻量保暖。',
    crafts: [['针法', '平针 + 罗纹收口'], ['针距', '12 Gauge 细针距'], ['纱线', '再生尼龙混纺'], ['工艺', '整件缝盘 · 套口收边']],
    details: [IMG('tech-3d.jpg'), IMG('m-nylon.jpg'), IMG('proc-machine.jpg')] },
  { id: 'cardigan', img: IMG('p-cardigan.jpg'), name: '精梳开衫', en: 'Combed Cardigan', series: ['fashion'],
    desc: '精梳长绒纱线织就，天然牛角扣点缀，垂坠柔润，是四季皆宜的温柔外层。',
    crafts: [['针法', '平针 + 门襟罗纹'], ['针距', '12 针细针距'], ['纱线', '精梳棉羊毛混纺'], ['工艺', '手工钉扣 · 套口收边']],
    details: [IMG('m-cotton.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'vneck', img: IMG('p-vneck.jpg'), name: '细支针织上衣', en: 'Fine-Gauge V-Neck', series: ['fashion', 'golf'],
    desc: '高支细针织造，薄如第二层肌肤，V 领修饰颈线，单穿打底皆显质感。',
    crafts: [['针法', '平针细织'], ['针距', '14 针细针距'], ['纱线', '高支棉羊绒'], ['工艺', '整件缝盘 · 低温定型']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-wash.jpg'), IMG('proc-machine.jpg')] },
  { id: 'skibase', img: IMG('ski1.png'), name: '滑雪速干衣', en: 'Ski Base Layer', series: ['ski'],
      desc: '15针双纱并织，甄选91%美利奴超细羊毛与弹性纤维混纺，高弹回复、防缩可机洗，结构紧密抗起球，为滑雪运动提供贴身舒适与温度调节。',
      crafts: [['针法', '双纱并织'], ['针距', '15 针（15GG）'], ['纱线', '91% 美利奴超细羊毛 + 9% 弹性纤维'], ['工艺', '精纺合股 · 防缩处理 · 高弹抗起球']],
      details: [] },
  { id: 'skipants', img: IMG('ski2.png'), name: '滑雪速干裤', en: 'Ski Base Pants', series: ['ski'],
        desc: '15针双纱并织，甄选91%美利奴超细羊毛与弹性纤维混纺，高弹回复、防缩可机洗，结构紧密抗起球，为滑雪运动提供贴身舒适与温度调节。',
        crafts: [['针法', '双纱并织'], ['针距', '15 针（15GG）'], ['纱线', '91% 美利奴超细羊毛 + 9% 弹性纤维'], ['工艺', '精纺合股 · 防缩处理 · 高弹抗起球']],
        details: [] },
  { id: 'handhook', img: IMG('handhook.jpg'), name: '墨绿色手勾上衣', en: 'Hand-Crochet Mesh Top', series: ['fashion'],
            desc: '纯手工钩编网眼组织，人造丝纱线，方领修身收腰版型，手工缝缀亮片点缀，镂空透视设计优雅别致。',
            crafts: [['针法', '手工钩编网眼组织'], ['针距', 'Handmade 手工制作'], ['纱线', '100% 人造丝（Rayon）'], ['工艺', '手工钩编 · 亮片装饰 · 方领修身 · 透视镂空']],
            details: [] },
  { id: 'jumpsuit', img: IMG('jumpsuit.jpg'), name: '15针无缝羊毛再生尼龙平针迷彩拼接拉链连体衣', en: '15G Seamless Wool Recycled Nylon Camo Jumpsuit', series: ['ski'],
              desc: '15针无缝羊毛再生尼龙混纺，多组织迷彩拼接设计。拉链翻领连体剪裁，558g贴身保暖，适合滑雪与户外运动。',
              crafts: [['针法', '无缝提花 + 罗纹 + 多组织迷彩拼接'], ['针距', '15L（15针）'], ['纱线', '65% 羊毛 35% 再生尼龙'], ['工艺', '羊毛再生尼龙混纺 · 迷彩多组织拼接 · 拉链翻领连体 · 贴身剪裁']],
              details: [] },
  { id: 'tiedye', img: IMG('tie-dye.jpg'), name: '15针无缝一体成型羊毛再生尼龙提花扎染高领紧身衣', en: '15G Seamless Wool Recycled Nylon Tie-Dye High Neck Pullover', series: ['ski', 'fashion'],
              desc: '15针无缝一体成型羊毛再生尼龙混纺，手工扎染工艺呈现独特黑白晕染效果。高领贴身剪裁，轻盈保暖，单穿内搭皆宜。',
              crafts: [['针法', '平针编织 + 罗纹高领/袖口'], ['针距', '15L（15针）'], ['纱线', '100% 羊毛 100% 再生尼龙'], ['工艺', '羊毛再生尼龙混纺 · 手工扎染 · 高领贴身 · 罗纹收口']],
              details: [] },
  { id: 'gauge-mix', img: IMG('gauge-mix.jpg'), name: '22针全成型全羊毛超轻多组织无缝圆领针织衫', en: '22G 100% Merino Wool Wholegarment Seamless Ultra Light-Weight Crew Neck Sweater', series: ['fashion', 'trail'],
                desc: '22针极细针距全羊毛，全成型无缝一体织造。袖子与后背采用不同针型组织变化，110g轻薄透气，圆领修身剪裁，适合运动以及春夏日常穿搭。',
                crafts: [['针法', '平针 + 袖子/后背多组织变化 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '100% 超细美利奴羊毛'], ['工艺', '全羊毛22L全成型无缝 · 多组织针型变化 · 圆领修身 · 轻薄透气']],
                details: [] },
  { id: 'golfjacket', img: IMG('golfjacket.jpg'), name: '18针羊毛PBT混纺平针连帽拉链高尔夫外套', en: '18G Wool PBT Blend Hooded Zip Golf Jacket', series: ['golf', 'fashion'],
                  desc: '18针细针距羊毛PBT混纺，17.5微米超细羊毛带来柔软亲肤触感。连帽拉链结构搭配功能性口袋，适合高尔夫运动及日常休闲穿搭。',
                  crafts: [['针法', '四平编织 + 罗纹收口'], ['针距', '18G（18针）'], ['纱线', '85% 羊毛, 15% PBT'], ['工艺', '超细羊毛PBT混纺 · 连帽拉链结构 · 功能性口袋 · 罗纹收口']],
                  details: [] },
  { id: 'vent', img: IMG('vent.jpg'), name: '22针全成型粘胶聚乙烯平针腋下挑孔透气超轻越野跑无缝T恤', en: '22G Viscose Polyethylene Underarm Vent Trail Seamless Ultra Light-Weight Tee', series: ['trail'],
                desc: '22针极细针距粘胶聚乙烯混纺，全成型无缝一体织造。腋下挑孔镂空透气结构，专为越野跑设计，增强散热排汗。61g轻薄半透明，修身短袖，亲肤凉感，适合高强度户外运动。',
                crafts: [['针法', '平针编织 + 腋下挑孔镂空透气 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '50% 粘胶 50% 聚乙烯'], ['工艺', '粘胶聚乙烯混纺 · 全成型无缝一体织造 · 腋下挑孔透气 · 轻薄半透明 · 越野跑功能剪裁']],
                details: [] },
  { id: 'side-vent', img: IMG('side-vent.jpg'), name: '22针全成型再生凉感聚酯棉平针花纹组织侧身挑孔透气越野跑无缝超轻背心', en: '22G Recycled Cool Polyester Cotton Pattern Knit Side Vent Trail Seamless Ultra Light-Weight Vest', series: ['trail'],
                desc: '22针极细针距再生凉感聚酯棉混纺，全成型无缝一体织造。正面采用花纹组织变化，侧身挑孔镂空透气结构，专为越野跑设计，增强散热排汗。超轻90g轻薄透气，无袖背心剪裁，适合高强度户外运动。',
                crafts: [['针法', '平针编织 + 正面花纹组织 + 侧身挑孔镂空透气 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '52% 再生凉感聚酯 48% 棉'], ['工艺', '再生凉感聚酯棉混纺 · 全成型无缝一体织造 · 正面花纹组织 · 侧身挑孔透气 · 越野跑功能剪裁']],
                details: [] },
                { id: 'cashmere-crew', img: IMG('cashmere.jpg'), name: '18针全羊绒罗纹修身圆领针织衫', en: '18G 100% Cashmere Ribbed Slim Fit Crew Neck Sweater', series: ['fashion'],
                  desc: '18针细针距100%羊绒，高支精纺。罗纹修身剪裁贴合身形，155g轻盈保暖。圆领长袖设计，秋冬高端日常穿搭首选。',
                  crafts: [['针法', '罗纹编织 + 罗纹领口/袖口/下摆'], ['针距', '18L（18针）'], ['纱线', '100% 羊绒'], ['工艺', '高支精纺全羊绒 · 罗纹修身 · 圆领长袖 · 罗纹收口']],
                  details: [] },
                { id: 'steel-top', img: IMG('steel.jpg'), name: '14针粘胶金属丝平针轻薄光泽感长袖上衣', en: '14G Viscose Steel Yarn Plain Knit Sheer Long Sleeve Top', series: ['fashion'],
                  desc: '14针细针距粘胶金属丝混纺，18g极轻薄半透明质感。金属丝赋予面料独特光泽与骨架感，圆领宽松长袖剪裁，适合春夏叠穿或单穿。',
                  crafts: [['针法', '平针编织 + 罗纹领口/袖口'], ['针距', '14G（14针）'], ['纱线', '67% 粘胶 33% 金属丝'], ['工艺', '粘胶金属丝混纺 · 极轻薄半透明 · 光泽感面料 · 宽松长袖']],
                  details: [] },
                { id: 'merino-tee', img: IMG('merino-tee.jpg'), name: '22针超细美利奴羊毛平针防缩短袖针织衫', en: '22G Superfine Merino Wool Anti-Shrinkage Short Sleeve Knit Tee', series: ['fashion'],
                  desc: '22针极细针距100%超细美利奴羊毛（Super 120\'s，17.5微米），87g轻薄透气。经防缩处理，可机洗易打理。圆领短袖宽松剪裁，适合春夏日常通勤。',
                  crafts: [['针法', '平针编织 + 罗纹领口/袖口/下摆'], ['针距', '22L（22针）'], ['纱线', '100% 超细美利奴羊毛 （防缩处理）'], ['工艺', '超细美利奴羊毛 · 防缩可机洗 · 轻薄透气 · 圆领短袖']],
                  details: [] },
                { id: 'sequin-skirt', img: IMG('sequin.jpg'), name: '5针羊毛聚酯亮片双床平针包臀半身裙', en: '5G Wool Polyester Sequin Pencil Skirt', series: ['fashion'],
                  desc: '5针粗针距羊毛与聚酯亮片纱混织，462g厚实有质感。1P+3P双床组织呈现丰富肌理，全身亮片点缀闪耀夺目。包臀修身剪裁，秋冬派对或日常穿搭亮点单品。',
                  crafts: [['针法', '双床平针编织 + 罗纹腰头'], ['针距', '5G（5针）'], ['纱线', '100% 羊毛 / 100% 聚酯纤维（亮片纱）'], ['工艺', '羊毛聚酯混织 · 亮片点缀 · 双床组织 · 包臀修身']],
                  details: [] },
                { id: 'steel-rib', img: IMG('steel-rib.jpg'), name: '14针粘胶金属丝罗纹高领修身长袖上衣', en: '14G Viscose Steel Yarn Ribbed High Neck Slim Long Sleeve Top', series: ['fashion'],
                  desc: '14针细针距粘胶金属丝混纺，61g轻薄带光泽。竖条纹罗纹组织修身显瘦，高领设计优雅大气，长袖贴身剪裁，适合春夏叠穿或单穿。',
                  crafts: [['针法', '罗纹编织 + 高领罗纹'], ['针距', '14G（14针）'], ['纱线', '67% 粘胶 33% 金属丝'], ['工艺', '粘胶金属丝混纺 · 竖条纹罗纹 · 高领修身 · 光泽感面料']],
                  details: [] },
                { id: 'space-dye', img: IMG('space-dye.jpg'), name: '18针再生聚酯羊毛尼龙长段染渐变平针宽松长袖毛衣', en: '18G Recycled Polyester Wool Nylon Long Space Dye Gradient Loose Sweater', series: ['fashion'],
                  desc: '18针细针距再生聚酯羊毛尼龙氨纶混纺，204g适中厚度。长段染工艺呈现蓝黄自然渐变条纹，宽松落肩版型舒适随性，圆领长袖设计，秋冬日常穿搭亮点。',
                  crafts: [['针法', '平针编织 + 罗纹领口/袖口/下摆'], ['针距', '18L（18针）'], ['纱线', '57% 再生聚酯 20% 尼龙 20% 羊毛 3% 氨纶'], ['工艺', '再生混纺 · 长段染渐变 · 宽松落肩 · 圆领长袖']],
                  details: [] },
                { id: 'crochet-vest', img: IMG('crochet.jpg'), name: '手钩丝光棉施华洛世奇水钻V领修身背心', en: 'Hand-hooked Mercerized Cotton Swarovski Rhinestone V-Neck Slimming Vest', series: ['fashion'],
                  desc: '100%丝光棉手钩工艺，118g透气有骨感。全身手工钩针镂空肌理，点缀施华洛世奇水钻装饰，V领修身短款剪裁，适合春夏派对或日常穿搭。',
                  crafts: [['针法', '手钩编织 + V领 + 水钻点缀'], ['针距', 'Handmade 手工制作'], ['纱线', '100% 丝光棉'], ['工艺', '手钩编织 · 丝光棉 · 水钻点缀 · 镂空肌理 · V领修身']],
                  details: [] },
                { id: 'crochet-dress', img: IMG('crochet-dress.jpg'), name: '手钩全棉V领镂空拼接立体钩花修身长裙', en: 'Hand Crochet 100% Cotton V-Neck Cutout Lace Maxi Dress', series: ['fashion'],
                  desc: '100%棉高支精纺手钩工艺，723g重磅质感。深V领设计优雅性感，腰部镂空网眼拼接勾勒腰线，裙摆立体钩花肌理丰富层次。修身长裙剪裁，适合派对或高端场合穿搭。',
                  crafts: [['针法', '手钩编织 + V领 + 腰部镂空拼接 + 立体钩花裙摆'], ['针距', 'Handmade 手工制作'], ['纱线', '100% 棉'], ['工艺', '手钩编织 · 全棉高支精纺 · V领深V · 腰部镂空拼接 · 立体钩花肌理 · 修身长裙']],
                  details: [] },
                { id: 'aran', img: IMG('aran.jpg'), name: '7针全羊毛绞花菱形格收腰连体毛衣', en: '7G 100% Wool Diamond-Shaped Checkered Waist-Cinching One-Piece Sweater', series: ['fashion'],
                  desc: '7针粗针距100%羊毛，566g重磅厚实。经典绞花编织，正面中央绞花搭配两侧菱形格与桂花针拼接，层次丰富。收腰修身剪裁，七分袖设计，秋冬保暖造型感单品。',
                  crafts: [['针法', '绞花 + 菱形格 + 桂花针 + 平针拼接 + 罗纹高领/袖口/下摆'], ['针距', '7G（7针）'], ['纱线', '100% 羊毛'], ['工艺', '全羊毛重磅编织 · 绞花 · 菱形格拼接 · 桂花针肌理 · 高领收腰']],
                  details: [] },
                { id: 'ribbed-waist', img: IMG('ribbed-waist.jpg'), name: '22针BCI棉丝聚酯平针罗纹拼接收腰全成型无缝长袖上衣', en: '22G BCI Cotton Silk Polyester Ribbed Waist Seamless Long Sleeve Top', series: ['fashion'],
                  desc: '22针极细针距BCI棉丝混纺与聚酯纤维，全成型无缝一体织造。上半部分平针贴合，腰部与袖口罗纹拼接强力收腰，勾勒身形曲线。220g适中厚度，圆领长袖，秋冬内搭外穿皆宜。',
                  crafts: [['针法', '平针编织 + 腰部/袖口罗纹拼接 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '95% BCI棉 5% 丝 / 100% 聚酯纤维'], ['工艺', 'BCI棉丝混纺 · 全成型无缝一体织造 · 腰部罗纹收腰 · 袖口罗纹拼接 · 圆领长袖']],
                  details: [] },
                { id: 'cashmere-down', img: IMG('cashmere-down.jpg'), name: '7针全羊绒平针拼接羽绒绗缝圆领开衫', en: '7G 100% Cashmere Plain Knit Spliced Down Quilted Crew Neck Cardigan', series: ['fashion'],
                  desc: '7针粗针距100%羊绒针织袖子拼接羽绒绗缝主体，364g轻盈保暖。圆领单排扣开衫结构，针织与羽绒材质碰撞，兼具柔软触感与蓬松保暖，秋冬高端通勤单品。',
                  crafts: [['针法', '平针编织（袖子）+ 羽绒绗缝填充（主体）+ 罗纹圆领/袖口'], ['针距', '7G（7针）'], ['纱线', '100% 羊绒 + 羽绒填充'], ['工艺', '全羊绒针织 · 羽绒绗缝拼接 · 圆领单排扣开衫 · 材质碰撞设计']],
                  details: [] },
                { id: 'pleated-skirt', img: IMG('pleated-skirt.jpg'), name: '12针羊毛棉平针罗纹拼接百褶下摆半身裙', en: '12G Wool Cotton Plain Knit Ribbed Pleated Hem Skirt', series: ['fashion'],
                  desc: '12针细针距羊毛棉混纺，237g适中厚度。上半部分平针编织搭配罗纹腰头与下摆，下半部分拼接深蓝色百褶雪纺，针织与飘逸面料碰撞，优雅知性，适合秋冬日常穿搭。',
                  crafts: [['针法', '平针编织 + 罗纹腰头/下摆拼接'], ['针距', '12G（12针）'], ['纱线', '50% 羊毛 50% 棉'], ['工艺', '羊毛棉混纺 · 针织拼接百褶雪纺 · 罗纹腰头 · 优雅半裙']],
                  details: [] },
                { id: 'cashmere-dress', img: IMG('cashmere-dress.jpg'), name: '15针全羊绒罗纹半拉链修身连衣裙', en: '15G 100% Cashmere Ribbed Half-Zip Fitted Dress', series: ['fashion'],
                  desc: '15针细针距100%羊绒，454g重磅保暖。全身罗纹组织修身显瘦，半拉链立领设计可自由调节领型，长袖过膝连衣裙剪裁，秋冬高端通勤与派对皆宜。',
                  crafts: [['针法', '罗纹编织 + 半拉链立领'], ['针距', '15L（15针）'], ['纱线', '100% 羊绒'], ['工艺', '全羊绒重磅罗纹 · 半拉链立领 · 修身连衣裙 · 过膝长度']],
                  details: [] },
                { id: 'tweed-skirt', img: IMG('tweed-skirt.jpg'), name: '5针多材质格纹粗花呢亮片半身裙', en: '5G Multi-Yarn Tweed Check Sequin Skirt', series: ['fashion'],
                  desc: '5针粗针距多材质混织，419g厚实挺括。尼龙纸纱、棉、亚麻与聚酯等多种纱线交织呈现经典格纹粗花呢肌理，点缀亮片细节。罗纹腰头设计，包臀短款剪裁，秋冬优雅通勤单品。',
                  crafts: [['针法', '多纱线格纹粗花呢编织 + 罗纹腰头'], ['针距', '5G（5针）'], ['纱线', '65% 尼龙 35% 纸纱 / 100% 棉 / 40% 亚麻 33% 棉 27% 尼龙 / 100% 聚酯纤维'], ['工艺', '多材质混织 · 格纹粗花呢肌理 · 亮片点缀 · 罗纹腰头 · 包臀半裙']],
                  details: [] },
                { id: 'sequin-dress2', img: IMG('sequin-dress2.jpg'), name: '5针尼龙金属丝粘胶PBT亮片V领镂空无袖连衣裙', en: '5G Nylon Metallised Viscose PBT Sequin Cutout V-Neck Sleeveless Dress', series: ['fashion'],
                  desc: '5针粗针距尼龙金属丝与粘胶PBT混纺，699g重磅质感。全身亮片点缀闪耀夺目，胸前三角镂空设计增添性感细节。V领无袖修身剪裁，下摆不规则设计，适合派对及高端场合。',
                  crafts: [['针法', '平针编织 + 胸前镂空 + 罗纹领口/袖窿'], ['针距', '5G（5针）'], ['纱线', '91% 尼龙 9% 金属化纤维 / 72% 粘胶 28% PBT'], ['工艺', '尼龙金属丝混纺 · 全身亮片点缀 · 胸前三角镂空 · V领无袖 · 不规则下摆']],
                  details: [] },
                { id: 'metallic-dress', img: IMG('metallic-dress.jpg'), name: '14针聚酯金属丝双组织拼接无袖长款连衣裙', en: '14G Polyester Metallic Two-Texture Spliced Sleeveless Maxi Dress', series: ['fashion'],
                  desc: '14针细针距聚酯金属丝混纺，260g适中厚度。上半身细密平针贴合修身，下半身粗针纹理拼接形成层次对比。无袖长款剪裁，金属丝赋予面料低调光泽，适合晚宴及高端场合。',
                  crafts: [['针法', '平针编织 + 下半部分粗针纹理拼接'], ['针距', '14G（14针）'], ['纱线', '71% 聚酯纤维 29% 金属丝'], ['工艺', '聚酯金属丝混纺 · 双组织拼接 · 无袖长款 · 低调光泽']],
                  details: [] },
                { id: 'silk-cotton-dress', img: IMG('silk-cotton-dress.jpg'), name: '14针丝棉双平针流苏装饰圆领无袖口袋连衣裙', en: '14G Silk Cotton 2P Plain Knit Raw Edge Round Neck Sleeveless Pocket Dress', series: ['fashion'],
                  desc: '14针细针距丝棉混纺，455g重磅质感。双平针组织紧密挺括，领口、袖窿及口袋边缘流苏装饰增添随性设计感。圆领无袖修身长款，两侧贴袋实用与造型兼具，适合秋冬日常通勤。',
                  crafts: [['针法', '双平针编织 + 流苏装饰领口/袖窿/口袋'], ['针距', '14G（14针）'], ['纱线', '55% 丝 45% 棉'], ['工艺', '丝棉混纺 · 双平针组织 · 流苏装饰 · 圆领无袖 · 两侧贴袋']],
                  details: [] },
                  { id: 'fair-isle', img: IMG('fair-isle.jpg'), name: '8针羊驼毛羊毛尼龙费尔岛提花圆领毛衣', en: '8G Alpaca Wool Nylon Fair Isle Jacquard Crew Neck Sweater', series: ['fashion'],
                    desc: '8针粗针距羊驼毛羊毛尼龙氨纶混纺，289g蓬松保暖。经典费尔岛提花工艺，肩部至领口呈现棕、粉、黄几何锯齿纹图案。圆领长袖宽松剪裁，秋冬复古造型感单品。',
                    crafts: [['针法', '平针编织 + 费尔岛提花 + 罗纹领口/袖口/下摆'], ['针距', '8L（8针）'], ['纱线', '32% 羊驼毛 32% 羊毛 30% 尼龙 6% 氨纶'], ['工艺', '羊驼毛羊毛混纺 · 费尔岛提花 · 几何锯齿纹 · 圆领长袖']],
                    details: [] },
                  { id: 'distressed', img: IMG('distressed.jpg'), name: '12针羊毛尼龙破洞镂空几何平针修身长袖上衣', en: '12G Wool Nylon Distressed Cutout Geometric Plain Knit Slim Long Sleeve Top', series: ['fashion'],
                    desc: '12针细针距羊毛尼龙混纺，135g轻薄透气。正面大面积几何形破洞镂空设计，袖子边缘毛边处理，营造随性破坏感。圆领修身长袖剪裁，春夏个性叠穿或单穿亮点单品。',
                    crafts: [['针法', '平针编织 + 几何破洞镂空 + 毛边处理'], ['针距', '12G（12针）'], ['纱线', '80% 羊毛 20% 尼龙'], ['工艺', '羊毛尼龙混纺 · 几何破洞镂空 · 毛边破坏感 · 修身长袖']],
                    details: [] },
                    { id: 'fringe-cape', img: IMG('fringe-cape.jpg'), name: '7针羊绒绢丝珠片手工流苏披肩开衫', en: '7G Cashmere Silk Sequins Hand Made Fringe Cape Cardigan', series: ['fashion'],
                      desc: '7针粗针距羊绒绢丝混纺珠片纱，494g适中厚度。V领单扣披肩式开衫，下摆流苏须边设计，两侧贴袋，宽松廓形适合四季搭配。',
                      crafts: [['针法', '1P 平针编织 + 流苏须边 + 罗纹领口'], ['针距', '7G（7针）'], ['纱线', '75% 羊绒 25% 绢丝'], ['工艺', '羊绒绢丝混纺 · 披肩式开衫 · 流苏须边']],
                      details: [] },
                    { id: 'print-sweater', img: IMG('print-sweater.jpg'), name: '8针无缝一体成型美利奴羊毛尼龙天丝羊驼毛数码印花半高领毛衣', en: '8G Wholegarment Seamless Merino Wool Nylon Tencel Baby Alpaca Digital Print Turtle Neck Sweater', series: ['fashion'],
                      desc: '8针无缝一体成型粗针距美利奴羊毛尼龙天丝羊驼毛混纺，244g轻薄保暖。全身数码打印抽象艺术图案，色彩细腻层次丰富。高领宽松剪裁，秋冬个性造型单品。',
                      crafts: [['针法', '平针编织 + 高领罗纹'], ['针距', '8L（8针）'], ['纱线', '40% RWS超细美利奴羊毛 33% 尼龙 17% 天丝 10% 羊驼毛（1/25NM）'], ['工艺', '多材质混纺 · 数码打印 · 抽象艺术图案 · 高领宽松']],
                      details: [] },
                    { id: 'fair-isle-vest', img: IMG('fair-isle-vest.jpg'), name: '8针无缝一体成型羊绒锦纶氨纶中式传统纹样提花高领无袖背心', en: '8G Wholegarment Seamless Cashmere Polyamide Elastane Chinese Traditional Motifs Jacquard Turtle Neck Sleeveless Vest', series: ['fashion'],
                      desc: '8针无缝一体成型粗针距羊绒锦纶氨纶混纺，165g轻盈保暖。费尔岛提花图案点缀，高领无袖修身剪裁，适合秋冬叠穿内搭。',
                      crafts: [['针法', '平针编织 + 提花 + 高领罗纹'], ['针距', '8L（8针）'], ['纱线', '80% 羊绒 18% 锦纶 2% 氨纶'], ['工艺', '羊绒混纺 · 传统纹样提花 · 高领无袖 · 修身叠穿']],
                      details: [] },
                    { id: 'art-sweater', img: IMG('art-sweater.jpg'), name: '3针羊毛尼龙嵌花多色拼接流苏艺术毛衣', en: '3G Wool Nylon Intarsia Multi-Color Patchwork Fringe Art Sweater', series: ['fashion'],
                      desc: '3针粗针距羊毛尼龙混纺。嵌花工艺多色块拼接设计，正面立体流苏毛线装饰，圆领宽松长袖，极具艺术感与街头风格，秋冬造型焦点单品。',
                      crafts: [['针法', '嵌花拼接 + 立体流苏装饰 + 圆领罗纹'], ['针距', '3G（3针）'], ['纱线', '80% 羊毛 20% 尼龙（2/16NM）'], ['工艺', '羊毛尼龙混纺 · 嵌花工艺 · 多色拼接 · 立体流苏装饰 · 艺术感设计']],
                      details: [] },  
                      { id: 'earflap-hat', img: IMG('earflap-hat.jpg'), name: '3针羊绒白厂丝混纺罗纹护耳针织帽', en: '3G Cashmere Silk Ribbed Earflap Knit Hat', series: ['accessories'],
                        desc: '3针粗针距羊绒丝混纺，62g轻盈保暖。经典罗纹护耳帽型，两侧护耳配毛球系带，驼色温暖百搭，秋冬保暖造型单品。',
                        crafts: [['针法', '4P 罗纹编织 + 护耳结构 + 毛球系带'], ['针距', '3G（3针）'], ['纱线', '75% 羊绒 25% 白厂丝'], ['工艺', '羊绒丝混纺 · 罗纹护耳帽 · 毛球系带 · 保暖轻盈']],
                        details: [] },
                      { id: 'gloves', img: IMG('gloves.jpg'), name: '15针无缝一体成型腈纶莫代尔聚酯罗纹分指针织手套', en: '15G Wholegarment Seamless Acrylic Modal Polyester Ribbed Knit Gloves', series: ['accessories'],
                        desc: '15针细针距腈纶莫代尔聚酯混纺，51g轻薄保暖。罗纹编织贴合手部，分指设计灵活实用，秋冬日常保暖配件。',
                        crafts: [['针法', '1P 罗纹编织 + 分指结构'], ['针距', '15L（15针）'], ['纱线', '48% 腈纶 22% 莫代尔 30% 聚酯纤维'], ['工艺', '腈纶莫代尔混纺 · 罗纹编织 · 分指手套 · 轻薄保暖']],
                        details: [] },
                      { id: 'balaclava', img: IMG('balaclava.jpg'), name: '8针无缝一体成型羊毛羊绒罗纹巴拉克拉法帽', en: '8G Wholegarment Seamless Wool Cashmere Ribbed Balaclava', series: ['accessories'],
                        desc: '8针粗针距羊毛羊绒混纺，80g保暖透气。全成型无缝一体织造，经典巴拉克拉法帽型仅露双眼，罗纹组织贴合头颈，适合滑雪及户外极寒环境。',
                        crafts: [['针法', '2P 罗纹编织 + 全成型无缝一体成型'], ['针距', '8L（8针）'], ['纱线', '90% 羊毛 10% 羊绒'], ['工艺', '羊毛羊绒混纺 · 全成型无缝 · 巴拉克拉法帽型 · 罗纹贴合']],
                        details: [] },
                      { id: 'beanie', img: IMG('beanie.jpg'), name: '3针羊绒白厂丝绞花罗纹针织帽', en: '3G Cashmere Silk Cable Ribbed Beanie', series: ['accessories'],
                        desc: '3针粗针距羊绒丝混纺，53g轻盈保暖。经典绞花编织搭配罗纹翻边，柔软亲肤，适合秋冬日常搭配。',
                        crafts: [['针法', '4P 绞花编织 + 罗纹翻边'], ['针距', '3G（3针）'], ['纱线', '75% 羊绒 25% 丝'], ['工艺', '羊绒丝混纺 · 绞花编织 · 罗纹翻边 · 针织帽']],
                        details: [] },
                      { id: 'beret', img: IMG('beret.jpg'), name: '15针无缝米色羊绒贝雷帽', en: 'Beige Fuzzy Knit Beret', series: ['accessories'],
                        desc: '米色毛绒质感贝雷帽，帽身蓬松饱满，底部罗纹收口贴合头围。柔软保暖，秋冬日常搭配优雅单品。',
                        crafts: [['针法', '正反针无缝编织'], ['针距', '15针无缝一体成型'], ['纱线', '100% 羊绒'], ['工艺', '全羊绒 · 正反针无缝编织 · 蓬松贝雷帽']],
                        details: [] },
                      { id: 'black-beanie', img: IMG('black-beanie.jpg'), name: '羊绒白厂丝罗纹翻边冷帽', en: 'Cashmere Silk Ribbed Cuffed Beanie', series: ['accessories'],
                        desc: '75%羊绒25%白厂丝混纺，柔软亲肤光泽细腻。经典罗纹翻边冷帽，保暖轻盈，秋冬日常百搭单品。',
                        crafts: [['针法', '罗纹编织 + 翻边结构'], ['针距', '8针无缝一体成型'], ['纱线', '75% 羊绒 25% 白厂丝'], ['工艺', '羊绒丝混纺 · 罗纹组织 · 翻边冷帽']],
                        details: [] },
                      { id: 'fuzzy-beanie', img: IMG('fuzzy-beanie.jpg'), name: '3针羊绒白厂丝绞花毛绒针织帽', en: '3G Cashmere Silk Cable Fuzzy Beanie', series: ['accessories'],
                        desc: '3针粗针距羊绒丝混纺，49g轻盈保暖。绞花编织搭配毛绒质感，帽型饱满圆润，柔软亲肤，秋冬日常搭配。',
                        crafts: [['针法', '绞花编织 + 罗纹翻边'], ['针距', '3G（3针）'], ['纱线', '75% 羊绒 25% 白厂丝'], ['工艺', '羊绒白厂丝混纺 · 绞花编织 · 毛绒质感 · 圆顶帽型']],
                        details: [] },
                      { id: 'scarf', img: IMG('scarf.jpg'), name: '羊绒涤纶罗纹长围巾', en: 'Cashmere Polyester Ribbed Long Scarf', series: ['accessories'],
                        desc: '80%羊绒18%涤纶2%氨纶混纺，罗纹组织柔软富有弹性。经典长条围巾设计，深灰色调沉稳百搭，秋冬保暖时尚配饰。',
                        crafts: [['针法', '罗纹编织'], ['针距', '待确认'], ['纱线', '80% 羊绒 18% 涤纶 2% 氨纶'], ['工艺', '羊绒混纺 · 罗纹组织 · 长条围巾 · 保暖配饰']],
                        details: [] },
                      { id: 'jacquard-scarf', img: IMG('jacquard-scarf.jpg'), name: '全羊绒蕾丝提花长围巾', en: '100% Cashmere Jacquard Long Scarf', series: ['accessories'],
                        desc: '100%羊绒柔软亲肤，底部提花图案精致细腻。经典长条围巾设计，黑色沉稳百搭，秋冬保暖优雅配饰。',
                        crafts: [['针法', '平针编织 + 底部提花图案'], ['针距', '待确认'], ['纱线', '100% 羊绒'], ['工艺', '全羊绒 · 提花图案 · 长条围巾 · 保暖配饰']],
                        details: [] },
                      { id: 'snood', img: IMG('snood.jpg'), name: '灰色羊绒白厂丝围脖', en: 'Grey Cashmere Silk Snood', series: ['accessories'],
                        desc: '75%羊绒25%白厂丝混纺，柔软亲肤光泽细腻。围脖式闭环设计贴合颈部，灰色沉稳百搭，秋冬保暖优雅配饰。',
                        crafts: [['针法', '罗纹编织'], ['针距', '3针粗针距'], ['纱线', '75% 羊绒 25% 白厂丝'], ['工艺', '羊绒白厂丝混纺 · 围脖闭环设计 · 保暖亲肤']],
                        details: [] },
                      { id: 'camelsnood', img: IMG('Camelsnood.jpg'), name: '咖色羊绒白厂丝围脖', en: 'Camel Cashmere Silk Snood', series: ['accessories'],
                        desc: '75%羊绒25%白厂丝混纺，柔软亲肤光泽细腻。围脖式闭环设计贴合颈部，咖色温暖复古，秋冬保暖优雅配饰。',
                        crafts: [['针法', '罗纹编织'], ['针距', '3针'], ['纱线', '75% 羊绒 25% 白厂丝'], ['工艺', '羊绒白厂丝混纺 · 围脖闭环设计 · 保暖亲肤']],
                        details: [] },
                      { id: 'fringe-shawl', img: IMG('fringe-shawl.jpg'), name: '7针羊绒绢丝珠片平针流苏披肩', en: '7G Cashmere Silk Bead Fringe Shawl', series: ['accessories'],
                        desc: '7针粗针距羊绒丝混纺珠片纱，448g重磅质感。浅灰色调优雅高级，底部手工流苏须边设计增添灵动感，秋冬保暖造型披肩。',
                        crafts: [['针法', '1P 平针编织 + 底部手工流苏须边'], ['针距', '7G（7针）'], ['纱线', '75% 羊绒 23% 丝 2% 聚酯纤维珠片纱'], ['工艺', '羊绒丝珠片混纺 · 平针编织 · 底部流苏 · 重磅披肩']],
                        details: [] },
    ];

// Lookbook 灵感集
export const LOOKBOOK = [
  { img: IMG('lookbook.jpg'), caption: '在自然与光影之间' },
  { img: IMG('col-fashion.jpg'), caption: '时装的温度' },
  { img: IMG('col-aya.jpg'), caption: '轻盈叠搭' },
  { img: IMG('contact.jpg'), caption: '织物与石的对话' },
  { img: IMG('col-coperni.jpg'), caption: '雕塑感廓形' },
  { img: IMG('yarn.jpg'), caption: '从纤维开始' },
  { img: IMG('col-loverboy.jpg'), caption: '玩趣针织' },
  { img: IMG('hero.jpg'), caption: '静奢之姿' },
];

// ---------- Craftsmanship ----------
export const PROCESS = [
  { img: IMG('yarn.jpg'), no: '01', title: '纱线入库', desc: '甄选优质纱线，严格检验入库，从源头保障产品品质。' },
  { img: IMG('real-machine.jpg'), no: '02', title: '横机编织', desc: '高精度横机编织，确保织造稳定与一致性，成就每一件高品质作品。' },
  { img: IMG('proc-hands.jpg'), no: '03', title: '缝盘', desc: '经验丰富的缝盘师傅，精细缝合，赋予每一件产品的细节完美。' },
  { img: IMG('proc-wash.jpg'), no: '04', title: '洗水烘干', desc: '先进洗水与烘干工艺，赋予面料柔润肤感与自然垂坠。' },
  { img: IMG('proc-pack.jpg'), no: '05', title: '包装出货', desc: '精美包装，产品质检，确保产品安全、准时送达客户手中。' },
];

export const TECHS = [
  { img: IMG('tech-3d.jpg'), title: '3D无缝针织', enTitle: '3D Seamless Knitting', desc: '岛精全成型技术矩阵（8G-22G）', enDesc: 'Shimasakei WholeGarment Technology Matrix (8G-22G).', detail: '引入日本岛精领先的全成型电脑横机，覆盖8针、15针、18针、22针针距，实现3D立体一次编织。无需裁剪缝合，不仅根除侧缝摩擦痛点，更将纱线利用率推向极致。从运动功能服到高端贴身层，我们以无缝技术打通时尚与功能壁垒，并持续探索医疗、机器人领域的创新应用。', enDetail: 'Introducing the leading full-form computerized flat knitting machine from Japan\'s Shima Seiki, it covers 8-needle, 15-needle, 18-needle and 22-needle pitches, achieving 3D stereoscopic one-time knitting. No need for cutting or sewing. Not only does it eliminate the pain point of side seam friction, but it also pushes the yarn utilization rate to the extreme. From sports functional clothing to high-end close-fitting layers, we break down the barriers between fashion and functionality with seamless technology and continuously explore innovative applications in the medical and robotics fields.' },
  { img: IMG('real-needle.jpg'), title: '22针工艺', enTitle: '22-Gauge Craftsmanship', desc: '22针细密织造，成就更轻盈、更细腻的触感，每一针都蕴含科技与匠心。', enDesc: '22-gauge fine knitting delivers lighter, more delicate touch with every stitch.', detail: '针距越细，织物越轻薄细腻。22 针意味着每英寸 22 枚织针，对纱线支数、设备精度与技师经验都是极高考验。22 针织出的面料薄而密、柔而挺，垂坠自然、不易变形，配合高支羊绒或超细美利奴纱线，可呈现近似丝绸的光泽与触感，是高端精纺针织的标志性工艺。我们特别将22针无缝技术应用于功能性产品创新，在轻薄透气与结构支撑之间实现突破。', enDetail: 'The finer the gauge, the lighter and more delicate the fabric. 22 gauge means 22 needles per inch, demanding exceptional yarn quality, equipment precision and technician expertise. The resulting fabric is thin yet dense, soft yet structured, with natural drape and resistance to deformation. Combined with high-count cashmere or superfine Merino, it achieves a silk-like luster and touch — the hallmark of premium fine-gauge knitwear. We apply 22-gauge seamless technology to functional product innovation, breaking new ground between breathability and structural support.' },
  { img: IMG('real-machine.jpg'), title: '精密设备', enTitle: 'Precision Equipment', desc: '双品牌设备矩阵 · 全针型数字化智造', enDesc: 'Dual-brand equipment matrix · Full-needle digital manufacturing', detail: '我们的设备横跨传统电脑横机（品牌：慈星）3针、5针、7针、9针、12针、14针、16针全部针形，以及日本岛精全成型无缝电脑横机8针、15针、18针、22针针形。工厂配备全自动电脑横机与精密缝盘设备，从张力控制到密度校准全程数字化管理。每一批次织片都经过针距、克重、色差的逐项检测，确保不同批次、不同订单之间的品质高度一致。设备定期维护校准，配合恒温恒湿车间，让高端纱线在最佳状态下完成织造。', enDetail: 'Our equipment spans traditional computerized flat knitting machines (Cixing brand) in gauges 3, 5, 7, 9, 12, 14 and 16, as well as Shima Seiki wholegarment seamless machines in gauges 8, 15, 18 and 22. The factory is equipped with fully automatic computerized flat knitters and precision linking machines, with digital management of tension control and density calibration. Every batch of knitted panels undergoes individual inspection for gauge, weight and color difference, ensuring high consistency across batches and orders. Regular equipment maintenance and calibration, combined with temperature- and humidity-controlled workshops, allow premium yarns to be knitted in optimal conditions.' },
  { img: IMG('handcrafted.jpg'), title: '手工工艺', enTitle: 'Handcraft', desc: '我们有娴熟的手工编织匠人，可从开发到量产提供服务。', enDesc: 'Skilled hand-knitting artisans serving from development to mass production.', detail: '我们有娴熟的手工编织匠人，掌握手工钩针、手工棒针编织等传统技艺，可从开发到量产提供全流程服务。手工编织赋予每一件作品独特的温度与灵魂，无论是复杂的镂空花型、立体装饰还是精细的收边处理，都能以匠心呈现。从样品开发到批量生产，我们的手工团队能够精准还原设计意图，将创意转化为触手可及的精致织物。', enDetail: 'Our skilled hand-knitting artisans master traditional techniques including crochet and hand knitting, providing full-process service from development through mass production. Handcraft gives each piece unique warmth and soul — whether complex openwork patterns, three-dimensional embellishments or delicate edge finishing, all are executed with artisanal care. From sample development to bulk production, our handcraft team precisely translates design intent, transforming creative visions into tangible, exquisite textiles.' },
  { img: IMG('one.jpg'), title: '技术开发转化', enTitle: 'Technological development and transformation', desc: '从设计理念到横机针织技术转化，把概念落地成成品，并量产。', enDesc: 'From design concept to flat-knitting technology, turning ideas into mass-produced products.', detail: '从设计理念到横机针织技术转化，我们具备完整的概念落地能力。设计团队与工艺工程师紧密协作，将创意草图转化为可生产的针织结构，通过样衣试制、工艺优化到最终量产，实现从概念到成品的高效转化。无论是复杂的组织结构、特殊的纱线组合还是创新的后整工艺，我们都能将设计愿景精准落地，并确保量产阶段的一致性与稳定性。', enDetail: 'From design concept to flat-knitting technology, we possess complete concept-to-product capabilities. Our design team and process engineers collaborate closely to translate creative sketches into producible knit structures. Through sample prototyping, process optimization and final mass production, we achieve efficient conversion from concept to finished goods. Whether complex stitch structures, special yarn blends or innovative finishing techniques, we precisely realize design visions while ensuring consistency and stability at scale.' },
];

export const PROMISES = [
  { title: '质量第一', desc: '我们始终秉承"质量第一"的原则，以匠心精神打造每一件针织产品。' },
  { title: '产品终身保修', desc: '我们提供产品终身保修服务，让品质陪伴您每一个重要时刻。' },
  { title: '出厂合格率 99%', desc: '我们承诺产品出厂合格率高达 99%，以严苛标准守护每一件成品。' },
];

export const PARTNERS = ['TOP LINE', 'Consinee', 'XINAO TEXTILE', 'UPW', 'Suedwolle'];

// ---------- 核心优势 ----------
export const STRENGTHS = [
  { img: IMG('real-machine.jpg'), tagZh: '专利技术', tagEn: 'PATENTED', zh: '全成型无缝专利技术', en: 'Wholegarment Seamless Patent Technology',
    descZh: '22针超细针型无缝技术在功能性产品创新与应用上行业领先，从运动功能服到高端贴身层，打通时尚与功能的壁垒。',
    descEn: 'Our patented 22-gauge ultra-fine seamless technology leads the industry in functional product innovation — from athletic wear to premium base layers, breaking the barrier between fashion and function.' },
  { img: IMG('handcrafted.jpg'), tagZh: 'Handmade', tagEn: 'HANDMADE', zh: '手工钩针 · 手工棒针编织', en: 'Hand Crochet & Hand Knitting',
    descZh: '娴熟的手工编织匠人掌握传统手作技艺，从开发到量产提供全流程服务，赋予每一件作品独特的温度与灵魂。',
    descEn: 'Skilled artisans master traditional crochet and hand knitting, serving the full process from development to mass production, giving every piece unique warmth and soul.' },
  { img: '', tagZh: '', tagEn: '', zh: '精准版型与纸样把控', en: 'Precise Pattern & Fit Control',
    descZh: '在制作版型要求严苛的款式方面拥有丰富经验，精准的纸样制作与稳定一致的版型效果，是对品质有极致要求的品牌的首选伙伴。',
    descEn: 'Extensive experience in fit-critical styles. Precise pattern-making and consistently accurate fit make us the trusted partner for quality-driven brands.' },
  { img: '', tagZh: 'EST. 2024', tagEn: 'EST. 2024', zh: '数字化样衣 · STYLE 3D', en: 'Digital Sampling · STYLE 3D',
    descZh: '自2024年成立数字内容团队，运用 STYLE 3D 软件实现首轮样衣数字化，大幅缩短开发周期并降低打样成本。',
    descEn: 'Since 2024, our in-house digital content team delivers first-round samples via STYLE 3D, significantly shortening development cycles and reducing sampling costs.' },
];

export const STRENGTH_STATS = [
  { value: 26, prefix: '', unitZh: ' 道', unitEn: '', zh: '严苛质量管控', en: 'Rigorous Quality Control', labelZh: '全流程品控节点 · 出厂合格率 99%', labelEn: 'Quality checkpoints across the process · 99% factory pass rate' },
  { value: 10, prefix: '7-', unitZh: ' 天', unitEn: ' days', zh: '及时交付', en: 'On-Time Delivery', labelZh: '样品快速交付 · 大货 45-70 天', labelEn: 'Samples in 7-10 days · Bulk delivery in 45-70 days' },
];

// ---------- 服务与交付 ----------
export const SERVICES = [
  { value: 30, prefix: '', suffix: '万+', unitZh: '件/年', unitEn: 'pcs/year', zh: '年产能', en: 'Annual Capacity', descZh: '月产 3 万件毛衣，年产 30 万件', descEn: '30,000 pieces monthly, 300,000 pieces annually' },
  { value: 10, prefix: '7-', suffix: '', unitZh: '天', unitEn: 'days', zh: '样品交付周期', en: 'Sample Lead Time', descZh: '从确认需求到样品寄出', descEn: 'From confirmed requirement to sample dispatch' },
  { value: 70, prefix: '45-', suffix: '', unitZh: '天', unitEn: 'days', zh: '大货交付周期', en: 'Bulk Lead Time', descZh: '视订单量与工艺复杂度而定', descEn: 'Depending on order volume and complexity' },
  { value: 0, prefix: '', suffix: '', unitZh: '', unitEn: '', zh: '合作模式', en: 'Trade Terms', descZh: 'FOB · CIF · DAP · DDP（DDP 仅限欧洲）', descEn: 'FOB · CIF · DAP · DDP (DDP for EU only)' },
];

export const TRADE_TERMS = [
  { term: 'FOB', zh: '离岸价', en: 'Free On Board', descZh: '货物在装运港装上船后，风险与费用即转移给买方。适合拥有自有物流渠道的客户。', descEn: 'Risk and cost transfer to the buyer once goods are loaded on board at the port of shipment. Ideal for clients with their own logistics channels.' },
  { term: 'CIF', zh: '成本、保险费加运费', en: 'Cost, Insurance & Freight', descZh: '卖方承担货物运至目的港的运费与保险费。适合希望简化运输安排的客户。', descEn: 'The seller covers freight and insurance to the destination port. Suitable for clients who prefer simplified shipping arrangements.' },
  { term: 'DAP', zh: '目的地交货', en: 'Delivered At Place', descZh: '卖方负责将货物运输至买方指定地点，进口清关由买方办理。', descEn: 'The seller delivers goods to the buyer\'s named destination; import clearance is handled by the buyer.' },
  { term: 'DDP', zh: '完税后交货（仅限欧洲）', en: 'Delivered Duty Paid (EU Only)', descZh: '卖方承担运输、清关及全部税费，门到门一站式服务。目前仅限欧洲地区。', descEn: 'The seller covers shipping, customs clearance and all duties — a true door-to-door service. Currently available for Europe only.' },
];
// ---------- Brand Story ----------
export const TIMELINE = [
  { date: '2016.11.17', title: '公司成立', desc: '公司成立于2016年11月17日，深耕于毛衫设计、生产及服务。' },
  { date: '至今', title: '稳步前行', desc: '持续深耕针织领域，专注工艺创新与品质提升，携手品牌共同成长。' },
];

export const VISION = [
  { period: '2-3年', desc: '突破纺织服装行业限制，拓展无缝编织的跨界应用。' },
  { period: '3-5年', desc: '实现机器人皮肤、医疗、汽车等领域产品落地及量产，成为3D无缝编织领域技术引领者，树立中国制造新形象。' },
];

export const MISSION = ['为客户创造价值', '为行业发展创造价值', '为员工的美好生活创造价值', '坚守品质目标'];

export const COLLABS = [
  { img: IMG('col-coperni.jpg'), name: 'COPERNI' },
  { img: IMG('col-acw.jpg'), name: 'A COLD WALL' },
  { img: IMG('col-aya.jpg'), name: 'AYA MUSE' },
  { img: IMG('col-loverboy.jpg'), name: 'Charles Jeffrey LOVERBOY' },
];

export const TEAM_STATS = [
  { value: 50, suffix: '+', label: '团队成员' },
  { value: 10, suffix: '+', label: '专业技术人员' },
  { value: 10, suffix: '+ 年', label: '行业经验平均' },
];

// ---------- Sustainability ----------
export const COMMITMENTS = [
  { title: '环境友好', desc: '减少资源消耗与污染排放，推动循环利用，守护生态平衡。' },
  { title: '负责任原料', desc: '优先选择可再生、可追溯的原料，严控动物福利与土地健康。' },
  { title: '绿色制造', desc: '建设绿色工厂，持续优化工艺与能源结构，降低碳足迹。' },
  { title: '以人为本', desc: '保障员工权益与健康安全，营造多元、平等、包容的工作环境。' },
  { title: '合作共赢', desc: '与供应商、客户及行业伙伴紧密合作，共同推动可持续价值链。' },
];

export const CERTS_ENV = [
  { img: IMG('cert-gots.png'), label: 'GOTS 全球有机纺织品标准' },
  { img: IMG('cert-o100.png'), label: 'OCS 100 有机含量标准' },
  { img: IMG('cert-ob.png'), label: 'OCS Blended 有机混纺含量标准' },
  { img: IMG('cert-grs.png'), label: 'GRS 全球回收标准' },
  { img: IMG('cert-ras.png'), label: 'RAS 负责任羊驼毛标准' },
  { img: IMG('cert-rms.png'), label: 'RMS 负责任马海毛标准' },
  { img: IMG('cert-rws.png'), label: 'RWS 负责任羊毛标准' },
  { img: IMG('cert-sfa.png'), label: 'SFA 可持续纤维联盟' },
];
export const CERT_DUNS = IMG('cert-duns.png');
export const CERT_BSCI = IMG('cert-bsci.png');

export const MATERIALS = [
  { img: IMG('m-wool.jpg'), zh: '可追溯羊毛', en: 'Traceable Wool', desc: '源自通过 RWS 认证的牧场，从牧场到成衣全程可追溯，保障动物福利与土地健康。' },
  { img: IMG('m-cashmere.jpg'), zh: '可追溯羊绒', en: 'Traceable Cashmere', desc: '甄选优质绒山羊原料，纤维细长柔软，来源透明可查，兼顾奢华触感与生态责任。' },
  { img: IMG('m-cotton.jpg'), zh: '有机棉', en: 'Organic Cotton', desc: '通过 GOTS / OCS 认证的有机种植棉花，无有害化学残留，亲肤透气，对环境更友好。' },
  { img: IMG('m-nylon.jpg'), zh: '再生尼龙', en: 'Recycled Nylon', desc: '通过 GRS 认证的再生纤维，由回收材料重生而成，减少原生资源消耗与碳排放。' },
];

export const IMPACT = [
  { value: -32, suffix: '%', label: '单位产品碳排放较2021年下降' },
  { value: -28, suffix: '%', label: '单位产品能耗较2021年下降' },
  { value: 78, suffix: '%', label: '可再生能源使用比例' },
  { value: 92, suffix: '%', label: '环保认证原料使用比例' },
  { value: 100, suffix: '%', label: '合规排放与废水处理达标' },
];

// ---------- Contact ----------
export const CONTACT = {
  address: '苏州市吴中区临湖镇石舍村4组',
  phone: '+86 180 2146 1929',
  email: 'sales@szrainbow.cn',
  hours: '周一至周五 9:00 - 18:00 (UTC+8)',
};

export const FAQS = [
  { q: '闰博尔主要提供哪些产品？', a: '我们专注于高端精纺针织品，涵盖时装、高尔夫、滑雪、越野跑四大系列，包括毛衣、开衫、背心、连帽衫等全品类针织产品；同时掌握 22 针 3D 无缝针织技术，从解决方案、产品研发到生产提供全套服务。' },
  { q: '可以申请样品吗？', a: '可以。我们支持样品申请与打样服务，请通过留言表单或邮件告知您的需求，我们的团队会在 1-2 个工作日内回复。' },
  { q: '产品的最低起订量是多少？', a: '我们支持无起订量的灵活生产模式，可根据您的需求快速响应，助力品牌灵活运作。' },
  { q: '是否提供定制标签或 OEM/ODM 服务？', a: '是的，我们提供完整的 OEM/ODM 服务，包括定制标签、包装与版型开发，从设计到交付一站式支持。' },
  { q: '你们能提供 3D 无缝针织技术吗？', a: '可以。我们掌握 22 针 3D 无缝针织技术，提供从解决方案、产品研发到生产制造的全套服务：一体成型、减少缝合，兼顾穿着舒适度与生产效率。' },
  { q: '你们产品和工厂有哪些认证？', a: '工厂通过 GOTS、OCS、RWS、RMS、RAS、GRS、SFA 等环境认证，以及 amfori BSCI 社会责任认证与邓白氏企业认证。' },
  { q: '如何开始合作？', a: '您可以通过本页留言、邮件或电话与我们联系，我们会安排专属顾问与您对接需求、报价与打样流程。' },
];

export const SOCIALS = [
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'WeChat', url: '#' },
  { name: 'WhatsApp', url: 'https://wa.me/8618021461929' },
];