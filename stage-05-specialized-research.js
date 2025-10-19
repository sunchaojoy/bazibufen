// 第五阶段专题研究学习内容
// 包含《十神含义阐微》《神煞探源》《干支易象学》《四柱预测例题剖析》《八字用神精解》
// 作者：AI助手
// 创建时间：2024年

const stage05SpecializedResearch = {
    // 第五阶段学习概况
    stageInfo: {
        stage: 5,
        name: "专题研究学习",
        duration: "2-3个月",
        description: "专攻特定领域的深度研究，建立专业化知识体系",
        books: [
            {
                id: 17,
                title: "《十神含义阐微》",
                author: "杨逸云",
                focus: "十神系统的深度解析",
                difficulty: "高",
                keyPoints: ["十神深层含义", "十神组合应用", "十神变化规律"]
            },
            {
                id: 18,
                title: "《神煞探源》",
                author: "梁湘润",
                focus: "神煞系统的溯源研究",
                difficulty: "高",
                keyPoints: ["神煞源流", "神煞分类", "神煞应用方法"]
            },
            {
                id: 19,
                title: "《干支易象学》",
                author: "贺云飞",
                focus: "干支易象的专题研究",
                difficulty: "高",
                keyPoints: ["干支易象", "象数结合", "易理应用"]
            },
            {
                id: 20,
                title: "《四柱预测例题剖析》",
                author: "邵伟中",
                focus: "四柱预测的案例剖析",
                difficulty: "中高",
                keyPoints: ["案例分析法", "预测技巧", "实例验证"]
            },
            {
                id: 21,
                title: "《八字用神精解》",
                author: "李顺祥",
                focus: "用神理论的精解",
                difficulty: "高",
                keyPoints: ["用神精解", "用神变化", "用神应用"]
            }
        ],
        learningGoals: [
            "深度掌握十神系统的理论和应用",
            "全面理解神煞系统的源流和使用",
            "学习干支易象的理论和方法",
            "掌握案例分析和预测技巧",
            "精通用神理论的高级应用"
        ]
    },

    // 《十神含义阐微》- 杨逸云
    shiShenHanWeiStudy: {
        bookInfo: {
            title: "《十神含义阐微》",
            author: "杨逸云",
            focus: "十神系统的深度解析",
            approach: "从根源上深入理解十神，揭示其内在含义和应用规律"
        },

        // 十神深层含义解析
        shiShenDeepMeaning: {
            // 比肩深层含义
            biJian: {
                surfaceMeaning: "兄弟、朋友、同事、竞争者",
                deepMeaning: {
                    essence: "自我投射和独立意志",
                    psychological: "自我意识的外在体现，代表个体的独立性、自主性和竞争意识",
                    social: "社会关系中的平等关系，同辈关系、合作关系、竞争关系",
                    philosophical: "阴阳平衡中的同性相斥相吸，代表同质能量的互动",
                    spiritual: "自我认知和自我实现的过程"
                },
                applicationLevels: {
                    basic: "判断人际关系的性质和质量",
                    intermediate: "分析个体的性格特征和行为模式",
                    advanced: "理解人生轨迹中的自我实现过程",
                    expert: "把握个体在社会关系中的定位和作用"
                },
                variationPatterns: {
                    strong: "独立性强，有主见，善于竞争，但可能固执",
                    weak: "独立性较弱，易受他人影响，需要他人支持",
                    balanced: "独立与合作并重，善于处理人际关系"
                },
                combinationAnalysis: {
                    withZhengCai: "合作求财，通过合作获得财富",
                    withQiSha: "竞争中有权力，通过竞争获得地位",
                    withShangGuan: "独立创新，通过创新实现价值",
                    withZhengYin: "独立学习，通过自学获得知识"
                }
            },

            // 劫财深层含义
            jieCai: {
                surfaceMeaning: "争夺者、投机者、花费者",
                deepMeaning: {
                    essence: "资源争夺和能量消耗",
                    psychological: "外向型的资源获取欲望，代表冒险精神和消费倾向",
                    social: "社会资源分配中的竞争关系，零和博弈",
                    philosophical: "阴阳转化中的消长关系，代表能量的流动和转换",
                    spiritual: "通过外界互动实现自我价值的过程"
                },
                applicationLevels: {
                    basic: "判断财富得失和投资倾向",
                    intermediate: "分析个体的风险偏好和消费模式",
                    advanced: "理解财富流动的规律和时机",
                    expert: "把握社会资源分配的机会和风险"
                },
                variationPatterns: {
                    strong: "冒险精神强，消费欲望大，善于把握机会",
                    weak: "冒险精神弱，消费谨慎，错失机会",
                    balanced: "适度冒险，理性消费，把握机会"
                },
                combinationAnalysis: {
                    withShiGuan: "冒险求官，通过冒险获得地位",
                    withPianCai: "投机得财，通过投机获得财富",
                    withShiShen: "投机创新，通过创新获得机会",
                    withPianYin: "投机学习，通过投机获得知识"
                }
            },

            // 正官深层含义
            shiGuan: {
                surfaceMeaning: "官职、地位、约束、责任",
                deepMeaning: {
                    essence: "秩序建立和社会责任",
                    psychological: "超我的外在体现，代表道德感、责任感和秩序意识",
                    social: "社会秩序的维护者，代表制度、规则和权威",
                    philosophical: "天人合一中的秩序和谐，代表宇宙法则的体现",
                    spiritual: "通过服务社会实现精神升华的过程"
                },
                applicationLevels: {
                    basic: "判断事业发展和地位获得",
                    intermediate: "分析个体的责任感和道德品质",
                    advanced: "理解社会秩序和制度的作用",
                    expert: "把握个体在社会结构中的功能和作用"
                },
                variationPatterns: {
                    strong: "责任感强，有领导力，善于管理",
                    weak: "责任感弱，缺乏领导力，需要他人指导",
                    balanced: "适度责任，善于合作，能够领导"
                },
                combinationAnalysis: {
                    withZhengYin: "官印相生，通过知识获得地位",
                    withZhengCai: "官财相生，通过财富获得地位",
                    withShaSha: "官杀混杂，权力与压力并存",
                    withShangGuan: "伤官见官，才华与权威冲突"
                }
            },

            // 七杀深层含义
            qiSha: {
                surfaceMeaning: "权力、威严、压力、挑战",
                deepMeaning: {
                    essence: "力量制衡和压力转化",
                    psychological: "本我冲动的约束力量，代表野心、权力欲和抗压能力",
                    social: "社会变革的推动者，代表权力、权威和变革",
                    philosophical: "阴阳对立中的转化关系，代表压力转化为动力的过程",
                    spiritual: "通过克服困难实现精神超越的过程"
                },
                applicationLevels: {
                    basic: "判断权力获得和压力承受",
                    intermediate: "分析个体的野心和抗压能力",
                    advanced: "理解权力运作的规律和压力转化",
                    expert: "把握社会变革的时机和方式"
                },
                variationPatterns: {
                    strong: "野心大，权力欲强，抗压能力好",
                    weak: "野心小，权力欲弱，抗压能力差",
                    balanced: "适度野心，善于用权，能够抗压"
                },
                combinationAnalysis: {
                    withPianYin: "杀印相生，压力转化为动力",
                    withShiShen: "食神制杀，以智慧驾驭权力",
                    withZhengCai: "财生杀旺，财富支持权力",
                    withBiJian: "比肩抗杀，朋友帮助抗压力"
                }
            },

            // 正财深层含义
            zhengCai: {
                surfaceMeaning: "财富、财产、稳定收入",
                deepMeaning: {
                    essence: "价值创造和资源积累",
                    psychological: "安全感的物质基础，代表稳定、保守和实用主义",
                    social: "社会经济秩序的稳定器，代表价值交换和资源分配",
                    philosophical: "阴阳和谐中的平衡关系，代表物质与精神的平衡",
                    spiritual: "通过物质积累实现精神满足的过程"
                },
                applicationLevels: {
                    basic: "判断财富获得和稳定程度",
                    intermediate: "分析个体的价值观和消费观",
                    advanced: "理解价值创造和财富积累的规律",
                    expert: "把握经济运行的规律和财富分配"
                },
                variationPatterns: {
                    strong: "财富观念强，善于理财，追求稳定",
                    weak: "财富观念弱，理财能力差，需要帮助",
                    balanced: "适度理财，善于积累，追求平衡"
                },
                combinationAnalysis: {
                    withShiGuan: "财官相生，财富支持地位",
                    withBiJian: "比肩争财，合作与竞争并存",
                    withShangGuan: "伤官生财，才华创造财富",
                    withShaSha: "财生杀旺，财富支持权力"
                }
            },

            // 偏财深层含义
            pianCai: {
                surfaceMeaning: "意外之财、投机收益、流动财富",
                deepMeaning: {
                    essence: "机遇把握和资源流动",
                    psychological: "外向型的财富获取能力，代表机敏、适应和机遇意识",
                    social: "社会资源流动的催化剂，代表机遇、变化和创新",
                    philosophical: "阴阳变化中的机遇关系，代表变化中的恒定",
                    spiritual: "通过把握机遇实现价值提升的过程"
                },
                applicationLevels: {
                    basic: "判断意外财获得和投机能力",
                    intermediate: "分析个体的机敏性和适应能力",
                    advanced: "理解机遇把握和资源流动的规律",
                    expert: "把握社会变化的趋势和机遇"
                },
                variationPatterns: {
                    strong: "机敏性强，善于把握机遇，适应性好",
                    weak: "机敏性弱，错失机遇，适应力差",
                    balanced: "适度机敏，善于应变，能够把握机遇"
                },
                combinationAnalysis: {
                    withShiShen: "食神生财，才华创造机遇",
                    withJieCai: "劫财夺财，机遇与风险并存",
                    withZhengYin: "偏财生印，机遇支持学习",
                    withShaSha: "财生杀弱，机遇有限"
                }
            },

            // 正印深层含义
            zhengYin: {
                surfaceMeaning: "母亲、学习、知识、保护",
                deepMeaning: {
                    essence: "知识传承和保护滋养",
                    psychological: "安全感的情感基础，代表学习、理解和保护欲",
                    social: "文化传承的载体，代表教育、知识和保护",
                    philosophical: "生生不息中的传承关系，代表文明的延续",
                    spiritual: "通过学习传承实现精神成长的过程"
                },
                applicationLevels: {
                    basic: "判断学习能力和保护获得",
                    intermediate: "分析个体的学习态度和保护欲",
                    advanced: "理解知识传承和文明延续的规律",
                    expert: "把握文化发展的方向和教育的作用"
                },
                variationPatterns: {
                    strong: "学习能力强，保护欲强，善于理解",
                    weak: "学习能力弱，保护欲弱，需要帮助",
                    balanced: "适度学习，善于保护，能够理解"
                },
                combinationAnalysis: {
                    withShiGuan: "官印相生，知识支持地位",
                    withShaSha: "杀印相生，压力转化为学习动力",
                    withPianCai: "偏财生印，机遇支持学习",
                    withJieCai: "劫财夺印，合作与竞争学习"
                }
            },

            // 偏印深层含义
            pianYin: {
                surfaceMeaning: "非传统知识、专业技能、直觉",
                deepMeaning: {
                    essence: "创新思维和独特视角",
                    psychological: "创造性的思维能力，代表直觉、创新和独特见解",
                    social: "文化创新的推动者，代表新思想、新方法",
                    philosophical: "阴阳转化中的创新关系，代表传统与创新的结合",
                    spiritual: "通过创新思维实现精神突破的过程"
                },
                applicationLevels: {
                    basic: "判断创新能力和专业技能",
                    intermediate: "分析个体的思维方式和学习特点",
                    advanced: "理解创新思维和技能掌握的规律",
                    expert: "把握文化创新的方向和方法"
                },
                variationPatterns: {
                    strong: "创新能力强，善于学习技能，直觉敏锐",
                    weak: "创新能力弱，技能学习差，直觉迟钝",
                    balanced: "适度创新，善于学习，直觉良好"
                },
                combinationAnalysis: {
                    withShaSha: "杀印相生，压力激发创新",
                    withBiJian: "比肩争印，合作创新学习",
                    withShiShen: "食神制印，创新约束平衡",
                    withZhengCai: "财克印弱，物质限制创新"
                }
            },

            // 食神深层含义
            shiShen: {
                surfaceMeaning: "才华、表达、艺术、享受",
                deepMeaning: {
                    essence: "才华展现和生活享受",
                    psychological: "自我表达的欲望，代表才华、艺术和生活品味",
                    social: "文化艺术的创造者，代表美、艺术和享受",
                    philosophical: "阴阳和谐中的享受关系，代表物质与精神的统一",
                    spiritual: "通过艺术创作实现精神愉悦的过程"
                },
                applicationLevels: {
                    basic: "判断才华发挥和生活享受",
                    intermediate: "分析个体的艺术天性和生活态度",
                    advanced: "理解艺术创作和生活享受的规律",
                    expert: "把握文化发展的方向和生活品味"
                },
                variationPatterns: {
                    strong: "才华横溢，善于表达，懂得享受",
                    weak: "才华有限，表达困难，缺乏享受",
                    balanced: "适度才华，善于表达，能够享受"
                },
                combinationAnalysis: {
                    withPianCai: "食神生财，才华创造财富",
                    withShaSha: "食神制杀，才华驾驭权力",
                    withBiJian: "比肩争食，合作发挥才华",
                    withZhengYin: "食神制印，才华约束知识"
                }
            },

            // 伤官深层含义
            shangGuan: {
                surfaceMeaning: "智慧、叛逆、创新、技术",
                deepMeaning: {
                    essence: "智慧创新和制度挑战",
                    psychological: "超前的思维能力，代表智慧、创新和叛逆精神",
                    social: "社会变革的思考者，代表新思想、新技术",
                    philosophical: "阴阳对立中的创新关系，代表对传统的突破",
                    spiritual: "通过智慧创新实现精神超越的过程"
                },
                applicationLevels: {
                    basic: "判断智慧发挥和创新能力",
                    intermediate: "分析个体的思维方式和创新意识",
                    advanced: "理解智慧创新和社会变革的规律",
                    expert: "把握技术发展的方向和社会变革"
                },
                variationPatterns: {
                    strong: "智慧超群，创新能力强，善于技术",
                    weak: "智慧有限，创新能力弱，技术差",
                    balanced: "适度智慧，善于创新，掌握技术"
                },
                combinationAnalysis: {
                    withZhengCai: "伤官生财，智慧创造财富",
                    withPianYin: "伤官配印，智慧结合知识",
                    withShiGuan: "伤官见官，智慧挑战权威",
                    withBiJian: "比肩生伤，合作发挥智慧"
                }
            }
        },

        // 十神组合分析
        shiShenCombinationAnalysis: {
            // 基础组合模式
            basicCombinations: {
                // 官印相生
                guanYinXiangSheng: {
                    combination: "正官+正印",
                    meaning: "知识支持地位，学习获得权威",
                    characteristics: ["有学识", "有地位", "品德高尚", "受人尊敬"],
                    careerSuitable: ["教育", "管理", "公务员", "专业技术"],
                    developmentPath: "通过学习提升能力，通过能力获得地位"
                },

                // 杀印相生
                shaYinXiangSheng: {
                    combination: "七杀+偏印",
                    meaning: "压力转化为动力，挑战激发创新",
                    characteristics: ["抗压能力强", "创新思维", "敢于挑战", "独特见解"],
                    careerSuitable: ["创业", "研发", "改革", "特种行业"],
                    developmentPath: "在压力中成长，在挑战中创新"
                },

                // 财官相生
                caiGuanXiangSheng: {
                    combination: "正财+正官",
                    meaning: "财富支持地位，实权掌握资源",
                    characteristics: ["有财富", "有地位", "务实稳健", "善于管理"],
                    careerSuitable: ["企业高管", "金融", "房地产", "贸易"],
                    developmentPath: "通过财富积累获得权力，通过权力扩大财富"
                },

                // 食神制杀
                shiShenZhiSha: {
                    combination: "食神+七杀",
                    meaning: "才华驾驭权力，智慧掌控压力",
                    characteristics: ["有才华", "有权威", "智慧过人", "善于管理"],
                    careerSuitable: ["高层管理", "艺术指导", "技术专家", "专业顾问"],
                    developmentPath: "以才华获得认可，以智慧掌控权力"
                },

                // 伤官配印
                shangGuanPeiYin: {
                    combination: "伤官+偏印",
                    meaning: "智慧结合知识，创新基于传统",
                    characteristics: ["智慧超群", "学识渊博", "创新能力强", "思维独特"],
                    careerSuitable: ["研究", "创新", "技术开发", "战略规划"],
                    developmentPath: "在传统基础上创新，以知识支撑智慧"
                }
            },

            // 高级组合模式
            advancedCombinations: {
                // 三奇格
                sanQiGe: {
                    combination: "财官印三奇",
                    meaning: "财官印三奇俱全，人生圆满",
                    types: {
                        "财官印": "天上三奇，甲戊庚",
                        "伤食印": "地下三奇，乙丙丁"
                    },
                    characteristics: ["福气好", "地位高", "财富丰", "智慧深"],
                    evaluation: "上等格局，人生圆满，名利双收"
                },

                // 双官格
                shuangGuanGe: {
                    combination: "正官+七杀",
                    meaning: "权力与压力并存，机遇与挑战同在",
                    analysis: {
                        "身强": "官杀为用，能够承受压力，获得权力",
                        "身弱": "官杀为忌，压力过大，需要贵人相助"
                    },
                    development: "需要平衡权力与压力，贵人相助很重要"
                },

                // 双财格
                shuangCaiGe: {
                    combination: "正财+偏财",
                    meaning: "稳定财与意外财并得，财富来源多样化",
                    analysis: {
                        "身强": "财星为用，能够把握各种财富机会",
                        "身弱": "财星为忌，财富过多反而成为负担"
                    },
                    development: "需要平衡稳定与机遇，理性投资很重要"
                },

                // 双印格
                shuangYinGe: {
                    combination: "正印+偏印",
                    meaning: "传统知识与创新思维并重，学习能力强",
                    analysis: {
                        "身强": "印星为忌，学习过多反而影响行动",
                        "身弱": "印星为用，学习是成功的基础"
                    },
                    development: "需要平衡传统与创新，学以致用很重要"
                },

                // 双食格
                shuangShiGe: {
                    combination: "食神+伤官",
                    meaning: "表达才华与创新智慧并存，创造力强",
                    analysis: {
                        "身强": "食伤为用，创造力强，能够实现价值",
                        "身弱": "食伤为忌，过度消耗精力，需要节制"
                    },
                    development: "需要平衡表达与创新，适时展现很重要"
                }
            }
        },

        // 十神变化规律
        shiShenVariationPatterns: {
            // 大运中的十神变化
            dayunVariation: {
                principle: "大运十神与命局十神的相互作用决定运势变化",
                patterns: {
                    "用神大运": "运势上升，机遇增多，发展顺利",
                    "忌神大运": "运势下降，挑战增多，需要谨慎",
                    "用忌交运": "运势转折，需要把握时机",
                    "伏吟大运": "运势反复，需要耐心应对"
                }
            },

            // 流年中的十神变化
            liuNianVariation: {
                principle: "流年十神引动命局十神，产生具体事件",
                patterns: {
                    "官星流年": "事业相关事件，考试、升职、调动",
                    "财星流年": "财富相关事件，投资、收入、消费",
                    "印星流年": "学习相关事件，考试、证书、知识",
                    "食伤流年": "表达相关事件，创作、演讲、表现"
                }
            },

            // 十神生克制化
                shengKeZhiHua: {
                principle: "十神之间的生克制化关系决定吉凶",
                patterns: {
                    "生": "相生为吉，助益发展",
                    "克": "相克为凶，产生阻碍",
                    "制": "制约为吉，化解凶险",
                    "化": "化为吉，转化凶险"
                }
            }
        }
    },

    // 《神煞探源》- 梁湘润
    shenShaTanYuanStudy: {
        bookInfo: {
            title: "《神煞探源》",
            author: "梁湘润",
            focus: "神煞系统的溯源研究",
            approach: "从历史源流角度研究神煞，揭示其形成原因和应用原理"
        },

        // 神煞源流研究
        shenShaOriginResearch: {
            // 神煞的历史源流
            historicalOrigin: {
                ancientOrigins: {
                    period: "先秦时期",
                    source: "天文观测和自然崇拜",
                    examples: ["岁星纪年", "二十八宿", "北斗崇拜"],
                    evolution: "从自然崇拜到神秘化应用"
                },
                hanDynasty: {
                    period: "汉代",
                    source: "阴阳五行学说的发展",
                    examples: ["五行相生相克", "天干地支配合", "纳音五行"],
                    evolution: "理论系统化，应用规范化"
                },
                tangSongDynasty: {
                    period: "唐宋时期",
                    source: "命理学说的成熟",
                    examples: ["李虚中法", "子平术", "神煞系统"],
                    evolution: "从简单到复杂，从粗糙到精细"
                },
                mingQingDynasty: {
                    period: "明清时期",
                    source: "命理学的鼎盛发展",
                    examples: ["神煞大全", "渊海子平", "三命通会"],
                    evolution: "系统完善，应用广泛"
                }
            },

            // 神煞分类体系
            classificationSystem: {
                // 吉神类
                auspiciousGods: {
                    tianYiGuiRen: {
                        name: "天乙贵人",
                        meaning: "最吉之神，逢凶化吉",
                        calculation: "根据日干查地支",
                        effect: "贵人相助，化解困难，提升运势",
                        application: "用于判断贵人运和化解凶险"
                    },
                    taiJiGuiRen: {
                        name: "太极贵人",
                        meaning: "文武双全之贵人",
                        calculation: "根据年干或日干查地支",
                        effect: "文武兼备，地位提升，学业有成",
                        application: "用于判断学业运和事业运"
                    },
                    wenChang: {
                        name: "文昌贵人",
                        meaning: "文学艺术之贵人",
                        calculation: "根据日干查地支",
                        effect: "文思敏捷，学业进步，艺术天赋",
                        application: "用于判断学业运和艺术天赋"
                    },
                    wenQu: {
                        name: "文曲贵人",
                        meaning: "文学口才之贵人",
                        calculation: "根据日干查地支",
                        effect: "口才好，文笔佳，善于表达",
                        application: "用于判断表达能力和文学才华"
                    }
                },

                // 凶煞类
                inauspiciousGods: {
                    tianKongSha: {
                        name: "天空煞",
                        meaning: "空虚不实之神",
                        calculation: "根据月支查其他地支",
                        effect: "多虚少实，容易落空，需要谨慎",
                        application: "用于判断计划的可行性和风险"
                    },
                    jieSha: {
                        name: "劫煞",
                        meaning: "争夺劫夺之神",
                        calculation: "根据年支查其他地支",
                        effect: "易遭争夺，破财风险，需要防范",
                        application: "用于判断财富风险和人际关系"
                    },
                    zhaiSha: {
                        name: "灾煞",
                        meaning: "灾祸疾病之神",
                        calculation: "根据年支查其他地支",
                        effect: "易有灾祸，健康问题，需要小心",
                        application: "用于判断健康风险和意外灾祸"
                    },
                    tianXiongSha: {
                        name: "天雄煞",
                        meaning: "凶猛好斗之神",
                        calculation: "根据年支查其他地支",
                        effect: "性格凶猛，易有冲突，需要调和",
                        application: "用于判断性格特征和人际关系"
                    }
                },

                // 特殊神煞
                specialGods: {
                    tangFu: {
                        name: "桃花煞",
                        meaning: "感情魅力之神",
                        types: ["墙内桃花", "墙外桃花", "桃花滚浪"],
                        calculation: "根据年支或日支查其他地支",
                        effect: "感情丰富，魅力四射，但也易有感情纠葛",
                        application: "用于判断感情运势和人际关系"
                    },
                    yiMa: {
                        name: "驿马星",
                        meaning: "变动迁移之神",
                        calculation: "根据年支查其他地支",
                        effect: "多变动，迁移机会，不稳定但也有机遇",
                        application: "用于判断变动机会和迁移运势"
                    },
                    huaGai: {
                        name: "华盖星",
                        meaning: "艺术聪明之神",
                        calculation: "根据年支或日支查其他地支",
                        effect: "聪明好学，有艺术天赋，但也易孤僻",
                        application: "用于判断学习能力和艺术天赋"
                    },
                    tianDe: {
                        name: "天德贵人",
                        meaning: "仁德善良之神",
                        calculation: "根据月支查其他天干",
                        effect: "心地善良，有仁德，逢凶化吉",
                        application: "用于判断品德和化解凶险"
                    }
                }
            },

            // 神煞应用原理
            applicationPrinciples: {
                // 神煞与五行关系
                wuxingRelation: {
                    principle: "神煞的吉凶与五行生克密切相关",
                    examples: {
                        "金贵人": "利于事业，适合武职",
                        "木贵人": "利于生长，适合文职",
                        "水贵人": "利于智慧，适合学术",
                        "火贵人": "利于名声，适合演艺",
                        "土贵人": "利于稳定，适合实业"
                    }
                },

                // 神煞与十神关系
                shiShenRelation: {
                    principle: "神煞与十神的配合影响其作用",
                    examples: {
                        "贵人+官星": "事业上有贵人相助",
                        "桃花+七杀": "感情复杂，需谨慎",
                        "驿马+财星": "变动中求财的机会",
                        "华盖+印星": "学习有天赋，适合学术"
                    }
                },

                // 神煞与格局关系
                geJuRelation: {
                    principle: "神煞与格局的组合影响命运层次",
                    examples: {
                        "上等格局+吉神": "锦上添花，命运更佳",
                        "上等格局+凶煞": "美中不足，需要注意",
                        "下等格局+吉神": "有所补救，命运改善",
                        "下等格局+凶煞": "雪上加霜，命运多舛"
                    }
                }
            }
        },

        // 神煞现代应用
        modernApplication: {
            // 职业发展指导
            careerGuidance: {
                tianYiGuiRen: {
                    career: "管理、教育、咨询",
                    advice: "善用贵人关系，建立人脉网络",
                    development: "通过贵人相助获得发展机会"
                },
                wenChangWenQu: {
                    career: "学术、文化、艺术、教育",
                    advice: "发挥学习优势，深化专业能力",
                    development: "通过知识积累获得地位"
                },
                yiMaXing: {
                    career: "贸易、运输、旅游、销售",
                    advice: "把握变动机会，勇于尝试新领域",
                    development: "通过变动获得成长机会"
                },
                huaGaiXing: {
                    career: "研究、艺术、技术、宗教",
                    advice: "专注专业领域，深入研究",
                    development: "通过专业成就获得认可"
                }
            },

            // 人际关系指导
            relationshipGuidance: {
                taoHuaSha: {
                    characteristics: "感情丰富，魅力四射",
                    advice: "注意感情界限，避免感情纠葛",
                    application: "可用于判断感情特征和缘分"
                },
                tianXiongSha: {
                    characteristics: "性格刚强，易有冲突",
                    advice: "学会控制脾气，改善人际关系",
                    application: "可用于判断性格缺陷和改进方法"
                },
                jieSha: {
                    characteristics: "易遭争夺，需要注意",
                    advice: "防范小人，保护自己的利益",
                    application: "可用于判断人际关系风险"
                }
            },

            // 健康指导
            healthGuidance: {
                zhaiSha: {
                    health: "需要注意健康问题",
                    advice: "定期体检，注意预防",
                    application: "可用于判断健康风险"
                },
                tianKongSha: {
                    health: "心理健康很重要",
                    advice: "保持积极心态，避免空虚",
                    application: "可用于判断心理健康"
                }
            }
        }
    },

    // 《干支易象学》- 贺云飞
    ganZhiYiXiangStudy: {
        bookInfo: {
            title: "《干支易象学》",
            author: "贺云飞",
            focus: "干支易象的专题研究",
            approach: "将干支与易经象数结合，建立干支易象的分析体系"
        },

        // 干支易象理论基础
        yiXiangTheoryFoundation: {
            // 易象基本概念
            basicConcepts: {
                yiJing: {
                    name: "易经",
                    content: "包含八卦、六十四卦的象数理系统",
                    application: "通过卦象解读事物发展趋势"
                },
                xiangShu: {
                    name: "象数",
                    content: "象为形状，数为规律，象数结合分析",
                    application: "通过象数关系预测变化"
                },
                ganZhi: {
                    name: "干支",
                    content: "天干地支的时间空间记录系统",
                    application: "通过干支组合分析命运"
                },
                yiXiang: {
                    name: "易象",
                    content: "干支与易经象数的结合体系",
                    application: "通过易象深度分析命运"
                }
            },

            // 干支与八卦对应
            ganZhiBaGuaMapping: {
                // 天干对应八卦
                tianGanMapping: {
                    "甲": "震卦☳", "乙": "巽卦☴",
                    "丙": "离卦☲", "丁": "离卦☲",
                    "戊": "坤卦☷", "己": "坤卦☷",
                    "庚": "兑卦☱", "辛": "兑卦☱",
                    "壬": "坎卦☵", "癸": "坎卦☵"
                },
                // 地支对应八卦
                diZhiMapping: {
                    "子": "坎卦☵", "丑": "艮卦☶",
                    "寅": "艮卦☶", "卯": "震卦☳",
                    "辰": "巽卦☴", "巳": "巽卦☴",
                    "午": "离卦☲", "未": "坤卦☷",
                    "申": "兑卦☱", "酉": "兑卦☱",
                    "戌": "乾卦☰", "亥": "乾卦☰"
                },
                // 五行对应八卦
                wuxingMapping: {
                    "木": "震卦☳、巽卦☴",
                    "火": "离卦☲",
                    "土": "坤卦☷、艮卦☶",
                    "金": "兑卦☱、乾卦☰",
                    "水": "坎卦☵"
                }
            },

            // 易象分析方法
            yiXiangAnalysisMethods: {
                // 单卦分析法
                singleGuaAnalysis: {
                    method: "分析单个干支对应的卦象",
                    steps: [
                        "确定干支对应的八卦",
                        "分析卦象的基本含义",
                        "结合五行属性深化理解",
                        "考虑在命局中的作用"
                    ],
                    example: "甲木对应震卦，震为雷，有震动、发动之意"
                },

                // 重卦分析法
                chongGuaAnalysis: {
                    method: "分析两个干支组合形成的重卦",
                    steps: [
                        "确定上下卦对应的干支",
                        "组合成六十四卦中的一卦",
                        "分析重卦的整体含义",
                        "结合爻辞进一步解读"
                    ],
                    example: "甲子组合，甲为震，子为坎，组成水雷屯卦"
                },

                // 互卦分析法
                huGuaAnalysis: {
                    method: "分析重卦的互卦",
                    steps: [
                        "确定主卦的互卦",
                        "分析互卦的含义",
                        "理解主卦与互卦的关系",
                        "预测变化趋势"
                    ],
                    example: "水雷屯卦的互卦是山地剥卦"
                },

                // 变卦分析法
                    bianGuaAnalysis: {
                    method: "分析动爻引起的变卦",
                    steps: [
                        "确定动爻位置",
                        "分析变卦含义",
                        "理解变化趋势",
                        "预测未来发展"
                    ],
                    example: "水雷屯卦初爻动，变卦为水火既济"
                }
            }
        },

        // 干支易象实例分析
        yiXiangCaseAnalysis: {
            // 天干易象实例
            tianGanYiXiang: {
                "甲": {
                    gua: "震卦☳",
                    meaning: "雷动、发动、长子、东方",
                    character: "正直、上进、有领导力",
                    application: "适合领导、创业、东方发展"
                },
                "乙": {
                    gua: "巽卦☴",
                    meaning: "风行、柔和、长女、东南",
                    character: "温和、柔韧、有艺术感",
                    application: "适合艺术、文化、东南发展"
                },
                "丙": {
                    gua: "离卦☲",
                    meaning: "火明、文明、中女、南方",
                    character: "热情、礼貌、有名声",
                    application: "适合文化、教育、南方发展"
                },
                "丁": {
                    gua: "离卦☲",
                    meaning: "火明、文明、中女、南方",
                    character: "温和、文明、有智慧",
                    application: "适合学术、文化、南方发展"
                },
                "戊": {
                    gua: "坤卦☷",
                    meaning: "地厚、包容、母亲、西南",
                    character: "稳重、包容、有责任心",
                    application: "适合实业、土地、西南发展"
                },
                "己": {
                    gua: "坤卦☷",
                    meaning: "地厚、包容、母亲、西南",
                    character: "温和、包容、有耐心",
                    application: "适合服务、教育、西南发展"
                },
                "庚": {
                    gua: "兑卦☱",
                    meaning: "泽悦、口舌、少女、西方",
                    character: "刚健、义气、有原则",
                    application: "适合金融、法律、西方发展"
                },
                "辛": {
                    gua: "兑卦☱",
                    meaning: "泽悦、口舌、少女、西方",
                    character: "细致、有品味、善于表达",
                    application: "适合艺术、珠宝、西方发展"
                },
                "壬": {
                    gua: "坎卦☵",
                    meaning: "水险、智慧、中男、北方",
                    character: "聪明、灵活、适应力强",
                    application: "适合贸易、智慧、北方发展"
                },
                "癸": {
                    gua: "坎卦☵",
                    meaning: "水险、智慧、中男、北方",
                    character: "纯净、智慧、有直觉",
                    application: "适合研究、智慧、北方发展"
                }
            },

            // 地支易象实例
            diZhiYiXiang: {
                "子": {
                    gua: "坎卦☵",
                    meaning: "水险、智慧、中男、北方",
                    character: "聪明、灵活、善变化",
                    application: "适合智慧型工作、北方发展"
                },
                "丑": {
                    gua: "艮卦☶",
                    meaning: "山止、稳重、少男、东北",
                    character: "稳重、踏实、有耐心",
                    application: "适合稳定工作、东北发展"
                },
                "寅": {
                    gua: "艮卦☶",
                    meaning: "山止、稳重、少男、东北",
                    character: "威猛、独立、有野心",
                    application: "适合创业、东北发展"
                },
                "卯": {
                    gua: "震卦☳",
                    meaning: "雷动、发动、长子、东方",
                    character: "温和、美丽、有艺术感",
                    application: "适合艺术、东方发展"
                },
                "辰": {
                    gua: "巽卦☴",
                    meaning: "风行、柔和、长女、东南",
                    character: "神秘、有权威、善变化",
                    application: "适合管理、东南发展"
                },
                "巳": {
                    gua: "巽卦☴",
                    meaning: "风行、柔和、长女、东南",
                    character: "热情、文明、有礼貌",
                    application: "适合文化、东南发展"
                },
                "午": {
                    gua: "离卦☲",
                    meaning: "火明、文明、中女、南方",
                    character: "热烈、有礼貌、善变化",
                    application: "适合文化、南方发展"
                },
                "未": {
                    gua: "坤卦☷",
                    meaning: "地厚、包容、母亲、西南",
                    character: "温和、美丽、有耐心",
                    application: "适合艺术、西南发展"
                },
                "申": {
                    gua: "兑卦☱",
                    meaning: "泽悦、口舌、少女、西方",
                    character: "聪明、灵活、有技巧",
                    application: "适合技术、西方发展"
                },
                "酉": {
                    gua: "兑卦☱",
                    meaning: "泽悦、口舌、少女、西方",
                    character: "美丽、优雅、有品味",
                    application: "适合艺术、西方发展"
                },
                "戌": {
                    gua: "乾卦☰",
                    meaning: "天健、刚强、父亲、西北",
                    character: "忠诚、稳重、有责任心",
                    application: "适合管理、西北发展"
                },
                "亥": {
                    gua: "乾卦☰",
                    meaning: "天健、刚强、父亲、西北",
                    character: "智慧、包容、善良",
                    application: "适合智慧型工作、西北发展"
                }
            }
        },

        // 易象预测应用
        yiXiangPrediction: {
            // 事业发展预测
            careerPrediction: {
                method: "通过干支易象分析事业发展趋势",
                steps: [
                    "分析年柱易象：看祖业和早年",
                    "分析月柱易象：看事业基础",
                    "分析日柱易象：看自身能力",
                    "分析时柱易象：看晚年发展"
                ],
                application: "指导职业选择和发展规划"
            },

            // 财富运势预测
            wealthPrediction: {
                method: "通过干支易象分析财富运势",
                steps: [
                    "分析财星易象：看财富来源",
                    "分析日主易象：看求财能力",
                    "分析大运易象：看财富时机",
                    "分析流年易象：看具体机遇"
                ],
                application: "指导投资理财和财富管理"
            },

            // 感情婚姻预测
            relationshipPrediction: {
                method: "通过干支易象分析感情婚姻",
                steps: [
                    "分析妻宫易象：看配偶特征",
                    "分析配偶星易象：看感情缘分",
                    "分析大运易象：看感情时机",
                    "分析流年易象：看具体机会"
                ],
                application: "指导感情选择和婚姻发展"
            },

            // 健康状况预测
            healthPrediction: {
                method: "通过干支易象分析健康状况",
                steps: [
                    "分析日主易象：看体质强弱",
                    "分析五行易象：看健康倾向",
                    "分析神煞易象：看健康风险",
                    "分析大运易象：看健康变化"
                ],
                application: "指导健康保健和疾病预防"
            }
        }
    },

    // 《四柱预测例题剖析》- 邵伟中
    siZhuYuCeLiTi: {
        bookInfo: {
            title: "《四柱预测例题剖析》",
            author: "邵伟中",
            focus: "四柱预测的案例剖析",
            approach: "通过大量案例分析，总结预测方法和验证理论"
        },

        // 案例分析方法
        caseAnalysisMethods: {
            // 基础分析法
            basicAnalysis: {
                steps: [
                    "第一步：排盘定局 - 精确排出四柱大运",
                    "第二步：分析日主 - 判断日主强弱和喜忌",
                    "第三步：识别格局 - 确定格局类型和成破",
                    "第四步：选取用神 - 根据日主强弱选取用神",
                    "第五步：分析大运 - 分析大运对命局的影响",
                    "第六步：预测流年 - 预测流年具体应期"
                ],
                keyPoints: [
                    "排盘必须准确",
                    "分析必须全面",
                    "逻辑必须清晰",
                    "结论必须验证"
                ]
            },

            // 深度分析法
            deepAnalysis: {
                steps: [
                    "第一步：五行分析 - 分析五行生克制化",
                    "第二步：十神分析 - 分析十神作用关系",
                    "第三步：格局分析 - 分析格局层次组合",
                    "第四步：用神分析 - 分析用神变化规律",
                    "第五步：神煞分析 - 分析神煞吉凶影响",
                    "第六步：综合分析 - 综合各因素做出判断"
                ],
                keyPoints: [
                    "分析要有层次",
                    "判断要有依据",
                    "推论要合逻辑",
                    "验证要实事求是"
                ]
            }
        },

        // 经典案例分类
        classicCasesCategories: {
            // 事业成功案例
            careerSuccessCases: {
                characteristics: [
                    "格局清纯有成",
                    "用神有力得助",
                    "大运配合得当",
                    "流年把握机遇"
                ],
                examples: [
                    {
                        name: "企业家案例",
                        bazi: "甲午 丙戌 己酉 乙亥",
                        analysis: "财官印全，用神有力，大运助身",
                        success: "白手起家，事业有成"
                    },
                    {
                        name: "公务员案例",
                        bazi: "庚申 乙酉 辛亥 戊戌",
                        analysis: "官印相生，格局清纯，大运帮扶",
                        success: "公务员晋升，地位稳固"
                    }
                ]
            },

            // 财富丰盈案例
            wealthAbundanceCases: {
                characteristics: [
                    "财星为用神",
                    "日主能担财",
                    "财运大运好",
                    "善于把握机会"
                ],
                examples: [
                    {
                        name: "投资家案例",
                        bazi: "壬子 辛亥 甲申 戊辰",
                        analysis: "财星旺盛，日主有根，大运助财",
                        success: "投资致富，财富丰厚"
                    },
                    {
                        name: "商人案例",
                        bazi: "丙寅 庚寅 戊申 庚申",
                        analysis: "财官双美，用神得力，大运配合",
                        success: "商业成功，财源广进"
                    }
                ]
            },

            // 学业有成案例
            academicSuccessCases: {
                characteristics: [
                    "印星为用神",
                    "文昌文曲吉",
                    "大运助学业",
                    "流年利考试"
                ],
                examples: [
                    {
                        name: "学者案例",
                        bazi: "癸卯 乙卯 丙午 庚寅",
                        analysis: "印星有力，文昌贵人，大运助学",
                        success: "学术研究，成就显著"
                    },
                    {
                        name: "学生案例",
                        bazi: "甲戌 丁卯 癸巳 丙辰",
                        analysis: "伤官佩印，文昌文曲，大运有利",
                        success: "考试成绩优异，升学成功"
                    }
                ]
            },

            // 婚姻美满案例
            happyMarriageCases: {
                characteristics: [
                    "妻宫配偶星吉",
                    "桃花有制为吉",
                    "大运利婚姻",
                    "流年遇良缘"
                ],
                examples: [
                    {
                        name: "美满婚姻案例",
                        bazi: "丁未 乙巳 壬午 丙午",
                        analysis: "财官双美，配偶星吉，大运利婚",
                        success: "婚姻美满，家庭幸福"
                    },
                    {
                        name: "晚婚幸福案例",
                        bazi: "庚戌 戊寅 癸未 丙辰",
                        analysis: "财星有力，妻宫稳定，大运助婚",
                        success: "晚婚得福，夫妻和谐"
                    }
                ]
            }
        },

        // 预测验证方法
        predictionVerification: {
            // 理论验证
            theoryVerification: {
                method: "通过大量案例验证理论准确性",
                steps: [
                    "收集大量真实案例",
                    "按照理论方法分析",
                    "对比预测结果与实际",
                    "总结理论的准确性和局限性"
                ],
                criteria: [
                    "预测准确率",
                    "适用范围",
                    "使用条件",
                    "改进方向"
                ]
            },

            // 实践验证
            practiceVerification: {
                method: "通过实际预测验证方法有效性",
                steps: [
                    "接受实际预测咨询",
                    "运用分析方法预测",
                    "跟踪验证预测结果",
                    "总结经验改进方法"
                ],
                criteria: [
                    "预测准确性",
                    "客户满意度",
                    "方法实用性",
                    "改进必要性"
                ]
            }
        }
    },

    // 《八字用神精解》- 李顺祥
    baZiYongShenJingJie: {
        bookInfo: {
            title: "《八字用神精解》",
            author: "李顺祥",
            focus: "用神理论的精解",
            approach: "深入研究用神理论，精细化用神选择和应用方法"
        },

        // 用神理论精解
        yongShenTheoryJingJie: {
            // 用神本质
            yongShenEssence: {
                definition: "用神是八字中对日主最有利的五行或十神",
                function: [
                    "平衡日主强弱",
                    "调和五行生克",
                    "化解格局缺陷",
                    "提升运势层次"
                ],
                characteristics: [
                    "针对性：针对具体问题",
                    "变化性：随大运流年变化",
                    "层次性：有主次之分",
                    "时效性：有特定时效"
                ]
            },

            // 用神分类
            yongShenClassification: {
                // 按五行分类
                wuxingClassification: {
                    "金用神": "以金为用，宜金运金年",
                    "木用神": "以木为用，宜木运木年",
                    "水用神": "以水为用，宜水运水年",
                    "火用神": "以火为用，宜火运火年",
                    "土用神": "以土为用，宜土运土年"
                },
                // 按十神分类
                shiShenClassification: {
                    "印星用神": "以印星为用，利学习事业",
                    "比劫用神": "以比劫为用，得朋友帮助",
                    "食伤用神": "以食伤为用，发挥才华",
                    "财星用神": "以财星为用，利于财富",
                    "官星用神": "以官星为用，利于事业"
                },
                // 按作用分类
                functionClassification: {
                    "扶抑用神": "扶抑日主，平衡强弱",
                    "调候用神": "调候冷暖，平衡气候",
                    "通关用神": "通关五行，化解冲克",
                    "病药用神": "格局有病，以神为药"
                }
            },

            // 用神选择原则
            yongShenSelectionPrinciples: {
                // 强弱原则
                qiangRuoPrinciple: {
                    "身强": "宜抑，用克泄耗",
                    "身弱": "宜扶，用生助",
                    "中和": "平衡发展，无需特别"
                },
                // 调候原则
                tiaoHouPrinciple: {
                    "过寒": "用火调候",
                    "过热": "用水调候",
                    "过燥": "用湿润调候",
                    "过湿": "用燥土调候"
                },
                // 格局原则
                geJuPrinciple: {
                    "正格": "按正格方法选取",
                    "特殊格": "按特殊格方法选取",
                    "破格": "先救格再取用",
                    "成格": "维护格局完整"
                },
                // 喜忌原则
                    xiJiPrinciple: {
                    "喜神": "与用神同类，增强用神力量",
                    "忌神": "与用神相克，削弱用神力量",
                    "仇神": "克喜神助忌神，需要化解",
                    "闲神": "对格局影响不大，可忽略"
                }
            },

            // 用神变化规律
            yongShenVariationPatterns: {
                // 大运用神变化
                dayunVariation: {
                    principle: "大运五行改变用神性质",
                    patterns: {
                        "用神大运": "用神有力，运势上升",
                        "忌神大运": "忌神当道，运势下降",
                        "用神受制": "用神被克，运势受阻",
                        "忌神受制": "忌神被制，运势转好"
                    }
                },
                // 流年用神变化
                liuNianVariation: {
                    principle: "流年五行引动用神作用",
                    patterns: {
                        "用神流年": "具体事件应期",
                        "忌神流年": "挑战困难期",
                        "用神合冲": "事件变化期",
                        "忌神合冲": "困难转化期"
                    }
                },
                // 用神转化规律
                transformationPatterns: {
                    "用神变忌神": "运势转折，需要调整",
                    "忌神变用神": "机遇出现，需要把握",
                    "用神增力": "运势上升，积极行动",
                    "用神减力": "运势下降，保守应对"
                }
            }
        },

        // 精细用神分析
        fineYongShenAnalysis: {
            // 主用神分析
            mainYongShenAnalysis: {
                definition: "对命局最重要的用神",
                characteristics: [
                    "作用最大",
                    "影响最广",
                    "时效最长",
                    "层次最高"
                ],
                selection: [
                    "解决主要矛盾",
                    "平衡关键五行",
                    "维护重要格局",
                    "提升整体层次"
                ]
            },

            // 辅助用神分析
            auxiliaryYongShenAnalysis: {
                definition: "配合主用神的辅助用神",
                characteristics: [
                    "作用次要",
                    "影响局部",
                    "时效较短",
                    "层次较低"
                ],
                selection: [
                    "配合主用神",
                    "解决次要矛盾",
                    "平衡局部五行",
                    "维护次要格局"
                ]
            },

            // 特殊用神分析
            specialYongShenAnalysis: {
                // 调候用神
                tiaoHouYongShen: {
                    purpose: "调候冷暖，改善生存环境",
                    importance: "关乎健康和心态",
                    selection: "根据命局寒热燥湿选择",
                    application: "优先于其他用神考虑"
                },
                // 通关用神
                tongGuanYongShen: {
                    purpose: "通关五行，化解冲克",
                    importance: "关乎关系和谐",
                    selection: "根据五行生克选择",
                    application: "化解矛盾，改善关系"
                },
                // 病药用神
                bingYaoYongShen: {
                    purpose: "格局有病，以神为药",
                    importance: "关乎格局成败",
                    selection: "针对格局病根选择",
                    application: "治病救人，改善格局"
                }
            }
        },

        // 用神实战应用
        yongShenPracticalApplication: {
            // 事业发展用神
            careerYongShen: {
                analysis: "根据事业发展需要选择用神",
                types: {
                    "升职用神": "官星印星为用，利升职发展",
                    "创业用神": "财星食伤为用，利创业发展",
                    "转型用神": "变动相关用神，利转型发展",
                    "稳定用神": "印星比劫为用，利稳定发展"
                },
                application: "指导职业规划和发展策略"
            },

            // 财富管理用神
            wealthYongShen: {
                analysis: "根据财富管理需要选择用神",
                types: {
                    "求财用神": "财星为用，利求财发展",
                    "守财用神": "印星比劫为用，利守财发展",
                    "投资用神": "食伤财星为用，利投资发展",
                    "理财用神": "官星印星为用，利理财发展"
                },
                application: "指导投资理财和财富管理"
            },

            // 感情婚姻用神
            relationshipYongShen: {
                analysis: "根据感情婚姻需要选择用神",
                types: {
                    "恋爱用神": "桃花星为用，利恋爱发展",
                    "结婚用神": "配偶星为用，利结婚发展",
                    "维系用神": "印星比劫为用，利维系感情",
                    "化解用神": "通关用神为用，利化解矛盾"
                },
                application: "指导感情选择和婚姻维系"
            },

            // 健康保健用神
            healthYongShen: {
                analysis: "根据健康保健需要选择用神",
                types: {
                    "调候用神": "调候相关用神，利身体健康",
                    "扶抑用神": "扶抑相关用神，利体质平衡",
                    "通关用神": "通关相关用神，利气血畅通",
                    "化解用神": "化解相关用神，利疾病康复"
                },
                application: "指导健康保健和疾病防治"
            }
        }
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stage05SpecializedResearch;
}