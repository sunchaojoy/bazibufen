/**
 * 八字古籍增强模块
 * 将《子平真诠》《渊海子平》等古籍理论集成到现有系统中
 * 提供传统命理的深度分析功能
 */

const classicLearning = require('./stage-02-learning-content');
const baziData = require('./bazi-knowledge-database');

class BaziClassicEnhancement {
  constructor() {
    this.classicTheories = {
      ziPingZhenQuan: classicLearning.ziPingZhenQuan,
      yuanHaiZiPing: classicLearning.yuanHaiZiPing,
      ziPingJiChu: classicLearning.ziPingJiChu
    };
  }

  // ==================== 神煞系统分析 ====================

  /**
   * 分析神煞系统
   */
  analyzeShenSha(bazi) {
    const shenShaResult = {
      auspicious: [],  // 吉神
      inauspicious: [], // 凶神
      analysis: [],
      overall: ''
    };

    const dayGan = bazi.day.stem;
    const yearBranch = bazi.year.branch;
    const monthBranch = bazi.month.branch;
    const dayBranch = bazi.day.branch;
    const hourBranch = bazi.hour.branch;

    // 天乙贵人
    const tianYi = classicLearning.calculateTianYiGuiRen(dayGan);
    const tianYiInChart = [yearBranch, monthBranch, dayBranch, hourBranch]
      .filter(branch => tianYi.includes(branch));

    if (tianYiInChart.length > 0) {
      shenShaResult.auspicious.push({
        name: '天乙贵人',
        positions: tianYiInChart,
        description: '最吉之神煞，逢凶化吉，遇难成祥',
        influence: '一生有贵人相助，逢凶化吉，能得长辈或上级提拔'
      });
    }

    // 驿马星
    const yiMaBranches = ['year', 'month', 'day', 'hour'].map(pillar => ({
      pillar: pillar,
      branch: bazi[pillar].branch
    }));

    yiMaBranches.forEach(({ pillar, branch }) => {
      const yiMa = classicLearning.calculateYiMa(branch);
      if (yiMa) {
        const yiMaInChart = [yearBranch, monthBranch, dayBranch, hourBranch].includes(yiMa);
        if (yiMaInChart) {
          shenShaResult.auspicious.push({
            name: '驿马星',
            position: `${pillar}柱见${yiMa}`,
            description: '主动之星，主变动、远行、迁移',
            influence: '一生多变动，适合外出发展或从事需要经常出差的工作'
          });
        }
      }
    });

    // 桃花煞
    const taoHuaBranches = ['year', 'month', 'day', 'hour'].map(pillar => ({
      pillar: pillar,
      branch: bazi[pillar].branch
    }));

    taoHuaBranches.forEach(({ pillar, branch }) => {
      const taoHua = classicLearning.calculateTaoHua(branch);
      if (taoHua) {
        const taoHuaInChart = [yearBranch, monthBranch, dayBranch, hourBranch].includes(taoHua);
        if (taoHuaInChart) {
          const taoHuaType = this.getTaoHuaType(taoHua);
          shenShaResult.auspicious.push({
            name: '桃花煞',
            position: `${pillar}柱见${taoHua}`,
            type: taoHuaType.type,
            description: '主魅力、感情、人缘',
            influence: taoHuaType.description
          });
        }
      }
    });

    // 华盖星
    const huaGaiBranches = ['year', 'month', 'day', 'hour'].map(pillar => ({
      pillar: pillar,
      branch: bazi[pillar].branch
    }));

    huaGaiBranches.forEach(({ pillar, branch }) => {
      const huaGai = classicLearning.calculateHuaGai(branch);
      if (huaGai) {
        const huaGaiInChart = [yearBranch, monthBranch, dayBranch, hourBranch].includes(huaGai);
        if (huaGaiInChart) {
          shenShaResult.auspicious.push({
            name: '华盖星',
            position: `${pillar}柱见${huaGai}`,
            description: '主艺术、宗教、聪明',
            influence: '聪明有艺术天赋，适合从事艺术、研究、宗教等工作，喜欢独处思考'
          });
        }
      }
    });

    // 生成综合分析
    shenShaResult.overall = this.generateShenShaOverall(shenShaResult);
    shenShaResult.analysis = this.generateShenShaAdvice(shenShaResult);

    return shenShaResult;
  }

  /**
   * 获取桃花类型
   */
  getTaoHuaType(taoHua) {
    const types = {
      '子': { type: '墙内桃花', description: '主正常感情，婚姻美满' },
      '午': { type: '墙内桃花', description: '主正常感情，婚姻美满' },
      '卯': { type: '墙内桃花', description: '主正常感情，婚姻美满' },
      '酉': { type: '墙内桃花', description: '主正常感情，婚姻美满' },
      '寅': { type: '墙外桃花', description: '主外遇，需注意感情界限' },
      '申': { type: '墙外桃花', description: '主外遇，需注意感情界限' },
      '巳': { type: '墙外桃花', description: '主外遇，需注意感情界限' },
      '亥': { type: '墙外桃花', description: '主外遇，需注意感情界限' },
      '辰': { type: '墙头桃花', description: '主感情波折，需要主动争取' },
      '戌': { type: '墙头桃花', description: '主感情波折，需要主动争取' },
      '丑': { type: '墙头桃花', description: '主感情波折，需要主动争取' },
      '未': { type: '墙头桃花', description: '主感情波折，需要主动争取' }
    };
    return types[taoHua] || { type: '普通桃花', description: '有魅力，人缘好' };
  }

  /**
   * 生成神煞综合分析
   */
  generateShenShaOverall(shenShaResult) {
    const totalShenSha = shenShaResult.auspicious.length + shenShaResult.inauspicious.length;

    if (totalShenSha === 0) {
      return '命局中无明显神煞，命运相对平稳，主要靠十神和格局决定运势。';
    }

    let analysis = '命局中显现的神煞有：';
    const allShenSha = [...shenShaResult.auspicious, ...shenShaResult.inauspicious];
    analysis += allShenSha.map(sha => sha.name).join('、');
    analysis += '。';

    if (shenShaResult.auspicious.length > shenShaResult.inauspicious.length) {
      analysis += '总体以吉神为主，一生多有贵人相助，运势相对较好。';
    } else if (shenShaResult.auspicious.length < shenShaResult.inauspicious.length) {
      analysis += '凶神较多，需要注意防范，可以通过大运和流年来化解。';
    } else {
      analysis += '吉凶神煞参半，人生起伏较大，需要把握机遇，规避风险。';
    }

    return analysis;
  }

  /**
   * 生成神煞建议
   */
  generateShenShaAdvice(shenShaResult) {
    const advice = [];

    // 根据不同神煞给出建议
    shenShaResult.auspicious.forEach(sha => {
      switch (sha.name) {
        case '天乙贵人':
          advice.push('天乙贵人入命，要善于借助他人力量，特别是长辈和上级的帮助。');
          break;
        case '驿马星':
          advice.push('驿马星动，适合外出发展、迁徙或从事需要经常变动的工作。');
          break;
        case '桃花煞':
          advice.push('桃花入命，要注意感情关系的处理，发挥人缘优势。');
          break;
        case '华盖星':
          advice.push('华盖星照，适合从事学术研究、艺术创作或宗教工作。');
          break;
      }
    });

    if (advice.length === 0) {
      advice.push('神煞影响不大，主要靠个人努力和把握机遇。');
    }

    return advice;
  }

  // ==================== 古籍用神深度分析 ====================

  /**
   * 沈孝瞻用神分析
   */
  shenXiaoZhanYongShenAnalysis(bazi) {
    const dayMaster = bazi.day.stem;

    // 使用沈孝瞻的方法判断日主强弱
    const strengthAnalysis = classicLearning.shenXiaoZhanStrengthAnalysis(bazi);

    // 根据强弱选择用神
    const yongShenSelection = this.selectYongShenByStrength(bazi, strengthAnalysis);

    // 分析用神质量
    const yongShenQuality = this.analyzeYongShenQuality(bazi, yongShenSelection);

    return {
      strengthAnalysis: strengthAnalysis,
      yongShenSelection: yongShenSelection,
      yongShenQuality: yongShenQuality,
      classicAdvice: this.generateClassicYongShenAdvice(strengthAnalysis, yongShenSelection)
    };
  }

  /**
   * 根据日主强弱选择用神
   */
  selectYongShenByStrength(bazi, strengthAnalysis) {
    const dayMaster = bazi.day.stem;
    const dayElement = baziData.getFiveElement(dayMaster);
    const strength = strengthAnalysis.strength;

    let yongShenElements = [];
    let principle = '';

    if (['极强', '强'].includes(strength)) {
      principle = '日主强旺，沈孝瞻曰："强者抑之"';
      yongShenElements = this.getControlElements(dayElement);
    } else if (['极弱', '弱'].includes(strength)) {
      principle = '日主弱衰，沈孝瞻曰："弱者扶之"';
      yongShenElements = this.getSupportElements(dayElement);
    } else {
      principle = '日主中和，沈孝瞻曰："中和者，调候为先"';
      yongShenElements = this.getAdjustmentElements(bazi);
    }

    // 找出命局中实际存在的用神
    const actualYongShen = this.findActualYongShen(bazi, dayMaster, yongShenElements);

    return {
      principle: principle,
      targetElements: yongShenElements,
      actualYongShen: actualYongShen,
      description: this.generateYongShenDescription(principle, yongShenElements, actualYongShen)
    };
  }

  /**
   * 获取克制某五行的元素
   */
  getControlElements(element) {
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
  getSupportElements(element) {
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
   * 获取调候用神元素
   */
  getAdjustmentElements(bazi) {
    const monthBranch = bazi.month.branch;
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    const season = monthInfo.season;

    // 调候用神选择
    const adjustmentMap = {
      '春季': ['火', '土'], // 春寒需火暖，木旺需土培
      '夏季': ['水', '土'], // 夏热需水调，火旺需土泄
      '秋季': ['火', '水'], // 秋燥需水润，金旺需火制
      '冬季': ['火', '木']  // 冬寒需火暖，水旺需木耗
    };

    return adjustmentMap[season] || [];
  }

  /**
   * 找出命局中实际存在的用神
   */
  findActualYongShen(bazi, dayMaster, targetElements) {
    const actualYongShen = [];

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const stem = bazi[pillar].stem;
      const stemElement = baziData.getFiveElement(stem);

      if (targetElements.includes(stemElement)) {
        const tenGod = baziData.calculateTenGods(dayMaster, stem);
        actualYongShen.push({
          position: pillar,
          stem: stem,
          element: stemElement,
          tenGod: tenGod,
          description: baziData.tenGodsInfo[tenGod].description
        });
      }
    });

    return actualYongShen;
  }

  /**
   * 生成用神描述
   */
  generateYongShenDescription(principle, targetElements, actualYongShen) {
    let description = principle + '。';

    if (targetElements.length > 0) {
      description += `目标用神五行：${targetElements.join('、')}。`;
    }

    if (actualYongShen.length > 0) {
      const yongShenList = actualYongShen.map(ys => `${ys.tenGod}(${ys.position}柱)`).join('、');
      description += `命局中实际用神：${yongShenList}。`;
    } else {
      description += '命局中无用神，需靠大运流年补足。';
    }

    return description;
  }

  /**
   * 分析用神质量
   */
  analyzeYongShenQuality(bazi, yongShenSelection) {
    const actualYongShen = yongShenSelection.actualYongShen;

    if (actualYongShen.length === 0) {
      return {
        level: '无',
        score: 0,
        description: '命局中无用神，层次较低，需靠大运助益。'
      };
    }

    let score = 0;
    let analysis = [];

    // 用神数量评分
    score += actualYongShen.length * 20;
    analysis.push(`用神数量：${actualYongShen.length}个`);

    // 用神位置评分
    actualYongShen.forEach(ys => {
      if (ys.position === '月' || ys.position === '日') {
        score += 15; // 月柱日柱用神更有力
        analysis.push(`${ys.position}柱用神有力`);
      } else {
        score += 10; // 年柱时柱用神次之
        analysis.push(`${ys.position}柱用神可用`);
      }
    });

    // 用神受制情况
    const constraintAnalysis = this.analyzeYongShenConstraints(bazi, actualYongShen);
    score += constraintAnalysis.score;
    analysis.push(...constraintAnalysis.analysis);

    // 判断用神质量等级
    let level, description;
    if (score >= 80) {
      level = '上等';
      description = '用神有力且无冲克，层次较高，一生顺遂。';
    } else if (score >= 60) {
      level = '中等';
      description = '用神基本有力，中等层次，需要努力。';
    } else if (score >= 40) {
      level = '下等';
      description = '用神较弱或受制，层次较低，需要大运帮助。';
    } else {
      level = '极差';
      description = '用神严重受制或缺失，层次很低，需要格外努力。';
    }

    return {
      level: level,
      score: score,
      analysis: analysis,
      description: description
    };
  }

  /**
   * 分析用神受制情况
   */
  analyzeYongShenConstraints(bazi, actualYongShen) {
    let score = 0;
    let analysis = [];

    actualYongShen.forEach(ys => {
      // 检查冲克
      const hasClash = this.checkYongShenClash(bazi, ys);
      if (hasClash) {
        score -= 10;
        analysis.push(`${ys.ten神}受冲克，力量减弱`);
      } else {
        score += 5;
        analysis.push(`${ys.ten神}无冲克，力量稳定`);
      }

      // 检查是否有生助
      const hasSupport = this.checkYongShenSupport(bazi, ys);
      if (hasSupport) {
        score += 8;
        analysis.push(`${ys.ten神}有生助，力量增强`);
      }
    });

    return { score, analysis };
  }

  /**
   * 检查用神是否受冲克
   */
  checkYongShenClash(bazi, yongShen) {
    // 简化实现，实际应该检查地支冲克、天干合化等
    return false; // 暂时返回无冲克
  }

  /**
   * 检查用神是否有生助
   */
  checkYongShenSupport(bazi, yongShen) {
    // 简化实现，实际应该检查是否有其他干支生助用神
    return true; // 暂时返回有生助
  }

  /**
   * 生成古籍用神建议
   */
  generateClassicYongShenAdvice(strengthAnalysis, yongShenSelection) {
    const advice = [];
    const strength = strengthAnalysis.strength;
    const principle = yongShenSelection.principle;

    advice.push(`古籍《子平真诠》云：${principle}`);

    // 根据日主强弱给建议
    if (['极强', '强'].includes(strength)) {
      advice.push('日主强旺，宜从事消耗性事业，如运动、冒险、投资等。');
      advice.push('性格上要谦虚低调，避免过于强势引起冲突。');
    } else if (['极弱', '弱'].includes(strength)) {
      advice.push('日主弱衰，宜寻求帮助和支持，加强自身修养。');
      advice.push('事业上不宜过于激进，要稳扎稳打，积累实力。');
    } else {
      advice.push('日主中和，比较平衡，可以灵活应对各种情况。');
      advice.push('这是比较好的状态，要把握机遇，发挥优势。');
    }

    // 根据用神给具体建议
    if (yongShenSelection.actualYongShen.length > 0) {
      advice.push('命局中有用神，要善加利用这些有利条件。');
      yongShenSelection.actualYongShen.forEach(ys => {
        advice.push(`${ys.ten神}为用神，要发挥其${ys.description}的特质。`);
      });
    } else {
      advice.push('命局中暂时无用神，要等待大运流年的助益。');
      advice.push('在此期间要努力学习，积累实力，为将来做准备。');
    }

    return advice;
  }

  // ==================== 古籍格局深度分析 ====================

  /**
   * 古籍格局分析
   */
  classicPatternAnalysis(bazi) {
    const dayMaster = bazi.day.stem;
    const monthBranch = bazi.month.branch;

    // 检查正格格局
    const zhengGeResult = this.analyzeZhengGePatterns(bazi, dayMaster, monthBranch);

    // 检查特殊格局
    const specialGeResult = this.analyzeSpecialPatterns(bazi, dayMaster);

    // 综合分析
    const overallAnalysis = this.generatePatternOverall(zhengGeResult, specialGeResult);

    return {
      zhengGe: zhengGeResult,
      specialPatterns: specialGeResult,
      overall: overallAnalysis,
      classicAdvice: this.generateClassicPatternAdvice(zhengGeResult, specialGeResult)
    };
  }

  /**
   * 分析正格格局
   */
  analyzeZhengGePatterns(bazi, dayMaster, monthBranch) {
    const patterns = [];
    const classicPatterns = classicLearning.ziPingZhenQuan.patternTheory.zhengGe.patterns;

    classicPatterns.forEach(pattern => {
      if (this.checkPatternCondition(bazi, dayMaster, monthBranch, pattern)) {
        const quality = this.analyzePatternQuality(bazi, pattern);
        patterns.push({
          name: pattern.name,
          type: '正格',
          quality: quality,
          characteristics: pattern.characteristics,
          classicDescription: this.getClassicPatternDescription(pattern.name)
        });
      }
    });

    return {
      found: patterns.length > 0,
      patterns: patterns,
      mainPattern: patterns[0] || null
    };
  }

  /**
   * 检查格局条件
   */
  checkPatternCondition(bazi, dayMaster, monthBranch, pattern) {
    // 简化实现，实际应该根据每个格局的具体条件来判断
    // 这里以《子平真诠》的理论为基础

    switch (pattern.name) {
      case '正官格':
        return this.checkZhengGuanGe(bazi, dayMaster, monthBranch);
      case '七杀格':
        return this.checkQiShaGe(bazi, dayMaster, monthBranch);
      case '正财格':
        return this.checkZhengCaiGe(bazi, dayMaster, monthBranch);
      case '偏财格':
        return this.checkPianCaiGe(bazi, dayMaster, monthBranch);
      case '正印格':
        return this.checkZhengYinGe(bazi, dayMaster, monthBranch);
      case '偏印格':
        return this.checkPianYinGe(bazi, dayMaster, monthBranch);
      case '食神格':
        return this.checkShiShenGe(bazi, dayMaster, monthBranch);
      case '伤官格':
        return this.checkShangGuanGe(bazi, dayMaster, monthBranch);
      default:
        return false;
    }
  }

  /**
   * 检查正官格
   */
  checkZhengGuanGe(bazi, dayMaster, monthBranch) {
    // 月令藏干是否有正官
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    const hasZhengGuanInMonth = monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '正官';
    });

    if (hasZhengGuanInMonth) {
      // 检查是否有伤官见官
      const hasShangGuan = ['year', 'month', 'day', 'hour'].some(pillar => {
        const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
        return tenGod === '伤官';
      });

      return !hasShangGuan; // 无伤官见官才成格
    }

    return false;
  }

  /**
   * 检查七杀格
   */
  checkQiShaGe(bazi, dayMaster, monthBranch) {
    // 月令藏干是否有七杀
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    const hasQiShaInMonth = monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '七杀';
    });

    if (hasQiShaInMonth) {
      // 检查是否有制杀（食神制杀或印星化杀）
      const hasShiShen = ['year', 'month', 'day', 'hour'].some(pillar => {
        const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
        return tenGod === '食神';
      });

      const hasYinXing = ['year', 'month', 'day', 'hour'].some(pillar => {
        const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
        return tenGod === '正印' || tenGod === '偏印';
      });

      return hasShiShen || hasYinXing; // 有制杀才成格
    }

    return false;
  }

  // 其他格局检查方法的简化实现
  checkZhengCaiGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '正财';
    });
  }

  checkPianCaiGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '偏财';
    });
  }

  checkZhengYinGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '正印';
    });
  }

  checkPianYinGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '偏印';
    });
  }

  checkShiShenGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '食神';
    });
  }

  checkShangGuanGe(bazi, dayMaster, monthBranch) {
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    return monthInfo.hiddenStems.some(stem => {
      const tenGod = baziData.calculateTenGods(dayMaster, stem);
      return tenGod === '伤官';
    });
  }

  /**
   * 分析格局质量
   */
  analyzePatternQuality(bazi, pattern) {
    // 简化的格局质量分析
    // 实际应该根据格局的具体条件来判断

    let score = 50; // 基础分

    // 用神有力加分
    score += 20;

    // 五行流通加分
    score += 15;

    // 无冲克加分
    score += 15;

    if (score >= 80) {
      return { level: '上等', score: score, description: '格局清纯，用神有力，层次较高' };
    } else if (score >= 60) {
      return { level: '中等', score: score, description: '格局基本成格，中等层次' };
    } else {
      return { level: '下等', score: score, description: '格局有所欠缺，层次较低' };
    }
  }

  /**
   * 获取经典格局描述
   */
  getClassicPatternDescription(patternName) {
    const descriptions = {
      '正官格': '《子平真诠》云：正官者，阴阳相克之正气也。主贵气，适宜公职，以正直守法为本。',
      '七杀格': '《子平真诠》云：七杀者，阴阳相克之偏气也。主权势，适宜武职，以威严制胜为本。',
      '正财格': '《子平真诠》云：正财者，阴阳相克之正气也。主财富，适宜商业，以诚信经营为本。',
      '偏财格': '《子平真诠》云：偏财者，阴阳相克之偏气也。主意外之财，有商业天赋，以把握机遇为本。',
      '正印格': '《子平真诠》云：正印者，阴阳相生之正气也。主学识，有贵人相助，以学习修养为本。',
      '偏印格': '《子平真诠》云：偏印者，阴阳相生之偏气也。主技艺，有特殊才能，以专业钻研为本。',
      '食神格': '《子平真诠》云：食神者，阴阳相生之正气也。主享受，有艺术天分，以才艺发挥为本。',
      '伤官格': '《子平真诠》云：伤官者，阴阳相生之偏气也。主才华，有创造能力，以创新表达为本。'
    };

    return descriptions[patternName] || '传统格局，需要具体分析。';
  }

  /**
   * 分析特殊格局
   */
  analyzeSpecialPatterns(bazi, dayMaster) {
    const patterns = [];

    // 检查从格
    const congGeResult = this.checkCongGe(bazi, dayMaster);
    if (congGeResult.found) {
      patterns.push(congGeResult);
    }

    // 检查化格
    const huaGeResult = this.checkHuaGe(bazi, dayMaster);
    if (huaGeResult.found) {
      patterns.push(huaGeResult);
    }

    // 检查专旺格
    const zhuanWangResult = this.checkZhuanWangGe(bazi, dayMaster);
    if (zhuanWangResult.found) {
      patterns.push(zhuanWangResult);
    }

    return {
      found: patterns.length > 0,
      patterns: patterns
    };
  }

  /**
   * 检查从格
   */
  checkCongGe(bazi, dayMaster) {
    // 简化实现，实际应该详细判断日主是否真的无根
    return { found: false }; // 暂时返回无从格
  }

  /**
   * 检查化格
   */
  checkHuaGe(bazi, dayMaster) {
    // 简化实现，实际应该检查天干合化
    return { found: false }; // 暂时返回无化格
  }

  /**
   * 检查专旺格
   */
  checkZhuanWangGe(bazi, dayMaster) {
    // 简化实现，实际应该检查是否一气专旺
    return { found: false }; // 暂时返回无专旺格
  }

  /**
   * 生成格局综合分析
   */
  generatePatternOverall(zhengGeResult, specialGeResult) {
    let analysis = '';

    if (zhengGeResult.found) {
      analysis += `命局成${zhengGeResult.mainPattern.name}，${zhengGeResult.mainPattern.quality.description}。`;
      analysis += zhengGeResult.mainPattern.classicDescription + ' ';
    }

    if (specialGeResult.found) {
      analysis += '同时为特殊格局，命格不凡。';
    }

    if (!zhengGeResult.found && !specialGeResult.found) {
      analysis += '命局无特殊格局，为普通格局，层次一般，需要用神和大运来决定成就。';
    }

    return analysis;
  }

  /**
   * 生成古籍格局建议
   */
  generateClassicPatternAdvice(zhengGeResult, specialGeResult) {
    const advice = [];

    if (zhengGeResult.found) {
      const pattern = zhengGeResult.mainPattern;
      advice.push(`《子平真诠》云：成${pattern.name}者，${pattern.characteristics}。`);

      // 根据格局给具体建议
      switch (pattern.name) {
        case '正官格':
          advice.push('宜走仕途或管理路线，以正直守法立身。');
          advice.push('要避免伤官行为，保持良好的社会声誉。');
          break;
        case '七杀格':
          advice.push('宜从事具有挑战性的工作，发挥领导才能。');
          advice.push('要注意控制脾气，避免过于强势。');
          break;
        case '正财格':
          advice.push('宜从事稳定的商业或金融工作。');
          advice.push('要以诚信为本，稳步积累财富。');
          break;
        case '偏财格':
          advice.push('具有商业天赋，适合投资创业。');
          advice.push('要善于把握机遇，但要避免投机过度。');
          break;
        case '正印格':
          advice.push('适合从事教育、文化、研究等知识型工作。');
          advice.push('要持续学习，发挥贵人相助的优势。');
          break;
        case '偏印格':
          advice.push('适合专业技能发展，成为领域专家。');
          advice.push('要专注于自己的特长，精益求精。');
          break;
        case '食神格':
          advice.push('具有艺术天分，适合创意、艺术工作。');
          advice.push('要发挥才华，享受生活，但不可过于懒散。');
          break;
        case '伤官格':
          advice.push('聪明有才华，适合创新、技术工作。');
          advice.push('要善于表达，但要避免过于尖锐伤人。');
          break;
      }
    }

    if (specialGeResult.found) {
      advice.push('命格特殊，要顺应格局特点发展，不可逆势而为。');
    }

    if (!zhengGeResult.found && !specialGeResult.found) {
      advice.push('格局普通，要靠后天努力和良好的人际关系来提升层次。');
      advice.push('建议选择适合自己的发展方向，持之以恒。');
    }

    return advice;
  }

  // ==================== 综合古籍分析 ====================

  /**
   * 综合古籍分析
   */
  comprehensiveClassicAnalysis(bazi) {
    return {
      shenShaAnalysis: this.analyzeShenSha(bazi),
      yongShenAnalysis: this.shenXiaoZhanYongShenAnalysis(bazi),
      patternAnalysis: this.classicPatternAnalysis(bazi),
      overallEvaluation: this.generateOverallEvaluation(bazi)
    };
  }

  /**
   * 生成总体评价
   */
  generateOverallEvaluation(bazi) {
    const evaluation = {
      classicLevel: '',
      characteristics: [],
      development: [],
      warnings: []
    };

    // 根据各项分析给出总体评价
    evaluation.characteristics.push('融合《子平真诠》《渊海子平》等古籍理论分析');
    evaluation.characteristics.push('遵循传统命理正宗方法，保持理论纯粹性');
    evaluation.characteristics.push('注重用神选取和格局识别的根本原则');

    evaluation.development.push('建议深入学习经典理论，打好坚实基础');
    evaluation.development.push('在实践中验证理论，不断提升分析能力');
    evaluation.development.push('融会贯通各家之长，形成自己的分析方法');

    evaluation.warnings.push('古籍理论需要正确理解，避免断章取义');
    evaluation.warnings.push('传统命理要与现代社会相结合，灵活应用');
    evaluation.warnings.push('不可过于迷信，要理性看待分析结果');

    return evaluation;
  }
}

module.exports = BaziClassicEnhancement;

/**
 * 使用示例：
 *
 * const ClassicEnhancement = require('./bazi-classic-enhancement');
 * const enhancement = new ClassicEnhancement();
 *
 * // 综合古籍分析
 * const analysis = enhancement.comprehensiveClassicAnalysis(bazi);
 *
 * // 单项分析
 * const shenSha = enhancement.analyzeShenSha(bazi);
 * const yongShen = enhancement.shenXiaoZhanYongShenAnalysis(bazi);
 * const pattern = enhancement.classicPatternAnalysis(bazi);
 */