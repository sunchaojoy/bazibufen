/**
 * 八字命理知识数据库
 * 用于八字网页开发的核心数据结构和算法
 * 基于传统命理理论和现代实践整理
 */

// ==================== 基础数据结构 ====================

/**
 * 天干数据库
 */
const heavenlyStems = [
  { name: '甲', yinYang: '阳', element: '木', image: '参天大树', character: '正直向上、有上进心' },
  { name: '乙', yinYang: '阴', element: '木', image: '花草藤萝', character: '柔和适应、坚韧不拔' },
  { name: '丙', yinYang: '阳', element: '火', image: '太阳之火', character: '热情开朗、积极进取' },
  { name: '丁', yinYang: '阴', element: '火', image: '灯烛之火', character: '温和细腻、思考缜密' },
  { name: '戊', yinYang: '阳', element: '土', image: '城墙厚土', character: '稳重踏实、有责任心' },
  { name: '己', yinYang: '阴', element: '土', image: '田园田园', character: '温和包容、有耐心' },
  { name: '庚', yinYang: '阳', element: '金', image: '刀剑之金', character: '刚毅果断、有正义感' },
  { name: '辛', yinYang: '阴', element: '金', image: '珠宝之金', character: '细腻精致、追求完美' },
  { name: '壬', yinYang: '阳', element: '水', image: '江河之水', character: '聪明机智、适应力强' },
  { name: '癸', yinYang: '阴', element: '水', image: '雨露之水', character: '温柔内向、直觉敏锐' }
];

/**
 * 地支数据库
 */
const earthlyBranches = [
  {
    name: '子',
    yinYang: '阳',
    element: '水',
    animal: '鼠',
    time: '23:00-01:00',
    month: '十一月',
    hiddenStems: ['癸'],
    season: '冬季',
    nature: '智慧流动'
  },
  {
    name: '丑',
    yinYang: '阴',
    element: '土',
    animal: '牛',
    time: '01:00-03:00',
    month: '十二月',
    hiddenStems: ['己', '癸', '辛'],
    season: '冬季',
    nature: '稳重收藏'
  },
  {
    name: '寅',
    yinYang: '阳',
    element: '木',
    animal: '虎',
    time: '03:00-05:00',
    month: '正月',
    hiddenStems: ['甲', '丙', '戊'],
    season: '春季',
    nature: '生机勃发'
  },
  {
    name: '卯',
    yinYang: '阴',
    element: '木',
    animal: '兔',
    time: '05:00-07:00',
    month: '二月',
    hiddenStems: ['乙'],
    season: '春季',
    nature: '温柔生长'
  },
  {
    name: '辰',
    yinYang: '阳',
    element: '土',
    animal: '龙',
    time: '07:00-09:00',
    month: '三月',
    hiddenStems: ['戊', '乙', '癸'],
    season: '春季',
    nature: '变化灵动'
  },
  {
    name: '巳',
    yinYang: '阴',
    element: '火',
    animal: '蛇',
    time: '09:00-11:00',
    month: '四月',
    hiddenStems: ['丙', '庚', '戊'],
    season: '夏季',
    nature: '热情活跃'
  },
  {
    name: '午',
    yinYang: '阳',
    element: '火',
    animal: '马',
    time: '11:00-13:00',
    month: '五月',
    hiddenStems: ['丁', '己'],
    season: '夏季',
    nature: '热烈光明'
  },
  {
    name: '未',
    yinYang: '阴',
    element: '土',
    animal: '羊',
    time: '13:00-15:00',
    month: '六月',
    hiddenStems: ['己', '丁', '乙'],
    season: '夏季',
    nature: '包容和谐'
  },
  {
    name: '申',
    yinYang: '阳',
    element: '金',
    animal: '猴',
    time: '15:00-17:00',
    month: '七月',
    hiddenStems: ['庚', '壬', '戊'],
    season: '秋季',
    nature: '刚毅果断'
  },
  {
    name: '酉',
    yinYang: '阴',
    element: '金',
    animal: '鸡',
    time: '17:00-19:00',
    month: '八月',
    hiddenStems: ['辛'],
    season: '秋季',
    nature: '精致收敛'
  },
  {
    name: '戌',
    yinYang: '阳',
    element: '土',
    animal: '狗',
    time: '19:00-21:00',
    month: '九月',
    hiddenStems: ['戊', '丁', '辛'],
    season: '秋季',
    nature: '忠诚稳重'
  },
  {
    name: '亥',
    yinYang: '阴',
    element: '水',
    animal: '猪',
    time: '21:00-23:00',
    month: '十月',
    hiddenStems: ['壬', '甲'],
    season: '冬季',
    nature: '智慧深邃'
  }
];

// ==================== 五行关系数据库 ====================

const fiveElementsRelations = {
  '五行相生': {
    '木生火': '木燃烧产生火',
    '火生土': '火烧成灰变为土',
    '土生金': '土中孕育金属',
    '金生水': '金属凝结产生水',
    '水生木': '水滋养树木生长'
  },
  '五行相克': {
    '木克土': '树根破土而出',
    '土克水': '土可以阻挡水流',
    '水克火': '水可以熄灭火焰',
    '火克金': '火可以熔化金属',
    '金克木': '金属工具可以砍伐树木'
  }
};

// ==================== 十神数据库 ====================

const tenGodsInfo = {
  '比肩': {
    element: '同类',
    relationship: '阴阳相同',
    symbol: '朋友同事兄弟姐妹',
    character: '独立自主有主见',
    positive: '自尊心强、有主见、善于合作',
    negative: '固执、不合群、竞争心强',
    represents: ['朋友', '同事', '兄弟姐妹', '竞争对手'],
    careers: ['合伙经营', '团队协作', '独立工作'],
    keywords: ['社交', '合作', '竞争', '自尊']
  },
  '劫财': {
    element: '同类',
    relationship: '阴阳相反',
    symbol: '争夺者花费',
    character: '热情冲动善于交际',
    positive: '慷慨大方、善于交际、口才好',
    negative: '易破财、被人借钱、冲动消费',
    represents: ['花费', '争夺', '异性朋友', '兄弟姐妹'],
    careers: ['销售', '公关', '娱乐'],
    keywords: ['花费', '社交', '冲动', '机遇']
  },
  '食神': {
    element: '我生',
    relationship: '阴阳相生',
    symbol: '享受艺术口福',
    character: '温和善良乐观豁达',
    positive: '温和善良、有艺术天分、生活享受',
    negative: '懒惰、贪图享受、缺乏进取心',
    represents: ['享受', '艺术', '口福', '女命子女'],
    careers: ['艺术', '餐饮', '娱乐', '设计'],
    keywords: ['享受', '才艺', '温和', '福气']
  },
  '伤官': {
    element: '我生',
    relationship: '阴阳相反',
    symbol: '才华智慧反叛',
    character: '聪明机智有创造力',
    positive: '聪明机智、有创造力、才华横溢',
    negative: '反叛、不服权威、易惹是非',
    represents: ['才华', '智慧', '反叛', '女命子女'],
    careers: ['创意', '艺术', '技术', '自由职业'],
    keywords: ['才华', '创新', '反叛', '表达']
  },
  '正财': {
    element: '我克',
    relationship: '阴阳相克',
    symbol: '固定收入妻子',
    character: '诚实守信勤奋踏实',
    positive: '诚实守信、勤奋踏实、重视稳定',
    negative: '保守、缺乏冒险精神',
    represents: ['固定收入', '妻子', '稳定财产', '勤奋工作'],
    careers: ['会计', '金融', '管理', '稳定职业'],
    keywords: ['稳定', '勤奋', '正当收入', '婚姻']
  },
  '偏财': {
    element: '我克',
    relationship: '阴阳相反',
    symbol: '意外之财投资',
    character: '慷慨大方善于经营',
    positive: '慷慨大方、善于经营、商业头脑',
    negative: '易暴富暴贫、投机性强',
    represents: ['意外之财', '投资', '父亲', '商业机会'],
    careers: ['商业', '投资', '贸易', '创业'],
    keywords: ['横财', '投资', '机遇', '慷慨']
  },
  '正官': {
    element: '克我',
    relationship: '阴阳相克',
    symbol: '事业地位丈夫',
    character: '正直守法有责任心',
    positive: '正直守法、有责任心、重视名声',
    negative: '过于保守、缺乏灵活性',
    represents: ['事业', '地位', '丈夫', '纪律', '法律'],
    careers: ['公务员', '管理', '法律', '教育'],
    keywords: ['事业', '地位', '名声', '责任']
  },
  '七杀': {
    element: '克我',
    relationship: '阴阳相反',
    symbol: '权力压力敌人',
    character: '野心勃勃果断勇猛',
    positive: '野心勃勃、果断勇猛、有威严',
    negative: '压力大、易树敌、冒险性强',
    represents: ['权力', '压力', '敌人', '挑战', '军警'],
    careers: ['军警', '体育', '创业', '挑战性工作'],
    keywords: ['权力', '挑战', '压力', '威严']
  },
  '正印': {
    element: '生我',
    relationship: '阴阳相生',
    symbol: '母亲学识保护',
    character: '仁慈善良喜欢学习',
    positive: '仁慈善良、喜欢学习、重视传统',
    negative: '依赖性强、缺乏主动性',
    represents: ['母亲', '学识', '保护', '名誉', '文书'],
    careers: ['教育', '文化', '研究', '医疗'],
    keywords: ['学识', '贵人', '保护', '传统']
  },
  '偏印': {
    element: '生我',
    relationship: '阴阳相反',
    symbol: '直觉神秘宗教',
    character: '心思缜密直觉敏锐',
    positive: '心思缜密、直觉敏锐、有特殊才能',
    negative: '孤僻、多疑、不合群',
    represents: ['直觉', '神秘', '宗教', '医学', '艺术'],
    careers: ['研究', '技艺', '宗教', '心理学'],
    keywords: ['直觉', '神秘', '独特', '钻研']
  }
};

// ==================== 格局数据库 ====================

const patternDatabase = {
  '正官格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasDirectOfficer(monthBranch, dayMaster),
    quality: {
      '上等': '官印相生，贵不可言，适合公职管理',
      '中等': '官星有力，小有成就，稳定发展',
      '下等': '官星受制，发展受限，需要大运帮助'
    },
    careers: ['公务员', '教师', '律师', '管理者', '行政'],
    characteristics: ['正直', '守法', '责任心强', '重视名声', '稳定'],
    description: '正直守法，有责任心，适合公职管理'
  },
  '七杀格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasSevenKillings(monthBranch, dayMaster),
    quality: {
      '上等': '杀印相生，贵气十足，军警武职',
      '中等': '七杀有制，小有成就，挑战性工作',
      '下等': '杀重身轻，压力山大，难以承受'
    },
    careers: ['军警', '运动员', '企业家', '高风险投资'],
    characteristics: ['野心', '威严', '果断', '挑战', '权力'],
    description: '野心勃勃，有威严，适合军警武职'
  },
  '正财格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasDirectWealth(monthBranch, dayMaster),
    quality: {
      '上等': '财官印全，富贵双全，商业奇才',
      '中等': '财星有力，小康之家，稳定收益',
      '下等': '财星受制，财运不佳，需要努力'
    },
    careers: ['会计', '金融', '贸易', '稳定商业'],
    characteristics: ['诚实', '勤奋', '稳定', '保守', '可靠'],
    description: '诚实守信，勤奋踏实，善于经商'
  },
  '偏财格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasIndirectWealth(monthBranch, dayMaster),
    quality: {
      '上等': '偏财透出，商业巨子，投资高手',
      '中等': '财源不错，小康水平，有商业头脑',
      '下等': '财来财去，难以积累，需要理财'
    },
    careers: ['投资', '贸易', '创业', '销售'],
    characteristics: ['慷慨', '经营', '机会', '冒险', '人脉'],
    description: '慷慨大方，善于经营，有商业头脑'
  },
  '正印格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasDirectResource(monthBranch, dayMaster),
    quality: {
      '上等': '印星有力，学识渊博，贵气十足',
      '中等': '有贵人助，学习运佳，稳定发展',
      '下等': '印星受制，缺乏帮助，需要自立'
    },
    careers: ['学者', '医生', '教师', '文化工作者'],
    characteristics: ['仁慈', '学习', '传统', '贵人', '保护'],
    description: '仁慈善良，喜欢学习，有贵人相助'
  },
  '偏印格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasIndirectResource(monthBranch, dayMaster),
    quality: {
      '上等': '偏印成格，技艺超群，专业权威',
      '中等': '有特殊才能，技艺精湛，专业人才',
      '下等': '孤僻多疑，难以合群，需要改善'
    },
    careers: ['技师', '设计师', '研究员', '专业技艺'],
    characteristics: ['独特', '钻研', '技艺', '神秘', '直觉'],
    description: '心思缜密，有特殊才能，适合专业技能'
  },
  '食神格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasEatingGod(monthBranch, dayMaster),
    quality: {
      '上等': '食神生财，富贵双全，艺术天才',
      '中等': '才艺不错，生活享受，小康之家',
      '下等': '贪图享受，缺乏进取，需要激励'
    },
    careers: ['艺术', '餐饮', '娱乐', '服务业'],
    characteristics: ['温和', '艺术', '享受', '福气', '善良'],
    description: '温和善良，有艺术天分，生活享受'
  },
  '伤官格': {
    category: '正格',
    condition: (monthBranch, dayMaster) => hasHurtingOfficer(monthBranch, dayMaster),
    quality: {
      '上等': '伤官配印，才华横溢，贵格',
      '中等': '有才华，善表达，技术人才',
      '下等': '伤官见官，是非口舌，需要制化'
    },
    careers: ['创意', '技术', '艺术', '自由职业'],
    characteristics: ['聪明', '创新', '反叛', '表达', '才华'],
    description: '聪明机智，有创造力，反叛精神'
  },
  '建禄格': {
    category: '特殊格',
    condition: (dayMaster, monthBranch) => isJianLu(dayMaster, monthBranch),
    quality: {
      '上等': '建禄有用，事业有成，中年得志',
      '中等': '自立自强，小有成就，稳步发展',
      '下等': '空禄无依，发展缓慢，需要大运'
    },
    careers: ['创业', '管理', '专业技术'],
    characteristics: ['自立', '上进', '勤奋', '发展'],
    description: '自立自强，有上进心，中年得志'
  },
  '羊刃格': {
    category: '特殊格',
    condition: (dayMaster, monthBranch) => isYangRen(dayMaster, monthBranch),
    quality: {
      '上等': '羊刃有制，武职贵格，大将之风',
      '中等': '有领导才能，小有成就，需注意人际关系',
      '下等': '羊刃无制，易惹是非，需要修身养性'
    },
    careers: ['军警', '体育', '管理', '创业'],
    characteristics: ['刚烈', '果断', '领导', '威严'],
    description: '刚烈果断，有领导才能，易惹是非'
  }
};

// ==================== 纳音五行数据库 ====================

const naYinDatabase = {
  '甲子': '海中金', '乙丑': '海中金',
  '丙寅': '炉中火', '丁卯': '炉中火',
  '戊辰': '大林木', '己巳': '大林木',
  '庚午': '路旁土', '辛未': '路旁土',
  '壬申': '剑锋金', '癸酉': '剑锋金',
  '甲戌': '山头火', '乙亥': '山头火',
  '丙子': '涧下水', '丁丑': '涧下水',
  '戊寅': '城头土', '己卯': '城头土',
  '庚辰': '白蜡金', '辛巳': '白蜡金',
  '壬午': '杨柳木', '癸未': '杨柳木',
  '甲申': '井泉水', '乙酉': '井泉水',
  '丙戌': '屋上土', '丁亥': '屋上土',
  '戊子': '霹雳火', '己丑': '霹雳火',
  '庚寅': '松柏木', '辛卯': '松柏木',
  '壬辰': '长流水', '癸巳': '长流水',
  '甲午': '砂中金', '乙未': '砂中金',
  '丙申': '山下火', '丁酉': '山下火',
  '戊戌': '平地木', '己亥': '平地木',
  '庚子': '壁上土', '辛丑': '壁上土',
  '壬寅': '金箔金', '癸卯': '金箔金',
  '甲辰': '覆灯火', '乙巳': '覆灯火',
  '丙午': '天河水', '丁未': '天河水',
  '戊申': '大驿土', '己酉': '大驿土',
  '庚戌': '钗钏金', '辛亥': '钗钏金',
  '壬子': '桑柘木', '癸丑': '桑柘木',
  '甲寅': '大溪水', '乙卯': '大溪水',
  '丙辰': '沙中土', '丁巳': '沙中土',
  '戊午': '天上火', '己未': '天上火',
  '庚申': '石榴木', '辛酉': '石榴木',
  '壬戌': '大海水', '癸亥': '大海水'
};

// ==================== 核心算法函数 ====================

/**
 * 获取天干五行属性
 */
function getFiveElement(stem) {
  const stemInfo = heavenlyStems.find(s => s.name === stem);
  return stemInfo ? stemInfo.element : null;
}

/**
 * 获取天干阴阳属性
 */
function getYinYang(stem) {
  const stemInfo = heavenlyStems.find(s => s.name === stem);
  return stemInfo ? stemInfo.yinYang : null;
}

/**
 * 计算十神关系
 */
function calculateTenGods(dayMaster, otherStem) {
  const dayElement = getFiveElement(dayMaster);
  const dayYinYang = getYinYang(dayMaster);
  const otherElement = getFiveElement(otherStem);
  const otherYinYang = getYinYang(otherStem);

  // 五行关系判断
  if (dayElement === otherElement) {
    return dayYinYang === otherYinYang ? '比肩' : '劫财';
  } else if (isGeneratedBy(dayElement, otherElement)) {
    return dayYinYang === otherYinYang ? '食神' : '伤官';
  } else if (isControlledBy(dayElement, otherElement)) {
    return dayYinYang === otherYinYang ? '正财' : '偏财';
  } else if (isControls(dayElement, otherElement)) {
    return dayYinYang === otherYinYang ? '正官' : '七杀';
  } else if (isGeneratedBy(otherElement, dayElement)) {
    return dayYinYang === otherYinYang ? '正印' : '偏印';
  }

  return null;
}

/**
 * 判断五行相生关系
 */
function isGeneratedBy(element, generator) {
  const generateRelations = {
    '木': '水',
    '火': '木',
    '土': '火',
    '金': '土',
    '水': '金'
  };
  return generateRelations[element] === generator;
}

/**
 * 判断五行相克关系（被克）
 */
function isControlledBy(element, controller) {
  const controlRelations = {
    '木': '金',
    '火': '水',
    '土': '木',
    '金': '火',
    '水': '土'
  };
  return controlRelations[element] === controller;
}

/**
 * 判断五行相克关系（克他）
 */
function isControls(element, target) {
  const controlsRelations = {
    '木': '土',
    '火': '金',
    '土': '水',
    '金': '木',
    '水': '火'
  };
  return controlsRelations[element] === target;
}

/**
 * 判断时辰
 */
function getTimeSlot(hour) {
  if (hour >= 23 || hour < 1) return '子';
  if (hour >= 1 && hour < 3) return '丑';
  if (hour >= 3 && hour < 5) return '寅';
  if (hour >= 5 && hour < 7) return '卯';
  if (hour >= 7 && hour < 9) return '辰';
  if (hour >= 9 && hour < 11) return '巳';
  if (hour >= 11 && hour < 13) return '午';
  if (hour >= 13 && hour < 15) return '未';
  if (hour >= 15 && hour < 17) return '申';
  if (hour >= 17 && hour < 19) return '酉';
  if (hour >= 19 && hour < 21) return '戌';
  if (hour >= 21 && hour < 23) return '亥';
  return null;
}

/**
 * 判断建禄格
 */
function isJianLu(dayMaster, monthBranch) {
  const luPositions = {
    '甲': '寅', '乙': '卯',
    '丙': '巳', '丁': '午',
    '戊': '巳', '己': '午',
    '庚': '申', '辛': '酉',
    '壬': '亥', '癸': '子'
  };
  return luPositions[dayMaster] === monthBranch;
}

/**
 * 判断羊刃格
 */
function isYangRen(dayMaster, monthBranch) {
  const renPositions = {
    '甲': '卯', '乙': '寅',
    '丙': '午', '丁': '巳',
    '戊': '午', '己': '巳',
    '庚': '酉', '辛': '申',
    '壬': '子', '癸': '亥'
  };
  return renPositions[dayMaster] === monthBranch;
}

/**
 * 检查地支藏干中是否有指定十神
 */
function checkHiddenStem(monthBranch, dayMaster, godType) {
  const branchInfo = earthlyBranches.find(b => b.name === monthBranch);
  if (!branchInfo) return false;

  return branchInfo.hiddenStems.some(stem => {
    const tenGod = calculateTenGods(dayMaster, stem);
    return tenGod === godType;
  });
}

// 各种十神检查函数
function hasDirectOfficer(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '正官');
}

function hasSevenKillings(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '七杀');
}

function hasDirectWealth(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '正财');
}

function hasIndirectWealth(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '偏财');
}

function hasDirectResource(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '正印');
}

function hasIndirectResource(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '偏印');
}

function hasEatingGod(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '食神');
}

function hasHurtingOfficer(monthBranch, dayMaster) {
  return checkHiddenStem(monthBranch, dayMaster, '伤官');
}

// ==================== 导出模块 ====================

module.exports = {
  // 基础数据
  heavenlyStems,
  earthlyBranches,
  fiveElementsRelations,
  tenGodsInfo,
  patternDatabase,
  naYinDatabase,

  // 核心算法
  getFiveElement,
  getYinYang,
  calculateTenGods,
  getTimeSlot,

  // 格局判断
  isJianLu,
  isYangRen,
  hasDirectOfficer,
  hasSevenKillings,
  hasDirectWealth,
  hasIndirectWealth,
  hasDirectResource,
  hasIndirectResource,
  hasEatingGod,
  hasHurtingOfficer,

  // 辅助函数
  isGeneratedBy,
  isControlledBy,
  isControls,
  checkHiddenStem
};

/**
 * 使用示例：
 *
 * const bazi = require('./bazi-knowledge-database');
 *
 * // 计算十神
 * const tenGod = bazi.calculateTenGods('甲', '丙');
 * console.log(tenGod); // '食神'
 *
 * // 判断格局
 * const isPattern = bazi.hasDirectOfficer('卯', '癸');
 * console.log(isPattern); // true/false
 *
 * // 获取十神信息
 * const info = bazi.tenGodsInfo['正官'];
 * console.log(info.description);
 */