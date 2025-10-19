/**
 * 八字排盘算法演示系统
 * 展示八字排盘的完整计算过程和结果
 */

import { BirthInfo, SiZhu, BaziResult } from '../types';
import { calculateBazi, explainBaziCalculation, validateBazi } from '../core/01-bazi-overview';
import { getYearGanZhi, getMonthGanZhi, getDayGanZhi, getHourGanZhi } from '../core/02-calendar-system';
import { calculateYearSolarTerms, getJieQiByDate } from '../core/03-solar-terms';
import { convertTimeZone, getHourZhiByTime } from '../core/04-time-zones';
import { calculateDaYun } from '../core/05-dayun-calc';

/**
 * 演示案例：完整的八字排盘计算
 */
export function demonstrateBaziCalculation(): void {
  console.log('='.repeat(80));
  console.log('八字排盘算法演示系统');
  console.log('='.repeat(80));
  console.log('');

  // 案例一：标准出生时间
  console.log('【案例一】标准出生时间排盘演示');
  console.log('-'.repeat(50));

  const birthInfo1: BirthInfo = {
    year: 1995,
    month: 8,
    day: 15,
    hour: 10,
    minute: 30,
    timezone: 8,  // 东八区
    isMale: true
  };

  demonstrateSingleBazi(birthInfo1);

  console.log('\n' + '='.repeat(80) + '\n');

  // 案例二：海外出生时间（需时区转换）
  console.log('【案例二】海外出生时间排盘演示');
  console.log('-'.repeat(50));

  const birthInfo2: BirthInfo = {
    year: 1990,
    month: 3,
    day: 20,
    hour: 14,
    minute: 45,
    timezone: -5,  // 美国东部时区（UTC-5）
    isMale: false
  };

  demonstrateSingleBazi(birthInfo2);

  console.log('\n' + '='.repeat(80) + '\n');

  // 案例三：子时出生（跨日处理）
  console.log('【案例三】子时出生排盘演示');
  console.log('-'.repeat(50));

  const birthInfo3: BirthInfo = {
    year: 2000,
    month: 1,
    day: 1,
    hour: 23,
    minute: 30,
    timezone: 8,
    isMale: true
  };

  demonstrateSingleBazi(birthInfo3);
}

/**
 * 演示单个八字排盘案例
 */
function demonstrateSingleBazi(birthInfo: BirthInfo): void {
  console.log('出生信息：');
  console.log(`  公历：${birthInfo.year}年${birthInfo.month}月${birthInfo.day}日 ${birthInfo.hour}:${String(birthInfo.minute).padStart(2, '0')}`);
  console.log(`  时区：UTC${birthInfo.timezone >= 0 ? '+' : ''}${birthInfo.timezone}`);
  console.log(`  性别：${birthInfo.isMale ? '男' : '女'}`);
  console.log('');

  // 执行八字计算
  const siZhu = calculateBazi(birthInfo);

  // 验证计算结果
  const isValid = validateBazi(siZhu);
  console.log(`八字验证：${isValid ? '✅ 通过' : '❌ 失败'}`);
  console.log('');

  // 显示详细计算步骤
  const steps = explainBaziCalculation(birthInfo);
  steps.forEach(step => console.log(step));

  // 计算大运
  const daYunResult = calculateDaYun(birthInfo, siZhu);
  displayDaYunResult(daYunResult);

  // 获取当前节气
  const localTime = convertTimeZone(birthInfo).converted.time;
  const currentJieQi = getJieQiByDate(localTime);
  if (currentJieQi) {
    console.log(`当前节气：${currentJieQi.name} (${currentJieQi.datetime.toLocaleString()})`);
  }
}

/**
 * 显示大运结果
 */
function displayDaYunResult(daYunResult: any): void {
  console.log('大运信息：');
  console.log(`  起运年龄：${daYunResult.startAge}岁`);
  console.log(`  起运年份：${daYunResult.startYear}`);
  console.log(`  排运方向：${daYunResult.isShunPai ? '顺排' : '逆排'}`);
  console.log('  大运序列：');

  // 显示前6个大运
  for (let i = 0; i < Math.min(6, daYunResult.daYunList.length); i++) {
    const daYun = daYunResult.daYunList[i];
    console.log(`    第${i + 1}运：${daYun.ganzhi.gan}${daYun.ganzhi.zhi} (${daYun.age}-${daYun.age + 9}岁，${daYun.years[0]}-${daYun.years[9]}年)`);
  }
}

/**
 * 演示干支历法转换算法
 */
export function demonstrateGanZhiConversion(): void {
  console.log('='.repeat(80));
  console.log('干支历法转换算法演示');
  console.log('='.repeat(80));

  // 演示年柱计算
  console.log('\n【年柱计算演示】');
  const testYears = [1984, 1990, 1995, 2000, 2024];
  testYears.forEach(year => {
    const yearGanZhi = getYearGanZhi(year);
    console.log(`${year}年：${yearGanZhi.gan}${yearGanZhi.zhi} (${yearGanZhi.wuxing}${yearGanZhi.yinyang})`);
  });

  // 演示日柱计算
  console.log('\n【日柱计算演示】');
  const testDates = [
    new Date(2000, 0, 1),   // 2000年1月1日
    new Date(2024, 1, 10),  // 2024年2月10日
    new Date(1995, 7, 15),  // 1995年8月15日
  ];

  testDates.forEach(date => {
    const dayGanZhi = getDayGanZhi(date);
    console.log(`${date.toLocaleDateString()}：${dayGanZhi.gan}${dayGanZhi.zhi} (${dayGanZhi.wuxing}${dayGanZhi.yinyang})`);
  });
}

/**
 * 演示节气计算算法
 */
export function demonstrateSolarTerms(): void {
  console.log('='.repeat(80));
  console.log('节气计算算法演示');
  console.log('='.repeat(80));

  const year = 2024;
  const solarTerms = calculateYearSolarTerms(year);

  console.log(`\n${year}年节气：`);
  solarTerms.forEach((jieqi, index) => {
    const isZhongQi = jieqi.isZhongQi ? '中气' : '节气';
    console.log(`${(index + 1).toString().padStart(2, '0')}. ${jieqi.name.padEnd(4)} ${isZhongQi.padEnd(4)} ${jieqi.datetime.toLocaleString()}`);
  });
}

/**
 * 演示时辰算法
 */
export function demonstrateShiChen(): void {
  console.log('='.repeat(80));
  console.log('时辰算法演示');
  console.log('='.repeat(80));

  // 测试不同时间的时辰计算
  const testTimes = [
    { hour: 0, minute: 30 },   // 子时
    { hour: 6, minute: 15 },   // 卯时
    { hour: 12, minute: 0 },   // 午时
    { hour: 18, minute: 45 },  // 酉时
    { hour: 23, minute: 30 },  // 晚子时
  ];

  console.log('\n时辰计算结果：');
  testTimes.forEach(time => {
    const zhi = getHourZhiByTime(time.hour, time.minute);
    console.log(`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')} -> ${zhi}时`);
  });
}

/**
 * 运行所有演示
 */
export function runAllDemonstrations(): void {
  console.log('开始运行八字排盘算法演示...\n');

  demonstrateGanZhiConversion();
  demonstrateSolarTerms();
  demonstrateShiChen();
  demonstrateBaziCalculation();

  console.log('\n' + '='.repeat(80));
  console.log('演示完成！');
  console.log('='.repeat(80));
}

/**
 * 性能测试
 */
export function performanceTest(): void {
  console.log('='.repeat(80));
  console.log('算法性能测试');
  console.log('='.repeat(80));

  const testCount = 1000;
  console.log(`\n测试计算${testCount}个八字...`);

  const startTime = Date.now();

  for (let i = 0; i < testCount; i++) {
    const birthInfo: BirthInfo = {
      year: 1980 + (i % 40),
      month: 1 + (i % 12),
      day: 1 + (i % 28),
      hour: i % 24,
      minute: i % 60,
      timezone: 8,
      isMale: i % 2 === 0
    };

    const siZhu = calculateBazi(birthInfo);
    validateBazi(siZhu);
  }

  const endTime = Date.now();
  const duration = endTime - startTime;
  const avgTime = duration / testCount;

  console.log(`总耗时：${duration}ms`);
  console.log(`平均耗时：${avgTime.toFixed(2)}ms/个`);
  console.log(`每秒处理：${(1000 / avgTime).toFixed(0)}个`);
}