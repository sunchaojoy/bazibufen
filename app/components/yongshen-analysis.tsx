'use client'

import React, { useState } from 'react'
import { BaziData } from '../bazi-analysis-engine'

interface YongShenAnalysisProps {
  bazi: BaziData
  strengthLevel: string
  onYongShenSelected: (yongshen: any) => void
}

export default function YongShenAnalysis({ bazi, strengthLevel, onYongShenSelected }: YongShenAnalysisProps) {
  const [currentAnalysis, setCurrentAnalysis] = useState(0)
  const [yongshenResults, setYongshenResults] = useState<any>({})
  const [finalYongShen, setFinalYongShen] = useState<any>(null)

  const yongshenFramework = {
    title: '用神选取高级技巧',
    subtitle: '基于《滴天髓》《穷通宝鉴》的用神理论体系',
    principles: [
      '用神是八字调理的关键，是趋吉避凶的根本',
      '用神选取要综合考虑调候、扶抑、通关三个方面',
      '用神要有力，在命局中有根基或得生扶',
      '用神要根据大运流年的变化而调整'
    ],
    types: [
      { name: '调候用神', description: '调节命局寒暖燥湿，使五行中和' },
      { name: '扶抑用神', description: '扶助日主或克制过旺，保持平衡' },
      { name: '通关用神', description: '化解五行相克，使流通有情' },
      { name: '病药用神', description: '针对命局病症，对症下药' }
    ]
  }

  const analysisSteps = [
    {
      title: '第一步：分析调候用神',
      description: '根据月令和日主五行，确定调候需求',
      method: () => analyzeTiaoHouYongShen(bazi),
      icon: '🌡️',
      priority: '高'
    },
    {
      title: '第二步：确定扶抑用神',
      description: '根据身强身弱，确定扶助或克制方向',
      method: () => analyzeFuYiYongShen(bazi, strengthLevel),
      icon: '⚖️',
      priority: '高'
    },
    {
      title: '第三步：寻找通关用神',
      description: '化解五行相克，建立良好流通',
      method: () => analyzeTongGuanYongShen(bazi),
      icon: '🌉',
      priority: '中'
    },
    {
      title: '第四步：检查病药关系',
      description: '识别命局病症，找到对应药物',
      method: () => analyzeBingYaoYongShen(bazi),
      icon: '💊',
      priority: '中'
    },
    {
      title: '第五步：综合选取主用神',
      description: '平衡各种需求，确定主要用神',
      method: () => selectMainYongShen(yongshenResults),
      icon: '👑',
      priority: '最高'
    }
  ]

  function analyzeTiaoHouYongShen(bazi: BaziData) {
    const dayMaster = bazi.day.gan
    const monthZhi = bazi.month.zhi
    const dayMasterWuxing = getWuxing(dayMaster)
    const monthWuxing = getWuxing(monthZhi)
    const season = getSeason(monthZhi)

    let tiaoHouNeeds = []
    let recommendedYongShen = []

    // 《穷通宝鉴》调候用神总诀
    const tiaoHouRules = {
      // 春季（寅卯辰月）
      '春': {
        '甲': { needs: ['金', '土', '火'], reason: '甲木春生，枝叶繁茂，宜金修剪，土培根，火暖局' },
        '乙': { needs: ['火', '土'], reason: '乙木春生，藤萝之性，宜火温暖，土栽培' },
        '丙': { needs: ['水', '土'], reason: '丙火春生，木旺火相，宜水济火，土泄秀' },
        '丁': { needs: ['木', '火'], reason: '丁火春生，木能生火，宜木助火，火增辉' },
        '戊': { needs: ['火', '木'], reason: '戊土春生，虚湿寒冷，宜火暖土，木疏土' },
        '己': { needs: ['火', '土'], reason: '己土春生，湿泥之性，宜火燥土，土助身' },
        '庚': { needs: ['火', '土'], reason: '庚金春生，木坚金缺，宜火制木，土生金' },
        '辛': { needs: ['土', '火'], reason: '辛金春生，珠玉之性，宜土珍藏，火温养' },
        '壬': { needs: ['土', '火'], reason: '壬水春生，木旺水泛，宜土制水，火暖局' },
        '癸': { needs: ['火', '土'], reason: '癸水春生，雨露之性，宜火温暖，土培植' }
      },
      // 夏季（巳午未月）
      '夏': {
        '甲': { needs: ['水', '土'], reason: '甲木夏生，火旺木枯，宜水滋润，土培根' },
        '乙': { needs: ['水', '土'], reason: '乙木夏生，花草干枯，宜水滋润，土栽培' },
        '丙': { needs: ['水', '土'], reason: '丙火夏生，阳光烈烈，宜水济火，土泄秀' },
        '丁': { needs: ['水', '木'], reason: '丁火夏生，灯火通明，宜水调和，木助火' },
        '戊': { needs: ['水', '金'], reason: '戊土夏生，燥热坚硬，宜水润土，金泄秀' },
        '己': { needs: ['水', '金'], reason: '己土夏生，干裂之土，宜水滋润，金生水' },
        '庚': { needs: ['水', '土'], reason: '庚金夏生，火旺金熔，宜水制火，土生金' },
        '辛': { needs: ['水', '土'], reason: '辛金夏生，珠宝炎热，宜水降温，土保护' },
        '壬': { needs: ['土', '火'], reason: '壬水夏生，火旺水沸，宜土制水，火调候' },
        '癸': { needs: ['金', '火'], reason: '癸水夏生，水汽蒸腾，宜金生水，火调候' }
      },
      // 秋季（申酉戌月）
      '秋': {
        '甲': { needs: ['火', '土'], reason: '甲木秋生，金旺木缺，宜火制金，土培根' },
        '乙': { needs: ['火', '水'], reason: '乙木秋生，凋零之木，宜火温暖，水滋润' },
        '丙': { needs: ['木', '火'], reason: '丙火秋生，金旺火衰，宜木助火，火增光' },
        '丁': { needs: ['木', '火'], reason: '丁火秋生，灯火微弱，宜木助燃，火增辉' },
        '戊': { needs: ['火', '木'], reason: '戊土秋生，金多土虚，宜火生土，木疏土' },
        '己': { needs: ['火', '土'], reason: '己土秋生，虚浮之土，宜火暖土，土助身' },
        '庚': { needs: ['火', '土'], reason: '庚金秋生，当令得势，宜火制金，土生金' },
        '辛': { needs: ['土', '火'], reason: '辛金秋生，珠玉闪耀，宜土珍藏，火温养' },
        '壬': { needs: ['土', '金'], reason: '壬水秋生，金白水清，宜土制水，金生水' },
        '癸': { needs: ['金', '火'], reason: '癸水秋生，露水晶莹，宜金生水，火调候' }
      },
      // 冬季（亥子丑月）
      '冬': {
        '甲': { needs: ['火', '土'], reason: '甲木冬生，天寒地冻，宜火暖局，土培根' },
        '乙': { needs: ['火', '土'], reason: '乙木冬生，枯木逢春，宜火温暖，土栽培' },
        '丙': { needs: ['木', '火'], reason: '丙火冬生，阳光微弱，宜木助火，火增光' },
        '丁': { needs: ['木', '火'], reason: '丁火冬生，灯火昏暗，宜木助燃，火增辉' },
        '戊': { needs: ['火', '土'], reason: '戊土冬生，冰冻坚硬，宜火解冻，土助身' },
        '己': { needs: ['火', '土'], reason: '己土冬生，寒湿之土，宜火燥土，土培植' },
        '庚': { needs: ['火', '土'], reason: '庚金冬生，水旺金沉，宜火制水，土生金' },
        '辛': { needs: ['土', '火'], reason: '辛金冬生，珠宝寒冷，宜土保护，火温养' },
        '壬': { needs: ['土', '火'], reason: '壬水冬生，当令得势，宜土制水，火调候' },
        '癸': { needs: ['火', '土'], reason: '癸水冬生，水汽凝结，宜火温暖，土培植' }
      }
    }

    const seasonRules = tiaoHouRules[season as keyof typeof tiaoHouRules]
    if (seasonRules && seasonRules[dayMaster as keyof typeof seasonRules]) {
      const rule = seasonRules[dayMaster as keyof typeof seasonRules]
      tiaoHouNeeds = rule.needs
      recommendedYongShen = rule.needs

      return {
        type: '调候用神',
        season,
        dayMaster,
        needs: tiaoHouNeeds,
        recommended: recommendedYongShen,
        reason: rule.reason,
        priority: '高',
        analysis: `${dayMaster}生于${season}季，${rule.reason}`,
        examples: getTiaoHouExamples(dayMaster, season)
      }
    }

    return {
      type: '调候用神',
      season,
      dayMaster,
      needs: ['需要进一步分析'],
      recommended: ['需要进一步分析'],
      reason: '特殊情况需要详细分析',
      priority: '中',
      analysis: '需要根据具体命局情况确定调候用神'
    }
  }

  function analyzeFuYiYongShen(bazi: BaziData, strengthLevel: string) {
    const dayMaster = bazi.day.gan
    const dayMasterWuxing = getWuxing(dayMaster)
    let fuYiDirection = ''
    let recommendedYongShen = []
    let analysis = ''

    if (['强', '极强'].includes(strengthLevel)) {
      fuYiDirection = '抑制'
      recommendedYongShen = getKeWuxing(dayMasterWuxing)
      analysis = `日主${strengthLevel}，需要用${recommendedYongShen.join('、')}来克制，使其趋于平衡`
    } else if (['弱', '极弱'].includes(strengthLevel)) {
      fuYiDirection = '扶助'
      recommendedYongShen = [dayMasterWuxing, ...getShengWuxing(dayMasterWuxing)]
      analysis = `日主${strengthLevel}，需要用${recommendedYongShen.join('、')}来扶助，增强力量`
    } else {
      fuYiDirection = '保持平衡'
      analysis = `日主${strengthLevel}，相对平衡，可以适当调候或保持现状`
    }

    // 检查命局中的现有用神
    const existingElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    const availableYongShen = recommendedYongShen.filter(wuxing =>
      existingElements.some(element => getWuxing(element) === wuxing)
    )

    return {
      type: '扶抑用神',
      strengthLevel,
      direction: fuYiDirection,
      recommended: recommendedYongShen,
      available: availableYongShen,
      analysis,
      priority: '高',
      details: {
        dayMasterWuxing,
        needSupport: ['弱', '极弱'].includes(strengthLevel),
        needRestrain: ['强', '极强'].includes(strengthLevel)
      }
    }
  }

  function analyzeTongGuanYongShen(bazi: BaziData) {
    const allElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    const wuxingCount = countWuxing(allElements)
    const conflicts = findWuxingConflicts(wuxingCount)
    let tongGuanYongShen = []

    conflicts.forEach(conflict => {
      const [wuxing1, wuxing2] = conflict
      const bridge = findBridgeWuxing(wuxing1, wuxing2)
      if (bridge && !tongGuanYongShen.includes(bridge)) {
        tongGuanYongShen.push(bridge)
      }
    })

    return {
      type: '通关用神',
      conflicts,
      tongGuanYongShen,
      analysis: tongGuanYongShen.length > 0
        ? `命局中存在${conflicts.map(c => c.join('克')).join('、')}的相克关系，需要用${tongGuanYongShen.join('、')}来通关`
        : '命局五行流通较好，无需特别通关',
      priority: tongGuanYongShen.length > 0 ? '中' : '低'
    }
  }

  function analyzeBingYaoYongShen(bazi: BaziData) {
    const allElements = [
      bazi.year.gan, bazi.year.zhi,
      bazi.month.gan, bazi.month.zhi,
      bazi.day.gan, bazi.day.zhi,
      bazi.hour.gan, bazi.hour.zhi
    ]

    const wuxingCount = countWuxing(allElements)
    const problems = identifyProblems(wuxingCount)
    const solutions = findSolutions(problems)

    return {
      type: '病药用神',
      problems,
      solutions,
      analysis: problems.length > 0
        ? `命局存在${problems.join('、')}等问题，需要用${solutions.join('、')}来调理`
        : '命局相对健康，无明显病症',
      priority: problems.length > 0 ? '中' : '低'
    }
  }

  function selectMainYongShen(results: any) {
    const tiaoHou = results[0] || { recommended: [] }
    const fuYi = results[1] || { recommended: [] }
    const tongGuan = results[2] || { tongGuanYongShen: [] }
    const bingYao = results[3] || { solutions: [] }

    // 用神优先级：调候 > 扶抑 > 通关 > 病药
    let mainYongShen = []
    let explanation = []

    // 首选调候用神
    if (tiaoHou.recommended && tiaoHou.recommended.length > 0) {
      mainYongShen = [...tiaoHou.recommended]
      explanation.push(`首选调候用神${tiaoHou.recommended.join('、')}，调节命局寒暖燥湿`)
    }

    // 其次扶抑用神
    if (fuYi.recommended && fuYi.recommended.length > 0) {
      fuYi.recommended.forEach((wuxing: string) => {
        if (!mainYongShen.includes(wuxing)) {
          mainYongShen.push(wuxing)
        }
      })
      explanation.push(`兼顾扶抑用神${fuYi.recommended.join('、')}，保持日主平衡`)
    }

    // 再次通关用神
    if (tongGuan.tongGuanYongShen && tongGuan.tongGuanYongShen.length > 0) {
      tongGuan.tongGuanYongShen.forEach((wuxing: string) => {
        if (!mainYongShen.includes(wuxing)) {
          mainYongShen.push(wuxing)
        }
      })
      explanation.push(`配合通关用神${tongGuan.tongGuanYongShen.join('、')}，化解相克关系`)
    }

    // 最后病药用神
    if (bingYao.solutions && bingYao.solutions.length > 0) {
      bingYao.solutions.forEach((wuxing: string) => {
        if (!mainYongShen.includes(wuxing)) {
          mainYongShen.push(wuxing)
        }
      })
      explanation.push(`结合病药用神${bingYao.solutions.join('、')}，调理命局问题`)
    }

    return {
      mainYongShen,
      explanation,
      priority: mainYongShen.map((wuxing, index) => `${index + 1}. ${wuxing}`).join('；'),
      summary: `综合分析，主要用神为${mainYongShen.join('、')}，以调候为先，扶抑为本，通关为辅，病药为补`
    }
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

  function getTiaoHouExamples(dayMaster: string, season: string): string[] {
    const examples = {
      '春甲': ['庚金制木', '戊土培根', '丙火暖局'],
      '夏丙': ['壬水济火', '己土泄秀', '辰土库水'],
      '秋庚': ['丁火炼金', '戊土生金', '水润燥'],
      '冬壬': ['戊土制水', '丙火暖局', '土培木']
    }
    return examples[`${season}${dayMaster}` as keyof typeof examples] || []
  }

  function getKeWuxing(wuxing: string): string[] {
    const keMap = {
      '木': ['土'], '土': ['水'], '水': ['火'], '火': ['金'], '金': ['木']
    }
    return keMap[wuxing as keyof typeof keMap] || []
  }

  function getShengWuxing(wuxing: string): string[] {
    const shengMap = {
      '木': ['火'], '火': ['土'], '土': ['金'], '金': ['水'], '水': ['木']
    }
    return shengMap[wuxing as keyof typeof shengMap] || []
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

  function findWuxingConflicts(count: { [key: string]: number }): string[][] {
    const conflicts = []
    const conflictPairs = [
      ['木', '土'], ['土', '水'], ['水', '火'], ['火', '金'], ['金', '木']
    ]

    conflictPairs.forEach(([wuxing1, wuxing2]) => {
      if (count[wuxing1] > 0 && count[wuxing2] > 0) {
        conflicts.push([wuxing1, wuxing2])
      }
    })

    return conflicts
  }

  function findBridgeWuxing(wuxing1: string, wuxing2: string): string | null {
    const bridgeMap = {
      '木土': '火', '土水': '金', '水火': '木', '火金': '土', '金木': '水'
    }
    return bridgeMap[`${wuxing1}${wuxing2}` as keyof typeof bridgeMap] ||
           bridgeMap[`${wuxing2}${wuxing1}` as keyof typeof bridgeMap] || null
  }

  function identifyProblems(count: { [key: string]: number }): string[] {
    const problems = []
    Object.entries(count).forEach(([wuxing, num]) => {
      if (num === 0) {
        problems.push(`${wuxing}行缺失`)
      } else if (num >= 4) {
        problems.push(`${wuxing}行过旺`)
      }
    })
    return problems
  }

  function findSolutions(problems: string[]): string[] {
    const solutions = []
    problems.forEach(problem => {
      if (problem.includes('缺失')) {
        const wuxing = problem.replace('行缺失', '')
        solutions.push(wuxing)
      } else if (problem.includes('过旺')) {
        const wuxing = problem.replace('行过旺', '')
        solutions.push(...getKeWuxing(wuxing))
      }
    })
    return [...new Set(solutions)]
  }

  const executeStep = (stepIndex: number) => {
    const step = analysisSteps[stepIndex]
    const result = step.method()

    setYongshenResults(prev => ({
      ...prev,
      [stepIndex]: result
    }))

    if (stepIndex < analysisSteps.length - 1) {
      setCurrentAnalysis(stepIndex + 1)
    } else {
      // 执行最终用神选择
      const finalResult = selectMainYongShen(yongshenResults)
      setFinalYongShen(finalResult)
      onYongShenSelected(finalResult)
    }
  }

  const resetAnalysis = () => {
    setCurrentAnalysis(0)
    setYongshenResults({})
    setFinalYongShen(null)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {yongshenFramework.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {yongshenFramework.subtitle}
        </p>
      </div>

      {/* 用神类型介绍 */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-4">🎯 用神类型</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {yongshenFramework.types.map((type, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">{type.name}</h4>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 基本原则 */}
      <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">📚 基本原则</h3>
        <ul className="space-y-2">
          {yongshenFramework.principles.map((principle, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span className="text-gray-700">{principle}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 分析步骤 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🔍 用神选取流程
        </h3>

        <div className="space-y-4">
          {analysisSteps.map((step, index) => (
            <div key={index} className={`border rounded-lg p-6 ${
              index < currentAnalysis ? 'border-green-300 bg-green-50' :
              index === currentAnalysis ? 'border-blue-300 bg-blue-50' :
              'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    index < currentAnalysis ? 'bg-green-500 text-white' :
                    index === currentAnalysis ? 'bg-blue-500 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {index < currentAnalysis ? '✓' : step.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        优先级：{step.priority}
                      </span>
                    </div>
                  </div>
                </div>

                {index === currentAnalysis && (
                  <button
                    onClick={() => executeStep(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    开始分析
                  </button>
                )}
              </div>

              {yongshenResults[index] && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-2 text-blue-600">
                      {yongshenResults[index].analysis}
                    </div>

                    {yongshenResults[index].recommended && (
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">推荐用神：</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {yongshenResults[index].recommended.map((wuxing: string, wIndex: number) => (
                            <span key={wIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                              {wuxing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {yongshenResults[index].reason && (
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">理由：</span>
                        {yongshenResults[index].reason}
                      </div>
                    )}

                    {yongshenResults[index].examples && yongshenResults[index].examples.length > 0 && (
                      <div className="mt-2">
                        <span className="font-medium text-gray-700">具体例子：</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {yongshenResults[index].examples.map((example: string, eIndex: number) => (
                            <span key={eIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 最终用神结果 */}
      {finalYongShen && (
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
            👑 最终用神确定
          </h3>

          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-purple-700 mb-3">主要用神</h4>
            <div className="flex justify-center flex-wrap gap-3">
              {finalYongShen.mainYongShen.map((wuxing: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-purple-600 text-white rounded-lg text-lg font-medium">
                  {wuxing}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">用神优先级</h4>
              <p className="text-gray-700">{finalYongShen.priority}</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">选择理由</h4>
              <ul className="space-y-2">
                {finalYongShen.explanation.map((explanation: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 text-sm">{explanation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <p className="text-center text-purple-700 font-medium">
                {finalYongShen.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex justify-center space-x-4">
        {finalYongShen && (
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