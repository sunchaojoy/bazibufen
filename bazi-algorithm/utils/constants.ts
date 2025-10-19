/**
 * 八字算法常量定义
 * 包含所有算法需要的基础数据和常量
 */

import { TianGan, DiZhi, WuXing, YinYang, ShiShen } from '../types';

// 天干定义
export const TIAN_GAN: TianGan[] = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 地支定义
export const DI_ZHI: DiZhi[] = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 天干属性映射
export const TIAN_GAN_ATTRIBUTES = {
  '甲': { wuxing: '木' as WuXing, yinyang: '阳' as YinYang, index: 0 },
  '乙': { wuxing: '木' as WuXing, yinyang: '阴' as YinYang, index: 1 },
  '丙': { wuxing: '火' as WuXing, yinyang: '阳' as YinYang, index: 2 },
  '丁': { wuxing: '火' as WuXing, yinyang: '阴' as YinYang, index: 3 },
  '戊': { wuxing: '土' as WuXing, yinyang: '阳' as YinYang, index: 4 },
  '己': { wuxing: '土' as WuXing, yinyang: '阴' as YinYang, index: 5 },
  '庚': { wuxing: '金' as WuXing, yinyang: '阳' as YinYang, index: 6 },
  '辛': { wuxing: '金' as WuXing, yinyang: '阴' as YinYang, index: 7 },
  '壬': { wuxing: '水' as WuXing, yinyang: '阳' as YinYang, index: 8 },
  '癸': { wuxing: '水' as WuXing, yinyang: '阴' as YinYang, index: 9 }
};

// 地支属性映射
export const DI_ZHI_ATTRIBUTES = {
  '子': { wuxing: '水' as WuXing, yinyang: '阳' as YinYang, index: 0, shengxiao: '鼠' },
  '丑': { wuxing: '土' as WuXing, yinyang: '阴' as YinYang, index: 1, shengxiao: '牛' },
  '寅': { wuxing: '木' as WuXing, yinyang: '阳' as YinYang, index: 2, shengxiao: '虎' },
  '卯': { wuxing: '木' as WuXing, yinyang: '阴' as YinYang, index: 3, shengxiao: '兔' },
  '辰': { wuxing: '土' as WuXing, yinyang: '阳' as YinYang, index: 4, shengxiao: '龙' },
  '巳': { wuxing: '火' as WuXing, yinyang: '阴' as YinYang, index: 5, shengxiao: '蛇' },
  '午': { wuxing: '火' as WuXing, yinyang: '阳' as YinYang, index: 6, shengxiao: '马' },
  '未': { wuxing: '土' as WuXing, yinyang: '阴' as YinYang, index: 7, shengxiao: '羊' },
  '申': { wuxing: '金' as WuXing, yinyang: '阳' as YinYang, index: 8, shengxiao: '猴' },
  '酉': { wuxing: '金' as WuXing, yinyang: '阴' as YinYang, index: 9, shengxiao: '鸡' },
  '戌': { wuxing: '土' as WuXing, yinyang: '阳' as YinYang, index: 10, shengxiao: '狗' },
  '亥': { wuxing: '水' as WuXing, yinyang: '阴' as YinYang, index: 11, shengxiao: '猪' }
};

// 地支藏干表
export const DI_ZHI_CANG_GAN = {
  '子': [{ gan: '癸' as TianGan, strength: 100 }],
  '丑': [{ gan: '己' as TianGan, strength: 60 }, { gan: '癸' as TianGan, strength: 30 }, { gan: '辛' as TianGan, strength: 10 }],
  '寅': [{ gan: '甲' as TianGan, strength: 60 }, { gan: '丙' as TianGan, strength: 30 }, { gan: '戊' as TianGan, strength: 10 }],
  '卯': [{ gan: '乙' as TianGan, strength: 100 }],
  '辰': [{ gan: '戊' as TianGan, strength: 60 }, { gan: '乙' as TianGan, strength: 30 }, { gan: '癸' as TianGan, strength: 10 }],
  '巳': [{ gan: '丙' as TianGan, strength: 60 }, { gan: '庚' as TianGan, strength: 30 }, { gan: '戊' as TianGan, strength: 10 }],
  '午': [{ gan: '丁' as TianGan, strength: 70 }, { gan: '己' as TianGan, strength: 30 }],
  '未': [{ gan: '己' as TianGan, strength: 60 }, { gan: '丁' as TianGan, strength: 30 }, { gan: '乙' as TianGan, strength: 10 }],
  '申': [{ gan: '庚' as TianGan, strength: 60 }, { gan: '壬' as TianGan, strength: 30 }, { gan: '戊' as TianGan, strength: 10 }],
  '酉': [{ gan: '辛' as TianGan, strength: 100 }],
  '戌': [{ gan: '戊' as TianGan, strength: 60 }, { gan: '辛' as TianGan, strength: 30 }, { gan: '丁' as TianGan, strength: 10 }],
  '亥': [{ gan: '壬' as TianGan, strength: 70 }, { gan: '甲' as TianGan, strength: 30 }]
};

// 五行相生关系
export const WU_XING_SHENG = {
  '木': '火',
  '火': '土',
  '土': '金',
  '金': '水',
  '水': '木'
} as const;

// 五行相克关系
export const WU_XING_KE = {
  '木': '土',
  '土': '水',
  '水': '火',
  '火': '金',
  '金': '木'
} as const;

// 十神关系表（日主相对其他干支）
export const SHI_SHEN_RELATIONS: { [key: string]: { [key: string]: ShiShen } } = {
  // 日主甲木
  '甲': { '甲': '比肩', '乙': '劫财', '丙': '食神', '丁': '伤官', '戊': '偏财', '己': '正财', '庚': '七杀', '辛': '正官', '壬': '偏印', '癸': '正印' },
  // 日主乙木
  '乙': { '甲': '劫财', '乙': '比肩', '丙': '伤官', '丁': '食神', '戊': '正财', '己': '偏财', '庚': '正官', '辛': '七杀', '壬': '正印', '癸': '偏印' },
  // 日主丙火
  '丙': { '甲': '偏印', '乙': '正印', '丙': '比肩', '丁': '劫财', '戊': '食神', '己': '伤官', '庚': '偏财', '辛': '正财', '壬': '七杀', '癸': '正官' },
  // 日主丁火
  '丁': { '甲': '正印', '乙': '偏印', '丙': '劫财', '丁': '比肩', '戊': '伤官', '己': '食神', '庚': '正财', '辛': '偏财', '壬': '正官', '癸': '七杀' },
  // 日主戊土
  '戊': { '甲': '七杀', '乙': '正官', '丙': '偏印', '丁': '正印', '戊': '比肩', '己': '劫财', '庚': '食神', '辛': '伤官', '壬': '偏财', '癸': '正财' },
  // 日主己土
  '己': { '甲': '正官', '乙': '七杀', '丙': '正印', '丁': '偏印', '戊': '劫财', '己': '比肩', '庚': '伤官', '辛': '食神', '壬': '正财', '癸': '偏财' },
  // 日主庚金
  '庚': { '甲': '偏财', '乙': '正财', '丙': '七杀', '丁': '正官', '戊': '偏印', '己': '正印', '庚': '比肩', '辛': '劫财', '壬': '食神', '癸': '伤官' },
  // 日主辛金
  '辛': { '甲': '正财', '乙': '偏财', '丙': '正官', '丁': '七杀', '戊': '正印', '己': '偏印', '庚': '劫财', '辛': '比肩', '壬': '伤官', '癸': '食神' },
  // 日主壬水
  '壬': { '甲': '食神', '乙': '伤官', '丙': '偏财', '丁': '正财', '戊': '七杀', '己': '正官', '庚': '偏印', '辛': '正印', '壬': '比肩', '癸': '劫财' },
  // 日主癸水
  '癸': { '甲': '伤官', '乙': '食神', '丙': '正财', '丁': '偏财', '戊': '正官', '己': '七杀', '庚': '正印', '辛': '偏印', '壬': '劫财', '癸': '比肩' }
};

// 24节气定义
export const JIE_QI_LIST = [
  { name: '立春', angle: 315 },
  { name: '雨水', angle: 330 },
  { name: '惊蛰', angle: 345 },
  { name: '春分', angle: 0 },
  { name: '清明', angle: 15 },
  { name: '谷雨', angle: 30 },
  { name: '立夏', angle: 45 },
  { name: '小满', angle: 60 },
  { name: '芒种', angle: 75 },
  { name: '夏至', angle: 90 },
  { name: '小暑', angle: 105 },
  { name: '大暑', angle: 120 },
  { name: '立秋', angle: 135 },
  { name: '处暑', angle: 150 },
  { name: '白露', angle: 165 },
  { name: '秋分', angle: 180 },
  { name: '寒露', angle: 195 },
  { name: '霜降', angle: 210 },
  { name: '立冬', angle: 225 },
  { name: '小雪', angle: 240 },
  { name: '大雪', angle: 255 },
  { name: '冬至', angle: 270 },
  { name: '小寒', angle: 285 },
  { name: '大寒', angle: 300 }
];

// 时辰划分表
export const SHI_CHEN_TABLE = [
  { name: '子时', start: 23, end: 1, zhi: '子' as DiZhi },
  { name: '丑时', start: 1, end: 3, zhi: '丑' as DiZhi },
  { name: '寅时', start: 3, end: 5, zhi: '寅' as DiZhi },
  { name: '卯时', start: 5, end: 7, zhi: '卯' as DiZhi },
  { name: '辰时', start: 7, end: 9, zhi: '辰' as DiZhi },
  { name: '巳时', start: 9, end: 11, zhi: '巳' as DiZhi },
  { name: '午时', start: 11, end: 13, zhi: '午' as DiZhi },
  { name: '未时', start: 13, end: 15, zhi: '未' as DiZhi },
  { name: '申时', start: 15, end: 17, zhi: '申' as DiZhi },
  { name: '酉时', start: 17, end: 19, zhi: '酉' as DiZhi },
  { name: '戌时', start: 19, end: 21, zhi: '戌' as DiZhi },
  { name: '亥时', start: 21, end: 23, zhi: '亥' as DiZhi }
];

// 月建地支表（按节气划分）
export const YUE_JIAN_TABLE = {
  '寅月': { start: '立春', end: '惊蛰', zhi: '寅' as DiZhi },
  '卯月': { start: '惊蛰', end: '清明', zhi: '卯' as DiZhi },
  '辰月': { start: '清明', end: '立夏', zhi: '辰' as DiZhi },
  '巳月': { start: '立夏', end: '芒种', zhi: '巳' as DiZhi },
  '午月': { start: '芒种', end: '小暑', zhi: '午' as DiZhi },
  '未月': { start: '小暑', end: '立秋', zhi: '未' as DiZhi },
  '申月': { start: '立秋', end: '白露', zhi: '申' as DiZhi },
  '酉月': { start: '白露', end: '寒露', zhi: '酉' as DiZhi },
  '戌月': { start: '寒露', end: '立冬', zhi: '戌' as DiZhi },
  '亥月': { start: '立冬', end: '大雪', zhi: '亥' as DiZhi },
  '子月': { start: '大雪', end: '小寒', zhi: '子' as DiZhi },
  '丑月': { start: '小寒', end: '立春', zhi: '丑' as DiZhi }
};

// 年上起月表（五虎遁月）
export const NIAN_SHANG_QI_YUE = {
  '甲': { '寅': '丙', '卯': '丁', '辰': '戊', '巳': '己', '午': '庚', '未': '辛', '申': '壬', '酉': '癸', '戌': '甲', '亥': '乙', '子': '丙', '丑': '丁' },
  '乙': { '寅': '戊', '卯': '己', '辰': '庚', '巳': '辛', '午': '壬', '未': '癸', '申': '甲', '酉': '乙', '戌': '丙', '亥': '丁', '子': '戊', '丑': '己' },
  '丙': { '寅': '庚', '卯': '辛', '辰': '壬', '巳': '癸', '午': '甲', '未': '乙', '申': '丙', '酉': '丁', '戌': '戊', '亥': '己', '子': '庚', '丑': '辛' },
  '丁': { '寅': '壬', '卯': '癸', '辰': '甲', '巳': '乙', '午': '丙', '未': '丁', '申': '戊', '酉': '己', '戌': '庚', '亥': '辛', '子': '壬', '丑': '癸' },
  '戊': { '寅': '甲', '卯': '乙', '辰': '丙', '巳': '丁', '午': '戊', '未': '己', '申': '庚', '酉': '辛', '戌': '壬', '亥': '癸', '子': '甲', '丑': '乙' },
  '己': { '寅': '丙', '卯': '丁', '辰': '戊', '巳': '己', '午': '庚', '未': '辛', '申': '壬', '酉': '癸', '戌': '甲', '亥': '乙', '子': '丙', '丑': '丁' },
  '庚': { '寅': '戊', '卯': '己', '辰': '庚', '巳': '辛', '午': '壬', '未': '癸', '申': '甲', '酉': '乙', '戌': '丙', '亥': '丁', '子': '戊', '丑': '己' },
  '辛': { '寅': '庚', '卯': '辛', '辰': '壬', '巳': '癸', '午': '甲', '未': '乙', '申': '丙', '酉': '丁', '戌': '戊', '亥': '己', '子': '庚', '丑': '辛' },
  '壬': { '寅': '壬', '卯': '癸', '辰': '甲', '巳': '乙', '午': '丙', '未': '丁', '申': '戊', '酉': '己', '戌': '庚', '亥': '辛', '子': '壬', '丑': '癸' },
  '癸': { '寅': '甲', '卯': '乙', '辰': '丙', '巳': '丁', '午': '戊', '未': '己', '申': '庚', '酉': '辛', '戌': '壬', '亥': '癸', '子': '甲', '丑': '乙' }
};

// 日上起时表（五鼠遁时）
export const RI_SHANG_QI_SHI = {
  '甲': { '子': '甲', '丑': '乙', '寅': '丙', '卯': '丁', '辰': '戊', '巳': '己', '午': '庚', '未': '辛', '申': '壬', '酉': '癸', '戌': '甲', '亥': '乙' },
  '乙': { '子': '丙', '丑': '丁', '寅': '戊', '卯': '己', '辰': '庚', '巳': '辛', '午': '壬', '未': '癸', '申': '甲', '酉': '乙', '戌': '丙', '亥': '丁' },
  '丙': { '子': '戊', '丑': '己', '寅': '庚', '卯': '辛', '辰': '壬', '巳': '癸', '午': '甲', '未': '乙', '申': '丙', '酉': '丁', '戌': '戊', '亥': '己' },
  '丁': { '子': '庚', '丑': '辛', '寅': '壬', '卯': '癸', '辰': '甲', '巳': '乙', '午': '丙', '未': '丁', '申': '戊', '酉': '己', '戌': '庚', '亥': '辛' },
  '戊': { '子': '壬', '丑': '癸', '寅': '甲', '卯': '乙', '辰': '丙', '巳': '丁', '午': '戊', '未': '己', '申': '庚', '酉': '辛', '戌': '壬', '亥': '癸' },
  '己': { '子': '甲', '丑': '乙', '寅': '丙', '卯': '丁', '辰': '戊', '巳': '己', '午': '庚', '未': '辛', '申': '壬', '酉': '癸', '戌': '甲', '亥': '乙' },
  '庚': { '子': '丙', '丑': '丁', '寅': '戊', '卯': '己', '辰': '庚', '巳': '辛', '午': '壬', '未': '癸', '申': '甲', '酉': '乙', '戌': '丙', '亥': '丁' },
  '辛': { '子': '戊', '丑': '己', '寅': '庚', '卯': '辛', '辰': '壬', '巳': '癸', '午': '甲', '未': '乙', '申': '丙', '酉': '丁', '戌': '戊', '亥': '己' },
  '壬': { '子': '庚', '丑': '辛', '寅': '壬', '卯': '癸', '辰': '甲', '巳': '乙', '午': '丙', '未': '丁', '申': '戊', '酉': '己', '戌': '庚', '亥': '辛' },
  '癸': { '子': '壬', '丑': '癸', '寅': '甲', '卯': '乙', '辰': '丙', '巳': '丁', '午': '戊', '未': '己', '申': '庚', '酉': '辛', '戌': '壬', '亥': '癸' }
};

// 计算常数
export const CALCULATION_CONSTANTS = {
  // 儒略日转换常数
  JULIAN_DAYS: {
    AD_2000_01_01: 2451545,  // 2000年1月1日12:00 UT的儒略日
    DAYS_PER_400_YEARS: 146097,  // 400年天数
    DAYS_PER_100_YEARS: 36524,   // 100年天数
    DAYS_PER_4_YEARS: 1461,      // 4年天数
    DAYS_PER_YEAR: 365,          // 平年天数
  },

  // 节气计算常数
  SOLAR_TERM_CONSTANTS: {
    COEFFICIENTS: [
      [485, 324.96, 1934.136],
      [203, 337.23, 32964.467],
      [199, 342.08, 20.186],
      [182, 27.85, 445267.111],
      [156, 73.14, 45036.886],
      [136, 171.52, 22518.443],
      [77, 222.27, 65928.934],
      [74, 296.72, 3034.906],
      [70, 243.58, 9037.513],
      [58, 119.81, 33718.147],
      [52, 297.17, 150.678],
      [50, 21.02, 2281.226]
    ]
  },

  // 大运计算常数
  DAYUN_CONSTANTS: {
    MIN_AGE: 1,        // 最小起运年龄
    MAX_AGE: 12,       // 最大起运年龄
    DURATION: 10       // 每个大运持续年数
  }
};