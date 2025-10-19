/**
 * 八字排盘整体流程算法
 * 实现从出生时间到四柱八字转换的完整步骤
 *
 * 算法概述：
 * 1. 输入：出生时间（年月日时、性别、时区）
 * 2. 处理：时区转换、节气判断、干支计算
 * 3. 输出：完整的四柱八字
 *
 * 技术要点：
 * - 精确的时间转换（考虑时区差异）
 * - 节气精确计算（用于月份划分）
 * - 干支循环计算（60甲子周期）
 * - 特殊情况处理（闰年、闰月等）
 */

import { BirthInfo, SiZhu, GanZhi } from '../types';
import { getYearGanZhi, getMonthGanZhi, getDayGanZhi, getHourGanZhi } from './02-calendar-system';
import { getJieQiByDate } from './03-solar-terms';
import { getTimeZoneHour } from './04-time-zones';

/**
 * 八字排盘主函数
 * @param birthInfo 出生信息
 * @returns 完整的四柱八字
 */
export function calculateBazi(birthInfo: BirthInfo): SiZhu {
  console.log('开始计算八字...');
  console.log('出生信息:', birthInfo);

  // 第一步：时区转换
  const localTime = convertTimeZone(birthInfo);
  console.log('时区转换后时间:', localTime);

  // 第二步：计算年柱
  const yearGanZhi = getYearGanZhi(localTime.getFullYear());
  console.log('年柱:', yearGanZhi.gan + yearGanZhi.zhi);

  // 第三步：获取当前节气，用于月柱计算
  const jieQi = getJieQiByDate(localTime);
  console.log('当前节气:', jieQi ? jieQi.name : '无');

  // 第四步：计算月柱
  const monthGanZhi = getMonthGanZhi(localTime, yearGanZhi.gan);
  console.log('月柱:', monthGanZhi.gan + monthGanZhi.zhi);

  // 第五步：计算日柱
  const dayGanZhi = getDayGanZhi(localTime);
  console.log('日柱:', dayGanZhi.gan + dayGanZhi.zhi);

  // 第六步：计算时柱
  const hourGanZhi = getHourGanZhi(localTime, dayGanZhi.gan);
  console.log('时柱:', hourGanZhi.gan + hourGanZhi.zhi);

  // 组装四柱八字
  const siZhu: SiZhu = {
    year: yearGanZhi,
    month: monthGanZhi,
    day: dayGanZhi,
    hour: hourGanZhi
  };

  console.log('八字计算完成:', formatSiZhu(siZhu));
  return siZhu;
}

/**
 * 时区转换函数
 * 将出生时间转换为本地时间（东八区）
 *
 * 算法说明：
 * 1. 获取UTC时间戳
 * 2. 根据时区差计算本地时间
 * 3. 处理日期边界问题
 *
 * @param birthInfo 出生信息
 * @returns 转换后的本地时间
 */
function convertTimeZone(birthInfo: BirthInfo): Date {
  // 创建原始日期对象
  const originalDate = new Date(
    birthInfo.year,
    birthInfo.month - 1,  // JavaScript月份从0开始
    birthInfo.day,
    birthInfo.hour,
    birthInfo.minute,
    0
  );

  // 计算时区差（相对于UTC+8）
  const targetTimeZone = 8;  // 目标时区（东八区）
  const timeZoneDiff = targetTimeZone - birthInfo.timezone;

  // 调整时间
  const localTime = new Date(originalDate.getTime() + timeZoneDiff * 60 * 60 * 1000);

  console.log(`时区转换: UTC${birthInfo.timezone >= 0 ? '+' : ''}${birthInfo.timezone} -> UTC+8`);
  console.log(`时间调整: ${timeZoneDiff > 0 ? '+' : ''}${timeZoneDiff}小时`);

  return localTime;
}

/**
 * 格式化四柱八字显示
 * @param siZhu 四柱八字
 * @returns 格式化字符串
 */
function formatSiZhu(siZhu: SiZhu): string {
  return `${siZhu.year.gan}${siZhu.year.zhi} ${siZhu.month.gan}${siZhu.month.zhi} ${siZhu.day.gan}${siZhu.day.zhi} ${siZhu.hour.gan}${siZhu.hour.zhi}`;
}

/**
 * 八字排盘步骤详解
 * 提供详细的计算步骤说明
 */
export function explainBaziCalculation(birthInfo: BirthInfo): string[] {
  const steps: string[] = [];

  steps.push('=== 八字排盘计算步骤详解 ===');
  steps.push('');

  // 步骤1：基本信息确认
  steps.push('【步骤1】基本信息确认');
  steps.push(`出生时间: ${birthInfo.year}年${birthInfo.month}月${birthInfo.day}日 ${birthInfo.hour}:${String(birthInfo.minute).padStart(2, '0')}`);
  steps.push(`时区: UTC${birthInfo.timezone >= 0 ? '+' : ''}${birthInfo.timezone}`);
  steps.push(`性别: ${birthInfo.isMale ? '男' : '女'}`);
  steps.push('');

  // 步骤2：时区转换
  steps.push('【步骤2】时区转换');
  const localTime = convertTimeZone(birthInfo);
  steps.push(`转换为东八区时间: ${localTime.getFullYear()}年${localTime.getMonth() + 1}月${localTime.getDate()}日 ${localTime.getHours()}:${String(localTime.getMinutes()).padStart(2, '0')}`);
  steps.push('');

  // 步骤3：年柱计算
  steps.push('【步骤3】年柱计算');
  const yearGanZhi = getYearGanZhi(localTime.getFullYear());
  steps.push(`年份: ${localTime.getFullYear()}年`);
  steps.push(`年柱干支: ${yearGanZhi.gan}${yearGanZhi.zhi}`);
  steps.push(`年柱五行: ${yearGanZhi.wuxing}`);
  steps.push(`年柱阴阳: ${yearGanZhi.yinyang}`);
  steps.push('');

  // 步骤4：月柱计算
  steps.push('【步骤4】月柱计算');
  const jieQi = getJieQiByDate(localTime);
  const monthGanZhi = getMonthGanZhi(localTime, yearGanZhi.gan);
  steps.push(`当前节气: ${jieQi ? jieQi.name : '未知'}`);
  steps.push(`月柱干支: ${monthGanZhi.gan}${monthGanZhi.zhi}`);
  steps.push(`月柱五行: ${monthGanZhi.wuxing}`);
  steps.push(`月柱阴阳: ${monthGanZhi.yinyang}`);
  steps.push('');

  // 步骤5：日柱计算
  steps.push('【步骤5】日柱计算');
  const dayGanZhi = getDayGanZhi(localTime);
  steps.push(`日柱干支: ${dayGanZhi.gan}${dayGanZhi.zhi}`);
  steps.push(`日柱五行: ${dayGanZhi.wuxing}`);
  steps.push(`日柱阴阳: ${dayGanZhi.yinyang}`);
  steps.push('说明：日柱的天干被称为"日主"或"日元"，代表命主本人');
  steps.push('');

  // 步骤6：时柱计算
  steps.push('【步骤6】时柱计算');
  const hourGanZhi = getHourGanZhi(localTime, dayGanZhi.gan);
  steps.push(`出生时辰: ${localTime.getHours()}:${String(localTime.getMinutes()).padStart(2, '0')}`);
  steps.push(`时柱干支: ${hourGanZhi.gan}${hourGanZhi.zhi}`);
  steps.push(`时柱五行: ${hourGanZhi.wuxing}`);
  steps.push(`时柱阴阳: ${hourGanZhi.yinyang}`);
  steps.push('');

  // 最终结果
  steps.push('【最终结果】');
  const siZhu: SiZhu = {
    year: yearGanZhi,
    month: monthGanZhi,
    day: dayGanZhi,
    hour: hourGanZhi
  };
  steps.push(`完整八字: ${formatSiZhu(siZhu)}`);
  steps.push(`日主: ${dayGanZhi.gan}${dayGanZhi.wuxing}`);
  steps.push('');

  // 四柱含义说明
  steps.push('【四柱含义】');
  steps.push(`年柱(${yearGanZhi.gan}${yearGanZhi.zhi}): 祖上、早年运势(1-16岁)`);
  steps.push(`月柱(${monthGanZhi.gan}${monthGanZhi.zhi}): 父母、青年运势(17-32岁)`);
  steps.push(`日柱(${dayGanZhi.gan}${dayGanZhi.zhi}): 自己、中年运势(33-48岁)`);
  steps.push(`时柱(${hourGanZhi.gan}${hourGanZhi.zhi}): 子女、晚年运势(49岁以后)`);

  return steps;
}

/**
 * 八字排盘验证函数
 * 检查计算结果的正确性
 */
export function validateBazi(siZhu: SiZhu): boolean {
  try {
    // 检查四柱是否完整
    if (!siZhu.year || !siZhu.month || !siZhu.day || !siZhu.hour) {
      console.error('四柱不完整');
      return false;
    }

    // 检查干支组合是否合法
    const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const pillars = [siZhu.year, siZhu.month, siZhu.day, siZhu.hour];

    for (let i = 0; i < pillars.length; i++) {
      const pillar = pillars[i];
      if (!tianGan.includes(pillar.gan) || !diZhi.includes(pillar.zhi)) {
        console.error(`第${i + 1}柱干支组合不合法: ${pillar.gan}${pillar.zhi}`);
        return false;
      }

      // 检查天干地支阴阳属性一致性
      const ganIndex = tianGan.indexOf(pillar.gan);
      const zhiIndex = diZhi.indexOf(pillar.zhi);
      const ganYang = ganIndex % 2 === 0;
      const zhiYang = zhiIndex % 2 === 0;

      if (ganYang !== zhiYang) {
        console.error(`第${i + 1}柱阴阳属性不一致: ${pillar.gan}${pillar.zhi}`);
        return false;
      }
    }

    console.log('八字验证通过');
    return true;
  } catch (error) {
    console.error('八字验证出错:', error);
    return false;
  }
}

/**
 * 获取八字的简要信息
 * @param siZhu 四柱八字
 * @returns 八字简要信息
 */
export function getBaziSummary(siZhu: SiZhu): {
  fullBazi: string;
  riZhu: string;
  wuxing: string[];
  shiShen: string[];
} {
  return {
    fullBazi: `${siZhu.year.gan}${siZhu.year.zhi} ${siZhu.month.gan}${siZhu.month.zhi} ${siZhu.day.gan}${siZhu.day.zhi} ${siZhu.hour.gan}${siZhu.hour.zhi}`,
    riZhu: `${siZhu.day.gan}${siZhu.day.wuxing}`,
    wuxing: [siZhu.year.wuxing, siZhu.month.wuxing, siZhu.day.wuxing, siZhu.hour.wuxing],
    shiShen: ['比肩', '劫财', '食神', '伤官'] // 这里需要根据日主计算十神
  };
}