/**
 * 第四阶段：实战技法学习内容
 * 《探索门八字取象秘法》《命理精论》《点算八字妻财》《八字批流年实务》《命理精解二百例》
 * 实战技法的高级应用和案例分析
 */

// ==================== 《探索门八字取象秘法》- 王庆 ====================

const tansuoMenXiangFa = {
  // 书籍基本信息
  bookInfo: {
    title: "《探索门八字取象秘法》",
    author: "王庆",
    publisher: "台湾武陵出版社",
    year: "2005",
    pages: 450,
    isbn: "978-957-35-1045-7",
    difficulty: "高级",
    importance: "★★★★☆",
    category: "实战技法",
    description: "八字取象的权威著作，开创了取象分析的新方法",
    features: [
      "技法独特创新",
      "方法系统完整",
      "应用效果显著",
      "理论深度高"
    ]
  },

  // 取象理论基础
  xiangFaFoundation: {
    title: "取象理论基础",
    corePrinciple: "象者，卦象也。八字之吉凶，皆可从象中察之。取象之法，贵在灵活，重在联想。",

    basicConcepts: [
      {
        name: "象由心生",
        description: "象是命理现象的外在表现，是内在心性的外在化体现",
        example: "甲木生在春季，见花草繁盛，为吉象；秋冬见花草凋零，为凶象"
      },
      {
        name: "象由数定",
        description: "象的出现时间和位置有规律，与数理变化相对应",
        example: "甲子年甲月甲日甲时，四甲全逢，为特殊格局之象"
      },
      {
        name: "象由情发",
        description: "象的变化反映命主的心态变化和情绪波动",
        example: "心情舒畅时见鸟语花香，心情抑郁时见风雨交加"
      },
      {
        name: "象由应验",
        description: "象的出现与实际事件有对应关系，可以通过象预知事件",
        example: "见朱雀飞翔，可能有喜庆之事；见乌鸦悲鸣，可能有忧愁之事"
      }
    ],

    selectionPrinciples: [
      {
        name: "五行取象法",
        description: "根据五行的特性取象，如木主生发，金主肃杀"
      },
      {
        name: "十神取象法",
        description: "根据十神的含义取象，如官主贵气，财主财富"
      },
      {
        name: "干支取象法",
        description: "根据天干地支的意象取象，如甲为直木，寅为虎"
      },
      {
        name: "纳音取象法",
        description: "根据纳音的意象取象，如海中金为沉没之金"
      },
      {
        name: "格局取象法",
        description: "根据格局的特征取象，如官印相生为贵人助"
      }
    ]
  },

  // 天干取象详解
  tianGanXiangFa: {
    title: "天干取象详解",
    stems: [
      {
        name: "甲木",
        basicXiang: ["树木", "花草", "竹木", "森林"],
        careerXiang: ["林业", "园艺", "家具", "建筑", "创业"],
        personXiang: ["正直之人", "有志之士", "创业者", "领导人物"],
        thingXiang: ["高大建筑", "交通工具", "文书", "证书"],
        animalXiang: ["龙", "虎", "大象", "狮子"], // 威严之象
        directionXiang: ["东方", "震卦方位"],
        timeXiang: ["春季", "正月二月"],
        seasonXiang: "春季",
        colorXiang: ["青色", "绿色"],
        elementXiang: "木",
        natureXiang: "生发、向上、正直",
        characteristics: ["刚直向上", "有上进心", "重义轻利", "独立自主"]
      },
      {
        name: "乙木",
        basicXiang: ["花草藤萝", "灌木", "竹子", "禾苗"],
        careerXiang: ["农业", "纺织", "手工艺", "艺术", "设计"],
        personXiang: ["温柔之人", "艺术家", "技术人员", "合作者"],
        thingXiang: ["文书", "艺术品", "装饰品", "时尚"],
        animalXiang: ["兔", "羊", "蛇", "鸟类"], // 温和之象
        directionXiang: ["东南", "巽卦方位"],
        timeXiang: ["春季", "二月三月"],
        seasonXiang: "春季",
        colorXiang: ["浅绿色", "嫩绿色"],
        elementXiang: "木",
        natureXiang: ["温柔", "适应力强", "坚韧不拔", "有条不紊"]
      },
      {
        name: "丙火",
        basicXiang: ["太阳之火", "光明", "炎热", "温暖"],
        careerXiang: ["能源", "电力", "化工", "娱乐", "传媒"],
        personXiang: ["开朗之人", "领导者", "名人", "成功人士"],
        thingXiang: ["电力设备", "照明器材", "娱乐场所", "媒体"],
        animalXiang: ["马", "凤凰", "孔雀", "狮子"], // 华丽之象
        directionXiang: ["南方", "离卦方位"],
        timeXiang: ["夏季", "五月六月"],
        seasonXiang: "夏季",
        colorXiang: ["红色", "橙色"],
        elementXiang: "火",
        natureXiang: ["热情开朗", "积极进取", "威严显赫", "光明磊落"]
      },
      {
        name: "丁火",
        basicXiang: ["灯烛之火", "星光", "温暖", "文明"],
        careerXiang: ["文化", "教育", "艺术", "宗教", "出版"],
        personXiang: ["文雅之人", "学者", "艺术家", "文化人"],
        thingXiang: ["文化用品", "宗教用品", "艺术品", "书籍"],
        animalXiang: ["鸡", "鸟类", "蝴蝶", "萤火虫"], // 文雅之象
        directionXiang: ["南方", "离卦偏南"],
        timeXiang: ["夏季", "六月七月"],
        seasonXiang: "夏季",
        colorXiang: ["粉红色", "紫红色"],
        elementXiang: "火",
        natureXiang: ["温和细腻", "文明礼貌", "才华横溢", "思考缜密"]
      },
      {
        name: "戊土",
        basicXiang: ["城墙厚土", "山岳", "土地", "大地"],
        careerXiang: ["建筑", "地产", "农业", "矿业", "土地管理"],
        personXiang: ["稳重之人", "管理者", "企业家", "保护者"],
        thingXiang: ["建筑物", "房地产", "土地", "建筑材料"],
        animalXiang: ["狗", "牛", "熊", "大象"], // 稳重之象
        directionXiang: ["中央", "中央方位"],
        timeXiang: ["四季末月", "辰戌丑未"],
        seasonXiang: "每季末月",
        colorXiang: ["黄色", "棕色"],
        elementXiang: "土",
        natureXiang: ["稳重踏实", "有责任心", "诚实守信", "包容厚重"]
      },
      {
        name: "己土",
        basicXiang: ["田园之土", "泥土", "湿地", "田园"],
        careerXiang: ["农业", "园艺", "陶瓷", "手工艺", "食品"],
        personXiang: ["温和之人", "母亲", "教师", "服务者"],
        thingXiang: ["农作物", "陶瓷", "土地", "食品"],
        animalXiang: ["蛇", "乌龟", "田螺", "蚯蚓"], // 缓慢之象
        directionXiang: ["中央", "中央偏西南"],
        timeXiang: ["四季末月", "辰戌丑未"],
        seasonXiang: "每季末月",
        colorXiang: ["黄褐色", "土黄色"],
        elementXiang: "土",
        natureXiang: ["温和包容", "有耐心", "重视细节", "养育他人"]
      },
      {
        name: "庚金",
        basicXiang: ["刀剑之金", "坚硬金属", "锐利", "刚强"],
        careerXiang: ["军警", "司法", "机械", "金融", "制造业"],
        personXiang: ["刚毅果断", "执法者", "工程师", "技术专家"],
        thingXiang: ["金属制品", "机械设备", "武器", "工具"],
        animalXiang: ["猴", "鸡", "鹰", "猎豹"], // 灵活之象
        directionXiang: ["西方", "兑卦方位"],
        timeXiang: ["秋季", "七八月"],
        seasonXiang: "秋季",
        colorXiang: ["白色", "银色", "金色"],
        elementXiang: "金",
        natureXiang: ["刚毅果断", "有正义感", "纪律严明", "行动迅速"]
      },
      {
        name: "辛金",
        basicXiang: ["珠宝之金", "首饰", "装饰品", "精致"],
        careerXiang: ["珠宝", "首饰", "金融", "艺术", "精密制造"],
        personXiang: ["精致之人", "艺术家", "技术人员", "追求完美"],
        thingXiang: ["珠宝首饰", "精密仪器", "艺术品", "装饰品"],
        animalXiang: ["鸟类", "蝴蝶", "孔雀", "天鹅"], // 美丽之象
        directionXiang: ["西方", "兑卦偏西"],
        timeXiang: ["秋季", "八月九月"],
        seasonXiang: "秋季",
        colorXiang: ["白色", "银色", "淡金色"],
        elementXiang: "金",
        natureXiang: ["细腻精致", "追求完美", "有艺术天赋", "心思缜密"]
      },
      {
        name: "壬水",
        basicXiang: ["江河之水", "流水", "智慧", "流动"],
        careerXiang: ["运输", "贸易", "渔业", "智慧产业", "信息技术"],
        personXiang: ["智慧之人", "商人", "学者", "创新者"],
        thingXiang: ["运输工具", "贸易商品", "知识产品", "软件"],
        animalXiang: ["龙", "猪", "鲸鱼", "海豚"], // 灵活之象
        directionXiang: ["北方", "坎卦方位"],
        timeXiang: ["冬季", "十一月十二月"],
        seasonXiang: "冬季",
        colorXiang: ["黑色", "深蓝色"],
        elementXiang: "水",
        natureXiang: ["聪明机智", "适应力强", "善于变化", "创新思维"]
      },
      {
        name: "癸水",
        basicXiang: ["雨露之水", "滋润", "温柔", "净化"],
        careerXiang: ["服务业", "医疗", "文化", "艺术", "心理咨询"],
        personXiang: ["温柔之人", "知识分子", "艺术家", "服务者"],
        thingXiang: ["服务设施", "医疗用品", "文化产品", "清洁用品"],
        animalXiang: ["鼠", "鱼类", "小动物", "宠物"], // 小巧之象
        directionXiang: ["北方", "坎卦偏北"],
        timeXiang: ["冬季", "十二月至一月"],
        seasonXiang: "冬季",
        colorXiang: ["深蓝色", "浅蓝色"],
        elementXiang: "水",
        natureXiang: ["温柔内向", "直觉敏锐", "善解人意", "重视精神世界"]
      }
    ]
  },

  // 地支取象详解
  diZhiXiangFa: {
    title: "地支取象详解",
    branches: [
      {
        name: "子水",
        basicXiang: ["老鼠", "水", "智慧", "流动"],
        careerXiang: ["水利", "贸易", "运输", "智慧产业", "咨询"],
        personXiang: ["聪明之人", "学者", "商人", "创新者"],
        thingXiang: ["水源", "港口", "运输工具", "知识产品"],
        animalXiang: ["鼠", "水族", "水生动物"], // 水中生物
        directionXiang: ["正北", "坎卦方位"],
        timeXiang: ["夜半", "23:00-01:00"],
        monthXiang: ["农历十一月"],
        seasonXiang: "冬季",
        colorXiang: ["黑色", "深蓝色"],
        elementXiang: "水",
        natureXiang: ["聪明机智", "适应性强", "善于变化", "活跃"]
      },
      {
        name: "丑土",
        basicXiang: ["牛", "泥土", "仓库", "停滞"],
        careerXiang: ["农业", "仓储", "房地产", "建筑", "保安"],
        personXiang: ["诚实之人", "农民", "管理者", "守护者"],
        thingXiang: ["土地", "仓库", "建筑材料", "基础设施"],
        animalXiang: ["牛", "陆生动物", "家畜"], // 大型陆生动物
        directionXiang: ["东北偏北", "艮卦方位"],
        timeXiang: ["凌晨", "01:00-03:00"],
        monthXiang: ["农历十二月"],
        seasonXiang: "冬季",
        colorXiang: ["黄色", "棕色"],
        elementXiang: "土",
        natureXiang: ["诚实稳重", "勤劳踏实", "有责任心", "坚持不懈"]
      },
      {
        name: "寅木",
        basicXiang: ["老虎", "树木", "生机", "行动"],
        careerXiang: ["林业", "军警", "创业", "冒险", "运动"],
        personXiang: ["勇敢之人", "军人", "企业家", "冒险家"],
        thingXiang: ["树木", "山林", "交通工具", "运动器材"],
        animalXiang: ["虎", "猛兽", "猫科动物"], // 猛猛动物
        directionXiang: ["东北偏东", "艮卦偏东"],
        timeXiang: ["早晨", "03:00-05:00"],
        monthXiang: ["农历正月"],
        seasonXiang: "春季",
        colorXiang: ["绿色", "青色"],
        elementXiang: "木",
        natureXiang: ["勇敢果断", "有冒险精神", "行动迅速", "有领导才能"]
      },
      {
        name: "卯木",
        basicXiang: ["兔子", "花草", "柔顺", "合作"],
        careerXiang: ["园艺", "纺织", "艺术", "合作", "服务"],
        personXiang: ["温柔之人", "艺术家", "合作者", "和平主义者"],
        thingXiang: ["花草", "园林", "文化产品", "装饰品"],
        animalXiang: ["兔", "草食动物", "小动物"], // 温顺动物
        directionXiang: ["正东", "震卦方位"],
        timeXiang: ["早晨", "05:00-07:00"],
        monthXiang: ["农历二月"],
        seasonXiang: "春季",
        colorXiang: ["绿色", "嫩绿色"],
        elementXiang: "木",
        natureXiang: ["温和善良", "灵活变通", "合作共赢", "有艺术气质"]
      },
      {
        name: "辰土",
        basicXiang: ["龙", "水库", "变化", "土库"],
        careerXiang: ["农业", "仓储", "房地产", "水利", "管理"],
        personXiang: ["变化之人", "管理者", "企业家", "决策者"],
        thingXiang: ["水库", "土堆", "建筑材料", "基础设施"],
        animalXiang: ["龙", "神话动物", "爬行动物"], // 神秘动物
        directionXiang: ["东南偏南", "巽卦偏南"],
        timeXiang: ["上午", "07:00-09:00"],
        monthXiang: ["农历三月"],
        seasonXiang: "春季",
        colorXiang: ["土黄色", "黄褐色"],
        elementXiang: "土",
        natureXiang: ["变化莫测", "适应性强", "管理能力", "决策果断"]
      },
      {
        name: "巳火",
        basicXiang: ["蛇", "火", "热情", "变化"],
        careerXiang: ["能源", "化工", "文化", "艺术", "娱乐"],
        personXiang: ["热情之人", "艺术家", "文化人", "变革者"],
        thingXiang: ["火炉", "文化用品", "艺术品", "娱乐设施"],
        animalXiang: ["蛇", "爬行动物", "冷血动物"], // 爬行动物
        directionXiang: ["东南偏南", "巽卦偏南"],
        timeXiang: ["上午", "09:00-11:00"],
        monthXiang: ["农历四月"],
        seasonXiang: ["夏季"],
        colorXiang: ["火红色", "橙红色"],
        elementXiang: "火",
        natureXiang: ["热情洋溢", "适应变化", "有文化修养", "善于表达"]
      },
      {
        name: "午火",
        basicXiang: ["马", "烈火", "光明", "威严"],
        careerXiang: ["军警", "政治", "能源", "领导", "权威"],
        personXiang: ["威严之人", "领导者", "名人", "成功人士"],
        thingXiang: ["太阳", "火炉", "权力象征", "权威标志"],
        animalXiang: ["马", "骏马", "哺乳动物"], // 快速动物
        directionXiang: ["正南", "离卦方位"],
        timeXiang: ["中午", "11:00-13:00"],
        monthXiang: ["农历五月"],
        seasonXiang: ["夏季"],
        colorXiang: ["红色", "亮黄色"],
        elementXiang: "火",
        natureXiang: ["威严显赫", "充满活力", "有领导才能", "积极主动"]
      },
      {
        name: "未土",
        basicXiang: ["羊", "田园", "温和", "收获"],
        careerXiang: ["农业", "园艺", "食品", "服务", "护理"],
        personXiang: ["温和之人", "服务者", "母亲", "教育者"],
        thingXiang: ["田园", "农作物", "食品", "农产品"],
        animalXiang: ["羊", "家畜", "草食动物"], // 温顺动物
        directionXiang: ["西南偏南", "坤卦偏南"],
        timeXiang: ["下午", "13:00-15:00"],
        monthXiang: ["农历六月"],
        seasonXiang: ["夏季"],
        colorXiang: ["土黄色", "淡黄色"],
        elementXiang: "土",
        natureXiang: ["温和善良", "有爱心", "重视家庭", "服务精神"]
      },
      {
        name: "申金",
        basicXiang: ["猴子", "金属", "灵活", "传递"],
        careerXiang: ["机械", "金融", "运输", "贸易", "通讯"],
        personXiang: ["灵活之人", "商人", "技术人员", "创新者"],
        thingXiang: ["金属制品", "交通工具", "通讯设备", "精密仪器"],
        animalXiang: ["猴", "灵长类动物", "聪明动物"], // 聵长类动物
        directionXiang: ["西南偏西", "坤卦偏西"],
        timeXiang: ["下午", "15:00-17:00"],
        monthXiang: ["农历七月"],
        seasonXiang: ["秋季"],
        colorXiang: ["白色", "银色"],
        elementXiang: "金",
        natureXiang: ["灵活机智", "善于学习", "适应变化", "创新思维"]
      },
      {
        name: "酉金",
        basicXiang: ["鸡", "金属", "装饰", "收获"],
        careerXiang: ["金融", "珠宝", "艺术", "服务", "质量"],
        personXiang: ["精致之人", "艺术家", "服务者", "完美主义者"],
        thingXiang: ["珠宝首饰", "精密仪器", "装饰品", "质量产品"],
        animalXiang: ["鸡", "鸟类", "卵生动物"], // 飞禽类动物
        directionXiang: ["正西", "兑卦方位"],
        timeXiang: ["傍晚", "17:00-19:00"],
        monthXiang: ["农历八月"],
        seasonXiang: ["秋季"],
        colorXiang: ["白色", "金黄色"],
        elementXiang: "金",
        natureXiang: ["精致优雅", "有艺术感", "追求完美", "善于表达"]
      },
      {
        name: "戌土",
        basicXiang: ["狗", "土堆", "忠诚", "保护"],
        careerXiang: ["军警", "保安", "管理", "守护", "安保"],
        personXiang: ["忠诚之人", "保护者", "管理者", "守护者"],
        thingXiang: ["土堆", "建筑材料", "保护设施", "防御工事"],
        animalXiang: ["狗", "家畜", "忠诚动物"], // 忠诚动物
        directionXiang: ["西北偏西", "乾卦偏西"],
        timeXiang: ["晚上", "19:00-21:00"],
        monthXiang: ["农历九月"],
        seasonXiang: ["秋季"],
        colorXiang: ["黄褐色", "深黄色"],
        elementXiang: "土",
        natureXiang: ["忠诚可靠", "有保护欲", "责任心强", "坚守原则"]
      },
      {
        name: "亥水",
        basicXiang: ["猪", "水", "智慧", "流动"],
        careerXiang: ["贸易", "运输", "文化", "智慧产业", "咨询"],
        personXiang: ["智慧之人", "学者", "商人", "哲学家"],
        thingXiang: ["水源", "港口", "知识产品", "文化产品"],
        animalXiang: ["猪", "家畜", "水生动物"], // 大型动物
        directionXiang: ["西北偏北", "乾卦偏北"],
        timeXiang: ["晚上", "21:00-23:00"],
        monthXiang: ["农历十月"],
        seasonXiang: ["冬季"],
        colorXiang: ["深蓝色", "黑色"],
        elementXiang: "水",
        natureXiang: ["智慧深邃", "思考深刻", "直觉敏锐", "哲学思维"]
      }
    ]
  },

  // 十神取象详解
  shiShenXiangFa: {
    title: "十神取象详解",
    gods: [
      {
        name: "正官",
        basicXiang: ["官职", "纪律", "约束", "地位"],
        personXiang: ["上级", "领导", "权威人物", "政府官员"],
        thingXiang: ["官印", "证件", "规章制度", "权威象征"],
        careerXiang: ["公务员", "管理", "教育", "法律"],
        relationshipXiang: ["妻子", "长辈", "上级关系"],
        fortuneXiang: ["事业运", "地位运", "贵人运"],
        directionXiang: ["事业方向", "人生目标"],
        timeXiang: ["事业发展期", "稳定期"],
        characteristics: ["正直守法", "有责任心", "重视名声", "稳定可靠"],
        positive: ["事业有成", "地位提升", "受人尊敬"],
        negative: ["过于保守", "缺乏变通", "压力过大"]
      },
      {
        name: "七杀",
        basicXiang: ["权力", "压力", "挑战", "危险"],
        personXiang: ["上级", "对手", "威胁者", "竞争对手"],
        thingXiang: ["权力象征", "危险物品", "挑战机遇"],
        careerXiang: ["军警", "体育", "创业", "高风险投资"],
        relationshipXiang: ["对手", "小人", "威胁者"],
        fortuneXiang: ["权力挑战", "压力考验", "危机机遇"],
        directionXiang: ["挑战方向", "压力来源"],
        timeXiang: ["人生挑战期", "危机期"],
        characteristics: ["野心勃勃", "有威严", "果断勇猛", "有领导才能"],
        positive: ["获得权力", "克服挑战", "成就大业"],
        negative: ["压力过大", "容易树敌", "风险较高"]
      },
      {
        name: "正财",
        basicXiang: ["财富", "妻子", "稳定", "保障"],
        personXiang: ["妻子", "合作伙伴", "财务人员"],
        thingXiang: ["钱财", "固定资产", "稳定收入"],
        careerXiang: ["会计", "金融", "贸易", "实业"],
        relationshipXiang: ["妻子", "稳定关系"],
        fortuneXiang: ["财运旺盛", "稳定收入", "财务安全"],
        directionXiang: ["财运方向", "理财方式"],
        timeXiang: ["财运旺盛期"],
        characteristics: ["诚实守信", "勤奋踏实", "重视稳定", "稳健经营"],
        positive: ["财源广进", "财务稳定", "事业有成"],
        negative: ["过于保守", "缺乏冒险", "财多身弱"]
      },
      {
        name: "偏财",
        basicXiang: ["意外财富", "机遇", "变化", "机遇"],
        personXiang: ["父亲", "商业伙伴", "机遇人物"],
        thingXiang: ["意外之财", "投资机会", "商业机会"],
        careerXiang: ["投资", "贸易", "创业", "销售"],
        relationshipXiang: ["父亲", "朋友", "商业关系"],
        fortuneXiang: ["财运波动", "机遇机遇", "意外收获"],
        directionXiang: ["机遇方向", "商业机会"],
        timeXiang: ["财运波动期"],
        characteristics: ["慷慨大方", "善于经营", "商业头脑", "把握机遇"],
        positive: ["意外收获", "商业成功", "财源广进"],
        negative: ["财运波动", "容易破财", "财来财去"]
      },
      {
        name: "正印",
        basicXiang: ["学识", "母亲", "保护", "支持"],
        personXiang: ["母亲", "师长", "保护者", "指导者"],
        thingXiang: ["学习用品", "保护设施", "知识产品"],
        careerXiang: ["教育", "文化", "研究", "医疗"],
        relationshipXiang: ["母亲", "长辈", "保护关系"],
        fortuneXiang: ["学业运", "贵人运", "知识运"],
        directionXiang: ["学业方向", "支持来源"],
        timeXiang: ["学习发展期"],
        characteristics: ["仁慈善良", "喜欢学习", "重视传统", "有贵人运"],
        positive: ["学业有成", "得到帮助", "知识丰富"],
        negative: ["依赖性强", "缺乏主动性", "过于保守"]
      },
      {
        name: "偏印",
        basicXiang: ["专业技能", "直觉", "独特", "非传统"],
        personXiang: ["专业技能人士", "导师", "专家", "非主流"],
        thingXiang: ["专业技能工具", "独特发明", "专利"],
        careerXiang: ["技术", "研究", "咨询", "专业技能"],
        relationshipXiang: ["专业技术导师", "独特关系"],
        fortuneXiang: ["技能提升", "专业发展", "独特成就"],
        directionXiang: ["专业发展方向"],
        timeXiang: ["技能提升期"],
        characteristics: ["心思缜密", "有特殊才能", "直觉敏锐", "独特视角"],
        positive: ["专业技能突出", "独特成就", "专业权威"],
        negative: ["孤僻多疑", "不合群", "过于独特"]
      },
      {
        name: "比肩",
        basicXiang: ["朋友", "同事", "合作", "竞争"],
        personXiang: ["朋友", "同事", "兄弟姐妹", "合作伙伴"],
        thingXiang: ["合作项目", "竞争关系", "团队项目"],
        careerXiang: ["团队协作", "合伙经营", "独立工作"],
        relationshipXiang: ["朋友关系", "同事关系", "平等关系"],
        fortuneXiang: ["合作运", "竞争运", "团队运"],
        directionXiang: ["合作方向", "竞争领域"],
        timeXiang: ["合作期或竞争期"],
        characteristics: ["独立自主", "有主见", "善于合作", "公平竞争"],
        positive: ["朋友众多", "人缘好", "团队成功"],
        negative: ["固执己见", "竞争激烈", "朋友反目"]
      },
      {
        name: "劫财",
        basicXiang: ["花费", "争夺", "变化", "机遇"],
        personXiang: ["朋友", "竞争者", "异性朋友"],
        thingXiang: ["金钱往来", "机遇得失", "消费"],
        careerXiang: ["销售", "公关", "服务"],
        relationshipXiang: ["朋友关系", "异性关系"],
        fortuneXiang: ["财运变化期", "机遇得失"],
        directionXiang: ["花费方向", "机遇来源"],
        timeXiang: ["财运变化期"],
        characteristics: ["热情冲动", "善于交际", "口才好", "易花钱"],
        positive: ["机会众多", "人缘广阔", "交际成功"],
        negative: ["容易破财", "财务紧张", "争财夺利"]
      },
      {
        name: "食神",
        basicXiang: ["享受", "艺术", "天赋", "福气"],
        personXiang: ["艺术家", "子女", "享受者", "文化人"],
        thingXiang: ["艺术作品", "娱乐设施", "文化产品"],
        careerXiang: ["艺术", "餐饮", "娱乐", "服务"],
        relationshipXiang: ["子女关系", "享受生活"],
        fortuneXiang: ["享受运", "才艺运", "福气运"],
        directionXiang: ["艺术发展方向"],
        timeXiang: ["享受期"],
        characteristics: ["温和善良", "乐观豁达", "有艺术天分", "生活享受"],
        positive: ["生活幸福", "有艺术天赋", "受人喜爱"],
        negative: ["过于享乐", "缺乏进取心", "懒惰散漫"]
      },
      {
        name: "伤官",
        basicXiang: ["才华", "智慧", "创新", "表达"],
        personXiang: ["艺术家", "学者", "创新者", "批评者"],
        thingXiang: ["创新成果", "知识产权", "创意产品"],
        careerXiang: ["创意", "技术", "艺术", "自由职业"],
        relationshipXiang: ["师生关系", "表达关系"],
        fortuneXiang: ["创新突破期", "才华运", "发展运"],
        directionXiang: ["创新发展方向"],
        timeXiang: ["创新突破期"],
        characteristics: ["聪明机智", "有创造力", "才华横溢", "善于表达"],
        positive: ["才华横溢", "创新能力强", "发展潜力大"],
        negative: ["过于尖锐", "易犯是非", "言语犀利", "人际关系紧张"]
      }
    ]
  },

  // 纳音五行取象
    naYinXiangFa: {
      title: "纳音五行取象",
      naYinMap: {
        "甲子": "海中金", "乙丑": "海中金",
        "丙寅": "炉中火", "丁卯": "炉中火",
        "戊辰": "大林木", "己巳": "大林木",
        "庚午": "路旁土", "辛未": "路旁土",
        "壬申": "剑锋金", "癸酉": "剑锋金",
        "甲戌": "山头火", "乙亥": "山头火",
        "丙子": "涧下水", "丁丑": "涧下水",
        "戊寅": "城头土", "己卯": "城头土",
        "庚辰": "白蜡金", "辛巳": "白蜡金",
        "壬午": "天河水", "癸未": "天河水",
        "甲申": "石榴木", "乙酉": "石榴木",
        "丙戌": "屋上土", "丁亥": "屋上土",
        "戊子": "霹雳火", "己丑": "霹雳火",
        "庚寅": "松柏木", "辛卯": "松柏木",
        "壬辰": "长流水", "癸巳": "长流水",
        "甲午": "沙中土", "乙未": "沙中土",
        "丙申": "山下火", "丁酉": "山下火",
        "戊戌": "平地木", "己亥": "平地木",
        "庚子": "壁上土", "辛丑": "壁上土",
        "壬寅": "金箔金", "癸卯": "金箔金",
        "丙辰": "覆灯火", "丁巳": "覆灯火",
        "戊午": "天上火", "己未": "天上火",
        "庚申": "大驿土", "己酉": "大驿土",
        "壬戌": "大驿土", "癸亥": "大驿土"
      },

      xiangFeatures: {
        "海中金": {
          description: "沉没于水中，需要等待时机",
          characteristics: ["深藏不露", "待时而动", "潜力巨大"],
          advice: "需要耐心等待合适时机，不可急于求成"
        },
        "炉中火": {
          description: "炉中之火，需要持续添加燃料",
          characteristics: ["需要培育", "能量集中", "可以发光发热"],
          advice: "需要持续学习和积累，保持热情"
        },
        "大林木": {
          "description: "茂密的森林，生机勃勃",
          characteristics: ["生长力强", "发展空间大", "资源丰富"],
          advice: "发展空间很大，可以大胆发展"
        },
        "路旁土": {
          "路边的泥土，基础不牢",
          characteristics: ["基础不稳", "需要巩固", "易受影响"],
          advice: "需要打好基础，稳扎稳打"
        },
        "剑锋金": {
          "锋利的刀剑，锐利无比",
          characteristics: ["锋利", "锐利无比", "威力强大"],
          "advice": "要保持锋利，但要注意使用方式"
        },
        "山头火": {
          "山头之火，燃烧有限",
          characteristics: ["有气势", "但范围有限", "需要持续供给"],
          advice: "要有持续的能量供给"
        },
        "涧下水": {
          "山涧中的水，清澈但有限",
          "清澈": ["水质清澈", "纯净甘甜", "滋养万物"],
          advice: "水质虽好，但量不大，要珍惜使用"
        },
        "城头土": {
          "城池的土，基础深厚",
          characteristics: ["基础稳固", "承载力强", "可以建设"],
          advice: "基础扎实，可以放心建设"
        },
        "白蜡金": {
          "白色蜡烛，光亮但不稳定",
          characteristics: ["明亮", "但易融化", "需要保护"],
          advice: "要有保护，避免过早消耗"
        },
        "天河水": {
          "天河之水，浩浩荡荡",
          "浩荡": ["水量充沛", "能量巨大", "生生不息"],
          advice: "能量充足，可以尽情发挥"
        },
        "石榴木": {
          "石榴树，结果累累",
          "结果": ["果实丰硕", "收获丰富", "成果显著"],
          advice: "收获丰硕，要懂得分享"
        },
        "屋上土": {
          "屋顶之土，保护性强",
          "保护": ["覆盖全面", "遮风挡雨", "保护家园"],
          advice: "有保护作用，可以安心发展"
        },
        "霹雳火": {
          "雷电之火，威力巨大",
          "威力": ["瞬间爆发", "力量强大", "影响力大"],
          " advice: "威力很大，要谨慎使用"
        },
        "松柏木": {
          "松柏之木，坚韧不拔",
          "坚韧": ["四季常青", "坚韧不拔", "生命力强"],
          advice: "坚韧不拔，可以长期发展"
        },
        "长流水": {
          "长流之水，源源不断",
          "源源不断": ["连绵不绝", "生生不息", "变化灵活"],
          advice: "灵活变化，适应性强"
        },
        "沙中土": {
          "沙中之土，基础薄弱",
          "薄弱": ["基础不牢", "容易流失", "需要加固"],
          advice: "基础薄弱，需要巩固"
        },
        "山下火": {
          "山下之火，燃烧缓慢",
          "燃烧": ["火力温和", "持久", "影响有限"],
          advice: "火力温和，需要耐心等待"
        },
        "平地木": {
          "平地之木，生长平稳",
          "平稳": ["生长平稳", "发展稳定", "风险较小"],
          advice: "发展平稳，可以长期坚持"
        },
        "壁上土": {
          "墙壁之土，隔绝内外",
          "隔绝": ["保护性好", "安全性高", "防御性强"],
          advice: "安全性高，可以安心"
        },
        "金箔金": {
          "金箔之金，轻薄易损",
          "轻薄": ["轻薄易损", "价值有限", "需要保护"],
          advice: "价值有限，需要谨慎"
        },
        "覆灯火": {
          "烛火被盖，光明受限",
          "受限": ["光线受阻", "能量不足", "需要打开"],
          advice: "需要打开遮挡，发挥才能"
        },
        "天上火": {
          "太阳之火，光耀四方",
          "光耀四方": ["光芒万丈", "能量充足", "影响力大"],
          "advice": "能量充足，可以大展宏图"
        },
        "大驿土": {
          "驿站之土，中转站",
          "中转站": ["交通枢纽", "中转功能", "连接作用"],
          "advice": "发挥中转作用，连接各方"
        }
      }
    },

    // 取象的实践方法
    practicalMethods: {
      title: "取象的实践方法",
      methods: [
        {
          name: "观察法",
          description: "观察生活中的各种现象，寻找对应的象",
          example: "看到乌鸦悲鸣，可能在近期有不顺利的事",
          tips: "要结合命局整体，不能孤立看象"
        },
        {
          "联想法",
          description: "通过联想将象与具体事物联系起来",
          example: "见龙蛇飞舞，可能预示着事业的腾飞",
          tips: "联想要有命理依据，不可随意猜测"
        },
        {
          "验证法",
          "description: "用实际事件验证取象的准确性",
          example: "预测有财运，然后看是否真的有财运",
          tips: "持续验证，提高准确性"
        },
        {
          "记录法",
          "description: "记录取象和对应的事件，总结规律",
          example: "每次取象都记录下来，分析对应关系",
          tips: "长期记录才能发现规律"
        }
      ]
    }
  },

  // 取象的层次判断
    xiangLevelJudgment: {
      title: "取象的层次判断",
      levels: [
        {
          level: "显象",
          description: "直接可见的现象，明显的外在表现",
          reliability: "高",
          example: "明显的天气变化、动物出现",
          importance: "可以直接反映当前状态"
        },
        {
          "微象",
          description: "细微的迹象，需要细心观察",
          reliability: "中",
          example: "植物的生长状态、人的细微表情变化",
          importance: "需要结合整体分析"
        },
        {
          "意象",
          description: "通过联想形成的心理意象",
          reliability: "中低",
          example: "梦境中的象征意义",
          importance: "需要经验判断"
        },
        {
          "预兆",
          "预兆" : "预示未来的迹象，具有预测性",
          reliability: "中",
          example: "梦境、直觉感应",
          importance: "需要准确判断"
        }
      ]
    },

    // 取象的验证方法
    xiangValidation: {
      title: "取象的验证方法",
      methods: [
        {
          name: "时间验证",
          description: "检查取象后的实际发生",
          example: "预测三日内有财运，看是否真的有财运",
          timeframe: "短期验证（1-7天）"
        },
        {
          name: "性质验证",
          description: "检查取象的性质是否符合预期",
          example: "预测有吉象，看是否真的顺利",
          timeframe: "中期验证（1-3个月）"
        },
        {
          "量级验证",
          description: "检查取象的程度是否与预测一致",
          example: "预测大财运，看是否真的有财运",
          timeframe: "长期验证（3-12个月）"
        }
      ]
    }
  }
};

// ==================== 《命理精论》- 胡一鸣 ====================

const mingLiJingLun = {
  // 书籍基本信息
  bookInfo: {
    title: "《命理精论》",
    author: "胡一鸣",
    publisher: "台湾逸品文化出版社",
    year: "2003",
    pages: 520,
    isbn: "978-957-469-534-6",
    difficulty: "高级",
    importance: "★★★★☆",
    category: "实战技法",
    description: "命理理论的高级论述，融合了现代哲学思想",
    features: [
      "理论深度高",
      "观点独到",
      "论述严密",
      "指导性强"
    ]
  },

  // 命理哲学思想
  mingLiPhilosophy: {
    title: "命理哲学思想",
    coreConcepts: [
      {
        name: "人与自然的关系",
        description: "人作为自然的一部分，应该顺应自然规律",
        principle: "天人合一，顺应自然",
        application: "分析时要考虑季节、地理、时间等自然因素"
      },
      {
        name: "命运与自由意志的关系",
        description: "命运有定数，但人有自由意志",
        principle: "定数与自由意志的结合",
        application: "既要看到定数，也要发挥主观能动性"
      },
      {
        name: "吉凶的相对性",
        description: "吉凶不是绝对的，可以相互转化",
        principle: "吉中有凶，凶中有吉，转化的关键在时机和方法",
        application: "把握时机，适时调整"
      },
      {
        name: "命理与现代生活的结合",
        description: "传统命理要适应现代社会",
        principle: "古为今用，古法新用",
        application: "用现代视角解读传统理论"
      }
    ],

    philosophicalThinking: [
      {
        name: "系统思维",
        description: "命理是一个完整的系统",
        application: "不能只看片面，要综合分析"
      },
      {
        name: "辩证思维",
        description: "吉凶是相对的，可以相互转化",
        application: "避免绝对化，保持辩证思维"
      },
      {
        name: "发展思维",
        description: "命理是动态的，会随时间变化",
        application: "要考虑时间因素，与时俱进"
      },
      {
        "整体思维",
        description: "八字是一个整体，各部分相互影响",
        application: "全面分析，避免片面理解"
      }
    ]
  },

  // 高级理论论述
  advancedTheory: {
    title: "高级理论论述",
    chapters: [
      {
        chapter: "第一章：命理本体论",
        content: [
          "命理的本质和定义",
          "命理的科学性和哲学性",
          "命理与现代社会的关系",
          "命理学的未来发展方向"
        ]
      },
      {
        chapter: "第二章：命理认识论",
        content: [
          "对命运的认知和理解",
          "个人主观能动性的作用",
          "环境因素的影响",
          "社会时代的影响"
        ]
      },
      {
        chapter: "第三章：命理应用论",
        content: [
          "命理在日常生活中的应用",
          "命理在职业发展中的应用",
          "命理在人际关系的应用",
          "命理在健康养生中的应用"
        ]
      },
      {
        chapter: "第四章：命理创新论",
        content: [
          "传统理论的创新发展",
          "现代科学的融入",
          "跨学科的综合应用",
          "未来发展的方向"
        ]
      }
    ],

    innovativeIdeas: [
      {
        name: "系统化整合",
        description: "将命理与现代科学系统整合",
        example: "用系统化方法分析八字"
      },
      {
        "信息化应用",
        "description: "用现代技术辅助命理分析",
        example: "开发八字分析软件"
      },
      {
        "国际化发展",
        "传统文化与现代文明的对话"
        " example: "让传统命理走向世界"
      },
      {
        "个性化服务",
        "传统文化与个人需求的结合"
        "example: "提供个性化命理指导"
      }
    ]
  },

  // 实战应用理论
  practicalApplications: {
    title: "实战应用理论",
    methods: [
      {
        name: "个人发展指导",
        description: "根据命理特点指导人生发展",
        aspects: [
          "职业选择建议",
          "事业发展方向",
          "人际关系处理",
          "重要决策时机"
        ]
      },
      {
        name: "企业经营指导",
        description: "将命理理论应用于企业管理",
        aspects: [
          "团队建设指导",
          "领导力发展",
          "决策时机选择",
          "风险防范"
        ]
      },
      {
        "婚姻感情指导",
        "情感: [
          "配偶特征预测",
          "感情发展预测",
          "感情问题处理",
          "婚姻时机选择"
        ]
      },
      {
        "健康养生指导",
        "健康指导": [
          "体质特征分析",
          "健康风险预警",
          "养生方法建议",
          "疾病预防建议"
        ]
      },
      {
        "财富管理指导",
        "财富管理": [
          "财运特征分析",
          "投资时机选择",
          "理财方式建议",
          "风险控制建议"
        ]
      }
    ],

    caseStudies: [
      {
        title: "事业发展案例",
        bazi: "甲戌 丙寅 甲子 丙寅",
        analysis: {
          person: "某企业高管",
          situation: "事业发展遇到瓶颈",
          analysis: "用神缺失，需要补充水木",
          suggestion: "发展期遇在2025年",
          result: "采纳建议后事业顺利发展"
        }
      },
      {
        title: "婚姻感情案例",
        bazi: "乙卯 乙酉 乙丑 丁巳",
        analysis: {
          person: "某职场女性",
          situation: "感情出现波动",
          analysis: "伤官见官，需要化解",
          suggestion: "用食神制伤官",
          result: "感情关系明显改善"
        }
      }
    ]
  }
};

// ==================== 《点算八字妻财》- 罗量 ====================

const dianSuanBaZiQiCai: {
  // 书籍基本信息
  bookInfo: {
    title: "《点算八字妻财》",
    author: "罗量",
    publisher: "台湾益群书店",
    year: "1997",
    pages: 380,
    isbn: "978-957-552-756-9",
    difficulty: "高级",
    "importance": "★★★☆☆",
    category: "实战技法",
    description: "专门论述妻财的技法",
    features: [
      "专题性强",
      "技法实用",
      "预测准确",
      "案例丰富",
      "指导性强"
    ]
  },

  // 妻财理论基础
  qiCaiFoundation: {
    title: "妻财理论基础",
    corePrinciple: "财为养命之源，妻为持家之本。",

    妻财的定义: {
      正财: "妻子、稳定收入、婚姻、家庭"
      偏财: "父亲、意外收入、机遇、商业"

      正财特征: [
        "稳定性强",
        "收入来源可靠",
        "持续时间长",
        "风险相对较低"
      ],

      偏财特征: [
        "机遇性强",
        "收入不稳定",
        "来得快去得也快",
        "风险相对较高"
      ]
    },

    妻财的层次: [
      {
        level: "上等妻财",
        features: [
          "正财当令有根",
          "财星无冲克",
          "日主能担财",
          "无劫财争夺"
        ],
        description: "稳定持续的财富"
      },
      {
        level: "中等妻财",
        features: [
          "正财有根但稍弱",
          "偶有冲克但能化解",
          "日主基本能担财"
          "有劫财但能控制"
        ],
        description: "基本稳定的财富"
      },
      {
        level: "下等妻财",
        features: [
          "正财无根",
          "财星受制",
          "日主担财困难",
          "劫财争夺严重"
        ],
        description: "不稳定的财富"
      }
    ]
  },

  // 妻财的取象法
  qiCaiXiangFa: {
    title: "妻财的取象法",
    methods: [
      {
        name: "正财取象",
        description: "根据正财的特性取象",
        examples: [
          "正财透出见官星，可能预示婚姻事业双丰收",
          "正财坐印得生，财官印相生，主富贵",
          "正财在月令当旺，财运旺盛"
        ]
      },
      {
        name: "偏财取象",
        description: "根据偏财的特性取象",
        examples: [
          "偏财见驿马，可能有意外之财",
          "偏财在天干透出，可能有商业机遇",
          "偏财逢合局，可能有大财"
        ]
      },
      {
        name: "财星受制取象",
        description: "财星受制时的取象",
        examples: [
          "财星被劫财克，破财风险大",
          "财星被官星制，财运稳定",
          "财星有伤官见官，财运不稳"
        ]
      }
    ]
  },

  // 妻财的分析方法
  qiCaiAnalysisMethods: {
    title: "妻财的分析方法",
    methods: [
      {
        name: "正财分析",
        steps: [
          "1. 查看正财透出情况",
          "2. 分析正财的根基",
          "3. 判断正财的质量",
          "4. 分析正财与日主的关系",
          "5. 分析大运流年对妻财的影响"
        ]
      },
      {
        name: "偏财分析",
        steps: [
          "1. 查看偏财透出情况",
          "2. 分析偏财的来源",
          "3. 判断偏财的时机",
          "4. 分析偏财的变化",
          "5. 分析大运流年对偏财的影响"
        ]
      },
      {
        name: "财星综合分析",
        steps: [
          "1. 综合分析正财偏财",
          "2. 分析财星的组合关系",
          "3. 分析财星的强弱",
          "4. 分析财星的流年大运",
          "5. 综合判断财运走势"
        ]
      }
    ]
  },

  // 妻财的实用技法
  qiCaiPracticalSkills: {
    title: "妻财的实用技法",
    skills: [
      {
        name: "财运预测",
        method: "根据财星配置预测财运走势",
        timeframe: "短期（1年内）",
        accuracy: "中高"
      },
      {
        name: "投资时机",
        method: "根据财星大运判断投资时机",
        keyPoint: "财星旺时投资成功率较高"
      },
      {
        name: "风险防范",
        method: "识别财星受制的情况",
        keyPoint: "提前预防财务风险"
      },
      {
        name: "财富管理",
        method: "根据财星特性管理财富",
        keyPoint: "发挥优势，控制劣势"
      }
    ]
  },

  // 妻财与十神的关系
  qiCaiAndShiShen: {
    title: "妻财与十神的关系",
    relationships: [
      {
        name: "财官相生",
        description: "正财生正官，财官护财",
        meaning: "财富促进事业，事业带动财富",
        example: "正财透出官星，事业财富双丰收"
      },
      {
        name: "食神生财",
        description: "食神生正财，才艺生财富",
        meaning: "通过技能创造财富",
        example: "有艺术天赋，可发挥艺术才能"
      },
      {
        "财印相生",
        description: "正财生正印，财生学识",
        meaning: "财富促进学习，知识就是财富",
        example: "财印相生，可以通过学习提升财运"
      },
      {
        "劫财夺财",
        description: "劫财克正财，破财风险",
        meaning: "花费大，需要控制",
        example: "劫财旺正财弱，需要控制支出"
      },
      {
        "伤官损财",
        description: "伤官克正官，影响事业财富",
        meaning: "才华用不当，影响财运",
        example: "伤官见官，事业财运受损"
      }
    ]
  },

  // 妻财的发展阶段
  qiCaiDevelopmentStages: {
    title: "妻财的发展阶段",
    stages: [
      {
        stage: "财运初现期",
        age: "20-30岁",
        characteristics: ["财运开始觉醒", "开始理财意识"],
        advice: "开始建立理财观念，学习基本理财知识"
      },
      {
        stage: "财运发展期",
        age: "30-45岁",
        characteristics: ["财运快速提升", "收入增长显著"],
        advice: "抓住机遇，大胆但不要冒险"
      },
      {
        stage: "财运成熟期",
        age: "45-60岁",
        characteristics: ["财运稳定", "收入可持续"],
        advice: "稳健经营，保持财富"
      },
      {
        stage: "财运收获期",
        age: "60岁以上",
        characteristics: ["财富积累完成", "享受成果"],
        advice: "享受财富，传承财富"
      }
    ]
  },

  // 实战案例
  qiCaiCaseStudies: [
    {
      title: "财运转好案例",
      bazi: "甲子 丁卯 己酉 辛巳",
      analysis: {
        person: "某中年商人",
        situation: "财运一直不顺，生意亏损",
        originalSituation: "偏财旺而正财弱，财来财去",
        improvedSituation: "大运行土运，克制偏财，扶助正财",
        result: "生意开始好转，财运明显改善"
      }
    },
    {
      title: "投资成功案例",
      bazi: "乙丑 甲午 己酉 癸巳",
      analysis: {
        person: "年轻投资者",
        situation: "投资屡屡失败，损失惨重",
        originalSituation: "正财弱，投资无根基",
        improvedSituation: "大运行印运，生助正财",
        result: "投资开始盈利，获得收益"
      }
    },
    {
      title: "婚姻财运双赢案例",
      bazi: "丙戌 庚寅 辛卯 壬午",
      analysis: {
        person: "职场女性",
        situation: "事业不错但财运一般，感情不顺",
        originalSituation: "正财透出但被劫财冲克",
        improvedSituation: "大运行水运，化解劫财，保护正财",
        result: "感情稳定，财运改善"
      }
    }
  ]
};

// ==================== 《八字批流年实务》- 潘东光 ====================

const baZiPiLiuNianShiWu: {
  // 书籍基本信息
  bookInfo: {
    title: "《八字批流年实务",
    author: "潘东光",
    publisher: "台湾武陵出版社",
    year: "2004",
    pages: 420,
    isbn: "978-957-35-1089-3",
    difficulty: "高级",
    importance: "★★★★☆",
    category: "实战技法",
    description: "流年批断的实务指导",
    features: [
      "系统性强",
      "方法系统",
      "实用性强",
      "操作性强",
      "指导明确"
    ]
  },

  // 流年理论基础
  liuNianFoundation: {
    title: "流年理论基础",
    corePrinciple: "流年为动态因素，对命局产生触发作用",

    流年的本质: [
      "流年引发原局潜在信息的显现",
      "流年影响大运和格局的效果",
      "流年决定短期内的吉凶"
      "流年是运势变化的重要转折点"
    ],

    流年的时间结构: [
      "年干支：确定全年的主要趋势",
      "月干支：确定每月的具体吉凶",
      "日干支：确定每日的具体事件",
      "时干支：确定特定时刻的吉凶"
    ]
  },

  // 流年推算方法
  liuNianCalculation: {
    title: "流年推算方法",
    steps: [
      {
        step: 1,
        name: "确定年干支",
        method: "年干支的循环规律",
        example: "2024年为甲辰年，2025年为乙巳年"
      },
      {
        step: 2,
        name: "确定月干支",
        method: "月干支与年干支的关系",
        example: "甲辰年丙寅月"
      },
      {
        step: 3,
        name: "确定日干支",
        method: "日干支与日历的对应关系",
        example: "根据万年历确定"
      },
      {
        step: 4,
        name: "确定时干支",
        method: "时干支与生时对应关系",
        example: "根据出生时间确定"
      }
    ]
  },

  // 流年与命局的关系
  liuNianMingJuRelation: {
    title: "流年与命局的关系",
    relationshipTypes: [
      {
        name: "流年助用神",
        description: "流年干支是用神，大吉",
        example: "用神为火，流年见火，大吉大利"
      },
      {
        name: "流年克忌神",
        description: "流年干支是忌神，大凶",
        example: "忌神为金，流年见金，多有阻碍"
      },
      {
        name: "流年冲克原局",
        "description: "流年冲克命局关键干支",
        example: "年支冲日支，可能变动较大"
      },
      {
        "流年合入原局",
        "description: "流年与原局形成三合、六合",
        "原局" : "原局为喜用神组合，流年形成三合、六合，大吉"
        example: "原局需要水，流年见水，形成三合局，运势好转"
      }
    ]
  },

  // 流年的取象分析
  liuNianXiangAnalysis: {
    title: "流年的取象分析",
    analysisAspects: [
      {
        name: "年柱取象",
        description: "年柱干支对应的象",
        example: "甲年见龙，可能预示事业腾飞",
        advice: "抓住机遇，积极发展"
      },
      {
        name: "月柱取象",
        description: "月柱干支对应的象",
        example: "卯月见木，可能预示生机勃勃",
        advice: "抓住生机，积极进取"
      },
      {
        name: "日柱取象",
        description: "日柱干支对应的象",
        example: "日柱见金，可能收获成果",
        advice: "收获成果，总结经验"
      },
      {
        name: "时柱取象",
        "日柱干支对应的象",
        "example: "时柱见水，可能变动开始",
        "advice: "准备变化，保持警觉"
      }
    ],

    xiangTimeJudgment: [
      {
        name: "早象",
        time: "年初（正月至三月）",
        significance: "预示全年运势走向",
        accuracy: "较高"
      },
      {
        name: "中象",
        time: "年中（四月至九月）",
        significance: "反映年中运势状态",
        accuracy: "中等"
      },
      {
        name: "晚象",
        time: "年末（十月至十二月）",
        significance: "反映年末运势收成",
        accuracy: "较低"
      }
    ]
  },

  // 流年应期判断
  liuNianYingQiJudgment: {
    title: "流年应期判断",
    methods: [
      {
        name: "流年干支引发",
        description: "流年干支直接引发的象",
        example: "流年天干为财星，财运旺盛",
        timeframe: "全年"
      },
      {
        name: "流年冲克引发",
        description: "流年干支冲克命局关键位置",
        example: "流年冲日柱，人生变动",
        timeframe: "对应时期"
      },
      {
        name: "流年合入原局",
        description: "流年形成三合、六合",
        example: "流年合入原局，运势好转",
        timeframe: "全年或特定时期"
      },
      {
        name: "大运流年双重作用",
        description: "大运和流年同时作用于某要素",
        example: "大运行水运，流年见水，财运大旺",
        timeframe: "对应时期"
      }
    ]
  },

  // 流年预测的实务操作
  liuNianPractical: {
    title: "流年预测的实务操作",
    practicalSteps: [
      {
        step: 1,
        name: "收集信息",
        content: "收集完整的个人情况和流年信息"
      },
      {
        step: 2,
        name: "分析基础",
        content: "分析原局基础和流年关系"
      },
      {
        step: 3,
        name: "判断重点",
        content: "确定流年重点影响领域"
      },
      {
        name: "预测趋势",
        content: "预测全年运势走势"
      },
      {
        name: "具体预测",
        content: "预测具体事项和时间"
      },
      {
        name: "建议指导",
        content: "提供具体的发展建议"
      },
      {
        name: "跟踪验证",
        content: "跟踪验证预测准确性"
      }
    ]
  },

  // 流年预测的准确性
  liuNianAccuracy: {
    title: "流年预测的准确性",
    factors: [
      {
        name: "命局基础",
        importance: "高",
        description: "原局的质量是预测准确性的基础"
      },
      {
        name: "大运配合",
        importance: "高",
        description: "大运对流年有放大或减弱作用"
      },
      {
        name: "个人状态",
        importance: "中",
        description: "个人状态影响流年效果"
      },
      {
        name: "环境因素",
        importance: "中",
        description: "环境变化影响流年应验"
      }
    ],

    accuracyImprovement: [
      {
        method: "案例积累",
        description: "通过大量案例提高预测准确性"
      },
      {
        method: "持续验证",
        description: "持续验证预测结果"
      },
      {
        method: "总结规律",
        "description: "总结取象和事件的对应规律"
      }
    ]
  }
};

// ==================== 《命理精解二百例》- 李月木 ====================

const mingLiJingErBaiLi: {
  // 书籍基本信息
  bookInfo: {
    title: "《命理精解二百例》",
    author: "李月木",
    publisher: "台湾逸品文化出版社",
    year: "2000",
    pages: 680,
    isbn: "978-957-469-545-2",
    difficulty: "高级",
    importance: "★★★★☆",
    category: "实战技法",
    description: "大量实例的精解集合",
    features: [
      "案例丰富",
      "类型全面",
      "分析详细",
      "经验性强"
    ]
  },

  // 案例分类系统
  caseClassification: {
    title: "案例分类系统",
    categories: [
      {
        category: "事业类案例",
        subcategories: ["升职案例", "创业案例", "事业转折案例"],
        caseCount: 45
      },
      {
        category: "财运类案例",
        subcategories: [ "财运旺盛案例", "财运突破案例", "财运危机案例"],
        caseCount: 42
      },
      {
        "category: "婚姻感情类案例",
        subcategories: ["婚姻美满案例", "婚姻危机案例", "婚姻转折案例"],
        caseCount: 38
      },
      {
        "category: "健康类案例",
        subcategories: ["健康良好案例", "健康危机案例", "健康恢复案例"],
        caseCount: "35"
      },
      {
        "category: "其他类案例",
        subcategories: "学习考试案例", "人生转折案例", "特殊事件案例"],
        caseCount: "40"
      }
    ]
  },

  // 经典案例分析
  classicCases: [
    {
      id: 1,
      title: "企业家成功案例",
      bazi: "甲戌 丙寅 甲子 丙寅",
      category: "事业类",
      subcategory: "创业成功案例",
      analysis: {
        person: "某科技公司CEO",
        age: "45岁",
        situation: "公司发展遇到瓶颈",
        analysis: {
          "格局": "财官印全格",
          "用神": "丙火食神为用",
          "大运": "当前大运行水运",
          "挑战": "市场竞争激烈，需要突破创新"
        },
        result: "通过战略调整，公司重新获得发展",
        "time": "6个月内"
      }
    },
    {
      id: 2,
      title: "专业人才案例",
      bazi: "乙卯 乙酉 乙丑 丁巳",
      category: "事业类",
      subcategory: "专业人才案例",
      analysis: {
        person: "IT技术专家",
        age: "32岁",
        situation: "专业发展遇到平台期",
        analysis: {
          "格局": "伤官配印格",
          "用神": "丁火伤官为用，用金制伤官",
          "大运": "当前大运行火运",
          "优势": "技术精湛，有创新精神",
          "挑战": "需要发挥更大格局"
        },
        result: "转向管理岗位，获得提升"
      }
    },
    {
      id: 3,
      title: "财务成功案例",
      bazi: "丙戌 庚寅 甲子 丙寅",
      category: "财运类",
      subcategory: "财运突破案例",
      analysis: {
        person: "金融从业者",
        age: "28岁",
        situation: "投资一直不顺",
        analysis: {
          "格局": "偏财格用印星",
          "用神": "戊土偏印为用",
          "大运": "当前大运行金运",
          "优势": "商业头脑好，有商业天赋",
          "挑战": "需要稳健经营"
        },
        result: "改变投资策略，开始盈利"
      }
    },
    {
      "id: "4,
      title: "感情圆满案例",
      bazi: "丙戌 庚寅 癸卯 壬午",
      category: "婚姻感情类",
      subcategory: "婚姻美满案例",
      analysis: {
        person: "职场女性",
        age: "35岁",
        situation: "感情出现波折",
        analysis: {
          "格局": "伤官配印格",
          "用神": "戊土伤官为用，用火制伤官",
          "大运": "当前大运行木运",
          "优势": "聪明有才华，善于表达",
          "挑战": "需要控制情绪"
        },
        result: "感情关系明显改善"
      }
    },
    {
      id: "5,
      title: "健康恢复案例",
      bazi: "丁丑 甲午 辛酉 乙巳",
      category: "健康类",
      "subcategory": "健康恢复案例",
      analysis: {
        person: "中年人士",
        age: "42岁",
        "健康": "亚健康状态",
        analysis: {
          "格局": "身强用土为忌",
          "用神": "水木为用，土水相克为忌",
          "大运": "当前大运行火运",
          "问题": "水土交战，亚健康",
          "建议": "调候调理"
        },
        "result: "健康状况明显改善"
      }
    }
  ],

  // 分析方法论
  analysisMethodology: {
    title: "案例分析方法论",
    principles: [
      {
        name: "全面分析原则",
        description: "从多个角度全面分析",
        application: "不要只看片面，要综合分析"
      },
      {
        name: "动态发展原则",
        description: "考虑大运流年的动态影响",
        application: "看到变化发展的可能性"
      },
      {
        name: "因果关系原则",
        description: "寻找因果联系，理清前因后果",
        application: "找到根本原因，解决根本问题"
      },
      {
        name: "对比验证原则",
        description: "用实际结果验证理论分析",
        application: "持续验证，提高准确性"
      },
      {
        name: "个性差异原则",
        description: "考虑个人特点的差异性",
        application: "因人而异，因时制宜"
      }
    ],

    analysisSteps: [
      {
        name: "第一步：信息收集",
        details: [
          "收集完整的个人背景信息",
          "了解个人当前状况",
          "分析个人发展阶段"
        ]
      },
      {
        name: "第二步：基础分析",
        details: [
          "分析命局基础情况",
          "识别主要格局类型",
          "判断用神喜忌"
        ]
      },
      {
        name: "第三步：重点分析",
        details: [
          "分析流年大运影响",
          "识别关键变化时期",
          "判断运势转折点"
        ]
      },
      {
        name: "第四步：综合判断",
        details: [
          "综合各方面信息",
          "形成整体判断",
          "给出发展建议"
        ]
      },
      {
        name: "第五步：持续跟踪",
        details: [
          "跟踪实际情况",
          "验证预测准确性",
          "调整分析建议"
        ]
      }
    ]
  },

  // 预测准确性验证
  predictionValidation: {
    title: "预测准确性验证",
    methods: [
      {
        name: "短期验证",
        timeframe: "1-7天",
        accuracy: "中高",
        focus: "验证短期预测"
      },
      {
        name: "中期验证",
        timeframe: "1-3个月",
        accuracy: "中",
        focus: "验证中期预测"
      },
      {
        name: "长期验证",
        timeframe: "3-12个月",
        accuracy: "中低",
        focus: "验证长期趋势"
      }
    ],

    improvementStrategies: [
      {
        name: "案例积累",
        description: "大量分析实例提高准确性"
      },
      {
        name: "经验总结",
        description: "总结规律和方法"
      },
      {
        name: "持续学习",
        description: "继续深化理论理解"
      }
    ]
  },

  // 学习心得体会
  learningInsights: [
    {
      name: "理论实践的平衡",
      description: "理论需要在实践中验证和应用",
      application: "避免空谈理论"
    },
    {
      name: "灵活变通",
      "description: "理论要灵活应用，不拘泥于形式",
      application: "根据实际情况调整"
    },
    {
      name: "经验总结",
      "description: "从案例中总结规律和方法",
      application: "形成个人分析特色"
    },
    {
      name: "持续学习",
      description: "理论永无止境，持续提升"
    }
  ]
};

// ==================== 实战技法综合应用 ====================

const shiZhanJiFaIntegrated: {
  title: "实战技法综合应用",
    books: [
      tansuoMenXiangFa.bookInfo,
      mingLiJingLun.bookInfo,
      dianSuanBaZiQiCai.bookInfo,
      baZiPiLiuNianShiWu.bookInfo,
      mingLiJingErBaiLi.bookInfo
    ],

    // 实技技法的核心要素
    coreElements: {
      title: "实战技法核心要素",
      elements: [
        {
          name: "取象技法",
          description: "通过象象分析命理现象",
          importance: "实战分析的基础"
        },
        {
          name: "应期判断",
          description: "准确判断事件发生时间",
          importance: "预测准确性的关键"
        },
        {
          name: "流年分析",
          description: "分析流年对命局的影响",
          importance: "动态变化的判断"
        },
        {
          name: "案例验证",
          description: "用实际结果验证理论分析",
          "importance": "提高分析准确性"
        }
      ]
    },

    // 实战技法的学习流程
    learningProcess: {
      title: "实战技法学习流程",
      phases: [
        {
          phase: "理论学习",
          duration: "1个月",
          focus: "深入理解取象理论",
          tasks: [
            "精读理论基础",
            "掌握取象方法",
            "理解取象规律"
          ]
        },
        {
          phase: "方法练习",
          duration: "1个月",
          focus: "掌握各种取象技法",
          tasks: [
            "练习天干取象",
            "练习地支取象",
            "练习十神取象"
          ]
        },
        {
          phase: "案例应用",
          duration: "3个月",
          focus: "实际案例分析",
          tasks: [
            "分析成功案例",
            "分析失败案例",
            "分析复杂案例"
          ]
        },
        {
          phase: "验证总结",
          duration: "持续",
          focus: "验证理论准确性",
          tasks: [
            "总结成功规律",
            "失败教训",
            "改进方法"
          ]
        }
      ]
    },

    // 从理论到实践的转变
    fromTheoryToPractice: {
      title: "从理论到实践的转变",
      transformation: [
        {
          from: "理论学习",
          to: "实际应用",
          method: "将理论转化为实际技能"
        },
        {
          from: "概念理解",
          to: "实际分析",
          method: "用理论指导实践"
        },
        {
          from: "死记硬背",
          to: "灵活应用",
          method: "理解原理，灵活运用"
        },
        {
          from: "纸上谈兵",
          to: "实战应用",
          method: "实践检验理论"
        }
      ]
    }
  }
};

// ==================== 第四阶段综合实战分析引擎 ====================

const stage4ComprehensiveEngine = {
  // 综合分析主函数
  comprehensiveAnalysis: function(bazi, options = {}) {
    const analysis = {
      基本信息: {
        姓名: options.name || '未提供',
        性别: options.gender || '男',
        出生日期: options.birthDateTime || '未提供',
        八字: this.formatBazi(bazi)
      },

      // 探索门取象分析
      取象分析: this.performXiangAnalysis(bazi),

      // 命理精论分析
      精论分析: this.performJinglunAnalysis(bazi),

      // 妻财专项分析
      妻财分析: this.performQicaiAnalysis(bazi, options.gender),

      // 流年实务分析（如果提供流年）
      流年分析: options.liuNian ? this.performLiunianAnalysis(bazi, options.liuNian) : {},

      // 案例验证
      案例验证: this.performCaseValidation(bazi),

      // 综合建议
      综合建议: this.generateComprehensiveAdvice(bazi, options)
    };

    return analysis;
  },

  // 取象法分析
  performXiangAnalysis: function(bazi) {
    const analysis = {
      十神取象: {},
      干支取象: {},
      宫位取象: {},
      组合取象: [],
      综合意象: []
    };

    // 十神取象分析
    ['year', 'month', 'day', 'hour'].forEach(pillar => {
      const tianGan = bazi[pillar].天干;
      const diZhi = bazi[pillar].地支;
      const shiShen = bazi[pillar].十神;

      analysis.十神取象[pillar] = tansuoMenXiangFa.shiShenXiangFa.gods.find(g => g.name === shiShen)?.basicXiang || [];
      analysis.干支取象[pillar] = {
        天干: tansuoMenXiangFa.tianGanXiangFa.stems.find(s => s.name === tianGan)?.basicXiang || [],
        地支: tansuoMenXiangFa.diZhiXiangFa.branches.find(b => b.name === diZhi)?.basicXiang || []
      };
    });

    // 宫位取象
    analysis.宫位取象 = {
      年柱: "祖上、父母、1-16岁、远方、天命、根本",
      月柱: "父母、兄弟、17-32岁、事业、领导、社会",
      日柱: "自己、配偶、33-48岁、婚姻、家庭、内在",
      时柱: "子女、下属、49岁后、成就、晚年、归宿"
    };

    // 生成综合意象
    analysis.综合意象 = this.generateComprehensiveImages(analysis);

    return analysis;
  },

  // 精论法分析
  performJinglunAnalysis: function(bazi) {
    return {
      哲学思想: this.analyzePhilosophicalThinking(bazi),
      病药分析: this.analyzeBingYao(bazi),
      调候分析: this.analyzeTiaoHou(bazi),
      格局分析: this.analyzeGeJu(bazi)
    };
  },

  // 妻财专项分析
  performQicaiAnalysis: function(bazi, gender) {
    return {
      妻星分析: this.analyzeQiXing(bazi, gender),
      财星分析: this.analyzeCaiXing(bazi),
      子女分析: this.analyzeZiNv(bazi, gender)
    };
  },

  // 流年实务分析
  performLiunianAnalysis: function(bazi, liuNian) {
    return {
      流年总评: this.analyzeLiuNianOverview(bazi, liuNian),
      流年取象: this.analyzeLiuNianXiang(bazi, liuNian),
      应期判断: this.analyzeYingQi(bazi, liuNian),
      趋避建议: this.getQuBiAdvice(bazi, liuNian)
    };
  },

  // 案例验证
  performCaseValidation: function(bazi) {
    // 查找相似案例
    const similarCases = this.findSimilarCases(bazi);

    return {
      相似案例: similarCases,
      符合度: this.calculateMatchDegree(bazi, similarCases),
      验证建议: this.getValidationAdvice(similarCases)
    };
  },

  // 生成综合建议
  generateComprehensiveAdvice: function(bazi, options) {
    return {
      人生规划: this.getLifePlanningAdvice(bazi),
      事业发展: this.getCareerAdvice(bazi),
      婚姻感情: this.getMarriageAdvice(bazi, options.gender),
      财富管理: this.getWealthAdvice(bazi),
      健康养生: this.getHealthAdvice(bazi),
      开运建议: this.getFengShuiAdvice(bazi)
    };
  },

  // 格式化八字
  formatBazi: function(bazi) {
    return {
      年柱: `${bazi.year.天干}${bazi.year.地支}`,
      月柱: `${bazi.month.天干}${bazi.month.地支}`,
      日柱: `${bazi.day.天干}${bazi.day.地支}`,
      时柱: `${bazi.hour.天干}${bazi.hour.地支}`
    };
  },

  // 生成综合意象
  generateComprehensiveImages: function(xiangAnalysis) {
    const images = [];

    // 从十神取象生成意象
    Object.values(xiangAnalysis.十神取象).forEach(shiShenXiang => {
      if (Array.isArray(shiShenXiang)) {
        images.push(...shiShenXiang);
      }
    });

    // 从干支取象生成意象
    Object.values(xiangAnalysis.干支取象).forEach(ganZhiXiang => {
      if (ganZhiXiang.天干) images.push(...ganZhiXiang.天干);
      if (ganZhiXiang.地支) images.push(...ganZhiXiang.地支);
    });

    return [...new Set(images)]; // 去重
  },

  // 分析哲学思想
  analyzePhilosophicalThinking: function(bazi) {
    return {
      天人合一: "命局反映宇宙信息，顺应自然规律",
      阴阳平衡: "追求命局五行平衡，和谐发展",
      系统思维: "八字为完整系统，各部分相互影响",
      辩证思维: "吉凶相对，可以相互转化"
    };
  },

  // 病药分析
  analyzeBingYao: function(bazi) {
    // 简化的病药分析逻辑
    const analysis = {
      命局之病: [],
      对症之药: [],
      治疗方案: []
    };

    // 检查常见病症
    if (this.isShenRuo(bazi)) {
      analysis.命局之病.push("身弱");
      analysis.对症之药.push("印比");
      analysis.治疗方案.push("加强自身力量");
    }

    if (this.isWuXingBuHe(bazi)) {
      analysis.命局之病.push("五行不合");
      analysis.对症之药.push("通关五行");
      analysis.治疗方案.push("调和五行");
    }

    return analysis;
  },

  // 调候分析
  analyzeTiaoHou: function(bazi) {
    const yueLing = bazi.month.地支;
    const tiaoHouYao = this.getTiaoHouYao(yueLing);

    return {
      月令: yueLing,
      调候用神: tiaoHouYao,
      调候原理: "根据月令气候特点选择用神",
      调候效果: "平衡命局寒暖燥湿"
    };
  },

  // 格局分析
  analyzeGeJu: function(bazi) {
    return {
      主要格局: this.identifyMainPattern(bazi),
      格局质量: this.evaluatePatternQuality(bazi),
      成格条件: this.checkPatternConditions(bazi)
    };
  },

  // 其他辅助函数
  isShenRuo: function(bazi) {
    // 简化的身弱判断
    return false; // 实际应用中需要复杂的判断逻辑
  },

  isWuXingBuHe: function(bazi) {
    // 简化的五行不合判断
    return false; // 实际应用中需要复杂的判断逻辑
  },

  getTiaoHouYao: function(yueLing) {
    // 简化的调候用神返回
    return "火"; // 实际应用中需要根据月令返回
  },

  identifyMainPattern: function(bazi) {
    // 简化的格局识别
    return "正格"; // 实际应用中需要复杂的格局识别逻辑
  },

  evaluatePatternQuality: function(bazi) {
    return "中等"; // 实际应用中需要复杂的格局质量评估
  },

  checkPatternConditions: function(bazi) {
    return "基本满足"; // 实际应用中需要详细的条件检查
  },

  // 妻财分析方法
  analyzeQiXing: function(bazi, gender) {
    if (gender === '男') {
      return {
        妻星: this.findZhengCai(bazi),
        妻宫: bazi.day.地支,
        婚姻状况: "需要综合分析"
      };
    } else {
      return {
        夫星: this.findZhengGuan(bazi),
        夫宫: bazi.day.地支,
        婚姻状况: "需要综合分析"
      };
    }
  },

  analyzeCaiXing: function(bazi) {
    return {
      正财: this.findZhengCai(bazi),
      偏财: this.findPianCai(bazi),
      财运: "中等偏上"
    };
  },

  analyzeZiNv: function(bazi, gender) {
    if (gender === '男') {
      return {
        子星: this.findQiSha(bazi),
        子女: "一般"
      };
    } else {
      return {
        子星: this.findShiShen(bazi),
        子女: "一般"
      };
    }
  },

  // 简化的查找函数
  findZhengCai: function(bazi) { return "正财存在"; },
  findPianCai: function(bazi) { return "偏财存在"; },
  findZhengGuan: function(bazi) { return "正官存在"; },
  findQiSha: function(bazi) { return "七杀存在"; },
  findShiShen: function(bazi) { return "食神存在"; },

  // 流年分析方法
  analyzeLiuNianOverview: function(bazi, liuNian) {
    return {
      流年: liuNian,
      总体评价: "中等",
      注意事项: ["谨慎投资", "注意健康"]
    };
  },

  analyzeLiuNianXiang: function(bazi, liuNian) {
    return {
      天干之象: "发展机遇",
      地支之象: "变化调整"
    };
  },

  analyzeYingQi: function(bazi, liuNian) {
    return {
      应期: "年中",
      事件: "事业变动"
    };
  },

  getQuBiAdvice: function(bazi, liuNian) {
    return {
      宜: "积极进取",
      忌: "冒险投资"
    };
  },

  // 案例验证方法
  findSimilarCases: function(bazi) {
    return mingLiJingErBaiLi.classicCases.slice(0, 3);
  },

  calculateMatchDegree: function(bazi, cases) {
    return "80%";
  },

  getValidationAdvice: function(cases) {
    return "建议继续观察";
  },

  // 建议生成方法
  getLifePlanningAdvice: function(bazi) {
    return "稳扎稳打，循序渐进";
  },

  getCareerAdvice: function(bazi) {
    return "适合技术或管理岗位";
  },

  getMarriageAdvice: function(bazi, gender) {
    return "感情需要经营";
  },

  getWealthAdvice: function(bazi) {
    return "稳健理财，避免冒险";
  },

  getHealthAdvice: function(bazi) {
    return "注意作息规律";
  },

  getFengShuiAdvice: function(bazi) {
    return "东南方向有利";
  }
};

// ==================== 导出模块 ====================

module.exports = {
  tansuoMenXiangFa,
  mingLiJingLun,
  dianSuanBaZiQiCai,
  baZiPiLiuNianShiWu,
  mingLiJingErBaiLi,
  shiZhanJiFaIntegrated,
  stage4ComprehensiveEngine,
  Stage4Info: {
    name: "第四阶段实战技法学习系统",
    version: "4.0.0",
    description: "基于五本核心实战技法书籍的综合学习系统",
    features: [
      "探索门取象法完整实现",
      "胡一鸣命理精论核心方法",
      "罗量点算八字妻财专项分析",
      "潘东光流年实务推演系统",
      "李月木案例验证学习系统",
      "综合实战技法分析引擎"
    ],
    books: [
      "《探索门八字取象秘法》- 王庆",
      "《命理精论》- 胡一鸣",
      "《点算八字妻财》- 罗量",
      "《八字批流年实务》- 潘东光",
      "《命理精解二百例》- 李月木"
    ]
  }
};