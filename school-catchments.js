/**
 * 施教范围（小区）补充数据
 * 说明：
 * 1) 数据按学校 id 对齐 school-data.js
 * 2) 以官方公告/学校公示为主，公开平台为辅
 * 3) 施教区每年可能调整，最终以当年教育部门公告为准
 */
const SCHOOL_CATCHMENTS = {
  p1: {
    schoolYear: '2025',
    communities: [
      '新馨花园', '宜家公寓', '苏都花园', '师惠花苑', '映象花苑', '白领公寓',
      '环球188（住宅）', '四季新家园', '加城花园', '苏信大厦', '湖左岸', '东方之门（住宅）',
      '嘉怡苑', '馨湖园', '翠湖雅居', '澜韵园', '东方春晓', '晋园别墅',
      '苏悦国际公寓（住宅）', '苏州中心8号（住宅）', '苏州中心9号（住宅）'
    ],
    notes: '另含对应边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '星海小学 2025 入学政策公示', url: 'https://szxhxx.sipedu.org/xwgk/zssf/content_961721' },
      { name: '苏州市政府转发：园区小学施教区公告（含 PDF）', url: 'https://www.suzhou.gov.cn/szsrmzf/zxxjy/202405/3986c35b9a884893811bfd97a9fa61fc/files/7f66bbe94ab54749ac93a576139e464e.pdf' }
    ]
  },
  p2: {
    schoolYear: '2025',
    communities: [
      '中茵皇冠', '湖畔花园', '沁苑小区', '玲珑湾花园', '中海花园',
      '和风雅致花园', '新未来花园（雷迪森/泊爵/风尚/萧邦）', '中锐星汇生活广场（住宅）'
    ],
    notes: '另含对应边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '星湾学校 2025 入学政策公示', url: 'https://sipxw.sipedu.org/xwgk/zstl/content_961488' },
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  p3: {
    schoolYear: '2025',
    communities: [
      '星湖花园', '海尚壹品', '中央景城', '翡翠国际', '华景花园', '紫荆苑',
      '万科朗拾（朗星雅苑）', '圆融星座', '乐嘉大厦', '金匙望湖大厦', '晋合广场',
      '丰隆城市生活广场', '诚品居所', '鑫能商务广场', '苏州国际金融中心（住宅）',
      '中海·星湖ONE', '金鸡湖畔瑞园', '泊悦澜庭'
    ],
    notes: '另含对应边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '景城学校小学部 2025 入学政策公示', url: 'https://sipjcs.sipedu.cn/hfjs1/gfzs1/content_961576' },
      { name: '苏州市政府转发：园区小学施教区公告（含 PDF）', url: 'https://www.suzhou.gov.cn/szsrmzf/zxxjy/202405/3986c35b9a884893811bfd97a9fa61fc/files/7f66bbe94ab54749ac93a576139e464e.pdf' }
    ]
  },
  p4: {
    schoolYear: '2022-2026（多源交叉）',
    communities: [
      '半岛花园', '金鸡湖花园', '金水湾', '怡和花园', '名湖花园', '荣域花园',
      '水墨江南', '双湖湾', '仁恒海和院', '仁恒观棠', '高尔夫花园', '城邦花园',
      '水云居', '和乔丽晶', '御湖熙岸华府', '御湖熙岸观邸', '水巷邻里花园',
      '国宾花园', '玉园花园', '世茂铜雀台', '绿城桃花源', '湖滨四季', '康帝庄园',
      '圆融星座', '乐嘉大厦', '金匙望湖大厦', '晋合广场', '丰隆城市生活广场',
      '诚品居所', '鑫能商务广场', '苏州国际金融中心（住宅）', '中海·星湖ONE'
    ],
    notes: '部分年度公开名单还包含新增楼盘（如绿城玫瑰园等），请以当年公告为准。',
    sources: [
      { name: '苏州市教育局施教区（2022-2023）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202208/6b5042ce18514af28cb8f4387d12d53f.shtml' },
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m7: {
    schoolYear: '2021-2025（公开口径）',
    communities: [
      '天域花园（一/二/三期）', '中茵皇冠', '星海人家', '新加花园', '加城湖滨',
      '湖畔花园', '沁苑小区', '玲珑湾花园', '中海花园', '和风雅致花园',
      '新未来花园（雷迪森/泊爵/风尚/萧邦）', '中锐星汇生活广场'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m8: {
    schoolYear: '2022-2026（公开口径）',
    communities: [
      '半岛花园', '金鸡湖花园', '金水湾', '怡和花园', '名湖花园', '荣域花园',
      '水墨江南', '双湖湾', '仁恒海和院', '仁恒观棠', '高尔夫花园', '城邦花园',
      '水云居', '和乔丽晶', '御湖熙岸华府', '御湖熙岸观邸', '水巷邻里花园',
      '国宾花园', '玉园花园', '世茂铜雀台', '绿城桃花源', '湖滨四季', '康帝庄园',
      '圆融星座', '乐嘉大厦', '金匙望湖大厦', '晋合广场', '丰隆城市生活广场',
      '诚品居所', '鑫能商务广场', '苏州国际金融中心（住宅）'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2022-2023）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202208/6b5042ce18514af28cb8f4387d12d53f.shtml' },
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m13: {
    schoolYear: '2022-2025（公开口径）',
    communities: [
      '星湖花园', '海尚壹品', '中央景城', '翡翠国际', '华景花园', '紫荆苑',
      '圆融星座', '乐嘉大厦', '金匙望湖大厦', '晋合广场', '丰隆城市生活广场',
      '诚品居所', '鑫能商务广场', '苏州国际金融中心（住宅）', '苏州环贸广场（住宅）'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2022-2023）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202208/6b5042ce18514af28cb8f4387d12d53f.shtml' },
      { name: '景城学校小学部 2025 入学政策公示（同片区参考）', url: 'https://sipjcs.sipedu.cn/hfjs1/gfzs1/content_961576' }
    ]
  },
  m3: {
    schoolYear: '2021-2025（公开口径）',
    communities: [
      '都市花园1-42幢', '天翔花园', '新天翔广场（住宅）', '恒宇商务广场（住宅）',
      '凤凰广场乐嘉服务公寓（住宅）', '韶山花园', '新馨花园', '宜家公寓', '苏都花园',
      '师惠花苑', '映象花苑', '白领公寓', '环球188（住宅）', '四季新家园', '加城花园',
      '苏信大厦', '嘉怡苑', '馨湖园', '湖左岸', '苏悦国际（住宅）', '东方之门（住宅）',
      '翠湖雅居', '澜韵园', '东方春晓', '晋园别墅', '苏州中心8号（住宅）', '苏州中心9号（住宅）'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m5: {
    schoolYear: '2021（公开口径）',
    communities: [
      '丽舍花园（巴黎印象）', '伊顿小镇', '德怡', '逸庭花园', '万科见滨园', '本岸',
      '澳韵花园', '朗诗国际街区', '枫情水岸', '春之韵', '东湖大郡一期', '东湖大郡二期',
      '东湖大郡三期', '东城郡', '金湖湾花园', '湖畔天城', '欧典花园', '第五元素',
      '东湖林语', '海悦馨园', '建屋芳洲', '自由水岸', '中海海悦花园六区', '中海海悦花园七区',
      '领汇广场（住宅）', '云顶汇（住宅）', '华琚花园'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m11: {
    schoolYear: '2021（公开口径）',
    communities: [
      '白塘景苑', '玲东花园', '铂悦府', '时代上城花园一区', '时代上城花园二区',
      '时代上城花园三区', '时代上城花园四区', '钟南花苑', '榭雨苑', '香颂花园',
      '太阳星辰花园一区', '太阳星辰花园二区', '太阳星辰花园三区', '太阳星辰花园四区', '汀兰家园'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  m15: {
    schoolYear: '2021-2026（公开口径）',
    communities: [
      '都市花园43-84幢', '万杨香樟公寓', '新城花园', '苏安新村', '新苏苑', '绿城花园',
      '东港二村', '贵都花园', '华庭苑', '三星苑', '东港新村（含一斗山路）', '东方花园',
      '东环路221-223号', '娄门路'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' },
      { name: '苏州本地宝（2026 园区小学施教区）', url: 'https://suzhou.bendibao.com/edu/2026529/136851.shtm' }
    ]
  },
  m18: {
    schoolYear: '2021（公开口径）',
    communities: [
      '月亮湾美颂花园', '铂悦犀湖', '星湖公馆', '翰林缘', '海德公园',
      '紫金东方商务广场（住宅）', '兰亭半岛生活广场（住宅）', '花语江南'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  p8: {
    schoolYear: '2023-2025（公开口径）',
    communities: [
      '狮山新苑（含狮山花苑、阳光公寓）', '锦华苑', '锦丽苑', '锦宁阁', '锦昌苑',
      '挹翠华庭', '滨河花苑', '姑苏花苑', '美之苑', '何山花园', '名都花园',
      '今日家园', '科技学院江枫园', '金枫苑', '曙光苑', '和乐家园', '汇豪国际', '曙光村'
    ],
    notes: '对应“苏州高新区实验小学教育集团（金山路校区）”公开口径；年度可能调整。',
    sources: [
      { name: '苏州本地宝（2025 高新区小学学区汇总，含历年口径）', url: 'http://suzhou.bendibao.com/edu/201516/50172.shtm' },
      { name: '苏州市教育局（2024 高新区施教区范围）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202406/1326b1ce7d9848d69ef1ea7369142af7.shtml' }
    ]
  },
  m17: {
    schoolYear: '2024-2025（公开口径）',
    communities: [
      '狮山新苑（含狮山花苑、阳光公寓）', '锦华苑', '锦丽苑', '锦宁阁', '锦昌苑',
      '挹翠华庭', '滨河花苑', '姑苏花苑', '美之苑', '何山花园', '名都花园',
      '今日家园', '科技学院江枫园', '金枫苑', '曙光苑', '和乐家园', '汇豪国际', '曙光村'
    ],
    notes: '新区实验初级中学（金山路校区）按高新区实验教育集团对应片区整理，最终以当年校方公告为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区义务教育施教区范围）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' },
      { name: '苏州本地宝（高新区学区汇总）', url: 'http://suzhou.bendibao.com/edu/201516/50172.shtm' }
    ]
  },
  p11: {
    schoolYear: '2021-2026（公开口径）',
    communities: [
      '欧典花园', '金湖湾花园', '自由都市', '春之韵', '东城郡', '枫情水岸',
      '东湖大郡一期', '东湖大郡二期', '东湖大郡三期'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' },
      { name: '苏州本地宝（2026 园区小学施教区）', url: 'https://suzhou.bendibao.com/edu/2026529/136851.shtm' }
    ]
  },
  p12: {
    schoolYear: '2021-2026（公开口径）',
    communities: [
      '白塘景苑', '玲东花园', '铂悦府', '时代上城花园一区', '时代上城花园二区',
      '时代上城花园三区', '时代上城花园四区', '榭雨苑', '香颂花园', '钟南花苑',
      '太阳星辰花园一区', '太阳星辰花园二区', '太阳星辰花园三区', '太阳星辰花园四区', '汀兰家园'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州本地宝（2026 园区小学施教区）', url: 'https://suzhou.bendibao.com/edu/2026529/136851.shtm' }
    ]
  },
  p17: {
    schoolYear: '2021-2026（公开口径）',
    communities: [
      '都市花园43-84幢', '韶山花园', '东港二村', '绿城花园', '华庭苑', '贵都花园',
      '三星苑', '苏安新村', '东港新村（含一斗山路）', '新苏苑', '东环路221-223号', '娄门路'
    ],
    notes: '另含边界范围内“其他已开发并交房住宅楼盘”。',
    sources: [
      { name: '苏州本地宝（2026 园区小学施教区）', url: 'https://suzhou.bendibao.com/edu/2026529/136851.shtm' },
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' }
    ]
  },
  p13: {
    schoolYear: '2023-2026（公开口径）',
    communities: [
      '东吴社区（西塘南巷等）', '龙城社区（盘蠡园、吴风雅苑、城西新村等）', '龙桥社区（龙港2村、龙港3村）',
      '龙西社区（佳运花园、新吴苑、新苑新村、颐和湾、首开如院等）', '美蠡雅社区（典雅花园、盘蠡新村、盘蠡花园、盘蠡苑、美之国花园、雅典花园）',
      '水香社区（新景苑、水香一村、水香二村、箭阙苑、缥缈苑、莫厘苑、莲花苑等）', '吴中苑社区（先奇园、吴中二村、吴中公寓、水香公寓、聚宝苑、龙苑新村等）'
    ],
    notes: '吴中实验小学官方口径以“社区+部分门牌”发布，完整门牌建议查看当年区教育局附件。',
    sources: [
      { name: '吴中教育热线（2023 吴中区小学施教区）', url: 'https://www.wxedu.net/service/content_270223' },
      { name: '吴中教育热线（2025 吴中区小学施教区 PDF）', url: 'https://www.wxedu.net/upload/main/contentmanage/article/file/2025/05/28/202505281556310982.pdf' },
      { name: '苏州市教育局（2025 吴中区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/25974f1ed85948e8b727b433fa70ec32.shtml' }
    ]
  },
  p14: {
    schoolYear: '2020-2026（公开口径）',
    communities: [
      '花南家园', '香城颐园', '喜庆花园'
    ],
    notes: '另含对应边界范围及社区内其他符合入学条件住宅。',
    sources: [
      { name: '苏州市教育局（2020 相城区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202008/aa251160737a468da50488ad06b079b6.shtml' },
      { name: '苏州市教育局（2023 相城区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202308/06263af82fc84b25ab98e726b85b6a73.shtml' },
      { name: '苏州市教育局（2025 相城区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/4582dff24740411b9b73efc5810a5e4f.shtml' }
    ]
  },
  m22: {
    schoolYear: '2023-2026（公开口径）',
    communities: [
      '润元名著', '华美家园', '华美福邸', '日益家园', '陆峰房产', '喜庆花园', '欧风丽苑',
      '香城颐园', '澄和家园', '晨曦馨苑', '乐苑新村', '消防小区', '荣盛阳光名邸',
      '凯翔大厦', '古巷二村', '香城花园', '晨曦印象', '湖沁花园', '香府绿洲', '尊园',
      '紫金湾花园', '书香国际', '金磐金', '派克公寓', '誉相庭', '中翔', '雍闲雅寓',
      '宋泾新村', '古巷新村', '娄北（未拆迁）'
    ],
    notes: '官方口径为“包含以上小区及边界范围内符合条件住宅”。',
    sources: [
      { name: '苏州市教育局（2023 相城区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202308/06263af82fc84b25ab98e726b85b6a73.shtml' },
      { name: '苏州市教育局（2025 相城区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/4582dff24740411b9b73efc5810a5e4f.shtml' }
    ]
  },
  m23: {
    schoolYear: '2023-2026（公开口径）',
    communities: [
      '滨河名墅', '新吴家园', '奥林清华', '金域华府', '高新花园', '鲈乡园别墅', '吴模苑',
      '桃李园', '吴模家园', '新美雅苑', '丽湾域', '苏河鼎城', '世茂苏河鹭鸣', '梅里公寓',
      '流虹苑小区', '木家圩小区', '君临太湖', '太湖小区', '振泰小区', '水乡花园', '莱福小区',
      '梅石小区', '梅景苑', '江城花园', '江滨雅园', '阳光悦湖', '景虹苑', '垂虹小区', '江中小区',
      '垂虹家园', '丽都花园', '名城花园', '双坂桥小区', '盛世名门', '兰景苑', '吴越锦源',
      '虹兴小区', '吴模村', '西塘1弄至14弄', '江厍路1号', '润樾江南', '邮电新村', '文泽华院'
    ],
    notes: '吴江区学校施教区以当年公示及“合法固定住所”认定规则为准。',
    sources: [
      { name: '苏州市教育局（2025 吴江区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202511/9bd6c462f8814bed9f2e96cd1fa6fd97.shtml' },
      { name: '苏州本地宝（2026 吴江公办初中学区）', url: 'https://suzhou.bendibao.com/edu/202669/137146.shtm' },
      { name: '苏州本地宝（2023 吴江公立初中施教区）', url: 'https://suzhou.bendibao.com/edu/2021522/88968.shtm' }
    ]
  },
  m21: {
    schoolYear: '2021-2026（公开口径）',
    communities: [
      '胜浦街道（具体到楼盘请以当年施教区公告及学校入学公示为准）'
    ],
    notes: '已确认对应“胜浦街道”片区，细分小区名单待区级年度公告结构化补录。',
    sources: [
      { name: '苏州市教育局施教区（2021-2022）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202105/ec5ac933ea6743a6b646240c1112d85b.shtml' },
      { name: '苏州本地宝（2026 园区施教区）', url: 'https://suzhou.bendibao.com/edu/2026529/136851.shtm' }
    ]
  },
  p18: {
    schoolYear: '2023-2026（公开口径）',
    communities: [
      '观天下花苑', '泱誉雅苑', '中泱天成花园', '优步水岸花园', '天境澄光苑', '金裕上辰雅苑'
    ],
    notes: '高铁新城片区若规划调整，施教区可能同步调整。',
    sources: [
      { name: '苏州市教育局（2023 相城区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202308/06263af82fc84b25ab98e726b85b6a73.shtml' },
      { name: '苏州市教育局（2025 相城区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/4582dff24740411b9b73efc5810a5e4f.shtml' }
    ]
  },
  p5: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区平江教育集团相关施教片区（以道路围合片区为主）'],
    notes: '姑苏区部分学校按道路边界公布施教区，完整门牌与小区详见当年区级公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区小学施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' },
      { name: '苏州市教育局施教区专栏', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  p6: {
    schoolYear: '2025（官方口径）',
    communities: ['东至相门环城河、南至干将路、西至人民路/临顿路、北至白塔东路周边片区'],
    notes: '该校在姑苏区公告中以道路边界描述为主。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区小学施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  p7: {
    schoolYear: '2025（官方口径）',
    communities: ['振华中学分校对应施教片区（西环快速路/南环路/运河/劳动路围合片区）'],
    notes: '以姑苏区道路边界划分公告为准。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区小学施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  p9: {
    schoolYear: '2023-2025（公开口径）',
    communities: ['新升新苑', '世纪花园', '灏景天下', '天都花园', '新升村未动迁户', '明星村（西马市）'],
    notes: '按高新区公开汇总口径整理。',
    sources: [
      { name: '苏州本地宝（高新区学区汇总）', url: 'http://suzhou.bendibao.com/edu/201516/50172.shtm' },
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  p10: {
    schoolYear: '2025',
    communities: ['民办学校（无固定公办施教区）'],
    notes: '民办学校按当年招生简章、摇号及属地政策执行。',
    sources: [
      { name: '苏州外国语学校官网', url: 'https://www.sfls.cn/' },
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  p15: {
    schoolYear: '2022-2026（公开口径）',
    communities: [
      '秦都大厦', '嘉鹿花园（高新区）', '常乐里', '青春里', '望山公寓', '西园新村',
      '里厍新村', '里厍二村', '里厍一村', '怡馨园（苑）', '麒麟新村', '柴王弄',
      '景阳新村', '香樟园', '环北路200弄小区', '亭林新村', '琼花新村', '东通山弄', '环北路160号'
    ],
    notes: '昆山市以“智慧教育云平台施教区查询”为准，以上为公开汇总口径。',
    sources: [
      { name: '昆山市施教区查询（入口）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' },
      { name: '友果培优（昆山公办小学施教区汇总）', url: 'https://yogor.cn/2022/03/01/kunshan-primary-school-teaching-area-2022/' }
    ]
  },
  p16: {
    schoolYear: '2025',
    communities: ['集团招生/选拔通道为主，非固定公办施教区小区口径'],
    notes: '请以学校与教育部门当年发布的入学政策公示为准。',
    sources: [
      { name: '苏州中学官网', url: 'https://www.szhsz.cn/' },
      { name: '苏州市教育局施教区专栏', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m1: {
    schoolYear: '2025',
    communities: ['集团招生/选拔通道为主，非固定公办施教区小区口径'],
    notes: '请以学校和属地教育部门当年入学公示为准。',
    sources: [
      { name: '苏州中学官网', url: 'https://www.szhsz.cn/' },
      { name: '苏州市教育局施教区专栏', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m2: {
    schoolYear: '2025',
    communities: ['园区校初中部按当年政策公示执行（非固定单一小区口径）'],
    notes: '请以学校当年招生政策及教育局公告为准。',
    sources: [
      { name: '苏州中学园区校官网', url: 'https://yq.szhsz.cn/' },
      { name: '苏州市教育局施教区专栏', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m4: {
    schoolYear: '2025（官方口径）',
    communities: ['高新区实验教育集团对应施教片区（具体按年度校区公告）'],
    notes: '高新区部分学校按校区与道路边界发布，具体门牌详见当年公告附件。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m6: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区立达中学对应施教片区（以道路边界划分为主）'],
    notes: '完整小区门牌详见姑苏区年度公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m9: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区振华中学对应施教片区（以道路边界划分为主）'],
    notes: '完整小区门牌详见姑苏区年度公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m10: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区草桥中学对应施教片区（以道路边界划分为主）'],
    notes: '完整小区门牌详见姑苏区年度公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m12: {
    schoolYear: '2025',
    communities: ['民办学校（无固定公办施教区）'],
    notes: '按学校招生简章、摇号及属地政策执行。',
    sources: [
      { name: '苏州外国语学校官网', url: 'https://www.sfls.cn/' },
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m14: {
    schoolYear: '2025（官方口径）',
    communities: ['高新区实验教育集团马运路片区（具体小区见当年校区公示）'],
    notes: '以高新区年度施教区公告及学校入学公示为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m16: {
    schoolYear: '2025（官方口径）',
    communities: ['平江教育集团片区（以道路边界划分为主）'],
    notes: '具体门牌及小区以姑苏区当年公示附件为准。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m19: {
    schoolYear: '2025（官方口径）',
    communities: ['吴中区木渎镇对应施教片区（含培东班通道）'],
    notes: '请以吴中区年度初中施教区一览表及学校公示为准。',
    sources: [
      { name: '苏州市教育局（2025 吴中区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/25974f1ed85948e8b727b433fa70ec32.shtml' },
      { name: '吴中教育热线（2025 施教区 PDF）', url: 'https://www.wxedu.net/upload/main/contentmanage/article/file/2025/05/28/202505281556310982.pdf' }
    ]
  },
  m20: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区胥江板块施教片区（道路边界口径）'],
    notes: '具体门牌及小区详见姑苏区当年施教区公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m24: {
    schoolYear: '2025（官方口径）',
    communities: ['吴江区震泽片区（以区镇施教区公告为准）'],
    notes: '吴江区按区镇街道发布施教区，具体小区以当年表格为准。',
    sources: [
      { name: '苏州市教育局（2025 吴江区施教区）', url: 'http://jyj.suzhou.gov.cn/szjyj/sjq/202511/9bd6c462f8814bed9f2e96cd1fa6fd97.shtml' }
    ]
  },
  m25: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区南环板块施教片区（道路边界口径）'],
    notes: '具体门牌及小区详见姑苏区当年施教区公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m26: {
    schoolYear: '2025（官方口径）',
    communities: ['昆山市对应公办初中施教片区（以智慧教育云平台查询为准）'],
    notes: '昆山市采用官方查询平台实时公布施教区。',
    sources: [
      { name: '苏州市教育局施教区专栏（昆山查询入口）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m27: {
    schoolYear: '2025（官方口径）',
    communities: ['常熟市城区对应施教片区（以常熟年度公告为准）'],
    notes: '常熟市每年发布城区小学/初中施教区表格。',
    sources: [
      { name: '苏州市教育局施教区专栏（常熟入口）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m28: {
    schoolYear: '2025（官方口径）',
    communities: ['张家港市对应施教片区（以张家港学区查询为准）'],
    notes: '张家港市按年度学区查询结果执行。',
    sources: [
      { name: '苏州市教育局施教区专栏（张家港入口）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/jyfw_list.shtml' }
    ]
  },
  m29: {
    schoolYear: '2025（官方口径）',
    communities: ['科技城青城山路片区公办初中施教范围（按校区公告）'],
    notes: '以高新区年度施教区公告及校区公示为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m30: {
    schoolYear: '2025',
    communities: ['民办学校（无固定公办施教区）'],
    notes: '按学校招生简章和民办招生政策执行。',
    sources: [
      { name: '苏州科技城外国语学校官网', url: 'https://www.ssfls.cn/' },
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m31: {
    schoolYear: '2025（官方口径）',
    communities: ['科技城锦峰路片区公办初中施教范围（按校区公告）'],
    notes: '以高新区年度施教区公告及校区公示为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m32: {
    schoolYear: '2025（官方口径）',
    communities: ['科技城文达片区公办初中施教范围（按校区公告）'],
    notes: '以高新区年度施教区公告及校区公示为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m33: {
    schoolYear: '2025（官方口径）',
    communities: ['通安片区公办初中施教范围（按高新区年度公告）'],
    notes: '以高新区年度施教区公告及学校公示为准。',
    sources: [
      { name: '苏州市教育局（2025 高新区施教区）', url: 'https://jyj.suzhou.gov.cn/szjyj/sjq/202511/300d07a728a84597b40f894b80b4304a.shtml' }
    ]
  },
  m34: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区景范中学对应施教片区（道路边界口径）'],
    notes: '具体门牌及小区详见姑苏区当年施教区公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  },
  m35: {
    schoolYear: '2025（官方口径）',
    communities: ['姑苏区平江中学对应施教片区（道路边界口径）'],
    notes: '具体门牌及小区详见姑苏区当年施教区公示附件。',
    sources: [
      { name: '姑苏区政府（2025 姑苏区初中施教区）', url: 'https://www.gusu.gov.cn/gsq/ywjy/202505/5d5f2979d6814cc3a06901d9ac38925f.shtml' }
    ]
  }
};

