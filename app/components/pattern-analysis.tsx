'use client'

import React, { useState } from 'react'
import { BaziData } from '../bazi-analysis-engine'

interface PatternAnalysisProps {
  bazi: BaziData
  onPatternDetermined: (pattern: any) => void
}

export default function PatternAnalysis({ bazi, onPatternDetermined }: PatternAnalysisProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [patternResults, setPatternResults] = useState<any>({})
  const [finalPattern, setFinalPattern] = useState<any>(null)

  const patternFramework = {
    title: '格局判断实战技巧',
    subtitle: '基于《子平真诠》《滴天髓》的格局理论体系',
    principles: [
      '格局是八字分析的重要框架，反映命局的主要特征',
      '格局分为正格、变格、特殊格局三大类',
      '格局成败关键在于用神是否有力，组合是否有情',
      '格局高低要看清纯程度和配置情况'
    ],
    classification: [
      {
        category: '正格',
        description: '以月令透出的十神为主，包括八种基本格局',
        examples: ['正官格', '七杀格', '正财格', '偏财格', '正印格', '偏印格', '食神格', '伤官格']
      },
      {
        category: '变格',
        description: '由特殊组合形成的格局，包括从格和化气格',
        examples: ['从财格', '从杀格', '从伤格', '从印格', '从势格', '化气格']
      },
      {
        category: '特殊格局',
        description: '由特殊五行组合形成的格局',
        examples: ['润下格', '从革格', '稼穑格', '曲直格', '炎上格', '稼穑格']
      }
    ]
  }

  const analysisSteps = [
    {
      title: '第一步：识别月令透干',
      description: '检查月令是否透出，确定可能的基本格局',
      method: () => identifyMonthLingTouGan(bazi),
      icon: '🔍',
      category: '正格判断'
    },
    {
      title: '第二步：分析从格条件',
      description: '检查是否符合从格的条件和要求',
      method: () => analyzeCongeConditions(bazi),
      icon: '🔄',
      category: '变格判断'
    },
    {
      title: '第三步：检查特殊组合',
      description: '识别润下、从革等特殊格局',
      method: () => checkSpecialCombinations(bazi),
      icon: '✨',
      category: '特殊格局'
    },
    {
      title: '第四步：评估格局成败',
      description: '判断格局是否成立，配置是否良好',
      method: () => evaluatePatternSuccess(bazi, patternResults),
      icon: '⚖️',
      category: '格局评估'
    },
    {
      title: '第五步：确定格局层次',
      description: '综合评估格局的高低和发展潜力',
      method: () => determinePatternLevel(bazi, patternResults),
      icon: '🏆',
      category: '层次判断'
    }
  ]

  function identifyMonthLingTouGan(bazi: BaziData) {
    const monthZhi = bazi.month.zhi
    const monthGan = bazi.month.gan
    const allGan = [bazi.year.gan, bazi.month.gan, bazi.day.gan, bazi.hour.gan]

    // 月令藏干
    const monthCangGans = getDiZhiCangGan(monthZhi)

    // 检查月令是否透干
    const touGanList = monthCangGans.filter(cangGan =>
      allGan.includes(cangGan)
    )

    if (touGanList.length > 0) {
      // 确定正格
      const dayMaster = bazi.day.gan
      const touGan = touGanList[0] // 取第一个透干
      const shiShen = getShiShen(dayMaster, touGan)

      return {
        type: '正格',
        monthZhi,
        monthCangGans,
        touGanList,
        mainTouGan: touGan,
        shiShen,
        patternName: getPatternName(shiShen),
        analysis: `月令${monthZhi}藏干${monthCangGans.join('、')}，其中${touGan}透出，形成${getPatternName(shiShen)}`,
        success: evaluateZhengGeSuccess(bazi, shiShen, touGan)
      }
    }

    return {
      type: '待定',
      monthZhi,
      monthCangGans,
      touGanList: [],
      analysis: `月令${monthZhi}藏干${monthCangGans.join('、')}未透干，需要检查其他格局可能性`
    }
  }

  function analyzeCongeConditions(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)
    const allElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    // 统计同类五行数量
    const sameWuxingCount = allElements.filter(element =>
      getWuxing(element) === dayMasterWuxing
    ).length

    // 统计生扶五行数量
    const shengWuxing = getShengWuxing(dayMasterWuxing)
    const shengWuxingCount = allElements.filter(element =>
      shengWuxing.includes(getWuxing(element))
    ).length

    // 统计克制五行数量
    const keWuxing = getKeWuxing(dayMasterWuxing)
    const keWuxingCount = allElements.filter(element =>
      keWuxing.includes(getWuxing(element))
    ).length

    // 判断从格条件
    const totalSupport = sameWuxingCount + shengWuxingCount
    const totalRestraint = keWuxingCount + (8 - totalSupport)

    let congeType = ''
    let congeConditions = []
    let canConge = false

    if (totalSupport <= 2 && totalRestraint >= 6) {
      // 日主极弱，可能成从格
      if (keWuxingCount >= 4) {
        congeType = '从杀格'
        congeConditions = ['日主极弱', '官杀当令', '比劫印星极少']
      } else if (isWealthDominant(allElements, dayMasterWuxing)) {
        congeType = '从财格'
        congeConditions = ['日主极弱', '财星当令', '比劫印星极少']
      } else {
        congeType = '从势格'
        congeConditions = ['日主极弱', '顺势而为']
      }
      canConge = true
    }

    return {
      type: '变格分析',
      sameWuxingCount,
      shengWuxingCount,
      keWuxingCount,
      totalSupport,
      totalRestraint,
      congeType,
      congeConditions,
      canConge,
      analysis: canConge
        ? `日主${dayMaster}极弱，${totalSupport}个生扶，${totalRestraint}个克制，可以形成${congeType}`
        : `日主${dayMaster}有${totalSupport}个生扶，${totalRestraint}个克制，不符合从格条件`
    }
  }

  function checkSpecialCombinations(bazi: BaziData) {
    const allElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    const wuxingCount = countWuxing(allElements)
    const specialPatterns = []

    // 检查润下格（全水）
    if (wuxingCount['水'] >= 6) {
      specialPatterns.push({
        name: '润下格',
        condition: '命局水势浩大',
        requirement: '需要土来制水，或木来泄秀',
        analysis: '水多成势，如江河湖海，需要土堤岸或木疏导'
      })
    }

    // 检查从革格（全金）
    if (wuxingCount['金'] >= 6) {
      specialPatterns.push({
        name: '从革格',
        condition: '命局金势旺盛',
        requirement: '需要火来制金，或水来泄秀',
        analysis: '金多成器，需要火炼或水淘洗'
      })
    }

    // 检查稼穑格（全土）
    if (wuxingCount['土'] >= 6) {
      specialPatterns.push({
        name: '稼穑格',
        condition: '命局土势厚重',
        requirement: '需要木来疏土，或金来泄秀',
        analysis: '土多成山，需要木疏通或金开辟'
      })
    }

    // 检查曲直格（全木）
    if (wuxingCount['木'] >= 6) {
      specialPatterns.push({
        name: '曲直格',
        condition: '命局木势繁茂',
        requirement: '需要金来制木，或火来泄秀',
        analysis: '木多成林，需要金修剪或火燃烧'
      })
    }

    // 检查炎上格（全火）
    if (wuxingCount['火'] >= 6) {
      specialPatterns.push({
        name: '炎上格',
        condition: '命局火势炽烈',
        requirement: '需要水来制火，或土来泄秀',
        analysis: '火多成炎，需要水济或土泄'
      })
    }

    return {
      type: '特殊格局',
      wuxingCount,
      specialPatterns,
      hasSpecialPattern: specialPatterns.length > 0,
      analysis: specialPatterns.length > 0
        ? `命局五行分布：${Object.entries(wuxingCount).map(([w, c]) => `${w}${c}个`).join('，')}，可构成${specialPatterns.map(p => p.name).join('、')}`
        : '五行分布相对均衡，无特殊格局'
    }
  }

  function evaluatePatternSuccess(bazi: BaziData, previousResults: any) {
    const zhengGe = previousResults[0]
    const bianceGe = previousResults[1]
    const teShuGe = previousResults[2]

    let evaluation = {
      patternType: '',
      patternName: '',
      successLevel: '中等',
      successReason: '',
      failureReason: '',
      improvement: [],
      score: 50
    }

    // 优先判断正格
    if (zhengGe && zhengGe.type === '正格') {
      evaluation.patternType = '正格'
      evaluation.patternName = zhengGe.patternName
      evaluation.score = zhengGe.success.score
      evaluation.successLevel = zhengGe.success.level
      evaluation.successReason = zhengGe.success.reason
      evaluation.failureReason = zhengGe.failure?.reason || ''
      evaluation.improvement = zhengGe.success.improvement || []
    }
    // 其次判断从格
    else if (bianceGe && bianceGe.canConge) {
      evaluation.patternType = '变格'
      evaluation.patternName = bianceGe.congeType
      evaluation.score = 70
      evaluation.successLevel = '上等'
      evaluation.successReason = '从格成立，顺其气势，反能发达'
      evaluation.improvement = ['顺应格局走向', '避免逆势而行']
    }
    // 最后判断特殊格局
    else if (teShuGe && teShuGe.hasSpecialPattern) {
      evaluation.patternType = '特殊格局'
      evaluation.patternName = teShuGe.specialPatterns[0].name
      evaluation.score = 80
      evaluation.successLevel = '上等'
      evaluation.successReason = '特殊格局成立，专精一行，容易有大成就'
      evaluation.improvement = teShuGe.specialPatterns[0].requirement.split('、')
    }
    // 都不符合，为普通格局
    else {
      evaluation.patternType = '普通格局'
      evaluation.patternName = '无固定格局'
      evaluation.score = 40
      evaluation.successLevel = '中等'
      evaluation.successReason = '虽然无特殊格局，但五行相对平衡，可以按普通格局分析'
      evaluation.improvement = ['注重用神调候', '平衡五行力量']
    }

    return evaluation
  }

  function determinePatternLevel(bazi: BaziData, previousResults: any) {
    const patternSuccess = previousResults[3]
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)

    let levelAnalysis = {
      currentLevel: '',
      levelScore: 0,
      characteristics: [],
      potential: [],
      advice: [],
      developmentDirection: []
    }

    // 基于格局成功程度确定层次
    if (patternSuccess.successLevel === '上等') {
      levelAnalysis.currentLevel = '上等格局'
      levelAnalysis.levelScore = 85
      levelAnalysis.characteristics = [
        '格局清纯有力',
        '用神配置得当',
        '五行流通有情',
        '发展潜力巨大'
      ]
      levelAnalysis.potential = [
        '容易在相关领域取得大成就',
        '社会地位较高',
        '财富积累能力强',
        '贵人相助多'
      ]
      levelAnalysis.developmentDirection = [
        '发挥格局特长',
        '把握关键机遇',
        '保持格局优势'
      ]
    } else if (patternSuccess.successLevel === '中等') {
      levelAnalysis.currentLevel = '中等格局'
      levelAnalysis.levelScore = 60
      levelAnalysis.characteristics = [
        '格局基本成立',
        '用神尚可',
        '五行相对平衡',
        '有发展空间'
      ]
      levelAnalysis.potential = [
        '可以取得中等成就',
        '需要努力奋斗',
        '有机遇也有挑战'
      ]
      levelAnalysis.developmentDirection = [
        '弥补格局不足',
        '抓住发展机遇',
        '持续努力提升'
      ]
    } else {
      levelAnalysis.currentLevel = '下等格局'
      levelAnalysis.levelScore = 30
      levelAnalysis.characteristics = [
        '格局有缺陷',
        '用神无力',
        '五行配置不当',
        '发展受限'
      ]
      levelAnalysis.potential = [
        '需要付出更多努力',
        '适合小成或中成',
        '需要贵人扶持'
      ]
      levelAnalysis.developmentDirection = [
        '重点调理用神',
        '寻求合作机会',
        '循序渐进发展'
      ]
    }

    // 根据格局类型给出具体建议
    if (patternSuccess.patternType === '正格') {
      levelAnalysis.advice = [
        '注重用神的有力程度',
        '避免格局用神受冲克',
        '发挥十神的优势特长'
      ]
    } else if (patternSuccess.patternType === '变格') {
      levelAnalysis.advice = [
        '顺应格局气势发展',
        '避免逆势而为',
        '把握格局转换时机'
      ]
    } else if (patternSuccess.patternType === '特殊格局') {
      levelAnalysis.advice = [
        '专精一行，发挥特长',
        '保持格局的纯粹性',
        '避免杂乱五行干扰'
      ]
    } else {
      levelAnalysis.advice = [
        '注重五行平衡',
        '选择合适的用神',
        '循序渐进发展'
      ]
    }

    return levelAnalysis
  }

  // 辅助函数
  function getDiZhiCangGan(diZhi: string): string[] {
    const cangGanMap = {
      '子': ['癸'], '丑': ['己', '癸', '辛'], '寅': ['甲', '丙', '戊'],
      '卯': ['乙'], '辰': ['戊', '乙', '癸'], '巳': ['丙', '庚', '戊'],
      '午': ['丁', '己'], '未': ['己', '丁', '乙'], '申': ['庚', '壬', '戊'],
      '酉': ['辛'], '戌': ['戊', '丁', '辛'], '亥': ['壬', '甲']
    }
    return cangGanMap[diZhi as keyof typeof cangGanMap] || []
  }

  function getWuxing(ganZhi: string): string {
    const wuxingMap = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土',
      '庚': '金', '辛': '金', '壬': '水', '癸': '水',
      '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
      '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
    }
    return wuxingMap[ganZhi as keyof typeof wuxingMap] || '未知'
  }

  function getShiShen(dayMaster: string, element: string): string {
    const shiShenMap = {
      '甲甲': '比肩', '甲乙': '劫财', '甲丙': '食神', '甲丁': '伤官',
      '甲戊': '偏财', '甲己': '正财', '甲庚': '七杀', '甲辛': '正官',
      '甲壬': '偏印', '甲癸': '正印'
    }
    return shiShenMap[`${dayMaster}${element}` as keyof typeof shiShenMap] || '未知'
  }

  function getPatternName(shiShen: string): string {
    const patternMap = {
      '正官': '正官格',
      '七杀': '七杀格',
      '正财': '正财格',
      '偏财': '偏财格',
      '正印': '正印格',
      '偏印': '偏印格',
      '食神': '食神格',
      '伤官': '伤官格'
    }
    return patternMap[shiShen as keyof typeof patternMap] || '待定格局'
  }

  function evaluateZhengGeSuccess(bazi: BaziData, shiShen: string, touGan: string) {
    let score = 50
    let level = '中等'
    let reason = ''
    let improvement = []

    // 根据十神类型评估格局成功程度
    switch (shiShen) {
      case '正官':
        score = 70
        level = '上等'
        reason = '正官格为贵格，主事业地位'
        improvement = ['避免伤官见官', '印星护官为佳']
        break
      case '正财':
        score = 65
        level = '中上'
        reason = '正财格为富格，主财富稳健'
        improvement = ['比劫不宜多', '官星护卫为佳']
        break
      case '正印':
        score = 68
        level = '中上'
        reason = '正印格为文贵格，主学业名誉'
        improvement = ['避免财星坏印', '官星生印为佳']
        break
      case '食神':
        score = 60
        level = '中等'
        reason = '食神格为福贵格，主福气才华'
        improvement = ['避免枭神夺食', '财星生官为佳']
        break
      default:
        score = 55
        level = '中等'
        reason = '格局基本成立，需要具体分析'
        improvement = ['注重用神配合', '平衡五行力量']
    }

    return { score, level, reason, improvement }
  }

  function getShengWuxing(wuxing: string): string[] {
    const shengMap = {
      '木': ['火'], '火': ['土'], '土': ['金'], '金': ['水'], '水': ['木']
    }
    return shengMap[wuxing as keyof typeof shengMap] || []
  }

  function getKeWuxing(wuxing: string): string[] {
    const keMap = {
      '木': ['土'], '土': ['水'], '水': ['火'], '火': ['金'], '金': ['木']
    }
    return keMap[wuxing as keyof typeof keMap] || []
  }

  function countWuxing(elements: string[]): { [key: string]: number } {
    const count = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 }
    elements.forEach(element => {
      const wuxing = getWuxing(element)
      if (wuxing !== '未知') {
        count[wuxing as keyof typeof count]++
      }
    })
    return count
  }

  function isWealthDominant(allElements: string[], dayMasterWuxing: string): boolean {
    const wealthWuxing = getKeWuxing(dayMasterWuxing)
    const wealthCount = allElements.filter(element =>
      wealthWuxing.includes(getWuxing(element))
    ).length
    return wealthCount >= 4
  }

  const executeStep = (stepIndex: number) => {
    const step = analysisSteps[stepIndex]
    const result = step.method()

    setPatternResults(prev => ({
      ...prev,
      [stepIndex]: result
    }))

    if (stepIndex < analysisSteps.length - 1) {
      setCurrentStep(stepIndex + 1)
    } else {
      // 执行最终的格局层次判断
      const levelResult = determinePatternLevel(bazi, patternResults)
      setFinalPattern({
        ...patternResults[3],
        levelAnalysis: levelResult
      })
      onPatternDetermined(finalPattern)
    }
  }

  const resetAnalysis = () => {
    setCurrentStep(0)
    setPatternResults({})
    setFinalPattern(null)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {patternFramework.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {patternFramework.subtitle}
        </p>
      </div>

      {/* 格局分类 */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">🏗️ 格局分类</h3>
        <div className="space-y-4">
          {patternFramework.classification.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">{category.category}</h4>
              <p className="text-sm text-gray-600 mb-2">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example, eIndex) => (
                  <span key={eIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 基本原则 */}
      <div className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">📚 基本原则</h3>
        <ul className="space-y-2">
          {patternFramework.principles.map((principle, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">{principle}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 分析步骤 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🔍 格局判断流程
        </h3>

        <div className="space-y-4">
          {analysisSteps.map((step, index) => (
            <div key={index} className={`border rounded-lg p-6 ${
              index < currentStep ? 'border-green-300 bg-green-50' :
              index === currentStep ? 'border-blue-300 bg-blue-50' :
              'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    index < currentStep ? 'bg-green-500 text-white' :
                    index === currentStep ? 'bg-blue-500 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {index < currentStep ? '✓' : step.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
                        {step.category}
                      </span>
                    </div>
                  </div>
                </div>

                {index === currentStep && (
                  <button
                    onClick={() => executeStep(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    开始分析
                  </button>
                )}
              </div>

              {patternResults[index] && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-2 text-blue-600">
                      {patternResults[index].analysis}
                    </div>

                    {patternResults[index].patternName && (
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">格局名称：</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded ml-2">
                          {patternResults[index].patternName}
                        </span>
                      </div>
                    )}

                    {patternResults[index].successReason && (
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">成功原因：</span>
                        <span className="text-green-600 ml-2">{patternResults[index].successReason}</span>
                      </div>
                    )}

                    {patternResults[index].improvement && patternResults[index].improvement.length > 0 && (
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">改进建议：</span>
                        <ul className="mt-1 space-y-1">
                          {patternResults[index].improvement.map((item: string, iIndex: number) => (
                            <li key={iIndex} className="text-sm text-gray-600 ml-4">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 最终格局结果 */}
      {finalPattern && (
        <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
            🏆 最终格局确定
          </h3>

          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-green-700 mb-3">格局类型</h4>
            <div className="text-2xl font-bold text-green-600 mb-2">
              {finalPattern.patternName}
            </div>
            <div className="text-sm text-gray-600">
              {finalPattern.patternType} • 成功程度：{finalPattern.successLevel}
            </div>
          </div>

          {finalPattern.levelAnalysis && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">格局层次</h4>
                <p className="text-gray-700">{finalPattern.levelAnalysis.currentLevel}</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${finalPattern.levelAnalysis.levelScore}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    评分：{finalPattern.levelAnalysis.levelScore}/100
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">格局特征</h4>
                <ul className="space-y-1">
                  {finalPattern.levelAnalysis.characteristics.map((characteristic: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{characteristic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">发展潜力</h4>
                <ul className="space-y-1">
                  {finalPattern.levelAnalysis.potential.map((potential: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{potential}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">发展建议</h4>
                <ul className="space-y-1">
                  {finalPattern.levelAnalysis.advice.map((advice: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">💡</span>
                      <span className="text-gray-700 text-sm">{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex justify-center space-x-4">
        {finalPattern && (
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