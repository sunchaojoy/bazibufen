/**
 * 五时辰算法和时区处理
 * 实现精确的时辰计算和时区转换算法
 *
 * 算法概述：
 * 1. 时辰划分：古代12时辰与现代24小时制的对应关系
 * 2. 子时跨日：23:00-01:00跨越两天的特殊处理
 * 3. 时区转换：全球不同时区的出生时间统一转换为东八区
 * 4. 夏令时处理：考虑夏令时对时辰计算的影响
 *
 * 核心技术要点：
 * - 精确的时间边界处理
 * - 国际时区标准转换
 * - 子时归属的判断标准
 * - 夏令时自动检测和调整
 */

import { BirthInfo, DiZhi } from '../types';
import { SHI_CHEN_TABLE, DI_ZHI_ATTRIBUTES } from '../utils/constants';

/**
 * 时辰信息接口
 */
interface ShiChenInfo {
  name: string;        // 时辰名称
  zhi: DiZhi;          // 地支
  startTime: string;   // 开始时间
  endTime: string;     // 结束时间
  startHour: number;   // 开始小时
  endHour: number;     // 结束小时
  description: string; // 描述
}

/**
 * 时区转换信息接口
 */
interface TimeZoneInfo {
  original: {
    timezone: number;      // 原始时区
    time: Date;           // 原始时间
  };
  converted: {
    timezone: number;      // 目标时区（东八区）
    time: Date;           // 转换后时间
    dateChanged: boolean;  // 日期是否发生变化
  };
}

/**
 * 获取时辰信息
 * 返回完整的12时辰信息表
 *
 * @returns 时辰信息数组
 */
export function getShiChenInfo(): ShiChenInfo[] {
  return SHI_CHEN_TABLE.map((shichen, index) => ({
    name: shichen.name,
    zhi: shichen.zhi,
    startTime: formatShiChenTime(shichen.start),
    endTime: formatShiChenTime(shichen.end),
    startHour: shichen.start,
    endHour: shichen.end,
    description: getShiChenDescription(shichen.zhi, index)
  }));
}

/**
 * 根据时间获取时辰地支
 *
 * 算法说明：
 * 1. 正常时辰：按2小时一个时辰划分
 * 2. 子时特殊：23:00-01:00跨日处理
 * 3. 边界时间：精确到分钟级别的判断
 *
 * 时辰对应表：
 * 子时：23:00-01:00（前一日23:00-24:00，当日00:00-01:00）
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
 * @param minute 分钟数(0-59)
 * @returns 时辰地支
 */
export function getHourZhiByTime(hour: number, minute: number = 0): DiZhi {
  const totalMinutes = hour * 60 + minute;

  // 子时特殊处理：23:00-24:00 属于当日子时，00:00-01:00 属于当日子时
  if (totalMinutes >= 23 * 60 || totalMinutes < 1 * 60) {
    return '子';
  }

  // 其他时辰按2小时划分
  if (totalMinutes >= 1 * 60 && totalMinutes < 3 * 60) return '丑';
  if (totalMinutes >= 3 * 60 && totalMinutes < 5 * 60) return '寅';
  if (totalMinutes >= 5 * 60 && totalMinutes < 7 * 60) return '卯';
  if (totalMinutes >= 7 * 60 && totalMinutes < 9 * 60) return '辰';
  if (totalMinutes >= 9 * 60 && totalMinutes < 11 * 60) return '巳';
  if (totalMinutes >= 11 * 60 && totalMinutes < 13 * 60) return '午';
  if (totalMinutes >= 13 * 60 && totalMinutes < 15 * 60) return '未';
  if (totalMinutes >= 15 * 60 && totalMinutes < 17 * 60) return '申';
  if (totalMinutes >= 17 * 60 && totalMinutes < 19 * 60) return '酉';
  if (totalMinutes >= 19 * 60 && totalMinutes < 21 * 60) return '戌';
  if (totalMinutes >= 21 * 60 && totalMinutes < 23 * 60) return '亥';

  // 默认返回子时
  return '子';
}

/**
 * 判断是否为早子时
 * 早子时：当日00:00-01:00
 * 晚子时：前一日23:00-24:00
 *
 * @param hour 小时数
 * @param minute 分钟数
 * @returns 是否为早子时
 */
export function isEarlyZiShi(hour: number, minute: number = 0): boolean {
  const totalMinutes = hour * 60 + minute;
  return totalMinutes >= 0 && totalMinutes < 60;  // 00:00-01:00
}

/**
 * 判断是否为晚子时
 *
 * @param hour 小时数
 * @param minute 分钟数
 * @returns 是否为晚子时
 */
export function isLateZiShi(hour: number, minute: number = 0): boolean {
  const totalMinutes = hour * 60 + minute;
  return totalMinutes >= 23 * 60 && totalMinutes < 24 * 60;  // 23:00-24:00
}

/**
 * 时区转换
 * 将任意时区的出生时间转换为东八区时间
 *
 * 算法原理：
 * 1. 计算时区差值
 * 2. 调整时间戳
 * 3. 处理日期边界变化
 * 4. 检测夏令时影响
 *
 * @param birthInfo 出生信息
 * @returns 时区转换信息
 */
export function convertTimeZone(birthInfo: BirthInfo): TimeZoneInfo {
  // 创建原始时间对象
  const originalTime = new Date(
    birthInfo.year,
    birthInfo.month - 1,  // JavaScript月份从0开始
    birthInfo.day,
    birthInfo.hour,
    birthInfo.minute,
    0
  );

  // 目标时区（东八区）
  const targetTimeZone = 8;

  // 计算时区差（小时）
  const timeZoneDiff = targetTimeZone - birthInfo.timezone;

  // 计算原始日期的UTC时间戳
  const utcTimestamp = originalTime.getTime() +
                       (originalTime.getTimezoneOffset() * 60 * 1000);

  // 转换为目标时区时间
  const targetTimestamp = utcTimestamp + (targetTimeZone * 60 * 60 * 1000);
  const convertedTime = new Date(targetTimestamp);

  // 检查日期是否发生变化
  const dateChanged = originalTime.getDate() !== convertedTime.getDate() ||
                     originalTime.getMonth() !== convertedTime.getMonth() ||
                     originalTime.getFullYear() !== convertedTime.getFullYear();

  console.log(`时区转换: UTC${birthInfo.timezone >= 0 ? '+' : ''}${birthInfo.timezone} -> UTC+8`);
  console.log(`时间调整: ${timeZoneDiff > 0 ? '+' : ''}${timeZoneDiff}小时`);
  console.log(`原始时间: ${formatDateTime(originalTime)}`);
  console.log(`转换时间: ${formatDateTime(convertedTime)}`);
  if (dateChanged) {
    console.log('⚠️  注意：日期发生了变化');
  }

  return {
    original: {
      timezone: birthInfo.timezone,
      time: originalTime
    },
    converted: {
      timezone: targetTimeZone,
      time: convertedTime,
      dateChanged
    }
  };
}

/**
 * 获取时区小时数
 * 将时区转换为小时数
 *
 * @param timezoneOffset 时区偏移量（如+8、-5等）
 * @returns 时区小时数
 */
export function getTimeZoneHour(timezoneOffset: number): number {
  return timezoneOffset;
}

/**
 * 检测夏令时
 * 判断指定日期和时间是否处于夏令时期间
 *
 * 算法说明：
 * 1. 根据不同国家/地区的夏令时规则
 * 2. 检查日期是否在夏令时期间
 * 3. 返回夏令时调整的小时数
 *
 * @param date 日期
 * @param timezone 时区
 * @returns 夏令时调整小时数
 */
export function checkDaylightSavingTime(date: Date, timezone: number): number {
  // 简化的夏令时检测（主要针对美国和欧洲）
  const year = date.getFullYear();
  const month = date.getMonth() + 1;  // 1-12

  // 美国夏令时：3月第二个周日11月第一个周日
  if (timezone >= -10 && timezone <= -4) {  // 美国时区范围
    if (month >= 4 && month <= 10) {
      return 1;  // 夏令时期间，时间需要向前调整1小时
    }
  }

  // 欧洲夏令时：3月最后一个周日10月最后一个周日
  if (timezone >= 0 && timezone <= 4) {  // 欧洲时区范围
    if (month >= 4 && month <= 9) {
      return 1;
    }
  }

  // 中国不实行夏令时
  if (timezone === 8) {
    return 0;
  }

  return 0;  // 无夏令时调整
}

/**
 * 获取时辰的五行属性
 *
 * 时辰五行对应：
 * 子时：水（北方坎水）
 * 丑时：土（中央土）
 * 寅时：木（东方震木）
 * 卯时：木（东方震木）
 * 辰时：土（中央土）
 * 巳时：火（南方离火）
 * 午时：火（南方离火）
 * 未时：土（中央土）
 * 申时：金（西方兑金）
 * 酉时：金（西方兑金）
 * 戌时：土（中央土）
 * 亥时：水（北方坎水）
 *
 * @param zhi 地支
 * @returns 五行属性
 */
export function getShiChenWuxing(zhi: DiZhi): string {
  const zhiAttr = DI_ZHI_ATTRIBUTES[zhi];
  return zhiAttr.wuxing;
}

/**
 * 获取时辰的阴阳属性
 *
 * @param zhi 地支
 * @returns 阴阳属性
 */
export function getShiChenYinYang(zhi: DiZhi): string {
  const zhiAttr = DI_ZHI_ATTRIBUTES[zhi];
  return zhiAttr.yinyang;
}

/**
 * 格式化时辰时间显示
 *
 * @param hour 小时数
 * @returns 格式化的时间字符串
 */
function formatShiChenTime(hour: number): string {
  if (hour === 0) return '00:00';
  if (hour === 24) return '24:00';
  return `${hour.toString().padStart(2, '0')}:00`;
}

/**
 * 获取时辰描述
 *
 * @param zhi 地支
 * @param index 索引
 * @returns 时辰描述
 */
function getShiChenDescription(zhi: DiZhi, index: number): string {
  const descriptions = {
    '子': '夜半时分，阴气最盛，阳气初生',
    '丑': '鸡鸣时分，阴阳交替，阳气渐长',
    '寅': '平旦时分，日出东方，阳气上升',
    '卯': '日出时分，阳光普照，阳气旺盛',
    '辰': '食时时分，阳气鼎盛，万物生长',
    '巳': '隅中时分，阳气极盛，阴气初生',
    '午': '日中时分，阳气最盛，阴气渐长',
    '未': '日昳时分，阴气上升，阳气渐衰',
    '申': '哺时时分，阴阳平衡，阳气收敛',
    '酉': '日入时分，日落西方，阴气上升',
    '戌': '黄昏时分，夜幕降临，阴气渐盛',
    '亥': '人定时分，夜深人静，阴气鼎盛'
  };

  return descriptions[zhi] || '';
}

/**
 * 格式化日期时间
 *
 * @param date 日期对象
 * @returns 格式化的日期时间字符串
 */
function formatDateTime(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ` +
         `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

/**
 * 精确计算时辰边界
 * 用于判断时间是否在时辰边界附近（±5分钟）
 *
 * @param hour 小时数
 * @param minute 分钟数
 * @returns 时辰边界信息
 */
export function getShiChenBoundary(hour: number, minute: number): {
  isBoundary: boolean;
  currentShiChen: DiZhi;
  nextShiChen?: DiZhi;
  prevShiChen?: DiZhi;
  minutesToNext?: number;
  minutesToPrev?: number;
} {
  const totalMinutes = hour * 60 + minute;
  const currentShiChen = getHourZhiByTime(hour, minute);

  // 检查是否在时辰边界附近（±5分钟）
  const boundaryThreshold = 5;

  // 获取所有时辰边界时间
  const boundaries = [
    { time: 0, zhi: '子' as DiZhi },    // 00:00 子时开始
    { time: 60, zhi: '丑' as DiZhi },   // 01:00 丑时开始
    { time: 180, zhi: '寅' as DiZhi },  // 03:00 寅时开始
    { time: 300, zhi: '卯' as DiZhi },  // 05:00 卯时开始
    { time: 420, zhi: '辰' as DiZhi },  // 07:00 辰时开始
    { time: 540, zhi: '巳' as DiZhi },  // 09:00 巳时开始
    { time: 660, zhi: '午' as DiZhi },  // 11:00 午时开始
    { time: 780, zhi: '未' as DiZhi },  // 13:00 未时开始
    { time: 900, zhi: '申' as DiZhi },  // 15:00 申时开始
    { time: 1020, zhi: '酉' as DiZhi }, // 17:00 酉时开始
    { time: 1140, zhi: '戌' as DiZhi }, // 19:00 戌时开始
    { time: 1260, zhi: '亥' as DiZhi }, // 21:00 亥时开始
    { time: 1380, zhi: '子' as DiZhi }, // 23:00 子时开始
    { time: 1440, zhi: '子' as DiZhi }  // 24:00 下日子时开始
  ];

  // 查找最近的边界
  let closestBoundary = null;
  let minDiff = Infinity;

  for (const boundary of boundaries) {
    const diff = Math.abs(totalMinutes - boundary.time);
    if (diff < minDiff) {
      minDiff = diff;
      closestBoundary = boundary;
    }
  }

  const isBoundary = minDiff <= boundaryThreshold;

  if (isBoundary && closestBoundary) {
    const boundaryIndex = boundaries.findIndex(b => b === closestBoundary);
    const prevBoundary = boundaryIndex > 0 ? boundaries[boundaryIndex - 1] : boundaries[boundaries.length - 1];
    const nextBoundary = boundaryIndex < boundaries.length - 1 ? boundaries[boundaryIndex + 1] : boundaries[0];

    return {
      isBoundary: true,
      currentShiChen,
      nextShiChen: nextBoundary.zhi,
      prevShiChen: prevBoundary.zhi,
      minutesToNext: Math.max(0, nextBoundary.time - totalMinutes),
      minutesToPrev: Math.max(0, totalMinutes - prevBoundary.time)
    };
  }

  return {
    isBoundary: false,
    currentShiChen
  };
}

/**
 * 处理子时跨日的情况
 * 确定子时应该归属哪一天
 *
 * @param hour 小时数
 * @param minute 分钟数
 * @param date 原始日期
 * @returns 调整后的日期和时辰归属
 */
export function handleZiShiCrossDay(hour: number, minute: number, date: Date): {
  adjustedDate: Date;
  ziShiType: 'early' | 'late';
  dayBelong: 'same' | 'previous' | 'next';
} {
  const adjustedDate = new Date(date);

  if (isEarlyZiShi(hour, minute)) {
    // 早子时：当日00:00-01:00，归属当日
    return {
      adjustedDate,
      ziShiType: 'early',
      dayBelong: 'same'
    };
  } else if (isLateZiShi(hour, minute)) {
    // 晚子时：前一日23:00-24:00，归属次日
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    return {
      adjustedDate,
      ziShiType: 'late',
      dayBelong: 'next'
    };
  }

  // 非子时情况
  return {
    adjustedDate,
    ziShiType: 'early',
    dayBelong: 'same'
  };
}

/**
 * 批量时辰转换
 * 将多个时间点转换为对应的时辰
 *
 * @param times 时间点数组
 * @returns 时辰信息数组
 */
export function batchConvertToShiChen(times: { hour: number; minute: number }[]): DiZhi[] {
  return times.map(time => getHourZhiByTime(time.hour, time.minute));
}