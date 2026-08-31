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
];

// 单品：series 对应上方系列 id；crafts 为针织工艺说明；details 为细节图
export const PRODUCTS = [
  { id: 'golfjacket', img: IMG('golfjacket.jpg'), name: '18针羊毛PBT混纺平针连帽拉链高尔夫外套', en: '18G Wool PBT Blend Hooded Zip Golf Jacket', series: ['golf', 'fashion'],
    desc: '18针细针距羊毛PBT混纺，17.5微米超细羊毛带来柔软亲肤触感。连帽拉链结构搭配功能性口袋，适合高尔夫运动及日常休闲穿搭。',
    crafts: [['针法', '3P 四平编织 + 罗纹收口'], ['针距', '18G（18针）'], ['纱线', '85% 羊毛（17.5微米）15% PBT'], ['工艺', '超细羊毛PBT混纺 · 连帽拉链结构 · 功能性口袋 · 罗纹收口']],
    details: [] },
  { id: 'sequin-dress', img: IMG('sequin-dress.jpg'), name: '手钩亮片裙', en: 'Hand-Crochet Sequin Dress', series: ['fashion'],
    desc: '纯手工钩编网眼组织，1/5NM人造丝与1/7.5NM粘胶纤维混用，细肩带方领修身包臀款，全身幻彩扇形亮片点缀，镂空透视优雅别致。',
    crafts: [['针法', '手工钩编网眼组织'], ['针距', 'Handmade 手工制作'], ['纱线', '1/5NM 100% Rayon + 1/7.5NM 100% Viscose'], ['工艺', '手工钩编 · 亮片装饰 · 细肩带修身 · 透视效果']],
    details: [] },
  { id: 'cardigan2', img: IMG('cardigan.jpg'), name: '燕麦色闪片开衫', en: 'Oatmeal Sequin Cardigan', series: ['fashion'],
    desc: '5针粗针距挑孔镂空组织，2P+1P2并线进纱，棉麻锦纶亮片混纺，圆领前中开扣开衫，竖向镂空纹理透气富有层次。',
    crafts: [['针法', '2P+1P2 挑孔镂空 + 罗纹收口'], ['针距', '5 针（5G）粗针距'], ['纱线', '61%棉 30%亚麻 5%锦纶 4%亮片，1/11支与2/32支混用'], ['工艺', '挑孔镂空编织 · 亮片点缀 · 开衫结构 · 套口缝合 · 罗纹收口']],
    details: [] },
    { id: 'golfset', img: IMG('golfset.jpg'), name: '菱格纹套装', en: 'Diamond Pattern Golf Set', series: ['golf'],
      desc: '14针单面进纱平针底组织，提花嵌花工艺呈现菱形格纹，50%羊毛50%腈纶混纺，翻领设计搭配罗纹收口，上衣半裙两件套组合。',
      crafts: [['针法', '14G 1P 平针 + 提花嵌花'], ['针距', '14 针（14G）'], ['纱线', '50% 羊毛 50% 腈纶混纺 2070-1.6'], ['工艺', '提花嵌花 · 翻领设计 · 罗纹收口 · 套装结构']],
      details: [] },
      { id: 'coldchange', img: IMG('coldchange.jpg'), name: '16针超细美丽奴羊毛冷感变色羽绒服', en: '16G Super-fine Merino Cold-Sensitive Color-Changing Down Jacket', series: ['ski'],
        desc: '16针超细美利奴羊毛结合冷感变色纱线，低温环境下呈现独特色彩变化。蓬松绗缝结构搭配拉链开襟，轻盈保暖。',
        crafts: [['针法', '1P 平针编织 + 罗纹收口'], ['针距', '16G（16针）'], ['纱线', '100% 超细美利奴羊毛 / 100% 聚酯纤维冷感变色纱'], ['工艺', '超细美利奴羊毛编织 · 冷感低温变色 · 绗缝填充保暖 · 拉链开襟']],
        details: [] },
      { id: 'turtleneck', img: IMG('p-turtleneck.jpg'), name: '羊绒高领毛衣', en: 'Cashmere Turtleneck', series: ['fashion', 'ski'],
    desc: '甄选可追溯羊绒纱线，高领贴合颈部曲线，罗纹织法赋予自然弹性，是秋冬衣橱的恒久之选。',
    crafts: [['针法', '2x2 罗纹 + 平针主体'], ['针距', '22 针细针距'], ['纱线', '100% 可追溯羊绒'], ['工艺', '整件缝盘 · 手工套口']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-hands.jpg'), IMG('proc-wash.jpg')] },
  { id: 'zip', img: IMG('p-zip.jpg'), name: '美利奴半拉链毛衣', en: 'Merino Half-Zip', series: ['golf', 'fashion'],
    desc: '超细美利奴羊毛织造，半拉链设计便于运动时调节体温，腋下立体剪裁活动自如。',
    crafts: [['针法', '平针 + 袖口罗纹'], ['针距', '22 针细针距'], ['纱线', '19.5μm 超细美利奴'], ['工艺', '拉链门襟手工包边']],
    details: [IMG('m-wool.jpg'), IMG('proc-machine.jpg'), IMG('proc-wash.jpg')] },
  { id: 'vest', img: IMG('p-vest.jpg'), name: '经典保暖针织背心', en: 'Classic Knit Vest', series: ['fashion', 'golf'],
    desc: 'V 领经典版型，轻盈保暖不臃肿，叠穿衬衫或高领皆宜，通勤与球场两相宜。',
    crafts: [['针法', '平针 + V 领收针'], ['针距', '22 针细针距'], ['纱线', '羊毛羊绒混纺'], ['工艺', '领口一体成型编织']],
    details: [IMG('m-wool.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'hoodie', img: IMG('p-hoodie.jpg'), name: '细针距针织连帽衫', en: 'Fine-Gauge Knit Hoodie', series: ['fashion'],
    desc: '22 Gauge 细针距织就，布面细腻轻柔，运动与日常场景皆舒适贴合，轻量保暖。',
    crafts: [['针法', '平针 + 罗纹收口'], ['针距', '22 Gauge 细针距'], ['纱线', '再生尼龙混纺'], ['工艺', '整件缝盘 · 套口收边']],
    details: [IMG('tech-3d.jpg'), IMG('m-nylon.jpg'), IMG('proc-machine.jpg')] },
  { id: 'cardigan', img: IMG('p-cardigan.jpg'), name: '精梳开衫', en: 'Combed Cardigan', series: ['fashion'],
    desc: '精梳长绒纱线织就，天然牛角扣点缀，垂坠柔润，是四季皆宜的温柔外层。',
    crafts: [['针法', '平针 + 门襟罗纹'], ['针距', '22 针细针距'], ['纱线', '精梳棉羊毛混纺'], ['工艺', '手工钉扣 · 套口收边']],
    details: [IMG('m-cotton.jpg'), IMG('proc-hands.jpg'), IMG('proc-pack.jpg')] },
  { id: 'vneck', img: IMG('p-vneck.jpg'), name: '细支针织上衣', en: 'Fine-Gauge V-Neck', series: ['fashion', 'golf'],
    desc: '高支细针织造，薄如第二层肌肤，V 领修饰颈线，单穿打底皆显质感。',
    crafts: [['针法', '平针细织'], ['针距', '22 针细针距'], ['纱线', '高支棉羊绒'], ['工艺', '整件缝盘 · 低温定型']],
    details: [IMG('m-cashmere.jpg'), IMG('proc-wash.jpg'), IMG('proc-machine.jpg')] },
  { id: 'skibase', img: IMG('ski1.png'), name: '滑雪速干衣', en: 'Ski Base Layer', series: ['ski'],
      desc: '15针双纱并织，甄选91%美利奴超细羊毛与弹性纤维混纺，高弹回复、防缩可机洗，结构紧密抗起球，为滑雪运动提供贴身舒适与温度调节。',
      crafts: [['针法', '1P+1P 双纱并织'], ['针距', '15 针（15GG）'], ['纱线', 'SARMA TEC 2/60Nm，91% 美利奴超细羊毛 + 9% 弹性纤维'], ['工艺', '精纺合股 · 防缩处理 · 高弹抗起球']],
      details: [] },
  { id: 'skipants', img: IMG('ski2.png'), name: '滑雪速干裤', en: 'Ski Base Pants', series: ['ski'],
        desc: '15针双纱并织，甄选91%美利奴超细羊毛与弹性纤维混纺，高弹回复、防缩可机洗，结构紧密抗起球，为滑雪运动提供贴身舒适与温度调节。',
        crafts: [['针法', '1P+1P 双纱并织'], ['针距', '15 针（15GG）'], ['纱线', 'SARMA TEC 2/60Nm，91% 美利奴超细羊毛 + 9% 弹性纤维'], ['工艺', '精纺合股 · 防缩处理 · 高弹抗起球']],
        details: [] },
  { id: 'handhook', img: IMG('handhook.jpg'), name: '墨绿色手勾上衣', en: 'Hand-Crochet Mesh Top', series: ['fashion'],
            desc: '纯手工钩编网眼组织，1/5NM人造丝纱线，方领修身收腰版型，手工缝缀亮片点缀，镂空透视设计优雅别致。',
            crafts: [['针法', '手工钩编网眼组织'], ['针距', 'Handmade 手工制作'], ['纱线', '1/5NM 100% 人造丝（Rayon）'], ['工艺', '手工钩编 · 亮片装饰 · 方领修身 · 透视镂空']],
            details: [] },
  { id: 'jumpsuit', img: IMG('jumpsuit.jpg'), name: '15针无缝羊毛再生尼龙平针迷彩拼接拉链连体衣', en: '15G Seamless Wool Recycled Nylon Camo Jumpsuit', series: ['ski'],
              desc: '15针无缝羊毛再生尼龙混纺，多组织迷彩拼接设计。拉链翻领连体剪裁，558g贴身保暖，适合滑雪与户外运动。',
              crafts: [['针法', '无缝提花 + 罗纹 + 多组织迷彩拼接'], ['针距', '15L（15针）'], ['纱线', '65% 羊毛 35% 再生尼龙'], ['工艺', '羊毛再生尼龙混纺 · 迷彩多组织拼接 · 拉链翻领连体 · 贴身剪裁']],
              details: [] },
  { id: 'tiedye', img: IMG('tie-dye.jpg'), name: '15针无缝一体成型羊毛再生尼龙提花扎染高领紧身衣', en: '15G Seamless Wool Recycled Nylon Tie-Dye High Neck Pullover', series: ['ski', 'fashion'],
              desc: '15针无缝一体成型羊毛再生尼龙混纺，手工扎染工艺呈现独特黑白晕染效果。高领贴身剪裁，轻盈保暖，单穿内搭皆宜。',
              crafts: [['针法', '平针编织 + 罗纹高领/袖口'], ['针距', '15L（15针）'], ['纱线', '100% 羊毛 100% 再生尼龙（双纱 2/48, 1/38）'], ['工艺', '羊毛再生尼龙混纺 · 手工扎染 · 高领贴身 · 罗纹收口']],
              details: [] },
              { id: 'gauge-mix', img: IMG('gauge-mix.jpg'), name: '22针全成型全羊毛超轻多组织无缝圆领针织衫', en: '22G 100% Merino Wool Wholegarment Seamless Ultra Light-Weight Crew Neck Sweater', series: ['fashion', 'trail'],
                desc: '22针极细针距全羊毛，全成型无缝一体织造。袖子与后背采用不同针型组织变化，110g轻薄透气，圆领修身剪裁，适合运动以及春夏日常穿搭。',
                crafts: [['针法', '1P 平针 + 袖子/后背多组织变化 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '100% 超细美利奴羊毛（2/60）'], ['工艺', '全羊毛22L全成型无缝 · 多组织针型变化 · 圆领修身 · 轻薄透气']],
                details: [] },
              { id: 'seamless', img: IMG('seamless.jpg'), name: '22针全成型汉麻莱赛尔平针无缝运动背心', en: '22G Macel Hemp Lyocell Wholegarment Seamless Sports Bra', series: ['fashion', 'trail'],
                desc: '22针极细针距汉麻莱赛尔混纺氨纶，全成型无缝一体织造。背心式U领连体剪裁，47g超轻贴身，透气亲肤，适合运动以及春夏内搭或单穿。',
                crafts: [['针法', '1P 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '98% 汉麻莱赛尔（macel）2% 氨纶'], ['工艺', '汉麻莱赛尔混纺 · 全成型无缝一体织造 · 背心式连体 · U领贴身']],
                details: [] },
              { id: 'vent', img: IMG('vent.jpg'), name: '22针全成型粘胶聚乙烯平针腋下挑孔透气超轻越野跑无缝T恤', en: '22G Viscose Polyethylene Underarm Vent Trail Seamless Ultra Light-Weight Tee', series: ['trail'],
                desc: '22针极细针距粘胶聚乙烯混纺，全成型无缝一体织造。腋下挑孔镂空透气结构，专为越野跑设计，增强散热排汗。61g轻薄半透明，修身短袖，亲肤凉感，适合高强度户外运动。',
                crafts: [['针法', '1P 平针编织 + 腋下挑孔镂空透气 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '50% 粘胶 50% 聚乙烯'], ['工艺', '粘胶聚乙烯混纺 · 全成型无缝一体织造 · 腋下挑孔透气 · 轻薄半透明 · 越野跑功能剪裁']],
                details: [] },
              { id: 'side-vent', img: IMG('side-vent.jpg'), name: '22针全成型再生凉感聚酯棉平针花纹组织侧身挑孔透气越野跑无缝超轻背心', en: '22G Recycled Cool Polyester Cotton Pattern Knit Side Vent Trail Seamless Ultra Light-Weight Vest', series: ['trail'],
                desc: '22针极细针距再生凉感聚酯棉混纺，全成型无缝一体织造。正面采用花纹组织变化，侧身挑孔镂空透气结构，专为越野跑设计，增强散热排汗。超轻90g轻薄透气，无袖背心剪裁，适合高强度户外运动。',
                crafts: [['针法', '1P 平针编织 + 正面花纹组织 + 侧身挑孔镂空透气 + 全成型无缝一体成型'], ['针距', '22L（22针）'], ['纱线', '52% 再生凉感聚酯 48% 棉'], ['工艺', '再生凉感聚酯棉混纺 · 全成型无缝一体织造 · 正面花纹组织 · 侧身挑孔透气 · 越野跑功能剪裁']],
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
  { img: IMG('tech-3d.jpg'), title: '3D无缝针织', desc: '创新3D无缝针织 22 GAUGE TECHNOLOGY，我们的创新厚度：22针技术。',
    detail: '3D 无缝针织通过电脑横机一次成型织出整件衣片，无需裁剪与缝合，彻底消除侧缝带来的摩擦与浪费。纱线利用率接近 100%，一件成衣从纱线到织片一次完成，既减少材料损耗，也让穿着体验如第二层肌肤般贴合。我们将其应用于运动系列与高端贴身针织，是跨界拓展至医疗、汽车等领域的技术底座。' },
  { img: IMG('real-needle.jpg'), title: '22针工艺', desc: '22针细密织造，成就更轻盈、更细腻的触感，每一针都蕴含科技与匠心。',
    detail: '针距越细，织物越轻薄细腻。22 针意味着每英寸 22 枚织针，对纱线支数、设备精度与技师经验都是极高考验。22 针织出的面料薄而密、柔而挺，垂坠自然、不易变形，配合高支羊绒或超细美利奴纱线，可呈现近似丝绸的光泽与触感，是高端精纺针织的标志性工艺。' },
  { img: IMG('real-machine.jpg'), title: '精密设备', desc: '高端针织设备，确保织造稳定性与一致性，成就每一件高品质针织作品。',
    detail: '工厂配备全自动电脑横机与精密缝盘设备，从张力控制到密度校准全程数字化管理。每一批次织片都经过针距、克重、色差的逐项检测，确保不同批次、不同订单之间的品质高度一致。设备定期维护校准，配合恒温恒湿车间，让高端纱线在最佳状态下完成织造。' },
];

export const PROMISES = [
  { title: '质量第一', desc: '我们始终秉承"质量第一"的原则，以匠心精神打造每一件针织产品。' },
  { title: '产品终身保修', desc: '我们提供产品终身保修服务，让品质陪伴您每一个重要时刻。' },
  { title: '出厂合格率 99%', desc: '我们承诺产品出厂合格率高达 99%，以严苛标准守护每一件成品。' },
];

export const PARTNERS = ['TOP LINE', 'Consinee', 'XINAO TEXTILE', 'UPW', 'Suedwolle'];

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
