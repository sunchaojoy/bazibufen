/**
 * 八字排盘和大运流年计算引擎
 * 包含完整的四柱排盘、用神分析、格局判断、大运流年推算等核心算法
 */

const baziData = require('./bazi-knowledge-database');

// ==================== 节气时间数据库 ====================

const solarTermsData = {
  2024: {
    'lichun': '2024-02-04 16:27:00',    // 立春
    'jingzhe': '2024-03-05 10:23:00',   // 惊蛰
    'qingming': '2024-04-04 15:48:00',  // 清明
    'lixia': '2024-05-05 08:10:00',     // 立夏
    'mangzhong': '2024-06-05 20:25:00', // 芒种
    'xiaoshu': '2024-07-06 10:38:00',   // 小暑
    'liqiu': '2024-08-07 08:09:00',     // 立秋
    'bai_lu': '2024-09-07 06:16:00',    // 白露
    'han_lu': '2024-10-08 15:22:00',    // 寒露
    'lidong': '2024-11-07 12:35:00',    // 立冬
    'da_xue': '2024-12-07 11:19:00',    // 大雪
    'xiaohan': '2024-01-06 04:49:00'    // 小寒（用于跨年判断）
  },
  2025: {
    'lichun': '2025-02-03 22:10:00',
    'jingzhe': '2025-03-05 16:07:00',
    'qingming': '2025-04-04 21:34:00',
    'lixia': '2025-05-05 13:53:00',
    'mangzhong': '2025-06-06 02:19:00',
    'xiaoshu': '2025-07-07 16:26:00',
    'liqiu': '2025-08-07 13:54:00',
    'bai_lu': '2025-09-07 12:04:00',
    'han_lu': '2025-10-08 21:16:00',
    'lidong': '2025-11-07 18:26:00',
    'da_xue': '2025-12-07 17:04:00',
    'xiaohan': '2025-01-05 10:41:00'
  }
  // 可以继续添加更多年份的节气数据
};

// ==================== 天干地支索引 ====================

const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

function getStemIndex(stem) {
  return stems.indexOf(stem);
}

function getBranchIndex(branch) {
  return branches.indexOf(branch);
}

function getStemByIndex(index) {
  return stems[index % 10];
}

function getBranchByIndex(index) {
  return branches[index % 12];
}

// ==================== 四柱排盘核心算法 ====================

/**
 * 主函数：计算完整八字
 */
function calculateBazi(birthDateTime, gender = '男') {
  const birthDate = new Date(birthDateTime);

  // 1. 确定年柱
  const yearPillar = calculateYearPillar(birthDate);

  // 2. 确定月柱
  const monthPillar = calculateMonthPillar(birthDate);

  // 3. 确定日柱
  const dayPillar = calculateDayPillar(birthDate);

  // 4. 确定时柱
  const hourPillar = calculateHourPillar(birthDate, dayPillar.stem);

  // 5. 计算大运
  const dayun = calculateDayun(monthPillar, birthDate, gender);

  // 6. 分析命局
  const analysis = analyzeBazi({
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar
  });

  return {
    bazi: {
      year: yearPillar,
      month: monthPillar,
      day: dayPillar,
      hour: hourPillar
    },
    dayun: dayun,
    analysis: analysis,
    birthInfo: {
      date: birthDate.toLocaleDateString('zh-CN'),
      time: birthDate.toLocaleTimeString('zh-CN'),
      gender: gender
    }
  };
}

/**
 * 计算年柱
 */
function calculateYearPillar(birthDate) {
  const year = birthDate.getFullYear();

  // 检查是否过了立春
  const lichunTime = new Date(solarTermsData[year]['lichun']);
  if (birthDate < lichunTime) {
    // 未过立春，使用上一年
    return calculateYearGanzhi(year - 1);
  }

  return calculateYearGanzhi(year);
}

/**
 * 计算年干支
 */
function calculateYearGanzhi(year) {
  // 年干计算：年份末位数对应
  const yearStemMap = { 0: '庚', 1: '辛', 2: '壬', 3: '癸', 4: '甲', 5: '乙', 6: '丙', 7: '丁', 8: '戊', 9: '己' };
  const yearStem = yearStemMap[year % 10];

  // 年支计算：地支循环
  const yearBranches = ['申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未'];
  // 1984年为甲子年，以此为基准计算
  const baseYear = 1984;
  const yearDiff = year - baseYear;
  const yearBranch = yearBranches[yearDiff % 12];

  return {
    stem: yearStem,
    branch: yearBranch,
    naYin: baziData.naYinDatabase[yearStem + yearBranch]
  };
}

/**
 * 计算月柱
 */
function calculateMonthPillar(birthDate) {
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth();
  const day = birthDate.getDate();

  // 获取该年的节气时间
  const yearTerms = solarTermsData[year];
  if (!yearTerms) {
    throw new Error(`没有${year}年的节气数据`);
  }

  // 确定月份（以节气为界）
  const monthNames = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  const termKeys = ['lichun', 'jingzhe', 'qingming', 'lixia', 'mangzhong', 'xiaoshu',
                   'liqiu', 'bai_lu', 'han_lu', 'lidong', 'da_xue', 'xiaohan'];

  let monthBranch = '';
  for (let i = 0; i < termKeys.length; i++) {
    const currentTerm = new Date(yearTerms[termKeys[i]]);
    const nextTerm = i < termKeys.length - 1 ? new Date(yearTerms[termKeys[i + 1]]) : new Date(year + 1 + '-01-01');

    if (birthDate >= currentTerm && birthDate < nextTerm) {
      monthBranch = monthNames[i];
      break;
    }
  }

  // 如果没有匹配到，使用默认（可能需要跨年查询）
  if (!monthBranch) {
    monthBranch = monthNames[month];
  }

  // 计算月干（五虎遁月）
  const yearStem = calculateYearGanzhi(year).stem;
  const monthStem = calculateMonthStem(yearStem, monthBranch);

  return {
    stem: monthStem,
    branch: monthBranch,
    naYin: baziData.naYinDatabase[monthStem + monthBranch]
  };
}

/**
 * 五虎遁月：计算月干
 */
function calculateMonthStem(yearStem, monthBranch) {
  const monthBranches = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  const monthIndex = monthBranches.indexOf(monthBranch);

  let startStem;
  switch (yearStem) {
    case '甲':
    case '己':
      startStem = '丙'; // 甲己之年丙作首
      break;
    case '乙':
    case '庚':
      startStem = '戊'; // 乙庚之岁戊为头
      break;
    case '丙':
    case '辛':
      startStem = '庚'; // 丙辛必定寻庚起
      break;
    case '丁':
    case '壬':
      startStem = '壬'; // 丁壬壬位顺行流
      break;
    case '戊':
    case '癸':
      startStem = '甲'; // 戊癸何方觅甲求
      break;
    default:
      startStem = '甲';
  }

  const startIndex = getStemIndex(startStem);
  return getStemByIndex(startIndex + monthIndex);
}

/**
 * 计算日柱（使用查表法）
 */
function calculateDayPillar(birthDate) {
  // 这里使用简化的查表法，实际应用中可能需要更精确的算法
  const dateStr = birthDate.toISOString().split('T')[0];

  // 日干支基准：1900年1月1日为庚戌日
  const baseDate = new Date('1900-01-01');
  const baseGanzhi = { stem: '庚', branch: '戌' };

  const daysDiff = Math.floor((birthDate - baseDate) / (24 * 60 * 60 * 1000));

  const stemIndex = (getStemIndex(baseGanzhi.stem) + daysDiff) % 10;
  const branchIndex = (getBranchIndex(baseGanzhi.branch) + daysDiff) % 12;

  const dayStem = getStemByIndex(stemIndex);
  const dayBranch = getBranchByIndex(branchIndex);

  return {
    stem: dayStem,
    branch: dayBranch,
    naYin: baziData.naYinDatabase[dayStem + dayBranch]
  };
}

/**
 * 计算时柱
 */
function calculateHourPillar(birthDate, dayStem) {
  const hour = birthDate.getHours();
  const hourBranch = baziData.getTimeSlot(hour);

  // 五鼠遁时：计算时干
  const hourStem = calculateHourStem(dayStem, hourBranch);

  return {
    stem: hourStem,
    branch: hourBranch,
    naYin: baziData.naYinDatabase[hourStem + hourBranch]
  };
}

/**
 * 五鼠遁时：计算时干
 */
function calculateHourStem(dayStem, hourBranch) {
  const hourBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const hourIndex = hourBranches.indexOf(hourBranch);

  let startStem;
  switch (dayStem) {
    case '甲':
    case '己':
      startStem = '甲'; // 甲己还加甲
      break;
    case '乙':
    case '庚':
      startStem = '丙'; // 乙庚丙作初
      break;
    case '丙':
    case '辛':
      startStem = '戊'; // 丙辛从戊起
      break;
    case '丁':
    case '壬':
      startStem = '庚'; // 丁壬庚子居
      break;
    case '戊':
    case '癸':
      startStem = '壬'; // 戊癸何方发
      break;
    default:
      startStem = '甲';
  }

  const startIndex = getStemIndex(startStem);
  return getStemByIndex(startIndex + hourIndex);
}

// ==================== 大运推算算法 ====================

/**
 * 计算大运
 */
function calculateDayun(monthPillar, birthDate, gender) {
  // 1. 确定大运方向
  const yearStem = calculateYearGanzhi(birthDate.getFullYear()).stem;
  const isShun = shouldForward(yearStem, gender);

  // 2. 计算起运年龄
  const startAge = calculateStartAge(birthDate, monthPillar.branch, isShun);

  // 3. 生成大运序列
  const dayunSequence = generateDayunSequence(monthPillar, isShun, startAge);

  return {
    direction: isShun ? '顺行' : '逆行',
    startAge: startAge,
    sequence: dayunSequence
  };
}

/**
 * 判断大运方向
 */
function shouldForward(yearStem, gender) {
  const isYangYear = ['甲', '丙', '戊', '庚', '壬'].includes(yearStem);
  return (isYangYear && gender === '男') || (!isYangYear && gender === '女');
}

/**
 * 计算起运年龄
 */
function calculateStartAge(birthDate, monthBranch, isForward) {
  const year = birthDate.getFullYear();
  const terms = solarTermsData[year];

  if (!terms) {
    return 3; // 默认3岁起运
  }

  const monthBranches = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  const termKeys = ['lichun', 'jingzhe', 'qingming', 'lixia', 'mangzhong', 'xiaoshu',
                   'liqiu', 'bai_lu', 'han_lu', 'lidong', 'da_xue', 'xiaohan'];

  const monthIndex = monthBranches.indexOf(monthBranch);

  if (isForward) {
    // 顺行：从上一个节气到出生时间
    const prevTermKey = monthIndex > 0 ? termKeys[monthIndex - 1] : 'xiaohan';
    const prevTerm = new Date(terms[prevTermKey]);
    const days = Math.floor((birthDate - prevTerm) / (24 * 60 * 60 * 1000));
    return Math.floor(days / 3);
  } else {
    // 逆行：从出生时间到下一个节气
    const nextTermKey = termKeys[monthIndex];
    const nextTerm = new Date(terms[nextTermKey]);
    const days = Math.floor((nextTerm - birthDate) / (24 * 60 * 60 * 1000));
    return Math.floor(days / 3);
  }
}

/**
 * 生成大运序列
 */
function generateDayunSequence(monthPillar, isForward, startAge) {
  const sequence = [];
  const stemIndex = getStemIndex(monthPillar.stem);
  const branchIndex = getBranchIndex(monthPillar.branch);

  let currentStemIndex = stemIndex;
  let currentBranchIndex = branchIndex;
  let currentAge = Math.floor(startAge);

  // 生成8-10步大运
  for (let i = 0; i < 8; i++) {
    const dayunStem = getStemByIndex(currentStemIndex);
    const dayunBranch = getBranchByIndex(currentBranchIndex);

    sequence.push({
      step: i + 1,
      stem: dayunStem,
      branch: dayunBranch,
      naYin: baziData.naYinDatabase[dayunStem + dayunBranch],
      ageRange: `${currentAge}-${currentAge + 9}`,
      quality: analyzeDayunQuality(dayunStem, dayunBranch)
    });

    // 更新索引
    if (isForward) {
      currentStemIndex = (currentStemIndex + 1) % 10;
      currentBranchIndex = (currentBranchIndex + 1) % 12;
    } else {
      currentStemIndex = (currentStemIndex - 1 + 10) % 10;
      currentBranchIndex = (currentBranchIndex - 1 + 12) % 12;
    }

    currentAge += 10;
  }

  return sequence;
}

/**
 * 分析大运质量
 */
function analyzeDayunQuality(stem, branch) {
  // 简化的大运质量分析
  const element = baziData.getFiveElement(stem);
  const branchElement = baziData.earthlyBranches.find(b => b.name === branch).element;

  if (element === branchElement) {
    return { level: '上等', description: '干支一气，运势强劲' };
  } else if (baziData.isGeneratedBy(element, branchElement)) {
    return { level: '中上', description: '干支相生，运势顺畅' };
  } else if (baziData.isControls(element, branchElement)) {
    return { level: '中等', description: '干支相克，有挑战有机遇' };
  } else {
    return { level: '中下', description: '干支不谐，需要努力' };
  }
}

// ==================== 命局分析算法 ====================

/**
 * 分析八字命局
 */
function analyzeBazi(bazi) {
  const dayMaster = bazi.day.stem;

  // 1. 计算十神分布
  const tenGodsDistribution = calculateTenGodsDistribution(bazi, dayMaster);

  // 2. 判断日主强弱
  const dayMasterStrength = analyzeDayMasterStrength(bazi, dayMaster);

  // 3. 取用神
  const usefulGod = selectUsefulGod(bazi, dayMaster, dayMasterStrength);

  // 4. 判断格局
  const patterns = identifyPatterns(bazi, dayMaster);

  // 5. 分析五行
  const fiveElements = analyzeFiveElements(bazi);

  // 6. 分析神煞
  const shenSha = analyzeShenSha(bazi);

  return {
    dayMaster: dayMaster,
    dayMasterStrength: dayMasterStrength,
    tenGodsDistribution: tenGodsDistribution,
    usefulGod: usefulGod,
    patterns: patterns,
    fiveElements: fiveElements,
    shenSha: shenSha
  };
}

/**
 * 计算十神分布
 */
function calculateTenGodsDistribution(bazi, dayMaster) {
  const distribution = {};

  // 初始化十神计数
  Object.keys(baziData.tenGodsInfo).forEach(god => {
    distribution[god] = { count: 0, positions: [] };
  });

  // 遍历四柱
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const tenGod = baziData.calculateTenGods(dayMaster, stem);
    if (tenGod) {
      distribution[tenGod].count++;
      distribution[tenGod].positions.push(pillar);
    }
  });

  return distribution;
}

/**
 * 分析日主强弱
 */
function analyzeDayMasterStrength(bazi, dayMaster) {
  const dayElement = baziData.getFiveElement(dayMaster);

  // 得令判断
  let deLing = 0;
  const monthBranch = bazi.month.branch;
  const monthElement = baziData.earthlyBranches.find(b => b.name === monthBranch).element;
  if (monthElement === dayElement) {
    deLing = 3; // 同五行为最强
  } else if (baziData.isGeneratedBy(dayElement, monthElement)) {
    deLing = 2; // 生我五行
  } else if (baziData.isControls(monthElement, dayElement)) {
    deLing = -1; // 克我五行
  } else if (baziData.isGeneratedBy(monthElement, dayElement)) {
    deLing = -2; // 我生五行
  } else if (baziData.isControls(dayElement, monthElement)) {
    deLing = -3; // 我克五行
  }

  // 得地判断（地支藏干）
  let deDi = 0;
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const branch = bazi[pillar].branch;
    const branchInfo = baziData.earthlyBranches.find(b => b.name === branch);
    branchInfo.hiddenStems.forEach(stem => {
      const stemElement = baziData.getFiveElement(stem);
      if (stemElement === dayElement) {
        deDi += 2;
      } else if (baziData.isGeneratedBy(dayElement, stemElement)) {
        deDi += 1;
      }
    });
  });

  // 得势判断（天干同类）
  let deShi = 0;
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const stemElement = baziData.getFiveElement(stem);
    if (stemElement === dayElement) {
      deShi += 2;
    }
  });

  const totalScore = deLing + deDi + deShi;

  let strength, description;
  if (totalScore >= 6) {
    strength = '极强';
    description = '日主极强，需要克泄耗';
  } else if (totalScore >= 3) {
    strength = '强';
    description = '日主偏强，可以适当克泄耗';
  } else if (totalScore >= 0) {
    strength = '中和';
    description = '日主中和，比较平衡';
  } else if (totalScore >= -3) {
    strength = '弱';
    description = '日主偏弱，需要生扶';
  } else {
    strength = '极弱';
    description = '日主极弱，需要大力生扶或考虑从格';
  }

  return {
    strength: strength,
    score: totalScore,
    deLing: deLing,
    deDi: deDi,
    deShi: deShi,
    description: description
  };
}

/**
 * 选择用神
 */
function selectUsefulGod(bazi, dayMaster, dayMasterStrength) {
  const dayElement = baziData.getFiveElement(dayMaster);

  let usefulElements = [];
  let avoidElements = [];
  let principle = '';

  if (['强', '极强'].includes(dayMasterStrength.strength)) {
    // 身强宜克泄耗
    principle = '身强宜克泄耗';
    usefulElements = getElementsThatControl(dayElement);
    avoidElements = getElementsThatSupport(dayElement);
  } else if (['弱', '极弱'].includes(dayMasterStrength.strength)) {
    // 身弱宜生扶
    principle = '身弱宜生扶';
    usefulElements = getElementsThatSupport(dayElement);
    avoidElements = getElementsThatControl(dayElement);
  } else {
    // 中和喜平衡
    principle = '中和喜平衡，视具体情况而定';
    usefulElements = ['根据具体格局确定'];
    avoidElements = ['根据具体格局确定'];
  }

  return {
    principle: principle,
    usefulElements: usefulElements,
    avoidElements: avoidElements,
    specificGods: identifySpecificUsefulGods(bazi, dayMaster, usefulElements)
  };
}

/**
 * 获取克制某五行的元素
 */
function getElementsThatControl(element) {
  const controlMap = {
    '木': ['金', '火'],
    '火': ['水', '土'],
    '土': ['木', '金'],
    '金': ['火', '水'],
    '水': ['土', '木']
  };
  return controlMap[element] || [];
}

/**
 * 获取生扶某五行的元素
 */
function getElementsThatSupport(element) {
  const supportMap = {
    '木': ['水', '木'],
    '火': ['木', '火'],
    '土': ['火', '土'],
    '金': ['土', '金'],
    '水': ['金', '水']
  };
  return supportMap[element] || [];
}

/**
 * 识别具体的用神十神
 */
function identifySpecificUsefulGods(bazi, dayMaster, usefulElements) {
  const specificGods = [];

  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const stemElement = baziData.getFiveElement(stem);
    if (usefulElements.includes(stemElement)) {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      if (tenGod) {
        specificGods.push({
          god: tenGod,
          position: pillar,
          stem: stem,
          element: stemElement
        });
      }
    }
  });

  return specificGods;
}

/**
 * 识别格局
 */
function identifyPatterns(bazi, dayMaster) {
  const patterns = [];

  // 检查各种格局
  Object.keys(baziData.patternDatabase).forEach(patternName => {
    const pattern = baziData.patternDatabase[patternName];
    if (pattern.condition(bazi.day.stem, bazi.month.branch)) {
      const quality = analyzePatternQuality(bazi, patternName);
      patterns.push({
        name: patternName,
        category: pattern.category,
        quality: quality,
        description: pattern.description,
        careers: pattern.careers,
        characteristics: pattern.characteristics
      });
    }
  });

  // 如果没有特殊格局，判断为普通格
  if (patterns.length === 0) {
    patterns.push({
      name: '普通格',
      category: '正格',
      quality: '中等',
      description: '无特殊格局，需要用神来决定层次',
      careers: ['根据用神确定'],
      characteristics: ['根据用神确定']
    });
  }

  return patterns;
}

/**
 * 分析格局质量
 */
function analyzePatternQuality(bazi, patternName) {
  // 简化的格局质量分析
  const dayMasterStrength = analyzeDayMasterStrength(bazi, bazi.day.stem);

  if (dayMasterStrength.score >= 3) {
    return '上等格局';
  } else if (dayMasterStrength.score >= 0) {
    return '中等格局';
  } else {
    return '下等格局';
  }
}

/**
 * 分析五行分布
 */
function analyzeFiveElements(bazi) {
  const elements = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };

  // 统计天干五行
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const element = baziData.getFiveElement(stem);
    if (element) {
      elements[element]++;
    }
  });

  // 统计地支五行
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const branch = bazi[pillar].branch;
    const element = baziData.earthlyBranches.find(b => b.name === branch).element;
    elements[element]++;
  });

  const total = Object.values(elements).reduce((sum, count) => sum + count, 0);

  return {
    distribution: elements,
    balance: calculateBalance(elements),
    description: generateElementDescription(elements)
  };
}

/**
 * 计算五行平衡度
 */
function calculateBalance(elements) {
  const values = Object.values(elements);
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (max - min <= 1) {
    return '非常平衡';
  } else if (max - min <= 2) {
    return '比较平衡';
  } else if (max - min <= 3) {
    return '一般平衡';
  } else {
    return '严重失衡';
  }
}

/**
 * 生成五行描述
 */
function generateElementDescription(elements) {
  const sortedElements = Object.entries(elements)
    .sort((a, b) => b[1] - a[1])
    .filter(([element, count]) => count > 0);

  if (sortedElements.length === 0) {
    return '五行缺失';
  }

  const strongest = sortedElements[0][0];
  const weakest = sortedElements[sortedElements.length - 1][0];

  return `五行中以${strongest}最为旺盛，${weakest}相对较弱`;
}

/**
 * 分析神煞
 */
function analyzeShenSha(bazi) {
  const shenSha = [];

  // 这里可以添加神煞分析逻辑
  // 例如：桃花、驿马、华盖、天乙贵人等

  return shenSha;
}

// ==================== 流年分析算法 ====================

/**
 * 分析流年运势
 */
function analyzeLiunian(bazi, targetYear) {
  // 1. 计算流年干支
  const liunianGanzhi = calculateYearGanzhi(targetYear);

  // 2. 分析流年与命局关系
  const relationships = analyzeLiunianRelationships(bazi, liunianGanzhi);

  // 3. 分析流年与大运关系
  const dayunRelationships = analyzeLiunianDayunRelationships(bazi, liunianGanzhi, targetYear);

  // 4. 综合判断运势
  const fortune = calculateLiunianFortune(relationships, dayunRelationships);

  return {
    year: targetYear,
    ganzhi: liunianGanzhi,
    relationships: relationships,
    dayunRelationships: dayunRelationships,
    overallFortune: fortune,
    advice: generateLiunianAdvice(fortune)
  };
}

/**
 * 分析流年与命局关系
 */
function analyzeLiunianRelationships(bazi, liunianGanzhi) {
  const relationships = [];

  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const branch = bazi[pillar].branch;

    // 天干关系
    const stemRelation = getStemRelationship(stem, liunianGanzhi.stem);
    if (stemRelation) {
      relationships.push({
        type: '天干',
        position: pillar,
        relation: stemRelation,
        description: `${pillar}柱天干${stem}与流年${liunianGanzhi.stem}形成${stemRelation}`
      });
    }

    // 地支关系
    const branchRelation = getBranchRelationship(branch, liunianGanzhi.branch);
    if (branchRelation) {
      relationships.push({
        type: '地支',
        position: pillar,
        relation: branchRelation,
        description: `${pillar}柱地支${branch}与流年${liunianGanzhi.branch}形成${branchRelation}`
      });
    }
  });

  return relationships;
}

/**
 * 获取天干关系
 */
function getStemRelationship(stem1, stem2) {
  if (stem1 === stem2) return '比肩';

  const element1 = baziData.getFiveElement(stem1);
  const element2 = baziData.getFiveElement(stem2);

  if (baziData.isGeneratedBy(element1, element2)) return '相生';
  if (baziData.isControls(element1, element2)) return '相克';
  if (baziData.isGeneratedBy(element2, element1)) return '被生';
  if (baziData.isControls(element2, element1)) return '被克';

  return null;
}

/**
 * 获取地支关系
 */
function getBranchRelationship(branch1, branch2) {
  // 地支六冲
  const clashes = {
    '子': '午', '午': '子',
    '丑': '未', '未': '丑',
    '寅': '申', '申': '寅',
    '卯': '酉', '酉': '卯',
    '辰': '戌', '戌': '辰',
    '巳': '亥', '亥': '巳'
  };

  // 地支六合
  const combinations = {
    '子': '丑', '丑': '子',
    '寅': '亥', '亥': '寅',
    '卯': '戌', '戌': '卯',
    '辰': '酉', '酉': '辰',
    '巳': '申', '申': '巳',
    '午': '未', '未': '午'
  };

  // 地支三合
  const tripleCombinations = {
    '申': ['子', '辰'],
    '子': ['申', '辰'],
    '辰': ['申', '子'],
    '巳': ['酉', '丑'],
    '酉': ['巳', '丑'],
    '丑': ['巳', '酉'],
    '寅': ['午', '戌'],
    '午': ['寅', '戌'],
    '戌': ['寅', '午'],
    '亥': ['卯', '未'],
    '卯': ['亥', '未'],
    '未': ['亥', '卯']
  };

  if (clashes[branch1] === branch2) return '六冲';
  if (combinations[branch1] === branch2) return '六合';
  if (tripleCombinations[branch1] && tripleCombinations[branch1].includes(branch2)) return '三合';

  return null;
}

/**
 * 分析流年与大运关系
 */
function analyzeLiunianDayunRelationships(bazi, liunianGanzhi, targetYear) {
  // 简化实现，实际需要根据当前大运来判断
  return {
    description: '需要根据当前大运来分析',
    relationship: '待分析'
  };
}

/**
 * 计算流年运势
 */
function calculateLiunianFortune(relationships, dayunRelationships) {
  // 简化的流年运势计算
  const positiveRelations = relationships.filter(r =>
    ['相生', '六合', '三合'].includes(r.relation)
  ).length;

  const negativeRelations = relationships.filter(r =>
    ['相克', '六冲'].includes(r.relation)
  ).length;

  if (positiveRelations > negativeRelations) {
    return { level: '吉', score: positiveRelations - negativeRelations };
  } else if (negativeRelations > positiveRelations) {
    return { level: '凶', score: positiveRelations - negativeRelations };
  } else {
    return { level: '平', score: 0 };
  }
}

/**
 * 生成流年建议
 */
function generateLiunianAdvice(fortune) {
  switch (fortune.level) {
    case '吉':
      return '运势较好，可以积极进取，把握机遇';
    case '凶':
      return '运势不佳，需要低调行事，规避风险';
    case '平':
      return '运势平稳，可以稳步发展，不宜冒险';
    default:
      return '需要具体分析';
  }
}

// ==================== 导出模块 ====================

module.exports = {
  // 主要计算函数
  calculateBazi,
  calculateDayun,
  analyzeLiunian,

  // 单独的计算函数
  calculateYearPillar,
  calculateMonthPillar,
  calculateDayPillar,
  calculateHourPillar,

  // 分析函数
  analyzeBazi,
  analyzeDayMasterStrength,
  selectUsefulGod,
  identifyPatterns,
  analyzeFiveElements,

  // 辅助函数
  shouldForward,
  calculateStartAge,
  calculateMonthStem,
  calculateHourStem,

  // 工具函数
  getStemIndex,
  getBranchIndex,
  getStemByIndex,
  getBranchByIndex,

  // 数据引用
  solarTermsData,
  stems,
  branches
};

/**
 * 使用示例：
 *
 * const baziEngine = require('./bazi-calculation-engine');
 *
 * // 计算八字
 * const result = baziEngine.calculateBazi('1990-05-15 14:30', '男');
 * console.log(result.bazi);
 * console.log(result.analysis);
 * console.log(result.dayun);
 *
 * // 分析流年
 * const liunian = baziEngine.analyzeLiunian(result.bazi, 2024);
 * console.log(liunian);
 */