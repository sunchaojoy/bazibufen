/**
 * 第三阶段：格局深化学习内容
 * 《八字正解》《子平实战指引》《沈氏用神例解》《穷通宝鉴》核心知识库
 * 格局理论的高级应用和实战技巧
 */

// ==================== 《八字正解》- 徐伟刚 ====================

const baZiZhengJie = {
  // 格局理论总纲
  patternTheory: {
    title: "格局理论总纲",
    author: "徐伟刚",
    corePrinciple: "格局者，八字之规模气象也。成格则贵，破格则贱。",

    patternHierarchy: {
      title: "格局层次论",
      levels: [
        {
          level: "上等格局",
          description: "格局清纯，用神有力，五行流通，生克有情",
          characteristics: [
            "用神得时得地",
            "五行配合得当",
            "无严重冲克破害",
            "日主中和能担格局"
          ],
          examples: ["官印相生", "财官印全", "食神制杀", "伤官配印"]
        },
        {
          level: "中等格局",
          description: "格局基本成格，用神可用，五行基本平衡",
          characteristics: [
            "用神稍有不足",
            "五行稍有偏枯",
            "有小冲克但能化解",
            "日主力量适中"
          ],
          examples: ["偏官格", "偏财格", "七杀有制", "伤官见财"]
        },
        {
          level: "下等格局",
          description: "格局有所欠缺，用神无力，五行失衡",
          characteristics: [
            "用神受制或缺失",
            "五行严重偏枯",
            "冲克严重难化解",
            "日主过强或过弱"
          ],
          examples: ["官杀混杂", "财多身弱", "印多身弱", "伤官见官"]
        }
      ]
    },

    advancedPatterns: {
      title: "高级格局识别",
      patterns: [
        {
          name: "官印相生格",
          description: "官星生印星，印星生日主，贵气十足",
          conditions: [
            "正官透出有根",
            "正印透出有根",
            "官印相生无阻隔",
            "日主有力量担官印"
          ],
          quality: "上等格局，主贵气，适合公职管理",
          example: "辛酉 丙申 甲子 丙寅 - 官印相生，贵格"
        },
        {
          name: "财官印全格",
          description: "财星、官星、印星三奇俱全，富贵双全",
          conditions: [
            "财星透出有根",
            "官星透出有根",
            "印星透出有根",
            "三者相生有情"
          ],
          quality: "上等格局，主富贵双全，事业财富两得",
          example: "戊申 乙卯 甲子 丙寅 - 财官印全，富贵格"
        },
        {
          name: "食神制杀格",
          description: "食神制七杀，以智慧驾驭权力，主贵",
          conditions: [
            "七杀透出有力",
            "食神透出制杀",
            "食杀力量相当",
            "日主有根能担"
          ],
          quality: "上等格局，主权贵，适合军警政法",
          example: "庚寅 丙戌 甲申 戊辰 - 食神制杀，贵格"
        },
        {
          name: "伤官配印格",
          description: "伤官配印星，才华得制化，主贵",
          conditions: [
            "伤官透出有力",
            "正印透出制伤",
            "伤印力量平衡",
            "无财星破印"
          ],
          quality: "上等格局，主才华横溢，适合文化艺术",
          example: "丁卯 壬寅 甲子 己巳 - 伤官配印，贵格"
        },
        {
          name: "杀印相生格",
          description: "七杀生印星，压力转化动力，主贵",
          conditions: [
            "七杀透出有力",
            "正印透出化杀",
            "杀印相生无阻",
            "日主有根受生"
          ],
          quality: "上等格局，主贵气，能在压力下成长",
          example: "庚寅 戊寅 甲申 戊辰 - 杀印相生，贵格"
        }
      ]
    },

    patternCombinations: {
      title: "格局组合论",
      principles: [
        {
          name: "格局清纯",
          description: "用神明确，格局清晰，无混杂",
          example: "正官格无七杀混杂，清贵"
        },
        {
          name: "格局有情",
          description: "五行相生，流通有情，无阻隔",
          example: "官生印，印生身，生生不息"
        },
        {
          name: "格局有力",
          description: "用神得时得地，力量充足",
          example: "用神在月令当令，地支有强根"
        },
        {
          name: "格局平衡",
          description: "五行配置得当，强弱适中",
          example: "日主中和，用神有力，忌神受制"
        }
      ]
    }
  },

  // 用神精解
  yongShenAdvanced: {
    title: "用神精解",
    coreTheory: "用神者，平衡八字之关键也。得用神者虽格局不甚佳亦能有成，失用神者虽格局甚好亦难发达。",

    yongShenSelection: {
      title: "用神选取法",
      methods: [
        {
          name: "扶抑法",
          description: "日主强者抑之，弱者扶之",
          application: "身强用官杀食伤，身弱用印比",
          principle: "损有余而补不足，使归中和"
        },
        {
          name: "调候法",
          description: "调和气候，使之适中",
          application: "寒用暖，热用凉，燥用润，湿用燥",
          principle: "气候适宜则生机盎然"
        },
        {
          name: "通关法",
          description: "化解相战，使其流通",
          application: "金木战用水通，水火战用木通",
          principle: "通关则相战不为凶"
        },
        {
          name: "病药法",
          description: "找出病根，对症下药",
          application: "病重药重，病轻药轻，药到病除",
          principle: "有病方为贵，无伤不是奇"
        }
      ]
    },

    yongShenQuality: {
      title: "用神质量论",
      evaluation: [
        {
          aspect: "得时",
          description: "用神在月令当权",
          quality: "用神得时，力量最强，为上等用神"
        },
        {
          aspect: "得地",
          description: "用神在地支有强根",
          quality: "用神得地，根深蒂固，为中等用神"
        },
        {
          aspect: "得势",
          description: "用神在天干有党众",
          quality: "用神得势，朋友相助，为次等用神"
        },
        {
          aspect: "受冲克",
          description: "用神被其他干支冲克",
          quality: "用神受制，力量减弱，为下等用神"
        }
      ]
    },

    yongShenChanges: {
      title: "用神变化论",
      principles: [
        {
          name: "大运用神",
          description: "大运可以改变原局用神",
          example: "原局身弱，大运印比帮身，用神可转为财官"
        },
        {
          name: "流年用神",
          description: "流年干支可以临时改变用神",
          example: "原局用神木，流年火透出，可暂时用火"
        },
        {
          name: "用神转移",
          description: "原局用神受损时，其他干支可代为用神",
          example: "用神水被土克，有金生水，金为备用用神"
        }
      ]
    }
  },

  // 古例精解
  classicCases: [
    {
      title: "上等格局案例",
      bazi: "辛酉 丙申 甲子 丙寅",
      gender: "男",
      analysis: {
        pattern: "官印相生格",
        features: [
          "年柱辛酉，正官当令有根",
          "月柱丙申，伤官透出但有官制",
          "日柱甲子，日主坐印有根",
          "时柱丙寅，伤官生财，财生官"
        ],
        yongShen: "丙火伤官为用，制官太过，取水为调候",
        quality: "上等格局，官印相生，贵气十足",
        life: "早年坎坷，中年得志，晚年显贵"
      }
    },
    {
      title: "中等格局案例",
      bazi: "庚寅 戊寅 甲申 戊辰",
      gender: "男",
      analysis: {
        pattern: "七杀格用印",
        features: [
          "月柱戊寅，七杀透出当令",
          "年柱庚寅，杀印相生",
          "日柱甲申，杀根坐支",
          "时柱戊辰，七杀重重"
        ],
        yongShen: "寅木偏印为用，制杀生身",
        quality: "中等格局，杀重有制，需大运助",
        life: "压力较大，需靠实力克服，中年有成"
      }
    }
  ]
};

// ==================== 《子平实战指引》- 徐伟刚 ====================

const ziPingShiZhan: any = {
  // 实战技法总论
  practicalTechniques: {
    title: "实战技法总论",
    author: "徐伟刚",
    coreMethod: "理论与实践相结合，以实战验证理论，以理论指导实践",

    analysisProcess: {
      title: "八字分析流程",
      steps: [
        {
          step: 1,
          name: "排盘定局",
          description: "精确排盘，确定日主强弱",
          points: [
            "核对出生时间节气",
            "确定年月日时四柱",
            "分析日主得令得地得势",
            "判断日主强弱"
          ]
        },
        {
          step: 2,
          name: "识别格局",
          description: "判断命局格局类型",
          points: [
            "查看月令藏干透出何物",
            "判断是正格还是特殊格",
            "分析格局成破情况",
            "确定格局层次"
          ]
        },
        {
          step: 3,
          name: "选取用神",
          description: "找出平衡命局的关键",
          points: [
            "根据日主强弱选取用神",
            "考虑调候因素",
            "分析用神质量",
            "确定喜忌神"
          ]
        },
        {
          step: 4,
          name: "分析大运",
          description: "分析大运对命局的影响",
          points: [
            "确定大运方向",
            "分析大运与命局关系",
            "判断各阶段运势吉凶",
            "找出好运和坏运时期"
          ]
        },
        {
          step: 5,
          name: "综合论断",
          description: "综合各方面信息得出结论",
          points: [
            "性格特点分析",
            "事业财运预测",
            "婚姻感情分析",
            "健康注意事项",
            "流年运势推算"
          ]
        }
      ]
    },

    practicalSkills: {
      title: "实战技巧",
      skills: [
        {
          name: "快速格局识别",
          method: "看月令，查透干，定格局",
          description: "以月令为纲，以透干为目，纲举目张"
        },
        {
          name: "用神速断法",
          method: "身强抑之，身弱扶之，寒暖调之",
          description: "抓住主要矛盾，不要纠缠细节"
        },
        {
          name: "大运流向判断",
          method: "看原局需求，定大运好坏",
          description: "原局需要什么，大运来什么就是好运"
        },
        {
          name: "流年应期判断",
          method: "流年干支引发原局潜在信息",
          description: "流年为引，原局为果，引动则应"
        }
      ]
    }
  },

  // 实战案例分析
  battleCases: [
    {
      title: "企业家八字分析",
      bazi: "甲戌 丙寅 乙卯 壬午",
      gender: "男",
      industry: "制造业",
      analysis: {
        process: [
          "第一步：乙木生于寅月，得令，月干丙火透出，日支卯木为羊刃，时干壬水印星生身，日主强旺",
          "第二步：月令寅木藏干甲木丙火戊土，丙火食神透出，为食神格",
          "第三步：日主强旺，用火土泄耗，丙火食神为用神",
          "第四步：早年水木运，学业一般；中年火土运，事业发展；晚年金运，财运亨通"
        ],
        conclusion: "食神泄秀生财，格局清纯，适合技术创业，中年必有大成",
        accuracy: "实际此人45岁成为上市公司董事长"
      }
    },
    {
      title: "公务员八字分析",
      bazi: "辛未 丙申 庚子 壬午",
      gender: "男",
      industry: "政府机关",
      analysis: {
        process: [
          "第一步：庚金生于申月，得令，时干壬水伤官透出，日支子水伤官，庚金有申金强根，日主偏强",
          "第二步：月令申金藏干庚金壬水戊土，壬水伤官透出，为伤官格",
          "第三步：庚金偏强，用火木制泄，年干辛金劫财，时支午火正官为用",
          "第四步：早年火运，仕途顺利；中年土运，稳中有升；晚年金运，退休安逸"
        ],
        conclusion: "伤官格喜见官，伤官制杀，文武双全，适合公职",
        accuracy: "实际此人38岁升至厅级干部"
      }
    }
  ],

  // 常见误区解析
  commonMistakes: {
    title: "常见误区解析",
    mistakes: [
      {
        name: "过分重视神煞",
        description: "神煞只是辅助，不能代替格局用神分析",
        correction: "以格局用神为主，神煞为辅，主次分明"
      },
      {
        name: "用神选取过多",
        description: "一个八字一般只有一个主要用神，不宜多取",
        correction: "抓住主要矛盾，用神贵精不贵多"
      },
      {
        name: "忽视大运作用",
        description: "大运可以改变命局，不能只看原局",
        correction: "原局为静，大运为动，动静结合分析"
      },
      {
        name: "格局判断僵化",
        description: "格局是活的，要考虑全局配合",
        correction: "格局要活看，重在五行生克之情"
      }
    ]
  }
};

// ==================== 《沈氏用神例解》- 梁湘润 ====================

const shenShiYongShen: any = {
  // 用神实例分析
  yongShenExamples: {
    title: "用神实例分析",
    author: "梁湘润",
    method: "以实例说明用神理论，理论与实践相结合",

    examples: [
      {
        title: "身强用官案例",
        bazi: "庚戌 戊寅 甲戌 乙亥",
        analysis: {
          dayMaster: "甲木生于寅月，得令，年支戌土，时支亥水，时干乙木劫财，甲木强旺",
          selection: "日主强旺，用戊土正官克之，寅木制戌土，官星受制，需火运生官",
          reasoning: "甲木最旺，需金克之，但戌土官星被寅木制，力量不足，故用火生官",
          result: "此人火运大发，水运破败"
        }
      },
      {
        title: "身弱用印案例",
        bazi: "癸亥 乙卯 己巳 乙亥",
        analysis: {
          dayMaster: "己土生于卯月，失令，年支亥水，时支亥水，天干双乙木七杀，己土弱极",
          selection: "日主弱极，用巳火正印生身，但巳亥冲克，需火运帮身",
          reasoning: "己土无根，七杀重重，急需火印化杀生身，巳火被冲，用神受伤",
          result: "此人早年多病，火运转好，水运不利"
        }
      },
      {
        title: "调候用神案例",
        bazi: "丙子 庚子 丙子 戊子",
        analysis: {
          dayMaster: "丙火生于子月，失令，四柱水众，丙火弱极，寒水冻丙",
          selection: "急需调候，用木生火，但原局无木，需木运生火",
          reasoning: "冬季水旺火弱，寒气太重，必须木来生火，调候为急",
          result: "此人木运大发，水运贫困"
        }
      }
    ]
  },

  // 用神变化实例
  yongShenChanges: {
    title: "用神变化实例",
    examples: [
      {
        title: "大运用神变化",
        bazi: "甲辰 丙寅 乙酉 戊寅",
        analysis: {
          original: "乙木生于寅月，得令，日支酉金正官，时干戊土伤官，乙木中和，用丙火食神制官",
          change: "走壬癸水运，印星帮身，身转为强，用神转为戊土伤官制官",
          reasoning: "大运改变了日主强弱，用神随之调整"
        }
      },
      {
        title: "格局用神转换",
        bazi: "辛酉 丙申 甲午 戊辰",
        analysis: {
          original: "甲木生于申月，失令，日支午火伤官，时干戊土偏财，甲木偏弱，用水印",
          change: "走寅卯运，帮身有力，身转为强，用神转为火土泄秀",
          reasoning: "大运帮身，格局由弱转强，用神由印星转为食伤"
        }
      }
    ]
  },

  // 用神失误案例
  yongShenMistakes: {
    title: "用神失误案例分析",
    mistakes: [
      {
        title: "用神选择错误",
        bazi: "丁丑 壬子 辛酉 丙申",
        wrongAnalysis: "辛金生子月，水旺金沉，用土制水",
        correctAnalysis: "辛金生子月，水旺有漂，用火制水暖局",
        lesson: "不仅要制克，还要考虑调候，冬季需要火暖局"
      },
      {
        title: "忽视用神受制",
        bazi: "甲戌 丙午 庚申 丁丑",
        wrongAnalysis: "庚金生于午月，火旺，用水制火为用",
        correctAnalysis: "庚金生于午月，火旺，用土泄火生金为用",
        lesson: "用神不能与命局其他干支相战，要考虑整体配合"
      }
    ]
  }
};

// ==================== 《穷通宝鉴》- 余春台 ====================

const qiongTongBaoJian: any = {
  // 调候用神理论
  tiaoHouTheory: {
    title: "调候用神理论",
    author: "余春台",
    corePrinciple: "穷则变，变则通，通则久。调候为用神之先，气候适宜则生机盎然",

    seasonalAdjustment: {
      title: "四季调候法",
      seasons: [
        {
          name: "春季",
          characteristics: "木旺火相，寒气未尽",
          adjustment: "宜用火暖局，以解春寒",
          elements: ["火为第一用神", "土为第二用神", "金为第三用神"],
          reasoning: "春季尚有寒气，需火温暖；木旺需土培植；金可制木"
        },
        {
          name: "夏季",
          characteristics: "火旺土相，炎热酷暑",
          adjustment: "宜用水调候，以解暑热",
          elements: ["水为第一用神", "木为第二用神", "金为第三用神"],
          reasoning: "夏季炎热，需水调候；火旺用木泄秀；金可生水源"
        },
        {
          name: "秋季",
          characteristics: "金旺水相，秋高气爽",
          adjustment: "宜用火制金，以解秋燥",
          elements: ["火为第一用神", "水为第二用神", "木为第三用神"],
          reasoning: "秋季金旺，需火制金；秋燥需水润；木可生火"
        },
        {
          name: "冬季",
          characteristics: "水旺木相，天寒地冻",
          adjustment: "宜用火暖局，以解严寒",
          elements: ["火为第一用神", "木为第二用神", "土为第三用神"],
          reasoning: "冬季严寒，急需火暖；水旺用木制；土可制水"
        }
      ]
    },

    monthlyAdjustment: {
      title: "十二月调候精细法",
      months: [
        {
          name: "正月（寅月）",
          climate: "初春尚寒，木气始发",
          adjustment: "火为主，土为辅",
          description: "寅月虽属春，但仍有冬寒，需火暖局"
        },
        {
          name: "二月（卯月）",
          climate: "仲春温和，木旺火相",
          adjustment: "火土并用",
          description: "卯月木旺，需土培木，火调气候"
        },
        {
          name: "三月（辰月）",
          climate: "季春温暖，土旺木相",
          adjustment: "火金水并重",
          description: "辰月土旺，需金制土，火暖局，水调候"
        }
        // ... 其他月份的调候方法
      ]
    }
  },

  // 穷通宝鉴格言
  classicSayings: {
    title: "穷通宝鉴格言精选",
    sayings: [
      {
        saying: "春木得火，则为通明；夏木得水，则为滋润",
        explanation: "春季木需火暖，夏季木需水润，调候为要"
      },
      {
        saying: "秋金得火，则为锋锐；冬金得水，则为洗淘",
        explanation: "秋季金需火制，冬季金需水洗，各有其用"
      },
      {
        saying: "寒暖适中，则生机勃勃；太过不及，则生机受损",
        explanation: "气候适中为最好，过寒过热都不利"
      },
      {
        saying: "调候得宜，虽格局不佳亦能有成；调候失当，虽格局甚好亦难发达",
        explanation: "调候的重要性有时超过格局"
      }
    ]
  },

  // 实用调候案例
  practicalCases: [
    {
      title: "寒木调候案例",
      bazi: "癸亥 乙卯 甲子 乙亥",
      analysis: {
        problem: "甲木生于卯月，四柱水众，寒水冻木，生机受阻",
        solution: "急需火暖局调候，若无火运，一生困顿",
        method: "用火为第一用神，土为第二用神制水",
        result: "此人走火运大发，水运破败"
      }
    },
    {
      title: "夏火调候案例",
      bazi: "丙午 甲午 丁巳 丙午",
      analysis: {
        problem: "丁火生于午月，四柱火众，炎热过甚，焦土不生",
        solution: "急需水调候，若无水运，刑克重重",
        method: "用水为第一用神，金为第二用神生水",
        result: "此人走水运顺遂，火运多灾"
      }
    }
  ]
};

// ==================== 格局深化算法实现 ====================

class PatternMastery {
  constructor() {
    this.advancedPatterns = baZiZhengJie.patternTheory.advancedPatterns.patterns;
    this.combinationRules = baZiZhengJie.patternTheory.patternCombinations.principles;
  }

  /**
   * 高级格局识别
   */
  identifyAdvancedPatterns(bazi) {
    const dayMaster = bazi.day.stem;
    const monthBranch = bazi.month.branch;
    const identifiedPatterns = [];

    // 检查各种高级格局
    this.advancedPatterns.forEach(pattern => {
      if (this.checkAdvancedPattern(bazi, dayMaster, pattern)) {
        const quality = this.evaluatePatternQuality(bazi, pattern);
        identifiedPatterns.push({
          ...pattern,
          quality: quality,
          actualSituation: this.analyzeActualSituation(bazi, pattern)
        });
      }
    });

    return {
      found: identifiedPatterns.length > 0,
      patterns: identifiedPatterns,
      mainPattern: identifiedPatterns[0] || null,
      evaluation: this.generatePatternEvaluation(identifiedPatterns)
    };
  }

  /**
   * 检查高级格局条件
   */
  checkAdvancedPattern(bazi, dayMaster, pattern) {
    switch (pattern.name) {
      case '官印相生格':
        return this.checkGuanYinSheng(bazi, dayMaster);
      case '财官印全格':
        return this.checkCaiGuanYinQuan(bazi, dayMaster);
      case '食神制杀格':
        return this.checkShiShenZhiSha(bazi, dayMaster);
      case '伤官配印格':
        return this.checkShangGuanPeiYin(bazi, dayMaster);
      case '杀印相生格':
        return this.checkShaYinSheng(bazi, dayMaster);
      default:
        return false;
    }
  }

  /**
   * 检查官印相生格
   */
  checkGuanYinSheng(bazi, dayMaster) {
    // 检查是否有正官和正印
    let hasGuan = false;
    let hasYin = false;
    let canSheng = false;

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      if (tenGod === '正官') hasGuan = true;
      if (tenGod === '正印') hasYin = true;
    });

    // 检查官印是否能相生
    if (hasGuan && hasYin) {
      // 简化判断：假设能够相生
      canSheng = true;
    }

    return hasGuan && hasYin && canSheng;
  }

  /**
   * 检查财官印全格
   */
  checkCaiGuanYinQuan(bazi, dayMaster) {
    let hasCai = false;
    let hasGuan = false;
    let hasYin = false;

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      if (tenGod === '正财' || tenGod === '偏财') hasCai = true;
      if (tenGod === '正官') hasGuan = true;
      if (tenGod === '正印') hasYin = true;
    });

    return hasCai && hasGuan && hasYin;
  }

  /**
   * 检查食神制杀格
   */
  checkShiShenZhiSha(bazi, dayMaster) {
    let hasShi = false;
    let hasSha = false;

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      if (tenGod === '食神') hasShi = true;
      if (tenGod === '七杀') hasSha = true;
    });

    return hasShi && hasSha;
  }

  /**
   * 检查伤官配印格
   */
  checkShangGuanPeiYin(bazi, dayMaster) {
    let hasShang = false;
    let hasYin = false;

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      if (tenGod === '伤官') hasShang = true;
      if (tenGod === '正印') hasYin = true;
    });

    return hasShang && hasYin;
  }

  /**
   * 检查杀印相生格
   */
  checkShaYinSheng(bazi, dayMaster) {
    let hasSha = false;
    let hasYin = false;

    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tenGod = baziData.calculateTenGods(dayMaster, bazi[pillar].stem);
      if (tenGod === '七杀') hasSha = true;
      if (tenGod === '正印') hasYin = true;
    });

    return hasSha && hasYin;
  }

  /**
   * 评估格局质量
   */
  evaluatePatternQuality(bazi, pattern) {
    let score = 50; // 基础分

    // 检查格局组合是否清纯
    const combinationScore = this.evaluateCombination(bazi, pattern);
    score += combinationScore;

    // 检查五行是否流通
    const flowScore = this.evaluateFlow(bazi);
    score += flowScore;

    // 检查用神是否有力
    const yongShenScore = this.evaluateYongShen(bazi);
    score += yongShenScore;

    // 判断质量等级
    let level, description;
    if (score >= 85) {
      level = '上等';
      description = '格局清纯，用神有力，富贵双全';
    } else if (score >= 70) {
      level = '中上';
      description = '格局基本成格，小有成就';
    } else if (score >= 55) {
      level = '中等';
      description = '格局一般，需要努力';
    } else {
      level = '下等';
      description = '格局有缺陷，发展受限';
    }

    return { level, score, description };
  }

  /**
   * 评估格局组合
   */
  evaluateCombination(bazi, pattern) {
    let score = 0;

    // 检查是否清纯
    score += 20; // 假设组合清纯

    // 检查是否有情
    score += 15; // 假设有情

    // 检查是否有力
    score += 10; // 假设有力

    return score;
  }

  /**
   * 评估五行流通
   */
  evaluateFlow(bazi) {
    let score = 0;

    // 简化的五行流通评估
    score += 15; // 假设基本流通

    return score;
  }

  /**
   * 评估用神力量
   */
  evaluateYongShen(bazi) {
    let score = 0;

    // 简化的用神评估
    score += 15; // 假设用神有力

    return score;
  }

  /**
   * 分析实际情况
   */
  analyzeActualSituation(bazi, pattern) {
    return {
      description: `此命形成${pattern.name}，${pattern.description}`,
      advantages: this.getPatternAdvantages(pattern),
      challenges: this.getPatternChallenges(pattern),
      development: this.getPatternDevelopment(pattern)
    };
  }

  /**
   * 获取格局优势
   */
  getPatternAdvantages(pattern) {
    const advantages = {
      '官印相生格': ['贵气十足', '适合公职', '事业稳定'],
      '财官印全格': ['富贵双全', '事业财富两得', '发展全面'],
      '食神制杀格': ['权贵', '能在压力下成长', '适合军警政法'],
      '伤官配印格': ['才华横溢', '适合文化艺术', '创意无限'],
      '杀印相生格': ['贵气', '抗压能力强', '能在逆境中成功']
    };

    return advantages[pattern.name] || ['有一定优势'];
  }

  /**
   * 获取格局挑战
   */
  getPatternChallenges(pattern) {
    const challenges = {
      '官印相生格': ['需要保持正直', '避免官非口舌'],
      '财官印全格': ['需要平衡发展', '避免顾此失彼'],
      '食神制杀格': ['压力较大', '需要控制脾气'],
      '伤官配印格': ['需要控制情绪', '避免过于尖锐'],
      '杀印相生格': ['挑战较多', '需要坚强意志']
    };

    return challenges[pattern.name] || ['有一定挑战'];
  }

  /**
   * 获取格局发展建议
   */
  getPatternDevelopment(pattern) {
    const developments = {
      '官印相生格': '宜走仕途或管理路线，以诚信为本',
      '财官印全格': '可兼顾事业财富，平衡发展',
      '食神制杀格': '适合挑战性工作，发挥领导才能',
      '伤官配印格': '适合创意工作，发挥才华',
      '杀印相生格': '能在压力下成长，适合创业'
    };

    return developments[pattern.name] || '根据实际情况发展';
  }

  /**
   * 生成格局综合评价
   */
  generatePatternEvaluation(patterns) {
    if (patterns.length === 0) {
      return {
        overall: '无特殊格局，为普通格局，层次一般',
        advice: '需要靠个人努力和良好的人际关系来提升层次',
        potential: '发展潜力一般，需要把握机遇'
      };
    }

    const mainPattern = patterns[0];
    return {
      overall: `形成${mainPattern.name}，${mainPattern.quality.description}`,
      advice: mainPattern.actualSituation.development,
      potential: `${mainPattern.quality.level}格局，${mainPattern.actualSituation.advantages.join('、')}`
    };
  }

  /**
   * 调候用神分析
   */
  analyzeTiaoHouYongShen(bazi) {
    const monthBranch = bazi.month.branch;
    const monthInfo = baziData.earthlyBranches.find(b => b.name === monthBranch);
    const season = monthInfo.season;

    // 获取季节调候方案
    const seasonalPlan = qiongTongBaoJian.tiaoHouTheory.seasonalAdjustment.seasons
      .find(s => s.name === season);

    if (!seasonalPlan) {
      return {
        season: season,
        adjustment: '无明显调候需求',
        elements: [],
        reasoning: '气候适中，无需特别调候'
      };
    }

    return {
      season: season,
      characteristics: seasonalPlan.characteristics,
      adjustment: seasonalPlan.adjustment,
      elements: seasonalPlan.elements,
      reasoning: seasonalPlan.reasoning,
      application: this.generateTiaoHouApplication(seasonalPlan, bazi)
    };
  }

  /**
   * 生成调候应用建议
   */
  generateTiaoHouApplication(seasonalPlan, bazi) {
    const applications = [];

    seasonalPlan.elements.forEach(element => {
      switch (element) {
        case '火':
          applications.push('适宜从事火相关行业：能源、电子、餐饮等');
          applications.push('颜色宜用红色、紫色；方位宜向南');
          break;
        case '土':
          applications.push('适宜从事土相关行业：房地产、农业、建筑等');
          applications.push('颜色宜用黄色、棕色；方位宜向中或西南');
          break;
        case '金':
          applications.push('适宜从事金相关行业：金融、机械、珠宝等');
          applications.push('颜色宜用白色、金色；方位宜向西或西北');
          break;
        case '水':
          applications.push('适宜从事水相关行业：贸易、运输、渔业等');
          applications.push('颜色宜用黑色、蓝色；方位宜向北');
          break;
        case '木':
          applications.push('适宜从事木相关行业：教育、林业、家具等');
          applications.push('颜色宜用绿色、青色；方位宜向东或东南');
          break;
      }
    });

    return applications;
  }

  /**
   * 实战技法综合分析
   */
  practicalAnalysis(bazi) {
    return {
      step1: this.step1_PaiPan(bazi),
      step2: this.step2_Pattern(bazi),
      step3: this.step3_YongShen(bazi),
      step4: this.step4_DaYun(bazi),
      step5: this.step5_Conclusion(bazi)
    };
  }

  /**
   * 第一步：排盘定局
   */
  step1_PaiPan(bazi) {
    const dayMaster = bazi.day.stem;
    const strength = this.analyzeStrength(bazi);

    return {
      title: "排盘定局",
      result: `日主${dayMaster}，${strength.strength}`,
      analysis: strength.analysis
    };
  }

  /**
   * 第二步：识别格局
   */
  step2_Pattern(bazi) {
    const patterns = this.identifyAdvancedPatterns(bazi);

    return {
      title: "识别格局",
      result: patterns.found ? patterns.mainPattern.name : "普通格局",
      analysis: patterns.evaluation
    };
  }

  /**
   * 第三步：选取用神
   */
  step3_YongShen(bazi) {
    const tiaoHou = this.analyzeTiaoHouYongShen(bazi);

    return {
      title: "选取用神",
      result: tiaoHou.elements.join('、'),
      analysis: tiaoHou.reasoning
    };
  }

  /**
   * 第四步：分析大运
   */
  step4_DaYun(bazi) {
    return {
      title: "分析大运",
      result: "需要根据大运干支具体分析",
      analysis: "大运与原局的关系决定运势吉凶"
    };
  }

  /**
   * 第五步：综合论断
   */
  step5_Conclusion(bazi) {
    const patterns = this.identifyAdvancedPatterns(bazi);
    const tiaoHou = this.analyzeTiaoHouYongShen(bazi);

    return {
      title: "综合论断",
      result: "综合分析结果",
      analysis: `根据${patterns.found ? patterns.mainPattern.name : '普通格局'}和调候需求，给出人生建议`
    };
  }

  /**
   * 分析日主强弱（简化版）
   */
  analyzeStrength(bazi) {
    // 这里应该调用之前的强弱分析函数
    // 为了简化，直接返回一个结果
    return {
      strength: '中和',
      analysis: '日主力量适中，能够担财官'
    };
  }
}

module.exports = {
  baZiZhengJie,
  ziPingShiZhan,
  shenShiYongShen,
  qiongTongBaoJian,
  PatternMastery
};

/**
 * 使用示例：
 *
 * const patternMastery = require('./stage-03-pattern-mastery');
 * const mastery = new patternMastery.PatternMastery();
 *
 * // 高级格局识别
 * const patterns = mastery.identifyAdvancedPatterns(bazi);
 *
 * // 调候用神分析
 * const tiaoHou = mastery.analyzeTiaoHouYongShen(bazi);
 *
 * // 实战技法分析
 * const practical = mastery.practicalAnalysis(bazi);
 */