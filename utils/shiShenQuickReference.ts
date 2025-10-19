// 十神速查手册 - 实用工具函数

export interface ShiShenQuickInfo {
  name: string;
  abbreviation: string; // 简称
  english: string; // 英文对照
  category: string; // 类别
  basicNature: string; // 基本性
  keyWords: string[]; // 关键词
  positive: string[]; // 正面特征
  negative: string[]; // 负面特征
  career: string[]; // 适合职业
  color: string; // 代表色
  direction: string; // 代表方位
  season: string; // 代表季节
}

// 十神速查信息
export const shiShenQuickRef: Record<string, ShiShenQuickInfo> = {
  '比肩': {
    name: '比肩',
    abbreviation: '比',
    english: 'Friend',
    category: '比劫类',
    basicNature: '帮扶、竞争、自立',
    keyWords: ['朋友', '兄弟', '同事', '合作', '竞争', '独立'],
    positive: ['独立自主', '意志坚定', '重情重义', '有毅力', '公平正义'],
    negative: ['固执己见', '不善合作', '易树敌', '自我中心', '缺乏变通'],
    career: ['自主创业', '团队管理', '销售业务', '合伙经营', '自由职业'],
    color: '黄色',
    direction: '中央',
    season: '四季末'
  },

  '劫财': {
    name: '劫财',
    abbreviation: '劫',
    english: 'Rival',
    category: '比劫类',
    basicNature: '争夺、冲动、社交',
    keyWords: ['竞争对手', '冒险', '投机', '交际', '慷慨', '冲动'],
    positive: ['社交能力强', '行动力强', '敢于创新', '慷慨大方', '适应性强'],
    negative: ['冲动易怒', '投机心强', '易破财', '缺乏耐心', '人际关系复杂'],
    career: ['销售公关', '投资理财', '娱乐演艺', '体育竞技', '风险投资'],
    color: '橙色',
    direction: '东',
    season: '夏季'
  },

  '食神': {
    name: '食神',
    abbreviation: '食',
    english: 'Artist',
    category: '食伤类',
    basicNature: '才华、享受、温和',
    keyWords: ['艺术', '美食', '享受', '温和', '乐观', '才华'],
    positive: ['才华横溢', '温和善良', '乐观积极', '有审美', '创造力强'],
    negative: ['过于理想化', '缺乏进取心', '易满足现状', '消费欲强', '不善理财'],
    career: ['艺术设计', '餐饮美食', '文学创作', '演艺娱乐', '教育培训'],
    color: '红色',
    direction: '南',
    season: '夏季'
  },

  '伤官': {
    name: '伤官',
    abbreviation: '伤',
    english: 'Rebel',
    category: '食伤类',
    basicNature: '叛逆、创新、犀利',
    keyWords: ['聪明', '叛逆', '创新', '犀利', '挑战', '完美'],
    positive: ['聪明才智', '创新思维', '表达能力强', '追求完美', '批判思维'],
    negative: ['叛逆性强', '言辞犀利', '易得罪人', '完美主义', '压力过大'],
    career: ['科技创新', '法律咨询', '媒体评论', '企业管理', '技术研发'],
    color: '紫色',
    direction: '东南',
    season: '夏末'
  },

  '正财': {
    name: '正财',
    abbreviation: '才',
    english: 'Wealth',
    category: '财星类',
    basicNature: '稳健、诚实、理财',
    keyWords: ['财富', '稳健', '诚实', '勤俭', '现实', '责任'],
    positive: ['诚实守信', '理财能力强', '责任心强', '商业头脑', '稳重踏实'],
    negative: ['过于保守', '重视物质', '缺乏冒险', '灵活性差', '情感表达少'],
    career: ['金融投资', '商业贸易', '财务管理', '企业经营', '不动产'],
    color: '金色',
    direction: '西',
    season: '秋季'
  },

  '偏财': {
    name: '偏财',
    abbreviation: '财',
    english: 'Fortune',
    category: '财星类',
    basicNature: '机遇、人脉、慷慨',
    keyWords: ['机遇', '人脉', '慷慨', '乐观', '投机', '商业'],
    positive: ['人脉广泛', '机会把握强', '慷慨大方', '灵活变通', '乐观积极'],
    negative: ['花费较大', '人际关系复杂', '投机心强', '缺乏耐心', '理财能力差'],
    career: ['投资贸易', '销售代理', '娱乐博彩', '进出口贸易', '中介服务'],
    color: '银色',
    direction: '西北',
    season: '秋末'
  },

  '正官': {
    name: '正官',
    abbreviation: '官',
    english: 'Officer',
    category: '官杀类',
    basicNature: '正直、责任、管理',
    keyWords: ['官职', '正直', '责任', '管理', '纪律', '稳重'],
    positive: ['正直诚实', '责任心强', '管理能力强', '稳重踏实', '有道德'],
    negative: ['过于保守', '循规蹈矩', '压力过大', '缺乏创新', '重视形式'],
    career: ['政府公务员', '企业管理', '法律咨询', '行政管理', '教育培训'],
    color: '蓝色',
    direction: '北',
    season: '冬季'
  },

  '七杀': {
    name: '七杀',
    abbreviation: '杀',
    english: 'General',
    category: '官杀类',
    basicNature: '威严、果断、压力',
    keyWords: ['权力', '威严', '果断', '压力', '挑战', '野心'],
    positive: ['领导能力强', '果断决绝', '抗压能力强', '改革创新', '有魄力'],
    negative: ['过于专制', '压力过大', '人际关系紧张', '风险意识强', '易焦虑'],
    career: ['军队警察', '企业高管', '创业老板', '投资银行', '项目管理'],
    color: '黑色',
    direction: '东北',
    season: '冬末'
  },

  '正印': {
    name: '正印',
    abbreviation: '印',
    english: 'Support',
    category: '印星类',
    basicNature: '学识、温和、贵人',
    keyWords: ['学识', '贵人', '母亲', '温和', '传统', '学习'],
    positive: ['学识渊博', '温和善良', '贵人运强', '传统稳重', '有道德'],
    negative: ['依赖性强', '缺乏进取心', '优柔寡断', '创新不足', '缺乏独立性'],
    career: ['教育科研', '文化出版', '咨询顾问', '医疗保健', '社会服务'],
    color: '绿色',
    direction: '东',
    season: '春季'
  },

  '偏印': {
    name: '偏印',
    abbreviation: '枭',
    english: 'Specialist',
    category: '印星类',
    basicNature: '独特、专业、孤独',
    keyWords: ['专业技能', '独特', '孤独', '观察', '研究', '创新'],
    positive: ['专业技能强', '思维独特', '观察敏锐', '创新思维', '独立工作'],
    negative: ['内心孤独', '不善交际', '思想偏激', '财运不稳', '不易理解'],
    career: ['专业技术', '研究开发', '心理咨询', '玄学命理', '艺术设计'],
    color: '青色',
    direction: '西南',
    season: '春末'
  }
};

// 十神生克关系速查
export const shiShenShengKeQuick = {
  // 十神相生
  生: {
    '正官': '正印',
    '七杀': '偏印',
    '正印': '比肩',
    '偏印': '劫财',
    '比肩': '食神',
    '劫财': '伤官',
    '食神': '正财',
    '伤官': '偏财',
    '正财': '正官',
    '偏财': '七杀'
  },
  // 十神相克
  克: {
    '正官': '伤官',
    '七杀': '食神',
    '正印': '食神',
    '偏印': '伤官',
    '比肩': '正财',
    '劫财': '偏财',
    '食神': '正官',
    '伤官': '七杀',
    '正财': '比肩',
    '偏财': '劫财'
  }
};

// 十神组合格局速查
export const shiShenJuXuQuick = {
  '食神制杀': {
    description: '食神制七杀，化压力为动力',
    feature: '能在困难中找到解决方案，适合管理岗位',
    condition: '食神有力，七杀有制'
  },
  '伤官见官': {
    description: '伤官克正官，易有叛逆心理',
    feature: '挑战权威，但也可能带来创新',
    condition: '伤官旺，正官弱'
  },
  '财官相生': {
    description: '财星生官星，事业心强',
    feature: '能够通过正当途径获得成功',
    condition: '财官双美，无冲无破'
  },
  '印星护官': {
    description: '印星生扶官星，有贵人相助',
    feature: '事业稳定发展，得长辈提携',
    condition: '印星有力，官星得护'
  },
  '比劫帮身': {
    description: '比劫帮扶日主，增强自身力量',
    feature: '朋友多，合作机会多',
    condition: '身弱喜比劫帮扶'
  },
  '官印相生': {
    description: '官星生印星，印星生日主',
    feature: '名利双收，地位稳固',
    condition: '官印双全，无冲无破'
  }
};

// 快速查找函数
export function findShiShen(keyword: string): ShiShenQuickInfo | null {
  // 直接查找
  if (shiShenQuickRef[keyword]) {
    return shiShenQuickRef[keyword];
  }

  // 通过简称查找
  for (const [name, info] of Object.entries(shiShenQuickRef)) {
    if (info.abbreviation === keyword) {
      return info;
    }
  }

  // 通过关键词查找
  for (const [name, info] of Object.entries(shiShenQuickRef)) {
    if (info.keyWords.includes(keyword)) {
      return info;
    }
  }

  return null;
}

// 获取十神关系
export function getShiShenRelation(shiShen1: string, shiShen2: string): {
  relation: string;
  description: string;
} | null {
  // 检查相生关系
  if (shiShenShengKeQuick.生[shiShen1 as keyof typeof shiShenShengKeQuick.生] === shiShen2) {
    return {
      relation: '相生',
      description: `${shiShen1}生${shiShen2}，有助益作用`
    };
  }

  if (shiShenShengKeQuick.生[shiShen2 as keyof typeof shiShenShengKeQuick.生] === shiShen1) {
    return {
      relation: '被生',
      description: `${shiShen2}生${shiShen1}，得到助益`
    };
  }

  // 检查相克关系
  if (shiShenShengKeQuick.克[shiShen1 as keyof typeof shiShenShengKeQuick.克] === shiShen2) {
    return {
      relation: '相克',
      description: `${shiShen1}克${shiShen2}，有抑制作用`
    };
  }

  if (shiShenShengKeQuick.克[shiShen2 as keyof typeof shiShenShengKeQuick.克] === shiShen1) {
    return {
      relation: '被克',
      description: `${shiShen2}克${shiShen1}，受到抑制`
    };
  }

  return null;
}

// 十神颜色映射（用于UI显示）
export function getShiShenColor(shiShen: string): string {
  const info = shiShenQuickRef[shiShen];
  return info ? info.color : '#666666';
}

// 十神分类统计
export function analyzeShiShenDistribution(shiShenList: string[]): {
  categories: Record<string, number>;
  mainCategory: string;
  balance: string;
} {
  const categories = {
    '比劫类': 0,
    '食伤类': 0,
    '财星类': 0,
    '官杀类': 0,
    '印星类': 0
  };

  shiShenList.forEach(shiShen => {
    const info = shiShenQuickRef[shiShen];
    if (info) {
      categories[info.category as keyof typeof categories]++;
    }
  });

  // 找出主要类别
  const mainCategory = Object.entries(categories).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  // 判断平衡性
  const maxCount = Math.max(...Object.values(categories));
  const minCount = Math.min(...Object.values(categories));
  const balance = maxCount - minCount <= 1 ? '相对平衡' : '不够平衡';

  return {
    categories,
    mainCategory,
    balance
  };
}

// 十神建议生成
export function generateShiShenAdvice(shiShenList: string[]): {
  personality: string[];
  career: string[];
  relationship: string[];
  health: string[];
  fortune: string[];
} {
  const advice = {
    personality: [] as string[],
    career: [] as string[],
    relationship: [] as string[],
    health: [] as string[],
    fortune: [] as string[]
  };

  const distribution = analyzeShiShenDistribution(shiShenList);
  const mainCategory = distribution.mainCategory;

  // 根据主要类别生成建议
  switch (mainCategory) {
    case '比劫类':
      advice.personality.push('您性格独立，有主见，但也需要学会倾听他人意见');
      advice.career.push('适合自主创业或团队合作，但要注意合作方式');
      advice.relationship.push('朋友多，但要注意维护深层次关系');
      advice.health.push('注意脾胃健康，避免过度劳累');
      advice.fortune.push('财运稳定，但需要防范投资风险');
      break;

    case '食伤类':
      advice.personality.push('您才华横溢，有创新精神，但要注重实际执行');
      advice.career.push('适合创意型工作，发挥艺术和技术才能');
      advice.relationship.push('表达能力强，但要注意言辞，避免伤害他人');
      advice.health.push('注意心脏健康，保持情绪稳定');
      advice.fortune.push('适合通过专业技能获得收入，投资需谨慎');
      break;

    case '财星类':
      advice.personality.push('您现实务实，有商业头脑，但也要重视情感交流');
      advice.career.push('适合商业经营和金融投资，理财能力较强');
      advice.relationship.push('重视物质条件，但要注意精神层面的需求');
      advice.health.push('注意肝脏和血液循环，保持适度运动');
      advice.fortune.push('财运较好，但要避免过度投资和投机');
      break;

    case '官杀类':
      advice.personality.push('您责任心强，有管理能力，但要学会释放压力');
      advice.career.push('适合管理岗位和领导工作，能承担重大责任');
      advice.relationship.push('重视社会地位，但要注意家庭关系的维护');
      advice.health.push('注意心理健康，避免过度紧张和焦虑');
      advice.fortune.push('事业有成，但要注意工作与生活的平衡');
      break;

    case '印星类':
      advice.personality.push('您学识渊博，温和善良，但要增强独立性');
      advice.career.push('适合教育、文化、咨询等知识型工作');
      advice.relationship.push('人缘好，得贵人相助，但要学会自主决策');
      advice.health.push('注意消化系统，保持规律作息');
      advice.fortune.push('财运平稳，适合通过知识技能获得收入');
      break;
  }

  // 根据平衡性给出建议
  if (distribution.balance === '不够平衡') {
    advice.personality.push('性格特质相对单一，建议培养多方面兴趣');
    advice.career.push('职业选择可以考虑更多可能性');
  }

  return advice;
}

// 十神对照表（用于学习和记忆）
export const shiShenComparisonTable = [
  {
    category: '比劫类',
    shiShen: ['比肩', '劫财'],
    core: '自我与同辈',
    function: '帮扶与竞争',
    keyword: '人际关系'
  },
  {
    category: '食伤类',
    shiShen: ['食神', '伤官'],
    core: '才华与表达',
    function: '创造与输出',
    keyword: '艺术技能'
  },
  {
    category: '财星类',
    shiShen: ['正财', '偏财'],
    core: '财富与物质',
    function: '掌控与获取',
    keyword: '经济状况'
  },
  {
    category: '官杀类',
    shiShen: ['正官', '七杀'],
    core: '权力与责任',
    function: '管理与约束',
    keyword: '事业地位'
  },
  {
    category: '印星类',
    shiShen: ['正印', '偏印'],
    core: '知识与支持',
    function: '学习与吸收',
    keyword: '文化修养'
  }
];

export default {
  shiShenQuickRef,
  shiShenShengKeQuick,
  shiShenJuXuQuick,
  findShiShen,
  getShiShenRelation,
  getShiShenColor,
  analyzeShiShenDistribution,
  generateShiShenAdvice,
  shiShenComparisonTable
};