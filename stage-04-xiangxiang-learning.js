/**
 * 第四阶段学习内容：《探索门八字取象秘法》- 王庆
 * 八字取象技法的理论与实践
 * 为取象解读系统开发提供理论基础
 */

const XiangxiangLearning = {
    // ==================== 书籍信息 ====================
    bookInfo: {
        title: "《探索门八字取象秘法》",
        author: "王庆",
        publisher: "台湾武陵出版社",
        year: "2005",
        pages: 450,
        isbn: "978-957-35-1045-7",
        difficulty: "高级",
        importance: "★★★★☆",
        description: "八字取象的专门技法，系统阐述取象理论与实践方法"
    },

    // ==================== 核心理论体系 ====================
    coreTheory: {
        // 第一章：取象理论基础
        chapter1: {
            title: "取象理论基础",
            keyPoints: [
                "取象的概念与意义",
                "取象的基本原理",
                "取象与八字分析的关系",
                "取象的层次与分类"
            ],

            concepts: {
                // 取象的基本概念
                xiangxiangDefinition: {
                    concept: "取象是通过八字中的干支、十神、五行等元素，推导出对应的具体事物、现象或特征的方法",
                    purpose: "将抽象的命理符号转化为具体的人生信息",
                    importance: "是连接命理理论与现实生活的桥梁",
                    application: "用于性格分析、职业指导、婚姻预测等各个方面"
                },

                // 取象的基本原理
                basicPrinciples: {
                    principle1: {
                        name: "同类相应原则",
                        explanation: "相同或相似的五行、干支会对应相似的事物和现象",
                        example: "甲木参天，多对应高大、正直、向上发展的特征"
                    },
                    principle2: {
                        name: "五行生克原则",
                        explanation: "通过五行之间的生克关系来推断事物的发展变化",
                        example: "水生木，有水木相生的八字多有生机勃勃的发展"
                    },
                    principle3: {
                        name: "十神特性原则",
                        explanation: "十神本身具有特定的象征意义，可直接对应具体事物",
                        example: "正官多对应稳定、规则、地位等"
                    },
                    principle4: {
                        name: "组合变化原则",
                        explanation: "干支的不同组合会产生新的象意，需要综合分析",
                        example: "子午相冲，可能对应变动、冲突等"
                    }
                }
            }
        },

        // 第二章：干支取象方法
        chapter2: {
            title: "干支取象方法",
            keyPoints: [
                "天干取象法",
                "地支取象法",
                "干支组合取象",
                "特殊格局取象"
            ],

            methods: {
                // 天干取象法
                heavenlyStems: {
                    jia: {
                        basic: "甲木：参天大树，栋梁之材",
                        character: "正直、坚定、向上发展、有领导力",
                        appearance: "身材高大、面方、体格健壮",
                        career: "适合领导岗位、管理、教育、林业、建筑",
                        relationships: "对朋友忠诚、有责任感、家庭观念强",
                        health: "注意肝胆、头部、神经系统",
                        detailed: {
                            positive: "正直可靠、有担当、志向远大",
                            negative: "过于固执、不善变通、容易树敌",
                            timing: "春季、早晨、寅卯时",
                            direction: "东方",
                            color: "青色、绿色"
                        }
                    },

                    yi: {
                        basic: "乙木：花草藤萝，柔韧之木",
                        character: "温柔、灵活、适应性强、善解人意",
                        appearance: "身材苗条、面容秀美、体态柔美",
                        career: "适合文艺、设计、服务、医疗、园艺",
                        relationships: "善于交际、人缘好、感情细腻",
                        health: "注意肝胆、神经系统、血液循环",
                        detailed: {
                            positive: "温柔体贴、适应力强、艺术天赋",
                            negative: "意志不坚、依赖性强、易受影响",
                            timing: "春季、早晨、寅卯时",
                            direction: "东方",
                            color: "青色、绿色"
                        }
                    },

                    bing: {
                        basic: "丙火：太阳之火，光明普照",
                        character: "热情、开朗、积极向上、有魅力",
                        appearance: "面色红润、眼神明亮、中等身材",
                        career: "适合娱乐、媒体、销售、能源、教育",
                        relationships: "热情大方、朋友众多、重视感情",
                        health: "注意心脏、眼睛、血液循环、小肠",
                        detailed: {
                            positive: "热情开朗、领导力强、影响力大",
                            negative: "性急冲动、缺乏耐心、容易过度",
                            timing: "夏季、中午、巳午时",
                            direction: "南方",
                            color: "红色、紫色"
                        }
                    },

                    ding: {
                        basic: "丁火：灯烛之火，温暖柔和",
                        character: "温和、细腻、有思想、善于思考",
                        appearance: "面貌清秀、眼神温和、身材适中",
                        career: "适合文化、教育、研究、咨询、服务",
                        relationships: "感情专一、善于关怀、重视精神交流",
                        health: "注意心脏、血液、内分泌、眼睛",
                        detailed: {
                            positive: "温和有礼、思维缜密、善解人意",
                            negative: "内心敏感、容易多思、缺乏魄力",
                            timing: "夏季、夜晚、巳午时",
                            direction: "南方",
                            color: "红色、紫色"
                        }
                    },

                    wu: {
                        basic: "戊土：高山厚土，稳重承载",
                        character: "稳重、诚实、有责任心、讲信用",
                        appearance: "身材敦实、面厚、体格健壮",
                        career: "适合土地、建筑、金融、管理、农业",
                        relationships: "忠诚可靠、家庭观念强、重视稳定",
                        health: "注意脾胃、消化系统、肌肉骨骼",
                        detailed: {
                            positive: "诚实守信、稳重可靠、有责任心",
                            negative: "过于保守、变化慢、缺乏灵活性",
                            timing: "四季末、辰戌丑未时",
                            direction: "中央",
                            color: "黄色、棕色"
                        }
                    },

                    ji: {
                        basic: "己土：田园之土，孕育万物",
                        character: "温和、包容、有耐心、善于协调",
                        appearance: "身材适中、面容温和、体态柔美",
                        career: "适合服务、教育、医疗、咨询、农业",
                        relationships: "温和包容、善于照顾人、重视和谐",
                        health: "注意脾胃、消化系统、内分泌",
                        detailed: {
                            positive: "温和包容、耐心细致、适应力强",
                            negative: "容易妥协、缺乏主见、容易焦虑",
                            timing: "四季末、辰戌丑未时",
                            direction: "中央",
                            color: "黄色、棕色"
                        }
                    },

                    geng: {
                        basic: "庚金：刀剑之金，刚锐锋利",
                        character: "刚强、果断、有正义感、讲义气",
                        appearance: "身材匀称、面部轮廓分明、眼神锐利",
                        career: "适合军警、法律、机械、金融、管理",
                        relationships: "讲义气、重友情、直接坦率",
                        health: "注意肺部、呼吸系统、大肠、皮肤",
                        detailed: {
                            positive: "刚强果断、有正义感、执行力强",
                            negative: "过于刚硬、容易冲动、缺乏灵活性",
                            timing: "秋季、傍晚、申酉时",
                            direction: "西方",
                            color: "白色、金色"
                        }
                    },

                    xin: {
                        basic: "辛金：珠宝之金，珍贵美丽",
                        character: "精致、细腻、有审美、追求完美",
                        appearance: "面貌精致、身材匀称、有气质",
                        career: "适合珠宝、设计、艺术、金融、咨询",
                        relationships: "感情细腻、重视品质、追求完美",
                        health: "注意肺部、呼吸系统、皮肤、牙齿",
                        detailed: {
                            positive: "精致细腻、有审美、追求完美",
                            negative: "过于挑剔、容易敏感、追求虚荣",
                            timing: "秋季、傍晚、申酉时",
                            direction: "西方",
                            color: "白色、金色"
                        }
                    },

                    ren: {
                        basic: "壬水：江河之水，奔流不息",
                        character: "聪明、灵活、有智慧、适应性强",
                        appearance: "身材修长、面黑、眼神灵动",
                        career: "适合贸易、运输、传媒、咨询、教育",
                        relationships: "聪明机智、朋友广泛、善于交际",
                        health: "注意肾脏、泌尿系统、血液循环",
                        detailed: {
                            positive: "聪明智慧、适应力强、创新思维",
                            negative: "容易变化、缺乏恒心、过于圆滑",
                            timing: "冬季、夜晚、亥子时",
                            direction: "北方",
                            color: "黑色、蓝色"
                        }
                    },

                    gui: {
                        basic: "癸水：雨露之水，滋润万物",
                        character: "温柔、细腻、有悟性、善于思考",
                        appearance: "身材娇小、面白、眼神温和",
                        career: "适合文化、教育、研究、服务、医疗",
                        relationships: "感情细腻、善解人意、重视精神",
                        health: "注意肾脏、泌尿系统、内分泌",
                        detailed: {
                            positive: "温柔细腻、有悟性、善解人意",
                            negative: "过于敏感、容易多愁、缺乏魄力",
                            timing: "冬季、夜晚、亥子时",
                            direction: "北方",
                            color: "黑色、蓝色"
                        }
                    }
                },

                // 地支取象法
                earthlyBranches: {
                    zi: {
                        basic: "子水：正北之水，阴寒之极",
                        character: "聪明、灵活、内向、有智慧",
                        appearance: "身材中等、面黑、眼睛有神",
                        location: "正北方、江河湖海、低洼之地",
                        career: "水利、贸易、运输、渔业、情报",
                        relationships: "聪明机智、内敛深沉、重视感情",
                        health: "肾脏、泌尿系统、生殖系统",
                        animals: "鼠、燕、蝙蝠",
                        detailed: {
                            positive: "聪明智慧、适应力强、思维敏捷",
                            negative: "过于阴沉、缺乏热情、容易孤僻",
                            timing: "子时（23:00-01:00）",
                            season: "冬季十一月",
                            element: "水"
                        }
                    },

                    chou: {
                        basic: "丑土：东北偏北之土，湿冷之土",
                        character: "稳重、诚实、有耐心、讲信用",
                        appearance: "身材敦实、面黄、体格健壮",
                        location: "东北方、山地、坟墓、仓库",
                        career: "农业、矿业、建筑、金融、仓储",
                        relationships: "忠诚可靠、稳重踏实、家庭观念强",
                        health: "脾胃、消化系统、关节",
                        animals: "牛、龟、鳖",
                        detailed: {
                            positive: "诚实守信、稳重可靠、有耐心",
                            negative: "过于保守、变化慢、缺乏灵活性",
                            timing: "丑时（01:00-03:00）",
                            season: "冬季十二月",
                            element: "土"
                        }
                    },

                    yin: {
                        basic: "寅木：正东偏北之木，初生之木",
                        character: "正直、勇敢、有活力、积极向上",
                        appearance: "身材高大、面青、精神饱满",
                        location: "正东偏北、山林、公园、机关",
                        career: "林业、政府、教育、管理、咨询",
                        relationships: "正直勇敢、有正义感、朋友众多",
                        health: "肝胆、神经系统、四肢",
                        animals: "虎、豹、猫",
                        detailed: {
                            positive: "正直勇敢、积极向上、有领导力",
                            negative: "过于冲动、缺乏耐心、容易急躁",
                            timing: "寅时（03:00-05:00）",
                            season: "春季正月",
                            element: "木"
                        }
                    },

                    mao: {
                        basic: "卯木：正东之木，茂盛之木",
                        character: "温和、善良、有礼貌、善于交际",
                        appearance: "身材苗条、面白、举止优雅",
                        location: "正东方、园林、门窗、集市",
                        career: "文艺、设计、教育、服务、贸易",
                        relationships: "温和善良、人缘好、重视和谐",
                        health: "肝胆、神经系统、眼睛",
                        animals: "兔、貉、驴",
                        detailed: {
                            positive: "温和善良、善于交际、有艺术天赋",
                            negative: "意志不坚、容易妥协、缺乏魄力",
                            timing: "卯时（05:00-07:00）",
                            season: "春季二月",
                            element: "木"
                        }
                    },

                    chen: {
                        basic: "辰土：东南偏东之土，水库之土",
                        character: "灵活、多变、有智慧、善于适应",
                        appearance: "身材适中、面方、眼神灵活",
                        location: "东南偏东、水库、湖泊、山地",
                        career: "贸易、运输、水利、建筑、农业",
                        relationships: "灵活多变、适应力强、朋友广泛",
                        health: "脾胃、皮肤、骨骼",
                        animals: "龙、蛟、鱼",
                        detailed: {
                            positive: "灵活多变、适应力强、有智慧",
                            negative: "容易变化、缺乏恒心、过于圆滑",
                            timing: "辰时（07:00-09:00）",
                            season: "春季三月",
                            element: "土"
                        }
                    },

                    si: {
                        basic: "巳火：正南偏东之火，初生之火",
                        character: "聪明、热情、有思想、善于表达",
                        appearance: "面貌清秀、面红、眼神明亮",
                        location: "正南偏东、炉灶、烟囱、文艺场所",
                        career: "文艺、教育、传媒、能源、服务",
                        relationships: "聪明热情、善于表达、重视感情",
                        health: "心脏、血液循环、神经系统",
                        animals: "蛇、鳝、泥鳅",
                        detailed: {
                            positive: "聪明热情、善于表达、有思想",
                            negative: "容易急躁、缺乏耐心、情绪化",
                            timing: "巳时（09:00-11:00）",
                            season: "夏季四月",
                            element: "火"
                        }
                    },

                    wu: {
                        basic: "午火：正南之火，旺火之极",
                        character: "热情、开朗、积极、有魅力",
                        appearance: "面色红润、身材中等、精神饱满",
                        location: "正南方、阳光充足之地、高台",
                        career: "娱乐、媒体、销售、能源、教育",
                        relationships: "热情开朗、朋友众多、有影响力",
                        health: "心脏、眼睛、血液循环",
                        animals: "马、鹿、驴",
                        detailed: {
                            positive: "热情开朗、积极向上、有魅力",
                            negative: "过于急躁、缺乏耐心、容易冲动",
                            timing: "午时（11:00-13:00）",
                            season: "夏季五月",
                            element: "火"
                        }
                    },

                    wei: {
                        basic: "未土：西南偏南之土，燥热之土",
                        character: "温和、稳重、有耐心、善于照顾",
                        appearance: "身材适中、面黄、性情温和",
                        location: "西南偏南、田园、仓库、厨房",
                        career: "农业、服务、教育、医疗、餐饮",
                        relationships: "温和稳重、善于照顾人、重视家庭",
                        health: "脾胃、消化系统、皮肤",
                        animals: "羊、鹰、鸽",
                        detailed: {
                            positive: "温和稳重、有耐心、善于照顾人",
                            negative: "容易妥协、缺乏主见、过于保守",
                            timing: "未时（13:00-15:00）",
                            season: "夏季六月",
                            element: "土"
                        }
                    },

                    shen: {
                        basic: "申金：正西偏南之金，锋利之金",
                        character: "刚强、果断、有正义感、讲效率",
                        appearance: "身材匀称、面白、眼神锐利",
                        location: "正西偏南、金属场所、道路、桥梁",
                        career: "军警、法律、金融、机械、交通",
                        relationships: "刚强果断、讲义气、重效率",
                        health: "肺部、呼吸系统、大肠",
                        animals: "猴、猩猩、猿",
                        detailed: {
                            positive: "刚强果断、有正义感、执行力强",
                            negative: "过于刚硬、缺乏灵活性、容易冲动",
                            timing: "申时（15:00-17:00）",
                            season: "秋季七月",
                            element: "金"
                        }
                    },

                    you: {
                        basic: "酉金：正西之金，精美之金",
                        character: "精致、细腻、有审美、追求完美",
                        appearance: "面貌精致、身材匀称、有气质",
                        location: "正西方、珠宝店、银行、艺术场所",
                        career: "金融、珠宝、艺术、设计、咨询",
                        relationships: "感情细腻、重视品质、追求完美",
                        health: "肺部、呼吸系统、皮肤",
                        animals: "鸡、鸟、雀",
                        detailed: {
                            positive: "精致细腻、有审美、追求完美",
                            negative: "过于挑剔、容易敏感、追求虚荣",
                            timing: "酉时（17:00-19:00）",
                            season: "秋季八月",
                            element: "金"
                        }
                    },

                    xu: {
                        basic: "戌土：西北偏西之土，燥实之土",
                        character: "诚实、稳重、有责任心、讲信用",
                        appearance: "身材敦实、面方、神态稳重",
                        location: "西北偏西、山地、坟墓、仓库",
                        career: "土地、建筑、金融、管理、农业",
                        relationships: "诚实守信、有责任心、重视稳定",
                        health: "胃、脾、肌肉、关节",
                        animals: "狗、狼、豺",
                        detailed: {
                            positive: "诚实守信、稳重可靠、有责任心",
                            negative: "过于保守、缺乏灵活性、变化慢",
                            timing: "戌时（19:00-21:00）",
                            season: "秋季九月",
                            element: "土"
                        }
                    },

                    hai: {
                        basic: "亥水：正北偏西之水，积水之水",
                        character: "聪明、灵活、有智慧、善于思考",
                        appearance: "身材中等、面黑、眼神温和",
                        location: "正北偏西、湖泊、湿地、低洼之地",
                        career: "文化、教育、研究、咨询、服务",
                        relationships: "聪明灵活、善于思考、重视精神",
                        health: "肾脏、泌尿系统、生殖系统",
                        animals: "猪、熊、鲸",
                        detailed: {
                            positive: "聪明智慧、有思想、善解人意",
                            negative: "过于理想化、缺乏行动力、容易空想",
                            timing: "亥时（21:00-23:00）",
                            season: "冬季十月",
                            element: "水"
                        }
                    }
                }
            }
        },

        // 第三章：象意解读技巧
        chapter3: {
            title: "象意解读技巧",
            keyPoints: [
                "象意的层次分析",
                "主要象意与次要象意",
                "象意的动态变化",
                "象意的综合运用"
            ],

            techniques: {
                // 象意层次分析
                layerAnalysis: {
                    level1: {
                        name: "表象层次",
                        description: "最直接的象意，对应具体的事物和现象",
                        examples: [
                            "甲木：树木、木材、高大建筑",
                            "丙火：太阳、光明、电力",
                            "戊土：土地、山岭、建筑"
                        ]
                    },
                    level2: {
                        name: "特征层次",
                        description: "事物的特征、性质和状态",
                        examples: [
                            "甲木：正直、向上、坚定",
                            "丙火：热情、明亮、活跃",
                            "戊土：稳重、承载、包容"
                        ]
                    },
                    level3: {
                        name: "抽象层次",
                        description: "抽象的概念、关系和规律",
                        examples: [
                            "甲木：成长、发展、领导",
                            "丙火：热情、影响力、知名度",
                            "戊土：稳定、信任、责任"
                        ]
                    },
                    level4: {
                        name: "哲理层次",
                        description: "人生哲理、价值观念和精神追求",
                        examples: [
                            "甲木：正直做人、向上发展",
                            "丙火：光明磊落、温暖他人",
                            "戊土：稳重可靠、承载责任"
                        ]
                    }
                },

                // 主要象意与次要象意
                primarySecondary: {
                    primary: {
                        definition: "由五行十神的基本属性决定的主要象意",
                        characteristics: [
                            "稳定性强，不易改变",
                            "影响范围广，作用时间长",
                            "决定基本特征和发展方向"
                        ],
                        examples: {
                            "正官": "规则、地位、稳定、管理",
                            "偏财": "意外之财、投机、商业、变化",
                            "食神": "享受、艺术、表达、温和"
                        }
                    },
                    secondary: {
                        definition: "由组合关系、环境因素等产生的次要象意",
                        characteristics: [
                            "变化性大，受环境影响",
                            "影响范围相对较小",
                            "影响具体表现和细节"
                        ],
                        examples: {
                            "甲午组合": "木火通明、文化教育、艺术才能",
                            "子卯相刑": "感情波动、人际关系复杂",
                            "辰戌相冲": "环境变化、职业变动"
                        }
                    }
                },

                // 象意动态变化
                dynamicChange: {
                    timeChange: {
                        description: "象意随时间推移的变化规律",
                        factors: [
                            "大运对原局象意的影响",
                            "流年对当年象意的改变",
                            "人生不同阶段的象意重点"
                        ]
                    },
                    environmentChange: {
                        description: "环境对象意表现的影响",
                        factors: [
                            "地理环境的影响",
                            "社会环境的制约",
                            "家庭环境的塑造"
                        ]
                    },
                    subjectiveChange: {
                        description: "主观努力对象意的改变",
                        factors: [
                            "学习修养对品格的改善",
                            "努力奋斗对命运的改善",
                            "心态调整对表现的影响"
                        ]
                    }
                }
            }
        },

        // 第四章：实战应用方法
        chapter4: {
            title: "实战应用方法",
            keyPoints: [
                "性格分析取象",
                "职业指导取象",
                "婚姻预测取象",
                "健康分析取象"
            ],

            applications: {
                // 性格分析取象
                personalityAnalysis: {
                    method: "通过日主和十神组合分析性格特征",
                    steps: [
                        "确定日主的基本性格",
                        "分析十神对性格的影响",
                        "考虑五行生克的作用",
                        "综合判断性格特点"
                    ],
                    examples: {
                        "甲木日主+正官": "正直稳重、有责任感、适合管理",
                        "丙火日主+食神": "热情开朗、有艺术天赋、善于表达",
                        "庚金日主+七杀": "刚强果断、有魄力、适合挑战性工作"
                    }
                },

                // 职业指导取象
                careerGuidance: {
                    method: "根据五行十神的特征推荐适合的职业",
                    principles: [
                        "五行属性决定职业领域",
                        "十神特征决定工作性质",
                        "组合关系决定发展方向",
                        "用神喜忌决定选择时机"
                    ],
                    examples: {
                        "木火通明": "教育、文化、艺术、传媒",
                        "金水相涵": "金融、贸易、运输、咨询",
                        "土生金": "建筑、制造、金融、管理"
                    }
                },

                // 婚姻预测取象
                marriagePrediction: {
                    method: "通过夫妻宫和相关星象分析婚姻状况",
                    analysis: [
                        "夫妻宫的干支组合",
                        "配偶星的强弱状态",
                        "桃花星的影响",
                        "冲合对婚姻的影响"
                    ],
                    examples: {
                        "夫妻宫坐正官": "配偶稳重、婚姻稳定",
                        "夫妻宫坐七杀": "配偶刚强、婚姻多有波折",
                        "夫妻宫坐桃花": "配偶貌美、感情丰富"
                    }
                },

                // 健康分析取象
                healthAnalysis: {
                    method: "通过五行平衡判断健康状况",
                    principles: [
                        "五行强弱对应脏腑健康",
                        "冲合刑害预示疾病",
                        "用神受损影响健康",
                        "大运流年引发健康问题"
                    ],
                    examples: {
                        "木弱金旺": "肝胆问题、筋骨疼痛",
                        "火弱水旺": "心脏问题、血液循环差",
                        "土弱木旺": "脾胃问题、消化不良"
                    }
                }
            }
        }
    },

    // ==================== 取象技法精髓 ====================
    essence: {
        // 取象的五大原则
        fivePrinciples: [
            {
                name: "整体性原则",
                explanation: "取象必须从八字整体出发，综合考虑各种因素",
                application: "不能仅凭一两个干支就下定论，要看全局组合"
            },
            {
                name: "动静结合原则",
                explanation: "既要有静态的象意分析，也要有动态的变化预测",
                application: "分析基本特征的同时，预测发展变化趋势"
            },
            {
                name: "主次分明原则",
                explanation: "区分主要象意和次要象意，抓住主要矛盾",
                application: "优先分析决定性因素，再考虑辅助因素的影响"
            },
            {
                name: "灵活变通原则",
                explanation: "象意不是死板的，要根据具体情况灵活运用",
                application: "同样的干支在不同环境下可能有不同的象意"
            },
            {
                name: "实践验证原则",
                explanation: "取象结果必须通过实践检验，不断修正完善",
                application: "通过实际案例验证取象的准确性，总结经验"
            }
        ],

        // 取象的十大技法
        tenTechniques: [
            {
                name: "直取法",
                description: "直接根据干支的基本属性取象",
                example: "甲木直取为树木、木材"
            },
            {
                name: "引申法",
                description: "由基本象意引申出相关象意",
                example: "甲木引申为教育、文化、成长"
            },
            {
                name: "组合法",
                description: "通过干支组合产生新的象意",
                example: "甲午组合为木火通明"
            },
            {
                name: "生克法",
                description: "通过五行生克关系推断象意",
                example: "水生木为有生机、有发展"
            },
            {
                name: "冲合法",
                description: "通过冲合关系分析象意变化",
                example: "子午冲为变动、冲突"
            },
            {
                name: "刑害法",
                description: "通过刑害关系预示问题",
                example: "子卯刑为感情问题、人际纠纷"
            },
            {
                name: "神助法",
                description: "结合神煞增强取象准确性",
                example: "天乙贵人表示有贵人相助"
            },
            {
                name: "宫位法",
                description: "根据宫位位置确定象意范围",
                example: "年柱表示祖上、早年"
            },
            {
                name: "用神法",
                description: "以用神为中心进行取象",
                example: "用神为水，宜往北方发展"
            },
            {
                name: "综合法",
                description: "综合运用多种方法进行全面分析",
                example: "结合所有因素进行综合判断"
            }
        ]
    },

    // ==================== 实战案例分析 ====================
    caseStudies: [
        {
            title: "案例一：事业成功的八字取象",
            bazi: "甲午 丙戌 癸亥 乙卯",
            analysis: {
                日主: "癸水日主，坐下亥水强根",
                取象: {
                    事业: "木火通明，丙火透出，适合文化教育事业",
                    性格: "癸水温和，甲木正直，有理想有抱负",
                    时机: "当前大运走东方木地，事业发展顺利"
                },
                验证: "此人确实在教育行业取得成就"
            }
        },
        {
            title: "案例二：婚姻波折的八字取象",
            bazi: "庚子 房寅 戊申 庚申",
            analysis: {
                日主: "戊土日主，坐申金泄气",
                取象: {
                    婚姻: "夫妻宫申金，日支申申自刑，婚姻多有波折",
                    性格: "戊土诚实，但金多土弱，意志不够坚定",
                    问题: "申子半合水局，土受克制，婚姻不稳定"
                },
                验证: "此人确实经历了婚姻的起伏变化"
            }
        },
        {
            title: "案例三：健康问题的八字取象",
            bazi: "乙酉 己卯 戊戌 癸亥",
            analysis: {
                日主: "戊土日主，坐戌土为根",
                取象: {
                    健康: "卯酉冲，木受金克，肝胆功能不佳",
                    问题: "乙木正官被酉金克，工作压力大影响健康",
                    建议: "注意肝胆保养，适当运动，调节工作节奏"
                },
                验证: "此人确实有肝胆方面的健康问题"
            }
        }
    ],

    // ==================== 学习要点总结 ====================
    summary: {
        keyPoints: [
            "取象是八字分析的重要方法，是将理论转化为实践的关键",
            "取象要遵循整体性、动静结合、主次分明等原则",
            "要掌握直取、引申、组合、生克等多种取象技法",
            "取象结果要通过实践验证，不断总结提高",
            "取象要结合现代生活实际，赋予新的时代内涵"
        ],

        practiceAdvice: [
            "多分析实际案例，积累取象经验",
            "建立自己的象意数据库，便于查阅使用",
            "注意取象的灵活性和准确性，避免死板套用",
            "结合十神、格局、用神等理论进行综合分析",
            "定期回顾总结，不断完善取象体系"
        ]
    }
};

module.exports = XiangxiangLearning;