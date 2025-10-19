'use client'

import React, { useState } from 'react'
import { BaziData } from '../bazi-analysis-engine'

interface StrengthAnalysisProps {
  bazi: BaziData
  onStrengthDetermined: (strength: any) => void
}

export default function StrengthAnalysis({ bazi, onStrengthDetermined }: StrengthAnalysisProps) {
  const [analysisStep, setAnalysisStep] = useState(0)
  const [detailedResults, setDetailedResults] = useState<any>({})
  const [finalStrength, setFinalStrength] = useState<string>('')

  const strengthAnalysisFramework = {
    title: '身强身弱判断技巧',
    subtitle: '基于《滴天髓》《子平真诠》的量化分析方法',
    principles: [
      '日主旺衰是八字分析的核心基础',
      '旺衰判断要综合考虑多种因素',
      '身强需要克制，身弱需要生扶',
      '特殊情况要特殊处理（从格、专旺格等）'
    ],
    key_factors: [
      '令月（月令）对日主的影响',
      '地支藏干对日主力量的贡献',
      '天干通根地支的计算方法',
      '党众数量和质量的影响',
      '坐支对日主的直接作用'
    ]
  }

  const analysisSteps = [
    {
      title: '第一步：分析月令影响',
      description: '月令是判断日主旺衰的首要因素',
      method: () => analyzeMonthInfluence(bazi),
      weight: 30,
      icon: '📅'
    },
    {
      title: '第二步：计算地支力量',
      description: '地支藏干和坐支对日主的支持程度',
      method: () => calculateDiZhiStrength(bazi),
      weight: 25,
      icon: '🏛️'
    },
    {
      title: '第三步：统计党众数量',
      description: '天干中同类五行的数量和质量',
      method: () => countTongDang(bazi),
      weight: 20,
      icon: '👥'
    },
    {
      title: '第四步：分析克制因素',
      description: '官杀财星对日主的消耗程度',
      method: () => analyzeKeZhiFactors(bazi),
      weight: 15,
      icon: '⚔️'
    },
    {
      title: '第五步：综合评估',
      description: '综合考虑所有因素，确定最终旺衰',
      method: () => comprehensiveEvaluation(detailedResults),
      weight: 10,
      icon: '⚖️'
    }
  ]

  function analyzeMonthInfluence(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const monthZhi = bazi.month.zhi
    const dayMasterWuxing = getWuxing(dayMaster)
    const monthWuxing = getWuxing(monthZhi)

    let score = 0
    let analysis = ''

    // 月令当令情况分析
    const monthCommand = {
      '寅卯': { wuxing: '木', season: '春', strength: 30 },
      '巳午': { wuxing: '火', season: '夏', strength: 30 },
      '申酉': { wuxing: '金', season: '秋', strength: 30 },
      '亥子': { wuxing: '水', season: '冬', strength: 30 },
      '辰戌丑未': { wuxing: '土', season: '四季', strength: 25 }
    }

    // 确定月令五行
    let monthSeasonStrength = 0
    if (['寅', '卯'].includes(monthZhi)) {
      monthSeasonStrength = monthCommand['寅卯'].strength
      analysis = `月令${monthZhi}为春季木旺，`
    } else if (['巳', '午'].includes(monthZhi)) {
      monthSeasonStrength = monthCommand['巳午'].strength
      analysis = `月令${monthZhi}为夏季火旺，`
    } else if (['申', '酉'].includes(monthZhi)) {
      monthSeasonStrength = monthCommand['申酉'].strength
      analysis = `月令${monthZhi}为秋季金旺，`
    } else if (['亥', '子'].includes(monthZhi)) {
      monthSeasonStrength = monthCommand['亥子'].strength
      analysis = `月令${monthZhi}为冬季水旺，`
    } else {
      monthSeasonStrength = monthCommand['辰戌丑未'].strength
      analysis = `月令${monthZhi}为四季土旺，`
    }

    // 月令与日主的关系
    if (monthWuxing === dayMasterWuxing) {
      score = monthSeasonStrength
      analysis += `日主${dayMaster}${dayMasterWuxing}得月令当令，力量最强，得${score}分`
    } else if (isSheng(monthWuxing, dayMasterWuxing)) {
      score = monthSeasonStrength * 0.7
      analysis += `月令${monthWuxing}生助日主${dayMasterWuxing}，力量较强，得${score.toFixed(1)}分`
    } else if (isKe(monthWuxing, dayMasterWuxing)) {
      score = -monthSeasonStrength * 0.8
      analysis += `月令${monthWuxing}克制日主${dayMasterWuxing}，力量受制，得${score.toFixed(1)}分`
    } else {
      score = monthSeasonStrength * 0.3
      analysis += `月令${monthWuxing}与日主${dayMasterWuxing}有泄耗关系，力量一般，得${score.toFixed(1)}分`
    }

    // 特殊月令考虑
    if (monthZhi === '辰' || monthZhi === '戌' || monthZhi === '丑' || monthZhi === '未') {
      analysis += `（注：${monthZhi}为墓库，需要看天干透出情况）`
    }

    return {
      score,
      analysis,
      details: {
        monthZhi,
        monthWuxing,
        dayMaster,
        dayMasterWuxing,
        relationship: getWuxingRelationship(monthWuxing, dayMasterWuxing),
        seasonInfluence: monthSeasonStrength
      }
    }
  }

  function calculateDiZhiStrength(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)
    let totalScore = 0
    let details: any[] = []

    // 分析年支
    const yearZhiAnalysis = analyzeDiZhiSupport(bazi.year.zhi, dayMasterWuxing, '年支')
    totalScore += yearZhiAnalysis.score
    details.push(yearZhiAnalysis)

    // 分析月支
    const monthZhiAnalysis = analyzeDiZhiSupport(bazi.month.zhi, dayMasterWuxing, '月支')
    totalScore += monthZhiAnalysis.score
    details.push(monthZhiAnalysis)

    // 分析日支（坐支）
    const dayZhiAnalysis = analyzeDiZhiSupport(bazi.day.zhi, dayMasterWuxing, '日支', true)
    totalScore += dayZhiAnalysis.score
    details.push(dayZhiAnalysis)

    // 分析时支
    const hourZhiAnalysis = analyzeDiZhiSupport(bazi.hour.zhi, dayMasterWuxing, '时支')
    totalScore += hourZhiAnalysis.score
    details.push(hourZhiAnalysis)

    return {
      score: totalScore,
      analysis: `地支总支持力：${totalScore.toFixed(1)}分`,
      details,
      summary: `日支${bazi.day.zhi}作为坐支影响最大，其次为月支${bazi.month.zhi}`
    }
  }

  function analyzeDiZhiSupport(diZhi: string, dayMasterWuxing: string, position: string, isZuoZhi = false) {
    const cangGans = getDiZhiCangGan(diZhi)
    let score = 0
    let analysis = `${position}${diZhi}：`

    cangGans.forEach((cangGan, index) => {
      const cangGanWuxing = getWuxing(cangGan)
      let cangGanScore = 0

      if (cangGanWuxing === dayMasterWuxing) {
        cangGanScore = isZuoZhi ? 20 : 15 // 坐支权重更高
        analysis += `${cangGan}(${cangGanWuxing})为同类，`
      } else if (isSheng(cangGanWuxing, dayMasterWuxing)) {
        cangGanScore = isZuoZhi ? 15 : 10
        analysis += `${cangGan}(${cangGanWuxing})为印星，`
      } else if (isKe(cangGanWuxing, dayMasterWuxing)) {
        cangGanScore = isZuoZhi ? -15 : -10
        analysis += `${cangGan}(${cangGanWuxing})为官杀，`
      } else {
        cangGanScore = isZuoZhi ? -8 : -5
        analysis += `${cangGan}(${cangGanWuxing})为财星，`
      }

      score += cangGanScore
    })

    if (score > 0) {
      analysis += `支持日主，得${score.toFixed(1)}分`
    } else if (score < 0) {
      analysis += `削弱日主，得${score.toFixed(1)}分`
    } else {
      analysis += `对日主影响不大，得${score.toFixed(1)}分`
    }

    return {
      position,
      diZhi,
      cangGans,
      score,
      analysis,
      isZuoZhi
    }
  }

  function countTongDang(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)
    const tianGans = [bazi.year.gan, bazi.month.gan, bazi.day.gan, bazi.hour.gan]

    let tongDangCount = 0
    let shengZhuCount = 0
    let keZhiCount = 0
    let details: any[] = []

    tianGans.forEach((gan, index) => {
      const position = ['年干', '月干', '日干', '时干'][index]
      const ganWuxing = getWuxing(gan)

      if (ganWuxing === dayMasterWuxing && gan !== dayMaster) {
        tongDangCount++
        details.push({ position, gan, type: '比劫', effect: 12, analysis: `${position}${gan}为比劫，帮扶日主` })
      } else if (isSheng(ganWuxing, dayMasterWuxing)) {
        shengZhuCount++
        details.push({ position, gan, type: '印星', effect: 15, analysis: `${position}${gan}为印星，生助日主` })
      } else if (isKe(ganWuxing, dayMasterWuxing)) {
        keZhiCount++
        details.push({ position, gan, type: '官杀', effect: -10, analysis: `${position}${gan}为官杀，克制日主` })
      } else if (gan !== dayMaster) {
        details.push({ position, gan, type: '财星', effect: -8, analysis: `${position}${gan}为财星，耗损日主` })
      }
    })

    const totalScore = details.reduce((sum, item) => sum + item.effect, 0)

    return {
      score: totalScore,
      analysis: `天干党众分析：比劫${tongDangCount}个，印星${shengZhuCount}个，官杀${keZhiCount}个，总分${totalScore}分`,
      details,
      summary: tongDangCount + shengZhuCount > keZhiCount ? '天干以生扶为主' : '天干以克制为主'
    }
  }

  function analyzeKeZhiFactors(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)
    let totalScore = 0
    let factors: any[] = []

    // 分析所有克制因素
    const allElements = [
      { element: bazi.year.gan, position: '年干' },
      { element: bazi.month.gan, position: '月干' },
      { element: bazi.hour.gan, position: '时干' },
      { element: bazi.year.zhi, position: '年支' },
      { element: bazi.month.zhi, position: '月支' },
      { element: bazi.day.zhi, position: '日支' },
      { element: bazi.hour.zhi, position: '时支' }
    ]

    allElements.forEach(({ element, position }) => {
      const elementWuxing = getWuxing(element)
      if (isKe(elementWuxing, dayMasterWuxing)) {
        const score = position.includes('干') ? -10 : -8
        totalScore += score
        factors.push({
          position,
          element,
          elementWuxing,
          type: '克制',
          score,
          analysis: `${position}${element}(${elementWuxing})克制日主，削弱${Math.abs(score)}分`
        })
      }
    })

    return {
      score: totalScore,
      analysis: `克制因素总计：${factors.length}个，总分${totalScore}分`,
      factors,
      summary: totalScore < -20 ? '克制因素较强，日主压力大' : '克制因素一般'
    }
  }

  function comprehensiveEvaluation(results: any) {
    let totalScore = 0
    let evaluation: any[] = []

    // 汇总各项得分
    Object.values(results).forEach((result: any) => {
      if (result && typeof result === 'object' && 'score' in result) {
        totalScore += result.score
      }
    })

    // 确定身强身弱等级
    let strengthLevel = ''
    let strengthAdvice = []
    let characteristics = []

    if (totalScore >= 80) {
      strengthLevel = '极强'
      characteristics = [
        '日主力量极旺，得令得势',
        '生扶因素众多，克制因素很少',
        '性格坚强自信，能力出众',
        '但容易过于强势，需要注意谦逊'
      ]
      strengthAdvice = [
        '适合走克制运（官杀、财星）',
        '需要学习谦逊和包容',
        '避免过于强势，注意团队合作',
        '可以承担重大责任和挑战'
      ]
    } else if (totalScore >= 50) {
      strengthLevel = '强'
      characteristics = [
        '日主力量较强，基本能够自立',
        '有足够的生扶，能够承受一定压力',
        '性格较为自信，有一定的领导能力',
        '但有时会显得过于强势'
      ]
      strengthAdvice = [
        '可以适当走一些财运或官运',
        '保持现有优势，继续努力',
        '注意倾听他人意见',
        '适合发挥领导才能'
      ]
    } else if (totalScore >= 20) {
      strengthLevel = '中和'
      characteristics = [
        '日主力量适中，相对平衡',
        '既有生扶也有克制，比较协调',
        '性格较为平和，适应能力强',
        '能够灵活应对各种情况'
      ]
      strengthAdvice = [
        '运势较为平稳，按部就班发展',
        '可以尝试多种发展方向',
        '保持平衡状态很重要',
        '适合稳定发展的道路'
      ]
    } else if (totalScore >= -20) {
      strengthLevel = '弱'
      characteristics = [
        '日主力量偏弱，需要外部支持',
        '生扶因素不足，承受压力能力有限',
        '性格较为温和，依赖性较强',
        '需要贵人扶持和帮助'
      ]
      strengthAdvice = [
        '需要走生扶运（印星、比劫）',
        '多与贵人交往，寻求帮助',
        '不宜承担过大压力',
        '适合团队合作，发挥集体力量'
      ]
    } else {
      strengthLevel = '极弱'
      characteristics = [
        '日主力量很弱，几乎不能自立',
        '生扶因素很少，克制因素很多',
        '性格较为软弱，缺乏自信',
        '需要依靠他人才能生存发展'
      ]
      strengthAdvice = [
        '必须依靠生扶运才能发展',
        '寻找可靠的后盾和支持者',
        '不宜单打独斗，要善于合作',
        '可能需要考虑从格的特殊情况'
      ]
    }

    // 检查特殊格局
    const specialPattern = checkSpecialPattern(bazi, totalScore)
    if (specialPattern) {
      strengthLevel = '特殊格局'
      characteristics.push(specialPattern.description)
      strengthAdvice = [...strengthAdvice, ...specialPattern.advice]
    }

    return {
      totalScore: totalScore.toFixed(1),
      strengthLevel,
      characteristics,
      strengthAdvice,
      summary: `综合评分${totalScore.toFixed(1)}分，判定为${strengthLevel}`,
      detailedEvaluation: evaluation
    }
  }

  function checkSpecialPattern(bazi: BaziData, score: number): any {
    // 检查从格
    if (score < -50) {
      return {
        name: '从格',
        description: '日主极弱，顺从气势',
        advice: [
          '顺从命局气势，不宜强行生扶',
          '用神要顺从最旺的五行',
          '大运流年要顺应格局走向'
        ]
      }
    }

    // 检查专旺格
    if (score > 100) {
      return {
        name: '专旺格',
        description: '日主极强，一行专旺',
        advice: [
          '顺从日主气势，不宜强行克制',
          '用神要顺从日主五行',
          '适合发挥专长，坚持特色'
        ]
      }
    }

    return null
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

  function getDiZhiCangGan(diZhi: string): string[] {
    const cangGanMap = {
      '子': ['癸'], '丑': ['己', '癸', '辛'], '寅': ['甲', '丙', '戊'],
      '卯': ['乙'], '辰': ['戊', '乙', '癸'], '巳': ['丙', '庚', '戊'],
      '午': ['丁', '己'], '未': ['己', '丁', '乙'], '申': ['庚', '壬', '戊'],
      '酉': ['辛'], '戌': ['戊', '丁', '辛'], '亥': ['壬', '甲']
    }
    return cangGanMap[diZhi as keyof typeof cangGanMap] || []
  }

  function isSheng(wuxing1: string, wuxing2: string): boolean {
    const shengMap = {
      '木': ['火'], '火': ['土'], '土': ['金'], '金': ['水'], '水': ['木']
    }
    return shengMap[wuxing1 as keyof typeof shengMap]?.includes(wuxing2) || false
  }

  function isKe(wuxing1: string, wuxing2: string): boolean {
    const keMap = {
      '木': ['土'], '土': ['水'], '水': ['火'], '火': ['金'], '金': ['木']
    }
    return keMap[wuxing1 as keyof typeof keMap]?.includes(wuxing2) || false
  }

  function getWuxingRelationship(wuxing1: string, wuxing2: string): string {
    if (wuxing1 === wuxing2) return '同类'
    if (isSheng(wuxing1, wuxing2)) return '相生'
    if (isKe(wuxing1, wuxing2)) return '相克'
    return '其他'
  }

  const executeStep = (stepIndex: number) => {
    const step = analysisSteps[stepIndex]
    const result = step.method()

    setDetailedResults((prev: any) => ({
      ...prev,
      [stepIndex]: result
    }))

    if (stepIndex < analysisSteps.length - 1) {
      setAnalysisStep(stepIndex + 1)
    } else {
      // 执行综合评估
      const evaluation = comprehensiveEvaluation(detailedResults)
      setDetailedResults((prev: any) => ({
        ...prev,
        evaluation
      }))
      setFinalStrength(evaluation.strengthLevel)
      onStrengthDetermined(evaluation)
    }
  }

  const resetAnalysis = () => {
    setAnalysisStep(0)
    setDetailedResults({})
    setFinalStrength('')
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {strengthAnalysisFramework.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {strengthAnalysisFramework.subtitle}
        </p>
      </div>

      {/* 基本原则 */}
      <div className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">📚 基本原则</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-700 mb-2">核心理论</h4>
            <ul className="space-y-2">
              {strengthAnalysisFramework.principles.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-700 mb-2">关键因素</h4>
            <ul className="space-y-2">
              {strengthAnalysisFramework.key_factors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 分析步骤 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🔍 量化分析流程
        </h3>

        <div className="space-y-4">
          {analysisSteps.map((step, index) => (
            <div key={index} className={`border rounded-lg p-6 ${
              index < analysisStep ? 'border-green-300 bg-green-50' :
              index === analysisStep ? 'border-blue-300 bg-blue-50' :
              'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    index < analysisStep ? 'bg-green-500 text-white' :
                    index === analysisStep ? 'bg-blue-500 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {index < analysisStep ? '✓' : step.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">权重：{step.weight}%</p>
                  </div>
                </div>

                {index === analysisStep && (
                  <button
                    onClick={() => executeStep(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    开始分析
                  </button>
                )}
              </div>

              {detailedResults[index] && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-2">{detailedResults[index].analysis}</div>
                    <div className="text-xs text-gray-500">
                      {detailedResults[index].details && (
                        <pre className="whitespace-pre-wrap">
                          {JSON.stringify(detailedResults[index].details, null, 2)}
                        </pre>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 综合评估结果 */}
      {detailedResults.evaluation && (
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
            📊 综合评估结果
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">基本信息</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">综合评分：</span>
                  <span className="font-medium">{detailedResults.evaluation.totalScore}分</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">身强身弱：</span>
                  <span className="font-medium text-purple-600">{detailedResults.evaluation.strengthLevel}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">总体评价</h4>
              <p className="text-gray-700 text-sm">
                {detailedResults.evaluation.summary}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-purple-700 mb-3">性格特征</h4>
            <ul className="space-y-2">
              {detailedResults.evaluation.characteristics.map((characteristic: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-700 text-sm">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-purple-700 mb-3">发展建议</h4>
            <ul className="space-y-2">
              {detailedResults.evaluation.strengthAdvice.map((advice: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">💡</span>
                  <span className="text-gray-700 text-sm">{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex justify-center space-x-4">
        {finalStrength && (
          <button
            onClick={resetAnalysis}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            重新分析
          </button>
        )}
      </div>
    </div>
  )
}