/**
 * 第二阶段：古籍基础学习内容
 * 《子平真诠》《渊海子平》《子平基础概要》核心知识库
 * 传统命理理论的深度解读和现代化应用
 */

// ==================== 《子平真诠》核心理论 ====================

const ziPingZhenQuan = {
  // 用神总纲
  yongShenTheory: {
    basicDefinition: {
      title: "用神总纲",
      author: "沈孝瞻（明代）",
      corePrinciple: "八字之用，惟在得用神而已。用神者，平衡八字之钥也。",
      importance: [
        "用神是判断八字吉凶的根本标准",
        "用神得力则命好，用神失力则命差",
        "用神是制化命局的良药",
        "用神是调理整个命局平衡的关键"
      ]
    },

    selectionPrinciples: {
      title: "取用神基本原则",
      principles: [
        {
          name: "抑强扶弱",
          description: "强者抑之，弱者扶之，使命局趋于平衡",
          application: "日主强者用克泄耗，日主弱者用生扶"
        },
        {
          name: "寒暖燥湿",
          description: "调和气候，使之适中，这是生存环境的基础",
          application: "春季木旺宜金制，夏季火旺宜水调，秋季金燥宜水润，冬季水寒宜火暖"
        },
        {
          name: "通关调候",
          description: "使五行流通有情，化解相战",
          application: "金木相战用水通关，水火相战用木通关"
        }
      ]
    },

    yongShenLevels: {
      title: "用神层次",
      levels: [
        {
          name: "第一用神",
          description: "解决命局最主要的矛盾",
          priority: "最高"
        },
        {
          name: "第二用神",
          description: "辅助第一用神，平衡全局",
          priority: "次高"
        },
        {
          name: "喜神",
          description: "生助用神的力量",
          priority: "有益"
        },
        {
          name: "忌神",
          description: "克制用神的力量",
          priority: "避免"
        }
      ]
    }
  },

  // 日主强弱论
  dayMasterStrength: {
    title: "日主强弱论",
    assessmentMethod: "三要素综合判断：得令、得地、得势",

    deLing: {
      title: "得令（月令）",
      levels: [
        {
          strength: "最强",
          condition: "月令同五行",
          example: "甲木生于寅月、乙木生于卯月",
          score: 3
        },
        {
          strength: "次强",
          condition: "月令生我五行",
          example: "甲木生于亥月、乙木生于子月",
          score: 2
        },
        {
          strength: "偏弱",
          condition: "月令克我五行",
          example: "甲木生于申月、乙木生于酉月",
          score: -1
        },
        {
          strength: "弱",
          condition: "月令我克五行",
          example: "甲木生于辰月、乙木生于未月",
          score: -2
        }
      ]
    },

    deDi: {
      title: "得地（地支通根）",
      types: [
        {
          name: "得强根",
          condition: "地支藏干本气",
          example: "甲见寅、乙见卯、丙见巳、丁见午",
          score: 2
        },
        {
          name: "得中根",
          condition: "地支藏干余气",
          example: "甲见亥、乙见辰、丙见寅、丁见卯",
          score: 1
        },
        {
          name: "得弱根",
          condition: "地支藏干墓库",
          example: "甲见未、乙见戌、丙见辰、丁见丑",
          score: 0.5
        },
        {
          name: "无根",
          condition: "地支无同类藏干",
          example: "甲见申酉、乙见申酉",
          score: 0
        }
      ]
    },

    deShi: {
      title: "得势（天干同类）",
      situations: [
        {
          name: "天干比劫多",
          condition: "同类天干三个以上",
          description: "党众势强，朋友相助",
          score: 2
        },
        {
          name: "天干印绶多",
          condition: "生我天干两个以上",
          description: "父母长辈助力大",
          score: 1.5
        },
        {
          name: "天干克泄多",
          condition: "克我泄我天干多",
          description: "压力大，需要努力",
          score: -1
        },
        {
          name: "天干孤单",
          condition: "无同类天干相助",
          description: "势单力薄，独立奋斗",
          score: -0.5
        }
      ]
    }
  },

  // 用神分类详解
  yongShenClassification: {
    zhengGuan: {
      name: "正官为用神",
      characteristics: "以贵气为主，适宜公职",
      conditions: [
        "官星有根，不被冲克",
        "日主有力量担官星",
        "无伤官见官"
      ],
      preferences: ["喜印星化官", "喜财星生官"],
      taboos: ["忌伤官见官", "忌官星过弱"],
      applications: ["公务员", "管理", "教育", "法律"],
      description: "正直守法，有责任心，适合稳定发展"
    },

    qiSha: {
      name: "七杀为用神",
      characteristics: "以威权为主，适宜武职",
      conditions: [
        "七杀有制（食神制杀或印星化杀）",
        "日主有一定力量",
        "杀不过重"
      ],
      preferences: ["喜食神制杀", "喜印星化杀", "喜羊刃敌杀"],
      taboos: ["忌杀重身轻", "忌杀无制"],
      applications: ["军警", "体育", "创业", "高风险职业"],
      description: "野心勃勃，有威严，能承受压力"
    },

    zhengCai: {
      name: "正财为用神",
      characteristics: "以财富为主，适宜商业",
      conditions: [
        "财星有根，不被冲克",
        "日主能担财星",
        "无比劫争财"
      ],
      preferences: ["喜官星护财", "喜食伤生财"],
      taboos: ["忌比劫争财", "忌财多身弱"],
      applications: ["金融", "贸易", "实业", "稳定商业"],
      description: "诚实守信，勤奋踏实，财富稳定"
    },

    pianCai: {
      name: "偏财为用神",
      characteristics: "以意外之财为主，有商业天赋",
      conditions: [
        "偏财透出，身强能担",
        "财星有根",
        "能把握机会"
      ],
      preferences: ["喜食伤生财", "喜身强"],
      taboos: ["忌比劫夺财", "忌身弱财旺"],
      applications: ["投资", "贸易", "创业", "商业机会"],
      description: "慷慨大方，善于经营，有商业头脑"
    },

    zhengYin: {
      name: "正印为用神",
      characteristics: "以学识为主，有贵人相助",
      conditions: [
        "印星有根，不被冲克",
        "无财星破印",
        "印星不过旺"
      ],
      preferences: ["喜官星生印", "喜身强"],
      taboos: ["忌财星破印", "忌印多身弱"],
      applications: ["教育", "文化", "研究", "知识型工作"],
      description: "仁慈善良，喜欢学习，有贵人相助"
    },

    pianYin: {
      name: "偏印为用神",
      characteristics: "以技艺为主，有特殊才能",
      conditions: [
        "偏印有力，不太过偏",
        "有食神制偏",
        "不过于孤僻"
      ],
      preferences: ["喜食神制偏", "喜身强"],
      taboos: ["忌夺食", "忌过于偏激"],
      applications: ["技艺", "专业", "研究", "特殊技能"],
      description: "心思缜密，有特殊才能，适合专业发展"
    },

    shiShen: {
      name: "食神为用神",
      characteristics: "以享受为主，有艺术天分",
      conditions: [
        "食神有根，不被冲克",
        "无枭神夺食",
        "食神不过旺"
      ],
      preferences: ["喜财星泄秀", "喜身强"],
      taboos: ["忌枭神夺食", "忌食神过多"],
      applications: ["艺术", "餐饮", "娱乐", "服务业"],
      description: "温和善良，有艺术天分，生活享受"
    },

    shangGuan: {
      name: "伤官为用神",
      characteristics: "以才华为主，有创造能力",
      conditions: [
        "伤官有制（配印或见财）",
        "不伤官见官",
        "才华有发挥渠道"
      ],
      preferences: ["喜印星制伤", "喜财星化伤", "喜身强"],
      taboos: ["忌伤官见官", "忌伤官无制"],
      applications: ["创意", "技术", "艺术", "自由职业"],
      description: "聪明机智，有创造力，善于表达"
    }
  },

  // 格局论
  patternTheory: {
    zhengGe: {
      title: "正格格局",
      patterns: [
        {
          name: "正官格",
          condition: "月令透正官，官星有根",
          characteristics: "正直守法，适合公职",
          quality: "以官星强弱定层次"
        },
        {
          name: "七杀格",
          condition: "月令透七杀，七杀有制",
          characteristics: "有威严，适合武职",
          quality: "以制杀方法定吉凶"
        },
        {
          name: "正财格",
          condition: "月令透正财，财星有根",
          characteristics: "诚实守信，适合商业",
          quality: "以身强能担定成就"
        },
        {
          name: "偏财格",
          condition: "月令透偏财，身强能担",
          characteristics: "慷慨大方，有商业天赋",
          quality: "以把握机会定财富"
        },
        {
          name: "正印格",
          condition: "月令透正印，印星有根",
          characteristics: "仁慈善良，有贵人相助",
          quality: "以印星强弱定学业"
        },
        {
          name: "偏印格",
          condition: "月令透偏印，不偏不倚",
          characteristics: "心思缜密，有特殊才能",
          quality: "以技艺专精定成就"
        },
        {
          name: "食神格",
          condition: "月令透食神，食神有根",
          characteristics: "温和善良，有艺术天分",
          quality: "以才华发挥定福气"
        },
        {
          name: "伤官格",
          condition: "月令透伤官，伤官有制",
          characteristics: "聪明机智，有创造能力",
          quality: "以制化方法定层次"
        }
      ]
    },

    specialPatterns: {
      title: "特殊格局",
      patterns: [
        {
          name: "从格",
          condition: "日主无根，纯从一气",
          types: ["从财格", "从官格", "从儿格", "从势格"],
          characteristics: "顺势而为，不逆格局"
        },
        {
          name: "化格",
          condition: "天干合化，得时得势",
          types: ["甲己合化土", "乙庚合化金", "丙辛合化水", "丁壬合化木", "戊癸合化火"],
          characteristics: "合化成功，格局清纯"
        },
        {
          name: "专旺格",
          condition: "一气专旺，曲直有情",
          types: ["曲直格", "炎上格", "稼穑格", "从革格", "润下格"],
          characteristics: "气势专纯，顺其气势"
        }
      ]
    }
  },

  // 古例精解
  classicCases: [
    {
      title: "正官格案例",
      bazi: "辛酉 丙申 甲子 丙寅",
      gender: "男",
      analysis: {
        dayMaster: "甲木生于申月，庚金正官当令",
        guge: "正官格",
        features: [
          "年支酉金官星强根，官星有力",
          "时支寅木为羊刃，身强能担官",
          "丙火伤官透出，有伤官见官之嫌",
          "需行火运制官，方能发达"
        ],
        yongShen: "用火制官，喜木生火",
        dayun: "喜行火木运，忌金水运"
      }
    },
    {
      title: "七杀格案例",
      bazi: "庚寅 戊寅 甲申 戊辰",
      gender: "男",
      analysis: {
        dayMaster: "甲木生于寅月，戊土七杀透出",
        guge: "七杀格",
        features: [
          "七杀双透，杀势较重",
          "寅木当令，有制杀之能",
          "时支申金为杀根，但有寅木冲克",
          "需行水运化杀，方能显贵"
        ],
        yongShen: "用水化杀，喜木制杀",
        dayun: "喜行水木运，忌土金运"
      }
    },
    {
      title: "正财格案例",
      bazi: "癸巳 丙辰 己酉 乙亥",
      gender: "女",
      analysis: {
        dayMaster: "己土生于辰月，丙火正印透出",
        guge: "正财格（时干乙木偏财，但以正财为主）",
        features: [
          "辰月土旺，日主有根",
          "丙火正印生身，身强能担财",
          "时支酉金为财根，财星有力",
          "年支巳火生土，财有来源"
        ],
        yongShen: "用火土，喜金水",
        dayun: "喜行金水运，忌木火运"
      }
    }
  ]
};

// ==================== 《渊海子平》核心理论 ====================

const yuanHaiZiPing = {
  // 五行生克
  wuXingShengKe: {
    title: "五行生克总论",
    author: "徐升（宋代）",
    sheng: {
      title: "五行相生",
      original: "天有五星，地有五行。金生水，水生木，木生火，火生土，土生金，此五行之相生也。",
      relationships: [
        { from: "金", to: "水", description: "金生水" },
        { from: "水", to: "木", description: "水生木" },
        { from: "木", to: "火", description: "木生火" },
        { from: "火", to: "土", description: "火生土" },
        { from: "土", to: "金", description: "土生金" }
      ]
    },
    ke: {
      title: "五行相克",
      original: "金克木，木克土，土克水，水克火，火克金，此五行之相克也。",
      relationships: [
        { from: "金", to: "木", description: "金克木" },
        { from: "木", to: "土", description: "木克土" },
        { from: "土", to: "水", description: "土克水" },
        { from: "水", to: "火", description: "水克火" },
        { from: "火", to: "金", description: "火克金" }
      ]
    },
    characteristics: {
      title: "五行特性",
      elements: [
        {
          name: "木",
          virtue: "仁",
          color: "青",
          taste: "酸",
          season: "春",
          nature: "生长、条达、舒畅"
        },
        {
          name: "火",
          virtue: "礼",
          color: "赤",
          taste: "苦",
          season: "夏",
          nature: "炎热、向上、光明"
        },
        {
          name: "土",
          virtue: "信",
          color: "黄",
          taste: "甘",
          season: "季夏",
          nature: "厚重、承载、生化"
        },
        {
          name: "金",
          virtue: "义",
          color: "白",
          taste: "辛",
          season: "秋",
          nature: "刚毅、肃杀、收敛"
        },
        {
          name: "水",
          virtue: "智",
          color: "黑",
          taste: "咸",
          season: "冬",
          nature: "滋润、下行、寒冷"
        }
      ]
    }
  },

  // 十神详解
  shiShenDetail: {
    title: "十神论述",
    original: "官杀者，克制我者也。财星者，我克者也。印绶者，生我者也。比劫者，同类也。食伤者，我生者也。",

    guanSha: {
      title: "官杀",
      description: "克制我者也。官为正官，杀为七杀。官为禄，杀为鬼。",
      zhengGuan: {
        name: "正官",
        meaning: "禄",
        characteristics: "正直、守法、有责任心",
        represents: ["事业", "地位", "丈夫", "纪律"]
      },
      qiSha: {
        name: "七杀",
        meaning: "鬼",
        characteristics: "威严、权力、压力",
        represents: ["权力", "挑战", "敌人", "压力"]
      }
    },

    caiXing: {
      title: "财星",
      description: "我克者也。财为妻妾，为奴仆，为产业。",
      zhengCai: {
        name: "正财",
        characteristics: "稳定、诚实、勤奋",
        represents: ["固定收入", "妻子", "稳定财产", "产业"]
      },
      pianCai: {
        name: "偏财",
        characteristics: "慷慨、机遇、变化",
        represents: ["意外之财", "父亲", "商业机会", "投资"]
      }
    },

    yinShou: {
      title: "印绶",
      description: "生我者也。印为父母，为学业，为文书。",
      zhengYin: {
        name: "正印",
        characteristics: "仁慈、学习、贵人",
        represents: ["母亲", "学识", "贵人", "文书"]
      },
      pianYin: {
        name: "偏印",
        characteristics: "独特、专业、直觉",
        represents: ["专业技能", "直觉", "非传统", "神秘"]
      }
    },

    biJie: {
      title: "比劫",
      description: "同类也。比为比肩，劫为劫财。",
      biJian: {
        name: "比肩",
        characteristics: "独立、平等、合作",
        represents: ["朋友", "同事", "兄弟姐妹", "竞争"]
      },
      jieCai: {
        name: "劫财",
        characteristics: "热情、社交、花费",
        represents: ["花费", "争夺", "朋友", "机遇"]
      }
    },

    shiShang: {
      title: "食伤",
      description: "我生者也。食为食神，伤为伤官。",
      shiShen: {
        name: "食神",
        characteristics: "温和、艺术、享受",
        represents: ["享受", "艺术", "口福", "子女"]
      },
      shangGuan: {
        name: "伤官",
        characteristics: "聪明、才华、表达",
        represents: ["才华", "智慧", "创造", "表达"]
      }
    }
  },

  // 神煞系统
  shenShaSystem: {
    title: "神煞总录",
    description: "神煞者，辅佐十神，判断吉凶之参考也。",

    tianYiGuiRen: {
      name: "天乙贵人",
      formula: "甲戊庚牛羊，乙己鼠猴乡，丙丁猪蛇位，壬癸兔蛇藏，六辛逢马虎，此是贵人方。",
      meaning: "最吉之神煞，逢凶化吉，遇难成祥",
      calculation: (dayGan) => {
        const tianYiMap = {
          '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
          '乙': ['子', '申'], '己': ['子', '申'],
          '丙': ['亥', '巳'], '丁': ['亥', '巳'],
          '壬': ['卯', '巳'], '癸': ['卯', '巳'],
          '辛': ['午', '寅']
        };
        return tianYiMap[dayGan] || [];
      }
    },

    yiMa: {
      name: "驿马星",
      formula: "申子辰见寅，寅午戌见申，巳酉丑见亥，亥卯未见巳。",
      meaning: "主动之星，主变动、远行、迁移",
      characteristics: "好动、变化、远行、迁移",
      calculation: (yearBranch) => {
        const yiMaMap = {
          '申': '寅', '子': '寅', '辰': '寅',
          '寅': '申', '午': '申', '戌': '申',
          '巳': '亥', '酉': '亥', '丑': '亥',
          '亥': '巳', '卯': '巳', '未': '巳'
        };
        return yiMaMap[yearBranch];
      }
    },

    taoHua: {
      name: "桃花煞",
      formula: "寅午戌见卯，巳酉丑见午，申子辰见酉，亥卯未见子。",
      meaning: "主魅力、感情、人缘",
      characteristics: "有魅力、人缘好、感情丰富",
      types: [
        { name: "子午卯酉", type: "桃花墙上", description: "墙内桃花，主正常感情" },
        { name: "寅申巳亥", type: "桃花墙外", description: "墙外桃花，主外遇" },
        { name: "辰戌丑未", type: "桃花墙头", description: "墙头桃花，主感情波折" }
      ],
      calculation: (yearBranch) => {
        const taoHuaMap = {
          '寅': '卯', '午': '卯', '戌': '卯',
          '巳': '午', '酉': '午', '丑': '午',
          '申': '酉', '子': '酉', '辰': '酉',
          '亥': '子', '卯': '子', '未': '子'
        };
        return taoHuaMap[yearBranch];
      }
    },

    huaGai: {
      name: "华盖星",
      formula: "寅午戌见戌，巳酉丑见丑，申子辰见辰，亥卯未见未。",
      meaning: "主艺术、宗教、聪明",
      characteristics: "聪明、有艺术天赋、喜欢独处",
      applications: ["艺术", "宗教", "哲学", "研究"],
      calculation: (yearBranch) => {
        const huaGaiMap = {
          '寅': '戌', '午': '戌', '戌': '戌',
          '巳': '丑', '酉': '丑', '丑': '丑',
          '申': '辰', '子': '辰', '辰': '辰',
          '亥': '未', '卯': '未', '未': '未'
        };
        return huaGaiMap[yearBranch];
      }
    },

    otherShenSha: [
      {
        name: "太极贵人",
        formula: "甲乙生人子午中，丙丁鸡兔定亨通，戊己两干临四季，庚辛寅亥禄丰隆，壬癸巳申偏喜美，值此应当福气钟。"
      },
      {
        name: "文星贵人",
        formula: "甲马乙蛇丙戊猴，丁己鸡庚辛亥寻，壬羊癸虎必为贵，人命逢之福禄随。"
      },
      {
        name: "天医贵人",
        formula: "甲戊庚牛羊，乙己鼠猴乡，丙丁猪蛇位，壬癸兔蛇藏。"
      },
      {
        name: "禄神",
        formula: "甲禄在寅，乙禄在卯，丙戊禄在巳，丁己禄在午，庚禄在申，辛禄在酉，壬禄在亥，癸禄在子。"
      }
    ]
  }
};

// ==================== 《子平基础概要》现代化解读 ====================

const ziPingJiChu = {
  // 基础概念现代化
  modernInterpretation: {
    title: "基础概念现代化解读",
    author: "梁湘润",

    ganZhiModern: {
      title: "干支的现代理解",
      heavenlyStems: {
        meaning: "代表天时、外在环境、社会因素",
        application: "影响一个人的外部机遇、社会环境、时代背景"
      },
      earthlyBranches: {
        meaning: "代表地利、内在基础、家庭环境",
        application: "影响一个人的内在素质、家庭背景、成长环境"
      },
      naYin: {
        meaning: "代表人和、综合素质、命格层次",
        application: "影响一个人的整体气质、综合能力、人生层次"
      }
    },

    shiShenModern: {
      title: "十神的现代应用",
      applications: [
        {
          god: "正官",
          modern: "事业、地位、纪律、法律",
          careers: ["公务员", "管理", "教育", "法律", "金融"],
          traits: ["正直", "守法", "责任心强", "稳定"]
        },
        {
          god: "七杀",
          modern: "权力、挑战、压力、竞争",
          careers: ["军警", "体育", "创业", "销售", "投资"],
          traits: ["野心", "果断", "挑战", "权力"]
        },
        {
          god: "正财",
          modern: "稳定收入、妻子、保障",
          careers: ["会计", "金融", "贸易", "实业"],
          traits: ["诚实", "勤奋", "稳定", "保守"]
        },
        {
          god: "偏财",
          modern: "意外收益、父亲、机遇",
          careers: ["投资", "贸易", "商业", "销售"],
          traits: ["慷慨", "经营", "机遇", "冒险"]
        },
        {
          god: "正印",
          modern: "学识、母亲、贵人、文书",
          careers: ["教育", "文化", "研究", "医疗"],
          traits: ["仁慈", "学习", "传统", "贵人"]
        },
        {
          god: "偏印",
          modern: "专业技能、直觉、独特、非传统",
          careers: ["技艺", "设计", "研究", "咨询"],
          traits: ["独特", "钻研", "直觉", "专业"]
        },
        {
          god: "食神",
          modern: "享受、艺术、子女、服务",
          careers: ["艺术", "餐饮", "娱乐", "服务"],
          traits: ["温和", "艺术", "享受", "善良"]
        },
        {
          god: "伤官",
          modern: "才华、创新、表达、自由",
          careers: ["创意", "技术", "艺术", "自由职业"],
          traits: ["聪明", "创新", "表达", "反叛"]
        }
      ]
    }
  },

  // 现代用神理论
  modernYongShen: {
    title: "现代用神理论",
    principles: [
      {
        name: "平衡优先",
        description: "现代社会的复杂性要求更全面的平衡考虑",
        factors: ["工作与生活平衡", "物质与精神平衡", "个人与社会平衡"]
      },
      {
        name: "发展趋势",
        description: "考虑时代发展趋势对用神选择的影响",
        factors: ["行业发展", "技术变革", "社会变迁"]
      },
      {
        name: "个人特质",
        description: "结合个人性格和天赋选择适合的发展方向",
        factors: ["兴趣爱好", "性格特点", "能力专长"]
      }
    ]
  }
};

// ==================== 古籍学习辅助函数 ====================

/**
 * 计算天乙贵人
 */
function calculateTianYiGuiRen(dayGan) {
  return yuanHaiZiPing.shenShaSystem.tianYiGuiRen.calculation(dayGan);
}

/**
 * 计算驿马星
 */
function calculateYiMa(yearBranch) {
  return yuanHaiZiPing.shenShaSystem.yiMa.calculation(yearBranch);
}

/**
 * 计算桃花煞
 */
function calculateTaoHua(yearBranch) {
  return yuanHaiZiPing.shenShaSystem.taoHua.calculation(yearBranch);
}

/**
 * 计算华盖星
 */
function calculateHuaGai(yearBranch) {
  return yuanHaiZiPing.shenShaSystem.huaGai.calculation(yearBranch);
}

/**
 * 沈孝瞻日主强弱判断
 */
function shenXiaoZhanStrengthAnalysis(bazi) {
  const dayMaster = bazi.day.stem;
  const monthBranch = bazi.month.branch;

  // 得令分析
  let deLingScore = 0;
  const monthElement = require('./bazi-knowledge-database').earthlyBranches
    .find(b => b.name === monthBranch).element;
  const dayElement = require('./bazi-knowledge-database').heavenlyStems
    .find(s => s.name === dayMaster).element;

  if (monthElement === dayElement) {
    deLingScore = 3; // 最强
  } else if (require('./bazi-knowledge-database').isGeneratedBy(dayElement, monthElement)) {
    deLingScore = 2; // 次强
  } else if (require('./bazi-knowledge-database').isControls(monthElement, dayElement)) {
    deLingScore = -1; // 偏弱
  } else if (require('./bazi-knowledge-database').isControls(dayElement, monthElement)) {
    deLingScore = -2; // 弱
  }

  // 得地分析
  let deDiScore = 0;
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const branch = bazi[pillar].branch;
    const branchInfo = require('./bazi-knowledge-database').earthlyBranches
      .find(b => b.name === branch);
    branchInfo.hiddenStems.forEach(stem => {
      const stemElement = require('./bazi-knowledge-database').heavenlyStems
        .find(s => s.name === stem).element;
      if (stemElement === dayElement) {
        deDiScore += 2; // 强根
      } else if (require('./bazi-knowledge-database').isGeneratedBy(dayElement, stemElement)) {
        deDiScore += 1; // 中根
      }
    });
  });

  // 得势分析
  let deShiScore = 0;
  ['year', 'month', 'day', 'hour'].forEach(pillar => {
    const stem = bazi[pillar].stem;
    const stemElement = require('./bazi-knowledge-database').heavenlyStems
      .find(s => s.name === stem).element;
    if (stemElement === dayElement) {
      deShiScore += 2; // 比劫
    } else if (require('./bazi-knowledge-database').isGeneratedBy(stemElement, dayElement)) {
      deShiScore += 1.5; // 印绶
    } else if (require('./bazi-knowledge-database').isControls(stemElement, dayElement)) {
      deShiScore -= 1; // 克泄
    }
  });

  const totalScore = deLingScore + deDiScore + deShiScore;

  return {
    totalScore: totalScore,
    deLing: { score: deLingScore, description: getDeLingDescription(deLingScore) },
    deDi: { score: deDiScore, description: getDeDiDescription(deDiScore) },
    deShi: { score: deShiScore, description: getDeShiDescription(deShiScore) },
    strength: getStrengthLevel(totalScore)
  };
}

function getDeLingDescription(score) {
  const descriptions = {
    3: "月令同五行，最强",
    2: "月令生我五行，次强",
    -1: "月令克我五行，偏弱",
    -2: "月令我克五行，弱"
  };
  return descriptions[score] || "月令关系一般";
}

function getDeDiDescription(score) {
  if (score >= 4) return "地支多强根，得地有力";
  if (score >= 2) return "地支有根，得地";
  if (score >= 1) return "地支根弱，得地不足";
  return "地支无根，失地";
}

function getDeShiDescription(score) {
  if (score >= 4) return "天干党众，得势强";
  if (score >= 2) return "天干有助，得势";
  if (score >= 1) return "天干助力少，得势弱";
  return "天干无助，失势";
}

function getStrengthLevel(score) {
  if (score >= 6) return "极强";
  if (score >= 3) return "强";
  if (score >= 0) return "中和";
  if (score >= -3) return "弱";
  return "极弱";
}

module.exports = {
  ziPingZhenQuan,
  yuanHaiZiPing,
  ziPingJiChu,
  // 辅助函数
  calculateTianYiGuiRen,
  calculateYiMa,
  calculateTaoHua,
  calculateHuaGai,
  shenXiaoZhanStrengthAnalysis
};

/**
 * 使用示例：
 *
 * const classicLearning = require('./stage-02-learning-content');
 *
 * // 获取《子平真诠》的用神理论
 * const yongShenTheory = classicLearning.ziPingZhenQuan.yongShenTheory;
 *
 * // 计算神煞
 * const tianYi = classicLearning.calculateTianYiGuiRen('甲');
 * const yiMa = classicLearning.calculateYiMa('子');
 *
 * // 沈孝瞻日主强弱分析
 * const strength = classicLearning.shenXiaoZhanStrengthAnalysis(bazi);
 */