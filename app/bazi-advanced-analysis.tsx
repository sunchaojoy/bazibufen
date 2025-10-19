'use client'

import { useState } from 'react'
import { BaziAnalysisEngine, BaziData, AnalysisResult } from './bazi-analysis-engine'
import StructureAnalysis from './components/structure-analysis'
import StrengthAnalysis from './components/strength-analysis'
import YongShenAnalysis from './components/yongshen-analysis'
import PatternAnalysis from './components/pattern-analysis'

// 样例八字数据
const exampleBaziData: BaziData = {
  year: { gan: '乙', zhi: '亥' },
  month: { gan: '甲', zhi: '申' },
  day: { gan: '丁', zhi: '丑' },
  hour: { gan: '乙', zhi: '巳' }
}

export default function BaziAdvancedAnalysis() {
  const [baziData, setBaziData] = useState<BaziData>(exampleBaziData)
  const [currentModule, setCurrentModule] = useState<string>('overview')
  const [analysisResults, setAnalysisResults] = useState<Partial<AnalysisResult>>({})
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analysisModules = [
    {
      id: 'overview',
      name: '学习大纲',
      description: '八字实战解读技巧学习体系',
      icon: '📚',
      color: 'blue'
    },
    {
      id: 'structure',
      name: '命局分析',
      description: '命局分析的基本框架和方法',
      icon: '🔍',
      color: 'green'
    },
    {
      id: 'strength',
      name: '身强身弱',
      description: '日主旺衰的量化判断技巧',
      icon: '⚖️',
      color: 'purple'
    },
    {
      id: 'yongshen',
      name: '用神选取',
      description: '调候、扶抑、通关用神的高级技巧',
      icon: '🎯',
      color: 'orange'
    },
    {
      id: 'pattern',
      name: '格局判断',
      description: '正格、变格、特殊格局的实战分析',
      icon: '🏆',
      color: 'red'
    },
    {
      id: 'shishen',
      name: '十神组合',
      description: '十神搭配的深度解读技巧',
      icon: '⭐',
      color: 'indigo'
    },
    {
      id: 'family',
      name: '六亲关系',
      description: '父母、配偶、子女、兄弟姐妹的分析方法',
      icon: '👨‍👩‍👧‍👦',
      color: 'pink'
    },
    {
      id: 'career',
      name: '事业财运',
      description: '官星、财星、食伤、印星的综合解读',
      icon: '💼',
      color: 'yellow'
    },
    {
      id: 'personality',
      name: '性格特征',
      description: '日主五行和十神组合的性格分析',
      icon: '🧠',
      color: 'teal'
    },
    {
      id: 'fortune',
      name: '运势变化',
      description: '大运流年的解读技巧和应期判断',
      icon: '📈',
      color: 'cyan'
    }
  ]

  const learningFramework = {
    title: '八字实战解读技巧完整学习体系',
    subtitle: '基于《滴天髓》《子平真诠》《穷通宝鉴》等经典的现代实用解读方法',
    description: '本系统将八字学习分为10个核心模块，从基础理论到实战应用，循序渐进地掌握八字解读的核心技巧。',

    modules: [
      {
        title: '1. 命局分析的基本框架',
        objectives: [
          '掌握命局分析的步骤和优先级',
          '学会从整体到局部的分析方法',
          '了解常见分析误区和注意事项'
        ],
        keyPoints: [
          '先看命局整体气势，再分析局部细节',
          '分析优先级：身强身弱 → 用神选取 → 格局判断',
          '避免只看日主，忽视全局的错误'
        ]
      },
      {
        title: '2. 身强身弱的判断技巧',
        objectives: [
          '掌握量化判断日主旺衰的方法',
          '学会计算令月、地支、天干的力量',
          '了解特殊格局的识别方法'
        ],
        keyPoints: [
          '月令影响最大，权重30%',
          '地支藏干次之，权重25%',
          '天干党众再次，权重20%'
        ]
      },
      {
        title: '3. 用神选取的高级技巧',
        objectives: [
          '掌握调候用神的选取原则',
          '学会扶抑用神的确定方法',
          '了解通关用神的识别技巧'
        ],
        keyPoints: [
          '调候为先，调节寒暖燥湿',
          '扶抑为本，保持日主平衡',
          '通关为辅，化解五行相克'
        ]
      },
      {
        title: '4. 格局判断的实战技巧',
        objectives: [
          '识别正格的成立条件',
          '判断变格的转换时机',
          '了解特殊格局的特征'
        ],
        keyPoints: [
          '正格以月令透干为主',
          '从格要日主极弱，顺势而为',
          '特殊格局要五行专精'
        ]
      }
    ],

    practicalTips: [
      '✅ 坚持系统学习，不要急于求成',
      '✅ 理论结合实践，多分析案例',
      '✅ 注重用神变化，动态看命',
      '✅ 避免宿命论，积极指导人生',
      '❌ 不要死记硬背，要理解原理',
      '❌ 不要只看表面，要深入分析',
      '❌ 不要过于绝对，要留有余地',
      '❌ 不要迷信权威，要独立思考'
    ]
  }

  const caseStudies = [
    {
      title: '案例一：身强杀旺的官格',
      bazi: '甲午 戊辰 丁亥 庚子',
      analysis: '丁火日主生于辰月，得令不旺，但年支午火为根，时柱庚子耗身，身弱杀旺，用印星化杀',
      lessons: [
        '月令虽然不帮身，但要看其他支撑',
        '杀旺身弱，印星为第一用神',
        '格局高低看用神的有力程度'
      ]
    },
    {
      title: '案例二：从财格的判断',
      bazi: '乙酉 庚辰 己卯 甲戌',
      analysis: '己土日主生于辰月，本应得令，但八字金木旺盛，土虚无力，可以顺从财势，成从财格',
      lessons: [
        '从格的关键是日主极弱',
        '顺从最旺的五行气势',
        '从格反而容易有大成就'
      ]
    },
    {
      title: '案例三：特殊格局润下格',
      bazi: '壬子 癸亥 丙子 壬辰',
      analysis: '八字水势浩大，丙火无根，可以顺从水势，成润下格，用土制水或木泄秀',
      lessons: [
        '特殊格局要五行专精',
        '顺其气势，不要逆势而为',
        '用神要顺应格局特征'
      ]
    }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* 学习框架介绍 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {learningFramework.title}
        </h2>
        <p className="text-gray-600 text-lg text-center mb-6">
          {learningFramework.subtitle}
        </p>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          {learningFramework.description}
        </p>
      </div>

      {/* 核心模块概览 */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">🎯 核心学习模块</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisModules.map((module) => (
            <div
              key={module.id}
              onClick={() => setCurrentModule(module.id)}
              className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                currentModule === module.id
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${module.color}-100 rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{module.name}</h4>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 学习路径 */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">📚 建议学习路径</h3>
        <div className="space-y-6">
          {learningFramework.modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{module.title}</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">🎯 学习目标</h5>
                  <ul className="space-y-2">
                    {module.objectives.map((objective, oIndex) => (
                      <li key={oIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">💡 关键要点</h5>
                  <ul className="space-y-2">
                    {module.keyPoints.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 实战技巧 */}
      <div className="bg-yellow-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-yellow-800 mb-6">⚡ 实战技巧要点</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-3">✅ 正确方法</h4>
            <ul className="space-y-2">
              {learningFramework.practicalTips.filter(tip => tip.startsWith('✅')).map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">{tip.slice(0, 2)}</span>
                  <span className="text-gray-700 text-sm">{tip.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-700 mb-3">❌ 常见误区</h4>
            <ul className="space-y-2">
              {learningFramework.practicalTips.filter(tip => tip.startsWith('❌')).map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">{tip.slice(0, 2)}</span>
                  <span className="text-gray-700 text-sm">{tip.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 经典案例 */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">📖 经典案例分析</h3>
        <div className="space-y-6">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{caseStudy.title}</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">八字命盘</h5>
                  <div className="text-lg font-mono bg-gray-50 p-4 rounded text-center">
                    {caseStudy.bazi}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">分析要点</h5>
                  <p className="text-gray-700 text-sm">{caseStudy.analysis}</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold text-gray-700 mb-2">学习要点</h5>
                <ul className="space-y-1">
                  {caseStudy.lessons.map((lesson, lIndex) => (
                    <li key={lIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderCurrentModule = () => {
    switch (currentModule) {
      case 'overview':
        return renderOverview()

      case 'structure':
        return (
          <StructureAnalysis
            bazi={baziData}
            onAnalysisComplete={(result) => {
              setAnalysisResults(prev => ({ ...prev, structureAnalysis: result }))
            }}
          />
        )

      case 'strength':
        return (
          <StrengthAnalysis
            bazi={baziData}
            onStrengthDetermined={(result) => {
              setAnalysisResults(prev => ({ ...prev, strengthAnalysis: result }))
            }}
          />
        )

      case 'yongshen':
        return (
          <YongShenAnalysis
            bazi={baziData}
            strengthLevel={analysisResults.strengthAnalysis?.strengthLevel || '中和'}
            onYongShenSelected={(result) => {
              setAnalysisResults(prev => ({ ...prev, yongShenAnalysis: result }))
            }}
          />
        )

      case 'pattern':
        return (
          <PatternAnalysis
            bazi={baziData}
            onPatternDetermined={(result) => {
              setAnalysisResults(prev => ({ ...prev, geJuAnalysis: result }))
            }}
          />
        )

      default:
        return (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">模块开发中</h3>
            <p className="text-gray-600 mb-8">
              该模块正在完善中，敬请期待！
            </p>
            <button
              onClick={() => setCurrentModule('overview')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              返回学习大纲
            </button>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* 导航栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">
                八字实战解读技巧学习系统
              </h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              {analysisModules.slice(0, 6).map((module) => (
                <button
                  key={module.id}
                  onClick={() => setCurrentModule(module.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentModule === module.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {module.name}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setCurrentModule('overview')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              学习大纲
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 当前八字数据 */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">当前分析八字</h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-1">年柱</div>
              <div className="text-2xl font-bold text-red-600">{baziData.year.gan}{baziData.year.zhi}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">月柱</div>
              <div className="text-2xl font-bold text-orange-600">{baziData.month.gan}{baziData.month.zhi}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">日柱</div>
              <div className="text-2xl font-bold text-green-600">{baziData.day.gan}{baziData.day.zhi}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">时柱</div>
              <div className="text-2xl font-bold text-blue-600">{baziData.hour.gan}{baziData.hour.zhi}</div>
            </div>
          </div>
        </div>

        {/* 当前模块内容 */}
        {renderCurrentModule()}
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            📚 八字实战解读技巧学习系统 - 传承中华传统智慧
          </p>
          <p className="text-sm text-gray-500">
            基于《滴天髓》《子平真诠》《穷通宝鉴》等经典，结合现代实际情况
          </p>
        </div>
      </footer>
    </div>
  )
}