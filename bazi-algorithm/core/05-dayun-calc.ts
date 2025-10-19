/**
 * 大运计算方法
 * 实现八字大运的完整计算算法
 *
 * 算法概述：
 * 1. 大运起运年龄：根据出生时间与节气的关系计算
 * 2. 大运干支推算：阳男阴女顺排，阴男阳女逆排
 * 3. 大运持续时间：每柱大运10年
 * 4. 大运与命局的关系：大运对原局五行的影响
 *
 * 核心算法：
 * - 起运年龄计算（按年、按月、按日三种方法）
 * - 大运干支顺逆推算
 * - 大运力量强弱判断
 * - 大运与原局五行生克关系分析
 */

import { BirthInfo, SiZhu, GanZhi, DaYun, ShiShen, YinYang } from '../types';
import { TIAN_GAN, DI_ZHI, TIAN_GAN_ATTRIBUTES, DI_ZHI_ATTRIBUTES, CALCULATION_CONSTANTS } from '../utils/constants';
import { getJieQiByDate } from './03-solar-terms';

/**
 * 大运计算结果接口
 */
interface DaYunResult {
  startAge: number;        // 起运年龄
  startYear: number;       // 起运年份
  daYunList: DaYun[];      // 大运列表
  calculationMethod: string; // 计算方法
  isShunPai: boolean;      // 是否顺排
}

/**
 * 起运计算方法枚举
 */
enum QiYunMethod {
  BY_YEAR = 'year',      // 按年起运
  BY_MONTH = 'month',    // 按月起运
  BY_DAY = 'day'         // 按日起运
}

/**
 * 计算大运主函数
 * 根据出生信息和八字计算完整的大运序列
 *
 * 算法原理：
 * 1. 确定起运年龄（关键节点）
 * 2. 判断大运顺逆（根据性别和年干阴阳）
 * 3. 推算大运干支序列
 * 4. 计算每个大运的影响年份
 *
 * @param birthInfo 出生信息
 * @param siZhu 四柱八字
 * @param method 起运计算方法
 * @returns 大运计算结果
 */
export function calculateDaYun(
  birthInfo: BirthInfo,
  siZhu: SiZhu,
  method: QiYunMethod = QiYunMethod.BY_YEAR
): DaYunResult {
  console.log(`开始计算大运（方法：${method}）...`);

  // 第一步：计算起运年龄
  const startAge = calculateStartAge(birthInfo, siZhu, method);
  const startYear = birthInfo.year + startAge;

  console.log(`起运年龄：${startAge}岁，起运年份：${startYear}`);

  // 第二步：判断大运顺逆
  const isShunPai = determineDaYunDirection(birthInfo.isMale, siZhu.year.gan);
  console.log(`大运方向：${isShunPai ? '顺排' : '逆排'}`);

  // 第三步：推算大运序列
  const daYunList = generateDaYunSequence(siZhu.month, startAge, startYear, isShunPai);

  // 第四步：分析大运与命局关系
  analyzeDaYunInfluence(daYunList, siZhu);

  return {
    startAge,
    startYear,
    daYunList,
    calculationMethod: method,
    isShunPai
  };
}

/**
 * 计算起运年龄
 * 这是大运计算的关键步骤
 *
 * 算法说明：
 * 1. 按年起运：出生时间到下一个节气的年数
 * 2. 按月起运：出生时间到下一个节气的月数
 * 3. 按日起运：出生时间到下一个节气的日数
 *
 * 传统口诀：
 * "阳男阴女顺行，阴男阳女逆行"
 * "起运之法，以节气为界"
 *
 * @param birthInfo 出生信息
 * @param siZhu 四柱八字
 * @param method 计算方法
 * @returns 起运年龄
 */
function calculateStartAge(
  birthInfo: BirthInfo,
  siZhu: SiZhu,
  method: QiYunMethod
): number {
  const birthDate = new Date(
    birthInfo.year,
    birthInfo.month - 1,
    birthInfo.day,
    birthInfo.hour,
    birthInfo.minute
  );

  // 获取最近的节气
  const currentJieQi = getJieQiByDate(birthDate);

  if (!currentJieQi) {
    console.error('无法获取节气信息，使用默认起运年龄');
    return CALCULATION_CONSTANTS.DAYUN_CONSTANTS.MIN_AGE;
  }

  // 计算到下一个节气的时间
  const nextJieQi = getNextJieQi(currentJieQi, birthInfo.year);
  if (!nextJieQi) {
    return CALCULATION_CONSTANTS.DAYUN_CONSTANTS.MIN_AGE;
  }

  const timeDiff = nextJieQi.datetime.getTime() - birthDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  console.log(`距离下一个节气（${nextJieQi.name}）：${daysDiff}天`);

  let startAge: number;

  switch (method) {
    case QiYunMethod.BY_YEAR:
      // 按年起运：3天折合1岁
      startAge = Math.ceil(daysDiff / 3);
      break;

    case QiYunMethod.BY_MONTH:
      // 按月起运：3天折合1个月
      const monthsDiff = Math.ceil(daysDiff / 3);
      startAge = Math.ceil(monthsDiff / 12);
      break;

    case QiYunMethod.BY_DAY:
      // 按日起运：1天对应1天，然后转换为年
      startAge = Math.ceil(daysDiff / 365);
      break;

    default:
      startAge = CALCULATION_CONSTANTS.DAYUN_CONSTANTS.MIN_AGE;
  }

  // 确保起运年龄在合理范围内
  startAge = Math.max(
    CALCULATION_CONSTANTS.DAYUN_CONSTANTS.MIN_AGE,
    Math.min(CALCULATION_CONSTANTS.DAYUN_CONSTANTS.MAX_AGE, startAge)
  );

  return startAge;
}

/**
 * 判断大运顺逆方向
 *
 * 规则：
 * - 阳男阴女：顺排（干支数字递增）
 * - 阴男阳女：逆排（干支数字递减）
 *
 * @param isMale 性别
 * @param yearGan 年干
 * @returns 是否顺排
 */
function determineDaYunDirection(isMale: boolean, yearGan: string): boolean {
  const ganAttr = TIAN_GAN_ATTRIBUTES[yearGan as keyof typeof TIAN_GAN_ATTRIBUTES];
  const isYang = ganAttr.yinyang === '阳';

  // 阳男阴女顺排，阴男阳女逆排
  const shouldShunPai = isMale === isYang;

  console.log(`性别：${isMale ? '男' : '女'}，年干阴阳：${isYang}，${shouldShunPai ? '顺排' : '逆排'}`);

  return shouldShunPai;
}

/**
 * 生成大运序列
 * 从月柱开始推算，每柱10年
 *
 * @param monthGanZhi 月柱干支
 * @param startAge 起运年龄
 * @param startYear 起运年份
 * @param isShunPai 是否顺排
 * @returns 大运列表
 */
function generateDaYunSequence(
  monthGanZhi: GanZhi,
  startAge: number,
  startYear: number,
  isShunPai: boolean
): DaYun[] {
  const daYunList: DaYun[] = [];

  // 获取起始干支索引
  const currentGanIndex = TIAN_GAN.indexOf(monthGanZhi.gan);
  const currentZhiIndex = DI_ZHI.indexOf(monthGanZhi.zhi);

  console.log(`起始干支：${monthGanZhi.gan}${monthGanZhi.zhi}，索引：干${currentGanIndex}，支${currentZhiIndex}`);

  // 生成12个大运（120年）
  for (let i = 0; i < 12; i++) {
    let ganIndex: number;
    let zhiIndex: number;

    if (isShunPai) {
      // 顺排：干支索引递增
      ganIndex = (currentGanIndex + i + 1) % 10;
      zhiIndex = (currentZhiIndex + i + 1) % 12;
    } else {
      // 逆排：干支索引递减
      ganIndex = (currentGanIndex - i - 1 + 10) % 10;
      zhiIndex = (currentZhiIndex - i - 1 + 12) % 12;
    }

    const gan = TIAN_GAN[ganIndex];
    const zhi = DI_ZHI[zhiIndex];
    const ganAttr = TIAN_GAN_ATTRIBUTES[gan];
    const zhiAttr = DI_ZHI_ATTRIBUTES[zhi];

    const ganzhi: GanZhi = {
      gan,
      zhi,
      wuxing: ganAttr.wuxing,
      yinyang: ganAttr.yinyang
    };

    // 计算影响年份
    const age = startAge + i * 10;
    const years = [];
    for (let j = 0; j < 10; j++) {
      years.push(startYear + i * 10 + j);
    }

    // 计算十神关系（这里简化处理，实际需要根据日主计算）
    const shishen = calculateShiShen(monthGanZhi.gan, gan) as ShiShen;

    const daYun: DaYun = {
      age,
      ganzhi,
      years,
      shishen
    };

    daYunList.push(daYun);

    console.log(`第${i + 1}个大运：${gan}${zhi}（${age}-${age + 9}岁）`);
  }

  return daYunList;
}

/**
 * 分析大运对命局的影响
 * 判断大运的吉凶和作用
 *
 * @param daYunList 大运列表
 * @param siZhu 四柱八字
 */
function analyzeDaYunInfluence(daYunList: DaYun[], siZhu: SiZhu): void {
  console.log('分析大运对命局的影响...');

  // 获取日主五行
  const dayMasterWuxing = siZhu.day.wuxing;

  daYunList.forEach((daYun, index) => {
    const daYunWuxing = daYun.ganzhi.wuxing;

    // 分析五行关系
    const relationship = analyzeWuxingRelationship(dayMasterWuxing, daYunWuxing);

    // 判断大运吉凶
    const auspicious = judgeDaYunAuspicious(daYun, siZhu, relationship);

    console.log(`大运${index + 1}（${daYun.ganzhi.gan}${daYun.ganzhi.zhi}）：`);
    console.log(`  五行关系：${relationship.type}`);
    console.log(`  吉凶判断：${auspicious ? '吉' : '凶'}`);
    console.log(`  影响分析：${relationship.description}`);
  });
}

/**
 * 获取下一个节气
 *
 * @param currentJieQi 当前节气
 * @param year 年份
 * @returns 下一个节气
 */
function getNextJieQi(currentJieQi: any, year: number): any {
  // 这里简化处理，实际需要从节气列表中查找
  const jieQiList = [
    '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
    '立夏', '小满', '芒种', '夏至', '小暑', '大暑',
    '立秋', '处暑', '白露', '秋分', '寒露', '霜降',
    '立冬', '小雪', '大雪', '冬至', '小寒', '大寒'
  ];

  const currentIndex = jieQiList.indexOf(currentJieQi.name);
  const nextIndex = (currentIndex + 1) % 24;
  const nextJieQiName = jieQiList[nextIndex];

  // 简化的下一个节气时间（实际需要精确计算）
  const nextDate = new Date(currentJieQi.datetime);
  nextDate.setDate(nextDate.getDate() + 15);

  return {
    name: nextJieQiName,
    datetime: nextDate,
    angle: (currentJieQi.angle + 15) % 360
  };
}

/**
 * 计算十神关系
 * 简化版本，实际需要根据日主详细计算
 *
 * @param monthGan 月干
 * @param daYunGan 大运天干
 * @returns 十神名称
 */
function calculateShiShen(monthGan: string, daYunGan: string): string {
  // 这里简化处理，实际需要根据日主和月干的关系计算
  const shishenMap = {
    '甲甲': '比肩', '甲乙': '劫财', '甲丙': '食神', '甲丁': '伤官',
    '甲戊': '偏财', '甲己': '正财', '甲庚': '七杀', '甲辛': '正官',
    '甲壬': '偏印', '甲癸': '正印',
    // ... 其他组合
  };

  const key = monthGan + daYunGan;
  return (shishenMap as any)[key] || '未知';
}

/**
 * 分析五行关系
 *
 * @param dayMasterWuxing 日主五行
 * @param daYunWuxing 大运五行
 * @returns 五行关系描述
 */
function analyzeWuxingRelationship(dayMasterWuxing: string, daYunWuxing: string): {
  type: string;
  description: string;
} {
  if (dayMasterWuxing === daYunWuxing) {
    return {
      type: '比和',
      description: '五行相同，有帮扶作用，增强自身力量'
    };
  }

  // 生我者（印星）
  if (isSheng(dayMasterWuxing, daYunWuxing)) {
    return {
      type: '生助',
      description: '大运生日主，得贵人相助，利于学习发展'
    };
  }

  // 我生者（食伤）
  if (isSheng(daYunWuxing, dayMasterWuxing)) {
    return {
      type: '泄耗',
      description: '日主生大运，有所付出，需注意劳逸结合'
    };
  }

  // 克我者（官杀）
  if (isKe(daYunWuxing, dayMasterWuxing)) {
    return {
      type: '克制',
      description: '大运克日主，有一定压力，但能激发斗志'
    };
  }

  // 我克者（财星）
  if (isKe(dayMasterWuxing, daYunWuxing)) {
    return {
      type: '掌控',
      description: '日主克大运，有利于把握机遇，求财顺利'
    };
  }

  return {
    type: '未知',
    description: '关系复杂，需综合分析'
  };
}

/**
 * 判断大运吉凶
 *
 * @param daYun 大运
 * @param siZhu 四柱八字
 * @param relationship 五行关系
 * @returns 是否吉运
 */
function judgeDaYunAuspicious(daYun: DaYun, siZhu: SiZhu, relationship: any): boolean {
  // 简化的吉凶判断逻辑
  const dayMasterWuxing = siZhu.day.wuxing;
  const daYunWuxing = daYun.ganzhi.wuxing;

  // 根据五行生克关系判断
  if (relationship.type === '生助' || relationship.type === '比和') {
    return true;  // 生助和比和通常为吉
  }

  if (relationship.type === '掌控') {
    return true;  // 财星也为吉
  }

  if (relationship.type === '克制') {
    // 官杀运需要看身强身弱
    return false;  // 简化处理，实际需要复杂判断
  }

  if (relationship.type === '泄耗') {
    // 食伤运需要看具体情况
    return false;  // 简化处理
  }

  return false;
}

/**
 * 判断五行相生关系
 */
function isSheng(wuxing1: string, wuxing2: string): boolean {
  const shengMap = {
    '木': '火', '火': '土', '土': '金', '金': '水', '水': '木'
  };
  return (shengMap as any)[wuxing1] === wuxing2;
}

/**
 * 判断五行相克关系
 */
function isKe(wuxing1: string, wuxing2: string): boolean {
  const keMap = {
    '木': '土', '土': '水', '水': '火', '火': '金', '金': '木'
  };
  return (keMap as any)[wuxing1] === wuxing2;
}

/**
 * 获取当前大运
 * 根据当前年龄确定所在的大运
 *
 * @param daYunList 大运列表
 * @param currentAge 当前年龄
 * @returns 当前大运
 */
export function getCurrentDaYun(daYunList: DaYun[], currentAge: number): DaYun | null {
  for (const daYun of daYunList) {
    if (currentAge >= daYun.age && currentAge < daYun.age + 10) {
      return daYun;
    }
  }
  return null;
}

/**
 * 计算大运转换期
 * 大运交接的敏感期（前后1-2年）
 *
 * @param daYunList 大运列表
 * @param currentAge 当前年龄
 * @returns 是否在大运转换期
 */
export function isInDaYunTransition(daYunList: DaYun[], currentAge: number): boolean {
  const currentDaYun = getCurrentDaYun(daYunList, currentAge);
  if (!currentDaYun) return false;

  const transitionYears = 2;  // 转换期前后2年
  return currentAge >= currentDaYun.age - transitionYears &&
         currentAge <= currentDaYun.age + transitionYears;
}

/**
 * 批量计算大运
 * 为多个出生信息计算大运
 *
 * @param birthList 出生信息列表
 * @param siZhuList 四柱八字列表
 * @returns 大运结果列表
 */
export function batchCalculateDaYun(
  birthList: BirthInfo[],
  siZhuList: SiZhu[]
): DaYunResult[] {
  const results: DaYunResult[] = [];

  for (let i = 0; i < birthList.length; i++) {
    const result = calculateDaYun(birthList[i], siZhuList[i]);
    results.push(result);
  }

  return results;
}