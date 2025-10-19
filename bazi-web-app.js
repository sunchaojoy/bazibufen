/**
 * 八字网页应用核心文件
 * 完整的八字排盘、分析、预测网页应用逻辑
 */

const baziEngine = require('./bazi-calculation-engine');
const baziData = require('./bazi-knowledge-database');

class BaziWebApp {
  constructor() {
    this.currentBazi = null;
    this.currentDayun = null;
    this.analysisResults = null;
  }

  // ==================== 用户界面交互函数 ====================

  /**
   * 处理用户输入并计算八字
   */
  async calculateUserBazi(inputData) {
    try {
      // 验证输入数据
      const validatedInput = this.validateInput(inputData);

      // 计算八字
      const result = baziEngine.calculateBazi(
        validatedInput.birthDateTime,
        validatedInput.gender
      );

      // 保存结果
      this.currentBazi = result.bazi;
      this.currentDayun = result.dayun;
      this.analysisResults = result.analysis;

      // 格式化输出结果
      return this.formatBaziResult(result);

    } catch (error) {
      console.error('计算八字出错:', error);
      throw new Error('八字计算失败: ' + error.message);
    }
  }

  /**
   * 验证用户输入
   */
  validateInput(inputData) {
    const { birthDateTime, gender, name } = inputData;

    // 验证出生时间
    if (!birthDateTime) {
      throw new Error('请输入出生时间');
    }

    const birthDate = new Date(birthDateTime);
    if (isNaN(birthDate.getTime())) {
      throw new Error('出生时间格式不正确');
    }

    // 验证性别
    if (!gender || !['男', '女'].includes(gender)) {
      throw new Error('请选择正确的性别');
    }

    // 验证年份范围
    const year = birthDate.getFullYear();
    if (year < 1900 || year > 2100) {
      throw new Error('出生年份请在1900-2100年之间');
    }

    return {
      birthDateTime: birthDateTime,
      gender: gender,
      name: name || '用户'
    };
  }

  /**
   * 格式化八字结果为用户友好的格式
   */
  formatBaziResult(result) {
    const { bazi, dayun, analysis, birthInfo } = result;

    return {
      // 基本信息部分
      basicInfo: {
        name: birthInfo.name || '用户',
        gender: birthInfo.gender,
        birthDate: birthInfo.date,
        birthTime: birthInfo.time,
        dayMaster: analysis.dayMaster,
        dayMasterDescription: this.getDayMasterDescription(analysis.dayMaster)
      },

      // 四柱部分
      siZhu: this.formatSiZhu(bazi),

      // 日主强弱分析
      strengthAnalysis: this.formatStrengthAnalysis(analysis.dayMasterStrength),

      // 十神分布
      tenGodsAnalysis: this.formatTenGodsAnalysis(analysis.tenGodsDistribution),

      // 用神分析
      usefulGodAnalysis: this.formatUsefulGodAnalysis(analysis.usefulGod),

      // 格局分析
      patternAnalysis: this.formatPatternAnalysis(analysis.patterns),

      // 五行分析
      fiveElementsAnalysis: this.formatFiveElementsAnalysis(analysis.fiveElements),

      // 大运分析
      dayunAnalysis: this.formatDayunAnalysis(dayun),

      // 综合建议
      lifeAdvice: this.generateLifeAdvice(analysis)
    };
  }

  // ==================== 格式化函数 ====================

  /**
   * 格式化四柱显示
   */
  formatSiZhu(bazi) {
    return {
      yearPillar: {
        stem: bazi.year.stem,
        branch: bazi.year.branch,
        naYin: bazi.year.naYin,
        description: `${bazi.year.stem}${bazi.year.branch} (${bazi.year.naYin})`
      },
      monthPillar: {
        stem: bazi.month.stem,
        branch: bazi.month.branch,
        naYin: bazi.month.naYin,
        description: `${bazi.month.stem}${bazi.month.branch} (${bazi.month.naYin})`
      },
      dayPillar: {
        stem: bazi.day.stem,
        branch: bazi.day.branch,
        naYin: bazi.day.naYin,
        description: `${bazi.day.stem}${bazi.day.branch} (${bazi.day.naYin}) - 日主`
      },
      hourPillar: {
        stem: bazi.hour.stem,
        branch: bazi.hour.branch,
        naYin: bazi.hour.naYin,
        description: `${bazi.hour.stem}${bazi.hour.branch} (${bazi.hour.naYin})`
      }
    };
  }

  /**
   * 格式化日主强弱分析
   */
  formatStrengthAnalysis(strength) {
    return {
      strength: strength.strength,
      score: strength.score,
      description: strength.description,
      details: {
        deLing: { value: strength.deLing, description: this.getDeLingDescription(strength.deLing) },
        deDi: { value: strength.deDi, description: this.getDeDiDescription(strength.deDi) },
        deShi: { value: strength.deShi, description: this.getDeShiDescription(strength.deShi) }
      },
      advice: this.getStrengthAdvice(strength.strength)
    };
  }

  /**
   * 格式化十神分析
   */
  formatTenGodsAnalysis(distribution) {
    const result = {
      summary: [],
      details: {},
      balanceAnalysis: ''
    };

    // 统计十神分布
    Object.entries(distribution).forEach(([god, info]) => {
      if (info.count > 0) {
        const godInfo = baziData.tenGodsInfo[god];
        result.summary.push({
          name: god,
          count: info.count,
          positions: info.positions,
          description: godInfo.description,
          characteristics: godInfo.characteristics
        });

        result.details[god] = {
          ...info,
          fullInfo: godInfo
        };
      }
    });

    // 分析十神平衡
    result.balanceAnalysis = this.analyzeTenGodsBalance(result.summary);

    return result;
  }

  /**
   * 格式化用神分析
   */
  formatUsefulGodAnalysis(usefulGod) {
    return {
      principle: usefulGod.principle,
      usefulElements: usefulGod.usefulElements,
      avoidElements: usefulGod.avoidElements,
      specificGods: usefulGod.specificGods.map(god => ({
        ...god,
        description: baziData.tenGodsInfo[god.god].description,
        advice: this.getGodAdvice(god.god)
      })),
      advice: this.generateUsefulGodAdvice(usefulGod)
    };
  }

  /**
   * 格式化格局分析
   */
  formatPatternAnalysis(patterns) {
    return {
      mainPattern: patterns[0] || null,
      allPatterns: patterns,
      analysis: this.analyzePatterns(patterns)
    };
  }

  /**
   * 格式化五行分析
   */
  formatFiveElementsAnalysis(fiveElements) {
    return {
      distribution: fiveElements.distribution,
      balance: fiveElements.balance,
      description: fiveElements.description,
      analysis: this.analyzeFiveElementsDistribution(fiveElements.distribution),
      advice: this.getFiveElementsAdvice(fiveElements.distribution)
    };
  }

  /**
   * 格式化大运分析
   */
  formatDayunAnalysis(dayun) {
    return {
      direction: dayun.direction,
      startAge: dayun.startAge,
      currentDayun: this.getCurrentDayun(dayun.sequence),
      upcomingDayun: this.getUpcomingDayun(dayun.sequence),
      allDayun: dayun.sequence.map((dy, index) => ({
        ...dy,
        analysis: this.analyzeDayun(dy),
        advice: this.getDayunAdvice(dy)
      }))
    };
  }

  // ==================== 分析函数 ====================

  /**
   * 获取日主描述
   */
  getDayMasterDescription(dayMaster) {
    const stemInfo = baziData.heavenlyStems.find(s => s.name === dayMaster);
    if (!stemInfo) return '';

    return `${stemInfo.name}木：${stemInfo.character}，象征${stemInfo.image}`;
  }

  /**
   * 得令描述
   */
  getDeLingDescription(deLing) {
    if (deLing >= 2) return '得令，在当令的月份出生，力量较强';
    if (deLing >= 0) return '得中，季节相合，力量适中';
    if (deLing >= -2) return '失令，不在当令季节，力量较弱';
    return '严重失令，季节相克，力量很弱';
  }

  /**
   * 得地描述
   */
  getDeDiDescription(deDi) {
    if (deDi >= 4) return '得地，地支有强根，力量很强';
    if (deDi >= 2) return '得地，地支有根，力量较强';
    if (deDi >= 0) return '得地弱，地支根气不足';
    return '失地，地支无根，力量很弱';
  }

  /**
   * 得势描述
   */
  getDeShiDescription(deShi) {
    if (deShi >= 4) return '得势，天干同类多，党众势强';
    if (deShi >= 2) return '得势，天干有同类，有一定力量';
    if (deShi >= 0) return '得势弱，天干同类少';
    return '失势，天干无同类，势单力薄';
  }

  /**
   * 根据日主强弱给出建议
   */
  getStrengthAdvice(strength) {
    switch (strength) {
      case '极强':
        return '日主极强，建议多从事消耗性活动，如运动、冒险、投资等。避免过于保守。';
      case '强':
        return '日主偏强，可以适当承担责任和挑战，但也要注意劳逸结合。';
      case '中和':
        return '日主中和，比较平衡，可以灵活应对各种情况，是最佳状态。';
      case '弱':
        return '日主偏弱，建议多寻求帮助和支持，加强自身修养，不宜承担过大压力。';
      case '极弱':
        return '日主极弱，需要依赖他人，建议寻求贵人相助，或考虑专精某一领域。';
      default:
        return '需要具体分析';
    }
  }

  /**
   * 分析十神平衡
   */
  analyzeTenGodsBalance(summary) {
    if (summary.length === 0) return '十神分布需要分析';

    const maxCount = Math.max(...summary.map(s => s.count));
    const minCount = Math.min(...summary.map(s => s.count));

    if (maxCount - minCount <= 1) {
      return '十神分布比较均衡，性格相对全面';
    } else if (maxCount - minCount <= 2) {
      return '十神分布基本均衡，某些特质较为突出';
    } else {
      const strongest = summary.find(s => s.count === maxCount);
      return `十神分布不均，${strongest.name}特质非常突出，需要平衡发展`;
    }
  }

  /**
   * 生成用神建议
   */
  generateUsefulGodAdvice(usefulGod) {
    const advice = [];

    advice.push(`用神原则：${usefulGod.principle}`);

    if (usefulGod.usefulElements.length > 0) {
      advice.push(`有利五行：${usefulGod.usefulElements.join('、')}`);
      advice.push('建议在日常生活中多接触这些五行相关的事物。');
    }

    if (usefulGod.avoidElements.length > 0) {
      advice.push(`不利五行：${usefulGod.avoidElements.join('、')}`);
      advice.push('建议尽量避免这些五行相关的事物。');
    }

    if (usefulGod.specificGods.length > 0) {
      const gods = usefulGod.specificGods.map(g => `${g.god}(${g.position})`).join('、');
      advice.push(`具体用神：${gods}`);
    }

    return advice;
  }

  /**
   * 分析格局
   */
  analyzePatterns(patterns) {
    if (patterns.length === 0) {
      return '暂无特殊格局，为普通格局';
    }

    const mainPattern = patterns[0];
    const analysis = [`主格局为${mainPattern.name}，${mainPattern.description}`];

    if (mainPattern.quality === '上等格局') {
      analysis.push('此为上等格局，先天条件优越，容易获得成功。');
    } else if (mainPattern.quality === '中等格局') {
      analysis.push('此为中等格局，通过努力可以获得不错成就。');
    } else {
      analysis.push('格局有所欠缺，需要大运助益或个人努力。');
    }

    return analysis.join('，');
  }

  /**
   * 分析五行分布
   */
  analyzeFiveElementsDistribution(distribution) {
    const elements = Object.entries(distribution)
      .filter(([element, count]) => count > 0)
      .sort((a, b) => b[1] - a[1]);

    if (elements.length === 0) return '五行分析异常';

    const [strongest] = elements[0];
    const [weakest] = elements[elements.length - 1];

    let analysis = `五行中以${strongest}最旺`;

    if (elements.length > 1) {
      analysis += `，${weakest}最弱`;
    }

    if (elements.length < 5) {
      const missing = ['金', '木', '水', '火', '土'].filter(e => !distribution[e]);
      analysis += `，缺${missing.join('、')}`;
    }

    return analysis;
  }

  /**
   * 获取五行建议
   */
  getFiveElementsAdvice(distribution) {
    const advice = [];
    const total = Object.values(distribution).reduce((sum, count) => sum + count, 0);

    // 找出最旺和最弱的五行
    const elements = Object.entries(distribution);
    const strongest = elements.reduce((a, b) => a[1] > b[1] ? a : b);
    const weakest = elements.reduce((a, b) => a[1] < b[1] ? a : b);

    if (strongest[1] - weakest[1] >= 3) {
      advice.push(`五行严重失衡，${strongest[0]}过旺，${weakest[0]}过弱`);
      advice.push(`建议多补${weakest[0]}，少接触${strongest[0]}相关事物`);
    }

    // 缺失五行建议
    const missing = ['金', '木', '水', '火', '土'].filter(e => distribution[e] === 0);
    if (missing.length > 0) {
      advice.push(`命局缺${missing.join('、')}，建议适当补充`);
    }

    return advice;
  }

  /**
   * 获取当前大运
   */
  getCurrentDayun(sequence) {
    const currentAge = new Date().getFullYear() - this.getBirthYear();
    return sequence.find(dy => {
      const [start, end] = dy.ageRange.split('-').map(Number);
      return currentAge >= start && currentAge <= end;
    }) || sequence[0];
  }

  /**
   * 获取下一部大运
   */
  getUpcomingDayun(sequence) {
    const currentAge = new Date().getFullYear() - this.getBirthYear();
    const currentIndex = sequence.findIndex(dy => {
      const [start, end] = dy.ageRange.split('-').map(Number);
      return currentAge >= start && currentAge <= end;
    });

    return sequence[currentIndex + 1] || null;
  }

  /**
   * 分析大运
   */
  analyzeDayun(dayun) {
    const analysis = [];

    // 分析大运与命局的关系
    if (this.currentBazi && this.analysisResults) {
      // 这里可以添加更详细的大运分析逻辑
      analysis.push(`${dayun.stem}${dayun.branch}大运，运势${dayun.quality.level}`);
      analysis.push(dayun.quality.description);
    }

    return analysis.join('，');
  }

  /**
   * 获取大运建议
   */
  getDayunAdvice(dayun) {
    const advice = [];

    if (dayun.quality.level === '上等') {
      advice.push('此步大运运势很好，应该积极进取，把握机遇');
    } else if (dayun.quality.level === '中等') {
      advice.push('此步大运运势一般，需要努力奋斗，稳步前进');
    } else {
      advice.push('此步大运运势不佳，应该低调行事，积累实力');
    }

    // 添加年龄相关建议
    const [startAge] = dayun.ageRange.split('-').map(Number);
    if (startAge < 30) {
      advice.push('青年时期，建议多学习积累，为未来发展打基础');
    } else if (startAge < 50) {
      advice.push('中年时期，建议事业发展为主，兼顾家庭');
    } else {
      advice.push('晚年时期，建议养生保健，享受生活');
    }

    return advice;
  }

  /**
   * 生成人生建议
   */
  generateLifeAdvice(analysis) {
    const advice = {
      career: [],
      relationship: [],
      health: [],
      wealth: []
    };

    // 根据格局给职业建议
    if (analysis.patterns.length > 0) {
      const mainPattern = analysis.patterns[0];
      advice.career.push(`适合职业：${mainPattern.careers.join('、')}`);
    }

    // 根据用神给建议
    if (analysis.usefulGod.usefulElements.length > 0) {
      advice.carey.push(`发展方向：多从事${analysis.usefulGod.usefulElements.join('、')}相关行业`);
    }

    // 根据十神给感情建议
    const maleGods = analysis.tenGodsDistribution;
    if (maleGods['正财'] && maleGods['正财'].count > 0) {
      advice.relationship.push('感情较为专一，适合稳定的关系');
    }
    if (maleGods['偏财'] && maleGods['偏财'].count > 0) {
      advice.relationship.push('感情较为丰富，需要注意专一');
    }

    // 根据五行给健康建议
    const weakElements = Object.entries(analysis.fiveElements.distribution)
      .filter(([element, count]) => count <= 1)
      .map(([element]) => element);

    if (weakElements.length > 0) {
      advice.health.push(`需要注意${weakElements.join('、')}相关的健康问题`);
    }

    return advice;
  }

  /**
   * 获取十神建议
   */
  getGodAdvice(god) {
    const godInfo = baziData.tenGodsInfo[god];
    return godInfo.characteristics.join('、');
  }

  // ==================== 辅助函数 ====================

  /**
   * 获取出生年份
   */
  getBirthYear() {
    // 这里应该从用户输入中获取，简化实现
    return 1990;
  }

  // ==================== API接口函数 ====================

  /**
   * 提供流年预测接口
   */
  async getLiunianPrediction(years = 5) {
    if (!this.currentBazi) {
      throw new Error('请先计算八字');
    }

    const currentYear = new Date().getFullYear();
    const predictions = [];

    for (let i = 0; i < years; i++) {
      const targetYear = currentYear + i;
      const liunian = baziEngine.analyzeLiunian(this.currentBazi, targetYear);
      predictions.push({
        year: targetYear,
        ganzhi: `${liunian.ganzhi.stem}${liunian.ganzhi.branch}`,
        naYin: baziData.naYinDatabase[liunian.ganzhi.stem + liunian.ganzhi.branch],
        fortune: liunian.overallFortune,
        advice: liunian.advice,
        highlights: liunian.relationships.slice(0, 3) // 取前3个重要关系
      });
    }

    return predictions;
  }

  /**
   * 提供详细查询接口
   */
  async getDetailedAnalysis(type) {
    if (!this.currentBazi) {
      throw new Error('请先计算八字');
    }

    switch (type) {
      case 'career':
        return this.getCareerAnalysis();
      case 'marriage':
        return this.getMarriageAnalysis();
      case 'health':
        return this.getHealthAnalysis();
      case 'wealth':
        return this.getWealthAnalysis();
      default:
        throw new Error('不支持的分析类型');
    }
  }

  /**
   * 职业分析
   */
  getCareerAnalysis() {
    const analysis = {
      suitableCareers: [],
      developmentDirection: [],
      timing: []
    };

    // 根据格局分析职业
    if (this.analysisResults.patterns.length > 0) {
      const pattern = this.analysisResults.patterns[0];
      analysis.suitableCareers = pattern.careers;
    }

    // 根据用神分析发展方向
    if (this.analysisResults.usefulGod.usefulElements.length > 0) {
      const elementCareers = {
        '金': ['金融', '机械', '珠宝', '法律'],
        '木': ['教育', '林业', '家具', '文化'],
        '水': ['贸易', '运输', '渔业', '智慧型产业'],
        '火': ['能源', '电子', '餐饮', '娱乐'],
        '土': ['建筑', '农业', '房地产', '管理']
      };

      this.analysisResults.usefulGod.usefulElements.forEach(element => {
        if (elementCareers[element]) {
          analysis.developmentDirection.push(...elementCareers[element]);
        }
      });
    }

    return analysis;
  }

  /**
   * 婚姻分析
   */
  getMarriageAnalysis() {
    const analysis = {
      marriageTiming: [],
      partnerCharacteristics: [],
      advice: []
    };

    // 根据十神分析配偶特征
    const maleGods = this.analysisResults.tenGodsDistribution;
    const femaleGods = this.analysisResults.tenGodsDistribution;

    // 这里可以添加更详细的婚姻分析逻辑

    return analysis;
  }

  /**
   * 健康分析
   */
  getHealthAnalysis() {
    const analysis = {
      strongOrgans: [],
      weakOrgans: [],
      advice: []
    };

    // 根据五行分析健康
    const distribution = this.analysisResults.fiveElements.distribution;

    // 这里可以添加更详细的健康分析逻辑

    return analysis;
  }

  /**
   * 财富分析
   */
  getWealthAnalysis() {
    const analysis = {
      wealthLevel: '',
      source: [],
      timing: [],
      advice: []
    };

    // 根据财星分析财运
    const wealthGods = ['正财', '偏财'];
    const wealthCount = wealthGods.reduce((sum, god) => {
      return sum + (this.analysisResults.tenGodsDistribution[god]?.count || 0);
    }, 0);

    if (wealthCount >= 3) {
      analysis.wealthLevel = '财运旺盛';
    } else if (wealthCount >= 2) {
      analysis.wealthLevel = '财运中等';
    } else if (wealthCount >= 1) {
      analysis.wealthLevel = '财运一般';
    } else {
      analysis.wealthLevel = '财运较弱';
    }

    return analysis;
  }
}

// ==================== 导出 ====================

module.exports = BaziWebApp;

/**
 * 使用示例：
 *
 * const BaziApp = require('./bazi-web-app');
 * const app = new BaziWebApp();
 *
 * // 计算八字
 * const result = await app.calculateUserBazi({
 *   name: '张三',
 *   gender: '男',
 *   birthDateTime: '1990-05-15 14:30'
 * });
 *
 * console.log('八字结果:', result);
 *
 * // 获取流年预测
 * const liunian = await app.getLiunianPrediction(5);
 * console.log('流年预测:', liunian);
 *
 * // 获取职业分析
 * const career = await app.getDetailedAnalysis('career');
 * console.log('职业分析:', career);
 */