/**
 * 高级十神深层含义分析系统
 * 基于《十神含义阐微》- 杨逸云的理论精髓
 * 结合心理学、社会学、哲学的深度分析
 */

const baziData = require('./bazi-knowledge-database');

class AdvancedShiShenAnalysisSystem {
    constructor() {
        this.psychologicalProfiles = this.initPsychologicalProfiles();
        this.socialRoleMapping = this.initSocialRoleMapping();
        this.philosophicalMeanings = this.initPhilosophicalMeanings();
        this.modernApplications = this.initModernApplications();
        this.combinationPatterns = this.initCombinationPatterns();
        this.variationRules = this.initVariationRules();
    }

    // ==================== 十神心理学分析系统 ====================

    initPsychologicalProfiles() {
        return {
            '比肩': {
                corePsychology: '自我意识与独立性',
                personalityTraits: {
                    positive: ['独立自主', '有主见', '自尊心强', '善于合作', '有责任心'],
                    negative: ['固执己见', '竞争心强', '不合群', '自我中心', '缺乏灵活性'],
                    neutral: ['理性思考', '客观判断', '平等意识', '自我认知']
                },
                cognitiveStyle: '分析型思维，注重逻辑和事实',
                emotionalPattern: '情绪稳定，但易因竞争而激动',
                motivationType: '内在驱动，追求自我实现',
                stressResponse: '面对压力时倾向于独立解决',
                learningStyle: '自主性学习，喜欢探索和发现'
            },
            '劫财': {
                corePsychology: '资源获取与冒险精神',
                personalityTraits: {
                    positive: ['豪爽大方', '善于交际', '冒险精神', '适应力强', '人脉广泛'],
                    negative: ['冲动消费', '缺乏计划', '易破财', '人际关系复杂', '风险偏好'],
                    neutral: ['社交能力强', '应变能力好', '行动力强', '机会意识']
                },
                cognitiveStyle: '直觉型思维，注重机会和可能性',
                emotionalPattern: '情绪波动大，易受外界影响',
                motivationType: '外在驱动，追求刺激和回报',
                stressResponse: '面对压力时寻求外部支持或冒险',
                learningStyle: '体验式学习，喜欢实践和尝试'
            },
            '正官': {
                corePsychology: '秩序建立与社会责任',
                personalityTraits: {
                    positive: ['有责任心', '正直守信', '重视规则', '有领导力', '目标明确'],
                    negative: ['过于保守', '缺乏灵活性', '压力大', '完美主义', '控制欲强'],
                    neutral: ['理性思考', '长远规划', '组织能力', '纪律性强']
                },
                cognitiveStyle: '结构化思维，注重系统和方法',
                emotionalPattern: '情绪内敛，追求稳定和可控',
                motivationType: '成就驱动，追求地位和认可',
                stressResponse: '面对压力时加强控制和规划',
                learningStyle: '系统性学习，喜欢理论和框架'
            },
            '七杀': {
                corePsychology: '权力追求与挑战应对',
                personalityTraits: {
                    positive: ['野心勃勃', '果断勇猛', '抗压能力强', '有威严', '执行力强'],
                    negative: ['过于激进', '易树敌', '压力过大', '控制欲强', '缺乏耐心'],
                    neutral: ['目标导向', '竞争意识', '应变能力', '领导潜质']
                },
                cognitiveStyle: '战略性思维，注重目标和结果',
                emotionalPattern: '情绪强烈，易激动但恢复快',
                motivationType: '权力驱动，追求控制和影响力',
                stressResponse: '面对压力时更加激进和坚定',
                learningStyle: '目标导向学习，注重实用和效果'
            },
            '正财': {
                corePsychology: '价值创造与稳定追求',
                personalityTraits: {
                    positive: ['诚实守信', '勤奋踏实', '有理财能力', '重视稳定', '责任心强'],
                    negative: ['保守僵化', '缺乏冒险', '变化慢', '过于务实', '缺乏想象力'],
                    neutral: ['理性思考', '计划性强', '执行力好', '稳定可靠']
                },
                cognitiveStyle: '实用型思维，注重现实和可行性',
                emotionalPattern: '情绪平稳，追求安全和保障',
                motivationType: '安全驱动，追求稳定和积累',
                stressResponse: '面对压力时保守应对，寻求稳定',
                learningStyle: '渐进式学习，注重基础和实用'
            },
            '偏财': {
                corePsychology: '机遇把握与资源流动',
                personalityTraits: {
                    positive: ['机敏灵活', '善于把握机会', '商业头脑', '人脉广泛', '适应力强'],
                    negative: ['财富不稳定', '易投机', '缺乏耐心', '变化频繁', '风险意识弱'],
                    neutral: ['机会敏感', '应变能力强', '商业直觉', '资源整合能力']
                },
                cognitiveStyle: '机会型思维，注重可能性和变化',
                emotionalPattern: '情绪变化快，易受机遇影响',
                motivationType: '机会驱动，追求变化和收益',
                stressResponse: '面对压力时寻求变化和机会',
                learningStyle: '跳跃式学习，喜欢新奇和变化'
            },
            '正印': {
                corePsychology: '知识传承与保护滋养',
                personalityTraits: {
                    positive: ['仁慈善良', '喜欢学习', '有保护欲', '责任心强', '思维严谨'],
                    negative: ['依赖性强', '缺乏主动性', '保守', '过度保护', '变化慢'],
                    neutral: ['学习能力强', '理解力好', '记忆力强', '分析能力']
                },
                cognitiveStyle: '分析型思维，注重理解和记忆',
                emotionalPattern: '情绪温和，追求理解和安全',
                motivationType: '知识驱动，追求学习和成长',
                stressResponse: '面对压力时寻求知识和支持',
                learningStyle: '深度学习，喜欢理论和原理'
            },
            '偏印': {
                corePsychology: '创新思维与独特视角',
                personalityTraits: {
                    positive: ['创新能力强', '独特见解', '专业技能', '直觉敏锐', '独立思考'],
                    negative: ['孤僻多疑', '不合群', '思维怪异', '缺乏耐心', '过于理性'],
                    neutral: ['创造力强', '分析深入', '视角独特', '钻研精神']
                },
                cognitiveStyle: '创新型思维，注重独特和深度',
                emotionalPattern: '情绪复杂，追求独特和理解',
                motivationType: '创新驱动，追求独特和深度',
                stressResponse: '面对压力时更加独立和理性',
                learningStyle: '专业化学习，喜欢深入和专精'
            },
            '食神': {
                corePsychology: '才华展现与生活享受',
                personalityTraits: {
                    positive: ['温和善良', '有艺术天分', '生活品味高', '表达能力好', '享受生活'],
                    negative: ['懒惰贪图', '缺乏进取', '过于乐观', '易满足', '缺乏压力'],
                    neutral: ['艺术感强', '表达能力强', '生活态度好', '社交能力强']
                },
                cognitiveStyle: '艺术型思维，注重美感和表达',
                emotionalPattern: '情绪积极，追求快乐和美好',
                motivationType: '享受驱动，追求快乐和美好',
                stressResponse: '面对压力时逃避或寻求享受',
                learningStyle: '兴趣导向学习，喜欢艺术和表达'
            },
            '伤官': {
                corePsychology: '智慧创新与制度挑战',
                personalityTraits: {
                    positive: ['聪明机智', '创新能力强', '思维敏捷', '表达能力好', '敢于挑战'],
                    negative: ['叛逆不服', '易惹是非', '过于批判', '缺乏耐心', '难以管理'],
                    neutral: ['智慧过人', '思维活跃', '表达能力强', '创新意识']
                },
                cognitiveStyle: '创新型思维，注重突破和创新',
                emotionalPattern: '情绪激烈，追求表达和认可',
                motivationType: '创新驱动，追求突破和认可',
                stressResponse: '面对压力时更加创新和反抗',
                learningStyle: '探索式学习，喜欢挑战和创新'
            }
        };
    }

    // ==================== 社会角色现代化映射 ====================

    initSocialRoleMapping() {
        return {
            '比肩': {
                modernRoles: ['合伙人', '团队成员', '同事', '朋友', '竞争对手'],
                careerFields: ['企业管理', '团队合作', '自主创业', '销售', '咨询'],
                relationshipPatterns: '平等关系，合作与竞争并存',
                socialValue: '促进合作与竞争的平衡'
            },
            '劫财': {
                modernRoles: ['投资者', '商人', '销售员', '社交达人', '风险投资者'],
                careerFields: ['商业贸易', '投资理财', '市场营销', '娱乐', '公关'],
                relationshipPatterns: '广泛社交，资源共享',
                socialValue: '促进资源流动和社会活跃度'
            },
            '正官': {
                modernRoles: ['管理者', '公务员', '教师', '律师', '企业高管'],
                careerFields: ['行政管理', '教育培训', '法律', '咨询', '公共服务'],
                relationshipPatterns: '层级关系，责任与权威',
                socialValue: '维护社会秩序和规则'
            },
            '七杀': {
                modernRoles: ['企业家', '领导者', '改革者', '创业者', '高级管理者'],
                careerFields: ['创业投资', '改革变革', '高层管理', '军警', '竞技体育'],
                relationshipPatterns: '权力关系，领导与被领导',
                socialValue: '推动社会变革和进步'
            },
            '正财': {
                modernRoles: ['财务人员', '银行家', '会计师', '房地产商', '实业家'],
                careerFields: ['金融', '会计', '房地产', '制造业', '贸易'],
                relationshipPatterns: '契约关系，稳定合作',
                socialValue: '维护经济稳定和发展'
            },
            '偏财': {
                modernRoles: ['投资家', '商人', '贸易商', '创业者', '机会发现者'],
                careerFields: ['投资', '贸易', '创业', '市场营销', '机会开发'],
                relationshipPatterns: '机会关系，灵活合作',
                socialValue: '促进经济创新和活力'
            },
            '正印': {
                modernRoles: ['教师', '研究员', '顾问', '医生', '文化工作者'],
                careerFields: ['教育', '研究', '医疗', '文化', '咨询'],
                relationshipPatterns: '师生关系，传承与保护',
                socialValue: '传承知识和文化'
            },
            '偏印': {
                modernRoles: ['专家', '技术人员', '艺术家', '创新者', '研究者'],
                careerFields: ['技术研发', '艺术创作', '专业咨询', '创新研究'],
                relationshipPatterns: '专业关系，深度合作',
                socialValue: '推动技术创新和专业发展'
            },
            '食神': {
                modernRoles: ['艺术家', '设计师', '演艺人员', '美食家', '生活顾问'],
                careerFields: ['艺术', '设计', '娱乐', '餐饮', '生活服务'],
                relationshipPatterns: '和谐关系，享受与合作',
                socialValue: '丰富生活和文化内涵'
            },
            '伤官': {
                modernRoles: ['创新者', '改革者', '技术专家', '评论家', '战略顾问'],
                careerFields: ['创新研发', '改革咨询', '技术突破', '媒体评论'],
                relationshipPatterns: '挑战关系，创新与变革',
                socialValue: '推动社会进步和创新'
            }
        };
    }

    // ==================== 哲学层面深层含义 ====================

    initPhilosophicalMeanings() {
        return {
            '比肩': {
                philosophicalLevel: '自我实现与平等哲学',
                coreQuestion: '如何在保持独立性的同时实现社会价值？',
                lifeLesson: '学习独立与合作，建立健康的自我认知',
                spiritualMeaning: '通过自我认知实现精神成长',
                universalPrinciple: '阴阳平衡中的同性互动原理'
            },
            '劫财': {
                philosophicalLevel: '资源哲学与流动智慧',
                coreQuestion: '如何在变化中把握机遇，实现价值最大化？',
                lifeLesson: '学习适应变化，把握流动中的机会',
                spiritualMeaning: '通过外界互动实现自我超越',
                universalPrinciple: '阴阳转化中的消长变化原理'
            },
            '正官': {
                philosophicalLevel: '秩序哲学与责任伦理',
                coreQuestion: '如何在秩序中实现个人价值和社会责任？',
                lifeLesson: '学习承担责任，建立合理的秩序',
                spiritualMeaning: '通过服务社会实现精神升华',
                universalPrinciple: '天人合一中的秩序和谐原理'
            },
            '七杀': {
                philosophicalLevel: '权力哲学与变革智慧',
                coreQuestion: '如何在权力与责任之间找到平衡？',
                lifeLesson: '学习正确使用权力，推动积极变革',
                spiritualMeaning: '通过克服困难实现精神超越',
                universalPrinciple: '阴阳对立中的转化超越原理'
            },
            '正财': {
                philosophicalLevel: '价值哲学与稳定智慧',
                coreQuestion: '如何在稳定中创造持续价值？',
                lifeLesson: '学习价值创造和保持稳定',
                spiritualMeaning: '通过物质积累实现精神满足',
                universalPrinciple: '阴阳和谐中的平衡发展原理'
            },
            '偏财': {
                philosophicalLevel: '机遇哲学与变化智慧',
                coreQuestion: '如何在变化中发现和创造机遇？',
                lifeLesson: '学习识别机遇，灵活应对变化',
                spiritualMeaning: '通过把握机遇实现价值提升',
                universalPrinciple: '阴阳变化中的机遇把握原理'
            },
            '正印': {
                philosophicalLevel: '知识哲学与传承智慧',
                coreQuestion: '如何通过学习和传承实现个人成长？',
                lifeLesson: '学习知识传承，建立深厚基础',
                spiritualMeaning: '通过学习传承实现精神成长',
                universalPrinciple: '生生不息中的传承发展原理'
            },
            '偏印': {
                philosophicalLevel: '创新哲学与独特智慧',
                coreQuestion: '如何在传统基础上实现创新突破？',
                lifeLesson: '学习创新思维，形成独特见解',
                spiritualMeaning: '通过创新思维实现精神突破',
                universalPrinciple: '阴阳转化中的创新突破原理'
            },
            '食神': {
                philosophicalLevel: '享受哲学与生活智慧',
                coreQuestion: '如何在享受生活中实现个人价值？',
                lifeLesson: '学习享受生活，发现生活之美',
                spiritualMeaning: '通过生活享受实现精神愉悦',
                universalPrinciple: '阴阳和谐中的享受平衡原理'
            },
            '伤官': {
                philosophicalLevel: '批判哲学与创新智慧',
                coreQuestion: '如何在批判传统中实现创新发展？',
                lifeLesson: '学习理性批判，推动创新发展',
                spiritualMeaning: '通过智慧创新实现精神超越',
                universalPrinciple: '阴阳对立中的创新突破原理'
            }
        };
    }

    // ==================== 现代应用系统 ====================

    initModernApplications() {
        return {
            careerGuidance: {
                analysisMethod: '基于十神组合的职业倾向分析',
                evaluationCriteria: ['能力匹配', '兴趣契合', '发展潜力', '社会价值'],
                recommendationSystem: '多层次职业推荐体系'
            },
            relationshipAdvice: {
                analysisMethod: '基于十神特征的关系模式分析',
                evaluationCriteria: ['性格匹配', '价值观契合', '沟通方式', '长期发展'],
                recommendationSystem: '个性化关系建议系统'
            },
            personalDevelopment: {
                analysisMethod: '基于十神特质的个人成长规划',
                evaluationCriteria: ['优势发挥', '弱点改进', '潜能开发', '目标实现'],
                recommendationSystem: '系统性个人发展指导'
            },
            wealthManagement: {
                analysisMethod: '基于十神特征的财富管理策略',
                evaluationCriteria: ['风险承受', '投资偏好', '财富目标', '时间规划'],
                recommendationSystem: '个性化财富管理方案'
            },
            healthGuidance: {
                analysisMethod: '基于十神五行属性的健康管理',
                evaluationCriteria: ['体质特征', '健康风险', '生活方式', '预防措施'],
                recommendationSystem: '全面健康管理建议'
            }
        };
    }

    // ==================== 十神组合模式分析 ====================

    initCombinationPatterns() {
        return {
            classicPatterns: {
                '官印相生': {
                    combination: ['正官', '正印'],
                    meaning: '知识支撑地位，学习获得权威',
                    characteristics: ['德才兼备', '学识渊博', '地位稳固', '受人尊敬'],
                    careers: ['教育管理', '高级公务员', '学术研究', '专业技术'],
                    developmentPath: '通过学习提升能力，通过能力获得地位'
                },
                '杀印相生': {
                    combination: ['七杀', '偏印'],
                    meaning: '压力转化为动力，挑战激发创新',
                    characteristics: ['抗压能力强', '创新思维', '敢于挑战', '独特见解'],
                    careers: ['创业投资', '改革咨询', '特种行业', '创新研发'],
                    developmentPath: '在压力中成长，在挑战中创新'
                },
                '财官相生': {
                    combination: ['正财', '正官'],
                    meaning: '财富支持地位，实权掌握资源',
                    characteristics: ['财富地位', '务实稳健', '管理能力', '社会资源'],
                    careers: ['企业高管', '金融投资', '房地产', '国际贸易'],
                    developmentPath: '通过财富积累获得权力，通过权力扩大财富'
                },
                '食神制杀': {
                    combination: ['食神', '七杀'],
                    meaning: '才华驾驭权力，智慧掌控压力',
                    characteristics: ['才华横溢', '智慧过人', '善于管理', '权威地位'],
                    careers: ['高层管理', '艺术指导', '技术专家', '专业顾问'],
                    developmentPath: '以才华获得认可，以智慧掌控权力'
                },
                '伤官配印': {
                    combination: ['伤官', '偏印'],
                    meaning: '智慧结合知识，创新基于传统',
                    characteristics: ['智慧超群', '学识渊博', '创新能力强', '思维独特'],
                    careers: ['研究创新', '技术开发', '战略规划', '专业咨询'],
                    developmentPath: '在传统基础上创新，以知识支撑智慧'
                }
            },
            modernPatterns: {
                '双财组合': {
                    combination: ['正财', '偏财'],
                    meaning: '稳定收益与机遇收入并重',
                    characteristics: ['理财能力强', '商业头脑', '机会敏感', '风险平衡'],
                    careers: ['投资理财', '企业经营', '商业贸易', '金融'],
                    developmentPath: '稳定投资与机会把握并重'
                },
                '双印组合': {
                    combination: ['正印', '偏印'],
                    meaning: '传统学习与创新思维结合',
                    characteristics: ['学习能力强', '创新思维', '专业深度', '知识广度'],
                    careers: ['学术研究', '教育培训', '专业咨询', '技术研发'],
                    developmentPath: '深度学习与专业创新并重'
                },
                '双食组合': {
                    combination: ['食神', '伤官'],
                    meaning: '艺术表达与智慧创新并存',
                    characteristics: ['创造力强', '表达能力好', '思维活跃', '艺术天赋'],
                    careers: ['创意设计', '艺术创作', '媒体传播', '创新研发'],
                    developmentPath: '艺术创作与智慧创新结合'
                }
            }
        };
    }

    // ==================== 十神变化规律系统 ====================

    initVariationRules() {
        return {
            dayunVariation: {
                principle: '大运十神与命局十神的相互作用决定运势变化',
                patterns: {
                    '用神大运': {
                        effect: '运势上升，机遇增多，发展顺利',
                        characteristics: '自信心增强，能力提升，机遇频现',
                        advice: '积极进取，把握机遇，扩大发展'
                    },
                    '忌神大运': {
                        effect: '运势下降，挑战增多，需要谨慎',
                        characteristics: '压力增大，困难增多，需要坚持',
                        advice: '保守应对，规避风险，积蓄力量'
                    },
                    '用忌交运': {
                        effect: '运势转折，需要把握时机',
                        characteristics: '变化明显，机遇与挑战并存',
                        advice: '谨慎决策，把握转折，调整策略'
                    },
                    '伏吟大运': {
                        effect: '运势反复，需要耐心应对',
                        characteristics: '起伏不定，需要坚持和耐心',
                        advice: '保持耐心，坚持目标，等待时机'
                    }
                }
            },
            liuNianVariation: {
                principle: '流年十神引动命局十神，产生具体事件',
                patterns: {
                    '官星流年': {
                        events: ['事业发展', '考试升学', '地位变化', '责任增加'],
                        preparation: '提升能力，把握机会，承担责任',
                        timing: '春季生发，夏季旺盛，秋季收获，冬季储藏'
                    },
                    '财星流年': {
                        events: ['财富变化', '投资机会', '收入变动', '消费增加'],
                        preparation: '理性投资，把握机会，控制风险',
                        timing: '把握时机，适时投资，合理消费'
                    },
                    '印星流年': {
                        events: ['学习考试', '知识获取', '证书获得', '保护帮助'],
                        preparation: '努力学习，提升知识，寻求帮助',
                        timing: '持续学习，及时考试，积累知识'
                    },
                    '食伤流年': {
                        events: ['表达展示', '创作发挥', '才华表现', '人际交往'],
                        preparation: '准备展示，发挥才华，积极表达',
                        timing: '适时表现，展示才华，扩大影响'
                    }
                }
            },
            shengKeZhiHua: {
                principle: '十神之间的生克制化关系决定吉凶',
                patterns: {
                    '相生关系': {
                        effect: '助益发展，和谐顺利',
                        examples: '官生印，印生身，身生食，食生财',
                        application: '顺势而为，积极发展'
                    },
                    '相克关系': {
                        effect: '产生阻碍，需要应对',
                        examples: '官克身，财克印，食克官，伤克印',
                        application: '积极应对，化解困难'
                    },
                    '制约关系': {
                        effect: '化解凶险，转为吉祥',
                        examples: '食制杀，印制食，财制印，官制伤',
                        application: '以柔克刚，化解困难'
                    },
                    '化合关系': {
                        effect: '转化性质，变化发展',
                        examples: '贪合忘克，合化为用，合化忌神',
                        application: '把握变化，灵活应对'
                    }
                }
            }
        };
    }

    // ==================== 核心分析方法 ====================

    /**
     * 深度十神分析
     * @param {Object} bazi 八字命局
     * @param {Object} options 分析选项
     * @returns {Object} 分析结果
     */
    deepShiShenAnalysis(bazi, options = {}) {
        const dayMaster = bazi.day.stem;
        const shiShenDistribution = this.calculateShiShenDistribution(bazi, dayMaster);

        return {
            // 基础分析
            basicAnalysis: this.basicShiShenAnalysis(shiShenDistribution),

            // 心理学分析
            psychologicalAnalysis: this.psychologicalAnalysis(shiShenDistribution),

            // 社会角色分析
            socialRoleAnalysis: this.socialRoleAnalysis(shiShenDistribution),

            // 哲学层面分析
            philosophicalAnalysis: this.philosophicalAnalysis(shiShenDistribution),

            // 组合模式分析
            combinationAnalysis: this.combinationAnalysis(shiShenDistribution),

            // 现代应用建议
            modernApplications: this.modernApplicationAnalysis(shiShenDistribution, options),

            // 发展建议
            developmentAdvice: this.developmentAdviceAnalysis(shiShenDistribution),

            // 变化规律分析
            variationAnalysis: this.variationAnalysis(shiShenDistribution)
        };
    }

    /**
     * 计算十神分布
     */
    calculateShiShenDistribution(bazi, dayMaster) {
        const distribution = {};

        // 初始化十神计数
        Object.keys(this.psychologicalProfiles).forEach(god => {
            distribution[god] = {
                count: 0,
                positions: [],
                strength: 0,
                elements: []
            };
        });

        // 计算四柱十神
        ['year', 'month', 'day', 'hour'].forEach(pillar => {
            const stem = bazi[pillar].stem;
            const tenGod = baziData.calculateTenGods(dayMaster, stem);
            if (tenGod) {
                distribution[tenGod].count++;
                distribution[tenGod].positions.push(pillar);
                distribution[tenGod].elements.push(baziData.getFiveElement(stem));
            }
        });

        // 计算地支藏干十神
        ['year', 'month', 'day', 'hour'].forEach(pillar => {
            const branch = bazi[pillar].branch;
            const branchInfo = baziData.earthlyBranches.find(b => b.name === branch);

            branchInfo.hiddenStems.forEach(stem => {
                const tenGod = baziData.calculateTenGods(dayMaster, stem);
                if (tenGod) {
                    distribution[tenGod].count += 0.5; // 藏干权重减半
                    distribution[tenGod].elements.push(baziData.getFiveElement(stem));
                }
            });
        });

        // 计算强度
        Object.keys(distribution).forEach(god => {
            distribution[god].strength = this.calculateShiShenStrength(distribution[god], bazi);
        });

        return distribution;
    }

    /**
     * 计算十神强度
     */
    calculateShiShenStrength(shiShenInfo, bazi) {
        let strength = shiShenInfo.count;

        // 位置加权
        shiShenInfo.positions.forEach(position => {
            switch(position) {
                case 'month': strength *= 1.5; break; // 月令最强
                case 'day': strength *= 1.2; break;   // 日柱次强
                case 'year': strength *= 1.0; break;  // 年柱中等
                case 'hour': strength *= 0.8; break;  // 时柱较弱
            }
        });

        // 五行流通加权
        const elements = shiShenInfo.elements;
        if (elements.length >= 2) {
            strength *= 1.2; // 多五行相助
        }

        return Math.round(strength * 100) / 100;
    }

    /**
     * 基础十神分析
     */
    basicShiShenAnalysis(distribution) {
        const analysis = {
            dominantShiShen: [],
            weakShiShen: [],
            balance: {},
            summary: ''
        };

        // 找出最强和最弱的十神
        const sortedShiShen = Object.entries(distribution)
            .sort((a, b) => b[1].strength - a[1].strength);

        analysis.dominantShiShen = sortedShiShen.slice(0, 3).map(([god, info]) => ({
            god,
            strength: info.strength,
            count: info.count,
            positions: info.positions
        }));

        analysis.weakShiShen = sortedShiShen.slice(-2).map(([god, info]) => ({
            god,
            strength: info.strength,
            count: info.count
        }));

        // 分析平衡性
        const totalStrength = Object.values(distribution).reduce((sum, info) => sum + info.strength, 0);
        const averageStrength = totalStrength / Object.keys(distribution).length;

        analysis.balance = {
            isBalanced: sortedShiShen[0][1].strength / sortedShiShen[sortedShiShen.length - 1][1].strength < 3,
            averageStrength: Math.round(averageStrength * 100) / 100,
            strongest: sortedShiShen[0][0],
            weakest: sortedShiShen[sortedShiShen.length - 1][0]
        };

        // 生成总结
        analysis.summary = this.generateBasicSummary(analysis);

        return analysis;
    }

    /**
     * 心理学分析
     */
    psychologicalAnalysis(distribution) {
        const analysis = {
            personalityProfile: {},
            emotionalPattern: {},
            cognitiveStyle: {},
            motivationType: {},
            stressResponse: {},
            relationshipStyle: {},
            recommendations: []
        };

        // 分析主导十神的心理特征
        const dominantShiShen = Object.entries(distribution)
            .filter(([god, info]) => info.strength > 1)
            .map(([god, info]) => god);

        dominantShiShen.forEach(god => {
            const profile = this.psychologicalProfiles[god];
            if (profile) {
                // 合并性格特征
                profile.personalityTraits.positive.forEach(trait => {
                    analysis.personalityProfile[trait] = (analysis.personalityProfile[trait] || 0) + 1;
                });

                // 记录情绪模式
                analysis.emotionalPattern[god] = profile.emotionalPattern;

                // 记录认知风格
                analysis.cognitiveStyle[god] = profile.cognitiveStyle;

                // 记录动机类型
                analysis.motivationType[god] = profile.motivationType;

                // 记录压力反应
                analysis.stressResponse[god] = profile.stressResponse;
            }
        });

        // 生成心理建议
        analysis.recommendations = this.generatePsychologicalRecommendations(dominantShiShen);

        return analysis;
    }

    /**
     * 社会角色分析
     */
    socialRoleAnalysis(distribution) {
        const analysis = {
            suitableRoles: [],
            careerFields: [],
            relationshipPatterns: [],
            socialValue: {},
            leadershipPotential: false,
            teamworkStyle: '',
            recommendations: []
        };

        // 分析适合的社会角色
        Object.entries(distribution).forEach(([god, info]) => {
            if (info.strength > 0.5) {
                const roleMapping = this.socialRoleMapping[god];
                if (roleMapping) {
                    analysis.suitableRoles.push(...roleMapping.modernRoles);
                    analysis.careerFields.push(...roleMapping.careerFields);
                    analysis.socialValue[god] = roleMapping.socialValue;

                    // 判断领导潜力
                    if (['正官', '七杀'].includes(god) && info.strength > 1) {
                        analysis.leadershipPotential = true;
                    }
                }
            }
        });

        // 去重并排序
        analysis.suitableRoles = [...new Set(analysis.suitableRoles)];
        analysis.careerFields = [...new Set(analysis.careerFields)];

        // 分析团队合作风格
        analysis.teamworkStyle = this.analyzeTeamworkStyle(distribution);

        // 生成建议
        analysis.recommendations = this.generateSocialRecommendations(distribution);

        return analysis;
    }

    /**
     * 哲学层面分析
     */
    philosophicalAnalysis(distribution) {
        const analysis = {
            lifePurpose: '',
            coreQuestion: '',
            lifeLesson: '',
            spiritualPath: '',
            universalPrinciple: '',
            philosophicalLevel: '',
            wisdomIntegration: [],
            recommendations: []
        };

        // 分析主导十神的哲学含义
        const dominantGods = Object.entries(distribution)
            .filter(([god, info]) => info.strength > 1)
            .map(([god, info]) => god);

        if (dominantGods.length > 0) {
            const primaryGod = dominantGods[0];
            const philosophicalMeaning = this.philosophicalMeanings[primaryGod];

            if (philosophicalMeaning) {
                analysis.philosophicalLevel = philosophicalMeaning.philosophicalLevel;
                analysis.coreQuestion = philosophicalMeaning.coreQuestion;
                analysis.lifeLesson = philosophicalMeaning.lifeLesson;
                analysis.spiritualPath = philosophicalMeaning.spiritualMeaning;
                analysis.universalPrinciple = philosophicalMeaning.universalPrinciple;
            }

            // 多十神的哲学整合
            if (dominantGods.length > 1) {
                analysis.wisdomIntegration = this.integratePhilosophicalWisdom(dominantGods);
            }
        }

        // 生成人生目的描述
        analysis.lifePurpose = this.generateLifePurpose(dominantGods);

        // 生成哲学建议
        analysis.recommendations = this.generatePhilosophicalRecommendations(dominantGods);

        return analysis;
    }

    /**
     * 组合模式分析
     */
    combinationAnalysis(distribution) {
        const analysis = {
            activePatterns: [],
            patternEffects: [],
            synergisticEffects: [],
            conflictingEffects: [],
            overallAssessment: '',
            recommendations: []
        };

        // 检查经典组合模式
        Object.entries(this.combinationPatterns.classicPatterns).forEach(([patternName, patternInfo]) => {
            if (this.hasPattern(distribution, patternInfo.combination)) {
                analysis.activePatterns.push({
                    name: patternName,
                    combination: patternInfo.combination,
                    meaning: patternInfo.meaning,
                    characteristics: patternInfo.characteristics,
                    careers: patternInfo.careers,
                    developmentPath: patternInfo.developmentPath
                });
            }
        });

        // 检查现代组合模式
        Object.entries(this.combinationPatterns.modernPatterns).forEach(([patternName, patternInfo]) => {
            if (this.hasPattern(distribution, patternInfo.combination)) {
                analysis.activePatterns.push({
                    name: patternName,
                    combination: patternInfo.combination,
                    meaning: patternInfo.meaning,
                    characteristics: patternInfo.characteristics,
                    careers: patternInfo.careers,
                    developmentPath: patternInfo.developmentPath
                });
            }
        });

        // 分析协同效应
        analysis.synergisticEffects = this.analyzeSynergisticEffects(distribution);

        // 分析冲突效应
        analysis.conflictingEffects = this.analyzeConflictingEffects(distribution);

        // 整体评估
        analysis.overallAssessment = this.generateCombinationAssessment(analysis);

        return analysis;
    }

    /**
     * 现代应用分析
     */
    modernApplicationAnalysis(distribution, options) {
        const analysis = {
            careerGuidance: {},
            relationshipAdvice: {},
            personalDevelopment: {},
            wealthManagement: {},
            healthGuidance: {},
            lifePlanning: {}
        };

        // 职业指导
        analysis.careerGuidance = this.generateCareerGuidance(distribution);

        // 关系建议
        analysis.relationshipAdvice = this.generateRelationshipAdvice(distribution);

        // 个人发展
        analysis.personalDevelopment = this.generatePersonalDevelopment(distribution);

        // 财富管理
        analysis.wealthManagement = this.generateWealthManagement(distribution);

        // 健康指导
        analysis.healthGuidance = this.generateHealthGuidance(distribution);

        // 人生规划
        analysis.lifePlanning = this.generateLifePlanning(distribution, options);

        return analysis;
    }

    /**
     * 发展建议分析
     */
    developmentAdviceAnalysis(distribution) {
        const analysis = {
            strengths: [],
            weaknesses: [],
            opportunities: [],
            threats: [],
            shortTermGoals: [],
            longTermGoals: [],
            actionPlan: [],
            keyMilestones: []
        };

        // SWOT分析
        const swot = this.performSWOTAnalysis(distribution);
        analysis.strengths = swot.strengths;
        analysis.weaknesses = swot.weaknesses;
        analysis.opportunities = swot.opportunities;
        analysis.threats = swot.threats;

        // 目标设定
        analysis.shortTermGoals = this.generateShortTermGoals(distribution);
        analysis.longTermGoals = this.generateLongTermGoals(distribution);

        // 行动计划
        analysis.actionPlan = this.generateActionPlan(distribution);

        // 关键里程碑
        analysis.keyMilestones = this.generateKeyMilestones(distribution);

        return analysis;
    }

    /**
     * 变化规律分析
     */
    variationAnalysis(distribution) {
        const analysis = {
            dayunTrends: {},
            liuNianPatterns: {},
            shengKeDynamics: {},
            criticalPeriods: [],
            timingAdvice: {},
            cyclicalPatterns: {}
        };

        // 大运趋势
        analysis.dayunTrends = this.analyzeDayunTrends(distribution);

        // 流年模式
        analysis.liuNianPatterns = this.analyzeLiuNianPatterns(distribution);

        // 生克制化动态
        analysis.shengKeDynamics = this.analyzeShengKeDynamics(distribution);

        // 关键时期
        analysis.criticalPeriods = this.identifyCriticalPeriods(distribution);

        // 时机建议
        analysis.timingAdvice = this.generateTimingAdvice(distribution);

        return analysis;
    }

    // ==================== 辅助分析方法 ====================

    /**
     * 检查是否有特定组合模式
     */
    hasPattern(distribution, combination) {
        return combination.every(god => distribution[god] && distribution[god].count > 0);
    }

    /**
     * 生成基础总结
     */
    generateBasicSummary(basicAnalysis) {
        const { dominantShiShen, balance } = basicAnalysis;

        let summary = '命局中';

        // 描述主导十神
        if (dominantShiShen.length > 0) {
            summary += `以${dominantShiShen.map(s => s.god).join('、')}为主导`;

            // 添加特征描述
            const characteristics = this.getShiShenCharacteristics(dominantShiShen.map(s => s.god));
            if (characteristics.length > 0) {
                summary += `，具备${characteristics.join('、')}等特质`;
            }
        }

        // 描述平衡性
        if (balance.isBalanced) {
            summary += '，十神分布相对均衡';
        } else {
            summary += `，${balance.strongest}过强而${balance.weakest}较弱`;
        }

        return summary;
    }

    /**
     * 获取十神特征
     */
    getShiShenCharacteristics(shiShenList) {
        const characteristics = [];
        const characteristicMap = {
            '正官': ['正直', '有责任心', '管理能力'],
            '七杀': ['果断', '有魄力', '领导能力'],
            '正财': ['稳重', '务实', '理财能力'],
            '偏财': ['机敏', '善于把握机会'],
            '正印': ['仁慈', '好学', '有爱心'],
            '偏印': ['聪明', '有专业技能'],
            '食神': ['温和', '有艺术天分'],
            '伤官': ['聪明', '有创新精神'],
            '比肩': ['独立', '有主见'],
            '劫财': ['豪爽', '善于交际']
        };

        shiShenList.forEach(god => {
            if (characteristicMap[god]) {
                characteristics.push(...characteristicMap[god]);
            }
        });

        return [...new Set(characteristics)];
    }

    // ... 其他辅助方法的实现

    /**
     * 导出分析方法
     */
    exportAnalysisMethods() {
        return {
            deepShiShenAnalysis: this.deepShiShenAnalysis.bind(this),
            psychologicalAnalysis: this.psychologicalAnalysis.bind(this),
            socialRoleAnalysis: this.socialRoleAnalysis.bind(this),
            philosophicalAnalysis: this.philosophicalAnalysis.bind(this),
            combinationAnalysis: this.combinationAnalysis.bind(this),
            modernApplicationAnalysis: this.modernApplicationAnalysis.bind(this)
        };
    }
}

module.exports = AdvancedShiShenAnalysisSystem;

/**
 * 使用示例：
 *
 * const ShiShenAnalyzer = require('./advanced-shishen-analysis-system');
 * const analyzer = new ShiShenAnalyzer();
 *
 * // 深度分析
 * const result = analyzer.deepShiShenAnalysis(bazi, {
 *     includeCareer: true,
 *     includeRelationship: true,
 *     detailLevel: 'comprehensive'
 * });
 *
 * console.log('心理学分析:', result.psychologicalAnalysis);
 * console.log('社会角色分析:', result.socialRoleAnalysis);
 * console.log('哲学层面分析:', result.philosophicalAnalysis);
 */