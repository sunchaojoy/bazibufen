/**
 * 命理学习33本书籍数据库
 * 完整的学习路径规划和书籍介绍
 * 从入门到精通的系统性学习体系
 */

const bookListDatabase = {
  // ==================== 学习体系总览 ====================
  learningSystem: {
    title: "命理学习完整体系",
    totalBooks: 33,
    totalStages: 7,
    estimatedTime: "18-24个月",
    description: "从现代入门到古籍基础，从格局深化到实战技法，从专题研究到高阶哲学，最终博览融通的完整学习路径",

    stages: [
      {
        stage: 1,
        name: "现代入门",
        duration: "1-2个月",
        focus: "建立基础理论和现代方法",
        goal: "掌握基本概念和排盘方法"
      },
      {
        stage: 2,
        name: "古籍基础",
        duration: "2-3个月",
        focus: "学习传统经典理论",
        goal: "理解古籍正宗理论"
      },
      {
        stage: 3,
        name: "格局深化",
        duration: "2-3个月",
        focus: "深入研究格局理论",
        goal: "掌握高级格局分析"
      },
      {
        stage: 4,
        name: "实战技法",
        duration: "3-4个月",
        focus: "掌握实战技巧和方法",
        goal: "能够独立进行分析"
      },
      {
        stage: 5,
        name: "专题研究",
        duration: "2-3个月",
        focus: "深入研究特定领域",
        goal: "形成专业特长"
      },
      {
        stage: 6,
        name: "高阶哲学",
        duration: "3-4个月",
        focus: "学习命理哲学思想",
        goal: "提升理论高度"
      },
      {
        stage: 7,
        name: "博览融通",
        duration: "长期",
        focus: "广泛阅读融会贯通",
        goal: "成为真正的命理专家"
      }
    ]
  },

  // ==================== 第一阶段：现代入门 (1-2个月) ====================
  stage1: {
    title: "第一阶段：现代入门 (1-2个月)",
    focus: "建立基础理论和现代方法",
    books: [
      {
        id: 1,
        title: "《千里命稿》",
        author: "韦千里",
        publisher: "台湾武陵出版社",
        year: "1993",
        pages: 320,
        isbn: "978-957-35-0872-1",
        difficulty: "初级",
        importance: "★★★★★",
        description: "现代八字入门经典，以现代语言讲解传统命理理论",
        keyPoints: [
          "干支基础知识详解",
          "十神系统全面介绍",
          "四柱排盘方法",
          "用神基础理论",
          "格局入门概念"
        ],
        chapters: [
          "第一章：天干地支基础",
          "第二章：十神系统讲解",
          "第三章：四柱排盘方法",
          "第四章：用神选取基础",
          "第五章：格局初步认识",
          "第六章：大运流年推算"
        ],
        features: [
          "语言通俗易懂",
          "逻辑清晰系统",
          "实例丰富具体",
          "适合初学者"
        ],
        learningAdvice: [
          "重点掌握干支基础和十神系统",
          "多做排盘练习",
          "结合实例理解理论"
        ],
        relatedBooks: ["《四柱预测学》", "《四柱玄机》"]
      },
      {
        id: 2,
        title: "《四柱预测学》",
        author: "邵伟华",
        publisher: "中国民间文艺出版社",
        year: "1993",
        pages: 450,
        isbn: "978-7-5039-1264-9",
        difficulty: "初级",
        importance: "★★★★★",
        description: "现代八字预测的实用教材，系统性强",
        keyPoints: [
          "现代八字预测方法",
          "四柱排盘标准化",
          "预测技术详解",
          "实例分析应用"
        ],
        chapters: [
          "第一章：四柱基础知识",
          "第二章：排盘技术详解",
          "第三章：预测方法体系",
          "第四章：婚姻预测",
          "第五章：事业预测",
          "第六章：财运预测"
        ],
        features: [
          "实用性强",
          "方法系统化",
          "预测面广",
          "案例丰富"
        ],
        learningAdvice: [
          "掌握标准化排盘方法",
          "学习预测技术要点",
          "多做预测练习"
        ],
        relatedBooks: ["《千里命稿》", "《四柱玄机》"]
      },
      {
        id: 3,
        title: "《四柱玄机》",
        author: "张志春主编",
        publisher: "中国哲学文化协进会",
        year: "1995",
        pages: 380,
        isbn: "978-962-7489-12-6",
        difficulty: "初级",
        importance: "★★★★☆",
        description: "现代教学方法的入门教材",
        keyPoints: [
          "现代化教学方法",
          "基础知识系统化",
          "循序渐进的学习安排",
          "实用性强的内容"
        ],
        chapters: [
          "第一章：命理学概论",
          "第二章：基础理论入门",
          "第三章：排盘技术",
          "第四章：分析方法",
          "第五章：实例解读"
        ],
        features: [
          "教学方法新颖",
          "内容系统完整",
          "循序渐进",
          "适合教学"
        ],
        learningAdvice: [
          "按照章节顺序学习",
          "多做思考练习",
          "与其它书籍对照学习"
        ],
        relatedBooks: ["《千里命稿》", "《四柱预测学》"]
      }
    ],

    learningObjectives: [
      "掌握干支基础理论",
      "理解十神系统",
      "学会四柱排盘",
      "了解用神概念",
      "认识格局类型",
      "掌握大运推算"
    ],

    learningMethods: [
      "理论学习为主",
      "结合实例理解",
      "多做排盘练习",
      "反复复习巩固"
    ],

    expectedOutcomes: [
      "能够独立进行四柱排盘",
      "理解基本命理概念",
      "为深入学习打下基础"
    ]
  },

  // ==================== 第二阶段：古籍基础 (2-3个月) ====================
  stage2: {
    title: "第二阶段：古籍基础 (2-3个月)",
    focus: "学习传统经典理论",
    books: [
      {
        id: 4,
        title: "《子平真诠》",
        author: "沈孝瞻",
        dynasty: "明代",
        publisher: "华龄出版社",
        year: "2008",
        pages: 520,
        isbn: "978-7-80178-532-9",
        difficulty: "中级",
        importance: "★★★★★",
        description: "子平术的奠基之作，用神理论的权威经典",
        keyPoints: [
          "用神总纲理论",
          "日主强弱论",
          "用神分类详解",
          "格局论体系",
          "古例精解"
        ],
        chapters: [
          "卷一：论用神",
          "卷二：论日主强弱",
          "卷三：论用神分类",
          "卷四：论格局",
          "卷五：论古例"
        ],
        features: [
          "理论权威正宗",
          "逻辑严密完整",
          "用神理论精髓",
          "古籍原貌保存"
        ],
        learningAdvice: [
          "仔细研读原文",
          "理解用神理论精髓",
          "结合实例验证"
        ],
        relatedBooks: ["《渊海子平》", "《子平基础概要》"]
      },
      {
        id: 5,
        title: "《渊海子平》",
        author: "徐升",
        dynasty: "宋代",
        publisher: "华龄出版社",
        year: "2007",
        pages: 680,
        isbn: "978-7-80178-473-5",
        difficulty: "中级",
        importance: "★★★★★",
        description: "现存最早的八字命理专著之一",
        keyPoints: [
          "五行生克总论",
          "十神详解",
          "神煞系统",
          "古籍传承",
          "原始理论保存"
        ],
        chapters: [
          "卷一：五行生克",
          "卷二：十神论述",
          "卷三：神煞总录",
          "卷四：格局论",
          "卷五：实例解析"
        ],
        features: [
          "历史价值重大",
          "理论原始古朴",
          "内容丰富全面",
          "文献价值极高"
        ],
        learningAdvice: [
          "理解古籍原文含义",
          "与现代理论对比",
          "注意历史背景"
        ],
        relatedBooks: ["《子平真诠》", "《三命通会》"]
      },
      {
        id: 6,
        title: "《子平基础概要》",
        author: "梁湘润",
        publisher: "台湾逸品文化出版社",
        year: "2001",
        pages: 400,
        isbn: "978-957-469-517-8",
        difficulty: "中级",
        importance: "★★★★☆",
        description: "古籍理论的现代化解读",
        keyPoints: [
          "基础概念现代化",
          "实用化应用",
          "系统化整理",
          "现代诠释"
        ],
        chapters: [
          "第一章：基础概念现代化",
          "第二章：干支现代理解",
          "第三章：十神现代应用",
          "第四章：格局现代解读",
          "第五章：应用方法"
        ],
        features: [
          "现代化解读",
          "实用性强",
          "通俗易懂",
          "系统化整理"
        ],
        learningAdvice: [
          "理解现代诠释方法",
          "与传统理论对比",
          "注重实用性"
        ],
        relatedBooks: ["《子平真诠》", "《渊海子平》"]
      }
    ],

    learningObjectives: [
      "理解传统用神理论",
      "掌握古籍分析方法",
      "学习神煞系统",
      "理解经典格局理论",
      "建立传统理论基础"
    ],

    learningMethods: [
      "精读原文",
      "理解古籍思想",
      "对比现代理论",
      "验证经典案例"
    ],

    expectedOutcomes: [
      "掌握传统命理理论精髓",
      "能够读懂古籍经典",
      "建立扎实的理论基础"
    ]
  },

  // ==================== 第三阶段：格局深化 (2-3个月) ====================
  stage3: {
    title: "第三阶段：格局深化 (2-3个月)",
    focus: "深入研究格局理论",
    books: [
      {
        id: 7,
        title: "《八字正解》",
        author: "徐伟刚",
        publisher: "台湾益群书店",
        year: "1998",
        pages: 560,
        isbn: "978-957-552-786-2",
        difficulty: "高级",
        importance: "★★★★★",
        description: "现代格局研究的权威著作",
        keyPoints: [
          "格局理论总纲",
          "高级格局识别",
          "格局组合论",
          "格局层次判断",
          "古例精解"
        ],
        chapters: [
          "上卷：格局总论",
          "中卷：正格详解",
          "下卷：特殊格论",
          "附卷：实例分析"
        ],
        features: [
          "理论系统完整",
          "逻辑严密清晰",
          "格局分类详细",
          "实用性强"
        ],
        learningAdvice: [
          "深入理解格局理论",
          "掌握识别技巧",
          "多做案例分析"
        ],
        relatedBooks: ["《子平实战指引》", "《八字格局详解》"]
      },
      {
        id: 8,
        title: "《子平实战指引》",
        author: "徐伟刚",
        publisher: "台湾益群书店",
        year: "1999",
        pages: 480,
        isbn: "978-957-552-798-5",
        difficulty: "高级",
        importance: "★★★★★",
        description: "以实战案例为主的指导教材",
        keyPoints: [
          "实战技法总论",
          "标准分析流程",
          "实战技巧",
          "案例分析",
          "常见误区"
        ],
        chapters: [
          "第一章：实战技法总论",
          "第二章：分析流程",
          "第三章：实战技巧",
          "第四章：案例分析",
          "第五章：误区解析"
        ],
        features: [
          "实用性强",
          "案例丰富",
          "技法系统化",
          "指导性强"
        ],
        learningAdvice: [
          "掌握实战技巧",
          "多分析案例",
          "避免常见误区"
        ],
        relatedBooks: ["《八字正解》", "《命理精论》"]
      },
      {
        id: 9,
        title: "《沈氏用神例解》",
        author: "梁湘润",
        publisher: "台湾逸品文化出版社",
        year: "2002",
        pages: 420,
        isbn: "978-957-469-523-9",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "专门讲解用神理论的专著",
        keyPoints: [
          "用神实例分析",
          "用神变化规律",
          "用神失误案例",
          "实例验证方法"
        ],
        chapters: [
          "第一章：用神理论回顾",
          "第二章：实例分析",
          "第三章：变化规律",
          "第四章：失误案例",
          "第五章：验证方法"
        ],
        features: [
          "专题性强",
          "实例详细",
          "分析深入",
          "实用性强"
        ],
        learningAdvice: [
          "深入理解用神变化",
          "学习实例分析方法",
          "避免常见错误"
        ],
        relatedBooks: ["《用神精解》", "《命理用神》"]
      },
      {
        id: 10,
        title: "《穷通宝鉴》",
        author: "余春台",
        dynasty: "清代",
        publisher: "华龄出版社",
        year: "2006",
        pages: 380,
        isbn: "978-7-80178-389-1",
        difficulty: "高级",
        importance: "★★★★★",
        description: "调候用神的经典著作",
        keyPoints: [
          "调候总论",
          "四季调候法",
          "调候格言",
          "实用案例"
        ],
        chapters: [
          "卷一：调候总论",
          "卷二：四季调候",
          "卷三：月令调候",
          "卷四：实例应用"
        ],
        features: [
          "调候理论权威",
          "方法独特有效",
          "格言精辟",
          "实用性强"
        ],
        learningAdvice: [
          "理解调候原理",
          "掌握调候方法",
          "注意季节因素"
        ],
        relatedBooks: ["《调候用神》", "《四季调候》"]
      }
    ],

    learningObjectives: [
      "掌握高级格局理论",
      "学习实战技法",
      "精通用神变化",
      "理解调候理论",
      "提升分析能力"
    ],

    learningMethods: [
      "深入研究理论",
      "大量分析案例",
      "掌握实战技巧",
      "验证理论准确性"
    ],

    expectedOutcomes: [
      "达到专业分析水平",
      "能够独立分析复杂案例",
      "形成专业特长"
    ]
  },

  // ==================== 第四阶段：实战技法 (3-4个月) ====================
  stage4: {
    title: "第四阶段：实战技法 (3-4个月)",
    focus: "掌握实战技巧和方法",
    books: [
      {
        id: 11,
        title: "《探索门八字取象秘法》",
        author: "王庆",
        publisher: "台湾武陵出版社",
        year: "2005",
        pages: 450,
        isbn: "978-957-35-1045-7",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "八字取象的专门技法",
        keyPoints: [
          "取象理论基础",
          "取象技法详解",
          "象意解读方法",
          "实战应用技巧"
        ],
        chapters: [
          "第一章：取象理论基础",
          "第二章：取象技法",
          "第三章：象意解读",
          "第四章：实战应用"
        ],
        features: [
          "技法独特",
          "方法实用",
          "解读准确",
          "应用性强"
        ],
        learningAdvice: [
          "理解取象原理",
          "掌握技法要点",
          "多做取象练习"
        ],
        relatedBooks: ["《八字取象》", "《象意解读》"]
      },
      {
        id: 12,
        title: "《命理精论》",
        author: "胡一鸣",
        publisher: "台湾逸品文化出版社",
        year: "2003",
        pages: 520,
        isbn: "978-957-469-534-6",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "命理理论的高级论述",
        keyPoints: [
          "命理哲学思想",
          "高级理论阐述",
          "实战应用指导",
          "理论创新观点"
        ],
        chapters: [
          "上卷：理论阐述",
          "中卷：应用指导",
          "下卷：创新观点"
        ],
        features: [
          "理论深度高",
          "观点独到",
          "论述严密",
          "指导性强"
        ],
        learningAdvice: [
          "深入理解理论",
          "思考创新观点",
          "联系实际应用"
        ],
        relatedBooks: ["《命理哲学》", "《高级命理》"]
      },
      {
        id: 13,
        title: "《点算八字妻财》",
        author: "罗量",
        publisher: "台湾益群书店",
        year: "1997",
        pages: 380,
        isbn: "978-957-552-756-9",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "专门论述妻财的技法",
        keyPoints: [
          "妻财分析技法",
          "婚姻预测方法",
          "财运分析技巧",
          "实例应用"
        ],
        chapters: [
          "第一章：妻财理论基础",
          "第二章：分析技法",
          "第三章：预测方法",
          "第四章：实例应用"
        ],
        features: [
          "专题性强",
          "技法实用",
          "预测准确",
          "案例丰富"
        ],
        learningAdvice: [
          "掌握专门技法",
          "多做专题练习",
          "验证预测准确性"
        ],
        relatedBooks: ["《八字婚姻》", "《八字财运》"]
      },
      {
        id: 14,
        title: "《八字批流年实务》",
        author: "潘东光",
        publisher: "台湾武陵出版社",
        year: "2004",
        pages: 420,
        isbn: "978-957-35-1089-3",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "流年批断的实务指导",
        keyPoints: [
          "流年分析方法",
          "流年应期理论",
          "实务操作技巧",
          "案例分析"
        ],
        chapters: [
          "第一章：流年理论基础",
          "第二章：分析方法",
          "第三章：应期理论",
          "第四章：实务操作"
        ],
        features: [
          "实用性强",
          "操作性强",
          "方法系统",
          "指导明确"
        ],
        learningAdvice: [
          "掌握分析方法",
          "学习应期技巧",
          "多做实务练习"
        ],
        relatedBooks: ["《流年批断》", "《应期理论》"]
      },
      {
        id: 15,
        title: "《命理精解二百例》",
        author: "李月木",
        publisher: "台湾逸品文化出版社",
        year: "2000",
        pages: 680,
        isbn: "978-957-469-545-2",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "大量实例的精解集合",
        keyPoints: [
          "实例分析方法",
          "各类案例解读",
          "实战技巧应用",
          "经验总结"
        ],
        chapters: [
          "上卷：基础案例",
          "中卷：高级案例",
          "下卷：复杂案例"
        ],
        features: [
          "案例丰富",
          "类型全面",
          "分析详细",
          "经验性强"
        ],
        learningAdvice: [
          "广泛阅读案例",
          "总结分析规律",
          "验证理论准确性"
        ],
        relatedBooks: ["《命理案例集》", "《八字实例》"]
      }
    ],

    learningObjectives: [
      "掌握实战技法",
      "学会专门分析技巧",
      "提升分析准确性",
      "积累实战经验"
    ],

    learningMethods: [
      "大量分析案例",
      "掌握专门技法",
      "验证分析结果",
      "总结实战经验"
    ],

    expectedOutcomes: [
      "具备实战分析能力",
      "能够准确预测",
      "形成个人分析特色",
      "达到专业应用水平"
    ]
  },

  // ==================== 第五阶段：专题研究 (2-3个月) ====================
  stage5: {
    title: "第五阶段：专题研究 (2-3个月)",
    focus: "深入研究特定领域",
    books: [
      {
        id: 16,
        title: "《十神含义阐微》",
        author: "杨逸云",
        publisher: "台湾武陵出版社",
        year: "2006",
        pages: 380,
        isbn: "978-957-35-1123-6",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "十神理论的深入研究",
        keyPoints: [
          "十神含义详细阐述",
          "十神关系分析",
          "十神应用技巧",
          "十神变化规律"
        ],
        chapters: [
          "第一章：十神总论",
          "第二章：十神详解",
          "第三章：十神关系",
          "第四章：应用技巧"
        ],
        features: [
          "专题研究深入",
          "理论阐述详细",
          "分析透彻",
          "实用性强"
        ],
        learningAdvice: [
          "深入理解十神",
          "掌握变化规律",
          "多做专题分析"
        ],
        relatedBooks: ["《十神详解》", "《十神应用》"]
      },
      {
        id: 17,
        title: "《神煞探源》",
        author: "梁湘润",
        publisher: "台湾逸品文化出版社",
        year: "2004",
        pages: 420,
        isbn: "978-957-469-556-7",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "神煞系统的溯源研究",
        keyPoints: [
          "神煞历史渊源",
          "神煞理论基础",
          "神煞分类体系",
          "神煞应用方法"
        ],
        chapters: [
          "第一章：神煞溯源",
          "第二章：理论基础",
          "第三章：分类体系",
          "第四章：应用方法"
        ],
        features: [
          "史料丰富",
          "考证详实",
          "系统性强",
          "权威性高"
        ],
        learningAdvice: [
          "理解神煞本质",
          "掌握应用方法",
          "注意历史背景"
        ],
        relatedBooks: ["《神煞大全》", "《神煞应用》"]
      },
      {
        id: 18,
        title: "《干支易象学》",
        author: "贺云飞",
        publisher: "台湾武陵出版社",
        year: "2007",
        pages: 460,
        isbn: "978-957-35-1156-8",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "干支与易象的结合研究",
        keyPoints: [
          "干支易象理论",
          "易象解读方法",
          "干支易象应用",
          "实例分析"
        ],
        chapters: [
          "第一章：理论基础",
          "第二章：易象解读",
          "第三章：应用方法",
          "第四章：实例分析"
        ],
        features: [
          "理论独特",
          "方法创新",
          "应用性强",
          "视角新颖"
        ],
        learningAdvice: [
          "理解理论基础",
          "掌握解读方法",
          "多做练习"
        ],
        relatedBooks: ["《易象学》", "《干支易象》"]
      },
      {
        id: 19,
        title: "《四柱预测例题剖析》",
        author: "邵伟中",
        publisher: "中国民间文艺出版社",
        year: "1995",
        pages: 520,
        isbn: "978-7-5039-1467-2",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "预测例题的深度剖析",
        keyPoints: [
          "例题分析方法",
          "预测技巧应用",
          "错误案例剖析",
          "经验总结"
        ],
        chapters: [
          "第一章：基础例题",
          "第二章：高级例题",
          "第三章：错误剖析",
          "第四章：经验总结"
        ],
        features: [
          "案例典型",
          "分析深入",
          "实用性强",
          "指导性好"
        ],
        learningAdvice: [
          "仔细分析例题",
          "总结预测技巧",
          "避免常见错误"
        ],
        relatedBooks: ["《预测例题》", "《预测技巧》"]
      }
    ],

    learningObjectives: [
      "深入掌握专题理论",
      "形成专业特长",
      "提升研究能力",
      "创新理论观点"
    ],

    learningMethods: [
      "专题深入研究",
      "大量实例验证",
      "创新理论观点",
      "形成个人特色"
    ],

    expectedOutcomes: [
      "具备专业特长",
      "能够进行专题研究",
      "形成理论创新"
    ]
  },

  // ==================== 第六阶段：高阶哲学 (3-4个月) ====================
  stage6: {
    title: "第六阶段：高阶哲学 (3-4个月)",
    focus: "学习命理哲学思想",
    books: [
      {
        id: 20,
        title: "《滴天髓》",
        author: "任铁樵",
        dynasty: "清代",
        publisher: "华龄出版社",
        year: "2008",
        pages: 560,
        isbn: "978-7-80178-545-6",
        difficulty: "顶级",
        importance: "★★★★★",
        description: "命理哲学的最高经典",
        keyPoints: [
          "命理哲学思想",
          "高级理论阐述",
          "哲学思维方法",
          "人生指导智慧"
        ],
        chapters: [
          "上卷：通神论",
          "中卷：六亲论",
          "下卷：妇人玄机",
          "附卷：看命口诀"
        ],
        features: [
          "哲学深度最高",
          "理论境界最深",
          "文字精辟",
          "指导意义深远"
        ],
        learningAdvice: [
          "反复研读原文",
          "理解哲学思想",
          "联系人生实际"
        ],
        relatedBooks: ["《滴天髓补注》", "《滴天髓阐微》"]
      },
      {
        id: 21,
        title: "《滴天髓补注》",
        author: "徐乐吾",
        dynasty: "民国",
        publisher: "华龄出版社",
        year: "2009",
        pages: 680,
        isbn: "978-7-80178-567-8",
        difficulty: "顶级",
        importance: "★★★★★",
        description: "对《滴天髓》的经典注释",
        keyPoints: [
          "原文详细注解",
          "理论深入阐释",
          "实例补充说明",
          "哲学思想发挥"
        ],
        chapters: [
          "卷一：通神论补注",
          "卷二：六亲论补注",
          "卷三：妇人玄机补注",
          "卷四：附录补注"
        ],
        features: [
          "注释权威",
          "阐述详尽",
          "理论深入",
          "理解透彻"
        ],
        learningAdvice: [
          "对照原文学习",
          "理解注释要义",
          "深入思考"
        ],
        relatedBooks: ["《滴天髓》", "《滴天髓阐微》"]
      },
      {
        id: 22,
        title: "《八字易象与哲学思维》",
        author: "何丽野",
        publisher: "中华书局",
        year: "2005",
        pages: 420,
        isbn: "978-7-101-04678-9",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "八字与哲学思维的结合",
        keyPoints: [
          "易象理论基础",
          "哲学思维方法",
          "八字哲学意义",
          "现代哲学思考"
        ],
        chapters: [
          "第一章：易象理论",
          "第二章：哲学思维",
          "第三章：八字哲学",
          "第四章：现代思考"
        ],
        features: [
          "理论创新",
          "视角独特",
          "思考深入",
          "现实性强"
        ],
        learningAdvice: [
          "理解哲学概念",
          "思考理论意义",
          "联系现代社会"
        ],
        relatedBooks: ["《八字哲学》", "《易象哲学》"]
      },
      {
        id: 23,
        title: "《中国古代算命术》",
        author: "洪丕谟",
        publisher: "上海古籍出版社",
        year: "2006",
        pages: 380,
        isbn: "978-7-5325-4456-2",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "算命术的历史文化研究",
        keyPoints: [
          "历史文化背景",
          "算命术发展",
          "文化意义",
          "现代价值"
        ],
        chapters: [
          "第一章：历史渊源",
          "第二章：发展历程",
          "第三章：文化内涵",
          "第四章：现代价值"
        ],
        features: [
          "史料丰富",
          "考证详实",
          "文化性强",
          "视野开阔"
        ],
        learningAdvice: [
          "了解历史文化",
          "理解发展脉络",
          "思考现代意义"
        ],
        relatedBooks: ["《算命术史》", "《命理文化》"]
      }
    ],

    learningObjectives: [
      "理解命理哲学思想",
      "提升理论高度",
      "建立哲学思维",
      "达到理论精通"
    ],

    learningMethods: [
      "深入研读经典",
      "理解哲学思想",
      "联系人生实际",
      "提升思维层次"
    ],

    expectedOutcomes: [
      "达到理论精通水平",
      "建立哲学思维体系",
      "具备理论创新能力"
    ]
  },

  // ==================== 第七阶段：博览融通 (长期) ====================
  stage7: {
    title: "第七阶段：博览融通 (长期)",
    focus: "广泛阅读融会贯通",
    books: [
      {
        id: 24,
        title: "《三命通会》",
        author: "万民英",
        dynasty: "明代",
        publisher: "华龄出版社",
        year: "2010",
        pages: 1200,
        isbn: "978-7-80178-589-0",
        difficulty: "顶级",
        importance: "★★★★★",
        description: "命理学的集大成之作",
        keyPoints: [
          "命理学总集",
          "理论体系完整",
          "方法全面系统",
          "案例丰富详实"
        ],
        chapters: [
          "卷一：总论",
          "卷二：十神论",
          "卷三：格局论",
          "卷四：神煞论",
          "卷五：实例集"
        ],
        features: [
          "内容最为全面",
          "体系最为完整",
          "权威性最高",
          "实用价值最大"
        ],
        learningAdvice: [
          "长期反复研读",
          "全面掌握体系",
          "融会贯通"
        ],
        relatedBooks: ["《三命通会注解》", "《三命通会详解》"]
      },
      {
        id: 25,
        title: "《命理探源》",
        author: "袁树珊",
        dynasty: "民国",
        publisher: "华龄出版社",
        year: "2011",
        pages: 680,
        isbn: "978-7-80178-590-6",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "命理学的溯源研究",
        keyPoints: [
          "理论溯源",
          "历史考证",
          "文化传承",
          "现代发展"
        ],
        chapters: [
          "卷一：源流考证",
          "卷二：理论探源",
          "卷三：传承发展",
          "卷四：现代应用"
        ],
        features: [
          "史料丰富",
          "考证严谨",
          "学术性强",
          "价值重大"
        ],
        learningAdvice: [
          "了解历史源流",
          "理解理论传承",
          "思考现代价值"
        ],
        relatedBooks: ["《命理学史》", "《命理传承》"]
      },
      {
        id: 26,
        title: "《穷通宝鉴栏江网评注》",
        author: "梁湘润",
        publisher: "台湾逸品文化出版社",
        year: "2008",
        pages: 520,
        isbn: "978-957-469-578-1",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "对《穷通宝鉴》和《栏江网》的综合评注",
        keyPoints: [
          "调候理论深入",
          "栏江网理论",
          "综合评注",
          "现代应用"
        ],
        chapters: [
          "卷一：穷通宝鉴评注",
          "卷二：栏江网评注",
          "卷三：综合应用",
          "卷四：现代诠释"
        ],
        features: [
          "理论深入",
          "评注权威",
          "应用性强",
          "价值重大"
        ],
        learningAdvice: [
          "深入理解理论",
          "掌握应用方法",
          "综合学习"
        ],
        relatedBooks: ["《穷通宝鉴》", "《栏江网》"]
      },
      {
        id: 27,
        title: "《命理约言》",
        author: "陈素庵",
        dynasty: "清代",
        publisher: "华龄出版社",
        year: "2012",
        pages: 380,
        isbn: "978-7-80178-601-2",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "命理学的精华概述",
        keyPoints: [
          "理论精华",
          "要点概括",
          "实用指导",
          "心得体会"
        ],
        chapters: [
          "卷一：理论纲要",
          "卷二：方法要领",
          "卷三：实用指导",
          "卷四：心得总结"
        ],
        features: [
          "精辟简练",
          "要点突出",
          "实用性强",
          "指导性好"
        ],
        learningAdvice: [
          "掌握理论要点",
          "理解实践要领",
          "总结学习心得"
        ],
        relatedBooks: ["《命理纲要》", "《命理要领》"]
      },
      {
        id: 28,
        title: "《唐宋时期命理文献初探》",
        author: "刘国忠",
        publisher: "中华书局",
        year: "2009",
        pages: 420,
        isbn: "978-7-101-06789-1",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "唐宋时期命理文献的研究",
        keyPoints: [
          "历史文献",
          "发展脉络",
          "文化背景",
          "学术价值"
        ],
        chapters: [
          "第一章：唐文献",
          "第二章：宋文献",
          "第三章：发展脉络",
          "第四章：学术价值"
        ],
        features: [
          "史料珍贵",
          "研究深入",
          "学术性强",
          "价值重大"
        ],
        learningAdvice: [
          "了解历史发展",
          "理解文献价值",
          "提升学术素养"
        ],
        relatedBooks: ["《命理文献史》", "《唐宋命理》"]
      },
      {
        id: 29,
        title: "《子平正解》",
        author: "徐伟刚",
        publisher: "台湾益群书店",
        year: "2003",
        pages: 560,
        isbn: "978-957-552-801-6",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "子平术的正解论述",
        keyPoints: [
          "子平术理论",
          "正解方法",
          "应用技巧",
          "实例验证"
        ],
        chapters: [
          "上卷：理论正解",
          "中卷：方法正解",
          "下卷：应用正解"
        ],
        features: [
          "理论权威",
          "方法正确",
          "应用有效",
          "指导性强"
        ],
        learningAdvice: [
          "掌握正统理论",
          "学习正确方法",
          "验证应用效果"
        ],
        relatedBooks: ["《子平术》", "《命理正宗》"]
      },
      {
        id: 30,
        title: "《点算八字子禄》",
        author: "罗量",
        publisher: "台湾益群书店",
        year: "2000",
        pages: 380,
        isbn: "978-957-552-756-8",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "子禄的专门论述",
        keyPoints: [
          "子禄理论基础",
          "子禄分析方法",
          "子禄应用技巧",
          "实例应用"
        ],
        chapters: [
          "第一章：理论基础",
          "第二章：分析方法",
          "第三章：应用技巧",
          "第四章：实例应用"
        ],
        features: [
          "专题性强",
          "技法独特",
          "应用有效",
          "实用性强"
        ],
        learningAdvice: [
          "掌握专门技法",
          "多做专项练习",
          "验证应用效果"
        ],
        relatedBooks: ["《子禄详解》", "《八字子禄》"]
      },
      {
        id: 31,
        title: "《八字实战秘法公开》",
        author: "王庆",
        publisher: "台湾武陵出版社",
        year: "2008",
        pages: 450,
        isbn: "978-957-35-1234-9",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "实战秘法的公开论述",
        keyPoints: [
          "实战技法详解",
          "秘法公开",
          "应用技巧",
          "实例验证"
        ],
        chapters: [
          "第一章：技法揭秘",
          "第二章：秘法详解",
          "第三章：应用技巧",
          "第四章：实例验证"
        ],
        features: [
          "技法独特",
          "秘法真实",
          "应用有效",
          "价值重大"
        ],
        learningAdvice: [
          "掌握核心技法",
          "验证实际效果",
          "融会贯通"
        ],
        relatedBooks: ["《八字技法》", "《命理秘法》"]
      },
      {
        id: 32,
        title: "《星平会海》",
        author: "月金山人",
        dynasty: "明代",
        publisher: "华龄出版社",
        year: "2013",
        pages: 780,
        isbn: "978-7-80178-612-3",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "星命与平命的会通论述",
        keyPoints: [
          "星命理论",
          "平命方法",
          "会通技巧",
          "综合应用"
        ],
        chapters: [
          "卷一：星命论",
          "卷二：平命论",
          "卷三：会通法",
          "卷四：应用篇"
        ],
        features: [
          "理论独特",
          "方法综合",
          "应用全面",
          "价值重大"
        ],
        learningAdvice: [
          "理解星命理论",
          "掌握平命方法",
          "学会会通技巧"
        ],
        relatedBooks: ["《星命学》", "《平命术》"]
      },
      {
        id: 33,
        title: "《神峰通考》",
        author: "张楠",
        dynasty: "明代",
        publisher: "华龄出版社",
        year: "2014",
        pages: 620,
        isbn: "978-7-80178-623-4",
        difficulty: "高级",
        importance: "★★★☆☆",
        description: "神峰命理的通考论述",
        keyPoints: [
          "神峰理论",
          "通考方法",
          "应用技巧",
          "验证实例"
        ],
        chapters: [
          "卷一：神峰论",
          "卷二：通考法",
          "卷三：应用篇",
          "卷四：验证篇"
        ],
        features: [
          "理论独特",
          "方法系统",
          "应用有效",
          "价值重要"
        ],
        learningAdvice: [
          "理解神峰理论",
          "掌握通考方法",
          "验证应用效果"
        ],
        relatedBooks: ["《神峰命理》", "《通考学》"]
      }
    ],

    learningObjectives: [
      "融会贯通各家理论",
      "形成完整知识体系",
      "达到大师水准",
      "能够传承发展"
    ],

    learningMethods: [
      "广泛阅读经典",
      "对比研究各家",
      "融会贯通",
      "创新发展"
    ],

    expectedOutcomes: [
      "成为命理专家",
      "具备传承能力",
      "能够创新发展",
      "达到大师水准"
    ]
  },

  // ==================== 书籍索引系统 ====================
  bookIndex: {
    // 按作者索引
    byAuthor: function() {
      const index = {};

      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            const author = book.author;
            if (!index[author]) {
              index[author] = [];
            }
            index[author].push({
              id: book.id,
              title: book.title,
              stage: stage.title,
              difficulty: book.difficulty
            });
          });
        }
      });

      return index;
    },

    // 按难度索引
    byDifficulty: function() {
      const index = {
        '初级': [],
        '中级': [],
        '高级': [],
        '顶级': []
      };

      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            index[book.difficulty].push({
              id: book.id,
              title: book.title,
              author: book.author,
              stage: stage.title
            });
          });
        }
      });

      return index;
    },

    // 按重要性索引
    byImportance: function() {
      const books = [];

      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            books.push({
              id: book.id,
              title: book.title,
              author: book.author,
              stage: stage.title,
              importance: book.importance,
              difficulty: book.difficulty
            });
          });
        }
      });

      // 按重要性排序
      books.sort((a, b) => {
        const importanceOrder = {
          '★★★★★': 4,
          '★★★★☆': 3,
          '★★★☆☆': 2,
          '★★☆☆☆': 1
        };
        return importanceOrder[b.importance] - importanceOrder[a.importance];
      });

      return books;
    },

    // 按主题索引
    byTopic: function() {
      const topics = {
        '基础理论': [],
        '格局理论': [],
        '用神理论': [],
        '神煞理论': [],
        '实战技法': [],
        '专题研究': [],
        '哲学思想': [],
        '历史文化': []
      };

      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            // 根据书籍描述和标题判断主题
            if (book.title.includes('基础') || book.title.includes('入门')) {
              topics['基础理论'].push(book);
            } else if (book.title.includes('格局') || book.title.includes('正解')) {
              topics['格局理论'].push(book);
            } else if (book.title.includes('用神') || book.title.includes('穷通宝鉴')) {
              topics['用神理论'].push(book);
            } else if (book.title.includes('神煞')) {
              topics['神煞理论'].push(book);
            } else if (book.title.includes('实战') || book.title.includes('技法')) {
              topics['实战技法'].push(book);
            } else if (book.title.includes('十神') || book.title.includes('专题')) {
              topics['专题研究'].push(book);
            } else if (book.title.includes('滴天髓') || book.title.includes('哲学')) {
              topics['哲学思想'].push(book);
            } else if (book.title.includes('历史') || book.title.includes('探源')) {
              topics['历史文化'].push(book);
            } else {
              // 根据阶段判断主题
              if (stageId <= 2) {
                topics['基础理论'].push(book);
              } else if (stageId === 3) {
                topics['格局理论'].push(book);
              } else if (stageId === 4) {
                topics['实战技法'].push(book);
              } else if (stageId === 5) {
                topics['专题研究'].push(book);
              } else if (stageId === 6) {
                topics['哲学思想'].push(book);
              } else {
                topics['历史文化'].push(book);
              }
            }
          });
        }
      });

      return topics;
    },

    // 搜索功能
    search: function(keyword) {
      const results = [];

      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            // 搜索标题、作者、描述
            const searchFields = [
              book.title,
              book.author,
              book.description,
              book.keyPoints ? book.keyPoints.join(' ') : '',
              book.chapters ? book.chapters.map(c => c.title).join(' ') : ''
            ].join(' ').toLowerCase();

            if (searchFields.includes(keyword.toLowerCase())) {
              results.push({
                id: book.id,
                title: book.title,
                author: book.author,
                stage: stage.title,
                difficulty: book.difficulty,
                importance: book.importance,
                matchType: this.getMatchType(book, keyword)
              });
            }
          });
        }
      });

      return results;
    },

    // 获取匹配类型
    getMatchType: function(book, keyword) {
      keyword = keyword.toLowerCase();

      if (book.title.toLowerCase().includes(keyword)) {
        return '标题匹配';
      } else if (book.author.toLowerCase().includes(keyword)) {
        return '作者匹配';
      } else if (book.description.toLowerCase().includes(keyword)) {
        return '描述匹配';
      } else {
        return '内容匹配';
      }
    },

    // 获取书籍详情
    getBookDetails: function(bookId) {
      // 遍历所有书籍
      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          const book = stage.books.find(b => b.id === bookId);
          if (book) {
            return {
              ...book,
              stage: stage.title,
              stageId: stageId
            };
          }
        }
      });

      return null;
    },

    // 获取推荐书籍
    getRecommendedBooks: function(userLevel, interests) {
      const recommendations = [];

      // 根据用户水平推荐
      let targetStages = [];
      if (userLevel === 'beginner') {
        targetStages = [1, 2];
      } else if (userLevel === 'intermediate') {
        targetStages = [2, 3, 4];
      } else if (userLevel === 'advanced') {
        targetStages = [3, 4, 5];
      } else {
        targetStages = [4, 5, 6, 7];
      }

      // 从目标阶段中选择重要书籍
      targetStages.forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            if (book.importance === '★★★★★') {
              recommendations.push({
                ...book,
                stage: stage.title,
                reason: '重要经典，强烈推荐'
              });
            }
          });
        }
      });

      return recommendations;
    },

    // 生成学习计划
    generateStudyPlan: function(duration, focusAreas) {
      const plan = {
        duration: duration,
        focusAreas: focusAreas,
        schedule: [],
        totalBooks: 0,
        estimatedTime: 0
      };

      // 根据时长和重点领域生成学习计划
      const months = duration; // 假设以月为单位
      const booksPerMonth = Math.ceil(33 / months);

      // 简化实现：按顺序安排书籍
      let currentMonth = 1;
      let bookCount = 0;

      [1, 2, 3, 4, 5, 6, 7].forEach(stageId => {
        const stage = this[`stage${stageId}`];
        if (stage && stage.books) {
          stage.books.forEach(book => {
            if (bookCount < booksPerMonth * currentMonth) {
              if (!plan.schedule[currentMonth]) {
                plan.schedule[currentMonth] = [];
              }
              plan.schedule[currentMonth].push({
                ...book,
                stage: stage.title
              });
              bookCount++;
            } else {
              currentMonth++;
              if (currentMonth <= months) {
                if (!plan.schedule[currentMonth]) {
                  plan.schedule[currentMonth] = [];
                }
                plan.schedule[currentMonth].push({
                  ...book,
                  stage: stage.title
                });
                bookCount++;
              }
            }
          });
        }
      });

      plan.totalBooks = bookCount;
      plan.estimatedTime = months;

      return plan;
    }
  }
};

module.exports = bookListDatabase;

/**
 * 使用示例：
 *
 * const bookList = require('./book-list-database');
 *
 * // 获取完整学习体系
 * const system = bookList.learningSystem;
 *
 * // 获取第一阶段的书籍
 * const stage1Books = bookList.stage1.books;
 *
 * // 按作者索引
 * const authorIndex = bookList.bookIndex.byAuthor();
 *
 * // 搜索书籍
 * const searchResults = bookList.bookIndex.search('格局');
 *
 * // 获取推荐书籍
 * const recommendations = bookList.bookIndex.getRecommendedBooks('beginner', ['格局', '用神']);
 *
 * // 生成学习计划
 * const studyPlan = bookList.bookIndex.generateStudyPlan(12, ['格局', '用神']);
 */