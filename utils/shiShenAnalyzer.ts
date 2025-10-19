// 十神分析工具 - 基于传统八字命理理论

// 天干基本信息
export const tianGanInfo = {
  '甲': { wuxing: '木', yinyang: '阳', diZhi: '寅' },
  '乙': { wuxing: '木', yinyang: '阴', diZhi: '卯' },
  '丙': { wuxing: '火', yinyang: '阳', diZhi: '巳' },
  '丁': { wuxing: '火', yinyang: '阴', diZhi: '午' },
  '戊': { wuxing: '土', yinyang: '阳', diZhi: '辰' },
  '己': { wuxing: '土', yinyang: '阴', diZhi: '未' },
  '庚': { wuxing: '金', yinyang: '阳', diZhi: '申' },
  '辛': { wuxing: '金', yinyang: '阴', diZhi: '酉' },
  '壬': { wuxing: '水', yinyang: '阳', diZhi: '亥' },
  '癸': { wuxing: '水', yinyang: '阴', diZhi: '子' }
};

// 五行生克关系
export const wuxingShengKe = {
  sheng: {
    '木': '火',
    '火': '土',
    '土': '金',
    '金': '水',
    '水': '木'
  },
  ke: {
    '木': '土',
    '火': '金',
    '土': '水',
    '金': '木',
    '水': '火'
  }
};

// 十神类型定义
export interface ShiShenResult {
  name: string;
  type: '正' | '偏';
  relation: string;
  description: string;
  strength: number;
  isYongShen: boolean;
  isJiShen: boolean;
}

// 八字信息接口
export interface BaZiInfo {
  year: { gan: string; zhi: string };
  month: { gan: string; zhi: string };
  day: { gan: string; zhi: string };
  hour: { gan: string; zhi: string };
  dayMaster: string; // 日主
}

/**
 * 计算十神类型
 * @param riZhu 日主天干
 * @param tianGan 要分析的天干
 * @returns 十神结果
 */
export function calculateShiShen(riZhu: string, tianGan: string): ShiShenResult {
  const riZhuInfo = tianGanInfo[riZhu as keyof typeof tianGanInfo];
  const ganInfo = tianGanInfo[tianGan as keyof typeof tianGanInfo];

  if (!riZhuInfo || !ganInfo) {
    throw new Error('无效的天干');
  }

  const riZhuWuxing = riZhuInfo.wuxing;
  const ganWuxing = ganInfo.wuxing;
  const riZhuYinYang = riZhuInfo.yinyang;
  const ganYinYang = ganInfo.yinyang;

  let shiShenName: string = '';
  let shiShenType: '正' | '偏' = '正';
  let relation: string = '';
  let description: string = '';

  // 判断五行关系
  if (ganWuxing === riZhuWuxing) {
    // 同类五行
    shiShenType = ganYinYang === riZhuYinYang ? '偏' : '正';
    shiShenName = shiShenType === '偏' ? '比肩' : '劫财';
    relation = '同类';
    description = `与日主同为${riZhuWuxing}，阴阳${shiShenType === '偏' ? '相同' : '相异'}`;
  } else if (wuxingShengKe.sheng[riZhuWuxing] === ganWuxing) {
    // 日主生天干
    shiShenType = ganYinYang === riZhuYinYang ? '偏' : '正';
    shiShenName = shiShenType === '偏' ? '食神' : '伤官';
    relation = '我生';
    description = `日主${riZhuWuxing}生${ganWuxing}，阴阳${shiShenType === '偏' ? '相同' : '相异'}`;
  } else if (wuxingShengKe.sheng[ganWuxing] === riZhuWuxing) {
    // 天干生日主
    shiShenType = ganYinYang === riZhuYinYang ? '偏' : '正';
    shiShenName = shiShenType === '偏' ? '偏印' : '正印';
    relation = '生我';
    description = `${ganWuxing}生日主${riZhuWuxing}，阴阳${shiShenType === '偏' ? '相同' : '相异'}`;
  } else if (wuxingShengKe.ke[riZhuWuxing] === ganWuxing) {
    // 日主克天干
    shiShenType = ganYinYang === riZhuYinYang ? '偏' : '正';
    shiShenName = shiShenType === '偏' ? '偏财' : '正财';
    relation = '我克';
    description = `日主${riZhuWuxing}克${ganWuxing}，阴阳${shiShenType === '偏' ? '相同' : '相异'}`;
  } else if (wuxingShengKe.ke[ganWuxing] === riZhuWuxing) {
    // 天干克日主
    shiShenType = ganYinYang === riZhuYinYang ? '偏' : '正';
    shiShenName = shiShenType === '偏' ? '七杀' : '正官';
    relation = '克我';
    description = `${ganWuxing}克日主${riZhuWuxing}，阴阳${shiShenType === '偏' ? '相同' : '相异'}`;
  }

  return {
    name: shiShenName,
    type: shiShenType,
    relation,
    description,
    strength: 0, // 需要进一步计算
    isYongShen: false, // 需要进一步判断
    isJiShen: false // 需要进一步判断
  };
}

/**
 * 分析八字中的十神分布
 * @param baZi 八字信息
 * @returns 十神分析结果
 */
export function analyzeBaZiShiShen(baZi: BaZiInfo): {
  shiShenDistribution: Record<string, number>;
  shiShenDetails: ShiShenResult[];
  analysis: {
    personality: string[];
    career: string[];
    relationships: string[];
    strengths: string[];
    weaknesses: string[];
  };
} {
  const { dayMaster } = baZi;
  const allGan = [
    baZi.year.gan,
    baZi.month.gan,
    baZi.day.gan,
    baZi.hour.gan
  ];

  // 计算每个天干的十神
  const shiShenDetails: ShiShenResult[] = [];
  const shiShenDistribution: Record<string, number> = {};

  allGan.forEach(gan => {
    if (gan === dayMaster) return; // 跳过日主本身

    const shiShen = calculateShiShen(dayMaster, gan);
    shiShenDetails.push(shiShen);

    // 统计十神分布
    if (shiShenDistribution[shiShen.name]) {
      shiShenDistribution[shiShen.name]++;
    } else {
      shiShenDistribution[shiShen.name] = 1;
    }
  });

  // 基于十神分布进行综合分析
  const analysis = generateShiShenAnalysis(shiShenDistribution);

  return {
    shiShenDistribution,
    shiShenDetails,
    analysis
  };
}

/**
 * 基于十神分布生成综合分析
 * @param distribution 十神分布
 * @returns 分析结果
 */
function generateShiShenAnalysis(distribution: Record<string, number>) {
  const personality: string[] = [];
  const career: string[] = [];
  const relationships: string[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  // 分析比劫
  if (distribution['比肩'] || distribution['劫财']) {
    const bijieCount = (distribution['比肩'] || 0) + (distribution['劫财'] || 0);
    if (bijieCount >= 2) {
      personality.push('独立自主，有主见，竞争意识强');
      career.push('适合自主创业、团队合作、销售业务');
      strengths.push('独立工作能力强，意志坚定');
      weaknesses.push('固执己见，不善合作，易树敌');
    }
  }

  // 分析食伤
  if (distribution['食神'] || distribution['伤官']) {
    const shishangCount = (distribution['食神'] || 0) + (distribution['伤官'] || 0);
    if (shishangCount >= 2) {
      personality.push('才华横溢，表达能力强，有创新精神');
      career.push('适合艺术创作、技术开发、教育培训');
      strengths.push('创造力强，思维活跃，善于表达');
      weaknesses.push('言辞犀利，易得罪人，情绪化');
    }
  }

  // 分析财星
  if (distribution['正财'] || distribution['偏财']) {
    const caixingCount = (distribution['正财'] || 0) + (distribution['偏财'] || 0);
    if (caixingCount >= 2) {
      personality.push('现实务实，有商业头脑，重视物质');
      career.push('适合商业贸易、金融投资、企业管理');
      strengths.push('理财能力强，善于经营');
      weaknesses.push('过于重视物质，感情表达少');
    }
  }

  // 分析官杀
  if (distribution['正官'] || distribution['七杀']) {
    const guanshaCount = (distribution['正官'] || 0) + (distribution['七杀'] || 0);
    if (guanshaCount >= 2) {
      personality.push('责任心强，有管理能力，追求成就');
      career.push('适合政府公务、企业管理、法律咨询');
      strengths.push('领导能力强，组织能力好');
      weaknesses.push('压力大，易紧张，过于严肃');
    }
  }

  // 分析印星
  if (distribution['正印'] || distribution['偏印']) {
    const yinxingCount = (distribution['正印'] || 0) + (distribution['偏印'] || 0);
    if (yinxingCount >= 2) {
      personality.push('学识渊博，温和善良，重视学习');
      career.push('适合教育科研、文化出版、咨询顾问');
      strengths.push('学习能力强，文化底蕴深');
      weaknesses.push('依赖性强，缺乏进取心');
    }
  }

  return {
    personality,
    career,
    relationships,
    strengths,
    weaknesses
  };
}

/**
 * 判断身强身弱
 * @param baZi 八字信息
 * @returns 身强身弱判断结果
 */
export function judgeShenQiang(baZi: BaZiInfo): {
  isStrong: boolean;
  score: number;
  description: string;
} {
  const { dayMaster } = baZi;
  const dayMasterInfo = tianGanInfo[dayMaster as keyof typeof tianGanInfo];
  const dayMasterWuxing = dayMasterInfo.wuxing;

  let score = 0;
  let description = '';

  // 统计帮扶力量（印星、比劫）
  const allGan = [
    baZi.year.gan,
    baZi.month.gan,
    baZi.day.gan,
    baZi.hour.gan
  ];

  allGan.forEach(gan => {
    const ganInfo = tianGanInfo[gan as keyof typeof tianGanInfo];
    if (ganInfo.wuxing === dayMasterWuxing) {
      score += 2; // 比劫帮扶
    } else if (wuxingShengKe.sheng[ganInfo.wuxing] === dayMasterWuxing) {
      score += 3; // 印星生扶
    } else if (wuxingShengKe.ke[ganInfo.wuxing] === dayMasterWuxing) {
      score -= 2; // 官杀克制
    } else if (wuxingShengKe.ke[dayMasterWuxing] === ganInfo.wuxing) {
      score -= 1; // 财星耗泄
    } else if (wuxingShengKe.sheng[dayMasterWuxing] === ganInfo.wuxing) {
      score -= 1; // 食伤泄气
    }
  });

  // 考虑月令的影响
  const monthZhi = baZi.month.zhi;
  // 这里需要根据地支的藏干来进一步判断，简化处理
  const monthZhiWuxing = getZhiWuxing(monthZhi);
  if (monthZhiWuxing === dayMasterWuxing) {
    score += 3; // 得令
  } else if (wuxingShengKe.sheng[monthZhiWuxing] === dayMasterWuxing) {
    score += 2; // 月令生扶
  } else if (wuxingShengKe.ke[monthZhiWuxing] === dayMasterWuxing) {
    score -= 2; // 月令克制
  }

  const isStrong = score > 0;

  if (score > 4) {
    description = '身强：日主得令得势，能够承受财官';
  } else if (score > 0) {
    description = '中和：日主力量适中，需要配合大运判断';
  } else {
    description = '身弱：日主失令失势，需要印比帮扶';
  }

  return {
    isStrong,
    score,
    description
  };
}

/**
 * 获取地支五行属性（简化版）
 * @param zhi 地支
 * @returns 五行属性
 */
function getZhiWuxing(zhi: string): string {
  const zhiWuxing: Record<string, string> = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
  };
  return zhiWuxing[zhi] || '土';
}

/**
 * 判断用神忌神
 * @param baZi 八字信息
 * @returns 用神忌神分析结果
 */
export function judgeYongJiShen(baZi: BaZiInfo): {
  yongShen: string[];
  jiShen: string[];
  description: string;
} {
  const shenQiang = judgeShenQiang(baZi);
  const yongShen: string[] = [];
  const jiShen: string[] = [];
  let description = '';

  if (shenQiang.isStrong) {
    // 身强喜克泄耗
    yongShen.push('正财', '偏财', '正官', '七杀', '食神', '伤官');
    jiShen.push('比肩', '劫财', '正印', '偏印');
    description = '身强格局，喜财官耗泄，忌印比帮扶。利于事业发展，可积极进取。';
  } else {
    // 身弱喜生扶
    yongShen.push('比肩', '劫财', '正印', '偏印');
    jiShen.push('正财', '偏财', '正官', '七杀', '食神', '伤官');
    description = '身弱格局，喜印比生扶，忌财官克泄。宜保守发展，待时而行。';
  }

  return {
    yongShen,
    jiShen,
    description
  };
}

/**
 * 生成十神分析报告
 * @param baZi 八字信息
 * @returns 完整的分析报告
 */
export function generateShiShenReport(baZi: BaZiInfo): {
  basicInfo: {
    dayMaster: string;
    shenQiang: string;
    yongJiShen: string;
  };
  shiShenDistribution: Record<string, number>;
  personality: string[];
  career: string[];
  relationships: string[];
  advice: string[];
} {
  const shenQiang = judgeShenQiang(baZi);
  const yongJiShen = judgeYongJiShen(baZi);
  const shiShenAnalysis = analyzeBaZiShiShen(baZi);

  const advice: string[] = [];

  if (shenQiang.isStrong) {
    advice.push('您属于身强格局，有能力承担重大责任');
    advice.push('适合积极进取，可以承担更大的挑战');
    advice.push('在财运和事业上能够承受较大压力');
  } else {
    advice.push('您属于身弱格局，需要贵人相助');
    advice.push('建议保守发展，积蓄力量待机而动');
    advice.push('多与朋友合作，借助他人力量发展');
  }

  if (shiShenAnalysis.shiShenDistribution['食神'] || shiShenAnalysis.shiShenDistribution['伤官']) {
    advice.push('您有艺术天赋和创新精神，可以发挥这方面的优势');
  }

  if (shiShenAnalysis.shiShenDistribution['正财'] || shiShenAnalysis.shiShenDistribution['偏财']) {
    advice.push('您有商业头脑，适合从事商业经营活动');
  }

  return {
    basicInfo: {
      dayMaster: baZi.dayMaster,
      shenQiang: shenQiang.description,
      yongJiShen: yongJiShen.description
    },
    shiShenDistribution: shiShenAnalysis.shiShenDistribution,
    personality: shiShenAnalysis.analysis.personality,
    career: shiShenAnalysis.analysis.career,
    relationships: shiShenAnalysis.analysis.relationships,
    advice
  };
}