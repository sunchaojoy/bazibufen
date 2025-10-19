/**
 * 干支历法转换算法
 * 实现公历转干支的完整算法体系
 *
 * 算法概述：
 * 1. 干支纪年：基于60甲子循环的年份标记
 * 2. 干支纪月：基于二十四节气的月份划分
 * 3. 干支纪日：基于儒略日的精确计算
 * 4. 干支纪时：基于十二时辰的时间划分
 *
 * 核心算法：
 * - 年上起月法（五虎遁）：根据年干推算月干
 * - 日上起时法（五鼠遁）：根据日干推算时干
 * - 儒略日转换：公历日期与干支纪日的精确对应
 */

import { GanZhi, TianGan, DiZhi } from '../types';
import {
  TIAN_GAN,
  DI_ZHI,
  TIAN_GAN_ATTRIBUTES,
  DI_ZHI_ATTRIBUTES,
  NIAN_SHANG_QI_YUE,
  RI_SHANG_QI_SHI,
  CALCULATION_CONSTANTS
} from '../utils/constants';

/**
 * 计算年柱干支
 *
 * 算法原理：
 * 1. 以1984年甲子为基准年（1984年是甲子年）
 * 2. 计算目标年份与基准年的差值
 * 3. 使用60甲子循环计算干支
 *
 * 公式：年干支 = (年份 - 1984) % 60
 *
 * @param year 公历年份
 * @returns 年柱干支
 */
export function getYearGanZhi(year: number): GanZhi {
  // 基准年：1984年甲子年
  const baseYear = 1984;
  const baseGanIndex = 0;  // 甲
  const baseZhiIndex = 0;  // 子

  // 计算年差
  let yearDiff = year - baseYear;

  // 处理负年份（公元前）
  if (yearDiff < 0) {
    yearDiff = yearDiff % 60 + 60;
  }

  // 计算干支索引
  const ganIndex = (baseGanIndex + yearDiff) % 10;
  const zhiIndex = (baseZhiIndex + yearDiff) % 12;

  const gan = TIAN_GAN[ganIndex];
  const zhi = DI_ZHI[zhiIndex];

  // 获取干支属性
  const ganAttr = TIAN_GAN_ATTRIBUTES[gan];
  const zhiAttr = DI_ZHI_ATTRIBUTES[zhi];

  console.log(`年柱计算: ${year}年 -> ${gan}${zhi}`);
  console.log(`年差: ${yearDiff}, 干索引: ${ganIndex}, 支索引: ${zhiIndex}`);

  return {
    gan,
    zhi,
    wuxing: ganAttr.wuxing,
    yinyang: ganAttr.yinyang
  };
}

/**
 * 计算月柱干支
 *
 * 算法原理：
 * 1. 根据节气确定地支（月建）
 * 2. 使用年上起月法推算天干
 *
 * 五虎遁口诀：
 * 甲己之年丙作首，乙庚之岁戊为头，
 * 丙辛必定寻庚起，丁壬壬位顺行流，
 * 若问戊癸何方发，甲寅之上好追求。
 *
 * @param date 公历日期
 * @param yearGan 年干
 * @returns 月柱干支
 */
export function getMonthGanZhi(date: Date, yearGan: TianGan): GanZhi {
  // 获取月份地支（需要根据节气精确计算）
  const monthZhi = getMonthZhiByJieQi(date);

  // 使用年上起月法计算月干
  const monthGan = NIAN_SHANG_QI_YUE[yearGan][monthZhi as keyof typeof NIAN_SHANG_QI_YUE[typeof yearGan]] as TianGan;

  // 获取干支属性
  const ganAttr = TIAN_GAN_ATTRIBUTES[monthGan];
  const zhiAttr = DI_ZHI_ATTRIBUTES[monthZhi];

  console.log(`月柱计算: ${monthGan}${monthZhi} (年干${yearGan} -> 月干${monthGan})`);

  return {
    gan: monthGan,
    zhi: monthZhi,
    wuxing: ganAttr.wuxing,
    yinyang: ganAttr.yinyang
  };
}

/**
 * 计算日柱干支
 *
 * 算法原理：
 * 1. 使用儒略日计算与干支的对应关系
 * 2. 以1900年1月1日为基准日（庚戌日）
 * 3. 计算目标日期与基准日的天数差
 *
 * 儒略日公式（格里高利历）：
 * JDN = 日 + 整数部分(365.25 × 年份) + 整数部分(30.6001 × 月份) + 1720995
 *
 * @param date 公历日期
 * @returns 日柱干支
 */
export function getDayGanZhi(date: Date): GanZhi {
  // 计算儒略日
  const julianDay = calculateJulianDay(date);

  // 基准日：1900年1月1日，庚戌日，儒略日2415021
  const baseJulianDay = 2415021;
  const baseGanIndex = 6;  // 庚
  const baseZhiIndex = 10; // 戌

  // 计算天数差
  const dayDiff = Math.floor(julianDay - baseJulianDay);

  // 计算干支索引
  const ganIndex = (baseGanIndex + dayDiff) % 10;
  const zhiIndex = (baseZhiIndex + dayDiff) % 12;

  // 处理负索引
  const adjustedGanIndex = ganIndex < 0 ? ganIndex + 10 : ganIndex;
  const adjustedZhiIndex = zhiIndex < 0 ? zhiIndex + 12 : zhiIndex;

  const gan = TIAN_GAN[adjustedGanIndex];
  const zhi = DI_ZHI[adjustedZhiIndex];

  // 获取干支属性
  const ganAttr = TIAN_GAN_ATTRIBUTES[gan];
  const zhiAttr = DI_ZHI_ATTRIBUTES[zhi];

  console.log(`日柱计算: ${date.toISOString()} -> ${gan}${zhi}`);
  console.log(`儒略日: ${julianDay}, 天数差: ${dayDiff}`);

  return {
    gan,
    zhi,
    wuxing: ganAttr.wuxing,
    yinyang: ganAttr.yinyang
  };
}

/**
 * 计算时柱干支
 *
 * 算法原理：
 * 1. 根据时间确定地支（时辰）
 * 2. 使用日上起时法推算天干
 *
 * 五鼠遁口诀：
 * 甲己还加甲，乙庚丙作初，
 * 丙辛从戊起，丁壬庚子居，
 * 戊癸何方发，壬子是真途。
 *
 * @param date 公历日期时间
 * @param dayGan 日干
 * @returns 时柱干支
 */
export function getHourGanZhi(date: Date, dayGan: TianGan): GanZhi {
  // 获取时辰地支
  const hourZhi = getHourZhiByTime(date.getHours());

  // 使用日上起时法计算时干
  const hourGan = RI_SHANG_QI_SHI[dayGan][hourZhi as keyof typeof RI_SHANG_QI_SHI[typeof dayGan]] as TianGan;

  // 获取干支属性
  const ganAttr = TIAN_GAN_ATTRIBUTES[hourGan];
  const zhiAttr = DI_ZHI_ATTRIBUTES[hourZhi];

  console.log(`时柱计算: ${date.getHours()}:00 -> ${hourGan}${hourZhi} (日干${dayGan} -> 时干${hourGan})`);

  return {
    gan: hourGan,
    zhi: hourZhi,
    wuxing: ganAttr.wuxing,
    yinyang: ganAttr.yinyang
  };
}

/**
 * 计算儒略日
 * 精确的日期转换算法
 *
 * @param date 公历日期
 * @returns 儒略日数
 */
function calculateJulianDay(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;  // JavaScript月份从0开始
  const day = date.getDate();

  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;

  // 格里高利历的儒略日计算公式
  let jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
           Math.floor(y / 4) - Math.floor(y / 100) +
           Math.floor(y / 400) - 32045;

  // 调整到中午12点
  jdn -= 0.5;

  return jdn;
}

/**
 * 根据节气获取月份地支
 * 这里简化处理，实际需要精确的节气计算
 *
 * @param date 公历日期
 * @returns 月份地支
 */
function getMonthZhiByJieQi(date: Date): DiZhi {
  const month = date.getMonth() + 1;  // 1-12

  // 简化的月份地支映射（实际需要根据节气精确判断）
  const monthZhiMap: { [key: number]: DiZhi } = {
    1: '丑',  // 1月属丑月（小寒-立春）
    2: '寅',  // 2月属寅月（立春-惊蛰）
    3: '卯',  // 3月属卯月（惊蛰-清明）
    4: '辰',  // 4月属辰月（清明-立夏）
    5: '巳',  // 5月属巳月（立夏-芒种）
    6: '午',  // 6月属午月（芒种-小暑）
    7: '未',  // 7月属未月（小暑-立秋）
    8: '申',  // 8月属申月（立秋-白露）
    9: '酉',  // 9月属酉月（白露-寒露）
    10: '戌', // 10月属戌月（寒露-立冬）
    11: '亥', // 11月属亥月（立冬-大雪）
    12: '子'  // 12月属子月（大雪-小寒）
  };

  return monthZhiMap[month];
}

/**
 * 根据时间获取时辰地支
 *
 * 时辰划分：
 * 子时：23:00-01:00
 * 丑时：01:00-03:00
 * 寅时：03:00-05:00
 * 卯时：05:00-07:00
 * 辰时：07:00-09:00
 * 巳时：09:00-11:00
 * 午时：11:00-13:00
 * 未时：13:00-15:00
 * 申时：15:00-17:00
 * 酉时：17:00-19:00
 * 戌时：19:00-21:00
 * 亥时：21:00-23:00
 *
 * @param hour 小时数(0-23)
 * @returns 时辰地支
 */
function getHourZhiByTime(hour: number): DiZhi {
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

  // 默认返回子时
  return '子';
}

/**
 * 获取指定日期的干支纪年
 * @param year 年份
 * @returns 干支纪年字符串
 */
export function getGanZhiYear(year: number): string {
  const ganzhi = getYearGanZhi(year);
  return ganzhi.gan + ganzhi.zhi;
}

/**
 * 获取指定日期的干支纪日
 * @param date 日期
 * @returns 干支纪日字符串
 */
export function getGanZhiDay(date: Date): string {
  const ganzhi = getDayGanZhi(date);
  return ganzhi.gan + ganzhi.zhi;
}

/**
 * 计算两个日期之间的干支日数差
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @returns 干支日数差
 */
export function getGanZhiDayDiff(startDate: Date, endDate: Date): number {
  const startJulianDay = calculateJulianDay(startDate);
  const endJulianDay = calculateJulianDay(endDate);
  return Math.floor(endJulianDay - startJulianDay);
}

/**
 * 批量计算干支
 * @param dates 日期数组
 * @returns 干支数组
 */
export function batchCalculateGanZhi(dates: Date[]): GanZhi[] {
  return dates.map(date => getDayGanZhi(date));
}

/**
 * 验证干支组合的合法性
 * @param gan 天干
 * @param zhi 地支
 * @returns 是否合法
 */
export function validateGanZhi(gan: TianGan, zhi: DiZhi): boolean {
  const ganIndex = TIAN_GAN.indexOf(gan);
  const zhiIndex = DI_ZHI.indexOf(zhi);

  if (ganIndex === -1 || zhiIndex === -1) {
    return false;
  }

  // 检查阴阳属性一致性
  const ganYang = ganIndex % 2 === 0;  // 阳干
  const zhiYang = zhiIndex % 2 === 0;  // 阳支

  return ganYang === zhiYang;
}