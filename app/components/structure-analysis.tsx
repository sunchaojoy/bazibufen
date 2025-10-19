'use client'

import React, { useState } from 'react'
import { BaziData } from '../bazi-analysis-engine'

interface StructureAnalysisProps {
  bazi: BaziData
  onAnalysisComplete: (analysis: any) => void
}

export default function StructureAnalysis({ bazi, onAnalysisComplete }: StructureAnalysisProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<any>({})

  const analysisSteps = [
    {
      title: '第一步：确定日主五行属性',
      description: '分析日主的基本特征和性格倾向',
      content: () => analyzeDayMaster(bazi),
      icon: '👤',
      color: 'blue'
    },
    {
      title: '第二步：判断月令当令',
      description: '分析月令对日主的影响程度',
      content: () => analyzeMonthCommand(bazi),
      icon: '📅',
      color: 'green'
    },
    {
      title: '第三步：统计五行力量',
      description: '计算命局中各五行的数量和质量',
      content: () => analyzeWuxingStrength(bazi),
      icon: '⚖️',
      color: 'purple'
    },
    {
      title: '第四步：识别关键十神',
      description: '找出对命局影响最大的十神组合',
      content: () => analyzeKeyShiShen(bazi),
      icon: '⭐',
      color: 'orange'
    },
    {
      title: '第五步：检查刑冲合害',
      description: '分析地支之间的相互作用关系',
      content: () => analyzeDiZhiRelations(bazi),
      icon: '🔗',
      color: 'red'
    },
    {
      title: '第六步：确定命局层次',
      description: '综合评估命局的品质和层次',
      content: () => evaluateStructureLevel(bazi),
      icon: '🏆',
      color: 'yellow'
    }
  ]

  const overallAnalysisFramework = {
    title: '命局分析基本框架',
    subtitle: '基于《滴天髓》《子平真诠》的系统化分析方法',
    steps: [
      {
        name: '整体观察',
        description: '先看命局整体气势，确定主要五行分布和平衡状况',
        key_points: [
          '五行是否均衡，有无偏枯',
          '寒暖燥湿是否调适',
          '清浊纯杂如何判断',
          '有无特殊组合和格局'
        ],
        common_mistakes: [
          '只看日主，忽视全局',
          '执着于个别字眼',
          '忽视整体气势的流转'
        ]
      },
      {
        name: '确定体用',
        description: '明确体用关系，找到分析的重点',
        key_points: [
          '以日主为体，其他为用',
          '区分体党与用党',
          '明确扶抑的对象',
          '找到平衡的关键点'
        ],
        common_mistakes: [
          '体用不分，主次不明',
          '扶抑对象搞错',
          '平衡点找不准'
        ]
      },
      {
        name: '层次判断',
        description: '评估命局的层次高低和发展潜力',
        key_points: [
          '格局是否清纯',
          '用神是否有力',
          '组合是否有情',
          '流通是否顺畅'
        ],
        common_mistakes: [
          '以格局名称论高低',
          '忽视用神的力量',
          '不考虑组合的配合'
        ]
      },
      {
        name: '动态分析',
        description: '考虑大运流年对命局的动态影响',
        key_points: [
          '大运与命局的配合',
          '流年引发的应期',
          '运势起伏的规律',
          '趋吉避凶的策略'
        ],
        common_mistakes: [
          '静态看命，忽视变化',
          '大运流年分不清',
          '应期判断不准确'
        ]
      }
    ],
    analysis_priority: [
      '1. 日主旺衰判断（身强身弱）',
      '2. 用神选取（调候、扶抑、通关）',
      '3. 格局判断（正格、变格、特殊格局）',
      '4. 十神分析（性格、能力、六亲）',
      '5. 大运流年（运势变化、应期）'
    ]
  }

  function analyzeDayMaster(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)

    const dayMasterInfo = {
      '甲': {
        wuxing: '木',
        yinYang: '阳',
        personality: ['正直向上', '有责任心', '坚持原则', '有时过于固执'],
        characteristics: ['参天大树', '挺拔向上', '生生不息', '不畏风雨'],
        strengths: ['领导能力', '组织能力', '坚持到底'],
        weaknesses: ['灵活性不足', '不善变通', '过于理想化'],
        suitable_direction: ['管理', '教育', '林业', '建筑']
      },
      '乙': {
        wuxing: '木',
        yinYang: '阴',
        personality: ['柔韧温和', '适应力强', '善于协调', '有时优柔寡断'],
        characteristics: ['花草藤萝', '柔韧多姿', '随风而动', '生命力强'],
        strengths: ['协调能力', '适应能力', '人际关系'],
        weaknesses: ['决断力不足', '容易动摇', '主见不强'],
        suitable_direction: ['艺术', '设计', '咨询', '服务']
      },
      '丙': {
        wuxing: '火',
        yinYang: '阳',
        personality: ['热情开朗', '光明磊落', '积极进取', '有时过于急躁'],
        characteristics: ['太阳之火', '光明普照', '热情奔放', '照亮他人'],
        strengths: ['表达能力', '领导魅力', '创新精神'],
        weaknesses: ['耐心不足', '情绪化', '容易冲动'],
        suitable_direction: ['娱乐', '媒体', '销售', '公关']
      },
      '丁': {
        wuxing: '火',
        yinYang: '阴',
        personality: ['温暖细腻', '思虑周密', '温和敦厚', '有时过于敏感'],
        characteristics: ['灯烛之火', '温暖明亮', '细腻入微', '持久稳定'],
        strengths: ['观察力强', '体贴入微', '持之以恒'],
        weaknesses: ['敏感多疑', '容易焦虑', '过于在意细节'],
        suitable_direction: ['文化', '教育', '医疗', '研究']
      }
    }

    return dayMasterInfo[dayMaster as keyof typeof dayMasterInfo] || {
      wuxing: '未知',
      yinYang: '未知',
      personality: ['待分析'],
      characteristics: ['待分析'],
      strengths: ['待分析'],
      weaknesses: ['待分析'],
      suitable_direction: ['待分析']
    }
  }

  function analyzeMonthCommand(bazi: BaziData) {
    const monthZhi = bazi.month.zhi
    const season = getSeason(monthZhi)
    const monthWuxing = getWuxing(monthZhi)

    const monthInfluence = {
      season,
      monthWuxing,
      influence: {
        '寅卯辰': {
          season: '春',
          wuxing: '木',
          characteristic: '万物生发，欣欣向荣',
          effect: '木旺得令，生机勃勃',
          suitable: ['火', '土'],
          avoid: ['金']
        },
        '巳午未': {
          season: '夏',
          wuxing: '火',
          characteristic: '炎热炽盛，万物繁茂',
          effect: '火旺当令，热情高涨',
          suitable: ['水', '土'],
          avoid: ['水']
        },
        '申酉戌': {
          season: '秋',
          wuxing: '金',
          characteristic: '萧瑟收敛，收获时节',
          effect: '金旺司令，肃杀之气',
          suitable: ['火', '水'],
          avoid: ['木']
        },
        '亥子丑': {
          season: '冬',
          wuxing: '水',
          characteristic: '寒冷凝结，收藏之季',
          effect: '水旺当权，寒气逼人',
          suitable: ['火', '土'],
          avoid: ['土']
        }
      }
    }

    return monthInfluence
  }

  function analyzeWuxingStrength(bazi: BaziData) {
    const allElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    const wuxingCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 }

    allElements.forEach(element => {
      const wuxing = getWuxing(element)
      if (wuxing && wuxing !== '未知') {
        wuxingCount[wuxing as keyof typeof wuxingCount]++
      }
    })

    // 分析五行平衡状况
    const total = Object.values(wuxingCount).reduce((sum, count) => sum + count, 0)
    const balance = {
      status: '相对平衡',
      description: '',
      advice: []
    }

    const maxCount = Math.max(...Object.values(wuxingCount))
    const minCount = Math.min(...Object.values(wuxingCount))

    if (maxCount - minCount >= 3) {
      balance.status = '严重失衡'
      balance.description = '五行分布极不均匀，需要重点调理'
      balance.advice = ['注意身体健康', '调节情绪状态', '选择合适环境']
    } else if (maxCount - minCount >= 2) {
      balance.status = '轻度失衡'
      balance.description = '五行分布不均，需要适当调理'
      balance.advice = ['关注弱势五行', '平衡生活方式']
    } else {
      balance.status = '相对平衡'
      balance.description = '五行分布较为均衡，发展比较全面'
      balance.advice = ['保持现状', '发挥优势']
    }

    return {
      count: wuxingCount,
      balance,
      analysis: analyzeWuxingDistribution(wuxingCount)
    }
  }

  function analyzeKeyShiShen(bazi: BaziData) {
    // 简化的十神分析
    const dayMaster = bazi.day.gan
    const keyShiShen = []

    // 分析年柱十神
    const yearShiShen = getShiShen(dayMaster, bazi.year.gan)
    if (yearShiShen) {
      keyShiShen.push({
        position: '年柱',
        shishen: yearShiShen,
        meaning: getShiShenMeaning(yearShiShen),
        influence: getShiShenInfluence(yearShiShen, '年柱')
      })
    }

    // 分析月柱十神
    const monthShiShen = getShiShen(dayMaster, bazi.month.gan)
    if (monthShiShen) {
      keyShiShen.push({
        position: '月柱',
        shishen: monthShiShen,
        meaning: getShiShenMeaning(monthShiShen),
        influence: getShiShenInfluence(monthShiShen, '月柱')
      })
    }

    // 分析时柱十神
    const hourShiShen = getShiShen(dayMaster, bazi.hour.gan)
    if (hourShiShen) {
      keyShiShen.push({
        position: '时柱',
        shishen: hourShiShen,
        meaning: getShiShenMeaning(hourShiShen),
        influence: getShiShenInfluence(hourShiShen, '时柱')
      })
    }

    return {
      keyShiShen,
      analysis: '月柱十神影响最大，年柱次之，时柱再次之',
      summary: summarizeKeyShiShen(keyShiShen)
    }
  }

  function analyzeDiZhiRelations(bazi: BaziData) {
    const diZhies = [bazi.year.zhi, bazi.month.zhi, bazi.day.zhi, bazi.hour.zhi]
    const relations = []

    // 检查六合
    const liuhePairs = [
      ['子', '丑'], ['寅', '亥'], ['卯', '戌'], ['辰', '酉'], ['巳', '申'], ['午', '未']
    ]

    liuhePairs.forEach(([zhi1, zhi2]) => {
      if (diZhies.includes(zhi1) && diZhies.includes(zhi2)) {
        relations.push({
          type: '六合',
          participants: [zhi1, zhi2],
          meaning: getLiuHeMeaning(zhi1, zhi2),
          effect: '有情相合，关系融洽'
        })
      }
    })

    // 检查三合局
    const sanheGroups = [
      ['申', '子', '辰'], // 水局
      ['亥', '卯', '未'], // 木局
      ['寅', '午', '戌'], // 火局
      ['巳', '酉', '丑']  // 金局
    ]

    sanheGroups.forEach(group => {
      const count = group.filter(zhi => diZhies.includes(zhi)).length
      if (count >= 2) {
        relations.push({
          type: '三合局',
          participants: group.filter(zhi => diZhies.includes(zhi)),
          meaning: getSanHeMeaning(group),
          effect: count === 3 ? '三合齐全，力量强大' : '半合局，有待完善'
        })
      }
    })

    // 检查六冲
    const liuchongPairs = [
      ['子', '午'], ['丑', '未'], ['寅', '申'], ['卯', '酉'], ['辰', '戌'], ['巳', '亥']
    ]

    liuchongPairs.forEach(([zhi1, zhi2]) => {
      if (diZhies.includes(zhi1) && diZhies.includes(zhi2)) {
        relations.push({
          type: '六冲',
          participants: [zhi1, zhi2],
          meaning: getLiuChongMeaning(zhi1, zhi2),
          effect: '冲动变化，需要调和'
        })
      }
    })

    return {
      relations,
      summary: summarizeDiZhiRelations(relations),
      advice: getDiZhiAdvice(relations)
    }
  }

  function evaluateStructureLevel(bazi: BaziData) {
    // 综合评估命局层次
    const evaluation = {
      level: '中等',
      score: 75,
      characteristics: [],
      potential: [],
      suggestions: []
    }

    // 基于各种因素评分
    let score = 50 // 基础分

    // 五行平衡加分
    const wuxingAnalysis = analyzeWuxingStrength(bazi)
    if (wuxingAnalysis.balance.status === '相对平衡') score += 20
    else if (wuxingAnalysis.balance.status === '轻度失衡') score += 10

    // 十神组合加分
    const shiShenAnalysis = analyzeKeyShiShen(bazi)
    if (shiShenAnalysis.keyShiShen.length >= 2) score += 15

    // 地支关系加分
    const relationAnalysis = analyzeDiZhiRelations(bazi)
    const heCount = relationAnalysis.relations.filter(r => r.type.includes('合')).length
    const chongCount = relationAnalysis.relations.filter(r => r.type === '六冲').length
    score += heCount * 10 - chongCount * 5

    // 确定层次
    if (score >= 90) {
      evaluation.level = '上等'
      evaluation.characteristics = ['格局清纯', '五行协调', '用神有力']
      evaluation.potential = ['发展潜力大', '成功机会多', '贵人相助']
    } else if (score >= 70) {
      evaluation.level = '中等'
      evaluation.characteristics = ['格局尚可', '五行基本平衡', '有发展空间']
      evaluation.potential = ['中等人成就', '需要努力', '有机遇有挑战']
    } else {
      evaluation.level = '下等'
      evaluation.characteristics = ['格局混杂', '五行失衡', '需要调理']
      evaluation.potential = ['需要付出更多努力', '逆境成长', '需要贵人扶持']
    }

    evaluation.score = Math.max(0, Math.min(100, score))

    return evaluation
  }

  // 辅助函数
  function getWuxing(ganZhi: string): string {
    const wuxingMap = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土',
      '庚': '金', '辛': '金', '壬': '水', '癸': '水',
      '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
      '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
    }
    return wuxingMap[ganZhi as keyof typeof wuxingMap] || '未知'
  }

  function getSeason(monthZhi: string): string {
    const seasonMap = {
      '寅': '春', '卯': '春', '辰': '春',
      '巳': '夏', '午': '夏', '未': '夏',
      '申': '秋', '酉': '秋', '戌': '秋',
      '亥': '冬', '子': '冬', '丑': '冬'
    }
    return seasonMap[monthZhi as keyof typeof seasonMap] || '未知'
  }

  function getShiShen(dayMaster: string, element: string): string {
    // 简化的十神判断
    const shiShenMap = {
      '甲甲': '比肩', '甲乙': '劫财', '甲丙': '食神', '甲丁': '伤官',
      '甲戊': '偏财', '甲己': '正财', '甲庚': '七杀', '甲辛': '正官',
      '甲壬': '偏印', '甲癸': '正印'
    }
    return shiShenMap[`${dayMaster}${element}` as keyof typeof shiShenMap] || '未知'
  }

  function getShiShenMeaning(shiShen: string): string {
    const meanings = {
      '正官': '事业、责任、纪律',
      '七杀': '权威、魄力、挑战',
      '正财': '稳健财富、踏实理财',
      '偏财': '意外之财、商业头脑',
      '正印': '学习能力、贵人相助',
      '偏印': '独特思维、专业技能',
      '食神': '才华表达、艺术天赋',
      '伤官': '创新能力、表达欲望',
      '比肩': '独立性、自我意识',
      '劫财': '社交能力、合作精神'
    }
    return meanings[shiShen as keyof typeof meanings] || '待分析'
  }

  function getShiShenInfluence(shiShen: string, position: string): string {
    return `${shiShen}在${position}发挥重要作用，影响${getShiShenMeaning(shiShen)}方面的表现`
  }

  function getLiuHeMeaning(zhi1: string, zhi2: string): string {
    const meanings = {
      '子丑': '贵人合，得人帮助',
      '寅亥': '合木，生机勃勃',
      '卯戌': '合火，热情向上',
      '辰酉': '合金，坚毅果敢',
      '巳申': '合水，智慧灵活',
      '午未': '合土，稳重踏实'
    }
    return meanings[`${zhi1}${zhi2}` as keyof typeof meanings] || '有情相合'
  }

  function getSanHeMeaning(group: string[]): string {
    const meanings = {
      '申子辰': '水局，智慧流动',
      '亥卯未': '木局，生机盎然',
      '寅午戌': '火局，热情高涨',
      '巳酉丑': '金局，坚毅果断'
    }
    return meanings[group.join('') as keyof typeof meanings] || '三合之力'
  }

  function getLiuChongMeaning(zhi1: string, zhi2: string): string {
    return `${zhi1}${zhi2}相冲，代表变动和冲突`
  }

  function summarizeKeyShiShen(keyShiShen: any[]): string {
    return '关键十神组合对性格和命运有重要影响'
  }

  function summarizeDiZhiRelations(relations: any[]): string {
    if (relations.length === 0) return '地支关系较为简单'
    if (relations.filter(r => r.type.includes('合')).length > relations.filter(r => r.type === '六冲').length) {
      return '地支关系以合为主，比较和谐'
    }
    return '地支关系较为复杂，需要调和'
  }

  function getDiZhiAdvice(relations: any[]): string[] {
    const advice = []
    if (relations.some(r => r.type === '六冲')) {
      advice.push('注意处理人际关系')
      advice.push('避免冲动决策')
    }
    if (relations.some(r => r.type.includes('合'))) {
      advice.push('善于利用合作机会')
      advice.push('维护重要关系')
    }
    return advice
  }

  function analyzeWuxingDistribution(count: { [key: string]: number }): string {
    const dominant = Object.entries(count).reduce((a, b) => a[1] > b[1] ? a : b)[0]
    const weak = Object.entries(count).reduce((a, b) => a[1] < b[1] ? a : b)[0]

    return `${dominant}元素较为旺盛，${weak}元素相对不足，需要平衡调理`
  }

  function summarizeKeyShiShen(keyShiShen: any[]): string {
    return '关键十神组合对性格和命运有重要影响'
  }

  const executeStep = (stepIndex: number) => {
    const step = analysisSteps[stepIndex]
    const result = step.content()

    setAnalysisResults(prev => ({
      ...prev,
      [stepIndex]: result
    }))

    if (stepIndex < analysisSteps.length - 1) {
      setCurrentStep(stepIndex + 1)
    } else {
      onAnalysisComplete(analysisResults)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {overallAnalysisFramework.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {overallAnalysisFramework.subtitle}
        </p>
      </div>

      {/* 分析框架概览 */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 分析优先级</h3>
        <div className="space-y-2">
          {overallAnalysisFramework.analysis_priority.map((priority, index) => (
            <div key={index} className="flex items-center">
              <span className="text-purple-600 mr-3">▸</span>
              <span className="text-gray-700">{priority}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 分步骤分析 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🔍 逐步分析流程
        </h3>

        <div className="space-y-4">
          {analysisSteps.map((step, index) => (
            <div key={index} className={`border rounded-lg p-6 ${
              index < currentStep ? 'border-green-300 bg-green-50' :
              index === currentStep ? 'border-blue-300 bg-blue-50' :
              'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  index < currentStep ? 'bg-green-500 text-white' :
                  index === currentStep ? 'bg-blue-500 text-white' :
                  'bg-gray-300 text-gray-600'
                }`}>
                  {index < currentStep ? '✓' : step.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {index === currentStep && (
                    <button
                      onClick={() => executeStep(index)}
                      className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
                        index < currentStep ? 'bg-green-500 hover:bg-green-600' :
                        'bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      {index < currentStep ? '重新分析' : '开始分析'}
                    </button>
                  )}

                  {analysisResults[index] && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                        {JSON.stringify(analysisResults[index], null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 常见误区提醒 */}
      <div className="p-6 bg-red-50 rounded-lg">
        <h3 className="text-xl font-semibold text-red-800 mb-4">
          ⚠️ 常见分析误区
        </h3>
        <div className="space-y-3">
          {overallAnalysisFramework.steps.map((step, index) => (
            <div key={index}>
              <h4 className="font-medium text-red-700 mb-2">{step.name}常见误区：</h4>
              <ul className="space-y-1 ml-4">
                {step.common_mistakes.map((mistake, mIndex) => (
                  <li key={mIndex} className="text-red-600 text-sm">
                    • {mistake}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}