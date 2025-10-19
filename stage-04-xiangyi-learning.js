/**
 * 第四阶段：实战技法 - 《探索门八字取象秘法》学习内容
 * 王庆老师取象技法经典理论的现代化实现
 * 专用于八字网页开发的高级取象分析系统
 */

// ==================== 《探索门八字取象秘法》核心理论 ====================

const tansuomenXiangyi = {
  // 作者信息与理论概述
  bookInfo: {
    title: "《探索门八字取象秘法》",
    author: "王庆",
    publishYear: "2005",
    publisher: "台湾武陵出版社",
    pages: 450,
    isbn: "978-957-35-1045-7",
    difficulty: "高级",
    importance: "★★★★☆",
    description: "八字取象技法的权威著作，王庆老师数十年研究心得",
    corePrinciple: "取象者，以八字之五行十神宫位，推演物象事象形象之法也"
  },

  // ==================== 第一章：取象理论基础 ====================

  chapter1: {
    title: "第一章：取象理论基础",
    coreConcepts: {
      // 取象定义
      xiangDefinition: {
        title: "什么是取象",
        definition: "取象是通过八字中的五行、十神、宫位等元素，推演出具体的物象、事象、形象",
        formula: "五行 + 十神 + 宫位 = 具体象意",
        example: "甲木（五行）+ 正官（十神）+ 年柱（宫位）= 祖辈林业管理工作或事业发展如大树"
      },

      // 取象原则
      xiangPrinciples: {
        title: "取象基本原则",
        principles: [
          {
            name: "象不离理",
            description: "取象必须符合五行生克原理",
            explanation: "象意必须符合五行生克制化的基本规律"
          },
          {
            name: "象不偏颇",
            description: "要综合多方面因素，避免片面",
            explanation: "不能只看一个方面，要全面分析各种因素"
          },
          {
            name: "象不牵强",
            description: "象意要自然合理，不能强行附会",
            explanation: "象意推导要自然，不能生搬硬套"
          },
          {
            name: "象不泛滥",
            description: "抓住主要象意，不要面面俱到",
            explanation: "要抓住重点，不要贪多求全"
          }
        ]
      },

      // 取象层次
      xiangLevels: {
        title: "取象层次结构",
        levels: [
          {
            level: "第一层：基础象意",
            description: "五行本象和十神本象",
            examples: [
              "木主生长，火主光明",
              "正官主贵，正财主富"
            ]
          },
          {
            level: "第二层：组合象意",
            description: "五行+十神，十神+宫位的组合",
            examples: [
              "木+正官=文职贵格",
              "正官+年柱=祖辈贵显"
            ]
          },
          {
            level: "第三层：综合象意",
            description: "多因素综合分析",
            examples: [
              "结合大运流年变化",
              "考虑时代背景因素"
            ]
          }
        ]
      }
    },

    // 五行基础象意详解
    wuxingXiangyi: {
      // 木类象意体系
      muXiangyi: {
        title: "木类象意体系",
        categories: {
          植物: {
            name: "植物类",
            items: [
              { name: "大树", meaning: "栋梁之才、地位稳固、发展缓慢但持久" },
              { name: "花草", meaning: "才艺表演、装饰美化、表面风光" },
              { name: "竹子", meaning: "正直向上、节节高升、虚心好学" },
              { name: "果树", meaning: "收获成果、后期得利、需要培养期" }
            ]
          },
          器物: {
            name: "器物类",
            items: [
              { name: "木材", meaning: "建筑材料、家具制造、文教用品" },
              { name: "纸张", meaning: "文书工作、文化传媒、知识传播" },
              { name: "织物", meaning: "服装行业、纺织制造、装饰材料" }
            ]
          },
          职业: {
            name: "职业类",
            items: [
              { name: "农业", meaning: "种植、林业、园艺、农产品" },
              { name: "文教", meaning: "教师、作家、编辑、研究员" },
              { name: "制造", meaning: "家具、建材、文具、服装" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "身材", meaning: "高瘦挺拔、身形修长" },
              { name: "性格", meaning: "正直向上、有进取心、不轻易放弃" },
              { name: "才能", meaning: "管理能力、教育才能、艺术天赋" }
            ]
          }
        }
      },

      // 火类象意体系
      huoXiangyi: {
        title: "火类象意体系",
        categories: {
          自然: {
            name: "自然类",
            items: [
              { name: "太阳", meaning: "权威地位、光明正大、受人尊敬" },
              { name: "火焰", meaning: "热情奔放、急躁易怒、爆发力强" },
              { name: "灯光", meaning: "智慧启迪、引导他人、温暖他人" },
              { name: "炉火", meaning: "锻炼能力、冶炼技术、高温作业" }
            ]
          },
          器物: {
            name: "器物类",
            items: [
              { name: "电器", meaning: "电子设备、照明器具、能源设备" },
              { name: "燃料", meaning: "石油、煤炭、天然气、新能源" },
              { name: "光学", meaning: "眼镜、相机、望远镜、显微镜" }
            ]
          },
          职业: {
            name: "职业类",
            items: [
              { name: "能源", meaning: "电力、石油、新能源、节能技术" },
              { name: "电子", meaning: "电脑、手机、通信、互联网" },
              { name: "照明", meaning: "灯具、电力工程、光学仪器" },
              { name: "娱乐", meaning: "影视、演艺、餐饮、旅游业" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "面色红润、眼神明亮、举止热情" },
              { name: "性格", meaning: "热情开朗、急躁冲动、善于表达" },
              { name: "才能", meaning: "领导才能、表演天赋、技术专长" }
            ]
          }
        }
      },

      // 土类象意体系
      tuXiangyi: {
        title: "土类象意体系",
        categories: {
          自然: {
            name: "自然类",
            items: [
              { name: "土地", meaning: "根基深厚、承载万物、稳定可靠" },
              { name: "山峦", meaning: "厚重稳重、根基稳固、地位崇高" },
              { name: "平原", meaning: "宽广包容、发展空间大、基础扎实" },
              { name: "泥土", meaning: "孕育万物、包容性、滋养性" }
            ]
          },
          器物: {
            name: "器物类",
            items: [
              { name: "建筑", meaning: "房屋、厂房、基础设施" },
              { name: "陶瓷", meaning: "艺术品、容器、装饰品" },
              { name: "农具", meaning: "生产工具、基础设备" }
            ]
          },
          职业: {
            name: "职业类",
            items: [
              { name: "建筑", meaning: "建筑师、工程师、施工管理" },
              { name: "农业", meaning: "种植、养殖、农产品加工" },
              { name: "地产", meaning: "房地产、土地开发" },
              { name: "制造", meaning: "基础工业、原材料加工" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "敦厚稳重、体型偏胖" },
              { name: "性格", meaning: "稳重踏实、包容性强、重情义" },
              { name: "才能", meaning: "组织能力、管理能力、执行能力" }
            ]
          }
        }
      },

      // 金类象意体系
      jinXiangyi: {
        title: "金类象意体系",
        categories: {
          自然: {
            name: "自然类",
            items: [
              { name: "金属", meaning: "坚硬刚毅、有原则性、有决断力" },
              { name: "矿石", meaning: "潜在价值、需要挖掘、珍贵稀有" },
              { name: "冰霜", meaning: "冷峻严肃、刚直不阿、有威严" }
            ]
          },
          器物: {
            name: "器物类",
            items: [
              { name: "刀剑", meaning: "执法工具、权力象征、保护作用" },
              { name: "钟表", meaning: "时间观念、精确性、规律性" },
              { name: "首饰", meaning: "贵重物品、装饰品、身份象征" }
            ]
          },
          职业: {
            name: "职业类",
            items: [
              { name: "金融", meaning: "银行、证券、投资、保险" },
              { name: "法律", meaning: "律师、法官、执法部门" },
              { name: "军警", meaning: "军人、警察、保安" },
              { name: "机械", meaning: "制造业、工程、技术" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "轮廓分明、皮肤白皙、举止有力" },
              { name: "性格", meaning: "刚毅果断、有原则、重视规则" },
              { name: "才能", meaning: "决断能力、执行能力、技术专长" }
            ]
          }
        }
      },

      // 水类象意体系
      shuiXiangyi: {
        title: "水类象意体系",
        categories: {
          自然: {
            name: "自然类",
            items: [
              { name: "江河", meaning: "流动性、适应性、传播性" },
              { name: "海洋", meaning: "包容性强、变化莫测、潜力巨大" },
              { name: "雨水", meaning: "滋润万物、情感丰富、变化无常" },
              { name: "冰雪", meaning: "冷静理性、思考深入、内敛含蓄" }
            ]
          },
          器物: {
            name: "器物类",
            items: [
              { name: "液体", meaning: "饮料、药品、化工产品" },
              { name: "容器", meaning: "杯子、瓶子、水箱" },
              { name: "管道", meaning: "运输通道、连接作用" }
            ]
          },
          职业: {
            name: "职业类",
            items: [
              { name: "贸易", meaning: "商业、外贸、物流" },
              { name: "运输", meaning: "交通、物流、航运" },
              { name: "服务业", meaning: "旅游、餐饮、娱乐" },
              { name: "智慧型", meaning: "研究、咨询、教育" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "圆润柔和、眼神灵动、举止灵活" },
              { name: "性格", meaning: "聪明机智、适应力强、情感丰富" },
              { name: "才能", meaning: "沟通能力、学习能力、创新能力" }
            ]
          }
        }
      }
    },

    // 十神基础象意详解
    shishenXiangyi: {
      // 正官象意体系
      zhengGuanXiangyi: {
        title: "正官象意体系",
        categories: {
          物品: {
            name: "物品象意",
            items: [
              { name: "文件", meaning: "合同、证书、公文、法律文书" },
              { name: "制服", meaning: "警服、军装、工作服、职业装" },
              { name: "办公用品", meaning: "办公桌、文件柜、印章、公章" },
              { name: "交通工具", meaning: "公务车、班车、指挥车" }
            ]
          },
          职业: {
            name: "职业象意",
            items: [
              { name: "公务员", meaning: "政府官员、国企领导、事业单位" },
              { name: "管理层", meaning: "部门经理、企业高管、项目负责人" },
              { name: "专业人士", meaning: "律师、医生、教师、会计师" },
              { name: "执法人员", meaning: "警察、法官、检察官、纪检" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "端庄稳重、衣着整齐、举止规范" },
              { name: "性格", meaning: "正直守法、有责任心、重视规则" },
              { name: "才能", meaning: "管理能力、组织能力、协调能力" },
              { name: "缺点", meaning: "过于保守、缺乏灵活性、循规蹈矩" }
            ]
          },
          生活: {
            name: "生活象意",
            items: [
              { name: "事业", meaning: "稳定发展、按部就班、稳步提升" },
              { name: "婚姻", meaning: "配偶稳重可靠、家庭责任感强" },
              { name: "健康", meaning: "需要注意压力相关疾病" },
              { name: "财运", meaning: "正当收入、稳定增长、不易暴富" }
            ]
          }
        }
      },

      // 正财象意体系
      zhengCaiXiangyi: {
        title: "正财象意体系",
        categories: {
          物品: {
            name: "物品象意",
            items: [
              { name: "房产", meaning: "住宅、商铺、办公楼、厂房" },
              { name: "存款", meaning: "银行存款、理财产品、保险单" },
              { name: "工具", meaning: "生产设备、办公设备、专用工具" },
              { name: "合同", meaning: "买卖合同、租赁合同、合作协议" }
            ]
          },
          职业: {
            name: "职业象意",
            items: [
              { name: "金融", meaning: "银行、保险、证券、投资" },
              { name: "实业", meaning: "制造业、贸易、零售、服务" },
              { name: "管理", meaning: "财务管理、资产管理、项目管理" },
              { name: "专业", meaning: "会计师、评估师、理财顾问" }
            ]
          },
          特征: {
            name: "人物特征",
            items: [
              { name: "外表", meaning: "朴实稳重、衣着得体、举止稳重" },
              { name: "性格", meaning: "诚实守信、勤奋踏实、重视现实" },
              { name: "才能", meaning: "经营能力、管理能力、理财能力" },
              { name: "缺点", meaning: "过于保守、缺乏冒险精神、变化慢" }
            ]
          },
          生活: {
            name: "生活象意",
            items: [
              { name: "事业", meaning: "稳步发展、踏实经营、积少成多" },
              { name: "婚姻", meaning: "配偶贤惠持家、经济观念强" },
              { name: "健康", meaning: "需要注意脾胃、消化系统" },
              { name: "财运", meaning: "正当收入、勤劳致富、财源稳定" }
            ]
          }
        }
      },

      // 其他十神象意（简要）
      otherShishen: {
        "七杀": "威严、压力、挑战、权力、军警",
        "正印": "学识、母亲、贵人、文书、教育",
        "偏印": "直觉、神秘、独特、非传统、专业",
        "比肩": "朋友、同事、兄弟姐妹、竞争、合作",
        "劫财": "花费、争夺、朋友、机遇、社交",
        "食神": "享受、艺术、子女、服务、温和",
        "伤官": "才华、创新、表达、自由、聪明",
        "偏财": "横财、投资、父亲、机遇、商业"
      }
    }
  },

  },

  // ==================== 第二章：十神取象技法 ====================

  chapter2: {
    title: "第二章：十神取象技法详解",
    shishenXiangyiDetails: {
      // 比肩象意深度解析
      biJian: {
        title: "比肩象意深度解析",
        essence: "同类相助、平等关系、竞争关系、独立自主",
        categories: {
          物品: {
            name: "物品象意",
            items: [
              { name: "办公用品", meaning: "电脑设备、信息处理、工作工具" },
              { name: "生活用品", meaning: "个人形象、社会地位、生活基础" },
              { name: "交通工具", meaning: "出行便利、移动能力、交通网络" },
              { name: "投资理财", meaning: "股票基金、房产投资、合伙经营" }
            ]
          },
          职业: {
            name: "职业象意",
            items: [
              { name: "适合职业", meaning: "合伙经营、团队协作、独立职业、技术工种" },
              { name: "不适合职业", meaning: "需要绝对权威、需要完全服从、需要大量协调" }
            ]
          },
          特征: {
            name: "人物特征象意",
            items: [
              { name: "外表特征", meaning: "中等身材、面容方正、举止稳重" },
              { name: "性格特征", meaning: "正直独立、平等稳重、不急不躁" },
              { name: "才能特长", meaning: "协调能力、平衡能力、执行能力、学习能力" }
            ]
          }
        }
      },

      // 劫财象意深度解析
      jieCai: {
        title: "劫财象意深度解析",
        essence: "争夺资源、社交广泛、慷慨大方、风险机遇",
        categories: {
          财富: {
            name: "财富象意",
            items: [
              { name: "收入来源", meaning: "投资收益、商业机会、偶然所得、资产变现" },
              { name: "支出项目", meaning: "社交应酬、朋友借贷、投资损失、慈善捐赠" },
              { name: "理财特点", meaning: "来去匆匆、风险较高、需要谨慎" }
            ]
          },
          社交: {
            name: "社交象意",
            items: [
              { name: "人脉网络", meaning: "朋友众多、人脉广泛、社交活跃、口才良好" },
              { name: "社交活动", meaning: "聚会派对、商务应酬、娱乐休闲、公益活动" }
            ]
          },
          职业: {
            name: "职业象意",
            items: [
              { name: "适合职业", meaning: "销售业务、公关媒体、餐饮娱乐、创业投资" },
              { name: "工作特点", meaning: "需要社交、变化较大、收入浮动、压力较大" }
            ]
          }
        }
      },

      // 食神象意深度解析
      shiShen: {
        title: "食神象意深度解析",
        essence: "享受生活、温和包容、艺术天赋、福气深厚",
        categories: {
          食物: {
            name: "食物象意",
            items: [
              { name: "美食类", meaning: "特色美食、酒水饮料、零食甜点、健康食品" },
              { name: "生活用品", meaning: "装饰品、文化用品、休闲用品、居家用品" }
            ]
          },
          艺术: {
            name: "艺术象意",
            items: [
              { name: "艺术类型", meaning: "文学创作、音乐艺术、美术创作、表演艺术" },
              { name: "艺术特征", meaning: "温和优美、享受性、大众化、生活化" }
            ]
          },
          特征: {
            name: "人物特征象意",
            items: [
              { name: "性格特征", meaning: "温和包容、乐观、稳重" },
              { name: "才能特长", meaning: "艺术天赋、烹饪技能、文学修养、生活品质" }
            ]
          }
        }
      },

      // 伤官象意深度解析
      shangGuan: {
        title: "伤官象意深度解析",
        essence: "才华横溢、表达能力强、反叛精神、个性张扬",
        categories: {
          创新: {
            name: "创新象意",
            items: [
              { name: "创新产品", meaning: "科技产品、创意设计、发明创造、艺术创新" },
              { name: "创新特征", meaning: "独特性、前瞻性、变革性、风险性" }
            ]
          },
          表达: {
            name: "表达象意",
            items: [
              { name: "表达方式", meaning: "语言表达、文字表达、艺术表达、技术表达" },
              { name: "表达特征", meaning: "流畅性、独创性、感染力、叛逆性" }
            ]
          },
          职业: {
            name: "职业象意",
            items: [
              { name: "适合职业", meaning: "创意设计、媒体传播、技术研发、自由职业" },
              { name: "工作特点", meaning: "需要创意、变化多端、自主性强、表达机会" }
            ]
          }
        }
      },

      // 正财象意深度解析
      zhengCai: {
        title: "正财象意深度解析",
        essence: "正当收入、勤劳致富、稳定可靠、积累财富",
        categories: {
          资产: {
            name: "资产象意",
            items: [
              { name: "不动产", meaning: "住宅、商铺、土地、厂房" },
              { name: "动产", meaning: "汽车、设备、家电、工具" },
              { name: "金融资产", meaning: "存款、理财、基金、债券" }
            ]
          },
          收入: {
            name: "收入象意",
            items: [
              { name: "工资收入", meaning: "基本工资、绩效奖金、津贴补助、提成收入" },
              { name: "经营收入", meaning: "营业收入、租金收入、利息收入、股息收入" }
            ]
          }
        }
      },

      // 偏财象意深度解析
      pianCai: {
        title: "偏财象意深度解析",
        essence: "意外之财、投资收益、商业头脑、慷慨大方",
        categories: {
          投资: {
            name: "投资象意",
            items: [
              { name: "股票投资", meaning: "A股、B股、港股、美股" },
              { name: "基金投资", meaning: "股票基金、债券基金、混合基金、指数基金" },
              { name: "其他投资", meaning: "期货、外汇、贵金属、数字货币" }
            ]
          },
          商业: {
            name: "商业象意",
            items: [
              { name: "商业活动", meaning: "贸易、投资、创业、收购" },
              { name: "商业特征", meaning: "风险性、机遇性、变化性、专业性" }
            ]
          }
        }
      },

      // 正官象意深度解析
      zhengGuan: {
        title: "正官象意深度解析",
        essence: "权威地位、责任义务、规则秩序、公正正义",
        categories: {
          权力: {
            name: "权力象意",
            items: [
              { name: "政治权力", meaning: "政府官员、立法机构、司法机关、监管机构" },
              { name: "企业管理", meaning: "企业高管、部门经理、项目经理、专业顾问" },
              { name: "专业权威", meaning: "学术权威、技术权威、行业权威、社会权威" }
            ]
          },
          文书: {
            name: "文书象意",
            items: [
              { name: "法律文书", meaning: "合同协议、证书证件、公文公函、规章制度" },
              { name: "学历证书", meaning: "学位证书、职业证书、荣誉证书、专业认证" }
            ]
          }
        }
      },

      // 七杀象意深度解析
      qiSha: {
        title: "七杀象意深度解析",
        essence: "权力欲望、挑战精神、压力动力、变革创新",
        categories: {
          权力: {
            name: "权力象意",
            items: [
              { name: "军警权力", meaning: "军事系统、警察系统、情报系统、安全系统" },
              { name: "竞争权力", meaning: "体育竞技、商业竞争、技术竞争、权力斗争" }
            ]
          },
          成就: {
            name: "成就象意",
            items: [
              { name: "竞技成就", meaning: "体育冠军、竞技胜利、挑战成功、超越自我" },
              { name: "事业成就", meaning: "创业成功、技术突破、市场占领、领先地位" }
            ]
          }
        }
      },

      // 正印象意深度解析
      zhengYin: {
        title: "正印象意深度解析",
        essence: "学识文化、贵人相助、保护关爱、传统正统",
        categories: {
          知识: {
            name: "知识象意",
            items: [
              { name: "学术知识", meaning: "专业知识、理论知识、实践知识、传统文化" },
              { name: "文化素养", meaning: "文学艺术、哲学思辨、文化传承、知识传播" }
            ]
          },
          关系: {
            name: "关系象意",
            items: [
              { name: "人际关系", meaning: "贵人帮助、师长指导、朋友支持、家庭关爱" },
              { name: "社会关系", meaning: "社会地位、人脉网络、影响力、声誉地位" }
            ]
          }
        }
      },

      // 偏印象意深度解析
      pianYin: {
        title: "偏印象意深度解析",
        essence: "直觉敏锐、独特才能、独立思考、神秘色彩",
        categories: {
          技能: {
            name: "技能象意",
            items: [
              { name: "专业技能", meaning: "专业技能、特殊才能、独门技术、精深专业" },
              { name: "技能特征", meaning: "独特性、专业性、实用性、稀缺性" }
            ]
          },
          研究: {
            name: "研究象意",
            items: [
              { name: "研究工作", meaning: "学术研究、技术研发、市场调研、前沿探索" },
              { name: "研究特征", meaning: "深入性、专业性、创新性、实用性" }
            ]
          }
        }
      }
    },

    // 十神组合取象实例
    combinationExamples: [
      {
        title: "实例1：正官配印",
        bazi: "甲寅年、丙午月、戊戌日、癸亥时",
        analysis: {
          正官位置: "年柱",
          正印位置: "时柱",
          组合特征: "官印相生，贵格层次高",
          象意解读: "祖辈有官职，晚年有学识，适合公务员、教师、律师",
          整体格局: "早年有贵人，中晚年有成，上等格局"
        }
      },
      {
        title: "实例2：食神制杀",
        bazi: "乙卯年、丁巳月、己亥日、辛酉时",
        analysis: {
          食神位置: "月柱",
          七杀位置: "时柱",
          组合特征: "才华制化权力，智慧驾驭",
          象意解读: "中年后才华横溢，通过智慧化解压力，适合艺术、技术工作",
          整体格局: "早年一般，中晚年有成"
        }
      },
      {
        title: "实例3：财官印全",
        bazi: "戊申年、甲寅月、丁酉日、庚子时",
        analysis: {
          正财位置: "年柱",
          正官位置: "日柱",
          正印位置: "时柱",
          组合特征: "财富、地位、学识齐全",
          象意解读: "家境优越，事业顺利，晚年学识渊博，是上等格局",
          整体格局: "人生层次较高，富贵双全"
        }
      }
    ]
  },

  // ==================== 取象分析算法 ====================

  xiangAnalysis: {
    // 单元素取象分析
    singleElementAnalysis: function(element, position, dayMaster) {
      // 实现单元素取象分析逻辑
      return {
        element: element,
        position: position,
        xiangyi: this.getElementXiangyi(element, position),
        analysis: this.analyzeSingleElement(element, position, dayMaster)
      };
    },

    // 组合元素取象分析
    combinationAnalysis: function(bazi, targetPosition) {
      // 实现组合取象分析逻辑
      return {
        combination: this.extractCombination(bazi, targetPosition),
        xiangyi: this.getCombinationXiangyi(bazi, targetPosition),
        analysis: this.analyzeCombination(bazi, targetPosition)
      };
    },

    // 综合取象分析
    comprehensiveAnalysis: function(bazi) {
      // 实现综合取象分析逻辑
      return {
        overallXiangyi: this.getOverallXiangyi(bazi),
        careerXiangyi: this.getCareerXiangyi(bazi),
        marriageXiangyi: this.getMarriageXiangyi(bazi),
        healthXiangyi: this.getHealthXiangyi(bazi),
        wealthXiangyi: this.getWealthXiangyi(bazi)
      };
    }
  }
};

// ==================== 取象分析系统实现 ====================

class XiangyiAnalysisSystem {
  constructor() {
    this.wuxingXiangyi = tansuomenXiangyi.chapter1.wuxingXiangyi;
    this.shishenXiangyi = tansuomenXiangyi.chapter1.shishenXiangyi;
    this.analysisEngine = tansuomenXiangyi.xiangAnalysis;
    this.gongweiXiangyi = tansuomenXiangyi.chapter3;
  }

  /**
   * 获取五行象意
   */
  getWuxingXiangyi(element, type = '植物') {
    const wuxingMap = {
      '甲': this.wuxingXiangyi.muXiangyi,
      '乙': this.wuxingXiangyi.muXiangyi,
      '丙': this.wuxingXiangyi.huoXiangyi,
      '丁': this.wuxingXiangyi.huoXiangyi,
      '戊': this.wuxingXiangyi.tuXiangyi,
      '己': this.wuxingXiangyi.tuXiangyi,
      '庚': this.wuxingXiangyi.jinXiangyi,
      '辛': this.wuxingXiangyi.jinXiangyi,
      '壬': this.wuxingXiangyi.shuiXiangyi,
      '癸': this.wuxingXiangyi.shuiXiangyi
    };

    return wuxingMap[element]?.categories[type] || null;
  }

  /**
   * 获取十神象意
   */
  getShishenXiangyi(shishen, type = '职业') {
    const shishenMap = {
      '正官': this.shishenXiangyi.zhengGuanXiangyi,
      '正财': this.shishenXiangyi.zhengCaiXiangyi
    };

    return shishenMap[shishen]?.categories[type] || null;
  }

  /**
   * 基础取象分析
   */
  basicXiangyiAnalysis(bazi, position) {
    const pillar = bazi[position];
    const element = pillar.stem;
    const branch = pillar.branch;

    // 获取五行象意
    const wuxingXiangyi = this.getWuxingXiangyi(element, '职业');

    // 计算十神
    const dayMaster = bazi.day.stem;
    const shishen = this.calculateShishen(dayMaster, element);

    // 获取十神象意
    const shishenXiangyi = this.getShishenXiangyi(shishen, '职业');

    return {
      position: position,
      element: element,
      branch: branch,
      shishen: shishen,
      wuxingXiangyi: wuxingXiangyi,
      shishenXiangyi: shishenXiangyi,
      combinedAnalysis: this.combineXiangyi(element, shishen, position)
    };
  }

  /**
   * 计算十神
   */
  calculateShishen(dayMaster, targetStem) {
    // 这里应该调用已有的十神计算函数
    // 为了简化，这里用一个简化的实现
    const shishenMap = {
      '甲甲': '比肩', '甲乙': '劫财', '甲丙': '食神', '甲丁': '伤官',
      '甲戊': '正财', '甲己': '偏财', '甲庚': '七杀', '甲辛': '正官',
      '甲壬': '偏印', '甲癸': '正印'
      // ... 其他组合
    };

    return shishenMap[dayMaster + targetStem] || '未知';
  }

  /**
   * 组合象意分析
   */
  combineXiangyi(element, shishen, position) {
    const positionMeanings = {
      '年柱': '祖辈、根基、早年环境',
      '月柱': '事业平台、父母、中年运势',
      '日柱': '自身本质、配偶、核心特质',
      '时柱': '子女、晚年、结果'
    };

    return {
      description: `${element}${shishen}在${position}`,
      meaning: `${positionMeanings[position]}方面体现${element}${shishen}的特征`,
      applications: this.getApplications(element, shishen, position)
    };
  }

  /**
   * 获取应用建议
   */
  getApplications(element, shishen, position) {
    const applications = [];

    // 根据五行和十神组合给出应用建议
    if (shishen === '正官') {
      applications.push('适合从事管理工作');
      applications.push('事业发展稳定，有晋升机会');
    }

    if (shishen === '正财') {
      applications.push('适合经营实业或金融行业');
      applications.push('财运稳定，勤劳致富');
    }

    if (element.includes('木')) {
      applications.push('适合文教、农业、林业相关工作');
    }

    if (element.includes('火')) {
      applications.push('适合能源、电子、娱乐行业');
    }

    return applications;
  }

  /**
   * 完整的八字取象分析
   */
  fullXiangyiAnalysis(bazi) {
    const analysis = {
      summary: {},
      positions: {},
      career: {},
      marriage: {},
      health: {},
      wealth: {}
    };

    // 分析四柱
    ['year', 'month', 'day', 'hour'].forEach(position => {
      analysis.positions[position] = this.basicXiangyiAnalysis(bazi, position);
    });

    // 职业象意分析
    analysis.career = this.getCareerXiangyi(bazi);

    // 婚姻象意分析
    analysis.marriage = this.getMarriageXiangyi(bazi);

    // 健康象意分析
    analysis.health = this.getHealthXiangyi(bazi);

    // 财富象意分析
    analysis.wealth = this.getWealthXiangyi(bazi);

    return analysis;
  }

  /**
   * 职业象意分析
   */
  getCareerXiangyi(bazi) {
    const monthAnalysis = this.basicXiangyiAnalysis(bazi, 'month');
    const dayAnalysis = this.basicXiangyiAnalysis(bazi, 'day');

    return {
      suitableCareers: this.extractCareers(monthAnalysis, dayAnalysis),
      careerDirection: monthAnalysis.combinedAnalysis.meaning,
      developmentAdvice: monthAnalysis.combinedAnalysis.applications
    };
  }

  /**
   * 婚姻象意分析
   */
  getMarriageXiangyi(bazi) {
    const dayAnalysis = this.basicXiangyiAnalysis(bazi, 'day');
    const spousePosition = bazi.day.branch;

    return {
      spouseCharacteristics: this.getSpouseCharacteristics(dayAnalysis),
      marriageTiming: this.getMarriageTiming(bazi),
      relationshipAdvice: this.getRelationshipAdvice(dayAnalysis)
    };
  }

  /**
   * 健康象意分析
   */
  getHealthXiangyi(bazi) {
    const elementDistribution = this.analyzeElementDistribution(bazi);

    return {
      strongOrgans: this.getStrongOrgans(elementDistribution),
      weakOrgans: this.getWeakOrgans(elementDistribution),
      healthAdvice: this.getHealthAdvice(elementDistribution)
    };
  }

  /**
   * 财富象意分析
   */
  getWealthXiangyi(bazi) {
    const wealthAnalysis = this.analyzeWealthElements(bazi);

    return {
      wealthLevel: wealthAnalysis.level,
      wealthSource: wealthAnalysis.sources,
      financialAdvice: wealthAnalysis.advice,
      investmentTiming: this.getInvestmentTiming(bazi)
    };
  }

  // 辅助方法
  extractCareers(monthAnalysis, dayAnalysis) {
    const careers = [];

    if (monthAnalysis.wuxingXiangyi) {
      careers.push(...monthAnalysis.wuxingXiangyi.items);
    }

    if (dayAnalysis.wuxingXiangyi) {
      careers.push(...dayAnalysis.wuxingXiangyi.items);
    }

    return [...new Set(careers)];
  }

  getSpouseCharacteristics(dayAnalysis) {
    return {
      personality: dayAnalysis.combinedAnalysis.meaning,
      appearance: this.getAppearanceTraits(dayAnalysis.element),
      qualities: dayAnalysis.combinedAnalysis.applications
    };
  }

  getMarriageTiming(bazi) {
    // 简化实现，实际需要更复杂的算法
    return {
      optimalAge: "25-30岁",
      favorableYears: this.getFavorableMarriageYears(bazi),
      challenges: this.getMarriageChallenges(bazi)
    };
  }

  getRelationshipAdvice(dayAnalysis) {
    return [
      "重视感情基础",
      "保持相互理解",
      "共同成长发展",
      "注重家庭责任"
    ];
  }

  getAppearanceTraits(element) {
    const traits = {
      '甲': "身材高大挺拔，举止稳重",
      '乙': "身材苗条优雅，举止温和",
      '丙': "面色红润，眼神明亮",
      '丁': "面容秀美，举止文静",
      '戊': "身材敦厚，举止稳重",
      '己': "身材适中，举止温和",
      '庚': "轮廓分明，举止有力",
      '辛': "皮肤白皙，举止精致",
      '壬': "圆润柔和，眼神灵动",
      '癸': "娇小玲珑，举止文静"
    };

    return traits[element] || "外表普通";
  }

  analyzeElementDistribution(bazi) {
    const distribution = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };

    ['year', 'month', 'day', 'hour'].forEach(position => {
      const stem = bazi[position].stem;
      const branch = bazi[position].branch;

      // 统计天干五行
      const stemElement = this.getElementFiveProperty(stem);
      if (stemElement) distribution[stemElement]++;

      // 统计地支五行
      const branchElement = this.getElementFiveProperty(branch);
      if (branchElement) distribution[branchElement]++;
    });

    return distribution;
  }

  getElementFiveProperty(element) {
    const elementMap = {
      '甲': '木', '乙': '木',
      '丙': '火', '丁': '火',
      '戊': '土', '己': '土',
      '庚': '金', '辛': '金',
      '壬': '水', '癸': '水',
      '子': '水', '亥': '水',
      '寅': '木', '卯': '木',
      '辰': '土', '戌': '土', '丑': '土', '未': '土',
      '巳': '火', '午': '火',
      '申': '金', '酉': '金'
    };

    return elementMap[element];
  }

  getStrongOrgans(distribution) {
    const strongOrgans = [];
    const maxCount = Math.max(...Object.values(distribution));

    Object.entries(distribution).forEach(([element, count]) => {
      if (count === maxCount) {
        strongOrgans.push({
          element: element,
          organ: this.getOrganByElement(element),
          strength: "过强"
        });
      }
    });

    return strongOrgans;
  }

  getWeakOrgans(distribution) {
    const weakOrgans = [];
    const minCount = Math.min(...Object.values(distribution));

    Object.entries(distribution).forEach(([element, count]) => {
      if (count === minCount) {
        weakOrgans.push({
          element: element,
          organ: this.getOrganByElement(element),
          strength: "偏弱"
        });
      }
    });

    return weakOrgans;
  }

  getOrganByElement(element) {
    const organMap = {
      '木': '肝胆',
      '火': '心脏小肠',
      '土': '脾胃',
      '金': '肺大肠',
      '水': '肾脏膀胱'
    };

    return organMap[element];
  }

  getHealthAdvice(distribution) {
    const advice = [];
    const strongOrgans = this.getStrongOrgans(distribution);
    const weakOrgans = this.getWeakOrgans(distribution);

    strongOrgans.forEach(org => {
      advice.push(`注意${org.organ}保健，避免过度劳累`);
    });

    weakOrgans.forEach(org => {
      advice.push(`加强${org.organ}调养，适当补充${org.element}元素`);
    });

    return advice;
  }

  analyzeWealthElements(bazi) {
    const wealthElements = [];

    ['year', 'month', 'day', 'hour'].forEach(position => {
      const stem = bazi[position].stem;
      const dayMaster = bazi.day.stem;
      const shishen = this.calculateShishen(dayMaster, stem);

      if (shishen === '正财' || shishen === '偏财') {
        wealthElements.push({
          position: position,
          element: stem,
          shishen: shishen,
          strength: this.getWealthStrength(shishen, position)
        });
      }
    });

    return {
      elements: wealthElements,
      level: this.getWealthLevel(wealthElements),
      sources: this.getWealthSources(wealthElements),
      advice: this.getWealthAdvice(wealthElements)
    };
  }

  getWealthStrength(shishen, position) {
    if (shishen === '正财') return '稳定';
    if (shishen === '偏财') return '波动';
    return '一般';
  }

  getWealthLevel(wealthElements) {
    if (wealthElements.length >= 3) return '财运旺盛';
    if (wealthElements.length >= 2) return '财运中等';
    if (wealthElements.length >= 1) return '财运一般';
    return '财运较弱';
  }

  getWealthSources(wealthElements) {
    return wealthElements.map(elem => {
      const sourceMap = {
        '正财': '正当收入、稳定工作',
        '偏财': '投资收益、意外之财'
      };
      return sourceMap[elem.shishen];
    });
  }

  getWealthAdvice(wealthElements) {
    const advice = [];

    if (wealthElements.length === 0) {
      advice.push("建议加强理财意识，制定储蓄计划");
    } else {
      advice.push("保持良好的理财习惯");
      advice.push("适度投资，分散风险");
    }

    return advice;
  }

  getInvestmentTiming(bazi) {
    // 简化实现
    return {
      favorablePeriods: ["30-40岁", "50-60岁"],
      avoidPeriods: ["20-25岁"],
      preferredInvestments: ["稳健型理财", "长期投资"]
    };
  }

  getFavorableMarriageYears(bazi) {
    // 简化实现
    return [25, 28, 30, 33];
  }

  getMarriageChallenges(bazi) {
    return [
      "需要克服性格差异",
      "学会有效沟通",
      "平衡工作与家庭"
    ];
  }

  // ==================== 宫位取象分析方法 ====================

  /**
   * 年柱取象分析
   */
  analyzeYearPillar(bazi) {
    const yearPillar = bazi.year;
    const dayMaster = bazi.day.stem;
    const yearShishen = this.calculateShishen(dayMaster, yearPillar.stem);

    // 获取年柱象意
    const祖辈情况 = this.getAncestorAnalysis(yearPillar, yearShishen);
    const 早年环境 = this.getEarlyEnvironmentAnalysis(yearPillar);
    const 根基背景 = this.getFoundationAnalysis(yearPillar, bazi);

    return {
      pillar: "年柱",
      stem: yearPillar.stem,
      branch: yearPillar.branch,
      shishen: yearShishen,
      scope: "祖辈、根基、早年环境（1-16岁）",
      analysis: {
        祖辈情况: 祖辈情况,
        早年环境: 早年环境,
        根基背景: 根基背景,
        整体评价: this.getYearPillarOverallEvaluation(祖辈情况, 早年环境, 根基背景)
      }
    };
  }

  /**
   * 月柱取象分析
   */
  analyzeMonthPillar(bazi) {
    const monthPillar = bazi.month;
    const dayMaster = bazi.day.stem;
    const monthShishen = this.calculateShishen(dayMaster, monthPillar.stem);

    // 获取月柱象意
    const 事业发展 = this.getCareerPlatformAnalysis(monthPillar, monthShishen);
    const 父母情况 = this.getParentsAnalysis(monthPillar, bazi);
    const 社会环境 = this.getSocialEnvironmentAnalysis(monthPillar);

    return {
      pillar: "月柱",
      stem: monthPillar.stem,
      branch: monthPillar.branch,
      shishen: monthShishen,
      scope: "事业平台、父母、中年运势（17-32岁）",
      analysis: {
        事业发展: 事业发展,
        父母情况: 父母情况,
        社会环境: 社会环境,
        整体评价: this.getMonthPillarOverallEvaluation(事业发展, 父母情况, 社会环境)
      }
    };
  }

  /**
   * 日柱取象分析
   */
  analyzeDayPillar(bazi) {
    const dayPillar = bazi.day;
    const dayMaster = dayPillar.stem;
    const dayShishen = "日主";
    const spouseShishen = this.calculateShishen(dayMaster, dayPillar.branch);

    // 获取日柱象意
    const 自身特质 = this.getSelfCharacteristicsAnalysis(dayPillar);
    const 配偶特征 = this.getSpouseCharacteristicsAnalysis(dayPillar, spouseShishen);
    const 核心能力 = this.getCoreAbilitiesAnalysis(dayPillar);

    return {
      pillar: "日柱",
      stem: dayPillar.stem,
      branch: dayPillar.branch,
      shishen: dayShishen,
      scope: "自身本质、配偶、核心特质（33-48岁）",
      analysis: {
        自身特质: 自身特质,
        配偶特征: 配偶特征,
        核心能力: 核心能力,
        整体评价: this.getDayPillarOverallEvaluation(自身特质, 配偶特征, 核心能力)
      }
    };
  }

  /**
   * 时柱取象分析
   */
  analyzeHourPillar(bazi) {
    const hourPillar = bazi.hour;
    const dayMaster = bazi.day.stem;
    const hourShishen = this.calculateShishen(dayMaster, hourPillar.stem);

    // 获取时柱象意
    const 子女情况 = this.getChildrenAnalysis(hourPillar, hourShishen);
    const 晚年运势 = this.getLateYearAnalysis(hourPillar, bazi);
    const 人生成就 = this.getLifeAchievementAnalysis(hourPillar, hourShishen);

    return {
      pillar: "时柱",
      stem: hourPillar.stem,
      branch: hourPillar.branch,
      shishen: hourShishen,
      scope: "子女、晚年、结果、成就",
      analysis: {
        子女情况: 子女情况,
        晚年运势: 晚年运势,
        人生成就: 人生成就,
        整体评价: this.getHourPillarOverallEvaluation(子女情况, 晚年运势, 人生成就)
      }
    };
  }

  /**
   * 完整的宫位取象分析
   */
  fullGongweiAnalysis(bazi) {
    const analysis = {
      summary: {
        title: "八字宫位取象完整分析",
        description: "通过四柱宫位分析人生各阶段的具体情况",
        bazi: this.formatBazi(bazi)
      },
      pillars: {},
      relationships: {},
      lifeStages: {},
      overallEvaluation: {}
    };

    // 分析四柱
    analysis.pillars.year = this.analyzeYearPillar(bazi);
    analysis.pillars.month = this.analyzeMonthPillar(bazi);
    analysis.pillars.day = this.analyzeDayPillar(bazi);
    analysis.pillars.hour = this.analyzeHourPillar(bazi);

    // 分析四柱关系
    analysis.relationships = this.analyzePillarRelationships(bazi);

    // 分析人生阶段
    analysis.lifeStages = this.analyzeLifeStages(analysis.pillars);

    // 综合评价
    analysis.overallEvaluation = this.getOverallGongweiEvaluation(analysis);

    return analysis;
  }

  // ==================== 宫位分析辅助方法 ====================

  /**
   * 获取祖辈情况分析
   */
  getAncestorAnalysis(yearPillar, yearShishen) {
    const ancestorAnalysis = this.gongweiXiangyi.yearPillar.xiangyiCategories.祖辈情况;

    for (const example of ancestorAnalysis.examples) {
      if (example.combination.includes(yearShishen)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "年柱" + yearPillar.stem + yearPillar.branch + "，" + example.meaning
        };
      }
    }

    // 根据五行补充分析
    const element = this.getElementFiveProperty(yearPillar.stem);
    return {
      combination: yearShishen + "在年柱",
      meaning: "祖辈有一定社会地位",
      details: "家族有传统优势，对命主成长有积极影响",
      analysis: "年柱" + element + yearShishen + "，祖辈情况尚可"
    };
  }

  /**
   * 获取早年环境分析
   */
  getEarlyEnvironmentAnalysis(yearPillar) {
    const earlyEnvironment = this.gongweiXiangyi.yearPillar.xiangyiCategories.早年环境;

    for (const example of earlyEnvironment.examples) {
      if (example.combination.includes(yearPillar.stem)) {
        return {
          ageRange: earlyEnvironment.ageRange,
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "1-16岁成长环境" + example.meaning
        };
      }
    }

    return {
      ageRange: "1-16岁",
      combination: "年柱" + yearPillar.stem,
      meaning: "早年环境一般",
      details: "成长环境相对平稳，需要适应各种情况",
      analysis: "早年环境需要适应和努力"
    };
  }

  /**
   * 获取根基背景分析
   */
  getFoundationAnalysis(yearPillar, bazi) {
    const foundation = this.gongweiXiangyi.yearPillar.xiangyiCategories.根基背景;

    // 简化判断根基情况
    const hasRoot = this.checkPillarHasRoot(yearPillar, bazi);

    for (const example of foundation.examples) {
      if ((hasRoot && example.combination.includes("有根")) ||
          (!hasRoot && example.combination.includes("无根"))) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "家族根基" + example.meaning
        };
      }
    }

    return {
      combination: "根基一般",
      meaning: "根基中等，需要个人努力",
      details: "家族基础一般，主要依靠个人奋斗",
      analysis: "根基中等，白手起家"
    };
  }

  /**
   * 获取事业平台分析
   */
  getCareerPlatformAnalysis(monthPillar, monthShishen) {
    const career = this.gongweiXiangyi.monthPillar.xiangyiCategories.事业发展;

    for (const example of career.examples) {
      if (example.combination.includes(monthShishen)) {
        return {
          ageRange: career.ageRange,
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "17-32岁事业" + example.meaning
        };
      }
    }

    return {
      ageRange: "17-32岁",
      combination: monthShishen + "在月柱",
      meaning: "事业发展一般",
      details: "事业平台相对平稳，需要努力发展",
      analysis: "事业发展需要个人努力"
    };
  }

  /**
   * 获取父母情况分析
   */
  getParentsAnalysis(monthPillar, bazi) {
    const parents = this.gongweiXiangyi.monthPillar.xiangyiCategories.父母情况;

    // 简化判断父母情况
    const isHelpful = this.checkMonthPillarHelpful(monthPillar, bazi);

    for (const example of parents.examples) {
      if ((isHelpful && example.combination.includes("用神")) ||
          (!isHelpful && example.combination.includes("忌神"))) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "父母情况" + example.meaning
        };
      }
    }

    return {
      combination: "父母情况一般",
      meaning: "父母帮助有限",
      details: "父母能力一般，主要依靠个人发展",
      analysis: "父母情况一般，需要独立发展"
    };
  }

  /**
   * 获取社会环境分析
   */
  getSocialEnvironmentAnalysis(monthPillar) {
    const socialEnv = this.gongweiXiangyi.monthPillar.xiangyiCategories.社会环境;

    for (const example of socialEnv.examples) {
      if (example.combination.includes(monthPillar.stem)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "社会环境" + example.meaning
        };
      }
    }

    return {
      combination: "社会环境一般",
      meaning: "社会环境相对平稳",
      details: "社会发展相对稳定，机遇与挑战并存",
      analysis: "社会环境需要适应"
    };
  }

  /**
   * 获取自身特质分析
   */
  getSelfCharacteristicsAnalysis(dayPillar) {
    const selfCharacter = this.gongweiXiangyi.dayPillar.xiangyiCategories.自身特质;

    for (const example of selfCharacter.examples) {
      if (example.combination.includes(dayPillar.stem)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "日主" + example.meaning
        };
      }
    }

    return {
      combination: "日主" + dayPillar.stem,
      meaning: "性格中等",
      details: "性格相对平和，需要发挥自身优势",
      analysis: "日主特征需要进一步发挥"
    };
  }

  /**
   * 获取配偶特征分析
   */
  getSpouseCharacteristicsAnalysis(dayPillar, spouseShishen) {
    const spouse = this.gongweiXiangyi.dayPillar.xiangyiCategories.配偶特征;

    for (const example of spouse.examples) {
      if (example.combination.includes(spouseShishen)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "配偶" + example.meaning
        };
      }
    }

    return {
      combination: "配偶宫" + dayPillar.branch,
      meaning: "配偶性格温和",
      details: "配偶性格相对平和，需要相互理解",
      analysis: "配偶情况需要相互适应"
    };
  }

  /**
   * 获取核心能力分析
   */
  getCoreAbilitiesAnalysis(dayPillar) {
    const coreAbilities = this.gongweiXiangyi.dayPillar.xiangyiCategories.核心能力;

    // 简化判断核心能力
    const harmony = this.checkDayPillarHarmony(dayPillar);

    for (const example of coreAbilities.examples) {
      if ((harmony && example.combination.includes("相生")) ||
          (!harmony && example.combination.includes("相克"))) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "核心能力" + example.meaning
        };
      }
    }

    return {
      combination: "核心能力一般",
      meaning: "能力发展相对平稳",
      details: "核心能力需要进一步培养和发挥",
      analysis: "核心能力需要提升"
    };
  }

  /**
   * 获取子女情况分析
   */
  getChildrenAnalysis(hourPillar, hourShishen) {
    const children = this.gongweiXiangyi.hourPillar.xiangyiCategories.子女情况;

    for (const example of children.examples) {
      if (example.combination.includes(hourShishen)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "子女" + example.meaning
        };
      }
    }

    return {
      combination: "子女情况一般",
      meaning: "子女发展平稳",
      details: "子女发展相对平稳，需要适当引导",
      analysis: "子女情况需要关注"
    };
  }

  /**
   * 获取晚年运势分析
   */
  getLateYearAnalysis(hourPillar, bazi) {
    const lateYear = this.gongweiXiangyi.hourPillar.xiangyiCategories.晚年运势;

    // 简化判断晚年运势
    const isGood = this.checkHourPillarGood(hourPillar, bazi);

    for (const example of lateYear.examples) {
      if ((isGood && example.combination.includes("喜用神")) ||
          (!isGood && example.combination.includes("忌神"))) {
        return {
          ageRange: lateYear.ageRange,
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "晚年" + example.meaning
        };
      }
    }

    return {
      ageRange: "60岁以后",
      combination: "晚年运势一般",
      meaning: "晚年生活平稳",
      details: "晚年生活相对平稳，需要提前规划",
      analysis: "晚年需要提前准备"
    };
  }

  /**
   * 获取人生成就分析
   */
  getLifeAchievementAnalysis(hourPillar, hourShishen) {
    const achievement = this.gongweiXiangyi.hourPillar.xiangyiCategories.人生成就;

    for (const example of achievement.examples) {
      if (example.combination.includes(hourShishen)) {
        return {
          combination: example.combination,
          meaning: example.meaning,
          details: example.details,
          analysis: "人生成就" + example.meaning
        };
      }
    }

    return {
      combination: "人生成就一般",
      meaning: "成就相对平稳",
      details: "人生发展相对平稳，在平凡中有收获",
      analysis: "人生成就需要努力"
    };
  }

  // ==================== 辅助判断方法 ====================

  /**
   * 检查柱是否有根
   */
  checkPillarHasRoot(pillar, bazi) {
    // 简化判断逻辑
    return true; // 暂时返回true
  }

  /**
   * 检查月柱是否有帮助
   */
  checkMonthPillarHelpful(monthPillar, bazi) {
    // 简化判断逻辑
    return Math.random() > 0.5; // 随机返回
  }

  /**
   * 检查日柱是否和谐
   */
  checkDayPillarHarmony(dayPillar) {
    // 简化判断逻辑
    return Math.random() > 0.5; // 随机返回
  }

  /**
   * 检查时柱是否好
   */
  checkHourPillarGood(hourPillar, bazi) {
    // 简化判断逻辑
    return Math.random() > 0.5; // 随机返回
  }

  /**
   * 格式化八字
   */
  formatBazi(bazi) {
    return {
      year: bazi.year.stem + bazi.year.branch + "年",
      month: bazi.month.stem + bazi.month.branch + "月",
      day: bazi.day.stem + bazi.day.branch + "日",
      hour: bazi.hour.stem + bazi.hour.branch + "时"
    };
  }

  /**
   * 分析四柱关系
   */
  analyzePillarRelationships(bazi) {
    return {
      yearMonth: this.analyzeYearMonthRelationship(bazi),
      monthDay: this.analyzeMonthDayRelationship(bazi),
      dayHour: this.analyzeDayHourRelationship(bazi)
    };
  }

  /**
   * 分析年月关系
   */
  analyzeYearMonthRelationship(bazi) {
    // 简化实现
    return {
      relationship: "年月关系",
      analysis: "年柱与月柱的关系影响早年到中年的过渡",
      meaning: "需要结合具体情况分析"
    };
  }

  /**
   * 分析月日关系
   */
  analyzeMonthDayRelationship(bazi) {
    // 简化实现
    return {
      relationship: "月日关系",
      analysis: "月柱与日柱的关系影响家庭与自身的关系",
      meaning: "需要结合具体情况分析"
    };
  }

  /**
   * 分析日时关系
   */
  analyzeDayHourRelationship(bazi) {
    // 简化实现
    return {
      relationship: "日时关系",
      analysis: "日柱与时柱的关系影响自身与子女的关系",
      meaning: "需要结合具体情况分析"
    };
  }

  /**
   * 分析人生阶段
   */
  analyzeLifeStages(pillars) {
    return {
      earlyStage: {
        name: "早年阶段（1-16岁）",
        pillar: "年柱",
        analysis: pillars.year.analysis.整体评价
      },
      middleStage: {
        name: "中年阶段（17-48岁）",
        pillars: ["月柱", "日柱"],
        analysis: "事业发展期，家庭建设期"
      },
      lateStage: {
        name: "晚年阶段（49岁以后）",
        pillar: "时柱",
        analysis: pillars.hour.analysis.整体评价
      }
    };
  }

  /**
   * 获取综合评价
   */
  getOverallGongweiEvaluation(analysis) {
    return {
      overallRating: "中等偏上",
      strengths: ["基础相对扎实", "发展潜力较大"],
      weaknesses: ["需要努力奋斗", "需要注意人际关系"],
      suggestions: [
        "发挥自身优势",
        "抓住发展机遇",
        "维护家庭和谐",
        "规划晚年生活"
      ],
      conclusion: "整体发展相对平稳，有较好的发展潜力"
    };
  }

  // ==================== 评价方法 ====================

  getYearPillarOverallEvaluation(祖辈情况, 早年环境, 根基背景) {
    return "早年基础相对较好，有利于后续发展";
  }

  getMonthPillarOverallEvaluation(事业发展, 父母情况, 社会环境) {
    return "中年发展平台良好，事业有较好基础";
  }

  getDayPillarOverallEvaluation(自身特质, 配偶特征, 核心能力) {
    return "自身条件较好，婚姻家庭相对和谐";
  }

  getHourPillarOverallEvaluation(子女情况, 晚年运势, 人生成就) {
    return "晚年发展趋势良好，有较好的人生归宿";
  }
}

module.exports = {
  tansuomenXiangyi,
  XiangyiAnalysisSystem
};

/**
 * 使用示例：
 *
 * // 《探索门八字取象秘法》宫位取象分析示例
 * const { XiangyiAnalysisSystem } = require('./stage-04-xiangyi-learning');
 *
 * // 创建取象分析系统实例
 * const xiangyiSystem = new XiangyiAnalysisSystem();
 *
 * // 示例八字数据
 * const bazi = {
 *   year: { stem: '甲', branch: '寅' },
 *   month: { stem: '丙', branch: '午' },
 *   day: { stem: '戊', branch: '戌' },
 *   hour: { stem: '壬', branch: '子' }
 * };
 *
 * // 1. 进行完整的宫位取象分析
 * const fullGongweiAnalysis = xiangyiSystem.fullGongweiAnalysis(bazi);
 * console.log('完整宫位分析：', JSON.stringify(fullGongweiAnalysis, null, 2));
 *
 * // 2. 分析年柱（祖辈、早年环境）
 * const yearAnalysis = xiangyiSystem.analyzeYearPillar(bazi);
 * console.log('年柱分析：', JSON.stringify(yearAnalysis, null, 2));
 *
 * // 3. 分析月柱（事业、父母）
 * const monthAnalysis = xiangyiSystem.analyzeMonthPillar(bazi);
 * console.log('月柱分析：', JSON.stringify(monthAnalysis, null, 2));
 *
 * // 4. 分析日柱（自身、配偶）
 * const dayAnalysis = xiangyiSystem.analyzeDayPillar(bazi);
 * console.log('日柱分析：', JSON.stringify(dayAnalysis, null, 2));
 *
 * // 5. 分析时柱（子女、晚年）
 * const hourAnalysis = xiangyiSystem.analyzeHourPillar(bazi);
 * console.log('时柱分析：', JSON.stringify(hourAnalysis, null, 2));
 *
 * // 6. 获取五行象意
 * const muXiangyi = xiangyiSystem.getWuxingXiangyi('甲', '职业');
 * console.log('甲木职业象意：', muXiangyi);
 *
 * // 7. 获取十神象意
 * const zhengGuanXiangyi = xiangyiSystem.getShishenXiangyi('正官', '职业');
 * console.log('正官职业象意：', zhengGuanXiangyi);
 */

},

  // ==================== 第三章：宫位取象技法 ====================

  chapter3: {
    title: "第三章：宫位取象技法详解",
    introduction: {
      title: "宫位取象概述",
      description: "宫位取象是通过四柱（年柱、月柱、日柱、时柱）的不同位置，结合具体的天干地支和十神，来推演具体的物象、事象、形象",
      principle: "宫位 + 时间 + 空间 + 十神 = 具体象意",
      importance: "宫位取象是八字分析的重要环节，能够准确预测人生各个阶段的具体情况"
    },

    // 年柱取象技法
    yearPillar: {
      title: "年柱取象技法",
      scope: "祖辈、根基、早年环境（1-16岁）、大环境、背景",
      xiangyiCategories: {
        祖辈情况: {
          name: "祖辈情况象意",
          analysisMethod: "看年柱天干地支的五行十神组合",
          examples: [
            {
              combination: "年柱正官",
              meaning: "祖辈有官职或社会地位",
              details: "祖父或外祖父可能有官职，家族中有从政传统，早年家教严格"
            },
            {
              combination: "年柱正财",
              meaning: "祖辈家境殷实",
              details: "家族有产业积累，祖辈善于经营，早年生活条件较好"
            },
            {
              combination: "年柱食神",
              meaning: "祖辈有才艺或福气",
              details: "祖辈可能有文艺天赋，家庭氛围和谐，童年快乐"
            },
            {
              combination: "年柱七杀",
              meaning: "祖辈有军警背景或压力较大",
              details: "家族可能有武职背景，或祖辈经历坎坷，童年需要承担责任"
            }
          ]
        },
        早年环境: {
          name: "早年环境象意",
          ageRange: "1-16岁",
          examples: [
            {
              combination: "年柱甲木",
              meaning: "早年成长环境有生气",
              details: "家庭环境充满活力，可能有绿化环境，早年教育重视成长"
            },
            {
              combination: "年柱丙火",
              meaning: "早年环境温暖光明",
              details: "家庭氛围积极向上，充满正能量，早年有贵人相助"
            },
            {
              combination: "年柱庚金",
              meaning: "早年环境较为严格",
              details: "家教严格，从小培养规则意识，早年需要承担更多责任"
            },
            {
              combination: "年柱壬水",
              meaning: "早年环境变化较多",
              details: "可能经常搬家或家庭变故，适应性强的成长环境"
            }
          ]
        },
        根基背景: {
          name: "根基背景象意",
          analysisFocus: "看年柱的强弱和生克关系",
          examples: [
            {
              combination: "年柱有根",
              meaning: "根基深厚，有家族积累",
              details: "家族有传承，从小有良好的基础，发展有后劲"
            },
            {
              combination: "年柱无根",
              meaning: "根基较浅，需要白手起家",
              details: "家族积累不多，主要依靠个人努力，事业发展靠自己"
            },
            {
              combination: "年柱受冲",
              meaning: "根基不稳，早年变动多",
              details: "家族可能有变故，早年生活不稳定，需要适应变化"
            },
            {
              combination: "年柱得生",
              meaning: "根基得助，有贵人扶持",
              details: "家族有传统优势，从小有长辈关爱，发展有支撑"
            }
          ]
        }
      }
    },

    // 月柱取象技法
    monthPillar: {
      title: "月柱取象技法",
      scope: "事业平台、父母、中年运势（17-32岁）、社会环境、工作平台",
      xiangyiCategories: {
        事业发展: {
          name: "事业发展象意",
          ageRange: "17-32岁",
          examples: [
            {
              combination: "月柱正官",
              meaning: "事业平台稳定，适合从政或管理",
              details: "工作环境正规，有晋升机会，事业发展按部就班"
            },
            {
              combination: "月柱正财",
              meaning: "事业平台稳定，适合实业经营",
              details: "工作环境务实，收入稳定，事业发展踏实稳健"
            },
            {
              combination: "月柱食神",
              meaning: "事业平台轻松，适合创意工作",
              details: "工作环境和谐，能够发挥才华，事业发展有创意"
            },
            {
              combination: "月柱七杀",
              meaning: "事业平台有挑战，适合竞争性工作",
              details: "工作环境竞争激烈，压力大但有成就感，事业需要拼搏"
            }
          ]
        },
        父母情况: {
          name: "父母情况象意",
          analysisMethod: "看月柱天干地支和年月关系",
          examples: [
            {
              combination: "月柱为用神",
              meaning: "父母是贵人，能够提供帮助",
              details: "父母有能力且愿意帮助，事业发展有家庭支持"
            },
            {
              combination: "月柱为忌神",
              meaning: "父母帮助有限，需要独立",
              details: "父母可能能力有限或有其他困难，主要依靠个人奋斗"
            },
            {
              combination: "月柱受年柱生",
              meaning: "祖辈帮助父母，家庭背景好",
              details: "家族有传承，父母得到祖辈帮助，家庭基础较好"
            },
            {
              combination: "月柱生年柱",
              meaning: "父母孝顺祖辈，付出较多",
              details: "父母承担家庭责任，可能影响对子女的关注"
            }
          ]
        },
        社会环境: {
          name: "社会环境象意",
          analysisFocus: "看月柱的五行十神和社会属性",
          examples: [
            {
              combination: "月柱甲木",
              meaning: "社会环境充满生机，发展机会多",
              details: "时代发展迅速，新的机会不断，适合创业发展"
            },
            {
              combination: "月柱丙火",
              meaning: "社会环境积极向上，正能量强",
              details: "社会氛围积极，人们乐观向上，适合发展事业"
            },
            {
              combination: "月柱庚金",
              meaning: "社会环境规范严格，规则性强",
              details: "社会管理规范，法治环境好，适合正规发展"
            },
            {
              combination: "月柱壬水",
              meaning: "社会环境变化快速，流动性大",
              details: "社会发展变化快，需要适应能力，机遇与挑战并存"
            }
          ]
        }
      }
    },

    // 日柱取象技法
    dayPillar: {
      title: "日柱取象技法",
      scope: "自身本质、配偶、核心特质、中年运势（33-48岁）",
      xiangyiCategories: {
        自身特质: {
          name: "自身特质象意",
          coreIdentity: "日主代表命主的本质特征",
          examples: [
            {
              combination: "日主甲木",
              meaning: "正直向上，有进取心",
              details: "性格正直，目标明确，有不断进取的精神，适合领导工作"
            },
            {
              combination: "日主丙火",
              meaning: "热情开朗，有领导力",
              details: "性格热情，善于表达，有感染力，适合公众性工作"
            },
            {
              combination: "日主戊土",
              meaning: "稳重踏实，有责任心",
              details: "性格稳重，责任心强，值得信赖，适合管理工作"
            },
            {
              combination: "日主庚金",
              meaning: "刚毅果断，有原则性",
              details: "性格刚毅，决断力强，有原则，适合执法工作"
            },
            {
              combination: "日主壬水",
              meaning: "聪明机智，适应力强",
              details: "性格聪明，适应性强，善于变通，适合商业工作"
            }
          ]
        },
        配偶特征: {
          name: "配偶特征象意",
          analysisMethod: "看日支（配偶宫）的五行十神",
          examples: [
            {
              combination: "日支正官",
              meaning: "配偶稳重可靠，有责任感",
              details: "配偶性格稳重，有事业心，家庭责任感强，能够支撑家庭"
            },
            {
              combination: "日支正财",
              meaning: "配偶贤惠持家，善于理财",
              details: "配偶善于持家，理财能力强，能够管理好家庭财务"
            },
            {
              combination: "日支食神",
              meaning: "配偶温和善良，有才艺",
              details: "配偶性格温和，有艺术天赋，家庭生活和谐美满"
            },
            {
              combination: "日支七杀",
              meaning: "配偶能力强有个性，需要磨合",
              details: "配偶能力突出，个性较强，需要相互理解和适应"
            },
            {
              combination: "日支桃花",
              meaning: "配偶魅力四射，社交能力强",
              details: "配偶外表出众，社交能力好，但需要注意关系维护"
            }
          ]
        },
        核心能力: {
          name: "核心能力象意",
          analysisFocus: "看日柱干支组合的整体特征",
          examples: [
            {
              combination: "日柱干支相生",
              meaning: "内在和谐，能力发展顺畅",
              details: "内在素质协调，能力发展顺利，容易获得认可"
            },
            {
              combination: "日柱干支相克",
              meaning: "内在冲突，需要在矛盾中成长",
              details: "内心存在矛盾，需要在冲突中成长，最终获得智慧"
            },
            {
              combination: "日柱有根",
              meaning: "根基扎实，能力稳定",
              details: "基础扎实，能力稳定发挥，适合长期发展"
            },
            {
              combination: "日柱无根",
              meaning: "根基较浅，需要借助外力",
              details: "基础相对薄弱，需要借助外部帮助，合作发展"
            }
          ]
        }
      }
    },

    // 时柱取象技法
    hourPillar: {
      title: "时柱取象技法",
      scope: "子女、晚年、结果、成就、人生归宿",
      xiangyiCategories: {
        子女情况: {
          name: "子女情况象意",
          analysisMethod: "看时柱天干地支和十神组合",
          examples: [
            {
              combination: "时柱正官",
              meaning: "子女有出息，能够成才",
              details: "子女事业有成，社会地位高，能够光宗耀祖"
            },
            {
              combination: "时柱正财",
              meaning: "子女善于理财，经济独立",
              details: "子女理财能力强，经济状况好，能够独立自主"
            },
            {
              combination: "时柱食神",
              meaning: "子女有才艺，生活幸福",
              details: "子女有艺术天赋，生活幸福美满，性格温和"
            },
            {
              combination: "时柱七杀",
              meaning: "子女能力强，个性突出",
              details: "子女能力突出，个性鲜明，能够成就一番事业"
            },
            {
              combination: "时柱印星",
              meaning: "子女有学识，文化程度高",
              details: "子女重视教育，文化水平高，能够从事知识工作"
            }
          ]
        },
        晚年运势: {
          name: "晚年运势象意",
          ageRange: "60岁以后",
          examples: [
            {
              combination: "时柱为喜用神",
              meaning: "晚年幸福安康，有福气",
              details: "晚年生活幸福，身体健康，有子女孝顺，生活质量高"
            },
            {
              combination: "时柱为忌神",
              meaning: "晚年需要注意健康和财务",
              details: "晚年可能需要更多关注健康问题，财务规划要提前"
            },
            {
              combination: "时柱有根",
              meaning: "晚年根基稳固，有依靠",
              details: "晚年有稳定的基础，有子女依靠，生活有保障"
            },
            {
              combination: "时柱受生",
              meaning: "晚年得助，有贵人扶持",
              details: "晚年得到他人帮助，有贵人相助，生活较为顺利"
            }
          ]
        },
        人生成就: {
          name: "人生成就象意",
          analysisFocus: "看时柱的十神和五行特征",
          examples: [
            {
              combination: "时柱正官",
              meaning: "事业成就稳定，有社会地位",
              details: "事业发展稳定，获得社会认可，有一定地位和声望"
            },
            {
              combination: "时柱正财",
              meaning: "财富积累成功，经济自由",
              details: "理财成功，财富积累丰厚，实现经济自由"
            },
            {
              combination: "时柱食神",
              meaning: "艺术成就突出，生活品质高",
              details: "在艺术或文化领域有成就，生活品质高，精神富足"
            },
            {
              combination: "时柱七杀",
              meaning: "事业成就显著，有影响力",
              details: "事业成就突出，在专业领域有影响力，受人尊敬"
            }
          ]
        }
      }
    },

    // 四柱宫位组合分析
    pillarCombinations: {
      title: "四柱宫位组合分析技法",
      description: "通过分析四柱之间的关系，进行更深层次的取象分析",
      combinationTypes: [
        {
          type: "年月关系",
          analysis: "祖辈与父母的关系，早年与中年的过渡",
          examples: [
            {
              relationship: "年生月",
              meaning: "祖辈帮助父母，家庭背景好",
              analysis: "家族有传承，父母得到祖辈支持，发展基础好"
            },
            {
              relationship: "年克月",
              meaning: "祖辈与父母关系不和，家庭有变故",
              analysis: "家族可能有矛盾，父母发展受阻，需要白手起家"
            },
            {
              relationship: "年月相同",
              meaning: "家族传承明显，发展路径清晰",
              analysis: "家族有明确的发展方向，子女容易继承家业"
            }
          ]
        },
        {
          type: "月日关系",
          analysis: "父母与自身的关系，中年发展阶段",
          examples: [
            {
              relationship: "月生日",
              meaning: "父母帮助自身，发展有支撑",
              analysis: "父母能够提供支持，事业发展顺利，家庭和谐"
            },
            {
              relationship: "月克日",
              meaning: "父母压力较大，需要独立发展",
              analysis: "父母可能给较大压力，需要独立奋斗，成就靠自己"
            },
            {
              relationship: "月日相合",
              meaning: "与父母关系好，家庭支持强",
              analysis: "家庭关系和谐，能够得到家庭支持，发展顺利"
            }
          ]
        },
        {
          type: "日时关系",
          analysis: "自身与子女的关系，晚年发展",
          examples: [
            {
              relationship: "日生时",
              meaning: "自身帮助子女，晚年有依靠",
              analysis: "能够帮助子女发展，晚年得到子女照顾，生活幸福"
            },
            {
              relationship: "日克时",
              meaning: "子女需要独立，付出较多",
              analysis: "为子女付出较多，但子女需要独立奋斗，晚年依靠自己"
            },
            {
              relationship: "日时相同",
              meaning: "与子女关系好，传承明显",
              analysis: "与子女关系密切，能够传承自己的事业或理念"
            }
          ]
        }
      ]
    },

    // 宫位取象实战案例
    practicalExamples: [
      {
        title: "案例1：年柱正官的早年分析",
        bazi: "甲寅年、丙午月、戊戌日、癸亥时",
        analysis: {
          年柱分析: "甲寅为正官在年柱",
          祖辈情况: "祖辈有官职，家族有从政传统",
          早年环境: "家教严格，从小培养规则意识",
          根基背景: "家族有社会地位，发展基础好",
          整体评价: "早年受家庭影响大，有良好的发展基础"
        }
      },
      {
        title: "案例2：月柱正财的事业分析",
        bazi: "乙卯年、己卯月、壬午日、辛亥时",
        analysis: {
          月柱分析: "己卯为正财在月柱",
          事业平台: "事业平台稳定，适合实业经营",
          父母情况: "父母善于经营，家庭经济状况好",
          社会环境: "社会环境务实，适合发展实业",
          发展阶段: "17-32岁事业稳步发展，收入稳定增长"
        }
      },
      {
        title: "案例3：日支七杀的婚姻分析",
        bazi: "丙子年、庚寅月、甲申日、戊辰时",
        analysis: {
          日支分析: "申为七杀在日支",
          配偶特征: "配偶能力强，个性突出，需要磨合",
          婚姻关系: "婚姻中可能有较多冲突，需要相互理解",
          配偶能力: "配偶事业心强，能力突出，能够成就事业",
          经营建议: "需要加强沟通，相互尊重，共同成长"
        }
      },
      {
        title: "案例4：时柱食神的子女分析",
        bazi: "丁巳年、辛亥月、癸卯日、乙巳时",
        analysis: {
          时柱分析: "乙巳为食神在时柱",
          子女特征: "子女有才艺，性格温和，生活幸福",
          子女能力: "子女艺术天赋好，可能有文艺方面的成就",
          晚年运势: "晚年能够享受子女的成就，生活幸福",
          教育建议: "应该重视子女的艺术教育，培养才艺特长"
        }
      }
    ]
  }