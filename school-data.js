/**
 * 苏州教育资源统一数据
 * 合并来源：
 *   A. 科技城板块近3年综合梯队（2026-06，含精准坐标与地图规则）
 *   B. 全市民间排名/升学关联/师资参考（非官方）
 *   C. 2025六区统招分数线（四星高中 score2025 排序）
 * tier：1=头部顶尖 2=优质重点 3=基础普惠 4=兜底/外围
 * tierLabel：可与 MAP_RULES 颜色规则对应
 */
const SCHOOL_META = {
  updateTime: '2026-06',
  scoreLineUpdate: '2025-07',
  disclaimer: '此数据非苏州市教育局官方发布，来源于民间机构、媒体整理、家长社群及公开分数线，仅供参考，请谨慎使用。',
  sources: [
    '2025年六区第一批次统招线（新升途/100hsl/zizzs）',
    '2026年6月科技城板块综合梯队排名',
    '民间初中/小学口碑排名与升学关联整理',
    '一点升学网苏中录取生源统计（2023–2025）',
    'school-metrics.js 近五年指标（2021–2025，多源校验）'
  ]
};

const MAP_RULES = {
  stageFilter: ['高中', '初中', '小学', '幼儿园'],
  tierFilter: ['梯队1-头部顶尖', '梯队2-优质重点', '梯队3-基础普惠', '第四梯队'],
  natureFilter: ['公办', '民办', '公办集团校', '公办综合高中'],
  colorByTierLabel: {
    '梯队1-头部顶尖': '#f53f3f',
    '梯队2-优质重点': '#4096ff',
    '梯队3-基础普惠': '#86909c',
    '第四梯队': '#c9cdd4'
  },
  colorByType: { high: '#ff4d4f', middle: '#fa8c16', primary: '#52c41a', kindergarten: '#722ed1' },
  markerByNature: { '公办': 'solid', '民办': 'hollow', '公办集团校': 'solid', '公办综合高中': 'solid' }
};

const CORRELATIONS = {
  primaryToMiddle: {
    selectionCompetition: {
      event: '2025年苏州中学丘班、伟长班、园区校联合初试',
      totalParticipants: 8000,
      finalists: 200,
      acceptanceRate: '不足5%'
    },
    lotteryRate: { description: '2024年某热门民办初中摇号中签率', rate: '约12%' },
    weichangPerformance: {
      fourStarHighSchoolRate: '100%',
      kuangbanAdmission: '2025年匡班录取35人以上（全市占比超40%）',
      westJiaodaAdmission: '西交大少年班录取40人以上'
    }
  },
  middleToHigh: {
    publicHighSchoolAdmissionRate: '约55.3%（2025年六区公办普高）',
    totalAdmissionRateIncludingPrivate: '超72%',
    indicatorsPolicy: '四星级高中指标生比例为招生计划的70%，按初中校毕业生人数分配',
    suzhouHighSchoolUnifiedEnrollment: { totalPlan: 603, unifiedQuota: 63, proportion: '10.4%' },
    top10HighSchoolRankRequirement: { rankRange: '市区前5705名左右', rankRatio: '约18.58%' }
  },
  specificMiddlePerformance: {
    weichang: { fourStarRate: '100%', kuangbanShare: '占全市超40%' },
    xujiangExperimental: { kuangbanEarlyAdmission2025: '1人', fourStarRate: '再创新高' }
  }
};

const REFERENCE_RANKINGS = {
  highSchools: {
    officialStarRating: [
      { name: '江苏省苏州中学', level: '五星级（首批）' },
      { name: '江苏省梁丰高级中学', level: '五星级（首批）' }
    ],
    constructionPlanning: [
      { name: '江苏省震泽中学', level: '五星级建设立项' },
      { name: '江苏省昆山中学', level: '五星级建设立项' },
      { name: '江苏省木渎高级中学', level: '五星级建设立项' },
      { name: '江苏省常熟中学', level: '五星级建设立项' }
    ],
    civilStableTop: [
      '江苏省苏州中学', '苏州实验中学(本部)', '星海实验高中(沈浒路)',
      '震川高级中学', '西交大苏州附中(方洲路)'
    ],
    civilRising: ['星海实验高中(苏茜路)', '昆山中学', '梁丰高级中学']
  },
  middleSchools: [
    { rank: 1, name: '苏州中学伟长实验部', district: '姑苏区', id: 'm1' },
    { rank: 2, name: '苏州高新区实验初级中学', district: '高新区', id: 'm17', note: '集团校，含金山路/青城山路等校区' },
    { rank: 3, name: '苏州外国语学校(初中)', district: '高新区', id: 'm12' },
    { rank: 4, name: '星海实验初级中学', district: '工业园区', id: 'm3' },
    { rank: 5, name: '立达中学', district: '姑苏区', id: 'm6' },
    { rank: 6, name: '振华中学', district: '姑苏区', id: 'm9' },
    { rank: 7, name: '苏州中学园区校(初中)', district: '工业园区', id: 'm2' },
    { rank: 8, name: '景范中学', district: '姑苏区', id: 'm34' },
    { rank: 9, name: '金鸡湖学校(初中)', district: '工业园区', id: 'm8' },
    { rank: 10, name: '平江中学', district: '姑苏区', id: 'm35' }
  ],
  primarySchools: [
    { rank: 1, name: '苏州实验小学', district: '姑苏区', id: 'p5', notes: '百年名校，教学进度快、学科深度足' },
    { rank: 2, name: '星海小学', district: '工业园区', id: 'p1', notes: 'STEM与国际化教育并重' },
    { rank: 3, name: '平江实验学校', district: '姑苏区', id: 'p6', notes: '九年一贯制，国学与非遗传承突出' },
    { rank: 4, name: '新区实验小学校', district: '高新区', id: 'p8', notes: '科技创新标杆，创客资源丰富' },
    { rank: 5, name: '苏州外国语学校(小学)', district: '高新区', id: 'p10', notes: '外语教学强势，国际化课程多元' }
  ],
  kindergartens: {
    publicNotable: ['新洲幼儿园', '花朵幼儿园', '民治路机关幼儿园', '公园路机关幼儿园', '竹辉路机关幼儿园'],
    privateInternational: [
      { name: '苏州国际外语学校幼儿园', notes: '民办' },
      { name: '苏州高新区瑞景幼儿园', notes: '9国生源，全天候外教配置' },
      { name: '苏州工业园区海归人才子女学校幼儿园', notes: '师资力量AAAAA评级' }
    ]
  },
  teacherStrength: {
    '江苏省苏州中学': '特级教师10位，正高级教师10位，市名教师4人，大市学科带头人16人，硕士以上学位占比41.5%',
    '苏州中学园区校': '正高级教师3名，省特级教师2名，市及市区学科带头人55名，双一流高校教师134名，硕士研究生97名',
    '苏州市实验小学': '全国级优秀教师2名，省级优秀教师多名，省特级教师1名，中学高级教师4名',
    '南师大苏州实验学校': '正高级职称教师占比40%，硕士及以上学历占比70%，市区级以上学科带头人20人'
  }
};

const SCHOOLS = [
  // ========== 高中（53所四星 + 科技城增补） ==========
  { id:'h1', type:'high', name:'江苏省苏州中学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', address:'姑苏区人民路699号', lat:31.295509, lng:120.622380, coordSys:'gcj02', rank2024:1, rank2025:1, score2024:688, score2025:693, undergradRate:99.8, indicatorRatio:70, teacherCount:428, seniorTeacherRate:14, specialTeacher:28, studentCount:3200, starLevel:'五星级（首批）', features:'千年府学，苏中集团龙头，2025统招线全市第一', teacherNote: REFERENCE_RANKINGS.teacherStrength['江苏省苏州中学'] },
  { id:'h2', type:'high', name:'星海实验高中(苏茜路)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.309086, lng:120.664039, coordSys:'gcj02', rank2024:2, rank2025:2, score2024:684, score2025:687, undergradRate:98.8, indicatorRatio:70, teacherCount:380, seniorTeacherRate:11, specialTeacher:6, studentCount:2400, features:'2025指标生提至70%，统招名额锐减，生科班自招' },
  { id:'h3', type:'high', name:'昆山中学', district:'昆山市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.3856, lng:120.9542, coordSys:'gcj02', rank2024:3, rank2025:3, score2024:682, score2025:685, undergradRate:98.5, indicatorRatio:70, teacherCount:350, seniorTeacherRate:10, specialTeacher:5, studentCount:3000, starLevel:'五星级建设立项', features:'昆山顶尖，2024高分人数激增推高分线' },
  { id:'h4', type:'high', name:'苏州中学园区校', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.304804, lng:120.772818, coordSys:'gcj02', rank2024:4, rank2025:4, score2024:680, score2025:683, undergradRate:99.2, indicatorRatio:70, teacherCount:210, seniorTeacherRate:12, specialTeacher:8, studentCount:1800, features:'苏中集团，匡班生源第一，无固定施教区享市三区指标生', teacherNote: REFERENCE_RANKINGS.teacherStrength['苏州中学园区校'] },
  { id:'h5', type:'high', name:'苏州实验中学(本部)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.299850, lng:120.548520, coordSys:'gcj02', rank2024:5, rank2025:5, score2024:678, score2025:681, undergradRate:97.8, indicatorRatio:70, teacherCount:320, seniorTeacherRate:10, specialTeacher:4, studentCount:2600, features:'新区龙头，科技城/太湖科学城分校' },
  { id:'h6', type:'high', name:'星海实验高中(沈浒路)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.324850, lng:120.708520, coordSys:'gcj02', rank2024:6, rank2025:6, score2024:676, score2025:678, undergradRate:97.5, indicatorRatio:70, teacherCount:340, seniorTeacherRate:10, specialTeacher:5, studentCount:2200, features:'星海集团沈浒校区，2025与苏茜路分列' },
  { id:'h7', type:'high', name:'西交大苏州附中(方洲路)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.306000, lng:120.738000, coordSys:'gcj02', rank2024:7, rank2025:7, score2024:672, score2025:674, undergradRate:97.2, indicatorRatio:70, teacherCount:280, seniorTeacherRate:9, specialTeacher:3, studentCount:2100, features:'园区四星，普惠路校区为分校' },
  { id:'h8', type:'high', name:'震川高级中学', district:'昆山市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.3723, lng:120.9123, coordSys:'gcj02', rank2024:8, rank2025:8, score2024:671, score2025:673, undergradRate:96.8, indicatorRatio:70, teacherCount:260, seniorTeacherRate:9, specialTeacher:3, studentCount:2000, features:'昆山第二梯队龙头，与昆中差距缩小' },
  { id:'h9', type:'high', name:'梁丰高级中学', district:'张家港市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.8656, lng:120.5534, coordSys:'gcj02', rank2024:9, rank2025:9, score2024:670, score2025:672, undergradRate:95.5, indicatorRatio:70, teacherCount:270, seniorTeacherRate:7, specialTeacher:1, studentCount:2400, starLevel:'五星级（首批）', features:'张家港顶尖，zizzs 2025统招672' },
  { id:'h10', type:'high', name:'苏州大学附属中学(东振路)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', schoolType:'公办', lat:31.315800, lng:120.653500, coordSys:'gcj02', rank2024:10, rank2025:10, score2024:667, score2025:669, undergradRate:97.5, indicatorRatio:70, teacherCount:290, seniorTeacherRate:9, specialTeacher:3, studentCount:2200, features:'园区四星主力，胜浦路校区2025新增' },
  { id:'h11', type:'high', name:'江苏省苏州实验中学(科技城校区)', district:'高新区', region:'科技城', tier:1, tierLabel:'梯队1-头部顶尖', rankLevel:'科技城公办高中第1', nature:'公办', schoolType:'公办', address:'虎丘区青城山路66号', lat:31.349590, lng:120.421806, coordSys:'gcj02', rank2024:11, rank2025:11, score2024:663, score2025:665, undergradRate:96.0, indicatorRatio:70, teacherCount:200, seniorTeacherRate:8, specialTeacher:2, studentCount:1400, features:'科技城公办龙头，2025特招线91.34%，与本部捆绑签约，高新区指标生核心输出校' },
  { id:'h12', type:'high', name:'江苏省常熟中学', district:'常熟市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.6534, lng:120.7456, coordSys:'gcj02', rank2024:12, rank2025:12, score2024:662, score2025:664, undergradRate:95.0, indicatorRatio:70, teacherCount:290, seniorTeacherRate:7, specialTeacher:1, studentCount:2600, starLevel:'五星级建设立项', features:'常熟百年名校' },
  { id:'h13', type:'high', name:'木渎高级中学', district:'吴中区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.2589, lng:120.5189, coordSys:'gcj02', rank2024:13, rank2025:13, score2024:662, score2025:664, undergradRate:94.5, indicatorRatio:70, teacherCount:270, seniorTeacherRate:7, specialTeacher:1, studentCount:2500, starLevel:'五星级建设立项', features:'吴中四星主力，培东班初中输送' },
  { id:'h14', type:'high', name:'苏州市第一中学', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.3045, lng:120.6123, coordSys:'gcj02', rank2024:14, rank2025:14, score2024:661, score2025:663, undergradRate:96.5, indicatorRatio:70, teacherCount:260, seniorTeacherRate:8, specialTeacher:2, studentCount:2000, features:'姑苏百年名校' },
  { id:'h15', type:'high', name:'西交大苏州附中(普惠路)', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.3289, lng:120.7389, coordSys:'gcj02', rank2024:15, rank2025:15, score2024:661, score2025:663, undergradRate:96.0, indicatorRatio:70, teacherCount:180, seniorTeacherRate:8, specialTeacher:2, studentCount:1200, features:'西附普惠路校区，方洲路分校' },
  { id:'h16', type:'high', name:'昆山第一中学', district:'昆山市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.3923, lng:120.9423, coordSys:'gcj02', rank2024:16, rank2025:16, score2024:659, score2025:661, undergradRate:94.0, indicatorRatio:70, teacherCount:240, seniorTeacherRate:7, specialTeacher:1, studentCount:2200, features:'昆山公办第二梯队' },
  { id:'h17', type:'high', name:'苏州高新区第一中学', district:'高新区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.301850, lng:120.532450, coordSys:'gcj02', rank2024:17, rank2025:17, score2024:656, score2025:658, undergradRate:93.5, indicatorRatio:70, teacherCount:250, seniorTeacherRate:7, specialTeacher:1, studentCount:2300, features:'新区老牌四星，科技城校区分流' },
  { id:'h18', type:'high', name:'苏州实验中学(太湖科学城)', district:'高新区', region:'太湖科学城', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.328600, lng:120.412850, coordSys:'gcj02', rank2024:null, rank2025:18, score2024:null, score2025:656, undergradRate:92.0, indicatorRatio:70, teacherCount:120, seniorTeacherRate:8, specialTeacher:0, studentCount:800, features:'2025新增四星，与新实本部捆绑签约推高分' },
  { id:'h19', type:'high', name:'震泽中学', district:'吴江区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:30.9089, lng:120.4678, coordSys:'gcj02', rank2024:18, rank2025:19, score2024:653, score2025:655, undergradRate:94.8, indicatorRatio:70, teacherCount:280, seniorTeacherRate:7, specialTeacher:1, studentCount:2500, starLevel:'五星级建设立项', features:'吴江传统强校' },
  { id:'h20', type:'high', name:'南京航空航天大学苏州附中(星湖街)', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.3356, lng:120.7523, coordSys:'gcj02', rank2024:19, rank2025:20, score2024:653, score2025:655, undergradRate:93.0, indicatorRatio:70, teacherCount:220, seniorTeacherRate:7, specialTeacher:1, studentCount:1800, features:'南航附中星湖街校区，航天特色' },
  { id:'h21', type:'high', name:'常熟市中学', district:'常熟市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.6423, lng:120.7323, coordSys:'gcj02', rank2024:20, rank2025:21, score2024:651, score2025:653, undergradRate:92.5, indicatorRatio:70, teacherCount:230, seniorTeacherRate:6, specialTeacher:1, studentCount:2000, features:'常熟公办第二梯队' },
  { id:'h22', type:'high', name:'沙洲中学', district:'张家港市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.8723, lng:120.5423, coordSys:'gcj02', rank2024:21, rank2025:22, score2024:651, score2025:653, undergradRate:92.0, indicatorRatio:70, teacherCount:210, seniorTeacherRate:6, specialTeacher:1, studentCount:1900, features:'张家港第二梯队，zizzs 2025统招653' },
  { id:'h23', type:'high', name:'苏州市第十中学', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.2967, lng:120.6234, coordSys:'gcj02', rank2024:22, rank2025:23, score2024:650, score2025:652, undergradRate:95.8, indicatorRatio:70, teacherCount:240, seniorTeacherRate:8, specialTeacher:2, studentCount:1900, features:'姑苏四星，金阊校区独立招生' },
  { id:'h24', type:'high', name:'江苏省太仓高级中学', district:'太仓市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.4567, lng:121.1234, coordSys:'gcj02', rank2024:23, rank2025:24, score2024:649, score2025:651, undergradRate:93.5, indicatorRatio:70, teacherCount:220, seniorTeacherRate:6, specialTeacher:1, studentCount:1800, features:'太仓龙头' },
  { id:'h25', type:'high', name:'陆家高级中学', district:'昆山市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', schoolType:'公办', lat:31.3123, lng:121.0423, coordSys:'gcj02', rank2024:24, rank2025:25, score2024:646, score2025:648, undergradRate:90.0, indicatorRatio:70, teacherCount:180, seniorTeacherRate:6, specialTeacher:0, studentCount:1500, features:'昆山东部四星' },
  { id:'h26', type:'high', name:'江苏省昆山柏庐高级中学', district:'昆山市', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3789, lng:120.9223, coordSys:'gcj02', rank2024:25, rank2025:26, score2024:646, score2025:648, undergradRate:89.5, indicatorRatio:70, teacherCount:170, seniorTeacherRate:6, specialTeacher:0, studentCount:1400, features:'B志愿统招648，A志愿637' },
  { id:'h27', type:'high', name:'苏苑高级中学', district:'吴中区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.2623, lng:120.6423, coordSys:'gcj02', rank2024:26, rank2025:27, score2024:645, score2025:647, undergradRate:91.0, indicatorRatio:70, teacherCount:200, seniorTeacherRate:6, specialTeacher:0, studentCount:1700, features:'吴中城区四星' },
  { id:'h28', type:'high', name:'苏州市第三中学', district:'姑苏区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', address:'临顿路谢衙前14号', lat:31.3155, lng:120.6325, coordSys:'gcj02', rank2024:27, rank2025:28, score2024:645, score2025:647, undergradRate:90.5, indicatorRatio:70, teacherCount:190, seniorTeacherRate:6, specialTeacher:0, studentCount:1600, features:'姑苏区四星，艺术特色' },
  { id:'h29', type:'high', name:'苏州高新区第一中学(科技城校区)', district:'高新区', region:'科技城', tier:2, tierLabel:'梯队2-优质重点', rankLevel:'区域优质公办重点高中', nature:'公办', schoolType:'公办', address:'虎丘区王宴岭路8号', lat:31.318888, lng:120.478810, coordSys:'gcj02', rank2024:28, rank2025:29, score2024:641, score2025:643, undergradRate:88.0, indicatorRatio:70, teacherCount:150, seniorTeacherRate:6, specialTeacher:0, studentCount:1100, features:'高新区重点公办，师资稳定，承接科技城刚需升学' },
  { id:'h30', type:'high', name:'苏州大学附属中学(胜浦路)', district:'工业园区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3423, lng:120.7823, coordSys:'gcj02', rank2024:29, rank2025:30, score2024:640, score2025:642, undergradRate:87.5, indicatorRatio:70, teacherCount:140, seniorTeacherRate:6, specialTeacher:0, studentCount:1000, features:'2025新增胜浦路校区' },
  { id:'h31', type:'high', name:'江苏省浒浦高级中学', district:'常熟市', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.6123, lng:120.7823, coordSys:'gcj02', rank2024:30, rank2025:31, score2024:639, score2025:641, undergradRate:87.0, indicatorRatio:70, teacherCount:160, seniorTeacherRate:5, specialTeacher:0, studentCount:1200, features:'常熟东部四星' },
  { id:'h32', type:'high', name:'吴县中学(本部)', district:'吴中区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.2567, lng:120.6234, coordSys:'gcj02', rank2024:31, rank2025:32, score2024:633, score2025:635, undergradRate:95.2, indicatorRatio:70, teacherCount:300, seniorTeacherRate:7, specialTeacher:2, studentCount:2800, features:'吴中龙头，景山/浒关校区' },
  { id:'h33', type:'high', name:'南京航空航天大学苏州附中(唯亭)', district:'工业园区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3523, lng:120.8123, coordSys:'gcj02', rank2024:32, rank2025:33, score2024:630, score2025:632, undergradRate:86.0, indicatorRatio:70, teacherCount:180, seniorTeacherRate:5, specialTeacher:0, studentCount:1300, features:'南航附中唯亭校区' },
  { id:'h34', type:'high', name:'吴江中学', district:'吴江区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.1523, lng:120.6323, coordSys:'gcj02', rank2024:33, rank2025:34, score2024:630, score2025:632, undergradRate:88.0, indicatorRatio:70, teacherCount:220, seniorTeacherRate:6, specialTeacher:0, studentCount:1800, features:'吴江城区四星' },
  { id:'h35', type:'high', name:'苏州大学实验学校', district:'相城区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3689, lng:120.6523, coordSys:'gcj02', rank2024:34, rank2025:35, score2024:630, score2025:632, undergradRate:85.0, indicatorRatio:70, teacherCount:170, seniorTeacherRate:5, specialTeacher:0, studentCount:1400, features:'相城四星，苏大附属' },
  { id:'h36', type:'high', name:'江苏省暨阳高级中学', district:'张家港市', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.8523, lng:120.5723, coordSys:'gcj02', rank2024:35, rank2025:36, score2024:630, score2025:632, undergradRate:86.5, indicatorRatio:70, teacherCount:200, seniorTeacherRate:5, specialTeacher:0, studentCount:1600, features:'张家港第三梯队，zizzs 2025统招632' },
  { id:'h37', type:'high', name:'苏州市黄埭中学', district:'相城区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3923, lng:120.5823, coordSys:'gcj02', rank2024:36, rank2025:37, score2024:626, score2025:628, undergradRate:84.0, indicatorRatio:70, teacherCount:160, seniorTeacherRate:5, specialTeacher:0, studentCount:1300, features:'相城黄埭板块四星' },
  { id:'h38', type:'high', name:'苏州市第十中学(金阊校区)', district:'姑苏区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.3123, lng:120.5923, coordSys:'gcj02', rank2024:37, rank2025:38, score2024:625, score2025:627, undergradRate:88.0, indicatorRatio:70, teacherCount:150, seniorTeacherRate:5, specialTeacher:0, studentCount:1100, features:'十中金阊校区独立代码' },
  { id:'h39', type:'high', name:'江苏省外国语学校', district:'吴中区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', address:'吴中区吴中大道圣陶路1号', lat:31.233543, lng:120.603685, coordSys:'gcj02', rank2024:38, rank2025:39, score2024:624, score2025:626, undergradRate:90.0, indicatorRatio:70, teacherCount:200, seniorTeacherRate:6, specialTeacher:1, studentCount:1500, features:'吴中国际教育园公办四星（与民办苏外非同一所）' },
  { id:'h40', type:'high', name:'江苏省梅李高级中学', district:'常熟市', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', schoolType:'公办', lat:31.6823, lng:120.7823, coordSys:'gcj02', rank2024:39, rank2025:40, score2024:623, score2025:625, undergradRate:83.0, indicatorRatio:70, teacherCount:150, seniorTeacherRate:5, specialTeacher:0, studentCount:1200, features:'常熟梅李板块四星' },
  { id:'h41', type:'high', name:'震泽中学育英学校', district:'吴江区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:30.9189, lng:120.4578, coordSys:'gcj02', rank2024:40, rank2025:41, score2024:622, score2025:624, undergradRate:82.0, indicatorRatio:70, teacherCount:140, seniorTeacherRate:5, specialTeacher:0, studentCount:1100, features:'震泽集团育英校区' },
  { id:'h42', type:'high', name:'太仓市实验中学', district:'太仓市', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.4423, lng:121.1023, coordSys:'gcj02', rank2024:41, rank2025:42, score2024:617, score2025:619, undergradRate:81.0, indicatorRatio:70, teacherCount:130, seniorTeacherRate:5, specialTeacher:0, studentCount:1000, features:'太仓实验四星' },
  { id:'h43', type:'high', name:'吴县中学(景山校区)', district:'吴中区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.2723, lng:120.6523, coordSys:'gcj02', rank2024:42, rank2025:43, score2024:614, score2025:616, undergradRate:80.0, indicatorRatio:70, teacherCount:120, seniorTeacherRate:5, specialTeacher:0, studentCount:900, features:'吴县景山校区' },
  { id:'h44', type:'high', name:'陆慕高级中学', district:'相城区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.3623, lng:120.6223, coordSys:'gcj02', rank2024:43, rank2025:44, score2024:612, score2025:614, undergradRate:79.0, indicatorRatio:70, teacherCount:130, seniorTeacherRate:5, specialTeacher:0, studentCount:1000, features:'相城陆慕板块四星' },
  { id:'h45', type:'high', name:'甪直高级中学', district:'吴中区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.2823, lng:120.8023, coordSys:'gcj02', rank2024:44, rank2025:45, score2024:608, score2025:610, undergradRate:78.0, indicatorRatio:70, teacherCount:120, seniorTeacherRate:5, specialTeacher:0, studentCount:900, features:'吴中甪直板块四星' },
  { id:'h46', type:'high', name:'吴江高级中学', district:'吴江区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.1623, lng:120.6523, coordSys:'gcj02', rank2024:45, rank2025:46, score2024:605, score2025:607, undergradRate:77.0, indicatorRatio:70, teacherCount:130, seniorTeacherRate:5, specialTeacher:0, studentCount:1000, features:'吴江第二梯队四星' },
  { id:'h47', type:'high', name:'吴县中学(浒关校区)', district:'高新区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.3423, lng:120.5023, coordSys:'gcj02', rank2024:46, rank2025:47, score2024:601, score2025:603, undergradRate:76.0, indicatorRatio:70, teacherCount:110, seniorTeacherRate:5, specialTeacher:0, studentCount:800, features:'吴县浒关校区' },
  { id:'h48', type:'high', name:'江苏省沙溪高级中学', district:'太仓市', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.5623, lng:121.0823, coordSys:'gcj02', rank2024:47, rank2025:48, score2024:594, score2025:596, undergradRate:75.0, indicatorRatio:70, teacherCount:120, seniorTeacherRate:5, specialTeacher:0, studentCount:900, features:'太仓沙溪板块四星' },
  { id:'h49', type:'high', name:'吴江盛泽中学', district:'吴江区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:30.9023, lng:120.6523, coordSys:'gcj02', rank2024:48, rank2025:49, score2024:585, score2025:587, undergradRate:74.0, indicatorRatio:70, teacherCount:110, seniorTeacherRate:5, specialTeacher:0, studentCount:800, features:'吴江盛泽板块四星' },
  { id:'h50', type:'high', name:'苏州市第六中学', district:'姑苏区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.2923, lng:120.6023, coordSys:'gcj02', rank2024:49, rank2025:50, score2024:583, score2025:585, undergradRate:73.0, indicatorRatio:70, teacherCount:100, seniorTeacherRate:5, specialTeacher:0, studentCount:700, features:'姑苏区四星，艺术特色' },
  { id:'h51', type:'high', name:'吴江汾湖高级中学', district:'吴江区', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.0223, lng:120.8523, coordSys:'gcj02', rank2024:50, rank2025:51, score2024:567, score2025:569, undergradRate:70.0, indicatorRatio:70, teacherCount:90, seniorTeacherRate:4, specialTeacher:0, studentCount:600, features:'吴江汾湖板块四星' },
  { id:'h52', type:'high', name:'江苏省明德高级中学', district:'张家港市', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.8823, lng:120.5923, coordSys:'gcj02', rank2024:51, rank2025:52, score2024:547, score2025:549, undergradRate:68.0, indicatorRatio:70, teacherCount:100, seniorTeacherRate:4, specialTeacher:0, studentCount:700, features:'张家港明德四星' },
  { id:'h53', type:'high', name:'江苏省沙溪高级中学(金仓校区)', district:'太仓市', tier:4, tierLabel:'第四梯队', nature:'公办', schoolType:'公办', lat:31.5523, lng:121.0923, coordSys:'gcj02', rank2024:52, rank2025:53, score2024:543, score2025:545, undergradRate:67.0, indicatorRatio:70, teacherCount:80, seniorTeacherRate:4, specialTeacher:0, studentCount:500, features:'沙溪金仓校区独立代码' },
  // 科技城增补（来源A，无2025统招线则 score 字段留空）
  { id:'h54', type:'high', name:'苏州科技城外国语高级中学', district:'高新区', region:'科技城', tier:1, tierLabel:'梯队1-头部顶尖', rankLevel:'科技城民办高中第1', nature:'民办', schoolType:'民办', address:'虎丘区嘉陵江路189号', lat:31.352950, lng:120.421850, coordSys:'gcj02', features:'苏州民办顶尖国际高中，常年斩获牛津/剑桥录取，88%毕业生入世界前50高校' },
  { id:'h55', type:'high', name:'南京大学苏州附属中学', district:'高新区', region:'科技城', tier:2, tierLabel:'梯队2-优质重点', rankLevel:'科创特色优质高中', nature:'公办', schoolType:'公办', address:'虎丘区富春江路', lat:31.349590, lng:120.421806, coordSys:'gcj02', features:'依托南大教育资源，科创特色突出，适配科技城科创家庭升学需求' },
  { id:'h56', type:'high', name:'苏州高新区实验高级中学(锦峰路校区)', district:'高新区', region:'科技城', tier:3, tierLabel:'梯队3-基础普惠', rankLevel:'区域普惠兜底高中', nature:'公办综合高中', schoolType:'公办', address:'虎丘区锦峰路（小茅山公园斜对面）', lat:31.336200, lng:120.437850, coordSys:'gcj02', features:'综合升学路径，兼顾普高与特色升学，学位充足，兜底区域生源升学' },

  // ========== 初中（全市28所 + 科技城/民间排名增补） ==========
  { id:'m1', type:'middle', name:'苏州中学伟长实验部', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:1, lat:31.295601, lng:120.622786, coordSys:'gcj02', avgScore2024:655, fourStarRate:92, kuangban2024:18, suzhong2025:82, indicatorQuota:38, feederHigh:['江苏省苏州中学','苏州中学园区校'], features:'2025苏中录取82人全市第一，伟长班自招，四星率100%' },
  { id:'m2', type:'middle', name:'苏州中学园区校(初中)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:7, lat:31.304804, lng:120.772818, coordSys:'gcj02', avgScore2024:648, fourStarRate:88, kuangban2024:21, suzhong2025:57, indicatorQuota:8, feederHigh:['苏州中学园区校','江苏省苏州中学'], features:'2025苏中录取57人，匡班生源主力' },
  { id:'m3', type:'middle', name:'星海实验初级中学', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:4, lat:31.309086, lng:120.664039, coordSys:'gcj02', avgScore2024:650, fourStarRate:90, kuangban2024:16, suzhong2025:35, indicatorQuota:76, feederHigh:['星海实验高中(苏茜路)','西交大苏州附中','苏大附中'], features:'2025苏中录取35人，四星率近90%' },
  { id:'m4', type:'middle', name:'苏州实验中学(金山路)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.299850, lng:120.548520, coordSys:'gcj02', avgScore2024:642, fourStarRate:82, kuangban2024:12, suzhong2025:29, indicatorQuota:5, feederHigh:['苏州实验中学(本部)','吴县中学'], features:'2025苏中录取29人，新实金山路校区' },
  { id:'m5', type:'middle', name:'西交大苏州附中初中部', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.306000, lng:120.738000, coordSys:'gcj02', avgScore2024:632, fourStarRate:74, kuangban2024:7, suzhong2025:27, indicatorQuota:12, feederHigh:['西交大苏州附中','苏大附中'], features:'2025苏中录取27人，大体量校' },
  { id:'m6', type:'middle', name:'立达中学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:5, lat:31.268200, lng:120.602800, coordSys:'gcj02', avgScore2024:642, fourStarRate:82, kuangban2024:5, suzhong2025:21, indicatorQuota:5, feederHigh:['江苏省苏州中学','苏州中学园区校','苏州市第一中学'], features:'2025苏中录取21人，苏中集团' },
  { id:'m7', type:'middle', name:'星湾学校(初中)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.318500, lng:120.712800, coordSys:'gcj02', avgScore2024:638, fourStarRate:78, kuangban2024:6, suzhong2025:18, indicatorQuota:5, feederHigh:['西交大苏州附中(方洲路)','苏州大学附属中学(东振路)','星海实验高中(沈浒路)'], features:'2025苏中录取18人，九年一贯制' },
  { id:'m8', type:'middle', name:'金鸡湖学校(初中)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:9, lat:31.314200, lng:120.702800, coordSys:'gcj02', avgScore2024:628, fourStarRate:72, kuangban2024:4, suzhong2025:17, indicatorQuota:4, feederHigh:['苏大附中','西交大苏州附中'], features:'2025苏中录取17人，金鸡湖两岸施教区' },
  { id:'m9', type:'middle', name:'振华中学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:6, lat:31.299200, lng:120.628500, coordSys:'gcj02', avgScore2024:645, fourStarRate:85, kuangban2024:13, suzhong2025:17, indicatorQuota:5, feederHigh:['江苏省苏州中学','苏州市第十中学','苏州中学园区校'], features:'2025苏中录取17人，姑苏大体量校' },
  { id:'m10', type:'middle', name:'草桥中学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3078, lng:120.6178, coordSys:'gcj02', avgScore2024:625, fourStarRate:70, kuangban2024:3, suzhong2025:15, indicatorQuota:4, feederHigh:['苏州市第十中学','江苏省苏州中学'], features:'2025苏中录取15人，姑苏区优质公办' },
  { id:'m11', type:'middle', name:'东沙湖实验中学', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3289, lng:120.7456, coordSys:'gcj02', avgScore2024:626, fourStarRate:71, kuangban2024:5, suzhong2025:14, indicatorQuota:4, feederHigh:['西交大苏州附中','苏大附中','南航星湖'], features:'2025苏中录取14人，东沙湖板块' },
  { id:'m12', type:'middle', name:'苏州外国语学校(初中)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'民办', middleRank:3, address:'虎丘区竹园路201号', lat:31.277115, lng:120.543248, coordSys:'gcj02', avgScore2024:630, fourStarRate:75, kuangban2024:6, suzhong2025:13, indicatorQuota:3, feederHigh:['苏州实验中学(本部)','吴县中学(本部)','江苏省外国语学校'], features:'2025苏中录取13人，竹园路201号苏外本部' },
  { id:'m13', type:'middle', name:'景城学校(初中)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3256, lng:120.7345, coordSys:'gcj02', avgScore2024:635, fourStarRate:76, kuangban2024:8, suzhong2025:11, indicatorQuota:4, feederHigh:['西交大苏州附中','苏大附中'], features:'2025苏中录取11人，园区二线头部' },
  { id:'m14', type:'middle', name:'苏州实验中学(马运路)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3045, lng:120.5389, coordSys:'gcj02', avgScore2024:638, fourStarRate:78, kuangban2024:8, suzhong2025:10, indicatorQuota:4, feederHigh:['苏州实验中学(本部)','新区一中'], features:'2025苏中录取约10人，新实马运路校区' },
  { id:'m15', type:'middle', name:'星港学校(初中)', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3112, lng:120.6789, coordSys:'gcj02', avgScore2024:622, fourStarRate:70, kuangban2024:3, suzhong2025:9, indicatorQuota:4, feederHigh:['星海实验高中(苏茜路)','苏州大学附属中学(东振路)'], features:'2025苏中录取约9人，湖西老牌九年制' },
  { id:'m16', type:'middle', name:'平江实验学校(初中)', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3123, lng:120.6234, coordSys:'gcj02', avgScore2024:620, fourStarRate:68, kuangban2024:2, suzhong2025:8, indicatorQuota:3, feederHigh:['苏州市第一中学','苏州市第十中学'], features:'2025苏中录取约8人，平江教育集团' },
  { id:'m17', type:'middle', name:'新区实验初级中学(金山路校区)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办集团校', middleRank:2, address:'虎丘区金山东路76号', lat:31.302302, lng:120.559486, coordSys:'gcj02', avgScore2024:618, fourStarRate:67, kuangban2024:4, suzhong2025:7, indicatorQuota:4, feederHigh:['苏州实验中学(本部)','苏州高新区第一中学'], features:'全市民间排名第2，集团龙头校区，2025苏中录取约7人' },
  { id:'m18', type:'middle', name:'独墅湖学校(初中)', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2789, lng:120.6823, coordSys:'gcj02', avgScore2024:615, fourStarRate:65, kuangban2024:3, suzhong2025:6, indicatorQuota:3, feederHigh:['苏大附中','西交大苏州附中'], features:'2025苏中录取约6人，独墅湖高教区' },
  { id:'m19', type:'middle', name:'木渎高级中学培东班', district:'吴中区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2589, lng:120.5189, coordSys:'gcj02', avgScore2024:618, fourStarRate:65, kuangban2024:6, suzhong2025:6, indicatorQuota:6, feederHigh:['吴县中学','木渎高级中学'], features:'2025苏中录取约6人，吴中培优特色' },
  { id:'m20', type:'middle', name:'胥江实验初级中学', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2956, lng:120.5923, coordSys:'gcj02', avgScore2024:612, fourStarRate:62, kuangban2024:2, suzhong2025:5, indicatorQuota:4, feederHigh:['苏州市第三中学','苏州市第十中学'], features:'2025苏中录取约5人，胥江板块' },
  { id:'m21', type:'middle', name:'胜浦实验中学', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3023, lng:120.8223, coordSys:'gcj02', avgScore2024:608, fourStarRate:60, kuangban2024:1, suzhong2025:4, indicatorQuota:5, feederHigh:['苏大附中(胜浦路)','南航唯亭'], features:'2025苏中录取约4人，胜浦板块' },
  { id:'m22', type:'middle', name:'相城中学(初中)', district:'相城区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3723, lng:120.6323, coordSys:'gcj02', avgScore2024:605, fourStarRate:58, kuangban2024:1, suzhong2025:4, indicatorQuota:6, feederHigh:['苏大实验','黄埭中学','陆慕高中'], features:'2025苏中录取约4人，相城龙头初中' },
  { id:'m23', type:'middle', name:'吴江实验初级中学', district:'吴江区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.1489, lng:120.6289, coordSys:'gcj02', avgScore2024:600, fourStarRate:55, kuangban2024:1, suzhong2025:3, indicatorQuota:8, feederHigh:['震泽中学','吴江中学'], features:'2025苏中录取约3人，吴江城区' },
  { id:'m24', type:'middle', name:'震泽初级中学', district:'吴江区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', lat:30.9123, lng:120.4723, coordSys:'gcj02', avgScore2024:595, fourStarRate:52, kuangban2024:0, suzhong2025:2, indicatorQuota:10, feederHigh:['震泽中学','震泽育英'], features:'2025苏中录取约2人，震泽板块' },
  { id:'m25', type:'middle', name:'南环中学', district:'姑苏区', tier:3, tierLabel:'梯队3-基础普惠', nature:'公办', lat:31.2890, lng:120.6312, coordSys:'gcj02', avgScore2024:598, fourStarRate:55, kuangban2024:0, suzhong2025:2, indicatorQuota:8, feederHigh:['苏州市第三中学','苏州市第六中学'], features:'2025苏中录取约2人，指标生捡漏机会' },
  { id:'m26', type:'middle', name:'昆山娄江实验中学', district:'昆山市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3823, lng:120.9523, coordSys:'gcj02', avgScore2024:610, fourStarRate:60, kuangban2024:2, suzhong2025:3, indicatorQuota:6, feederHigh:['昆山中学','震川中学','昆山一中'], features:'2025苏中录取约3人，昆山城区优质公办' },
  { id:'m27', type:'middle', name:'常熟市实验中学', district:'常熟市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.6523, lng:120.7523, coordSys:'gcj02', avgScore2024:608, fourStarRate:58, kuangban2024:1, suzhong2025:3, indicatorQuota:7, feederHigh:['常熟中学','常熟市中'], features:'2025苏中录取约3人，常熟城区' },
  { id:'m28', type:'middle', name:'张家港暨阳初级中学', district:'张家港市', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.8623, lng:120.5623, coordSys:'gcj02', avgScore2024:606, fourStarRate:57, kuangban2024:1, suzhong2025:2, indicatorQuota:6, feederHigh:['梁丰高中','沙洲中学','暨阳高中'], features:'2025苏中录取约2人，张家港城区' },
  // 科技城增补 + 民间排名补录
  { id:'m29', type:'middle', name:'新区实验初级中学(青城山路校区)', district:'高新区', region:'科技城', tier:1, tierLabel:'梯队1-头部顶尖', rankLevel:'科技城公办初中第1', nature:'公办集团校', address:'虎丘区青城山路5号', lat:31.348900, lng:120.422100, coordSys:'gcj02', fourStarRate:60, feederHigh:['江苏省苏州实验中学(科技城校区)','苏州高新区第一中学(科技城校区)'], features:'科技城公办初中龙头，四星达线率60%+，指标生名额多，对口新实科技城校区' },
  { id:'m30', type:'middle', name:'苏州科技城外国语学校(初中部)', district:'高新区', region:'科技城', tier:1, tierLabel:'梯队1-头部顶尖', rankLevel:'科技城初中综合第1', nature:'民办', address:'虎丘区嘉陵江路180号', lat:31.352800, lng:120.420700, coordSys:'gcj02', fourStarRate:85, feederHigh:['苏州科技城外国语高级中学'], features:'科技城中考天花板，四星达线率85%+，可直升本校高中' },
  { id:'m31', type:'middle', name:'新区实验初级中学(锦峰路校区)', district:'高新区', region:'科技城', tier:2, tierLabel:'梯队2-优质重点', rankLevel:'集团优质公办校区', nature:'公办集团校', address:'虎丘区青城山路1号', lat:31.338293, lng:120.440507, coordSys:'gcj02', feederHigh:['苏州高新区实验高级中学(锦峰路校区)','南京大学苏州附属中学'], features:'与青城山路校区师资教研统一，太湖科学城核心对口初中' },
  { id:'m32', type:'middle', name:'新区实验初级中学(文达校区)', district:'高新区', region:'科技城', tier:2, tierLabel:'梯队2-优质重点', rankLevel:'集团优质公办校区', nature:'公办集团校', address:'科技城潇湘路与阳宝山路交汇处', lat:31.332600, lng:120.448200, coordSys:'gcj02', feederHigh:['苏州高新区第一中学(科技城校区)'], features:'集团统一办学，适配科技城西部片区学区生源' },
  { id:'m33', type:'middle', name:'南京大学苏州附属初级中学', district:'高新区', region:'科技城', tier:3, tierLabel:'梯队3-基础普惠', rankLevel:'片区普惠兜底初中', nature:'公办', address:'虎丘区通安镇龙康路（昆仑山路399号）', lat:31.362510, lng:120.398057, coordSys:'gcj02', feederHigh:['南京大学苏州附属中学'], features:'覆盖科技城通安片区，保障片区义务教育学位' },
  { id:'m34', type:'middle', name:'景范中学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', middleRank:8, address:'姑苏区人民路699号旁', lat:31.3045, lng:120.6190, coordSys:'gcj02', fourStarRate:80, feederHigh:['江苏省苏州中学','苏州市第一中学'], features:'姑苏老牌优质初中，民间排名第8' },
  { id:'m35', type:'middle', name:'平江中学', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', middleRank:10, address:'姑苏区平江历史街区', lat:31.3140, lng:120.6260, coordSys:'gcj02', fourStarRate:68, feederHigh:['苏州市第一中学','苏州市第十中学'], features:'姑苏区优质公办，民间排名第10（与平江实验学校为不同学校）' },

  // ========== 小学（18所，对齐民间TOP5排名） ==========
  { id:'p1', type:'primary', name:'星海小学', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', primaryRank:2, lat:31.309086, lng:120.664039, coordSys:'gcj02', schoolType:'公办', feederMiddle:'星海实验初级中学', heat:'极高', features:'对口星海初中，STEM与国际化并重，学区竞争最激烈' },
  { id:'p2', type:'primary', name:'星湾学校(小学)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.318500, lng:120.712800, coordSys:'gcj02', schoolType:'公办九年制', feederMiddle:'星湾学校(初中)', heat:'极高', features:'湖东顶级学区，直升初中部' },
  { id:'p3', type:'primary', name:'景城学校(小学)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3252, lng:120.7340, coordSys:'gcj02', schoolType:'公办九年制', feederMiddle:'景城学校(初中)', heat:'极高', features:'玲珑/时代上城等高端学区' },
  { id:'p4', type:'primary', name:'金鸡湖学校(小学)', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3140, lng:120.7018, coordSys:'gcj02', schoolType:'公办九年制', feederMiddle:'金鸡湖学校(初中)', heat:'高', features:'金鸡湖东岸学区' },
  { id:'p5', type:'primary', name:'苏州实验小学', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', primaryRank:1, lat:31.282509, lng:120.623897, coordSys:'gcj02', schoolType:'公办', feederMiddle:'振华/草桥/立达(跨区)', heat:'极高', features:'百年名校，教学进度快、学科深度足，需满足施教区', teacherNote: REFERENCE_RANKINGS.teacherStrength['苏州市实验小学'] },
  { id:'p6', type:'primary', name:'平江实验学校', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', primaryRank:3, lat:31.3120, lng:120.6230, coordSys:'gcj02', schoolType:'公办', feederMiddle:'平江实验学校(初中)', heat:'高', features:'九年一贯制，国学与非遗传承突出' },
  { id:'p7', type:'primary', name:'苏州市振华实小', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3010, lng:120.6180, coordSys:'gcj02', schoolType:'公办', feederMiddle:'振华中学', heat:'高', features:'振华集团小学' },
  { id:'p8', type:'primary', name:'新区实验小学校', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', primaryRank:4, lat:31.296120, lng:120.544680, coordSys:'gcj02', schoolType:'公办', feederMiddle:'新区实验初级中学(金山路校区)', heat:'高', features:'科技创新标杆，机器人编程与创客资源丰富' },
  { id:'p9', type:'primary', name:'新浦实验小学', district:'高新区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2967, lng:120.5512, coordSys:'gcj02', schoolType:'公办', feederMiddle:'新区实验初级中学(金山路校区)', heat:'中高', features:'狮山板块' },
  { id:'p10', type:'primary', name:'苏州外国语学校(小学)', district:'高新区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'民办', primaryRank:5, address:'虎丘区竹园路201号', lat:31.277115, lng:120.543248, coordSys:'gcj02', schoolType:'民办', feederMiddle:'苏州外国语学校(初中)', heat:'高', features:'外语教学强势，国际化课程多元，民办择校/摇号' },
  { id:'p11', type:'primary', name:'园区第二实验小学', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3198, lng:120.6923, coordSys:'gcj02', schoolType:'公办', feederMiddle:'西附初中/星港', heat:'中高', features:'湖西板块' },
  { id:'p12', type:'primary', name:'东沙湖小学', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3289, lng:120.7456, coordSys:'gcj02', schoolType:'公办', feederMiddle:'东沙湖实验中学', heat:'中', features:'东沙湖板块' },
  { id:'p13', type:'primary', name:'吴中实验小学', district:'吴中区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2623, lng:120.6345, coordSys:'gcj02', schoolType:'公办', feederMiddle:'木渎培东/城南', heat:'中', features:'吴中城区' },
  { id:'p14', type:'primary', name:'相城第一实验小学', district:'相城区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3789, lng:120.6423, coordSys:'gcj02', schoolType:'公办', feederMiddle:'相城中学/苏大实验学校', heat:'中', features:'相城主城' },
  { id:'p15', type:'primary', name:'昆山实验小学', district:'昆山市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3823, lng:120.9623, coordSys:'gcj02', schoolType:'公办', feederMiddle:'昆山各优质初中', heat:'高', features:'昆山热门公办' },
  { id:'p16', type:'primary', name:'苏州中学伟长实验部(小学)', district:'姑苏区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3018, lng:120.6195, coordSys:'gcj02', schoolType:'公办', feederMiddle:'苏州中学伟长实验部', heat:'极高', features:'伟长自招，全市顶尖生源' },
  { id:'p17', type:'primary', name:'苏州工业园区星港学校(小学)', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3115, lng:120.6795, coordSys:'gcj02', schoolType:'公办九年制', feederMiddle:'星港学校(初中)', heat:'高', features:'湖西星港九年一贯' },
  { id:'p18', type:'primary', name:'苏州大学实验学校(小学)', district:'相城区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3695, lng:120.6535, coordSys:'gcj02', schoolType:'公办', feederMiddle:'相城中学/苏大实验', heat:'中高', features:'相城苏大附属，九年一贯规划' },

  // ========== 幼儿园（12所 + 参考名单关联） ==========
  { id:'k1', type:'kindergarten', name:'苏州工业园区环洲幼儿园', district:'工业园区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3167, lng:120.7289, coordSys:'gcj02', level:'江苏省优质幼儿园', schoolType:'公办', fee:'省优园标准', features:'2024新晋省优，金鸡湖东岸' },
  { id:'k2', type:'kindergarten', name:'苏州科技城西渚实验幼儿园', district:'高新区', region:'科技城', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.331250, lng:120.476850, coordSys:'gcj02', level:'江苏省优质幼儿园', schoolType:'公办', fee:'省优园标准', features:'6轨18班，生态办园' },
  { id:'k3', type:'kindergarten', name:'苏州市相城区康佳爱德幼儿园', district:'相城区', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3567, lng:120.6234, coordSys:'gcj02', level:'江苏省优质幼儿园', schoolType:'公办', fee:'省优园标准', features:'2024省优' },
  { id:'k4', type:'kindergarten', name:'名城苏桐幼儿园', district:'工业园区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3123, lng:120.6823, coordSys:'gcj02', level:'苏州市优质幼儿园', schoolType:'公办', fee:'市优园标准', features:'湖西老牌优质园' },
  { id:'k5', type:'kindergarten', name:'苏州高新区文韵实验幼儿园', district:'高新区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3012, lng:120.5312, coordSys:'gcj02', level:'苏州市优质幼儿园(2023)', schoolType:'公办', fee:'市优园标准', features:'2023下半年市优' },
  { id:'k6', type:'kindergarten', name:'姑苏区胥台实验幼儿园', district:'姑苏区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', address:'胥涛路128号', lat:31.286420, lng:120.591850, coordSys:'gcj02', level:'苏州市优质幼儿园(2023)', schoolType:'公办', fee:'市优园标准', features:'2023下半年市优' },
  { id:'k7', type:'kindergarten', name:'吴中区溪秀实验幼儿园', district:'吴中区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.2456, lng:120.5923, coordSys:'gcj02', level:'苏州市优质幼儿园(2023)', schoolType:'公办', fee:'市优园标准', features:'2023下半年市优' },
  { id:'k8', type:'kindergarten', name:'吴江区水秀实验幼儿园', district:'吴江区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.1456, lng:120.6234, coordSys:'gcj02', level:'苏州市优质幼儿园(2023)', schoolType:'公办', fee:'市优园标准', features:'2023下半年市优' },
  { id:'k9', type:'kindergarten', name:'昆山开发区乐康幼儿园', district:'昆山市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', lat:31.3723, lng:120.9823, coordSys:'gcj02', level:'江苏省优质幼儿园', schoolType:'公办', fee:'省优园标准', features:'2024省优' },
  { id:'k10', type:'kindergarten', name:'张家港市金香幼儿园', district:'张家港市', tier:1, tierLabel:'梯队1-头部顶尖', nature:'公办', address:'金港街道江海中路28号', lat:31.941850, lng:120.423680, coordSys:'gcj02', level:'江苏省优质幼儿园', schoolType:'公办', fee:'省优园标准', features:'2024省优' },
  { id:'k11', type:'kindergarten', name:'苏州大学实验学校幼儿园', district:'相城区', tier:2, tierLabel:'梯队2-优质重点', nature:'公办', lat:31.3689, lng:120.6523, coordSys:'gcj02', level:'苏州市优质幼儿园', schoolType:'公办', fee:'市优园标准', features:'苏大附属' },
  { id:'k12', type:'kindergarten', name:'苏州工业园区尚城幼儿园', district:'工业园区', tier:3, tierLabel:'梯队3-基础普惠', nature:'普惠民办', lat:31.3234, lng:120.7123, coordSys:'gcj02', level:'合格幼儿园', schoolType:'普惠民办', fee:'普惠标准', features:'湖东常见择园' },
];
