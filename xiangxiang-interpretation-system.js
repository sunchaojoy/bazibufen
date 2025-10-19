/**
 * 八字取象解读系统
 * 基于《探索门八字取象秘法》- 王庆的理论实现
 * 为八字网页应用提供专业的取象分析功能
 */

class XiangxiangInterpretationSystem {
    constructor() {
        this.initializeDatabases();
        this.initializeAlgorithms();
        this.initializeInterpretationEngine();
    }

    // ==================== 初始化系统 ====================
    initializeDatabases() {
        // 天干象意数据库
        this.heavenlyStemDB = {
            jia: {
                element: "木",
                basic: "甲木：参天大树，栋梁之材",
                personality: ["正直", "坚定", "向上发展", "有领导力", "有责任感"],
                appearance: ["身材高大", "面方", "体格健壮", "精神饱满"],
                career: ["领导岗位", "管理", "教育", "林业", "建筑", "政府机关"],
                relationships: ["对朋友忠诚", "有责任感", "家庭观念强", "重视承诺"],
                health: ["肝胆", "头部", "神经系统", "筋骨"],
                fortune: ["东方", "春季", "早晨", "青色", "绿色"],
                detailed: {
                    strengths: ["正直可靠", "有担当", "志向远大", "有领导才能"],
                    weaknesses: ["过于固执", "不善变通", "容易树敌", "缺乏灵活性"],
                    timing: ["春季最好", "早晨最有利", "寅卯时为旺"],
                    directions: ["东方大吉", "北方不利", "东南平稳"],
                    colors: ["青色助运", "绿色吉祥", "金色忌用"]
                }
            },
            yi: {
                element: "木",
                basic: "乙木：花草藤萝，柔韧之木",
                personality: ["温柔", "灵活", "适应性强", "善解人意", "有艺术天赋"],
                appearance: ["身材苗条", "面容秀美", "体态柔美", "举止优雅"],
                career: ["文艺", "设计", "服务", "医疗", "园艺", "美容"],
                relationships: ["善于交际", "人缘好", "感情细腻", "善解人意"],
                health: ["肝胆", "神经系统", "血液循环", "毛发"],
                fortune: ["东方", "春季", "早晨", "青色", "绿色"],
                detailed: {
                    strengths: ["温柔体贴", "适应力强", "艺术天赋", "善解人意"],
                    weaknesses: ["意志不坚", "依赖性强", "易受影响", "缺乏主见"],
                    timing: ["春季最佳", "早晨有利", "寅卯时为旺"],
                    directions: ["东方大吉", "南方有利", "西方平稳"],
                    colors: ["青色助运", "绿色吉祥", "红色可用"]
                }
            },
            bing: {
                element: "火",
                basic: "丙火：太阳之火，光明普照",
                personality: ["热情", "开朗", "积极向上", "有魅力", "影响力大"],
                appearance: ["面色红润", "眼神明亮", "中等身材", "精神饱满"],
                career: ["娱乐", "媒体", "销售", "能源", "教育", "公关"],
                relationships: ["热情大方", "朋友众多", "重视感情", "有影响力"],
                health: ["心脏", "眼睛", "血液循环", "小肠"],
                fortune: ["南方", "夏季", "中午", "红色", "紫色"],
                detailed: {
                    strengths: ["热情开朗", "领导力强", "影响力大", "积极向上"],
                    weaknesses: ["性急冲动", "缺乏耐心", "容易过度", "情绪化"],
                    timing: ["夏季最好", "中午最有利", "巳午时为旺"],
                    directions: ["南方大吉", "东方有利", "北方不利"],
                    colors: ["红色助运", "紫色吉祥", "黑色忌用"]
                }
            },
            ding: {
                element: "火",
                basic: "丁火：灯烛之火，温暖柔和",
                personality: ["温和", "细腻", "有思想", "善于思考", "感情专一"],
                appearance: ["面貌清秀", "眼神温和", "身材适中", "气质文雅"],
                career: ["文化", "教育", "研究", "咨询", "服务", "技术"],
                relationships: ["感情专一", "善于关怀", "重视精神交流", "体贴入微"],
                health: ["心脏", "血液", "内分泌", "眼睛"],
                fortune: ["南方", "夏季", "夜晚", "红色", "紫色"],
                detailed: {
                    strengths: ["温和有礼", "思维缜密", "善解人意", "感情专一"],
                    weaknesses: ["内心敏感", "容易多思", "缺乏魄力", "优柔寡断"],
                    timing: ["夏季最佳", "夜晚有利", "巳午时为旺"],
                    directions: ["南方大吉", "西方平稳", "北方不利"],
                    colors: ["红色助运", "紫色吉祥", "蓝色慎用"]
                }
            },
            wu: {
                element: "土",
                basic: "戊土：高山厚土，稳重承载",
                personality: ["稳重", "诚实", "有责任心", "讲信用", "可靠"],
                appearance: ["身材敦实", "面厚", "体格健壮", "神态稳重"],
                career: ["土地", "建筑", "金融", "管理", "农业", "矿产"],
                relationships: ["忠诚可靠", "家庭观念强", "重视稳定", "有责任感"],
                health: ["脾胃", "消化系统", "肌肉", "骨骼"],
                fortune: ["中央", "四季末", "黄色", "棕色"],
                detailed: {
                    strengths: ["诚实守信", "稳重可靠", "有责任心", "值得信赖"],
                    weaknesses: ["过于保守", "变化慢", "缺乏灵活性", "固执"],
                    timing: ["四季末最佳", "辰戌丑未时为旺", "月令更佳"],
                    directions: ["中央大吉", "南方有利", "东方平稳"],
                    colors: ["黄色助运", "棕色吉祥", "绿色可用"]
                }
            },
            ji: {
                element: "土",
                basic: "己土：田园之土，孕育万物",
                personality: ["温和", "包容", "有耐心", "善于协调", "乐于助人"],
                appearance: ["身材适中", "面容温和", "体态柔美", "亲切和善"],
                career: ["服务", "教育", "医疗", "咨询", "农业", "房地产"],
                relationships: ["温和包容", "善于照顾人", "重视和谐", "人缘好"],
                health: ["脾胃", "消化系统", "内分泌", "皮肤"],
                fortune: ["中央", "四季末", "黄色", "棕色"],
                detailed: {
                    strengths: ["温和包容", "耐心细致", "适应力强", "善解人意"],
                    weaknesses: ["容易妥协", "缺乏主见", "容易焦虑", "优柔寡断"],
                    timing: ["四季末最佳", "辰戌丑未时为旺", "月令更佳"],
                    directions: ["中央大吉", "西方有利", "北方平稳"],
                    colors: ["黄色助运", "棕色吉祥", "白色可用"]
                }
            },
            geng: {
                element: "金",
                basic: "庚金：刀剑之金，刚锐锋利",
                personality: ["刚强", "果断", "有正义感", "讲义气", "执行力强"],
                appearance: ["身材匀称", "面部轮廓分明", "眼神锐利", "精神威严"],
                career: ["军警", "法律", "机械", "金融", "管理", "体育"],
                relationships: ["讲义气", "重友情", "直接坦率", "有正义感"],
                health: ["肺部", "呼吸系统", "大肠", "皮肤"],
                fortune: ["西方", "秋季", "傍晚", "白色", "金色"],
                detailed: {
                    strengths: ["刚强果断", "有正义感", "执行力强", "讲义气"],
                    weaknesses: ["过于刚硬", "容易冲动", "缺乏灵活性", "固执己见"],
                    timing: ["秋季最好", "傍晚有利", "申酉时为旺"],
                    directions: ["西方大吉", "北方平稳", "南方不利"],
                    colors: ["白色助运", "金色吉祥", "红色忌用"]
                }
            },
            xin: {
                element: "金",
                basic: "辛金：珠宝之金，珍贵美丽",
                personality: ["精致", "细腻", "有审美", "追求完美", "有品位"],
                appearance: ["面貌精致", "身材匀称", "有气质", "举止优雅"],
                career: ["珠宝", "设计", "艺术", "金融", "咨询", "美容"],
                relationships: ["感情细腻", "重视品质", "追求完美", "有审美观"],
                health: ["肺部", "呼吸系统", "皮肤", "牙齿"],
                fortune: ["西方", "秋季", "傍晚", "白色", "金色"],
                detailed: {
                    strengths: ["精致细腻", "有审美", "追求完美", "有品位"],
                    weaknesses: ["过于挑剔", "容易敏感", "追求虚荣", "完美主义"],
                    timing: ["秋季最佳", "傍晚有利", "申酉时为旺"],
                    directions: ["西方大吉", "南方有利", "东方平稳"],
                    colors: ["白色助运", "金色吉祥", "红色可用"]
                }
            },
            ren: {
                element: "水",
                basic: "壬水：江河之水，奔流不息",
                personality: ["聪明", "灵活", "有智慧", "适应性强", "创新思维"],
                appearance: ["身材修长", "面黑", "眼神灵动", "机智敏捷"],
                career: ["贸易", "运输", "传媒", "咨询", "教育", "科技"],
                relationships: ["聪明机智", "朋友广泛", "善于交际", "适应力强"],
                health: ["肾脏", "泌尿系统", "血液循环", "生殖系统"],
                fortune: ["北方", "冬季", "夜晚", "黑色", "蓝色"],
                detailed: {
                    strengths: ["聪明智慧", "适应力强", "创新思维", "机智敏捷"],
                    weaknesses: ["容易变化", "缺乏恒心", "过于圆滑", "不够专一"],
                    timing: ["冬季最好", "夜晚有利", "亥子时为旺"],
                    directions: ["北方大吉", "西方有利", "南方不利"],
                    colors: ["黑色助运", "蓝色吉祥", "黄色忌用"]
                }
            },
            gui: {
                element: "水",
                basic: "癸水：雨露之水，滋润万物",
                personality: ["温柔", "细腻", "有悟性", "善于思考", "感情丰富"],
                appearance: ["身材娇小", "面白", "眼神温和", "文静秀美"],
                career: ["文化", "教育", "研究", "服务", "医疗", "艺术"],
                relationships: ["感情细腻", "善解人意", "重视精神", "温柔体贴"],
                health: ["肾脏", "泌尿系统", "内分泌", "生殖系统"],
                fortune: ["北方", "冬季", "夜晚", "黑色", "蓝色"],
                detailed: {
                    strengths: ["温柔细腻", "有悟性", "善解人意", "感情丰富"],
                    weaknesses: ["过于敏感", "容易多愁", "缺乏魄力", "优柔寡断"],
                    timing: ["冬季最佳", "夜晚有利", "亥子时为旺"],
                    directions: ["北方大吉", "东方有利", "西方平稳"],
                    colors: ["黑色助运", "蓝色吉祥", "白色可用"]
                }
            }
        };

        // 地支象意数据库
        this.earthlyBranchDB = {
            zi: {
                element: "水",
                basic: "子水：正北之水，阴寒之极",
                personality: ["聪明", "灵活", "内向", "有智慧", "思维敏捷"],
                location: ["正北方", "江河湖海", "低洼之地", "水库"],
                career: ["水利", "贸易", "运输", "渔业", "情报", "研究"],
                relationships: ["聪明机智", "内敛深沉", "重视感情", "善于思考"],
                health: ["肾脏", "泌尿系统", "生殖系统", "内分泌"],
                animals: ["鼠", "燕", "蝙蝠"],
                detailed: {
                    strengths: ["聪明智慧", "适应力强", "思维敏捷", "有洞察力"],
                    weaknesses: ["过于阴沉", "缺乏热情", "容易孤僻", "不够开朗"],
                    timing: ["子时（23:00-01:00）", "冬季十一月", "夜晚"],
                    directions: ["正北大吉", "东方有利", "南方不利"],
                    elements: ["水旺", "土克", "金生", "火冲", "木泄"]
                }
            },
            chou: {
                element: "土",
                basic: "丑土：东北偏北之土，湿冷之土",
                personality: ["稳重", "诚实", "有耐心", "讲信用", "踏实"],
                location: ["东北方", "山地", "坟墓", "仓库", "农场"],
                career: ["农业", "矿业", "建筑", "金融", "仓储", "房地产"],
                relationships: ["忠诚可靠", "稳重踏实", "家庭观念强", "有耐心"],
                health: ["脾胃", "消化系统", "关节", "肌肉"],
                animals: ["牛", "龟", "鳖"],
                detailed: {
                    strengths: ["诚实守信", "稳重可靠", "有耐心", "踏实肯干"],
                    weaknesses: ["过于保守", "变化慢", "缺乏灵活性", "固执"],
                    timing: ["丑时（01:00-03:00）", "冬季十二月", "深夜"],
                    directions: ["东北大吉", "北方有利", "南方平稳"],
                    elements: ["土旺", "木克", "火生", "金泄", "水耗"]
                }
            },
            yin: {
                element: "木",
                basic: "寅木：正东偏北之木，初生之木",
                personality: ["正直", "勇敢", "有活力", "积极向上", "有正义感"],
                location: ["正东偏北", "山林", "公园", "机关", "学校"],
                career: ["林业", "政府", "教育", "管理", "咨询", "法律"],
                relationships: ["正直勇敢", "有正义感", "朋友众多", "有威望"],
                health: ["肝胆", "神经系统", "四肢", "筋骨"],
                animals: ["虎", "豹", "猫"],
                detailed: {
                    strengths: ["正直勇敢", "积极向上", "有领导力", "有正义感"],
                    weaknesses: ["过于冲动", "缺乏耐心", "容易急躁", "不够圆滑"],
                    timing: ["寅时（03:00-05:00）", "春季正月", "早晨"],
                    directions: ["东方大吉", "北方有利", "西方平稳"],
                    elements: ["木旺", "金克", "水生", "火泄", "土耗"]
                }
            },
            mao: {
                element: "木",
                basic: "卯木：正东之木，茂盛之木",
                personality: ["温和", "善良", "有礼貌", "善于交际", "有艺术感"],
                location: ["正东方", "园林", "门窗", "集市", "花店"],
                career: ["文艺", "设计", "教育", "服务", "贸易", "美容"],
                relationships: ["温和善良", "人缘好", "重视和谐", "善于交际"],
                health: ["肝胆", "神经系统", "眼睛", "毛发"],
                animals: ["兔", "貉", "驴"],
                detailed: {
                    strengths: ["温和善良", "善于交际", "有艺术天赋", "人缘好"],
                    weaknesses: ["意志不坚", "容易妥协", "缺乏魄力", "不够果断"],
                    timing: ["卯时（05:00-07:00）", "春季二月", "早晨"],
                    directions: ["正东大吉", "南方有利", "西方平稳"],
                    elements: ["木旺", "金克", "水生", "火泄", "土耗"]
                }
            },
            chen: {
                element: "土",
                basic: "辰土：东南偏东之土，水库之土",
                personality: ["灵活", "多变", "有智慧", "善于适应", "学习能力强"],
                location: ["东南偏东", "水库", "湖泊", "山地", "市场"],
                career: ["贸易", "运输", "水利", "建筑", "农业", "科技"],
                relationships: ["灵活多变", "适应力强", "朋友广泛", "学习能力强"],
                health: ["脾胃", "皮肤", "骨骼", "肩膀"],
                animals: ["龙", "蛟", "鱼"],
                detailed: {
                    strengths: ["灵活多变", "适应力强", "有智慧", "学习能力强"],
                    weaknesses: ["容易变化", "缺乏恒心", "过于圆滑", "不够专一"],
                    timing: ["辰时（07:00-09:00）", "春季三月", "上午"],
                    directions: ["东南大吉", "北方有利", "西方平稳"],
                    elements: ["土旺", "木克", "火生", "金泄", "水库"]
                }
            },
            si: {
                element: "火",
                basic: "巳火：正南偏东之火，初生之火",
                personality: ["聪明", "热情", "有思想", "善于表达", "有创造力"],
                location: ["正南偏东", "炉灶", "烟囱", "文艺场所", "学校"],
                career: ["文艺", "教育", "传媒", "能源", "服务", "设计"],
                relationships: ["聪明热情", "善于表达", "重视感情", "有创造力"],
                health: ["心脏", "血液循环", "神经系统", "喉咙"],
                animals: ["蛇", "鳝", "泥鳅"],
                detailed: {
                    strengths: ["聪明热情", "善于表达", "有思想", "有创造力"],
                    weaknesses: ["容易急躁", "缺乏耐心", "情绪化", "不够稳重"],
                    timing: ["巳时（09:00-11:00）", "夏季四月", "上午"],
                    directions: ["南方大吉", "东方有利", "北方不利"],
                    elements: ["火旺", "水克", "木生", "土泄", "金耗"]
                }
            },
            wu: {
                element: "火",
                basic: "午火：正南之火，旺火之极",
                personality: ["热情", "开朗", "积极", "有魅力", "有影响力"],
                location: ["正南方", "阳光充足之地", "高台", "广场", "舞台"],
                career: ["娱乐", "媒体", "销售", "能源", "教育", "公关"],
                relationships: ["热情开朗", "朋友众多", "有影响力", "善于交际"],
                health: ["心脏", "眼睛", "血液循环", "精神"],
                animals: ["马", "鹿", "驴"],
                detailed: {
                    strengths: ["热情开朗", "积极向上", "有魅力", "有影响力"],
                    weaknesses: ["过于急躁", "缺乏耐心", "容易冲动", "喜欢表现"],
                    timing: ["午时（11:00-13:00）", "夏季五月", "中午"],
                    directions: ["正南大吉", "西方有利", "北方不利"],
                    elements: ["火旺", "水克", "木生", "土泄", "金耗"]
                }
            },
            wei: {
                element: "土",
                basic: "未土：西南偏南之土，燥热之土",
                personality: ["温和", "稳重", "有耐心", "善于照顾", "有责任心"],
                location: ["西南偏南", "田园", "仓库", "厨房", "农场"],
                career: ["农业", "服务", "教育", "医疗", "餐饮", "零售"],
                relationships: ["温和稳重", "善于照顾人", "重视家庭", "有耐心"],
                health: ["脾胃", "消化系统", "皮肤", "腹部"],
                animals: ["羊", "鹰", "鸽"],
                detailed: {
                    strengths: ["温和稳重", "有耐心", "善于照顾人", "有责任心"],
                    weaknesses: ["容易妥协", "缺乏主见", "过于保守", "变化慢"],
                    timing: ["未时（13:00-15:00）", "夏季六月", "下午"],
                    directions: ["西南大吉", "南方有利", "东方平稳"],
                    elements: ["土旺", "木克", "火生", "金泄", "水耗"]
                }
            },
            shen: {
                element: "金",
                basic: "申金：正西偏南之金，锋利之金",
                personality: ["刚强", "果断", "有正义感", "讲效率", "有魄力"],
                location: ["正西偏南", "金属场所", "道路", "桥梁", "机械厂"],
                career: ["军警", "法律", "金融", "机械", "交通", "管理"],
                relationships: ["刚强果断", "讲义气", "重效率", "有正义感"],
                health: ["肺部", "呼吸系统", "大肠", "骨骼"],
                animals: ["猴", "猩猩", "猿"],
                detailed: {
                    strengths: ["刚强果断", "有正义感", "执行力强", "讲效率"],
                    weaknesses: ["过于刚硬", "缺乏灵活性", "容易冲动", "不够细心"],
                    timing: ["申时（15:00-17:00）", "秋季七月", "下午"],
                    directions: ["西方大吉", "北方有利", "南方不利"],
                    elements: ["金旺", "火克", "土生", "水泄", "木耗"]
                }
            },
            you: {
                element: "金",
                basic: "酉金：正西之金，精美之金",
                personality: ["精致", "细腻", "有审美", "追求完美", "有品位"],
                location: ["正西方", "珠宝店", "银行", "艺术场所", "美容院"],
                career: ["金融", "珠宝", "艺术", "设计", "咨询", "美容"],
                relationships: ["感情细腻", "重视品质", "追求完美", "有审美观"],
                health: ["肺部", "呼吸系统", "皮肤", "牙齿"],
                animals: ["鸡", "鸟", "雀"],
                detailed: {
                    strengths: ["精致细腻", "有审美", "追求完美", "有品位"],
                    weaknesses: ["过于挑剔", "容易敏感", "追求虚荣", "完美主义"],
                    timing: ["酉时（17:00-19:00）", "秋季八月", "傍晚"],
                    directions: ["正西大吉", "南方有利", "东方平稳"],
                    elements: ["金旺", "火克", "土生", "水泄", "木耗"]
                }
            },
            xu: {
                element: "土",
                basic: "戌土：西北偏西之土，燥实之土",
                personality: ["诚实", "稳重", "有责任心", "讲信用", "忠诚"],
                location: ["西北偏西", "山地", "坟墓", "仓库", "高原"],
                career: ["土地", "建筑", "金融", "管理", "农业", "矿产"],
                relationships: ["诚实守信", "有责任心", "重视稳定", "忠诚可靠"],
                health: ["胃", "脾", "肌肉", "关节"],
                animals: ["狗", "狼", "豺"],
                detailed: {
                    strengths: ["诚实守信", "稳重可靠", "有责任心", "忠诚"],
                    weaknesses: ["过于保守", "缺乏灵活性", "变化慢", "固执"],
                    timing: ["戌时（19:00-21:00）", "秋季九月", "晚上"],
                    directions: ["西北大吉", "北方有利", "东方平稳"],
                    elements: ["土旺", "木克", "火生", "金泄", "水耗"]
                }
            },
            hai: {
                element: "水",
                basic: "亥水：正北偏西之水，积水之水",
                personality: ["聪明", "灵活", "有智慧", "善于思考", "有想象力"],
                location: ["正北偏西", "湖泊", "湿地", "低洼之地", "海边"],
                career: ["文化", "教育", "研究", "咨询", "服务", "艺术"],
                relationships: ["聪明灵活", "善于思考", "重视精神", "有想象力"],
                health: ["肾脏", "泌尿系统", "生殖系统", "血液"],
                animals: ["猪", "熊", "鲸"],
                detailed: {
                    strengths: ["聪明智慧", "有思想", "善解人意", "有想象力"],
                    weaknesses: ["过于理想化", "缺乏行动力", "容易空想", "不够实际"],
                    timing: ["亥时（21:00-23:00）", "冬季十月", "夜晚"],
                    directions: ["北方大吉", "西方有利", "南方不利"],
                    elements: ["水旺", "土克", "金生", "木泄", "火耗"]
                }
            }
        };

        // 组合象意数据库
        this.combinationDB = {
            // 天干组合
            jiaYi: {
                name: "甲乙",
                description: "木木组合，仁德之心，正直善良",
                personality: ["正直善良", "有仁德之心", "重视道德", "乐于助人"],
                career: ["教育", "医疗", "公益", "文化", "农业"]
            },
            bingDing: {
                name: "丙丁",
                description: "火火组合，热情洋溢，光明磊落",
                personality: ["热情开朗", "光明磊落", "有影响力", "积极向上"],
                career: ["娱乐", "媒体", "能源", "教育", "销售"]
            },
            wuJi: {
                name: "戊己",
                description: "土土组合，稳重可靠，诚信为本",
                personality: ["稳重可靠", "诚实守信", "有责任心", "踏实肯干"],
                career: ["金融", "建筑", "农业", "管理", "服务"]
            },
            gengXin: {
                name: "庚辛",
                description: "金金组合，刚柔并济，有正义感",
                personality: ["刚柔并济", "有正义感", "追求完美", "讲义气"],
                career: ["金融", "法律", "机械", "艺术", "咨询"]
            },
            renGui: {
                name: "壬癸",
                description: "水水组合，智慧过人，适应力强",
                personality: ["智慧过人", "适应力强", "思维敏捷", "创新能力强"],
                career: ["贸易", "科技", "教育", "咨询", "服务"]
            },

            // 地支组合
            ziChou: {
                name: "子丑",
                description: "水土组合，聪明稳重，有智慧",
                personality: ["聪明稳重", "有智慧", "踏实肯干", "思维缜密"],
                career: ["研究", "教育", "金融", "管理", "技术"]
            },
            yinMao: {
                name: "寅卯",
                description: "木木组合，正直善良，有仁德之心",
                personality: ["正直善良", "有仁德", "积极向上", "重视道德"],
                career: ["教育", "文化", "公益", "农业", "林业"]
            },
            chenSi: {
                name: "辰巳",
                description: "火土组合，聪明灵活，有智慧",
                personality: ["聪明灵活", "有智慧", "适应力强", "学习能力强"],
                career: ["科技", "教育", "传媒", "贸易", "服务"]
            },
            wuWei: {
                name: "午未",
                description: "火土组合，热情稳重，有责任心",
                personality: ["热情稳重", "有责任心", "温和可靠", "积极向上"],
                career: ["教育", "服务", "医疗", "咨询", "管理"]
            },
            shenYou: {
                name: "申酉",
                description: "金金组合，刚柔并济，有正义感",
                personality: ["刚柔并济", "有正义感", "追求完美", "讲义气"],
                career: ["金融", "法律", "艺术", "咨询", "设计"]
            },
            xuHai: {
                name: "戌亥",
                description: "土水组合，诚实智慧，稳重可靠",
                personality: ["诚实智慧", "稳重可靠", "有思想", "踏实肯干"],
                career: ["教育", "研究", "金融", "管理", "技术"]
            }
        };

        // 特殊格局象意
        this.specialPatternDB = {
            muHuoTongMing: {
                name: "木火通明",
                condition: "木火旺相，无水破局",
                description: "智慧光明，文采出众，适合文化教育",
                personality: ["智慧光明", "文采出众", "口才好", "有艺术天赋"],
                career: ["教育", "文化", "艺术", "传媒", "咨询"]
            },
            jinShuiXiangHan: {
                name: "金水相涵",
                condition: "金水旺相，无土破局",
                description: "智慧过人，口才出众，适合贸易金融",
                personality: ["智慧过人", "口才出众", "思维敏捷", "适应力强"],
                career: ["贸易", "金融", "咨询", "教育", "科技"]
            },
            shengTuZuoJin: {
                name: "生土做金",
                condition: "土旺生金，金得时令",
                description: "稳重可靠，有财富，适合金融建筑",
                personality: ["稳重可靠", "有财富", "讲信用", "有责任心"],
                career: ["金融", "建筑", "土地", "管理", "贸易"]
            }
        };
    }

    // ==================== 初始化算法 ====================
    initializeAlgorithms() {
        // 取象算法
        this.xiangxiangAlgorithms = {
            // 直取法
            directExtraction: function(stemOrBranch, type) {
                const db = type === 'stem' ? this.heavenlyStemDB : this.earthlyBranchDB;
                return db[stemOrBranch] || null;
            }.bind(this),

            // 引申法
            extensionMethod: function(baseXiangxiang, context) {
                const extensions = [];

                // 根据上下文引申象意
                if (context.career) {
                    extensions.push(...this.extractCareerMeaning(baseXiangxiang));
                }
                if (context.relationships) {
                    extensions.push(...this.extractRelationshipMeaning(baseXiangxiang));
                }
                if (context.health) {
                    extensions.push(...this.extractHealthMeaning(baseXiangxiang));
                }

                return extensions;
            }.bind(this),

            // 组合法
            combinationMethod: function(elements, type) {
                const key = elements.join('');
                if (type === 'stem') {
                    return this.combinationDB[key] || null;
                } else if (type === 'branch') {
                    return this.combinationDB[key] || null;
                }
                return null;
            }.bind(this),

            // 生克法
            shengkeMethod: function(elements, relationships) {
                const results = [];
                relationships.forEach(rel => {
                    const result = this.analyzeShengkeRelation(rel);
                    if (result) results.push(result);
                });
                return results;
            }.bind(this),

            // 冲合法
            chongheMethod: function(elements, relationships) {
                const results = [];
                relationships.forEach(rel => {
                    if (rel.type === '冲' || rel.type === '合') {
                        const result = this.analyzeChongheRelation(rel);
                        if (result) results.push(result);
                    }
                });
                return results;
            }.bind(this),

            // 刑害法
            xinghaiMethod: function(elements, relationships) {
                const results = [];
                relationships.forEach(rel => {
                    if (rel.type === '刑' || rel.type === '害') {
                        const result = this.analyzeXinghaiRelation(rel);
                        if (result) results.push(result);
                    }
                });
                return results;
            }.bind(this)
        };
    }

    // ==================== 初始化解读引擎 ====================
    initializeInterpretationEngine() {
        this.interpretationEngine = {
            // 性格分析引擎
            personalityAnalyzer: {
                analyze: function(bazi, xiangxiangData) {
                    const personality = {
                        basic: [],
                        detailed: [],
                        strengths: [],
                        weaknesses: [],
                        development: []
                    };

                    // 分析日主性格
                    const dayMaster = this.analyzeDayMasterPersonality(bazi.dayMaster);
                    personality.basic.push(...dayMaster.basic);
                    personality.detailed.push(...dayMaster.detailed);
                    personality.strengths.push(...dayMaster.strengths);
                    personality.weaknesses.push(...dayMaster.weaknesses);

                    // 分析十神性格影响
                    const tenGodsInfluence = this.analyzeTenGodsPersonality(bazi.tenGods);
                    personality.detailed.push(...tenGodsInfluence.detailed);
                    personality.development.push(...tenGodsInfluence.development);

                    // 分析五行平衡对性格的影响
                    const balanceInfluence = this.analyzeBalancePersonality(bazi.balance);
                    personality.development.push(...balanceInfluence);

                    return personality;
                }.bind(this)
            },

            // 外貌分析引擎
            appearanceAnalyzer: {
                analyze: function(bazi, xiangxiangData) {
                    const appearance = {
                        basic: [],
                        detailed: [],
                        features: [],
                        temperament: []
                    };

                    // 分析日主对应的外貌
                    const dayMasterAppearance = this.analyzeDayMasterAppearance(bazi.dayMaster);
                    appearance.basic.push(...dayMasterAppearance.basic);
                    appearance.features.push(...dayMasterAppearance.features);

                    // 分析五行对外貌的影响
                    const elementInfluence = this.analyzeElementAppearance(bazi.elements);
                    appearance.detailed.push(...elementInfluence.detailed);
                    appearance.temperament.push(...elementInfluence.temperament);

                    return appearance;
                }.bind(this)
            },

            // 职业分析引擎
            careerAnalyzer: {
                analyze: function(bazi, xiangxiangData) {
                    const career = {
                        suitable: [],
                        unsuitable: [],
                        development: [],
                        timing: []
                    };

                    // 根据五行分析适合职业
                    const elementCareer = this.analyzeElementCareer(bazi.elements);
                    career.suitable.push(...elementCareer.suitable);
                    career.unsuitable.push(...elementCareer.unsuitable);

                    // 根据十神分析职业方向
                    const tenGodsCareer = this.analyzeTenGodsCareer(bazi.tenGods);
                    career.development.push(...tenGodsCareer.development);

                    // 根据格局分析职业发展
                    const patternCareer = this.analyzePatternCareer(bazi.patterns);
                    career.timing.push(...patternCareer.timing);

                    return career;
                }.bind(this)
            },

            // 婚姻分析引擎
            marriageAnalyzer: {
                analyze: function(bazi, xiangxiangData) {
                    const marriage = {
                        spouse: [],
                        relationship: [],
                        timing: [],
                        advice: []
                    };

                    // 分析夫妻宫
                    const spousePalace = this.analyzeSpousePalace(bazi.spousePalace);
                    marriage.spouse.push(...spousePalace.spouse);
                    marriage.relationship.push(...spousePalace.relationship);

                    // 分析配偶星
                    const spouseStar = this.analyzeSpouseStar(bazi.spouseStar);
                    marriage.spouse.push(...spouseStar.spouse);
                    marriage.relationship.push(...spouseStar.relationship);

                    // 分析婚姻时机
                    const marriageTiming = this.analyzeMarriageTiming(bazi.timing);
                    marriage.timing.push(...marriageTiming);

                    // 分析婚姻建议
                    const marriageAdvice = this.analyzeMarriageAdvice(bazi);
                    marriage.advice.push(...marriageAdvice);

                    return marriage;
                }.bind(this)
            },

            // 健康分析引擎
            healthAnalyzer: {
                analyze: function(bazi, xiangxiangData) {
                    const health = {
                        constitution: [],
                        potential: [],
                        advice: [],
                        timing: []
                    };

                    // 分析五行健康
                    const elementHealth = this.analyzeElementHealth(bazi.elements);
                    health.constitution.push(...elementHealth.constitution);
                    health.potential.push(...elementHealth.potential);

                    // 分析冲克健康
                    const clashHealth = this.analyzeClashHealth(bazi.relationships);
                    health.potential.push(...clashHealth.potential);

                    // 分析健康建议
                    const healthAdvice = this.analyzeHealthAdvice(bazi);
                    health.advice.push(...healthAdvice);

                    // 分析健康时机
                    const healthTiming = this.analyzeHealthTiming(bazi.timing);
                    health.timing.push(...healthTiming);

                    return health;
                }.bind(this)
            }
        };
    }

    // ==================== 核心取象分析方法 ====================

    // 综合取象分析
    comprehensiveAnalysis(bazi) {
        const analysis = {
            basic: this.basicXiangxiangAnalysis(bazi),
            advanced: this.advancedXiangxiangAnalysis(bazi),
            personality: this.interpretationEngine.personalityAnalyzer.analyze(bazi),
            appearance: this.interpretationEngine.appearanceAnalyzer.analyze(bazi),
            career: this.interpretationEngine.careerAnalyzer.analyze(bazi),
            marriage: this.interpretationEngine.marriageAnalyzer.analyze(bazi),
            health: this.interpretationEngine.healthAnalyzer.analyze(bazi),
            summary: this.generateXiangxiangSummary(bazi)
        };

        return analysis;
    }

    // 基础取象分析
    basicXiangxiangAnalysis(bazi) {
        const basic = {
            stems: {},
            branches: {},
            combinations: [],
            relationships: []
        };

        // 分析天干象意
        Object.keys(bazi.pillars).forEach(pillar => {
            const stem = bazi.pillars[pillar].stem;
            basic.stems[stem] = this.xiangxiangAlgorithms.directExtraction(stem, 'stem');
        });

        // 分析地支象意
        Object.keys(bazi.pillars).forEach(pillar => {
            const branch = bazi.pillars[pillar].branch;
            basic.branches[branch] = this.xiangxiangAlgorithms.directExtraction(branch, 'branch');
        });

        // 分析组合象意
        basic.combinations = this.analyzeCombinations(bazi);

        // 分析关系象意
        basic.relationships = this.analyzeRelationships(bazi);

        return basic;
    }

    // 高级取象分析
    advancedXiangxiangAnalysis(bazi) {
        const advanced = {
            patterns: this.analyzeSpecialPatterns(bazi),
            shengke: this.analyzeShengkeRelations(bazi),
            chonghe: this.analyzeChongheRelations(bazi),
            xinghai: this.analyzeXinghaiRelations(bazi),
            dynamics: this.analyzeDynamicChanges(bazi)
        };

        return advanced;
    }

    // ==================== 具体分析方法 ====================

    // 分析日主性格
    analyzeDayMasterPersonality(dayMaster) {
        const stemData = this.heavenlyStemDB[dayMaster];
        if (!stemData) return { basic: [], detailed: [], strengths: [], weaknesses: [] };

        return {
            basic: [stemData.basic],
            detailed: stemData.personality,
            strengths: stemData.detailed.strengths,
            weaknesses: stemData.detailed.weaknesses
        };
    }

    // 分析日主外貌
    analyzeDayMasterAppearance(dayMaster) {
        const stemData = this.heavenlyStemDB[dayMaster];
        if (!stemData) return { basic: [], features: [] };

        return {
            basic: [stemData.basic],
            features: stemData.appearance
        };
    }

    // 分析十神性格影响
    analyzeTenGodsPersonality(tenGods) {
        const influence = {
            detailed: [],
            development: []
        };

        // 这里需要根据十神的具体分布来分析
        // 简化实现，实际应该更复杂
        tenGods.forEach(god => {
            switch(god.name) {
                case '正官':
                    influence.detailed.push('稳重正直，有责任感');
                    influence.development.push('适合管理岗位，注重规则');
                    break;
                case '七杀':
                    influence.detailed.push('刚强果断，有魄力');
                    influence.development.push('适合挑战性工作，需要历练');
                    break;
                case '正财':
                    influence.detailed.push('勤俭节约，务实可靠');
                    influence.development.push('适合稳定工作，理财能力强');
                    break;
                case '偏财':
                    influence.detailed.push('慷慨大方，善交际');
                    influence.development.push('适合商业贸易，有机会获得意外之财');
                    break;
                // 其他十神的分析...
            }
        });

        return influence;
    }

    // 分析五行平衡对性格的影响
    analyzeBalancePersonality(balance) {
        const influence = [];

        if (balance.wood.strong) {
            influence.push('仁德之心，正直善良');
        }
        if (balance.fire.strong) {
            influence.push('热情开朗，积极向上');
        }
        if (balance.earth.strong) {
            influence.push('稳重可靠，诚实守信');
        }
        if (balance.metal.strong) {
            influence.push('刚强果断，有正义感');
        }
        if (balance.water.strong) {
            influence.push('智慧过人，适应力强');
        }

        return influence;
    }

    // 分析组合象意
    analyzeCombinations(bazi) {
        const combinations = [];

        // 分析天干组合
        const stems = Object.values(bazi.pillars).map(p => p.stem);
        const stemCombos = this.findCombinations(stems, 'stem');
        combinations.push(...stemCombos);

        // 分析地支组合
        const branches = Object.values(bazi.pillars).map(p => p.branch);
        const branchCombos = this.findCombinations(branches, 'branch');
        combinations.push(...branchCombos);

        return combinations;
    }

    // 查找组合
    findCombinations(elements, type) {
        const combinations = [];

        // 查找相邻的组合
        for (let i = 0; i < elements.length - 1; i++) {
            const combo = elements[i] + elements[i + 1];
            const comboData = this.combinationDB[combo];
            if (comboData) {
                combinations.push({
                    type: type,
                    elements: [elements[i], elements[i + 1]],
                    data: comboData
                });
            }
        }

        return combinations;
    }

    // 分析关系象意
    analyzeRelationships(bazi) {
        const relationships = [];

        // 分析生克关系
        relationships.push(...this.analyzeShengkeRelations(bazi));

        // 分析冲合关系
        relationships.push(...this.analyzeChongheRelations(bazi));

        // 分析刑害关系
        relationships.push(...this.analyzeXinghaiRelations(bazi));

        return relationships;
    }

    // 分析生克关系
    analyzeShengkeRelations(bazi) {
        const relations = [];

        // 这里需要实现具体的生克关系分析逻辑
        // 简化实现，实际需要更复杂的算法

        return relations;
    }

    // 分析冲合关系
    analyzeChongheRelations(bazi) {
        const relations = [];

        // 这里需要实现具体的冲合关系分析逻辑
        // 简化实现，实际需要更复杂的算法

        return relations;
    }

    // 分析刑害关系
    analyzeXinghaiRelations(bazi) {
        const relations = [];

        // 这里需要实现具体的刑害关系分析逻辑
        // 简化实现，实际需要更复杂的算法

        return relations;
    }

    // 分析特殊格局
    analyzeSpecialPatterns(bazi) {
        const patterns = [];

        // 检查木火通明
        if (this.checkMuHuoTongMing(bazi)) {
            patterns.push(this.specialPatternDB.muHuoTongMing);
        }

        // 检查金水相涵
        if (this.checkJinShuiXiangHan(bazi)) {
            patterns.push(this.specialPatternDB.jinShuiXiangHan);
        }

        // 检查生土做金
        if (this.checkShengTuZuoJin(bazi)) {
            patterns.push(this.specialPatternDB.shengTuZuoJin);
        }

        return patterns;
    }

    // 检查木火通明
    checkMuHuoTongMing(bazi) {
        // 简化实现，实际需要更复杂的判断逻辑
        const muElements = ['甲', '乙', '寅', '卯'];
        const huoElements = ['丙', '丁', '巳', '午', '未'];

        let muCount = 0;
        let huoCount = 0;

        Object.values(bazi.pillars).forEach(pillar => {
            if (muElements.includes(pillar.stem)) muCount++;
            if (muElements.includes(pillar.branch)) muCount++;
            if (huoElements.includes(pillar.stem)) huoCount++;
            if (huoElements.includes(pillar.branch)) huoCount++;
        });

        return muCount >= 2 && huoCount >= 2;
    }

    // 检查金水相涵
    checkJinShuiXiangHan(bazi) {
        // 简化实现，实际需要更复杂的判断逻辑
        const jinElements = ['庚', '辛', '申', '酉'];
        const shuiElements = ['壬', '癸', '子', '亥'];

        let jinCount = 0;
        let shuiCount = 0;

        Object.values(bazi.pillars).forEach(pillar => {
            if (jinElements.includes(pillar.stem)) jinCount++;
            if (jinElements.includes(pillar.branch)) jinCount++;
            if (shuiElements.includes(pillar.stem)) shuiCount++;
            if (shuiElements.includes(pillar.branch)) shuiCount++;
        });

        return jinCount >= 2 && shuiCount >= 2;
    }

    // 检查生土做金
    checkShengTuZuoJin(bazi) {
        // 简化实现，实际需要更复杂的判断逻辑
        const tuElements = ['戊', '己', '辰', '戌', '丑', '未'];
        const jinElements = ['庚', '辛', '申', '酉'];

        let tuCount = 0;
        let jinCount = 0;

        Object.values(bazi.pillars).forEach(pillar => {
            if (tuElements.includes(pillar.stem)) tuCount++;
            if (tuElements.includes(pillar.branch)) tuCount++;
            if (jinElements.includes(pillar.stem)) jinCount++;
            if (jinElements.includes(pillar.branch)) jinCount++;
        });

        return tuCount >= 2 && jinCount >= 1;
    }

    // 分析动态变化
    analyzeDynamicChanges(bazi) {
        const dynamics = {
            current: this.analyzeCurrentInfluence(bazi),
            future: this.analyzeFutureTrends(bazi),
            advice: []
        };

        // 生成发展建议
        dynamics.advice = this.generateDevelopmentAdvice(bazi, dynamics);

        return dynamics;
    }

    // 分析当前影响
    analyzeCurrentInfluence(bazi) {
        // 分析当前大运对象意的影响
        // 这里需要实现具体的分析逻辑
        return {};
    }

    // 分析未来趋势
    analyzeFutureTrends(bazi) {
        // 分析未来流年对象意的影响
        // 这里需要实现具体的分析逻辑
        return {};
    }

    // 生成发展建议
    generateDevelopmentAdvice(bazi, dynamics) {
        const advice = [];

        // 根据取象分析结果生成建议
        // 这里需要实现具体的建议生成逻辑

        return advice;
    }

    // ==================== 辅助分析方法 ====================

    // 分析五行健康
    analyzeElementCareer(elements) {
        const career = {
            suitable: [],
            unsuitable: []
        };

        // 根据五行强弱分析适合职业
        Object.keys(elements).forEach(element => {
            if (elements[element].strong) {
                const suitableCareers = this.getElementCareers(element);
                career.suitable.push(...suitableCareers);
            }
            if (elements[element].weak) {
                const unsuitableCareers = this.getElementCareers(element);
                career.unsuitable.push(...unsuitableCareers);
            }
        });

        return career;
    }

    // 获取五行对应职业
    getElementCareers(element) {
        const careerMap = {
            '木': ['教育', '文化', '林业', '农业', '设计', '艺术'],
            '火': ['娱乐', '媒体', '能源', '销售', '教育', '公关'],
            '土': ['建筑', '金融', '农业', '管理', '服务', '房地产'],
            '金': ['金融', '法律', '机械', '管理', '体育', '咨询'],
            '水': ['贸易', '运输', '科技', '教育', '咨询', '服务']
        };

        return careerMap[element] || [];
    }

    // 生成取象总结
    generateXiangxiangSummary(bazi) {
        const summary = {
            personality: '',
            career: '',
            relationships: '',
            health: '',
            development: ''
        };

        // 生成各方面的总结
        // 这里需要实现具体的总结生成逻辑

        return summary;
    }

    // ==================== 可视化方法 ====================

    // 创建象意可视化
    createVisualization(bazi) {
        return {
            elementChart: this.createElementChart(bazi),
            relationshipMap: this.createRelationshipMap(bazi),
            personalityWheel: this.createPersonalityWheel(bazi),
            careerRadar: this.createCareerRadar(bazi)
        };
    }

    // 创建五行图表
    createElementChart(bazi) {
        // 创建五行分布的可视化图表
        return {
            type: 'pie',
            data: this.calculateElementDistribution(bazi),
            options: {
                title: '五行分布图',
                colors: {
                    '木': '#4CAF50',
                    '火': '#F44336',
                    '土': '#FF9800',
                    '金': '#795548',
                    '水': '#2196F3'
                }
            }
        };
    }

    // 创建关系图谱
    createRelationshipMap(bazi) {
        // 创建干支关系的可视化图谱
        return {
            type: 'network',
            data: this.analyzeRelationshipNetwork(bazi),
            options: {
                title: '干支关系图谱',
                layout: 'force'
            }
        };
    }

    // 创建性格轮图
    createPersonalityWheel(bazi) {
        // 创建性格特征的可视化轮图
        return {
            type: 'radar',
            data: this.analyzePersonalityTraits(bazi),
            options: {
                title: '性格特征分析',
                scales: 5
            }
        };
    }

    // 创建职业雷达图
    createCareerRadar(bazi) {
        // 创建职业适合度的雷达图
        return {
            type: 'radar',
            data: this.analyzeCareerSuitability(bazi),
            options: {
                title: '职业适合度分析',
                scales: 5
            }
        };
    }

    // ==================== 导出方法 ====================

    // 导出分析报告
    exportReport(bazi, analysis) {
        const report = {
            basic: {
                name: bazi.name,
                gender: bazi.gender,
                birthDateTime: bazi.birthDateTime,
                bazi: bazi.pillars
            },
            analysis: analysis,
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        };

        return report;
    }

    // 导出可视化数据
    exportVisualization(bazi) {
        return {
            charts: this.createVisualization(bazi),
            data: bazi,
            timestamp: new Date().toISOString()
        };
    }
}

module.exports = XiangxiangInterpretationSystem;