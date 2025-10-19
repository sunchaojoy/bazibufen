// 第四阶段实战技法应用系统
// 包含取象法、流年技法、妻财分析等实战方法的代码实现
// 作者：AI助手
// 创建时间：2024年

const stage04PracticalSystem = {
    // 探索门取象法实现系统
    tansuoMenXiangFaSystem: {
        // 天干取象法
        tianGanXiang: {
            jia: {
                basicImages: ["大树", "栋梁", "领导", "管理者", "企业家"],
                personalityImages: ["正直", "上进心强", "有责任心", "领导才能"],
                careerImages: ["管理岗位", "自主创业", "项目负责人", "高层管理"],
                wealthImages: ["大财", "稳定收入", "房地产", "林业"],
                relationshipImages: ["配偶正直", "家庭责任感强", "婚姻稳定"],
                healthImages: ["肝胆", "筋骨", "头颅", "神经系统"],
                analysisMethod: function(baziInfo) {
                    const jiaCount = this.countJiaInBazi(baziInfo);
                    const result = {
                        strength: jiaCount,
                        characteristics: [],
                        suggestions: []
                    };

                    if (jiaCount >= 2) {
                        result.characteristics.push("领导能力强", "有事业心", "正直可靠");
                        result.suggestions.push("适合从事管理工作", "可以创业发展");
                    } else if (jiaCount === 1) {
                        result.characteristics.push("有上进心", "为人正直");
                        result.suggestions.push("稳定发展工作", "培养领导能力");
                    }

                    return result;
                }
            },

            yi: {
                basicImages: ["花草", "藤蔓", "文书", "艺术", "柔美"],
                personalityImages: ["温和", "柔韧", "艺术天赋", "细腻"],
                careerImages: ["文职", "艺术工作", "教育", "园艺"],
                wealthImages: ["小财", "技能收入", "艺术收入", "农业"],
                relationshipImages: ["配偶温柔", "感情细腻", "需要呵护"],
                healthImages: ["肝脏", "神经", "内分泌", "毛发"],
                analysisMethod: function(baziInfo) {
                    const yiCount = this.countYiInBazi(baziInfo);
                    return {
                        strength: yiCount,
                        characteristics: yiCount >= 2 ? ["温柔细腻", "艺术天赋", "适应力强"] : ["性格温和", "有艺术感"],
                        suggestions: yiCount >= 2 ?
                            ["适合艺术文化工作", "需要发挥创意才能"] :
                            ["培养艺术爱好", "注意情感表达"]
                    };
                }
            },

            bing: {
                basicImages: ["太阳", "光明", "热情", "文化", "名声"],
                personalityImages: ["热情开朗", "慷慨大方", "有礼貌", "重视名声"],
                careerImages: ["文化教育", "公关", "演艺", "销售"],
                wealthImages: ["爆发财", "名声财富", "快速致富", "投机收入"],
                relationshipImages: ["感情热烈", "主动追求", "重视外表"],
                healthImages: ["心脏", "小肠", "眼睛", "血液"],
                analysisMethod: function(baziInfo) {
                    const bingCount = this.countBingInBazi(baziInfo);
                    return {
                        strength: bingCount,
                        characteristics: bingCount >= 2 ?
                            ["热情开朗", "慷慨大方", "有领导魅力"] :
                            ["性格阳光", "待人热情"],
                        suggestions: bingCount >= 2 ?
                            ["适合公众人物工作", "可以从事娱乐行业"] :
                            ["多参与社交活动", "发挥个人魅力"]
                    };
                }
            },

            // 丁火取象法
            ding: {
                basicImages: ["灯火", "星光", "烛光", "文明", "智慧"],
                personalityImages: ["温和有礼", "细心谨慎", "有智慧", "文明礼貌"],
                careerImages: ["学术研究", "文字工作", "策划", "咨询"],
                wealthImages: ["稳定财", "智慧财", "辛苦财", "技术财"],
                relationshipImages: ["感情温和", "细心体贴", "精神交流"],
                healthImages: ["心脏", "血液", "循环系统", "精神状态"],
                analysisMethod: function(baziInfo) {
                    const dingCount = this.countDingInBazi(baziInfo);
                    return {
                        strength: dingCount,
                        characteristics: dingCount >= 2 ?
                            ["温和有礼", "细心谨慎", "有智慧"] :
                            ["性格温和", "待人礼貌"],
                        suggestions: dingCount >= 2 ?
                            ["适合脑力工作", "可以从事研究工作"] :
                            ["培养思考能力", "注重细节"]
                    };
                }
            },

            // 戊土取象法
            wu: {
                basicImages: ["大地", "高山", "城墙", "诚信", "稳重"],
                personalityImages: ["诚实守信", "稳重厚道", "有责任心", "包容"],
                careerImages: ["土地相关", "建筑", "农业", "稳定工作"],
                wealthImages: ["土财", "房产财", "稳定收入", "积蓄财"],
                relationshipImages: ["配偶诚实", "感情稳定", "家庭责任感"],
                healthImages: ["脾胃", "消化系统", "肌肉", "腹部"],
                analysisMethod: function(baziInfo) {
                    const wuCount = this.countWuInBazi(baziInfo);
                    return {
                        strength: wuCount,
                        characteristics: wuCount >= 2 ?
                            ["诚实守信", "稳重厚道", "有包容心"] :
                            ["性格稳重", "为人诚实"],
                        suggestions: wuCount >= 2 ?
                            ["适合稳定工作", "可以考虑房地产"] :
                            ["培养诚信品格", "保持稳重"]
                    };
                }
            },

            // 己土取象法
            ji: {
                basicImages: ["田园", "土壤", "田园土", "滋养", "包容"],
                personalityImages: ["温和包容", "有耐心", "喜欢帮助人", "细致"],
                careerImages: ["服务行业", "教育", "医护", "农业"],
                wealthImages: ["辛苦财", "服务财", "积累财", "农业财"],
                relationshipImages: ["配偶包容", "感情细水长流", "重视家庭"],
                healthImages: ["脾胃", "消化", "营养吸收", "内分泌"],
                analysisMethod: function(baziInfo) {
                    const jiCount = this.countJiInBazi(baziInfo);
                    return {
                        strength: jiCount,
                        characteristics: jiCount >= 2 ?
                            ["温和包容", "有耐心", "喜欢助人"] :
                            ["性格温和", "有包容心"],
                        suggestions: jiCount >= 2 ?
                            ["适合服务工作", "可以从事教育医疗"] :
                            ["培养耐心", "多帮助他人"]
                    };
                }
            },

            // 庚金取象法
            geng: {
                basicImages: ["金属", "刀剑", "刚健", "义气", "法律"],
                personalityImages: ["刚健有力", "有义气", "果断", "有原则"],
                careerImages: ["军警", "法律", "机械", "金融"],
                wealthImages: ["武职财", "法律财", "金属财", "果断财"],
                relationshipImages: ["配偶刚强", "感情直接", "有原则性"],
                healthImages: ["肺", "呼吸系统", "骨骼", "大肠"],
                analysisMethod: function(baziInfo) {
                    const gengCount = this.countGengInBazi(baziInfo);
                    return {
                        strength: gengCount,
                        characteristics: gengCount >= 2 ?
                            ["刚健有力", "有义气", "果断坚决"] :
                            ["性格刚强", "有原则"],
                        suggestions: gengCount >= 2 ?
                            ["适合武职法律", "可以从事金融"] :
                            ["锻炼意志力", "保持原则"]
                    };
                }
            },

            // 辛金取象法
            xin: {
                basicImages: ["珠宝", "首饰", "装饰", "金钱", "精细"],
                personalityImages: ["细致精致", "爱美", "有品味", "聪明"],
                careerImages: ["珠宝", "设计", "艺术", "金融投资"],
                wealthImages: ["珠宝财", "装饰财", "投资财", "美丽财"],
                relationshipImages: ["配偶漂亮", "注重外表", "感情细腻"],
                healthImages: ["肺", "呼吸", "皮肤", "牙齿"],
                analysisMethod: function(baziInfo) {
                    const xinCount = this.countXinInBazi(baziInfo);
                    return {
                        strength: xinCount,
                        characteristics: xinCount >= 2 ?
                            ["细致精致", "有品味", "聪明伶俐"] :
                            ["性格细腻", "爱美"],
                        suggestions: xinCount >= 2 ?
                            ["适合设计艺术", "可以从事珠宝"] :
                            ["培养审美能力", "注重细节"]
                    };
                }
            },

            // 壬水取象法
            ren: {
                basicImages: ["江河", "大海", "智慧", "变通", "聪明"],
                personalityImages: ["聪明智慧", "适应力强", "有计谋", "包容"],
                careerImages: ["贸易", "运输", "水利", "策划"],
                wealthImages: ["流动财", "贸易财", "智慧财", "变化财"],
                relationshipImages: ["配偶聪明", "感情多变", "需要空间"],
                healthImages: ["肾脏", "泌尿系统", "血液循环", "内分泌"],
                analysisMethod: function(baziInfo) {
                    const renCount = this.countRenInBazi(baziInfo);
                    return {
                        strength: renCount,
                        characteristics: renCount >= 2 ?
                            ["聪明智慧", "适应力强", "有计谋"] :
                            ["性格聪明", "适应力强"],
                        suggestions: renCount >= 2 ?
                            ["适合贸易工作", "可以从事策划"] :
                            ["发挥聪明才智", "培养适应能力"]
                    };
                }
            },

            // 癸水取象法
            gui: {
                basicImages: ["雨露", "甘霖", "滋润", "纯净", "智慧"],
                personalityImages: ["纯净细腻", "有智慧", "敏感", "有同情心"],
                careerImages: ["研究", "咨询", "教育", "服务"],
                wealthImages: ["智慧财", "服务财", "辛苦财", "积累财"],
                relationshipImages: ["感情细腻", "精神交流", "需要理解"],
                healthImages: ["肾脏", "生殖系统", "内分泌", "免疫系统"],
                analysisMethod: function(baziInfo) {
                    const guiCount = this.countGuiInBazi(baziInfo);
                    return {
                        strength: guiCount,
                        characteristics: guiCount >= 2 ?
                            ["纯净细腻", "有智慧", "敏感"] :
                            ["性格纯净", "有同情心"],
                        suggestions: guiCount >= 2 ?
                            ["适合研究工作", "可以从事咨询"] :
                            ["培养智慧", "保持纯净心灵"]
                    };
                }
            }
        },

        // 地支取象法
        diZhiXiang: {
            zi: {
                basicImages: ["水沟", "溪流", "暗流", "智慧", "变化"],
                personalityImages: ["聪明机敏", "适应力强", "有智慧", "善于变化"],
                careerImages: ["贸易", "运输", "水利", "流动工作"],
                wealthImages: ["流动财", "贸易财", "变化财", "辛苦财"],
                relationshipImages: ["感情多变", "需要自由", "重视精神"],
                healthImages: ["肾脏", "泌尿系统", "血液", "生殖系统"],
                analysisMethod: function(baziInfo) {
                    const ziCount = this.countZiInBazi(baziInfo);
                    return {
                        strength: ziCount,
                        characteristics: ziCount >= 2 ?
                            ["聪明机敏", "适应力强", "善于变化"] :
                            ["性格聪明", "适应力强"],
                        suggestions: ziCount >= 2 ?
                            ["适合流动工作", "可以从事贸易"] :
                            ["发挥聪明才智", "培养适应能力"]
                    };
                }
            },

            chou: {
                basicImages: ["泥土", "田园", "仓库", "积累", "稳定"],
                personalityImages: ["稳重踏实", "有耐心", "诚实守信", "善于积累"],
                careerImages: ["农业", "土地", "仓储", "稳定工作"],
                wealthImages: ["积累财", "土地财", "稳定财", "辛苦财"],
                relationshipImages: ["感情稳定", "忠诚可靠", "重视家庭"],
                healthImages: ["脾胃", "消化系统", "腹部", "肌肉"],
                analysisMethod: function(baziInfo) {
                    const chouCount = this.countChouInBazi(baziInfo);
                    return {
                        strength: chouCount,
                        characteristics: chouCount >= 2 ?
                            ["稳重踏实", "有耐心", "善于积累"] :
                            ["性格稳重", "有耐心"],
                        suggestions: chouCount >= 2 ?
                            ["适合稳定工作", "可以考虑农业"] :
                            ["培养耐心", "注重积累"]
                    };
                }
            },

            yin: {
                basicImages: ["树林", "森林", "老虎", "威猛", "独立"],
                personalityImages: ["独立自主", "有威严", "勇敢", "有野心"],
                careerImages: ["管理", "自主创业", "林业", "独立工作"],
                wealthImages: ["独立财", "创业财", "林业财", "管理财"],
                relationshipImages: ["配偶独立", "需要空间", "重视自主"],
                healthImages: ["肝胆", "筋骨", "神经系统", "四肢"],
                analysisMethod: function(baziInfo) {
                    const yinCount = this.countYinInBazi(baziInfo);
                    return {
                        strength: yinCount,
                        characteristics: yinCount >= 2 ?
                            ["独立自主", "有威严", "勇敢"] :
                            ["性格独立", "有勇气"],
                        suggestions: yinCount >= 2 ?
                            ["适合自主创业", "可以从事管理"] :
                            ["培养独立性", "增强勇气"]
                    };
                }
            },

            mao: {
                basicImages: ["花草", "灌木", "兔子", "温和", "美丽"],
                personalityImages: ["温和善良", "美丽优雅", "有艺术感", "细心"],
                careerImages: ["艺术", "设计", "园林", "文职"],
                wealthImages: ["艺术财", "美丽财", "技能财", "辛苦财"],
                relationshipImages: ["配偶美丽", "感情细腻", "重视美感"],
                healthImages: ["肝脏", "胆囊", "神经系统", "毛发"],
                analysisMethod: function(baziInfo) {
                    const maoCount = this.countMaoInBazi(baziInfo);
                    return {
                        strength: maoCount,
                        characteristics: maoCount >= 2 ?
                            ["温和善良", "美丽优雅", "有艺术感"] :
                            ["性格温和", "有美感"],
                        suggestions: maoCount >= 2 ?
                            ["适合艺术工作", "可以从事设计"] :
                            ["培养艺术感", "保持温柔"]
                    };
                }
            },

            chen: {
                basicImages: ["水库", "龙", "权威", "变化", "神秘"],
                personalityImages: ["有权威", "神秘莫测", "善于变化", "有野心"],
                careerImages: ["管理", "策划", "水利", "神秘工作"],
                wealthImages: ["变化财", "权威财", "神秘财", "策划财"],
                relationshipImages: ["配偶有权威", "感情变化大", "需要理解"],
                healthImages: ["脾胃", "消化系统", "皮肤", "内分泌"],
                analysisMethod: function(baziInfo) {
                    const chenCount = this.countChenInBazi(baziInfo);
                    return {
                        strength: chenCount,
                        characteristics: chenCount >= 2 ?
                            ["有权威", "神秘莫测", "善于变化"] :
                            ["性格有魅力", "有神秘感"],
                        suggestions: chenCount >= 2 ?
                            ["适合管理工作", "可以从事策划"] :
                            ["培养领导力", "保持神秘感"]
                    };
                }
            },

            si: {
                basicImages: ["火", "阳光", "文明", "文化", "美丽"],
                personalityImages: ["文明礼貌", "有文化", "美丽优雅", "热情"],
                careerImages: ["文化教育", "艺术", "演艺", "公关"],
                wealthImages: ["文化财", "美丽财", "演艺财", "名声财"],
                relationshipImages: ["配偶美丽", "感情热烈", "重视文化"],
                healthImages: ["心脏", "小肠", "血液", "眼睛"],
                analysisMethod: function(baziInfo) {
                    const siCount = this.countSiInBazi(baziInfo);
                    return {
                        strength: siCount,
                        characteristics: siCount >= 2 ?
                            ["文明礼貌", "有文化", "美丽优雅"] :
                            ["性格热情", "有礼貌"],
                        suggestions: siCount >= 2 ?
                            ["适合文化工作", "可以从事艺术"] :
                            ["培养文化素养", "保持优雅"]
                    };
                }
            },

            wu: {
                basicImages: ["大火", "炉火", "热情", "变化", "文明"],
                personalityImages: ["热情开朗", "有礼貌", "善于变化", "文明"],
                careerImages: ["文化教育", "公关", "销售", "服务"],
                wealthImages: ["变化财", "热情财", "文化财", "服务财"],
                relationshipImages: ["感情热烈", "善变", "需要新鲜感"],
                healthImages: ["心脏", "血液", "循环系统", "精神"],
                analysisMethod: function(baziInfo) {
                    const wuCount = this.countWuInBazi(baziInfo);
                    return {
                        strength: wuCount,
                        characteristics: wuCount >= 2 ?
                            ["热情开朗", "善于变化", "文明礼貌"] :
                            ["性格热情", "有礼貌"],
                        suggestions: wuCount >= 2 ?
                            ["适合服务工作", "可以从事公关"] :
                            ["发挥热情", "保持礼貌"]
                    };
                }
            },

            wei: {
                basicImages: ["花园", "山坡", "羊", "温和", "美丽"],
                personalityImages: ["温和善良", "美丽优雅", "有耐心", "喜欢和谐"],
                careerImages: ["艺术", "设计", "园艺", "文职"],
                wealthImages: ["艺术财", "美丽财", "和谐财", "辛苦财"],
                relationshipImages: ["配偶美丽", "感情和谐", "重视美感"],
                healthImages: ["脾胃", "消化系统", "肌肉", "皮肤"],
                analysisMethod: function(baziInfo) {
                    const weiCount = this.countWeiInBazi(baziInfo);
                    return {
                        strength: weiCount,
                        characteristics: weiCount >= 2 ?
                            ["温和善良", "美丽优雅", "有耐心"] :
                            ["性格温和", "有美感"],
                        suggestions: weiCount >= 2 ?
                            ["适合艺术工作", "可以从事设计"] :
                            ["培养耐心", "保持优雅"]
                    };
                }
            },

            shen: {
                basicImages: ["金属", "刀剑", "猴子", "聪明", "灵活"],
                personalityImages: ["聪明灵活", "有技巧", "适应力强", "善于交际"],
                careerImages: ["技术", "金融", "销售", "交际工作"],
                wealthImages: ["技术财", "金融财", "交际财", "变化财"],
                relationshipImages: ["配偶聪明", "感情灵活", "需要新鲜感"],
                healthImages: ["肺", "呼吸系统", "骨骼", "大肠"],
                analysisMethod: function(baziInfo) {
                    const shenCount = this.countShenInBazi(baziInfo);
                    return {
                        strength: shenCount,
                        characteristics: shenCount >= 2 ?
                            ["聪明灵活", "有技巧", "适应力强"] :
                            ["性格聪明", "适应力强"],
                        suggestions: shenCount >= 2 ?
                            ["适合技术工作", "可以从事金融"] :
                            ["发挥聪明才智", "培养技能"]
                    };
                }
            },

            you: {
                basicImages: ["首饰", "装饰", "鸡", "美丽", "准时"],
                personalityImages: ["美丽优雅", "准时守信", "有品味", "善于表达"],
                careerImages: ["珠宝", "设计", "艺术", "服务"],
                wealthImages: ["美丽财", "装饰财", "品味财", "服务财"],
                relationshipImages: ["配偶美丽", "感情细腻", "重视品味"],
                healthImages: ["肺", "呼吸系统", "皮肤", "牙齿"],
                analysisMethod: function(baziInfo) {
                    const youCount = this.countYouInBazi(baziInfo);
                    return {
                        strength: youCount,
                        characteristics: youCount >= 2 ?
                            ["美丽优雅", "准时守信", "有品味"] :
                            ["性格优雅", "有美感"],
                        suggestions: youCount >= 2 ?
                            ["适合艺术工作", "可以从事珠宝"] :
                            ["培养审美能力", "保持准时"]
                    };
                }
            },

            xu: {
                basicImages: ["仓库", "狗", "忠诚", "稳定", "守护"],
                personalityImages: ["忠诚可靠", "稳重踏实", "有责任心", "善于守护"],
                careerImages: ["管理", "安保", "仓储", "稳定工作"],
                wealthImages: ["稳定财", "守护财", "管理财", "辛苦财"],
                relationshipImages: ["配偶忠诚", "感情稳定", "重视责任"],
                healthImages: ["脾胃", "消化系统", "肌肉", "骨骼"],
                analysisMethod: function(baziInfo) {
                    const xuCount = this.countXuInBazi(baziInfo);
                    return {
                        strength: xuCount,
                        characteristics: xuCount >= 2 ?
                            ["忠诚可靠", "稳重踏实", "有责任心"] :
                            ["性格忠诚", "有责任心"],
                        suggestions: xuCount >= 2 ?
                            ["适合管理工作", "可以考虑安保"] :
                            ["培养忠诚品格", "保持稳重"]
                    };
                }
            },

            hai: {
                basicImages: ["大海", "猪", "智慧", "包容", "变化"],
                personalityImages: ["有智慧", "包容大度", "适应力强", "善良"],
                careerImages: ["研究", "教育", "服务", "流动工作"],
                wealthImages: ["智慧财", "包容财", "变化财", "服务财"],
                relationshipImages: ["配偶善良", "感情包容", "需要理解"],
                healthImages: ["肾脏", "泌尿系统", "血液", "内分泌"],
                analysisMethod: function(baziInfo) {
                    const haiCount = this.countHaiInBazi(baziInfo);
                    return {
                        strength: haiCount,
                        characteristics: haiCount >= 2 ?
                            ["有智慧", "包容大度", "适应力强"] :
                            ["性格善良", "有智慧"],
                        suggestions: haiCount >= 2 ?
                            ["适合研究工作", "可以从事教育"] :
                            ["发挥智慧", "培养包容心"]
                    };
                }
            }
        },

        // 十神取象法
        shiShenXiang: {
            biJian: {
                basicImages: ["兄弟", "朋友", "同事", "竞争", "合作"],
                personalityImages: ["独立自主", "有主见", "善于交际", "好胜"],
                careerImages: ["自主创业", "合作经营", "销售", "公关"],
                wealthImages: ["合作财", "竞争财", "人脉财", "变化财"],
                relationshipImages: ["朋友多", "竞争意识强", "善于合作"],
                analysisMethod: function(baziInfo) {
                    const bijianCount = this.countBijianInBazi(baziInfo);
                    return {
                        strength: bijianCount,
                        characteristics: bijianCount >= 2 ?
                            ["独立自主", "有主见", "善于交际"] :
                            ["性格独立", "有主见"],
                        suggestions: bijianCount >= 2 ?
                            ["适合自主创业", "可以从事销售"] :
                            ["培养独立性", "增强交际能力"]
                    };
                }
            },

            jieCai: {
                basicImages: ["争夺", "花费", "投机", "风险", "破财"],
                personalityImages: ["豪爽大方", "不拘小节", "敢于冒险", "花钱如流水"],
                careerImages: ["投机", "投资", "贸易", "风险工作"],
                wealthImages: ["投机财", "风险财", "破财", "意外财"],
                relationshipImages: ["感情易变", "花钱大方", "需要自由"],
                analysisMethod: function(baziInfo) {
                    const jiecaiCount = this.countJiecaiInBazi(baziInfo);
                    return {
                        strength: jiecaiCount,
                        characteristics: jiecaiCount >= 2 ?
                            ["豪爽大方", "敢于冒险", "花钱大方"] :
                            ["性格豪爽", "不拘小节"],
                        suggestions: jiecaiCount >= 2 ?
                            ["适合投资工作", "需要注意理财"] :
                            ["培养冒险精神", "注意财务管理"]
                    };
                }
            },

            shiGuan: {
                basicImages: ["权力", "地位", "名声", "约束", "责任"],
                personalityImages: ["有责任心", "守规矩", "重视名声", "有权威"],
                careerImages: ["管理", "公务员", "教师", "律师"],
                wealthImages: ["稳定财", "名声财", "权力财", "辛苦财"],
                relationshipImages: ["配偶稳重", "感情稳定", "重视责任"],
                analysisMethod: function(baziInfo) {
                    const shiguanCount = this.countShiguanInBazi(baziInfo);
                    return {
                        strength: shiguanCount,
                        characteristics: shiguanCount >= 2 ?
                            ["有责任心", "守规矩", "重视名声"] :
                            ["性格稳重", "有责任感"],
                        suggestions: shiguanCount >= 2 ?
                            ["适合管理工作", "可以从事公务员"] :
                            ["培养责任心", "注重名声"]
                    };
                }
            },

            shaSha: {
                basicImages: ["压力", "挑战", "权力", "威严", "变革"],
                personalityImages: ["有威严", "敢于挑战", "抗压能力强", "善于变革"],
                careerImages: ["军警", "管理", "创业者", "改革工作"],
                wealthImages: ["挑战财", "权力财", "变革财", "风险财"],
                relationshipImages: ["配偶有威严", "感情有压力", "需要理解"],
                analysisMethod: function(baziInfo) {
                    const shashaCount = this.countShashaInBazi(baziInfo);
                    return {
                        strength: shashaCount,
                        characteristics: shashaCount >= 2 ?
                            ["有威严", "敢于挑战", "抗压能力强"] :
                            ["性格有威严", "敢于挑战"],
                        suggestions: shashaCount >= 2 ?
                            ["适合挑战性工作", "可以从事管理"] :
                            ["培养抗压能力", "增强威严"]
                    };
                }
            },

            zhengCai: {
                basicImages: ["财富", "房产", "稳定", " conservative", "实际"],
                personalityImages: ["稳重踏实", "重视财富", "有耐心", "实际"],
                careerImages: ["金融", "房地产", "贸易", "稳定工作"],
                wealthImages: ["稳定财", "房产财", "金融财", "实际财"],
                relationshipImages: ["配偶稳重", "感情稳定", "重视实际"],
                analysisMethod: function(baziInfo) {
                    const zhengcaiCount = this.countZhengcaiInBazi(baziInfo);
                    return {
                        strength: zhengcaiCount,
                        characteristics: zhengcaiCount >= 2 ?
                            ["稳重踏实", "重视财富", "有耐心"] :
                            ["性格稳重", "重视实际"],
                        suggestions: zhengcaiCount >= 2 ?
                            ["适合金融工作", "可以考虑房地产"] :
                            ["培养耐心", "注重实际"]
                    };
                }
            },

            pianCai: {
                basicImages: ["偏财", "意外财", "投机", "机遇", "变化"],
                personalityImages: ["机智灵活", "善于把握机遇", "敢于冒险", "适应力强"],
                careerImages: ["投机", "投资", "贸易", "变化工作"],
                wealthImages: ["意外财", "投机财", "机遇财", "变化财"],
                relationshipImages: ["感情多变", "善于把握机遇", "需要新鲜感"],
                analysisMethod: function(baziInfo) {
                    const piancaiCount = this.countPiancaiInBazi(baziInfo);
                    return {
                        strength: piancaiCount,
                        characteristics: piancaiCount >= 2 ?
                            ["机智灵活", "善于把握机遇", "敢于冒险"] :
                            ["性格机智", "适应力强"],
                        suggestions: piancaiCount >= 2 ?
                            ["适合投资工作", "需要注意风险管理"] :
                            ["培养机遇意识", "增强适应能力"]
                    };
                }
            },

            zhengYin: {
                basicImages: ["学习", "知识", "母亲", "保护", "支持"],
                personalityImages: ["好学不倦", "有爱心", "善于学习", "重视知识"],
                careerImages: ["教育", "研究", "文化", "学术"],
                wealthImages: ["知识财", "教育财", "文化财", "辛苦财"],
                relationshipImages: ["配偶有爱心", "感情稳定", "重视学习"],
                analysisMethod: function(baziInfo) {
                    const zhengyinCount = this.countZhengyinInBazi(baziInfo);
                    return {
                        strength: zhengyinCount,
                        characteristics: zhengyinCount >= 2 ?
                            ["好学不倦", "有爱心", "善于学习"] :
                            ["性格温和", "有学习欲望"],
                        suggestions: zhengyinCount >= 2 ?
                            ["适合教育工作", "可以从事研究"] :
                            ["培养学习习惯", "注重知识积累"]
                    };
                }
            },

            pianYin: {
                basicImages: ["艺术", "技能", "智慧", "直觉", "创造"],
                personalityImages: ["有艺术天赋", "直觉敏锐", "善于创造", "智慧"],
                careerImages: ["艺术", "设计", "创作", "技术"],
                wealthImages: ["艺术财", "技能财", "创造财", "智慧财"],
                relationshipImages: ["配偶有艺术感", "感情细腻", "重视精神"],
                analysisMethod: function(baziInfo) {
                    const pianyinCount = this.countPianyinInBazi(baziInfo);
                    return {
                        strength: pianyinCount,
                        characteristics: pianyinCount >= 2 ?
                            ["有艺术天赋", "直觉敏锐", "善于创造"] :
                            ["性格有艺术感", "直觉强"],
                        suggestions: pianyinCount >= 2 ?
                            ["适合艺术工作", "可以从事创作"] :
                            ["培养艺术感", "发挥直觉"]
                    };
                }
            },

            shiShen: {
                basicImages: ["表达", "表演", "才华", "创造力", "艺术"],
                personalityImages: ["才华横溢", "善于表达", "有创造力", "艺术天赋"],
                careerImages: ["艺术", "演艺", "设计", "创作"],
                wealthImages: ["才华财", "艺术财", "表演财", "创造财"],
                relationshipImages: ["配偶有才华", "感情热烈", "重视表达"],
                analysisMethod: function(baziInfo) {
                    const shishenCount = this.countShishenInBazi(baziInfo);
                    return {
                        strength: shishenCount,
                        characteristics: shishenCount >= 2 ?
                            ["才华横溢", "善于表达", "有创造力"] :
                            ["性格有才华", "善于表达"],
                        suggestions: shishenCount >= 2 ?
                            ["适合艺术工作", "可以从事演艺"] :
                            ["发挥才华", "培养创造力"]
                    };
                }
            },

            shangGuan: {
                basicImages: ["智慧", "叛逆", "创新", "改革", "技术"],
                personalityImages: ["聪明智慧", "有叛逆精神", "善于创新", "技术天赋"],
                careerImages: ["技术", "研究", "创新", "改革"],
                wealthImages: ["智慧财", "技术财", "创新财", "改革财"],
                relationshipImages: ["配偶聪明", "感情需要空间", "重视智慧"],
                analysisMethod: function(baziInfo) {
                    const shangguanCount = this.countShangguanInBazi(baziInfo);
                    return {
                        strength: shangguanCount,
                        characteristics: shangguanCount >= 2 ?
                            ["聪明智慧", "有叛逆精神", "善于创新"] :
                            ["性格聪明", "有创新意识"],
                        suggestions: shangguanCount >= 2 ?
                            ["适合技术工作", "可以从事研究"] :
                            ["发挥智慧", "培养创新能力"]
                    };
                }
            }
        },

        // 综合取象分析
        comprehensiveAnalysis: function(baziInfo) {
            const result = {
                tianGanAnalysis: {},
                diZhiAnalysis: {},
                shiShenAnalysis: {},
                comprehensiveResult: {},
                suggestions: []
            };

            // 分析天干取象
            result.tianGanAnalysis = this.analyzeTianGanXiang(baziInfo);

            // 分析地支取象
            result.diZhiAnalysis = this.analyzeDiZhiXiang(baziInfo);

            // 分析十神取象
            result.shiShenAnalysis = this.analyzeShiShenXiang(baziInfo);

            // 综合分析结果
            result.comprehensiveResult = this.synthesizeResults(result);

            // 生成建议
            result.suggestions = this.generateSuggestions(result);

            return result;
        },

        // 天干取象分析
        analyzeTianGanXiang: function(baziInfo) {
            const analysis = {};
            const tianGanXiang = this.tianGanXiang;

            // 获取八字中的天干
            const stems = [
                baziInfo.bazi.year.stem,
                baziInfo.bazi.month.stem,
                baziInfo.bazi.day.stem,
                baziInfo.bazi.hour.stem
            ];

            // 分析每个天干的取象
            stems.forEach(stem => {
                if (tianGanXiang[stem]) {
                    analysis[stem] = tianGanXiang[stem].analysisMethod(baziInfo);
                }
            });

            return analysis;
        },

        // 地支取象分析
        analyzeDiZhiXiang: function(baziInfo) {
            const analysis = {};
            const diZhiXiang = this.diZhiXiang;

            // 获取八字中的地支
            const branches = [
                baziInfo.bazi.year.branch,
                baziInfo.bazi.month.branch,
                baziInfo.bazi.day.branch,
                baziInfo.bazi.hour.branch
            ];

            // 分析每个地支的取象
            branches.forEach(branch => {
                if (diZhiXiang[branch]) {
                    analysis[branch] = diZhiXiang[branch].analysisMethod(baziInfo);
                }
            });

            return analysis;
        },

        // 十神取象分析
        analyzeShiShenXiang: function(baziInfo) {
            const analysis = {};
            const shiShenXiang = this.shiShenXiang;

            // 获取八字中的十神分布
            const shishenDistribution = baziInfo.analysis.shishenDistribution;

            // 分析每个十神的取象
            Object.keys(shishenDistribution).forEach(shishen => {
                if (shiShenXiang[shishen] && shishenDistribution[shishen] > 0) {
                    analysis[shishen] = shiShenXiang[shishen].analysisMethod(baziInfo);
                }
            });

            return analysis;
        },

        // 综合分析结果
        synthesizeResults: function(analyses) {
            const result = {
                dominantCharacteristics: [],
                careerTendencies: [],
                relationshipTendencies: [],
                healthTendencies: [],
                wealthTendencies: []
            };

            // 综合天干地支十神的特征
            // 天干特征
            Object.values(analyses.tianGanAnalysis).forEach(analysis => {
                if (analysis.characteristics) {
                    result.dominantCharacteristics.push(...analysis.characteristics);
                }
                if (analysis.suggestions) {
                    // 从建议中提取职业倾向
                    analysis.suggestions.forEach(suggestion => {
                        if (suggestion.includes("工作") || suggestion.includes("创业")) {
                            result.careerTendencies.push(suggestion);
                        }
                    });
                }
            });

            // 地支特征
            Object.values(analyses.diZhiAnalysis).forEach(analysis => {
                if (analysis.characteristics) {
                    result.dominantCharacteristics.push(...analysis.characteristics);
                }
            });

            // 十神特征
            Object.values(analyses.shiShenAnalysis).forEach(analysis => {
                if (analysis.characteristics) {
                    result.dominantCharacteristics.push(...analysis.characteristics);
                }
                if (analysis.suggestions) {
                    analysis.suggestions.forEach(suggestion => {
                        if (suggestion.includes("工作") || suggestion.includes("创业")) {
                            result.careerTendencies.push(suggestion);
                        }
                    });
                }
            });

            // 去重并排序
            result.dominantCharacteristics = [...new Set(result.dominantCharacteristics)];
            result.careerTendencies = [...new Set(result.careerTendencies)];

            return result;
        },

        // 生成建议
        generateSuggestions: function(analyses) {
            const suggestions = [];

            // 基于综合结果生成建议
            const comprehensive = analyses.comprehensiveResult;

            // 性格建议
            if (comprehensive.dominantCharacteristics.length > 0) {
                suggestions.push({
                    type: "性格发展",
                    content: `您的性格特征：${comprehensive.dominantCharacteristics.join("、")}`,
                    advice: "建议发挥自己的优势性格，同时注意平衡发展"
                });
            }

            // 职业建议
            if (comprehensive.careerTendencies.length > 0) {
                suggestions.push({
                    type: "职业发展",
                    content: `适合的职业方向：${comprehensive.careerTendencies.join("、")}`,
                    advice: "建议根据自己的兴趣和特长选择合适的职业"
                });
            }

            // 通用建议
            suggestions.push({
                type: "发展建议",
                content: "取象法只是参考，实际发展还需要结合个人努力和机遇",
                advice: "建议保持积极心态，努力学习，把握机遇"
            });

            return suggestions;
        }
    },

    // 流年技法实现系统
    liuNianSystem: {
        // 流年天干取象
        liuNianTianGanXiang: {
            jia: {
                meaning: "新生、开始、领导、创业",
                career: "适合开始新项目、升职、创业",
                wealth: "有新的收入来源，投资收益好",
                relationship: "新的感情机会，或者关系新阶段",
                health: "注意肝胆、筋骨健康"
            },

            yi: {
                meaning: "柔顺、合作、艺术、温和",
                career: "适合合作项目、艺术工作",
                wealth: "收入稳定，适合长期投资",
                relationship: "感情和谐，适合结婚",
                health: "注意肝脏、神经系统健康"
            },

            bing: {
                meaning: "热情、名声、变化、快速",
                career: "事业有突破，名声提升",
                wealth: "有意外之财，但花销也大",
                relationship: "感情热烈，易有变化",
                health: "注意心脏、血液健康"
            },

            ding: {
                meaning: "温和、文化、智慧、稳定",
                career: "事业稳定发展，适合学习",
                wealth: "收入稳定，适合储蓄",
                relationship: "感情稳定，适合深层交流",
                health: "注意心脏、循环系统健康"
            },

            wu: {
                meaning: "稳重、诚信、积累、变化",
                career: "事业稳重发展，需要诚信",
                wealth: "财富积累，适合投资房产",
                relationship: "感情稳定，重视责任",
                health: "注意脾胃、消化系统健康"
            },

            ji: {
                meaning: "包容、服务、耐心、细致",
                career: "适合服务工作，需要耐心",
                wealth: "收入来自服务，辛苦但有积累",
                relationship: "感情需要包容和理解",
                health: "注意脾胃、消化系统健康"
            },

            geng: {
                meaning: "刚健、义气、法律、变革",
                career: "事业有变革，适合法律工作",
                wealth: "有武职财，需要果断决策",
                relationship: "感情直接，需要有原则",
                health: "注意肺、呼吸系统健康"
            },

            xin: {
                meaning: "精致、美丽、金钱、交际",
                career: "事业与美丽、交际相关",
                wealth: "有美丽财，适合装饰、珠宝行业",
                relationship: "重视外表，感情细腻",
                health: "注意肺、呼吸系统健康"
            },

            ren: {
                meaning: "智慧、流动、变化、贸易",
                career: "事业有变化，适合贸易工作",
                wealth: "财富流动，适合短期投资",
                relationship: "感情多变，需要空间",
                health: "注意肾脏、泌尿系统健康"
            },

            gui: {
                meaning: "纯净、智慧、服务、积累",
                career: "事业与智慧、服务相关",
                wealth: "财富来自智慧，需要积累",
                relationship: "感情纯净，重视精神交流",
                health: "注意肾脏、生殖系统健康"
            }
        },

        // 流年地支取象
        liuNianDiZhiXiang: {
            zi: {
                meaning: "智慧、变化、流动、机遇",
                overall: "整体运势变化大，有机遇也有挑战",
                career: "工作变动多，需要适应能力",
                wealth: "财富流动，把握机遇很重要",
                relationship: "感情多变，需要理解和包容"
            },

            chou: {
                meaning: "积累、稳定、耐心、踏实",
                overall: "整体运势稳定，需要耐心积累",
                career: "工作稳定发展，适合长期规划",
                wealth: "财富积累，适合储蓄和投资",
                relationship: "感情稳定，适合长期发展"
            },

            yin: {
                meaning: "独立、威严、创业、挑战",
                overall: "整体运势有挑战，需要独立面对",
                career: "工作有挑战，适合创业或独立工作",
                wealth: "财富来自独立工作，需要冒险",
                relationship: "感情需要独立空间，互相信任"
            },

            mao: {
                meaning: "美丽、艺术、温和、和谐",
                overall: "整体运势和谐，美丽而温和",
                career: "工作与艺术、美丽相关",
                wealth: "财富来自艺术或美丽相关行业",
                relationship: "感情和谐美丽，适合浪漫关系"
            },

            chen: {
                meaning: "权威、变化、神秘、机遇",
                overall: "整体运势神秘莫测，有机遇",
                career: "工作有权威，适合管理",
                wealth: "财富来自权威或神秘机会",
                relationship: "感情有权威，需要互相尊重"
            },

            si: {
                meaning: "文化、美丽、热情、文明",
                overall: "整体运势热情文明，有文化气息",
                career: "工作与文化、美丽相关",
                wealth: "财富来自文化或美丽相关",
                relationship: "感情热情美丽，重视文化"
            },

            wu: {
                meaning: "热情、变化、文明、礼貌",
                overall: "整体运势热情变化，文明礼貌",
                career: "工作热情，需要适应变化",
                wealth: "财富变化大，需要把握机会",
                relationship: "感情热情，需要新鲜感"
            },

            wei: {
                meaning: "美丽、和谐、耐心、温和",
                overall: "整体运势美丽和谐，需要耐心",
                career: "工作美丽和谐，适合艺术",
                wealth: "财富来自美丽和谐的工作",
                relationship: "感情美丽和谐，互相包容"
            },

            shen: {
                meaning: "聪明、灵活、交际、变化",
                overall: "整体运势聪明灵活，变化多",
                career: "工作需要聪明才智和交际能力",
                wealth: "财富来自聪明才智和交际",
                relationship: "感情灵活，需要交际能力"
            },

            you: {
                meaning: "美丽、准时、品味、优雅",
                overall: "整体运势美丽优雅，准时守信",
                career: "工作与美丽、品味相关",
                wealth: "财富来自美丽或品味相关",
                relationship: "感情美丽优雅，重视品味"
            },

            xu: {
                meaning: "忠诚、稳定、责任、守护",
                overall: "整体运势忠诚稳定，有责任感",
                career: "工作稳定，需要责任心",
                wealth: "财富稳定，来自忠诚和责任",
                relationship: "感情忠诚稳定，重视责任"
            },

            hai: {
                meaning: "智慧、包容、善良、变化",
                overall: "整体运势智慧包容，善良变化",
                career: "工作需要智慧和包容心",
                wealth: "财富来自智慧和包容",
                relationship: "感情包容善良，需要理解"
            }
        },

        // 流年与命局关系分析
        liuNianMingJuRelation: {
            // 天干合化
            tianGanHeHua: {
                "甲己": {
                    combination: "甲己合化土",
                    meaning: "中正之合，诚信合作",
                    effect: "有贵人相助，合作顺利"
                },
                "乙庚": {
                    combination: "乙庚合化金",
                    meaning: "仁义之合，刚柔并济",
                    effect: "有异性贵人，感情顺利"
                },
                "丙辛": {
                    combination: "丙辛合化水",
                    meaning: "威制之合，权威威严",
                    effect: "有权威贵人，事业顺利"
                },
                "丁壬": {
                    combination: "丁壬合化木",
                    meaning: "淫慝之合，感情纠葛",
                    effect: "感情复杂，需要理性处理"
                },
                "戊癸": {
                    combination: "戊癸合化火",
                    meaning: "无情之合，老少配",
                    effect: "关系特殊，需要包容理解"
                }
            },

            // 地支三合
            diZhiSanHe: {
                "申子辰": {
                    combination: "申子辰三合水局",
                    meaning: "水局，智慧流动",
                    effect: "智慧提升，机遇增多"
                },
                "寅午戌": {
                    combination: "寅午戌三合火局",
                    meaning: "火局，热情文明",
                    effect: "热情高涨，名声提升"
                },
                "巳酉丑": {
                    combination: "巳酉丑三合金局",
                    meaning: "金局，刚健义气",
                    effect: "有义气相助，事业顺利"
                },
                "亥卯未": {
                    combination: "亥卯未三合木局",
                    meaning: "木局，仁慈生长",
                    effect: "有贵人相助，成长顺利"
                }
            },

            // 地支六冲
            diZhiLiuChong: {
                "子午": {
                    combination: "子午相冲",
                    meaning: "水火相冲，变化激烈",
                    effect: "变动大，需要适应能力"
                },
                "丑未": {
                    combination: "丑未相冲",
                    meaning: "土土相冲，稳定被破",
                    effect: "稳定被打破，需要重新规划"
                },
                "寅申": {
                    combination: "寅申相冲",
                    meaning: "木金相冲，冲突激烈",
                    effect: "冲突多，需要处理矛盾"
                },
                "卯酉": {
                    combination: "卯酉相冲",
                    meaning: "金木相冲，变化剧烈",
                    effect: "变化剧烈，需要灵活应对"
                },
                "辰戌": {
                    combination: "辰戌相冲",
                    meaning: "土土相冲，权威挑战",
                    effect: "权威受挑战，需要坚持"
                },
                "巳亥": {
                    combination: "巳亥相冲",
                    meaning: "水火相冲，变化复杂",
                    effect: "变化复杂，需要智慧应对"
                }
            }
        },

        // 流年分析主函数
        analyzeLiuNian: function(baziInfo, targetYear) {
            const result = {
                yearInfo: {},
                tianGanAnalysis: {},
                diZhiAnalysis: {},
                relationAnalysis: {},
                monthlyAnalysis: {},
                overallPrediction: {},
                suggestions: []
            };

            // 计算流年干支
            const liuNianGanZhi = this.calculateLiuNianGanZhi(targetYear);
            result.yearInfo = {
                year: targetYear,
                ganZhi: liuNianGanZhi,
                gan: liuNianGanZhi.substring(0, 1),
                zhi: liuNianGanZhi.substring(1, 3)
            };

            // 分析流年天干
            result.tianGanAnalysis = this.analyzeLiuNianTianGan(result.yearInfo.gan, baziInfo);

            // 分析流年地支
            result.diZhiAnalysis = this.analyzeLiuNianDiZhi(result.yearInfo.zhi, baziInfo);

            // 分析流年与命局关系
            result.relationAnalysis = this.analyzeLiuNianRelation(result.yearInfo, baziInfo);

            // 分析流年月度
            result.monthlyAnalysis = this.analyzeLiuNianMonthly(targetYear, baziInfo);

            // 综合预测
            result.overallPrediction = this.generateOverallPrediction(result);

            // 生成建议
            result.suggestions = this.generateLiuNianSuggestions(result);

            return result;
        },

        // 计算流年干支
        calculateLiuNianGanZhi: function(year) {
            // 天干地支循环
            const tianGan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
            const diZhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

            // 以1984年甲子为基准计算
            const baseYear = 1984;
            const yearDiff = year - baseYear;

            const ganIndex = yearDiff % 10;
            const zhiIndex = yearDiff % 12;

            return tianGan[ganIndex] + diZhi[zhiIndex];
        },

        // 分析流年天干
        analyzeLiuNianTianGan: function(liuNianGan, baziInfo) {
            const tianGanXiang = this.liuNianTianGanXiang[liuNianGan];
            if (!tianGanXiang) {
                return {};
            }

            const analysis = {
                basicMeaning: tianGanXiang.meaning,
                careerPrediction: tianGanXiang.career,
                wealthPrediction: tianGanXiang.wealth,
                relationshipPrediction: tianGanXiang.relationship,
                healthPrediction: tianGanXiang.health,
                interactionWithMingJu: this.analyzeTianGanInteraction(liuNianGan, baziInfo)
            };

            return analysis;
        },

        // 分析流年地支
        analyzeLiuNianDiZhi: function(liuNianZhi, baziInfo) {
            const diZhiXiang = this.liuNianDiZhiXiang[liuNianZhi];
            if (!diZhiXiang) {
                return {};
            }

            const analysis = {
                basicMeaning: diZhiXiang.meaning,
                overallPrediction: diZhiXiang.overall,
                careerPrediction: diZhiXiang.career,
                wealthPrediction: diZhiXiang.wealth,
                relationshipPrediction: diZhiXiang.relationship,
                interactionWithMingJu: this.analyzeDiZhiInteraction(liuNianZhi, baziInfo)
            };

            return analysis;
        },

        // 分析流年与命局关系
        analyzeLiuNianRelation: function(yearInfo, baziInfo) {
            const relation = {
                tianGanRelations: [],
                diZhiRelations: [],
                overallRelation: "",
                influence: ""
            };

            // 分析天干关系
            const mingJuGan = [
                baziInfo.bazi.year.stem,
                baziInfo.bazi.month.stem,
                baziInfo.bazi.day.stem,
                baziInfo.bazi.hour.stem
            ];

            mingJuGan.forEach(mingGan => {
                const relationType = this.getTianGanRelation(yearInfo.gan, mingGan);
                if (relationType) {
                    relation.tianGanRelations.push({
                        mingJuGan: mingGan,
                        liuNianGan: yearInfo.gan,
                        relation: relationType
                    });
                }
            });

            // 分析地支关系
            const mingJuZhi = [
                baziInfo.bazi.year.branch,
                baziInfo.bazi.month.branch,
                baziInfo.bazi.day.branch,
                baziInfo.bazi.hour.branch
            ];

            mingJuZhi.forEach(mingZhi => {
                const relationType = this.getDiZhiRelation(yearInfo.zhi, mingZhi);
                if (relationType) {
                    relation.diZhiRelations.push({
                        mingJuZhi: mingZhi,
                        liuNianZhi: yearInfo.zhi,
                        relation: relationType
                    });
                }
            });

            // 综合关系分析
            relation.overallRelation = this.synthesizeRelations(relation);
            relation.influence = this.evaluateInfluence(relation);

            return relation;
        },

        // 获取天干关系
        getTianGanRelation: function(liuNianGan, mingJuGan) {
            const tianGanHeHua = this.liuNianMingJuRelation.tianGanHeHua;
            const combination = [liuNianGan, mingJuGan].sort().join("");

            if (tianGanHeHua[combination]) {
                return tianGanHeHua[combination];
            }

            // 检查生克关系
            const shengKeRelation = this.getTianGanShengKe(liuNianGan, mingJuGan);
            if (shengKeRelation) {
                return shengKeRelation;
            }

            return null;
        },

        // 获取地支关系
        getDiZhiRelation: function(liuNianZhi, mingJuZhi) {
            const diZhiSanHe = this.liuNianMingJuRelation.diZhiSanHe;
            const diZhiLiuChong = this.liuNianMingJuRelation.diZhiLiuChong;

            // 检查三合
            Object.keys(diZhiSanHe).forEach(sanHe => {
                if (sanHe.includes(liuNianZhi) && sanHe.includes(mingJuZhi)) {
                    return diZhiSanHe[sanHe];
                }
            });

            // 检查六冲
            const chong = [liuNianZhi, mingJuZhi].sort().join("");
            if (diZhiLiuChong[chong]) {
                return diZhiLiuChong[chong];
            }

            // 检查其他关系
            const otherRelation = this.getDiZhiOtherRelation(liuNianZhi, mingJuZhi);
            if (otherRelation) {
                return otherRelation;
            }

            return null;
        },

        // 获取天干生克关系
        getTianGanShengKe: function(gan1, gan2) {
            const wuxingMap = {
                "甲": "木", "乙": "木",
                "丙": "火", "丁": "火",
                "戊": "土", "己": "土",
                "庚": "金", "辛": "金",
                "壬": "水", "癸": "水"
            };

            const element1 = wuxingMap[gan1];
            const element2 = wuxingMap[gan2];

            if (!element1 || !element2) return null;

            // 相生关系
            if ((element1 === "木" && element2 === "火") ||
                (element1 === "火" && element2 === "土") ||
                (element1 === "土" && element2 === "金") ||
                (element1 === "金" && element2 === "水") ||
                (element1 === "水" && element2 === "木")) {
                return { type: "相生", relation: `${gan1}生${gan2}`, effect: "有助益" };
            }

            // 相克关系
            if ((element1 === "木" && element2 === "土") ||
                (element1 === "火" && element2 === "金") ||
                (element1 === "土" && element2 === "水") ||
                (element1 === "金" && element2 === "木") ||
                (element1 === "水" && element2 === "火")) {
                return { type: "相克", relation: `${gan1}克${gan2}`, effect: "有挑战" };
            }

            // 同性
            if (element1 === element2) {
                return { type: "比和", relation: `${gan1}${gan2}比和`, effect: "有助力" };
            }

            return null;
        },

        // 获取地支其他关系
        getDiZhiOtherRelation: function(zhi1, zhi2) {
            // 简化版本，实际需要考虑六合、相刑、相害等关系
            const liuHe = {
                "子丑": "子丑六合土",
                "寅亥": "寅亥六合木",
                "卯戌": "卯戌六合火",
                "辰酉": "辰酉六合金",
                "巳申": "巳申合水",
                "午未": "午未合土"
            };

            const combination = [zhi1, zhi2].sort().join("");
            if (liuHe[combination]) {
                return { type: "六合", relation: liuHe[combination], effect: "有和谐" };
            }

            return null;
        },

        // 综合关系分析
        synthesizeRelations: function(relation) {
            const positiveCount = relation.tianGanRelations.filter(r =>
                r.relation.effect && (r.relation.effect.includes("助") || r.relation.effect.includes("和谐"))
            ).length + relation.diZhiRelations.filter(r =>
                r.relation.effect && (r.relation.effect.includes("助") || r.relation.effect.includes("和谐"))
            ).length;

            const negativeCount = relation.tianGanRelations.filter(r =>
                r.relation.effect && r.relation.effect.includes("挑战")
            ).length + relation.diZhiRelations.filter(r =>
                r.relation.effect && r.relation.effect.includes("挑战")
            ).length;

            if (positiveCount > negativeCount) {
                return "整体关系和谐，有贵人相助";
            } else if (negativeCount > positiveCount) {
                return "整体关系有挑战，需要谨慎应对";
            } else {
                return "整体关系平和，机遇与挑战并存";
            }
        },

        // 评估影响力
        evaluateInfluence: function(relation) {
            const totalRelations = relation.tianGanRelations.length + relation.diZhiRelations.length;

            if (totalRelations >= 4) {
                return "流年对命局影响很大，需要重点关注";
            } else if (totalRelations >= 2) {
                return "流年对命局有一定影响，需要适当关注";
            } else {
                return "流年对命局影响较小，正常发展即可";
            }
        },

        // 分析流年月度
        analyzeLiuNianMonthly: function(year, baziInfo) {
            const monthlyAnalysis = {};
            const months = [
                "正月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"
            ];

            // 简化版本，实际需要计算每月的流月干支
            months.forEach((month, index) => {
                monthlyAnalysis[month] = {
                    monthIndex: index + 1,
                    generalTrend: this.getMonthTrend(index + 1, year),
                    keyPoints: this.getMonthKeyPoints(index + 1, year, baziInfo)
                };
            });

            return monthlyAnalysis;
        },

        // 获取月度趋势
        getMonthTrend: function(month, year) {
            const trends = [
                "新月新气象，适合开始新计划",
                "春暖花开，运势逐渐上升",
                "春季生机勃勃，事业有起色",
                "夏初热情，工作动力十足",
                "盛夏火热，需要注意节制",
                "夏末稳定，适合总结规划",
                "秋初收获，努力有回报",
                "中秋丰盛，事业财运两旺",
                "深秋沉稳，适合深度思考",
                "初冬收藏，积蓄力量",
                "寒冬温暖，家庭感情重要",
                "年终总结，为明年做准备"
            ];

            return trends[month - 1] || "运势平稳";
        },

        // 获取月度要点
        getMonthKeyPoints: function(month, year, baziInfo) {
            const keyPoints = [];

            // 根据季节和月份特点给出建议
            if (month >= 3 && month <= 5) {
                keyPoints.push("春季生发，适合开展新项目");
            } else if (month >= 6 && month <= 8) {
                keyPoints.push("夏季炎热，注意身体健康");
            } else if (month >= 9 && month <= 11) {
                keyPoints.push("秋季收获，努力会有回报");
            } else {
                keyPoints.push("冬季收藏，适合学习提升");
            }

            return keyPoints;
        },

        // 生成综合预测
        generateOverallPrediction: function(result) {
            const prediction = {
                overallLevel: "中等",
                careerFortune: "中等",
                wealthFortune: "中等",
                relationshipFortune: "中等",
                healthFortune: "中等",
                keyPoints: [],
                warnings: [],
                opportunities: []
            };

            // 基于天干分析
            if (result.tianGanAnalysis.interactionWithMingJu) {
                const interaction = result.tianGanAnalysis.interactionWithMingJu;
                if (interaction.includes("助") || interaction.includes("合")) {
                    prediction.overallLevel = "上等";
                    prediction.opportunities.push("有天干助益，把握机遇");
                } else if (interaction.includes("克")) {
                    prediction.overallLevel = "中下等";
                    prediction.warnings.push("有天干挑战，需要谨慎");
                }
            }

            // 基于地支分析
            if (result.diZhiAnalysis.interactionWithMingJu) {
                const interaction = result.diZhiAnalysis.interactionWithMingJu;
                if (interaction.includes("助") || interaction.includes("合")) {
                    prediction.opportunities.push("有地支助益，事业顺利");
                } else if (interaction.includes("冲")) {
                    prediction.warnings.push("有地支冲动，注意稳定");
                }
            }

            // 基于关系分析
            if (result.relationAnalysis.overallRelation.includes("和谐")) {
                prediction.keyPoints.push("流年与命局关系和谐");
            } else if (result.relationAnalysis.overallRelation.includes("挑战")) {
                prediction.keyPoints.push("流年与命局有挑战，需要应对");
            }

            return prediction;
        },

        // 生成流年建议
        generateLiuNianSuggestions: function(result) {
            const suggestions = [];

            // 基于综合预测的建议
            const prediction = result.overallPrediction;

            if (prediction.overallLevel === "上等") {
                suggestions.push({
                    type: "把握机遇",
                    content: "今年运势较好，建议积极行动，把握机遇",
                    advice: "可以开展新项目，投资发展，但也要谨慎决策"
                });
            } else if (prediction.overallLevel === "中下等") {
                suggestions.push({
                    type: "保守发展",
                    content: "今年运势有挑战，建议保守发展",
                    advice: "不宜冒险投资，专注于现有工作，注意人际关系"
                });
            } else {
                suggestions.push({
                    type: "平稳发展",
                    content: "今年运势平稳，建议稳步发展",
                    advice: "保持现状，适度发展，关注身心健康"
                });
            }

            // 基于具体分析的建议
            if (prediction.opportunities.length > 0) {
                suggestions.push({
                    type: "发展机遇",
                    content: prediction.opportunities.join("；"),
                    advice: "建议重点关注这些机遇，及时把握"
                });
            }

            if (prediction.warnings.length > 0) {
                suggestions.push({
                    type: "注意事项",
                    content: prediction.warnings.join("；"),
                    advice: "建议提前做好防范，谨慎应对"
                });
            }

            // 通用建议
            suggestions.push({
                type: "生活建议",
                content: "保持积极心态，注重身心健康，努力工作学习",
                advice: "流年运势只是参考，关键还是个人的努力和选择"
            });

            return suggestions;
        }
    },

    // 妻财分析系统
    qiCaiAnalysisSystem: {
        // 妻宫分析
        wifePalaceAnalysis: function(baziInfo) {
            const analysis = {
                wifePalace: {},
                wifeCharacteristics: {},
                marriageTiming: {},
                marriageSuggestions: []
            };

            // 获取妻宫（日支）
            const wifePalace = baziInfo.bazi.day.branch;
            analysis.wifePalace = {
                branch: wifePalace,
                element: this.getBranchElement(wifePalace),
                characteristics: this.getBranchCharacteristics(wifePalace)
            };

            // 分析配偶特征
            analysis.wifeCharacteristics = this.analyzeWifeCharacteristics(baziInfo);

            // 分析婚姻时机
            analysis.marriageTiming = this.analyzeMarriageTiming(baziInfo);

            // 生成婚姻建议
            analysis.marriageSuggestions = this.generateMarriageSuggestions(baziInfo);

            return analysis;
        },

        // 财宫分析
        wealthPalaceAnalysis: function(baziInfo) {
            const analysis = {
                wealthStructure: {},
                wealthPotential: {},
                wealthTiming: {},
                wealthSuggestions: []
            };

            // 分析财富结构
            analysis.wealthStructure = this.analyzeWealthStructure(baziInfo);

            // 分析财富潜力
            analysis.wealthPotential = this.analyzeWealthPotential(baziInfo);

            // 分析财富时机
            analysis.wealthTiming = this.analyzeWealthTiming(baziInfo);

            // 生成财富建议
            analysis.wealthSuggestions = this.generateWealthSuggestions(baziInfo);

            return analysis;
        },

        // 综合妻财分析
        comprehensiveQiCaiAnalysis: function(baziInfo) {
            const result = {
                wifeAnalysis: this.wifePalaceAnalysis(baziInfo),
                wealthAnalysis: this.wealthPalaceAnalysis(baziInfo),
                overallEvaluation: {},
                lifeAdvice: []
            };

            // 综合评价
            result.overallEvaluation = this.generateOverallEvaluation(result);

            // 生成人生建议
            result.lifeAdvice = this.generateLifeAdvice(result);

            return result;
        },

        // 获取地支五行
        getBranchElement: function(branch) {
            const elementMap = {
                "子": "水", "丑": "土", "寅": "木", "卯": "木",
                "辰": "土", "巳": "火", "午": "火", "未": "土",
                "申": "金", "酉": "金", "戌": "土", "亥": "水"
            };
            return elementMap[branch] || "";
        },

        // 获取地支特征
        getBranchCharacteristics: function(branch) {
            const characteristicsMap = {
                "子": ["聪明", "灵活", "善于变化"],
                "丑": ["稳重", "踏实", "有耐心"],
                "寅": ["威猛", "独立", "有野心"],
                "卯": ["温和", "美丽", "有艺术感"],
                "辰": ["神秘", "有权威", "善变化"],
                "巳": ["热情", "文明", "有礼貌"],
                "午": ["热烈", "有礼貌", "善变化"],
                "未": ["温和", "美丽", "有耐心"],
                "申": ["聪明", "灵活", "有技巧"],
                "酉": ["美丽", "优雅", "有品味"],
                "戌": ["忠诚", "稳重", "有责任心"],
                "亥": ["智慧", "包容", "善良"]
            };
            return characteristicsMap[branch] || [];
        },

        // 分析配偶特征
        analyzeWifeCharacteristics: function(baziInfo) {
            const characteristics = {
                appearance: [],
                personality: [],
                talents: [],
                career: []
            };

            // 基于妻宫分析配偶特征
            const wifePalace = baziInfo.bazi.day.branch;
            const palaceCharacteristics = this.getBranchCharacteristics(wifePalace);

            characteristics.personality.push(...palaceCharacteristics);

            // 基于财星分析配偶特征（男命）
            if (baziInfo.birthInfo.gender === "男") {
                const caixing = this.getCaiXingAnalysis(baziInfo);
                if (caixing.zhengCai) {
                    characteristics.personality.push("稳重", "贤惠");
                    characteristics.talents.push("持家", "理财");
                }
                if (caixing.pianCai) {
                    characteristics.personality.push("活泼", "善于交际");
                    characteristics.talents.push("艺术", "社交");
                }
            }

            // 基于官星分析配偶特征（女命）
            if (baziInfo.birthInfo.gender === "女") {
                const guanxing = this.getGuanXingAnalysis(baziInfo);
                if (guanxing.zhengGuan) {
                    characteristics.personality.push("稳重", "有责任心");
                    characteristics.talents.push("管理", "领导");
                }
                if (guanxing.qiSha) {
                    characteristics.personality.push("有威严", "敢于挑战");
                    characteristics.talents.push("创业", "改革");
                }
            }

            return characteristics;
        },

        // 分析婚姻时机
        analyzeMarriageTiming: function(baziInfo) {
            const timing = {
                earlyMarriage: false,
                lateMarriage: false,
                bestAge: "",
                challengingYears: [],
                favorableYears: []
            };

            // 基于大运分析婚姻时机
            const dayun = baziInfo.dayun;
            if (dayun && dayun.length > 0) {
                dayun.forEach((period, index) => {
                    if (this.isMarriageFavorablePeriod(period, baziInfo)) {
                        timing.favorableYears.push(period.ageRange);
                    }
                    if (this.isMarriageChallengingPeriod(period, baziInfo)) {
                        timing.challengingYears.push(period.ageRange);
                    }
                });
            }

            // 基于命局特点判断早婚或晚婚
            if (this.hasEarlyMarriageIndicators(baziInfo)) {
                timing.earlyMarriage = true;
                timing.bestAge = "25岁前";
            } else if (this.hasLateMarriageIndicators(baziInfo)) {
                timing.lateMarriage = true;
                timing.bestAge = "30岁后";
            } else {
                timing.bestAge = "25-30岁";
            }

            return timing;
        },

        // 分析财富结构
        analyzeWealthStructure: function(baziInfo) {
            const structure = {
                zhengCaiCount: 0,
                pianCaiCount: 0,
                caiXingStrength: "中等",
                caiXingPosition: [],
                wealthElement: ""
            };

            // 分析正财偏财数量
            const shishenDistribution = baziInfo.analysis.shishenDistribution;
            structure.zhengCaiCount = shishenDistribution.zhengCai || 0;
            structure.pianCaiCount = shishenDistribution.pianCai || 0;

            // 分析财星强弱
            if (structure.zhengCaiCount + structure.pianCaiCount >= 3) {
                structure.caiXingStrength = "强";
            } else if (structure.zhengCaiCount + structure.pianCaiCount >= 2) {
                structure.caiXingStrength = "中等";
            } else {
                structure.caiXingStrength = "弱";
            }

            // 分析财星位置
            const bazi = baziInfo.bazi;
            if (shishenDistribution.zhengCai > 0) {
                structure.caiXingPosition.push("正财");
            }
            if (shishenDistribution.pianCai > 0) {
                structure.caiXingPosition.push("偏财");
            }

            // 确定财富五行
            structure.wealthElement = this.getWealthElement(baziInfo);

            return structure;
        },

        // 分析财富潜力
        analyzeWealthPotential: function(baziInfo) {
            const potential = {
                level: "中等",
                source: [],
                timing: [],
                riskLevel: "中等",
                suggestions: []
            };

            // 基于财星强弱判断财富潜力
            const structure = this.analyzeWealthStructure(baziInfo);

            if (structure.caiXingStrength === "强") {
                potential.level = "高";
                potential.source.push("财星有力，财富潜力大");
            } else if (structure.caiXingStrength === "弱") {
                potential.level = "一般";
                potential.source.push("财星偏弱，需要努力");
            }

            // 基于财星位置分析财富来源
            if (structure.caiXingPosition.includes("正财")) {
                potential.source.push("稳定工作收入");
            }
            if (structure.caiXingPosition.includes("偏财")) {
                potential.source.push("投资或副业收入");
            }

            // 基于大运分析财富时机
            const dayun = baziInfo.dayun;
            if (dayun) {
                dayun.forEach((period, index) => {
                    if (this.isWealthFavorablePeriod(period, baziInfo)) {
                        potential.timing.push(period.ageRange);
                    }
                });
            }

            // 评估风险等级
            potential.riskLevel = this.assessWealthRisk(baziInfo);

            return potential;
        },

        // 生成婚姻建议
        generateMarriageSuggestions: function(baziInfo) {
            const suggestions = [];

            const timing = this.analyzeMarriageTiming(baziInfo);
            const characteristics = this.analyzeWifeCharacteristics(baziInfo);

            // 基于时机的建议
            if (timing.earlyMarriage) {
                suggestions.push("适合早婚，建议在" + timing.bestAge + "结婚");
            } else if (timing.lateMarriage) {
                suggestions.push("适合晚婚，建议在" + timing.bestAge + "结婚");
            } else {
                suggestions.push("最佳结婚年龄：" + timing.bestAge);
            }

            // 基于配偶特征的建议
            if (characteristics.personality.length > 0) {
                suggestions.push("理想配偶特征：" + characteristics.personality.join("、"));
            }

            // 通用建议
            suggestions.push("婚姻需要互相理解和包容");
            suggestions.push("建议选择性格互补的伴侣");

            return suggestions;
        },

        // 生成财富建议
        generateWealthSuggestions: function(baziInfo) {
            const suggestions = [];

            const structure = this.analyzeWealthStructure(baziInfo);
            const potential = this.analyzeWealthPotential(baziInfo);

            // 基于财富结构的建议
            if (structure.zhengCaiCount > structure.pianCaiCount) {
                suggestions.push("适合稳定工作，以正财为主");
            } else if (structure.pianCaiCount > structure.zhengCaiCount) {
                suggestions.push("可以尝试投资或副业，偏财机会较多");
            } else {
                suggestions.push("正财偏财均衡，可以双重发展");
            }

            // 基于财富潜力的建议
            if (potential.level === "高") {
                suggestions.push("财富潜力大，建议积极发展");
            } else if (potential.level === "一般") {
                suggestions.push("财富潜力一般，需要努力积累");
            }

            // 基于风险的建议
            if (potential.riskLevel === "高") {
                suggestions.push("投资风险较高，需要谨慎");
            } else if (potential.riskLevel === "低") {
                suggestions.push("投资风险较低，可以适当进取");
            }

            return suggestions;
        },

        // 生成综合评价
        generateOverallEvaluation: function(result) {
            const evaluation = {
                marriageFortune: "中等",
                wealthFortune: "中等",
                overallLuck: "中等",
                keyPoints: [],
                advice: []
            };

            // 评价婚姻运势
            if (result.wifeAnalysis.marriageTiming.earlyMarriage) {
                evaluation.marriageFortune = "较好";
                evaluation.keyPoints.push("婚姻时机较早");
            } else if (result.wifeAnalysis.marriageTiming.lateMarriage) {
                evaluation.marriageFortune = "较晚";
                evaluation.keyPoints.push("婚姻时机较晚");
            }

            // 评价财富运势
            if (result.wealthAnalysis.wealthPotential.level === "高") {
                evaluation.wealthFortune = "旺盛";
                evaluation.keyPoints.push("财富潜力旺盛");
            } else if (result.wealthAnalysis.wealthPotential.level === "一般") {
                evaluation.wealthFortune = "平稳";
                evaluation.keyPoints.push("财富运势平稳");
            }

            // 综合评价
            if (evaluation.marriageFortune === "较好" && evaluation.wealthFortune === "旺盛") {
                evaluation.overallLuck = "上等";
                evaluation.advice.push("婚姻财运双丰收，人生美满");
            } else if (evaluation.marriageFortune === "较晚" && evaluation.wealthFortune === "平稳") {
                evaluation.overallLuck = "中等";
                evaluation.advice.push("需要努力争取，生活会逐渐改善");
            }

            return evaluation;
        },

        // 生成人生建议
        generateLifeAdvice: function(result) {
            const advice = [];

            // 基于评价的建议
            const evaluation = result.overallEvaluation;

            if (evaluation.overallLuck === "上等") {
                advice.push("把握好运，积极发展，但也要保持谦虚");
            } else if (evaluation.overallLuck === "中等") {
                advice.push("需要持续努力，保持耐心，相信会越来越好");
            }

            // 基于具体分析的建议
            if (result.wealthAnalysis.wealthStructure.caiXingStrength === "强") {
                advice.push("财富方面可以积极发展，但要注意风险管理");
            } else {
                advice.push("财富方面需要稳扎稳打，逐步积累");
            }

            // 通用建议
            advice.push("家庭和事业并重，保持平衡发展");
            advice.push("持续学习提升，增强个人实力");
            advice.push("保持积极心态，相信未来会更美好");

            return advice;
        },

        // 辅助方法
        getCaiXingAnalysis: function(baziInfo) {
            // 简化版本，实际需要根据日干和其他干支关系确定财星
            const shishenDistribution = baziInfo.analysis.shishenDistribution;
            return {
                zhengCai: shishenDistribution.zhengCai > 0,
                pianCai: shishenDistribution.pianCai > 0
            };
        },

        getGuanXingAnalysis: function(baziInfo) {
            // 简化版本，实际需要根据日干和其他干支关系确定官星
            const shishenDistribution = baziInfo.analysis.shishenDistribution;
            return {
                zhengGuan: shishenDistribution.shiGuan > 0,
                qiSha: shishenDistribution.shaSha > 0
            };
        },

        isMarriageFavorablePeriod: function(period, baziInfo) {
            // 简化版本，实际需要根据大运与命局的关系判断
            return Math.random() > 0.5;
        },

        isMarriageChallengingPeriod: function(period, baziInfo) {
            // 简化版本，实际需要根据大运与命局的关系判断
            return Math.random() > 0.7;
        },

        hasEarlyMarriageIndicators: function(baziInfo) {
            // 简化版本，实际需要根据命局特点判断
            return false;
        },

        hasLateMarriageIndicators: function(baziInfo) {
            // 简化版本，实际需要根据命局特点判断
            return false;
        },

        getWealthElement: function(baziInfo) {
            // 简化版本，实际需要根据日干确定财星五行
            return "金";
        },

        isWealthFavorablePeriod: function(period, baziInfo) {
            // 简化版本，实际需要根据大运与命局的关系判断
            return Math.random() > 0.5;
        },

        assessWealthRisk: function(baziInfo) {
            // 简化版本，实际需要根据命局特点评估
            return "中等";
        }
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stage04PracticalSystem;
}