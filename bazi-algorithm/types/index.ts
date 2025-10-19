/**
 * 八字排盘系统类型定义
 * 包含所有核心算法需要的类型定义
 */

// 天干类型
export type TianGan = '甲' | '乙' | '丙' | '丁' | '戊' | '己' | '庚' | '辛' | '壬' | '癸';

// 地支类型
export type DiZhi = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥';

// 五行类型
export type WuXing = '木' | '火' | '土' | '金' | '水';

// 阴阳类型
export type YinYang = '阴' | '阳';

// 十神类型
export type ShiShen = '比肩' | '劫财' | '食神' | '伤官' | '正财' | '偏财' | '正官' | '七杀' | '正印' | '偏印';

// 干支组合
export interface GanZhi {
  gan: TianGan;      // 天干
  zhi: DiZhi;        // 地支
  wuxing: WuXing;    // 五行属性
  yinyang: YinYang;  // 阴阳属性
}

// 四柱八字
export interface SiZhu {
  year: GanZhi;      // 年柱
  month: GanZhi;     // 月柱
  day: GanZhi;       // 日柱
  hour: GanZhi;      // 时柱
}

// 出生信息
export interface BirthInfo {
  year: number;      // 年
  month: number;     // 月(1-12)
  day: number;       // 日
  hour: number;      // 时(0-23)
  minute: number;    // 分
  timezone: number;  // 时区(东八区为8)
  isMale: boolean;   // 性别
}

// 大运信息
export interface DaYun {
  age: number;       // 起运年龄
  ganzhi: GanZhi;    // 大运干支
  years: number[];   // 影响年份
  shishen: ShiShen;  // 十神
}

// 流年信息
export interface LiuNian {
  year: number;      // 流年年份
  ganzhi: GanZhi;    // 流年干支
  taiSui: string;    // 太岁
  relationship: string; // 与命局的关系
}

// 节气信息
export interface JieQi {
  name: string;      // 节气名称
  datetime: Date;    // 精确时间
  angle: number;     // 黄经度数
}

// 地支藏干
export interface DiZhiCangGan {
  zhi: DiZhi;        // 地支
  cangGan: { gan: TianGan; strength: number }[]; // 藏干及其力量
}

// 神煞信息
export interface ShenSha {
  name: string;      // 神煞名称
  type: string;      // 类型(吉/凶)
  position: string;  // 所在位置
  description: string; // 说明
}

// 五行分析结果
export interface WuXingAnalysis {
  wuxing: { [key in WuXing]: number }; // 五行数量
  shengke: {     // 生克关系
    sheng: { [key in WuXing]?: WuXing };
    ke: { [key in WuXing]?: WuXing };
  };
  xishu: {        // 五行系数
    [key in WuXing]: number;
  };
  wangshuai: {    // 旺衰判断
    [key in WuXing]: '旺' | '相' | '休' | '囚' | '死';
  };
}

// 格局信息
export interface GeJu {
  name: string;      // 格局名称
  type: string;      // 格局类型(正格/变格/特殊格)
  chengbai: string;  // 成败
  gaodi: string;     // 高低
  condition: string; // 成格条件
}

// 用神信息
export interface YongShen {
  type: string;      // 用神类型(调候/扶抑/通关)
  wuxing: WuXing;    // 五行
  ganzhi: GanZhi[];  // 干支
  reason: string;    // 取用理由
  strength: number;  // 用神力量
}

// 完整八字分析结果
export interface BaziResult {
  birth: BirthInfo;      // 出生信息
  sizhu: SiZhu;          // 四柱八字
  dayun: DaYun[];        // 大运
  liunian: LiuNian[];    // 流年
  wuxing: WuXingAnalysis; // 五行分析
  shensha: ShenSha[];    // 神煞
  geju: GeJu;           // 格局
  yongshen: YongShen;   // 用神
  jieqi: JieQi[];       // 相关节气
}