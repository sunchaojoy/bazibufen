/**
 * 节气计算和应用算法
 * 实现24节气的精确计算及其在八字排盘中的应用
 *
 * 算法概述：
 * 1. 节气的天文定义：太阳到达黄经特定度数的时刻
 * 2. 节气计算方法：基于天文算法的精确计算
 * 3. 节气在八字中的作用：月份划分、季节判断、五行属性
 * 4. 朔望月计算：农历月份的基础
 *
 * 核心算法：
 * - 太阳黄经计算：使用开普勒轨道运动方程
 * - 节气时刻计算：考虑岁差、章动等天文因素
 * - 节气与干支的对应关系
 */

import { JieQi } from '../types';
import { JIE_QI_LIST, YUE_JIAN_TABLE } from '../utils/constants';

/**
 * 节气信息接口
 */
interface SolarTermInfo {
  name: string;
  angle: number;      // 黄经度数
  datetime: Date;     // 精确时间
  month: number;      // 对应农历月份
  isZhongQi: boolean; // 是否中气
}

/**
 * 计算指定年份的所有节气
 *
 * 算法原理：
 * 1. 基于太阳黄经计算节气时刻
 * 2. 使用天文算法考虑地球轨道偏心率
 * 3. 计算每个节气的精确UTC时间
 *
 * 太阳黄经计算公式：
 * λ = λ₀ + Δλ
 * 其中 λ₀ 是平黄经，Δλ 是黄经章动
 *
 * @param year 公历年份
 * @returns 该年份的所有节气
 */
export function calculateYearSolarTerms(year: number): SolarTermInfo[] {
  const solarTerms: SolarTermInfo[] = [];

  console.log(`计算${year}年节气...`);

  // 遍历24个节气
  for (let i = 0; i < JIE_QI_LIST.length; i++) {
    const jieqi = JIE_QI_LIST[i];

    // 计算节气时刻
    const datetime = calculateSolarTermTime(year, jieqi.angle);

    // 确定对应月份
    const month = Math.floor(i / 2) + 1;

    // 判断是否中气
    const isZhongQi = i % 2 === 1;

    solarTerms.push({
      name: jieqi.name,
      angle: jieqi.angle,
      datetime,
      month,
      isZhongQi
    });

    console.log(`${jieqi.name}: ${datetime.toISOString()}`);
  }

  return solarTerms;
}

/**
 * 计算特定节气的精确时间
 *
 * 算法说明：
 * 1. 使用儒略世纪数计算太阳平黄经
 * 2. 应用轨道方程修正得到真黄经
 * 3. 使用迭代法找到精确时刻
 *
 * 计算步骤：
 * 1. 计算从J2000.0开始的儒略世纪数
 * 2. 计算太阳平黄经
 * 3. 计算太阳平近点角
 * 4. 计算地球轨道偏心率
 * 5. 计算中心差
 * 6. 计算真黄经
 *
 * @param year 年份
 * @param targetAngle 目标黄经度数
 * @returns 节气精确时间
 */
function calculateSolarTermTime(year: number, targetAngle: number): Date {
  // 计算基准日期（年初）
  const baseDate = new Date(year, 0, 1, 12, 0, 0);
  const baseJulianDay = dateToJulianDay(baseDate);

  // 初始估算：一年365天，24个节气，平均15.2175天一个节气
  const approximateDays = (targetAngle < 45 ?
    (360 + targetAngle) : targetAngle) * 365.25 / 360;

  let estimatedJD = baseJulianDay + approximateDays;

  // 使用牛顿迭代法精确计算
  for (let iteration = 0; iteration < 10; iteration++) {
    const currentAngle = calculateSunLongitude(estimatedJD);
    const angleDiff = normalizeAngle(targetAngle - currentAngle);

    // 计算太阳运动速度（度/天）
    const sunSpeed = calculateSunSpeed(estimatedJD);

    // 更新估算时间
    const dayCorrection = angleDiff / sunSpeed;
    estimatedJD += dayCorrection;

    // 收敛检查
    if (Math.abs(angleDiff) < 0.0001) {
      break;
    }
  }

  return julianDayToDate(estimatedJD);
}

/**
 * 计算太阳黄经
 *
 * @param julianDay 儒略日
 * @returns 太阳黄经（度）
 */
function calculateSunLongitude(julianDay: number): number {
  // 计算儒略世纪数（从J2000.0开始）
  const T = (julianDay - 2451545.0) / 36525.0;

  // 太阳平黄经（度）
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;

  // 太阳平近点角（度）
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;

  // 地球轨道偏心率
  const e = 0.016708634 - 0.000042037 * T - 0.0000001267 * T * T;

  // 太阳中心差（度）
  const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * Math.PI / 180) +
           (0.019993 - 0.000101 * T) * Math.sin(2 * M * Math.PI / 180) +
           0.000289 * Math.sin(3 * M * Math.PI / 180);

  // 真太阳平黄经
  const theta = L0 + C;

  // 黄经章动修正（简化版）
  const omega = 125.04452 - 1934.136261 * T;
  const deltaPsi = -0.004778 * Math.sin(omega * Math.PI / 180);

  // 真太阳黄经
  const lambda = theta + deltaPsi;

  return normalizeAngle(lambda);
}

/**
 * 计算太阳运动速度
 *
 * @param julianDay 儒略日
 * @returns 太阳运动速度（度/天）
 */
function calculateSunSpeed(julianDay: number): number {
  const T = (julianDay - 2451545.0) / 36525.0;

  // 简化的太阳运动速度计算
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const e = 0.016708634 - 0.000042037 * T - 0.0000001267 * T * T;

  // 太阳角速度（度/天）
  const n = 0.9856076686;  // 平均运动速度

  // 考虑轨道偏心率的修正
  const speed = n * (1 + e * Math.cos(M * Math.PI / 180));

  return speed;
}

/**
 * 根据日期获取当前节气
 *
 * @param date 日期
 * @returns 当前节气信息
 */
export function getJieQiByDate(date: Date): JieQi | null {
  const year = date.getFullYear();
  const solarTerms = calculateYearSolarTerms(year);

  // 查找最近的节气
  let nearestJieQi: SolarTermInfo | null = null;
  let minDiff = Infinity;

  for (const jieqi of solarTerms) {
    const diff = Math.abs(date.getTime() - jieqi.datetime.getTime());

    if (diff < minDiff) {
      minDiff = diff;
      nearestJieQi = jieqi;
    }
  }

  // 检查日期是否在节气的有效范围内（前后7天内）
  if (nearestJieQi && minDiff <= 7 * 24 * 60 * 60 * 1000) {
    return {
      name: nearestJieQi.name,
      datetime: nearestJieQi.datetime,
      angle: nearestJieQi.angle
    };
  }

  return null;
}

/**
 * 获取指定日期所在月份的起始和结束节气
 *
 * @param date 日期
 * @returns 月份的起止节气
 */
export function getMonthBoundaryJieQi(date: Date): { start: JieQi | null; end: JieQi | null } {
  const year = date.getFullYear();
  const month = date.getMonth();
  const solarTerms = calculateYearSolarTerms(year);

  // 找到该月份对应的中气
  const monthIndex = month + 1;  // 1-12
  const startJieQiIndex = (monthIndex - 1) * 2 - 1;  // 上一个中气
  const endJieQiIndex = monthIndex * 2 - 1;          // 当前中气

  return {
    start: startJieQiIndex >= 0 ? {
      name: solarTerms[startJieQiIndex].name,
      datetime: solarTerms[startJieQiIndex].datetime,
      angle: solarTerms[startJieQiIndex].angle
    } : null,
    end: endJieQiIndex < solarTerms.length ? {
      name: solarTerms[endJieQiIndex].name,
      datetime: solarTerms[endJieQiIndex].datetime,
      angle: solarTerms[endJieQiIndex].angle
    } : null
  };
}

/**
 * 判断日期是否在立春之后
 * 立春是年的分界线，立春前属上一年，立春后属新一年
 *
 * @param date 日期
 * @returns 是否在立春之后
 */
export function isAfterLiChun(date: Date): boolean {
  const year = date.getFullYear();
  const solarTerms = calculateYearSolarTerms(year);

  // 找到立春
  const liChun = solarTerms.find(jieqi => jieqi.name === '立春');

  if (!liChun) {
    console.error('未找到立春节气');
    return false;
  }

  return date.getTime() >= liChun.datetime.getTime();
}

/**
 * 计算朔望月（农历月份）
 *
 * 算法原理：
 * 1. 计算新月时刻（朔）
 * 2. 计算满月时刻（望）
 * 3. 确定农历月份的起止时间
 *
 * @param year 年份
 * @param month 月份
 * @returns 朔望月信息
 */
export function calculateLunarMonth(year: number, month: number): {
  newMoon: Date;
  fullMoon: Date;
  length: number;
} {
  // 简化的朔望月计算
  const averageLunarMonth = 29.53058867;  // 平均朔望月长度（天）

  // 计算参考新月的儒略日
  const referenceNewMoonJD = 2451550.09765;  // 2000年1月6日新月

  // 计算目标月份的新月时间
  const monthsSinceReference = (year - 2000) * 12 + (month - 1);
  const targetNewMoonJD = referenceNewMoonJD + monthsSinceReference * averageLunarMonth;

  const newMoon = julianDayToDate(targetNewMoonJD);
  const fullMoon = julianDayToDate(targetNewMoonJD + averageLunarMonth / 2);

  return {
    newMoon,
    fullMoon,
    length: averageLunarMonth
  };
}

/**
 * 获取节气的五行属性
 *
 * 节气五行对应：
 * 春季（立春-谷雨）：木
 * 夏季（立夏-大暑）：火
 * 长夏（立秋-白露）：土
 * 秋季（白露-霜降）：金
 * 冬季（立冬-大寒）：水
 *
 * @param jieqiName 节气名称
 * @returns 五行属性
 */
export function getJieQiWuxing(jieqiName: string): string {
  const springJieQi = ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨'];
  const summerJieQi = ['立夏', '小满', '芒种', '夏至', '小暑', '大暑'];
  const autumnJieQi = ['立秋', '处暑', '白露', '秋分', '寒露', '霜降'];
  const winterJieQi = ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'];

  if (springJieQi.includes(jieqiName)) return '木';
  if (summerJieQi.includes(jieqiName)) return '火';
  if (autumnJieQi.includes(jieqiName)) return '金';
  if (winterJieQi.includes(jieqiName)) return '水';

  return '土';  // 长夏和其他
}

/**
 * 角度标准化（0-360度）
 *
 * @param angle 原始角度
 * @returns 标准化后的角度
 */
function normalizeAngle(angle: number): number {
  while (angle < 0) angle += 360;
  while (angle >= 360) angle -= 360;
  return angle;
}

/**
 * 日期转儒略日
 *
 * @param date 日期
 * @returns 儒略日
 */
function dateToJulianDay(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + (date.getHours() - 12) / 24 +
              date.getMinutes() / 1440 + date.getSeconds() / 86400;

  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;

  return day + Math.floor((153 * m + 2) / 5) + 365 * y +
         Math.floor(y / 4) - Math.floor(y / 100) +
         Math.floor(y / 400) - 32045;
}

/**
 * 儒略日转日期
 *
 * @param julianDay 儒略日
 * @returns 日期
 */
function julianDayToDate(julianDay: number): Date {
  const JD = julianDay + 0.5;
  const Z = Math.floor(JD);
  const F = JD - Z;

  let A: number;
  if (Z < 2299161) {
    A = Z;
  } else {
    const alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - Math.floor(alpha / 4);
  }

  const B = A + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);

  const day = B - D - Math.floor(30.6001 * E) + F;
  const month = E < 14 ? E - 1 : E - 13;
  const year = month > 2 ? C - 4716 : C - 4715;

  const dayInteger = Math.floor(day);
  const dayFraction = day - dayInteger;

  const hours = Math.floor(dayFraction * 24);
  const minutes = Math.floor((dayFraction * 24 - hours) * 60);
  const seconds = Math.floor(((dayFraction * 24 - hours) * 60 - minutes) * 60);

  return new Date(year, month - 1, dayInteger, hours, minutes, seconds);
}

/**
 * 批量计算节气
 *
 * @param startYear 开始年份
 * @param endYear 结束年份
 * @returns 多年节气数据
 */
export function batchCalculateSolarTerms(startYear: number, endYear: number): Map<number, SolarTermInfo[]> {
  const results = new Map<number, SolarTermInfo[]>();

  for (let year = startYear; year <= endYear; year++) {
    results.set(year, calculateYearSolarTerms(year));
  }

  return results;
}

/**
 * 获取下个节气
 *
 * @param date 当前日期
 * @returns 下个节气信息
 */
export function getNextJieQi(date: Date): JieQi | null {
  const year = date.getFullYear();
  const solarTerms = calculateYearSolarTerms(year);

  for (const jieqi of solarTerms) {
    if (jieqi.datetime.getTime() > date.getTime()) {
      return {
        name: jieqi.name,
        datetime: jieqi.datetime,
        angle: jieqi.angle
      };
    }
  }

  // 如果当年没有找到，查找下一年的第一个节气
  const nextYearTerms = calculateYearSolarTerms(year + 1);
  if (nextYearTerms.length > 0) {
    const firstJieQi = nextYearTerms[0];
    return {
      name: firstJieQi.name,
      datetime: firstJieQi.datetime,
      angle: firstJieQi.angle
    };
  }

  return null;
}