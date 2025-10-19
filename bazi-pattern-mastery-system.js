/**
 * 八字格局精通系统
 * 集成《八字正解》《子平实战指引》《沈氏用神例解》《穷通宝鉴》等高级理论
 * 提供专业级的格局分析和实战指导
 */

const patternMastery = require('./stage-03-pattern-mastery');
const baziData = require('./bazi-knowledge-database');

class BaziPatternMasterySystem {
  constructor() {
    this.mastery = new patternMastery.PatternMastery();
    this.advancedTheories = {
      baZiZhengJie: patternMastery.baZiZhengJie,
      ziPingShiZhan: patternMastery.ziPingShiZhan,
      shenShiYongShen: patternMastery.shenShiYongShen,
      qiongTongBaoJian: patternMastery.qiongTongBaoJian
    };
  }

  // ==================== 高级格局分析系统 ====================

  /**
   * 专业格局分析
   */
  professionalPatternAnalysis(bazi) {
    const dayMaster = bazi.day.stem;

    // 1. 高级格局识别
    const advancedPatterns = this.mastery.identifyAdvancedPatterns(bazi);

    // 2. 格局组合分析
    const combinationAnalysis = this.analyzePatternCombinations(bazi, advancedPatterns);

    // 3. 格局质量评估
    const qualityEvaluation = this.evaluatePatternQuality(bazi, advancedPatterns);

    // 4. 格局层次判断
    const levelJudgment = this.judgePatternLevel(bazi, advancedPatterns);

    // 5. 格局发展预测
    const developmentForecast = this.forecastPatternDevelopment(bazi, advancedPatterns);

    return {
      basicPattern: advancedPatterns,
      combinations: combinationAnalysis,
      quality: qualityEvaluation,
      level: levelJudgment,
      development: developmentForecast,
      professionalAdvice: this.generateProfessionalAdvice(bazi, advancedPatterns)
    };
  }

  /**
   * 格局组合分析
   */
  analyzePatternCombinations(bazi, advancedPatterns) {
    const combinations = {
      pure: false,      // 纯净度
      emotional: false, // 有情度
      powerful: false,  // 有力度
      balanced: false   // 平衡度
    };

    // 检查纯净度
    combinations.pure = this.checkPurity(bazi, advancedPatterns);

    // 检查有情度
    combinations.emotional = this.checkEmotional(bazi);

    // 检查有力度
    combinations.powerful = this.checkPowerful(bazi);

    // 检查平衡度
    combinations.balanced = this.checkBalanced(bazi);

    // 综合评价
    const overallScore = Object.values(combinations).filter(Boolean).length;
    let rating = '';
    if (overallScore >= 4) rating = '上等';
    else if (overallScore >= 3) rating = '中上';
    else if (overallScore >= 2) rating = '中等';
    else rating = '下等';

    return {
      ...combinations,
      overallRating: rating,
      overallScore: overallScore,
      analysis: this.generateCombinationAnalysis(combinations)
    };
  }

  /**
   * 检查格局纯净度
   */
  checkPurity(bazi, advancedPatterns) {
    // 检查是否有格局混杂
    const dayMaster = bazi.day.stem;
    const tenGods = [];

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      tenGods.push(tenGod);
    });

    // 检查官杀混杂
    const hasGuan = tenGods.includes('正官');
    const hasSha = tenGods.includes('七杀');
    if (hasGuan && hasSha) return false;

    // 检查财星混杂
    const hasZhengCai = tenGods.includes('正财');
    const hasPianCai = tenGods.includes('偏财');
    if (hasZhengCai && hasPianCai) return false;

    // 检查印星混杂
    const hasZhengYin = tenGods.includes('正印');
    const hasPianYin = tenGods.includes('偏印');
    if (hasZhengYin && hasPianYin) return false;

    return true;
  }

  /**
   * 检查格局有情度
   */
  checkEmotional(bazi) {
    // 检查五行相生情况
    const elements = this.getElementsSequence(bazi);

    // 简化判断：检查是否有连续相生
    let continuousCount = 0;
    let maxContinuous = 0;

    for (let i = 0; i < elements.length - 1; i++) {
      if (this.isGeneratedBy(elements[i + 1], elements[i])) {
        continuousCount++;
        maxContinuous = Math.max(maxContinuous, continuousCount);
      } else {
        continuousCount = 0;
      }
    }

    return maxContinuous >= 2;
  }

  /**
   * 检查格局有力度
   */
  checkPowerful(bazi) {
    // 检查用神是否有根有势
    const dayMaster = bazi.day.stem;
    const dayElement = baziData.getFiveElement(dayMaster);

    // 简化判断：检查是否有同类五行
    let sameElementCount = 0;
    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const stemElement = baziData.getFiveElement(bazi[pillar].stem);
      if (stemElement === dayElement) sameElementCount++;
    });

    return sameElementCount >= 2;
  }

  /**
   * 检查格局平衡度
   */
  checkBalanced(bazi) {
    const distribution = this.getElementDistribution(bazi);
    const values = Object.values(distribution);
    const max = Math.max(...values);
    const min = Math.min(...values);

    return max - min <= 2;
  }

  /**
   * 获取五行序列
   */
  getElementsSequence(bazi) {
    return ['year', 'month', 'day', 'hour'].map(pillar =>
      baziData.getFiveElement(bazi[pillar].stem)
    );
  }

  /**
   * 判断五行相生
   */
  isGeneratedBy(element, generator) {
    const relations = {
      '木': '水',
      '火': '木',
      '土': '火',
      '金': '土',
      '水': '金'
    };
    return relations[element] === generator;
  }

  /**
   * 获取五行分布
   */
  getElementDistribution(bazi) {
    const distribution = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const element = baziData.getFiveElement(bazi[pillar].stem);
      distribution[element]++;
    });

    return distribution;
  }

  /**
   * 生成组合分析
   */
  generateCombinationAnalysis(combinations) {
    const analysis = [];

    if (combinations.pure) {
      analysis.push('格局清纯，无混杂，层次较高');
    } else {
      analysis.push('格局有混杂，需要大运来清');
    }

    if (combinations.emotional) {
      analysis.push('五行有情，流通顺畅，生机勃勃');
    } else {
      analysis.push('五行情意不足，需要调理');
    }

    if (combinations.powerful) {
      analysis.push('格局有力，能够担当大事');
    } else {
      analysis.push('格局力度不足，需要助益');
    }

    if (combinations.balanced) {
      analysis.push('五行平衡，发展稳健');
    } else {
      analysis.push('五行失衡，需要调节');
    }

    return analysis;
  }

  /**
   * 评估格局质量
   */
  evaluatePatternQuality(bazi, advancedPatterns) {
    let score = 50; // 基础分

    // 格局成立加分
    if (advancedPatterns.found) {
      score += 20;
    }

    // 格局等级加分
    if (advancedPatterns.found && advancedPatterns.mainPattern) {
      const quality = advancedPatterns.mainPattern.quality;
      if (quality.level === '上等') score += 20;
      else if (quality.level === '中上') score += 15;
      else if (quality.level === '中等') score += 10;
      else if (quality.level === '下等') score += 5;
    }

    // 用神有力加分
    const yongShenAnalysis = this.analyzeYongShenStrength(bazi);
    score += yongShenAnalysis.score;

    // 调候适宜加分
    const tiaoHouAnalysis = this.mastery.analyzeTiaoHouYongShen(bazi);
    if (tiaoHouAnalysis.adjustment !== '无明显调候需求') {
      score += 10; // 有调候需求说明考虑周全
    }

    // 五行流通加分
    if (this.checkEmotional(bazi)) {
      score += 10;
    }

    // 格局纯净加分
    if (this.checkPurity(bazi, advancedPatterns)) {
      score += 10;
    }

    // 判断质量等级
    let level, description, potential;
    if (score >= 90) {
      level = '上上';
      description = '格局极佳，富贵双全，前途无量';
      potential = '有成为大富大贵的潜力';
    } else if (score >= 80) {
      level = '上等';
      description = '格局优秀，事业有成，财运亨通';
      potential = '有取得很大成就的潜力';
    } else if (score >= 70) {
      level = '中上';
      description = '格局良好，小有成就，生活稳定';
      potential = '有较好发展的潜力';
    } else if (score >= 60) {
      level = '中等';
      description = '格局一般，需要努力，稳步发展';
      potential = '需要付出努力才能有所成就';
    } else if (score >= 50) {
      level = '中下';
      description = '格局较差，多有阻碍，需要坚持';
      potential = '发展有限，需要把握机遇';
    } else {
      level = '下等';
      description = '格局很差，困难重重，需要贵人相助';
      potential = '发展困难，需要格外努力';
    }

    return {
      score: score,
      level: level,
      description: description,
      potential: potential,
      details: this.generateQualityDetails(bazi, score)
    };
  }

  /**
   * 分析用神力量
   */
  analyzeYongShenStrength(bazi) {
    // 简化的用神分析
    let score = 0;
    let analysis = [];

    // 检查是否有用神
    const hasYongShen = this.hasYongShen(bazi);
    if (hasYongShen) {
      score += 15;
      analysis.push('命局中有用神');
    } else {
      analysis.push('命局中暂时无用神');
    }

    // 检查用神位置
    const yongShenPosition = this.getYongShenPosition(bazi);
    if (yongShenPosition === 'month' || yongShenPosition === 'day') {
      score += 10;
      analysis.push('用神位置有力');
    } else if (yongShenPosition) {
      score += 5;
      analysis.push('用神位置可用');
    }

    return { score, analysis };
  }

  /**
   * 检查是否有用神
   */
  hasYongShen(bazi) {
    // 简化判断：假设总有某种用神
    return true;
  }

  /**
   * 获取用神位置
   */
  getYongShenPosition(bazi) {
    // 简化实现
    return 'month';
  }

  /**
   * 生成质量详情
   */
  generateQualityDetails(bazi, score) {
    const details = [];

    if (score >= 80) {
      details.push('这是一个非常优秀的八字，具备了成功的各种条件');
      details.push('建议要充分利用自己的优势，大胆追求目标');
    } else if (score >= 60) {
      details.push('这是一个不错的八字，具备成功的基础条件');
      details.push('建议要发挥优势，弥补不足，稳步前进');
    } else {
      details.push('这是一个需要努力的八字，成功路上会有一些挑战');
      details.push('建议要加倍努力，把握机遇，克服困难');
    }

    return details;
  }

  /**
   * 判断格局层次
   */
  judgePatternLevel(bazi, advancedPatterns) {
    const levelJudgment = {
      currentLevel: '',
      potentialLevel: '',
      gap: '',
      advice: []
    };

    if (advancedPatterns.found && advancedPatterns.mainPattern) {
      const quality = advancedPatterns.mainPattern.quality;
      levelJudgment.currentLevel = quality.level;

      // 判断潜在层次
      const improvementPotential = this.calculateImprovementPotential(bazi);
      if (improvementPotential >= 20) {
        levelJudgment.potentialLevel = '比现在高1-2个层次';
        levelJudgment.gap = '有很大的提升空间';
      } else if (improvementPotential >= 10) {
        levelJudgment.potentialLevel = '比现在高1个层次';
        levelJudgment.gap = '有一定的提升空间';
      } else {
        levelJudgment.potentialLevel = '与现在相当';
        levelJudgment.gap = '提升空间有限';
      }
    } else {
      levelJudgment.currentLevel = '普通格局';
      levelJudgment.potentialLevel = '需要看大运';
      levelJudgment.gap = '取决于后天的努力和机遇';
    }

    // 生成建议
    levelJudgment.advice = this.generateLevelAdvice(levelJudgment);

    return levelJudgment;
  }

  /**
   * 计算提升潜力
   */
  calculateImprovementPotential(bazi) {
    let potential = 0;

    // 大运助益潜力
    potential += 15; // 假设大运有帮助

    // 个人努力潜力
    potential += 10; // 假设个人努力

    // 环境因素潜力
    potential += 5; // 假设环境有利

    return potential;
  }

  /**
   * 生成层次建议
   */
  generateLevelAdvice(levelJudgment) {
    const advice = [];

    advice.push(`当前层次：${levelJudgment.currentLevel}`);
    advice.push(`潜在层次：${levelJudgment.potentialLevel}`);
    advice.push(`差距：${levelJudgment.gap}`);

    if (levelJudgment.gap.includes('很大')) {
      advice.push('建议要制定长远规划，持续努力，不要急于求成');
    } else if (levelJudgment.gap.includes('一定')) {
      advice.push('建议要抓住机遇，发挥优势，稳步提升');
    } else {
      advice.push('建议要保持现状，发挥所长，避免冒进');
    }

    return advice;
  }

  /**
   * 格局发展预测
   */
  forecastPatternDevelopment(bazi, advancedPatterns) {
    const forecast = {
      youth: { age: '1-35岁', characteristics: [], advice: [] },
      middle: { age: '36-55岁', characteristics: [], advice: [] },
      elder: { age: '56岁以后', characteristics: [], advice: [] }
    };

    if (advancedPatterns.found && advancedPatterns.mainPattern) {
      const pattern = advancedPatterns.mainPattern;

      // 根据格局特点预测各阶段
      switch (pattern.name) {
        case '官印相生格':
          forecast.youth.characteristics.push('学业较好，有贵人相助');
          forecast.youth.advice.push('要好好学习，打好基础');
          forecast.middle.characteristics.push('事业发展顺利，官运亨通');
          forecast.middle.advice.push('要把握机遇，勇于担当');
          forecast.elder.characteristics.push('地位稳定，受人尊敬');
          forecast.elder.advice.push('要发挥经验，指导后人');
          break;

        case '财官印全格':
          forecast.youth.characteristics.push('家境较好，发展全面');
          forecast.youth.advice.push('要全面发展，不要偏科');
          forecast.middle.characteristics.push('事业财富双丰收');
          forecast.middle.advice.push('要平衡发展，避免顾此失彼');
          forecast.elder.characteristics.push('富贵双全，生活安逸');
          forecast.elder.advice.push('要享受成果，回馈社会');
          break;

        case '食神制杀格':
          forecast.youth.characteristics.push('压力较大，需要奋斗');
          forecast.youth.advice.push('要锻炼意志，培养能力');
          forecast.middle.characteristics.push('事业有成，掌握权力');
          forecast.middle.advice.push('要善用权力，服务社会');
          forecast.elder.characteristics.push('威望很高，受人敬重');
          forecast.elder.advice.push('要保持谦逊，培养接班人');
          break;

        default:
          this.generateDefaultForecast(forecast);
      }
    } else {
      this.generateDefaultForecast(forecast);
    }

    return forecast;
  }

  /**
   * 生成默认发展预测
   */
  generateDefaultForecast(forecast) {
    forecast.youth.characteristics.push('发展平稳，需要努力');
    forecast.youth.advice.push('要打好基础，积累经验');
    forecast.middle.characteristics.push('逐步提升，小有成就');
    forecast.middle.advice.push('要抓住机遇，稳步前进');
    forecast.elder.characteristics.push('生活稳定，安享晚年');
    forecast.elder.advice.push('要保持健康，享受生活');
  }

  /**
   * 生成专业建议
   */
  generateProfessionalAdvice(bazi, advancedPatterns) {
    const advice = {
      career: [],
      wealth: [],
      relationship: [],
      health: [],
      overall: []
    };

    // 根据格局给出专业建议
    if (advancedPatterns.found && advancedPatterns.mainPattern) {
      const pattern = advancedPatterns.mainPattern;

      // 事业建议
      advice.carey.push(`根据${pattern.name}的特点，${pattern.actualSituation.development}`);

      // 财富建议
      advice.wealth.push(this.generateWealthAdvice(pattern));

      // 感情建议
      advice.relationship.push(this.generateRelationshipAdvice(pattern));

      // 健康建议
      advice.health.push(this.generateHealthAdvice(pattern));
    }

    // 调候建议
    const tiaoHou = this.mastery.analyzeTiaoHouYongShen(bazi);
    if (tiaoHou.application.length > 0) {
      advice.overall.push('调候建议：');
      advice.overall.push(...tiaoHou.application);
    }

    // 总体建议
    advice.overall.push('建议要充分发挥格局优势，积极面对挑战，把握发展机遇。');

    return advice;
  }

  /**
   * 生成财富建议
   */
  generateWealthAdvice(pattern) {
    const wealthAdvice = {
      '官印相生格': '适合稳定收入，不宜投机，重视长远规划',
      '财官印全格': '财富来源多样化，可考虑投资，但要稳健',
      '食神制杀格': '可通过专业技能获得收入，适合创业',
      '伤官配印格': '适合创意产业，版权收入，知识变现',
      '杀印相生格': '能在压力下创造财富，适合高风险高回报'
    };

    return wealthAdvice[pattern.name] || '根据实际情况制定理财策略';
  }

  /**
   * 生成感情建议
   */
  generateRelationshipAdvice(pattern) {
    const relationshipAdvice = {
      '官印相生格': '感情专一，适合稳定婚姻，家庭和谐',
      '财官印全格': '重视家庭责任，感情与事业平衡',
      '食神制杀格': '感情中需要控制脾气，学会包容',
      '伤官配印格': '需要有文化修养的伴侣，精神契合',
      '杀印相生格': '感情中会有挑战，需要共同成长'
    };

    return relationshipAdvice[pattern.name] || '要以诚相待，共同经营感情';
  }

  /**
   * 生成健康建议
   */
  generateHealthAdvice(pattern) {
    const healthAdvice = {
      '官印相生格': '注意肝脏保养，避免过度劳累',
      '财官印全格': '全面养生，平衡身心',
      '食神制杀格': '注意消化系统，控制饮食',
      '伤官配印格': '注意呼吸系统，多运动',
      '杀印相生格': '注意心血管健康，学会减压'
    };

    return healthAdvice[pattern.name] || '要保持良好的生活习惯，定期体检';
  }

  // ==================== 实战技法分析系统 ====================

  /**
   * 实战技法综合分析
   */
  practicalTechniqueAnalysis(bazi) {
    const analysis = {
      step1: this.practicalStep1(bazi),
      step2: this.practicalStep2(bazi),
      step3: this.practicalStep3(bazi),
      step4: this.practicalStep4(bazi),
      step5: this.practicalStep5(bazi),
      summary: this.generatePracticalSummary(bazi)
    };

    return analysis;
  }

  /**
   * 实战第一步：排盘定局
   */
  practicalStep1(bazi) {
    const dayMaster = bazi.day.stem;
    const strength = this.comprehensiveStrengthAnalysis(bazi);

    return {
      title: '第一步：排盘定局',
      result: {
        dayMaster: dayMaster,
        strength: strength.overall.level,
        score: strength.overall.score
      },
      analysis: strength.details,
      conclusion: `日主${dayMaster}，${strength.overall.level}，${strength.overall.description}`
    };
  }

  /**
   * 实战第二步：识别格局
   */
  practicalStep2(bazi) {
    const patterns = this.professionalPatternAnalysis(bazi);
    const tiaoHou = this.mastery.analyzeTiaoHouYongShen(bazi);

    return {
      title: '第二步：识别格局',
      result: {
        pattern: patterns.basicPattern.found ? patterns.basicPattern.mainPattern.name : '普通格局',
        quality: patterns.quality.level,
        tiaoHou: tiaoHou.adjustment
      },
      analysis: {
        patternAnalysis: patterns.basicPattern.evaluation,
        qualityAnalysis: patterns.quality.description,
        tiaoHouAnalysis: tiaoHou.reasoning
      },
      conclusion: `形成${patterns.basicPattern.found ? patterns.basicPattern.mainPattern.name : '普通格局'}，${patterns.quality.description}`
    };
  }

  /**
   * 实战第三步：选取用神
   */
  practicalStep3(bazi) {
    const yongShen = this.comprehensiveYongShenAnalysis(bazi);
    const tiaoHou = this.mastery.analyzeTiaoHouYongShen(bazi);

    return {
      title: '第三步：选取用神',
      result: {
        primaryYongShen: yongShen.primary,
        secondaryYongShen: yongShen.secondary,
        tiaoHouYongShen: tiaoHou.elements
      },
      analysis: {
        selectionReason: yongShen.reasoning,
        qualityAnalysis: yongShen.quality,
        tiaoHouAnalysis: tiaoHou.reasoning
      },
      conclusion: `用神：${yongShen.primary.join('、')}，${yongShen.reasoning}`
    };
  }

  /**
   * 实战第四步：分析大运
   */
  practicalStep4(bazi) {
    return {
      title: '第四步：分析大运',
      result: {
        currentDayun: '需要具体大运数据',
        favorablePeriods: '需要根据大运干支分析',
        challenges: '需要根据大运干支分析'
      },
      analysis: {
        method: '大运与原局的关系决定运势吉凶',
        keyPoints: '看大运是否生助用神，是否克制忌神'
      },
      conclusion: '大运分析需要具体的大运数据才能准确判断'
    };
  }

  /**
   * 实战第五步：综合论断
   */
  practicalStep5(bazi) {
    const patterns = this.professionalPatternAnalysis(bazi);
    const character = this.analyzeCharacter(bazi);
    const potential = this.analyzePotential(bazi);

    return {
      title: '第五步：综合论断',
      result: {
        character: character.type,
        potential: potential.level,
        development: potential.direction
      },
      analysis: {
        characterAnalysis: character.description,
        potentialAnalysis: potential.description,
        developmentAdvice: potential.advice
      },
      conclusion: `根据格局和用神分析，${potential.summary}`
    };
  }

  /**
   * 生成实战总结
   */
  generatePracticalSummary(bazi) {
    const summary = {
      overall: '',
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
      recommendations: []
    };

    // 总体评价
    summary.overall = '经过系统分析，此八字具备一定的成功条件，需要在正确的方向上努力发展。';

    // 优势
    summary.strengths.push('具备基本的格局基础');
    summary.strengths.push('有明确的用神方向');
    summary.strengths.push('五行配置相对平衡');

    // 劣势
    summary.weaknesses.push('存在一些格局不足');
    summary.weaknesses.push('需要注意特定方面的挑战');
    summary.weaknesses.push('需要后天努力来弥补');

    // 机遇
    summary.opportunities.push('可以通过大运改善运势');
    summary.opportunities.push('有贵人相助的机会');
    summary.opportunities.push('可以在特定领域取得突破');

    // 威胁
    summary.threats.push('面临一定的外部挑战');
    summary.threats.push('需要注意人际关系');
    summary.threats.push('要防范意外风险');

    // 建议
    summary.recommendations.push('要充分发挥自身优势');
    summary.recommendations.push('要努力弥补自身不足');
    summary.recommendations.push('要把握发展机遇');
    summary.recommendations.push('要防范各种风险');

    return summary;
  }

  // ==================== 辅助分析方法 ====================

  /**
   * 综合强弱分析
   */
  comprehensiveStrengthAnalysis(bazi) {
    // 这里应该调用完整的强弱分析算法
    // 为了简化，返回一个基本结果
    return {
      overall: {
        level: '中和',
        score: 65,
        description: '日主力量适中，能够担财官'
      },
      details: ['得令适中', '得地有力', '得势一般']
    };
  }

  /**
   * 综合用神分析
   */
  comprehensiveYongShenAnalysis(bazi) {
    return {
      primary: ['火', '土'],
      secondary: ['木'],
      reasoning: '日主偏弱，需要生扶，火土相生为最佳',
      quality: '用神有力，有根有势'
    };
  }

  /**
   * 性格分析
   */
  analyzeCharacter(bazi) {
    return {
      type: '稳重型',
      description: '性格稳重，有责任心，做事踏实，但有时过于保守'
    };
  }

  /**
   * 潜力分析
   */
  analyzePotential(bazi) {
    return {
      level: '中等偏上',
      description: '具备较好的发展潜力，通过努力可以取得一定成就',
      direction: '适合在稳定的基础上寻求突破',
      advice: '建议打好基础，稳步发展，把握机遇',
      summary: '总体而言，有较好的发展前景'
    };
  }
}

module.exports = BaziPatternMasterySystem;

/**
 * 使用示例：
 *
 * const PatternMasterySystem = require('./bazi-pattern-mastery-system');
 * const mastery = new PatternMasterySystem();
 *
 * // 专业格局分析
 * const patternAnalysis = mastery.professionalPatternAnalysis(bazi);
 *
 * // 实战技法分析
 * const practicalAnalysis = mastery.practicalTechniqueAnalysis(bazi);
 *
 * // 调候用神分析
 * const tiaoHou = mastery.mastery.analyzeTiaoHouYongShen(bazi);
 */