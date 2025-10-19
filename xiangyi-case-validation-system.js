/**
 * 《探索门八字取象秘法》实战案例验证系统
 * 专门用于验证取象技法准确性的案例分析和验证工具
 * 为第四阶段实战技法学习提供案例验证支撑
 */

// ==================== 导入学习内容 ====================
const { XiangyiAnalysisSystem, tansuomenXiangyi } = require('./stage-04-xiangyi-learning');

// ==================== 案例验证系统核心 ====================

class XiangyiCaseValidationSystem {
  constructor() {
    this.xiangyiSystem = new XiangyiAnalysisSystem();
    this.caseDatabase = this.initializeCaseDatabase();
    this.validationResults = [];
    this.accuracyMetrics = {
      totalCases: 0,
      successfulCases: 0,
      accuracy: 0,
      categoryAccuracy: {}
    };
  }

  // ==================== 案例数据库初始化 ====================

  /**
   * 初始化案例数据库
   */
  initializeCaseDatabase() {
    return {
      // 经典验证案例
      classicalCases: [
        {
          id: "CASE_001",
          title: "年柱正官的经典案例",
          bazi: {
            year: { stem: '甲', branch: '寅' },
            month: { stem: '丙', branch: '午' },
            day: { stem: '戊', branch: '戌' },
            hour: { stem: '癸', branch: '亥' }
          },
          personInfo: {
            name: "张先生",
            gender: "男",
            birthDate: "1990-03-15",
            birthTime: "21:00",
            location: "北京"
          },
          actualSituation: {
            familyBackground: "祖父曾任县政府官员，家族有从政传统",
            earlyLife: "家教严格，从小培养规则意识",
            education: "名牌大学毕业",
            career: "现为国家公务员，任职于某部委"
          },
          expectedAnalysis: {
            yearPillar: {
              shishen: "正官",
              analysis: "年柱正官，祖辈有官职，家族有从政传统"
            }
          },
          validationCategories: ["年柱取象", "正官象意", "祖辈情况", "职业预测"]
        },
        {
          id: "CASE_002",
          title: "月柱正财的事业案例",
          bazi: {
            year: { stem: '乙', branch: '卯' },
            month: { stem: '己', branch: '卯' },
            day: { stem: '壬', branch: '午' },
            hour: { stem: '辛', branch: '亥' }
          },
          personInfo: {
            name: "李女士",
            gender: "女",
            birthDate: "1985-04-12",
            birthTime: "19:30",
            location: "上海"
          },
          actualSituation: {
            familyBackground: "父母经商，家境殷实",
            earlyLife: "从小接触商业，对经营有天赋",
            education: "财经大学毕业后",
            career: "现为企业家，拥有多家连锁企业"
          },
          expectedAnalysis: {
            monthPillar: {
              shishen: "正财",
              analysis: "月柱正财，事业平台稳定，适合实业经营"
            }
          },
          validationCategories: ["月柱取象", "正财象意", "事业预测", "财富分析"]
        },
        {
          id: "CASE_003",
          title: "日支七杀的婚姻案例",
          bazi: {
            year: { stem: '丙', branch: '子' },
            month: { stem: '庚', branch: '寅' },
            day: { stem: '甲', branch: '申' },
            hour: { stem: '戊', branch: '辰' }
          },
          personInfo: {
            name: "王先生",
            gender: "男",
            birthDate: "1988-01-08",
            birthTime: "07:00",
            location: "深圳"
          },
          actualSituation: {
            personality: "能力突出，个性较强，事业心重",
            marriage: "配偶同样是企业家，能力很强",
            relationship: "婚姻中需要不断磨合，相互理解",
            career: "创业成功，公司规模较大"
          },
          expectedAnalysis: {
            dayPillar: {
              spousePalace: "七杀",
              analysis: "日支七杀，配偶能力强有个性，需要磨合"
            }
          },
          validationCategories: ["日柱取象", "七杀象意", "婚姻预测", "配偶特征"]
        },
        {
          id: "CASE_004",
          title: "时柱食神的子女案例",
          bazi: {
            year: { stem: '丁', branch: '巳' },
            month: { stem: '辛', branch: '亥' },
            day: { stem: '癸', branch: '卯' },
            hour: { stem: '乙', branch: '巳' }
          },
          personInfo: {
            name: "陈女士",
            gender: "女",
            birthDate: "1992-05-20",
            birthTime: "10:00",
            location: "杭州"
          },
          actualSituation: {
            children: "育有一子一女",
            childrenTraits: "都有艺术天赋，性格温和",
            education: "重视子女艺术教育",
            familyLife: "家庭生活和谐美满"
          },
          expectedAnalysis: {
            hourPillar: {
              shishen: "食神",
              analysis: "时柱食神，子女有才艺，性格温和，生活幸福"
            }
          },
          validationCategories: ["时柱取象", "食神象意", "子女预测", "晚年生活"]
        }
      ],

      // 五行象意验证案例
      wuxingCases: [
        {
          id: "WUXING_001",
          title: "甲木象意验证",
          bazi: {
            year: { stem: '甲', branch: '寅' },
            month: { stem: '丙', branch: '寅' },
            day: { stem: '戊', branch: '午' },
            hour: { stem: '壬', branch: '子' }
          },
          personInfo: {
            name: "赵先生",
            profession: "林业工程师",
            characteristics: "身材高瘦挺拔，正直向上，有进取心"
          },
          expectedWuxingAnalysis: {
            mainElement: "甲木",
            expectedTraits: ["正直向上", "有进取心", "适合文教农业工作"],
            careerMatch: "林业工程师符合甲木象意"
          },
          validationCategories: ["五行象意", "甲木特征", "职业匹配", "性格分析"]
        },
        {
          id: "WUXING_002",
          title: "丙火象意验证",
          bazi: {
            year: { stem: '丙', branch: '午' },
            month: { stem: '戊', branch: '午' },
            day: { stem: '庚', branch: '申' },
            hour: { stem: '甲', branch: '申' }
          },
          personInfo: {
            name: "孙女士",
            profession: "企业培训师",
            characteristics: "热情开朗，善于表达，有感染力"
          },
          expectedWuxingAnalysis: {
            mainElement: "丙火",
            expectedTraits: ["热情开朗", "善于表达", "适合公众性工作"],
            careerMatch: "培训师符合丙火象意"
          },
          validationCategories: ["五行象意", "丙火特征", "职业匹配", "性格分析"]
        }
      ],

      // 十神组合验证案例
      shishenCombinationCases: [
        {
          id: "COMBO_001",
          title: "正官配印组合验证",
          bazi: {
            year: { stem: '甲', branch: '寅' },
            month: { stem: '丙', branch: '午' },
            day: { stem: '戊', branch: '戌' },
            hour: { stem: '癸', branch: '亥' }
          },
          personInfo: {
            name: "周先生",
            career: "大学教授",
            education: "博士学历",
            status: "学术权威，受人尊敬"
          },
          expectedCombination: {
            combination: "正官配印",
            analysis: "官印相生，贵格层次高，适合学术教育工作",
            verification: "大学教授职业符合组合象意"
          },
          validationCategories: ["十神组合", "正官配印", "职业预测", "贵格分析"]
        },
        {
          id: "COMBO_002",
          title: "食神制杀组合验证",
          bazi: {
            year: { stem: '乙', branch: '卯' },
            month: { stem: '丁', branch: '巳' },
            day: { stem: '己', branch: '亥' },
            hour: { stem: '辛', branch: '酉' }
          },
          personInfo: {
            name: "吴女士",
            career: "律师",
            characteristics: "才华横溢，善于化解复杂问题",
            achievement: "在专业领域有很高声誉"
          },
          expectedCombination: {
            combination: "食神制杀",
            analysis: "才华制化权力，智慧驾驭，适合专业法律工作",
            verification: "律师职业符合组合象意"
          },
          validationCategories: ["十神组合", "食神制杀", "职业预测", "才华分析"]
        }
      ],

      // 时代背景验证案例
      eraCases: [
        {
          id: "ERA_001",
          title: "现代企业家八字验证",
          bazi: {
            year: { stem: '庚', branch: '申' },
            month: { stem: '甲', branch: '申' },
            day: { stem: '戊', branch: '辰' },
            hour: { stem: '壬', branch: '戌' }
          },
          personInfo: {
            name: "郑先生",
            birthYear: "1980年",
            profession: "互联网企业家",
            achievement: "创立知名科技公司"
          },
          eraAnalysis: {
            background: "改革开放后成长的一代",
            opportunity: "抓住互联网发展机遇",
            characteristics: "符合时代特征的发展轨迹"
          },
          validationCategories: ["时代背景", "现代特征", "发展机遇", "时代验证"]
        }
      ]
    };
  }

  // ==================== 核心验证方法 ====================

  /**
   * 运行单个案例验证
   */
  async validateSingleCase(caseData) {
    console.log(`\n🔍 开始验证案例：${caseData.title}`);
    console.log(`案例ID：${caseData.id}`);

    try {
      // 使用取象分析系统进行分析
      const analysisResult = this.xiangyiSystem.fullXiangyiAnalysis(caseData.bazi);
      const gongweiAnalysis = this.xiangyiSystem.fullGongweiAnalysis(caseData.bazi);

      // 构建验证结果
      const validationResult = {
        caseId: caseData.id,
        title: caseData.title,
        timestamp: new Date().toISOString(),
        analysisResult: analysisResult,
        gongweiAnalysis: gongweiAnalysis,
        expectedResults: caseData.expectedAnalysis || caseData.expectedCombination || caseData.expectedWuxingAnalysis,
        actualSituation: caseData.actualSituation,
        validationCategories: caseData.validationCategories,
        matchResults: []
      };

      // 进行各项验证
      validationResult.matchResults = this.performValidation(validationResult);

      // 计算准确率
      validationResult.accuracy = this.calculateAccuracy(validationResult.matchResults);

      // 保存验证结果
      this.validationResults.push(validationResult);

      // 更新总体指标
      this.updateAccuracyMetrics(validationResult);

      console.log(`✅ 案例验证完成，准确率：${validationResult.accuracy}%`);

      return validationResult;

    } catch (error) {
      console.error(`❌ 案例验证失败：${error.message}`);
      return {
        caseId: caseData.id,
        title: caseData.title,
        error: error.message,
        success: false
      };
    }
  }

  /**
   * 运行所有案例验证
   */
  async validateAllCases() {
    console.log("\n🚀 开始运行所有案例验证...");

    const allCases = [
      ...this.caseDatabase.classicalCases,
      ...this.caseDatabase.wuxingCases,
      ...this.caseDatabase.shishenCombinationCases,
      ...this.caseDatabase.eraCases
    ];

    console.log(`总共需要验证 ${allCases.length} 个案例`);

    for (let i = 0; i < allCases.length; i++) {
      const caseData = allCases[i];
      console.log(`\n📊 进度：${i + 1}/${allCases.length}`);

      await this.validateSingleCase(caseData);

      // 添加延时避免过快运行
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // 生成验证报告
    const validationReport = this.generateValidationReport();

    console.log("\n🎉 所有案例验证完成！");
    console.log(`总体准确率：${this.accuracyMetrics.accuracy}%`);

    return validationReport;
  }

  /**
   * 执行具体验证逻辑
   */
  performValidation(validationResult) {
    const matchResults = [];
    const expected = validationResult.expectedResults;
    const actual = validationResult.actualSituation;

    // 根据不同验证类型进行匹配
    if (validationResult.analysisResult) {
      // 验证职业预测
      const careerMatch = this.validateCareerPrediction(expected, actual, validationResult.analysisResult);
      if (careerMatch) matchResults.push(careerMatch);

      // 验证性格分析
      const personalityMatch = this.validatePersonalityAnalysis(expected, actual, validationResult.analysisResult);
      if (personalityMatch) matchResults.push(personalityMatch);

      // 验证家庭背景
      const familyMatch = this.validateFamilyBackground(expected, actual, validationResult.gongweiAnalysis);
      if (familyMatch) matchResults.push(familyMatch);

      // 验证婚姻状况
      const marriageMatch = this.validateMarriagePrediction(expected, actual, validationResult.gongweiAnalysis);
      if (marriageMatch) matchResults.push(marriageMatch);

      // 验证子女情况
      const childrenMatch = this.validateChildrenPrediction(expected, actual, validationResult.gongweiAnalysis);
      if (childrenMatch) matchResults.push(childrenMatch);
    }

    return matchResults;
  }

  /**
   * 验证职业预测
   */
  validateCareerPrediction(expected, actual, analysisResult) {
    const careerCategories = ["职业预测", "事业预测", "职业匹配"];

    if (!this.hasAnyCategory(expected, careerCategories)) {
      return null;
    }

    // 提取实际职业信息
    const actualCareer = this.extractCareerInfo(actual);

    // 提取预测职业信息
    const predictedCareer = this.extractPredictedCareer(analysisResult);

    // 进行匹配度分析
    const matchScore = this.calculateCareerMatchScore(actualCareer, predictedCareer);

    return {
      type: "职业预测验证",
      expected: predictedCareer,
      actual: actualCareer,
      matchScore: matchScore,
      match: matchScore >= 60,
      details: `职业匹配度：${matchScore}%`
    };
  }

  /**
   * 验证性格分析
   */
  validatePersonalityAnalysis(expected, actual, analysisResult) {
    const personalityCategories = ["性格分析", "特征分析"];

    if (!this.hasAnyCategory(expected, personalityCategories)) {
      return null;
    }

    const actualTraits = this.extractPersonalityTraits(actual);
    const predictedTraits = this.extractPredictedTraits(analysisResult);

    const matchScore = this.calculateTraitsMatchScore(actualTraits, predictedTraits);

    return {
      type: "性格分析验证",
      expected: predictedTraits,
      actual: actualTraits,
      matchScore: matchScore,
      match: matchScore >= 60,
      details: `性格匹配度：${matchScore}%`
    };
  }

  /**
   * 验证家庭背景
   */
  validateFamilyBackground(expected, actual, gongweiAnalysis) {
    const familyCategories = ["祖辈情况", "家庭背景", "早年环境"];

    if (!this.hasAnyCategory(expected, familyCategories)) {
      return null;
    }

    const actualFamily = this.extractFamilyInfo(actual);
    const predictedFamily = this.extractPredictedFamily(gongweiAnalysis);

    const matchScore = this.calculateFamilyMatchScore(actualFamily, predictedFamily);

    return {
      type: "家庭背景验证",
      expected: predictedFamily,
      actual: actualFamily,
      matchScore: matchScore,
      match: matchScore >= 60,
      details: `家庭背景匹配度：${matchScore}%`
    };
  }

  /**
   * 验证婚姻预测
   */
  validateMarriagePrediction(expected, actual, gongweiAnalysis) {
    const marriageCategories = ["婚姻预测", "配偶特征"];

    if (!this.hasAnyCategory(expected, marriageCategories)) {
      return null;
    }

    const actualMarriage = this.extractMarriageInfo(actual);
    const predictedMarriage = this.extractPredictedMarriage(gongweiAnalysis);

    const matchScore = this.calculateMarriageMatchScore(actualMarriage, predictedMarriage);

    return {
      type: "婚姻预测验证",
      expected: predictedMarriage,
      actual: actualMarriage,
      matchScore: matchScore,
      match: matchScore >= 60,
      details: `婚姻状况匹配度：${matchScore}%`
    };
  }

  /**
   * 验证子女预测
   */
  validateChildrenPrediction(expected, actual, gongweiAnalysis) {
    const childrenCategories = ["子女预测", "晚年生活"];

    if (!this.hasAnyCategory(expected, childrenCategories)) {
      return null;
    }

    const actualChildren = this.extractChildrenInfo(actual);
    const predictedChildren = this.extractPredictedChildren(gongweiAnalysis);

    const matchScore = this.calculateChildrenMatchScore(actualChildren, predictedChildren);

    return {
      type: "子女预测验证",
      expected: predictedChildren,
      actual: actualChildren,
      matchScore: matchScore,
      match: matchScore >= 60,
      details: `子女情况匹配度：${matchScore}%`
    };
  }

  // ==================== 辅助验证方法 ====================

  /**
   * 计算案例准确率
   */
  calculateAccuracy(matchResults) {
    if (matchResults.length === 0) return 0;

    const totalScore = matchResults.reduce((sum, result) => sum + result.matchScore, 0);
    return Math.round(totalScore / matchResults.length);
  }

  /**
   * 更新总体准确率指标
   */
  updateAccuracyMetrics(validationResult) {
    this.accuracyMetrics.totalCases++;

    if (validationResult.accuracy >= 60) {
      this.accuracyMetrics.successfulCases++;
    }

    this.accuracyMetrics.accuracy = Math.round(
      (this.accuracyMetrics.successfulCases / this.accuracyMetrics.totalCases) * 100
    );

    // 更新分类准确率
    validationResult.validationCategories.forEach(category => {
      if (!this.accuracyMetrics.categoryAccuracy[category]) {
        this.accuracyMetrics.categoryAccuracy[category] = { total: 0, success: 0 };
      }

      this.accuracyMetrics.categoryAccuracy[category].total++;
      if (validationResult.accuracy >= 60) {
        this.accuracyMetrics.categoryAccuracy[category].success++;
      }
    });
  }

  /**
   * 生成验证报告
   */
  generateValidationReport() {
    const report = {
      summary: {
        totalCases: this.accuracyMetrics.totalCases,
        successfulCases: this.accuracyMetrics.successfulCases,
        overallAccuracy: this.accuracyMetrics.accuracy,
        timestamp: new Date().toISOString()
      },
      categoryBreakdown: {},
      detailedResults: this.validationResults,
      recommendations: []
    };

    // 计算分类准确率
    Object.entries(this.accuracyMetrics.categoryAccuracy).forEach(([category, metrics]) => {
      report.categoryBreakdown[category] = {
        totalCases: metrics.total,
        successfulCases: metrics.success,
        accuracy: Math.round((metrics.success / metrics.total) * 100)
      };
    });

    // 生成建议
    report.recommendations = this.generateRecommendations(report);

    return report;
  }

  /**
   * 生成改进建议
   */
  generateRecommendations(report) {
    const recommendations = [];

    if (report.overallAccuracy < 70) {
      recommendations.push("整体准确率偏低，建议检查理论基础和算法实现");
    }

    Object.entries(report.categoryBreakdown).forEach(([category, metrics]) => {
      if (metrics.accuracy < 60) {
        recommendations.push(`${category}类预测准确率较低，建议重点改进该领域的分析方法`);
      }
    });

    if (recommendations.length === 0) {
      recommendations.push("验证结果良好，系统预测准确率达到了专业水准");
    }

    return recommendations;
  }

  // ==================== 信息提取方法 ====================

  extractCareerInfo(actual) {
    const careerKeywords = ['career', 'profession', 'occupation', '工作', '职业', '事业'];

    for (const key of careerKeywords) {
      if (actual[key]) return actual[key];
    }

    // 从实际情况中提取职业信息
    if (typeof actual === 'string') {
      const careerMatch = actual.match(/(职业|工作|事业)[：:]\s*([^，。；；\n]+)/);
      if (careerMatch) return careerMatch[2];
    }

    return "未知职业";
  }

  extractPredictedCareer(analysisResult) {
    if (analysisResult.career && analysisResult.career.suitableCareers) {
      return analysisResult.career.suitableCareers.join(', ');
    }

    if (analysisResult.positions && analysisResult.positions.month && analysisResult.positions.month.shishenXiangyi) {
      return analysisResult.positions.month.shishenXiangyi.items?.map(item => item.name).join(', ') || "未知预测";
    }

    return "未知预测";
  }

  extractPersonalityTraits(actual) {
    const traitKeywords = ['characteristics', 'personality', '性格', '特征', '特点'];

    for (const key of traitKeywords) {
      if (actual[key]) return actual[key];
    }

    return "未知性格特征";
  }

  extractPredictedTraits(analysisResult) {
    if (analysisResult.positions && analysisResult.positions.day && analysisResult.positions.day.combinedAnalysis) {
      return analysisResult.positions.day.combinedAnalysis.meaning || "未知预测性格";
    }

    return "未知预测性格";
  }

  extractFamilyInfo(actual) {
    const familyKeywords = ['familyBackground', '家庭背景', '家族情况', '祖辈'];

    for (const key of familyKeywords) {
      if (actual[key]) return actual[key];
    }

    return "未知家庭背景";
  }

  extractPredictedFamily(gongweiAnalysis) {
    if (gongweiAnalysis.pillars && gongweiAnalysis.pillars.year && gongweiAnalysis.pillars.year.analysis) {
      const yearAnalysis = gongweiAnalysis.pillars.year.analysis;
      return (yearAnalysis.祖辈情况?.details || yearAnalysis.根基背景?.details) || "未知预测家庭背景";
    }

    return "未知预测家庭背景";
  }

  extractMarriageInfo(actual) {
    const marriageKeywords = ['marriage', '婚姻', '配偶', 'spouse'];

    for (const key of marriageKeywords) {
      if (actual[key]) return actual[key];
    }

    return "未知婚姻状况";
  }

  extractPredictedMarriage(gongweiAnalysis) {
    if (gongweiAnalysis.pillars && gongweiAnalysis.pillars.day && gongweiAnalysis.pillars.day.analysis) {
      return gongweiAnalysis.pillars.day.analysis.配偶特征?.details || "未知预测婚姻状况";
    }

    return "未知预测婚姻状况";
  }

  extractChildrenInfo(actual) {
    const childrenKeywords = ['children', '子女', 'child'];

    for (const key of childrenKeywords) {
      if (actual[key]) return actual[key];
    }

    return "未知子女情况";
  }

  extractPredictedChildren(gongweiAnalysis) {
    if (gongweiAnalysis.pillars && gongweiAnalysis.pillars.hour && gongweiAnalysis.pillars.hour.analysis) {
      return gongweiAnalysis.pillars.hour.analysis.子女情况?.details || "未知预测子女情况";
    }

    return "未知预测子女情况";
  }

  // ==================== 匹配度计算方法 ====================

  calculateCareerMatchScore(actual, predicted) {
    if (!actual || !predicted) return 0;

    // 简化的匹配度计算
    const actualWords = actual.split(/[，。、\s]+/);
    const predictedWords = predicted.split(/[，。、\s]+/);

    let matchCount = 0;
    predictedWords.forEach(predWord => {
      if (actualWords.some(actualWord => actualWord.includes(predWord) || predWord.includes(actualWord))) {
        matchCount++;
      }
    });

    return Math.min(100, Math.round((matchCount / predictedWords.length) * 100));
  }

  calculateTraitsMatchScore(actual, predicted) {
    return this.calculateCareerMatchScore(actual, predicted);
  }

  calculateFamilyMatchScore(actual, predicted) {
    return this.calculateCareerMatchScore(actual, predicted);
  }

  calculateMarriageMatchScore(actual, predicted) {
    return this.calculateCareerMatchScore(actual, predicted);
  }

  calculateChildrenMatchScore(actual, predicted) {
    return this.calculateCareerMatchScore(actual, predicted);
  }

  // ==================== 工具方法 ====================

  hasAnyCategory(expected, categories) {
    if (!expected) return false;

    return categories.some(category =>
      Object.keys(expected).some(key =>
        key.includes(category) || JSON.stringify(expected).includes(category)
      )
    );
  }

  /**
   * 导出验证结果到JSON文件
   */
  exportValidationResults(filePath) {
    const fs = require('fs');
    const report = this.generateValidationReport();

    fs.writeFileSync(filePath, JSON.stringify(report, null, 2), 'utf8');
    console.log(`\n📁 验证结果已导出到：${filePath}`);
  }

  /**
   * 打印验证摘要
   */
  printValidationSummary() {
    console.log("\n" + "=".repeat(60));
    console.log("📊 《探索门八字取象秘法》案例验证摘要报告");
    console.log("=".repeat(60));
    console.log(`总案例数：${this.accuracyMetrics.totalCases}`);
    console.log(`成功案例数：${this.accuracyMetrics.successfulCases}`);
    console.log(`总体准确率：${this.accuracyMetrics.accuracy}%`);

    console.log("\n📈 分类准确率：");
    Object.entries(this.accuracyMetrics.categoryAccuracy).forEach(([category, metrics]) => {
      const accuracy = Math.round((metrics.success / metrics.total) * 100);
      console.log(`  ${category}：${accuracy}% (${metrics.success}/${metrics.total})`);
    });

    console.log("\n" + "=".repeat(60));
  }
}

// ==================== 使用示例 ====================

async function demonstrateCaseValidation() {
  console.log("🎯 《探索门八字取象秘法》案例验证系统演示");
  console.log("=" .repeat(60));

  // 创建验证系统实例
  const validationSystem = new XiangyiCaseValidationSystem();

  // 运行所有案例验证
  const report = await validationSystem.validateAllCases();

  // 打印验证摘要
  validationSystem.printValidationSummary();

  // 导出详细报告
  validationSystem.exportValidationResults('./xiangyi-validation-report.json');

  return report;
}

// ==================== 导出模块 ====================

module.exports = {
  XiangyiCaseValidationSystem,
  demonstrateCaseValidation
};

/**
 * 使用示例：
 *
 * const { XiangyiCaseValidationSystem, demonstrateCaseValidation } = require('./xiangyi-case-validation-system');
 *
 * // 方式1：运行完整演示
 * demonstrateCaseValidation();
 *
 * // 方式2：自定义验证
 * const validationSystem = new XiangyiCaseValidationSystem();
 *
 * // 验证单个案例
 * const singleCase = validationSystem.caseDatabase.classicalCases[0];
 * const result = await validationSystem.validateSingleCase(singleCase);
 * console.log('单案例验证结果：', result);
 *
 * // 验证所有案例
 * const fullReport = await validationSystem.validateAllCases();
 * console.log('完整验证报告：', fullReport);
 */

console.log("《探索门八字取象秘法》实战案例验证系统已加载！");
console.log("文件位置：E:\\wanwanAI\\erjie1018\\③\\xx\\xiangyi-case-validation-system.js");
console.log("包含完整的案例数据库、验证算法和报告生成功能。");