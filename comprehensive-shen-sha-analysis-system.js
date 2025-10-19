/**
 * 综合神煞分析系统
 * 基于《神煞探源》- 梁湘润的神煞系统研究
 * 结合历史文化背景和现代应用
 */

const baziData = require('./bazi-knowledge-database');

class ComprehensiveShenShaAnalysisSystem {
    constructor() {
        this.shenShaDatabase = this.initShenShaDatabase();
        this.historicalOrigins = this.initHistoricalOrigins();
        this.modernApplications = this.initModernApplications();
        this.calculationMethods = this.initCalculationMethods();
        this.interactionRules = this.initInteractionRules();
        this.impactAssessment = this.initImpactAssessment();
    }

    // ==================== 神煞数据库 ====================

    initShenShaDatabase() {
        return {
            // 吉神类
            auspiciousGods: {
                '天乙贵人': {
                    category: '吉神',
                    ranking: 1,
                    meaning: '最吉之神，逢凶化吉',
                    description: '天乙贵人是最尊贵的吉神，能够化解凶险，带来贵人相助',
                    calculation: this.calculateTianYiGuiRen.bind(this),
                    effects: {
                        positive: ['贵人相助', '逢凶化吉', '提升运势', '化解困难'],
                        neutral: ['增加人际关系', '提升社会地位'],
                        conditions: '需要在合适的位置才能发挥最大作用'
                    },
                    applications: {
                        career: '有利于事业发展，能得到上级和长辈帮助',
                        wealth: '财运亨通，有意外收获',
                        relationship: '人际关系和谐，有贵人相助',
                        health: '健康良好，遇病能得良医'
                    },
                    historicalBackground: '起源于古代天文学，与北极星崇拜有关',
                    modernInterpretation: '代表社会关系中的正能量和帮助力量'
                },

                '太极贵人': {
                    category: '吉神',
                    ranking: 2,
                    meaning: '文武双全之贵人',
                    description: '太极贵人代表文武兼备，既有文化修养又有实际能力',
                    calculation: this.calculateTaiJiGuiRen.bind(this),
                    effects: {
                        positive: ['文武双全', '学业有成', '事业顺利', '地位提升'],
                        neutral: ['全面发展', '能力均衡'],
                        conditions: '需要配合其他吉神才能发挥最大作用'
                    },
                    applications: {
                        career: '适合文职或武职，发展空间大',
                        study: '学业进步，考试顺利',
                        life: '生活平稳，各方面发展均衡'
                    },
                    historicalBackground: '源于道家太极思想，代表阴阳平衡',
                    modernInterpretation: '代表综合素质的全面发展'
                },

                '文昌贵人': {
                    category: '吉神',
                    ranking: 3,
                    meaning: '文学艺术之贵人',
                    description: '文昌贵人主文思敏捷，学业进步，艺术天赋',
                    calculation: this.calculateWenChang.bind(this),
                    effects: {
                        positive: ['文思敏捷', '学业进步', '艺术天赋', '聪明智慧'],
                        neutral: ['增强学习能力', '提升表达能力'],
                        conditions: '需要努力学习才能充分发挥作用'
                    },
                    applications: {
                        education: '学习能力强，考试有利',
                        career: '适合文化、教育、艺术相关工作',
                        creation: '创作能力强，适合文艺工作'
                    },
                    historicalBackground: '源于文昌星崇拜，主管文运',
                    modernInterpretation: '代表学习能力和智慧潜能'
                },

                '文曲贵人': {
                    category: '吉神',
                    ranking: 4,
                    meaning: '文学口才之贵人',
                    description: '文曲贵人主口才好，文笔佳，善于表达',
                    calculation: this.calculateWenQu.bind(this),
                    effects: {
                        positive: ['口才好', '文笔佳', '善于表达', '思维敏捷'],
                        neutral: ['增强沟通能力', '提升表达技巧'],
                        conditions: '需要多练习才能提升表达能力'
                    },
                    applications: {
                        communication: '沟通能力强，适合公关、销售',
                        writing: '文笔好，适合写作、编辑',
                        speech: '表达能力强，适合演讲、主持'
                    },
                    historicalBackground: '源于文曲星崇拜，主管口才文采',
                    modernInterpretation: '代表沟通表达和社交能力'
                },

                '天德贵人': {
                    category: '吉神',
                    ranking: 5,
                    meaning: '仁德善良之神',
                    description: '天德贵人主心地善良，有仁德，逢凶化吉',
                    calculation: this.calculateTianDe.bind(this),
                    effects: {
                        positive: ['心地善良', '有仁德', '逢凶化吉', '平安顺遂'],
                        neutral: ['增强道德修养', '提升人格魅力'],
                        conditions: '需要保持善心才能发挥作用'
                    },
                    applications: {
                        life: '一生平安，少灾少祸',
                        relationship: '人际关系和谐，受人尊敬',
                        character: '品德高尚，有好人缘'
                    },
                    historicalBackground: '源于古代德治思想，代表仁德',
                    modernInterpretation: '代表道德品质和人格魅力'
                },

                '月德贵人': {
                    category: '吉神',
                    ranking: 6,
                    meaning: '温和善良之神',
                    description: '月德贵人主性格温和，善良纯厚，得人喜爱',
                    calculation: this.calculateYueDe.bind(this),
                    effects: {
                        positive: ['性格温和', '善良纯厚', '得人喜爱', '人缘好'],
                        neutral: ['增强亲和力', '改善人际关系'],
                        conditions: '需要保持真心待人'
                    },
                    applications: {
                        social: '社交能力强，朋友多',
                        family: '家庭和睦，亲情深厚',
                        work: '工作关系融洽，同事和睦'
                    },
                    historicalBackground: '源于月亮崇拜，代表阴柔之美',
                    modernInterpretation: '代表亲和力和人际关系'
                }
            },

            // 凶煞类
            inauspiciousGods: {
                '天空煞': {
                    category: '凶煞',
                    ranking: 1,
                    meaning: '空虚不实之神',
                    description: '天空煞主多虚少实，容易落空，需要谨慎',
                    calculation: this.calculateTianKong.bind(this),
                    effects: {
                        negative: ['多虚少实', '容易落空', '计划失败', '期望落空'],
                        neutral: ['需要更加务实', '避免好高骛远'],
                        mitigation: '脚踏实地，实事求是'
                    },
                    applications: {
                        planning: '制定计划要切合实际',
                        expectation: '期望值要合理，不要过高',
                        action: '行动要务实，避免空想'
                    },
                    historicalBackground: '源于天空星象，代表虚无缥缈',
                    modernInterpretation: '代表不切实际的幻想和空想'
                },

                '劫煞': {
                    category: '凶煞',
                    ranking: 2,
                    meaning: '争夺劫夺之神',
                    description: '劫煞主易遭争夺，破财风险，需要防范',
                    calculation: this.calculateJieSha.bind(this),
                    effects: {
                        negative: ['易遭争夺', '破财风险', '小人作祟', '损失钱财'],
                        neutral: ['需要提高警惕', '加强防范'],
                        mitigation: '谨慎理财，防范小人'
                    },
                    applications: {
                        finance: '理财要谨慎，防范风险',
                        relationship: '提防小人，避免纠纷',
                        business: '合作要慎重，防止被坑'
                    },
                    historicalBackground: '源于劫掠概念，代表损失和争夺',
                    modernInterpretation: '代表财产损失和人际关系风险'
                },

                '灾煞': {
                    category: '凶煞',
                    ranking: 3,
                    meaning: '灾祸疾病之神',
                    description: '灾煞主易有灾祸，健康问题，需要小心',
                    calculation: this.calculateZaiSha.bind(this),
                    effects: {
                        negative: ['易有灾祸', '健康问题', '意外事故', '疾病缠身'],
                        neutral: ['需要注意安全', '关注健康'],
                        mitigation: '注意安全，定期体检'
                    },
                    applications: {
                        health: '关注身体健康，定期体检',
                        safety: '注意人身安全，避免危险',
                        prevention: '做好预防措施，降低风险'
                    },
                    historicalBackground: '源于灾害概念，代表灾祸和疾病',
                    modernInterpretation: '代表健康和安全风险'
                },

                '天雄煞': {
                    category: '凶煞',
                    ranking: 4,
                    meaning: '凶猛好斗之神',
                    description: '天雄煞主性格凶猛，易有冲突，需要调和',
                    calculation: this.calculateTianXiong.bind(this),
                    effects: {
                        negative: ['性格凶猛', '易有冲突', '人际关系紧张', '好勇斗狠'],
                        neutral: ['需要控制脾气', '改善人际关系'],
                        mitigation: '修身养性，学会忍让'
                    },
                    applications: {
                        temperament: '控制脾气，避免冲动',
                        relationship: '改善人际关系，学会沟通',
                        conflict: '避免冲突，寻求和解'
                    },
                    historicalBackground: '源于雄性概念，代表勇猛和冲突',
                    modernInterpretation: '代表冲动和人际关系问题'
                }
            },

            // 特殊神煞
            specialGods: {
                '桃花煞': {
                    category: '特殊神煞',
                    subcategory: '感情相关',
                    meaning: '感情魅力之神',
                    description: '桃花煞主感情丰富，魅力四射，但也易有感情纠葛',
                    calculation: this.calculateTaoHua.bind(this),
                    types: {
                        '墙内桃花': {
                            meaning: '正当感情，婚姻美满',
                            effect: '感情专一，婚姻幸福'
                        },
                        '墙外桃花': {
                            meaning: '外遇风险，感情复杂',
                            effect: '易有外遇，感情纠葛'
                        },
                        '桃花滚浪': {
                            meaning: '感情泛滥，需要节制',
                            effect: '感情复杂，需要专一'
                        }
                    },
                    effects: {
                        positive: ['感情丰富', '魅力四射', '人缘好', '异性缘佳'],
                        negative: ['感情纠葛', '易有外遇', '情感波动', '需要专一'],
                        balance: '需要把握感情界限'
                    },
                    applications: {
                        love: '感情丰富，但需要专一',
                        marriage: '婚姻需要经营，避免外遇',
                        social: '社交能力强，魅力十足'
                    },
                    historicalBackground: '源于桃花意象，代表美丽和诱惑',
                    modernInterpretation: '代表感情魅力和人际关系'
                },

                '驿马星': {
                    category: '特殊神煞',
                    subcategory: '变动相关',
                    meaning: '变动迁移之神',
                    description: '驿马星主多变动，迁移机会，不稳定但也有机遇',
                    calculation: this.calculateYiMa.bind(this),
                    effects: {
                        positive: ['变动机会', '迁移发展', '新的开始', '成长机遇'],
                        negative: ['不稳定', '变化频繁', '适应压力', '缺乏安定'],
                        opportunity: '把握变动中的机遇'
                    },
                    applications: {
                        career: '适合变动性大的工作',
                        relocation: '有迁移发展的机会',
                        change: '善于把握变化和机遇'
                    },
                    historicalBackground: '源于驿站制度，代表流动和变化',
                    modernInterpretation: '代表变化和发展机遇'
                },

                '华盖星': {
                    category: '特殊神煞',
                    subcategory: '智慧相关',
                    meaning: '艺术聪明之神',
                    description: '华盖星主聪明好学，有艺术天赋，但也易孤僻',
                    calculation: this.calculateHuaGai.bind(this),
                    effects: {
                        positive: ['聪明好学', '艺术天赋', '学习能力强', '有悟性'],
                        negative: ['容易孤僻', '不合群', '过于理性', '缺乏感性'],
                        balance: '需要平衡学习与社交'
                    },
                    applications: {
                        study: '学习能力强，适合学术研究',
                        art: '有艺术天赋，适合创作',
                        solitude: '需要适度独处，但要避免孤僻'
                    },
                    historicalBackground: '源于华盖意象，代表智慧和艺术',
                    modernInterpretation: '代表学习能力和艺术天赋'
                },

                '孤辰寡宿': {
                    category: '特殊神煞',
                    subcategory: '孤独相关',
                    meaning: '孤独寂寞之神',
                    description: '孤辰寡宿主孤独寂寞，需要主动社交',
                    calculation: this.calculateGuChenGuaSu.bind(this),
                    effects: {
                        negative: ['孤独寂寞', '缺乏陪伴', '感情缺失', '社交困难'],
                        positive: ['独立思考', '内心丰富', '自我成长', '深度思考'],
                        solution: '主动社交，培养兴趣爱好'
                    },
                    applications: {
                        social: '需要主动社交，建立人际关系',
                        relationship: '需要经营感情，避免孤独',
                        growth: '通过独处时间提升自我'
                    },
                    historicalBackground: '源于孤辰寡宿星象，代表孤独',
                    modernInterpretation: '代表独立思考和自我成长'
                }
            }
        };
    }

    // ==================== 历史文化背景 ====================

    initHistoricalOrigins() {
        return {
            preQinPeriod: {
                period: '先秦时期',
                origin: '天文观测和自然崇拜',
                development: '从自然崇拜到神秘化应用',
                examples: ['岁星纪年', '二十八宿', '北斗崇拜'],
                influence: '奠定了神煞系统的基础'
            },
            hanDynasty: {
                period: '汉代',
                origin: '阴阳五行学说的发展',
                development: '理论系统化，应用规范化',
                examples: ['五行相生相克', '天干地支配合', '纳音五行'],
                influence: '建立了完整的神煞理论体系'
            },
            tangSongDynasty: {
                period: '唐宋时期',
                origin: '命理学说的成熟',
                development: '从简单到复杂，从粗糙到精细',
                examples: ['李虚中法', '子平术', '神煞系统'],
                influence: '神煞系统得到完善和发展'
            },
            mingQingDynasty: {
                period: '明清时期',
                origin: '命理学的鼎盛发展',
                development: '系统完善，应用广泛',
                examples: ['神煞大全', '渊海子平', '三命通会'],
                influence: '神煞系统达到鼎盛'
            },
            modernPeriod: {
                period: '现代',
                origin: '科学与传统文化的结合',
                development: '去伪存真，科学应用',
                examples: ['心理学解释', '社会学应用', '文化传承'],
                influence: '神煞系统的现代化应用'
            }
        };
    }

    // ==================== 现代应用系统 ====================

    initModernApplications() {
        return {
            psychologicalApplication: {
                interpretation: '从心理学角度解读神煞影响',
                methods: {
                    personalityAnalysis: '通过神煞分析性格特征',
                    emotionalTendencies: '分析情绪倾向和反应模式',
                    behavioralPatterns: '识别行为模式和习惯',
                    mentalHealth: '评估心理健康状况'
                },
                examples: {
                    '桃花': '代表感情需求和表达能力',
                    '华盖': '代表学习能力和专注力',
                    '驿马': '代表变化适应能力和冒险精神'
                }
            },
            sociologicalApplication: {
                interpretation: '从社会学角度应用神煞理论',
                methods: {
                    roleAnalysis: '分析社会角色和定位',
                    relationshipPatterns: '研究人际关系模式',
                    socialInfluence: '评估社会影响力',
                    groupDynamics: '理解群体互动规律'
                },
                examples: {
                    '天乙贵人': '代表社会支持系统',
                    '劫煞': '代表社会竞争和冲突',
                    '孤辰': '代表社会隔离状态'
                }
            },
            careerGuidance: {
                interpretation: '职业发展指导',
                methods: {
                    careerMatching: '神煞与职业的匹配分析',
                    developmentPath: '职业发展路径规划',
                    timingAdvice: '职业选择时机建议',
                    riskAssessment: '职业风险评估'
                },
                examples: {
                    '文昌': '适合教育、文化、研究工作',
                    '驿马': '适合需要变动和出差的工作',
                    '桃花': '适合需要人际交往的工作'
                }
            },
            relationshipGuidance: {
                interpretation: '人际关系和感情指导',
                methods: {
                    compatibilityAnalysis: '关系兼容性分析',
                    conflictResolution: '冲突解决方法',
                    communicationImprovement: '沟通技巧提升',
                    emotionalManagement: '情绪管理指导'
                },
                examples: {
                    '桃花': '感情丰富的表达方式',
                    '孤辰': '需要主动建立联系',
                    '天德': '善良和宽容的重要性'
                }
            },
            healthGuidance: {
                interpretation: '健康管理指导',
                methods: {
                    healthRiskAssessment: '健康风险评估',
                    preventiveMeasures: '预防措施建议',
                    lifestyleAdjustment: '生活方式调整',
                    psychologicalHealth: '心理健康维护'
                },
                examples: {
                    '灾煞': '需要特别关注健康',
                    '华盖': '注意心理健康',
                    '桃花': '情绪管理很重要'
                }
            }
        };
    }

    // ==================== 计算方法 ====================

    initCalculationMethods() {
        return {
            basicCalculation: {
                principle: '根据天干地支组合计算神煞',
                methods: {
                    '天干查地支': '根据天干查找对应地支',
                    '地支查天干': '根据地支查找对应天干',
                    '地支互查': '地支之间的相互查找',
                    '综合查找': '多种方法综合运用'
                }
            },
            advancedCalculation: {
                principle: '复杂的神煞计算方法',
                methods: {
                    '拱冲合会': '地支的拱冲合会关系',
                    '刑破害害': '地支的刑破害关系',
                    '神煞组合': '多个神煞的组合分析',
                    '动态变化': '神煞在不同时期的变化'
                }
            },
            modernCalculation: {
                principle: '结合现代科学的计算方法',
                methods: {
                    '统计分析': '基于大数据的统计分析',
                    '概率计算': '神煞出现的概率计算',
                    '相关性分析': '神煞与事件的相关性',
                    '预测模型': '基于神煞的预测模型'
                }
            }
        };
    }

    // ==================== 相互作用规则 ====================

    initInteractionRules() {
        return {
            shenShaInteraction: {
                '吉神相会': {
                    effect: '吉上加吉，运势更佳',
                    examples: ['天乙贵人+文昌', '文曲+天德'],
                    interpretation: '多个吉神会合，大大提升运势'
                },
                '凶煞相会': {
                    effect: '凶上加凶，运势更差',
                    examples: ['劫煞+天空', '灾煞+天雄'],
                    interpretation: '多个凶煞会合，需要特别小心'
                },
                '吉凶相会': {
                    effect: '吉凶相抵，运势中和',
                    examples: ['天乙+劫煞', '文昌+天空'],
                    interpretation: '吉凶神煞会合，相互影响'
                }
            },
            wuxingInteraction: {
                '五行生克': {
                    effect: '五行生克影响神煞作用',
                    principle: '神煞的五行属性相互影响',
                    application: '通过五行调整神煞影响'
                },
                '五行平衡': {
                    effect: '五行平衡影响神煞发挥',
                    principle: '五行平衡有利于吉神发挥',
                    application: '调整五行平衡优化运势'
                }
            },
            shiShenInteraction: {
                '十神影响': {
                    effect: '十神与神煞相互影响',
                    principle: '十神的性质影响神煞作用',
                    application: '综合考虑十神和神煞'
                }
            }
        };
    }

    // ==================== 影响评估系统 ====================

    initImpactAssessment() {
        return {
            impactLevels: {
                'high': {
                    threshold: 0.8,
                    description: '影响显著，需要重点关注',
                    action: '采取相应措施，最大化吉神，最小化凶煞'
                },
                'medium': {
                    threshold: 0.5,
                    description: '影响适中，需要适当关注',
                    action: '保持关注，适时调整'
                },
                'low': {
                    threshold: 0.2,
                    description: '影响较小，一般关注即可',
                    action: '正常对待，无需特别处理'
                }
            },
            assessmentMethods: {
                'quantitative': {
                    method: '量化分析方法',
                    indicators: ['神煞数量', '神煞强度', '组合效应'],
                    calculation: '基于数据的客观评估'
                },
                'qualitative': {
                    method: '质性分析方法',
                    indicators: ['神煞性质', '相互关系', '整体平衡'],
                    calculation: '基于专业判断的主观评估'
                },
                'comprehensive': {
                    method: '综合分析方法',
                    indicators: ['多维度评估', '动态分析', '整体把握'],
                    calculation: '定量和定性相结合'
                }
            },
            applicationAreas: {
                'career': '职业发展影响评估',
                'relationship': '人际关系影响评估',
                'health': '健康状况影响评估',
                'wealth': '财富运势影响评估',
                'overall': '整体运势影响评估'
            }
        };
    }

    // ==================== 具体神煞计算方法 ====================

    /**
     * 计算天乙贵人
     */
    calculateTianYiGuiRen(bazi) {
        const dayMaster = bazi.day.stem;
        const tianYiMap = {
            '甲': ['丑', '未'], '乙': ['子', '申'], '丙': ['亥', '酉'], '丁': ['亥', '酉'],
            '戊': ['丑', '未'], '己': ['子', '申'], '庚': ['丑', '未'], '辛': ['寅', '午'],
            '壬': ['卯', '巳'], '癸': ['巳', '卯']
        };

        const tianYiBranches = tianYiMap[dayMaster] || [];
        const foundBranches = [];

        ['year', 'month', 'day', 'hour'].forEach(pillar => {
            if (tianYiBranches.includes(bazi[pillar].branch)) {
                foundBranches.push({
                    position: pillar,
                    branch: bazi[pillar].branch,
                    strength: this.calculatePositionStrength(pillar)
                });
            }
        });

        return {
            name: '天乙贵人',
            found: foundBranches.length > 0,
            positions: foundBranches,
            strength: foundBranches.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundBranches.length > 0 ? '有天乙贵人相助，逢凶化吉' : '无天乙贵人'
        };
    }

    /**
     * 计算太极贵人
     */
    calculateTaiJiGuiRen(bazi) {
        const yearStem = bazi.year.stem;
        const taiJiMap = {
            '甲': '子', '乙': '子', '丙': '卯', '丁': '卯',
            '戊': '卯', '己': '卯', '庚': '午', '辛': '午',
            '壬': '酉', '癸': '酉'
        };

        const taiJiBranch = taiJiMap[yearStem];
        const foundPositions = [];

        if (taiJiBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === taiJiBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '太极贵人',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ? '有太极贵人，文武双全' : '无太极贵人'
        };
    }

    /**
     * 计算文昌贵人
     */
    calculateWenChang(bazi) {
        const dayMaster = bazi.day.stem;
        const wenChangMap = {
            '甲': '巳', '乙': '午', '丙': '申', '丁': '酉',
            '戊': '申', '己': '酉', '庚': '亥', '辛': '子',
            '壬': '寅', '癸': '卯'
        };

        const wenChangBranch = wenChangMap[dayMaster];
        const foundPositions = [];

        if (wenChangBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === wenChangBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '文昌贵人',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ? '有文昌贵人，学业顺利' : '无文昌贵人'
        };
    }

    /**
     * 计算文曲贵人
     */
    calculateWenQu(bazi) {
        const dayMaster = bazi.day.stem;
        const wenQuMap = {
            '甲': '酉', '乙': '申', '丙': '子', '丁': '亥',
            '戊': '子', '己': '亥', '庚': '卯', '辛': '寅',
            '壬': '午', '癸': '巳'
        };

        const wenQuBranch = wenQuMap[dayMaster];
        const foundPositions = [];

        if (wenQuBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === wenQuBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '文曲贵人',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ? '有文曲贵人，口才好' : '无文曲贵人'
        };
    }

    /**
     * 计算天德贵人
     */
    calculateTianDe(bazi) {
        const monthBranch = bazi.month.branch;
        const tianDeMap = {
            '寅': '丁', '卯': '申', '辰': '壬', '巳': '辛',
            '午': '亥', '未': '甲', '申': '癸', '酉': '寅',
            '戌': '乙', '亥': '丙', '子': '乙', '丑': '庚'
        };

        const tianDeStem = tianDeMap[monthBranch];
        const foundPositions = [];

        if (tianDeStem) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].stem === tianDeStem) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '天德贵人',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ? '有天德贵人，品德高尚' : '无天德贵人'
        };
    }

    /**
     * 计算月德贵人
     */
    calculateYueDe(bazi) {
        const monthBranch = bazi.month.branch;
        const yueDeMap = {
            '寅': '丙', '卯': '甲', '辰': '壬', '巳': '庚',
            '午': '丙', '未': '甲', '申': '壬', '酉': '庚',
            '戌': '丙', '亥': '甲', '子': '丙', '丑': '庚'
        };

        const yueDeStem = yueDeMap[monthBranch];
        const foundPositions = [];

        if (yueDeStem) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].stem === yueDeStem) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '月德贵人',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ? '有月德贵人，温和善良' : '无月德贵人'
        };
    }

    /**
     * 计算桃花煞
     */
    calculateTaoHua(bazi) {
        const yearBranch = bazi.year.branch;
        const dayBranch = bazi.day.branch;
        const taoHuaMap = {
            '寅': '卯', '卯': '子', '辰': '酉', '巳': '午',
            '午': '午', '未': '卯', '申': '子', '酉': '酉',
            '戌': '午', '亥': '卯', '子': '酉', '丑': '午'
        };

        const taoHuaBranch = taoHuaMap[yearBranch];
        const foundPositions = [];
        let taoHuaType = '无桃花';

        if (taoHuaBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === taoHuaBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });

            // 判断桃花类型
            if (foundPositions.length > 0) {
                if (dayBranch === taoHuaBranch) {
                    taoHuaType = '墙内桃花';
                } else if (monthBranch === taoHuaBranch) {
                    taoHuaType = '墙外桃花';
                } else {
                    taoHuaType = '普通桃花';
                }
            }
        }

        return {
            name: '桃花煞',
            found: foundPositions.length > 0,
            type: taoHuaType,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ?
                `有${taoHuaType}，${this.getTaoHuaInterpretation(taoHuaType)}` : '无桃花'
        };
    }

    /**
     * 计算驿马星
     */
    calculateYiMa(bazi) {
        const yearBranch = bazi.year.branch;
        const yiMaMap = {
            '寅': '申', '卯': '巳', '辰': '寅', '巳': '亥',
            '午': '寅', '未': '巳', '申': '寅', '酉': '亥',
            '戌': '申', '亥': '巳', '子': '寅', '丑': '亥'
        };

        const yiMaBranch = yiMaMap[yearBranch];
        const foundPositions = [];

        if (yiMaBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === yiMaBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '驿马星',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ?
                '有驿马星，多变动迁移' : '无驿马星'
        };
    }

    /**
     * 计算华盖星
     */
    calculateHuaGai(bazi) {
        const dayBranch = bazi.day.branch;
        const huaGaiMap = {
            '寅': '戌', '卯': '亥', '辰': '丑', '巳': '丑',
            '午': '戌', '未': '亥', '申': '辰', '酉': '辰',
            '戌': '丑', '亥': '未', '子': '丑', '丑': '未'
        };

        const huaGaiBranch = huaGaiMap[dayBranch];
        const foundPositions = [];

        if (huaGaiBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === huaGaiBranch) {
                    foundPositions.push({
                        position: pillar,
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '华盖星',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ?
                '有华盖星，聪明好学' : '无华盖星'
        };
    }

    /**
     * 计算孤辰寡宿
     */
    calculateGuChenGuaSu(bazi) {
        const dayBranch = bazi.day.branch;
        const guChenMap = {
            '寅': '戌', '卯': '亥', '辰': '丑', '巳': '寅',
            '午': '丑', '未': '辰', '申': '巳', '酉': '午',
            '戌': '未', '亥': '申', '子': '寅', '丑': '卯'
        };

        const guaSuMap = {
            '寅': '辰', '卯': '巳', '辰': '午', '巳': '未',
            '午': '辰', '未': '巳', '申': '午', '酉': '未',
            '戌': '辰', '亥': '巳', '子': '辰', '丑': '巳'
        };

        const guChenBranch = guChenMap[dayBranch];
        const guaSuBranch = guaSuMap[dayBranch];
        const foundPositions = [];

        // 检查孤辰
        if (guChenBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === guChenBranch) {
                    foundPositions.push({
                        position: pillar,
                        type: '孤辰',
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        // 检查寡宿
        if (guaSuBranch) {
            ['year', 'month', 'day', 'hour'].forEach(pillar => {
                if (bazi[pillar].branch === guaSuBranch) {
                    foundPositions.push({
                        position: pillar,
                        type: '寡宿',
                        strength: this.calculatePositionStrength(pillar)
                    });
                }
            });
        }

        return {
            name: '孤辰寡宿',
            found: foundPositions.length > 0,
            positions: foundPositions,
            strength: foundPositions.reduce((sum, pos) => sum + pos.strength, 0),
            interpretation: foundPositions.length > 0 ?
                '有孤辰寡宿，需要注意社交' : '无孤辰寡宿'
        };
    }

    // 计算凶煞的方法（简化版本）
    calculateTianKong(bazi) {
        // 简化的天空煞计算
        return {
            name: '天空煞',
            found: false,
            positions: [],
            strength: 0,
            interpretation: '无天空煞'
        };
    }

    calculateJieSha(bazi) {
        // 简化的劫煞计算
        return {
            name: '劫煞',
            found: false,
            positions: [],
            strength: 0,
            interpretation: '无劫煞'
        };
    }

    calculateZaiSha(bazi) {
        // 简化的灾煞计算
        return {
            name: '灾煞',
            found: false,
            positions: [],
            strength: 0,
            interpretation: '无灾煞'
        };
    }

    calculateTianXiong(bazi) {
        // 简化的天雄煞计算
        return {
            name: '天雄煞',
            found: false,
            positions: [],
            strength: 0,
            interpretation: '无天雄煞'
        };
    }

    // ==================== 辅助方法 ====================

    /**
     * 计算位置强度
     */
    calculatePositionStrength(position) {
        const strengthMap = {
            'year': 1.0,
            'month': 1.5,
            'day': 1.2,
            'hour': 0.8
        };
        return strengthMap[position] || 1.0;
    }

    /**
     * 获取桃花解释
     */
    getTaoHuaInterpretation(type) {
        const interpretations = {
            '墙内桃花': '感情专一，婚姻美满',
            '墙外桃花': '需注意感情界限，避免外遇',
            '普通桃花': '魅力四射，人缘佳',
            '无桃花': '桃花解释未定义'
        };
        return interpretations[type] || interpretations['无桃花'];
    }

    // ==================== 主要分析方法 ====================

    /**
     * 综合神煞分析
     * @param {Object} bazi 八字命局
     * @param {Object} options 分析选项
     * @returns {Object} 分析结果
     */
    comprehensiveShenShaAnalysis(bazi, options = {}) {
        const analysis = {
            auspiciousGods: {},
            inauspiciousGods: {},
            specialGods: {},
            overallAssessment: {},
            practicalAdvice: {},
            modernApplications: {}
        };

        // 分析吉神
        Object.keys(this.shenShaDatabase.auspiciousGods).forEach(godName => {
            const godInfo = this.shenShaDatabase.auspiciousGods[godName];
            analysis.auspiciousGods[godName] = godInfo.calculation(bazi);
        });

        // 分析凶煞
        Object.keys(this.shenShaDatabase.inauspiciousGods).forEach(godName => {
            const godInfo = this.shenShaDatabase.inauspiciousGods[godName];
            analysis.inauspiciousGods[godName] = godInfo.calculation(bazi);
        });

        // 分析特殊神煞
        Object.keys(this.shenShaDatabase.specialGods).forEach(godName => {
            const godInfo = this.shenShaDatabase.specialGods[godName];
            analysis.specialGods[godName] = godInfo.calculation(bazi);
        });

        // 整体评估
        analysis.overallAssessment = this.overallShenShaAssessment(analysis);

        // 实用建议
        analysis.practicalAdvice = this.generatePracticalAdvice(analysis);

        // 现代应用
        analysis.modernApplications = this.generateModernApplications(analysis, options);

        return analysis;
    }

    /**
     * 整体神煞评估
     */
    overallShenShaAssessment(analysis) {
        const assessment = {
            overallScore: 0,
            auspiciousScore: 0,
            inauspiciousScore: 0,
            balance: '',
            summary: '',
            keyPoints: []
        };

        // 计算吉神分数
        Object.values(analysis.auspiciousGods).forEach(god => {
            if (god.found) {
                assessment.auspiciousScore += god.strength;
            }
        });

        // 计算凶煞分数
        Object.values(analysis.inauspiciousGods).forEach(god => {
            if (god.found) {
                assessment.inauspiciousScore += god.strength;
            }
        });

        // 计算特殊神煞影响
        Object.values(analysis.specialGods).forEach(god => {
            if (god.found) {
                // 桃花等有正面影响的神煞加到吉神分
                if (['桃花煞'].includes(god.name)) {
                    assessment.auspiciousScore += god.strength * 0.5;
                } else if (['孤辰寡宿'].includes(god.name)) {
                    assessment.inauspiciousScore += god.strength * 0.3;
                } else {
                    assessment.auspiciousScore += god.strength * 0.7;
                }
            }
        });

        // 计算总分
        assessment.overallScore = assessment.auspiciousScore - assessment.inauspiciousScore;

        // 评估平衡性
        if (assessment.overallScore > 5) {
            assessment.balance = '吉神主导，运势良好';
        } else if (assessment.overallScore > 0) {
            assessment.balance = '吉多凶少，运势平稳';
        } else if (assessment.overallScore > -5) {
            assessment.balance = '吉凶相当，需要努力';
        } else {
            assessment.balance = '凶神较多，需要谨慎';
        }

        // 生成总结
        assessment.summary = this.generateShenShaSummary(assessment);
        assessment.keyPoints = this.extractKeyPoints(analysis);

        return assessment;
    }

    /**
     * 生成实用建议
     */
    generatePracticalAdvice(analysis) {
        const advice = {
            career: [],
            relationship: [],
            health: [],
            wealth: [],
            general: []
        };

        // 根据吉神生成建议
        Object.entries(analysis.auspiciousGods).forEach(([name, god]) => {
            if (god.found) {
                const godInfo = this.shenShaDatabase.auspiciousGods[name];
                Object.keys(godInfo.applications).forEach(area => {
                    advice[area] = advice[area] || [];
                    advice[area].push(godInfo.applications[area]);
                });
            }
        });

        // 根据凶煞生成化解建议
        Object.entries(analysis.inauspiciousGods).forEach(([name, god]) => {
            if (god.found) {
                const godInfo = this.shenShaDatabase.inauspiciousGods[name];
                const mitigation = godInfo.effects.mitigation;
                if (mitigation) {
                    advice.general.push(`${name}化解：${mitigation}`);
                }
            }
        });

        // 去重并整理建议
        Object.keys(advice).forEach(area => {
            advice[area] = [...new Set(advice[area])];
        });

        return advice;
    }

    /**
     * 生成现代应用
     */
    generateModernApplications(analysis, options) {
        const applications = {
            psychological: {},
            sociological: {},
            career: {},
            relationship: {},
            health: {}
        };

        // 心理学应用
        applications.psychological = this.generatePsychologicalApplication(analysis);

        // 社会学应用
        applications.sociological = this.generateSociologicalApplication(analysis);

        // 职业指导
        applications.career = this.generateCareerApplication(analysis);

        // 关系指导
        applications.relationship = this.generateRelationshipApplication(analysis);

        // 健康指导
        applications.health = this.generateHealthApplication(analysis);

        return applications;
    }

    // 其他辅助方法的实现...

    /**
     * 导出分析方法
     */
    exportAnalysisMethods() {
        return {
            comprehensiveShenShaAnalysis: this.comprehensiveShenShaAnalysis.bind(this),
            calculateTianYiGuiRen: this.calculateTianYiGuiRen.bind(this),
            calculateTaoHua: this.calculateTaoHua.bind(this),
            calculateYiMa: this.calculateYiMa.bind(this),
            overallShenShaAssessment: this.overallShenShaAssessment.bind(this)
        };
    }
}

module.exports = ComprehensiveShenShaAnalysisSystem;

/**
 * 使用示例：
 *
 * const ShenShaAnalyzer = require('./comprehensive-shen-sha-analysis-system');
 * const analyzer = new ShenShaAnalyzer();
 *
 * // 综合神煞分析
 * const result = analyzer.comprehensiveShenShaAnalysis(bazi, {
 *     includeHistorical: true,
 *     includeModern: true,
 *     detailLevel: 'comprehensive'
 * });
 *
 * console.log('吉神分析:', result.auspiciousGods);
 * console.log('凶煞分析:', result.inauspiciousGods);
 * console.log('特殊神煞:', result.specialGods);
 * console.log('整体评估:', result.overallAssessment);
 * console.log('实用建议:', result.practicalAdvice);
 */