'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen, CheckCircle, XCircle, Award, Target,
  Clock, ChevronRight, ChevronDown, ChevronUp,
  Star, TrendingUp, Brain, Lightbulb
} from 'lucide-react'

export default function QuizPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [expandedContent, setExpandedContent] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showResults, setShowResults] = useState({})
  const [overallScore, setOverallScore] = useState(null)

  const sections = [
    {
      id: 'basics',
      title: '第一部分：干支与五行基础',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      difficulty: '基础',
      estimatedTime: '15分钟',
      content: {
        overview: '天干地支和五行是八字命理的基础概念，理解它们是学习八字的第一步。',
        topics: [
          {
            title: '十天干',
            content: '天干共有十个：甲、乙、丙、丁、戊、己、庚、辛、壬、癸。它们分别代表不同的五行属性和阴阳特性。',
            details: [
              '阳木：甲（大树）、阴木：乙（花草）',
              '阳火：丙（太阳）、阴火：丁（烛光）',
              '阳土：戊（高山）、阴土：己（田园）',
              '阳金：庚（刀剑）、阴金：辛（珠宝）',
              '阳水：壬（大海）、阴水：癸（雨露）'
            ]
          },
          {
            title: '十二地支',
            content: '地支共有十二个：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。每个地支对应一个生肖动物和特定时辰。',
            details: [
              '子鼠（23:00-01:00）、丑牛（01:00-03:00）',
              '寅虎（03:00-05:00）、卯兔（05:00-07:00）',
              '辰龙（07:00-09:00）、巳蛇（09:00-11:00）',
              '午马（11:00-13:00）、未羊（13:00-15:00）',
              '申猴（15:00-17:00）、酉鸡（17:00-19:00）',
              '戌狗（19:00-21:00）、亥猪（21:00-23:00）'
            ]
          },
          {
            title: '五行生克关系',
            content: '五行（金、木、水、火、土）之间存在相生相克的关系，这是分析八字的核心理论。',
            details: [
              '相生：木生火、火生土、土生金、金生水、水生木',
              '相克：木克土、土克水、水克火、火克金、金克木',
              '相生代表促进、帮助，相克代表制约、克制'
            ]
          }
        ]
      },
      quiz: [
        {
          question: '以下哪个属于阳干？',
          options: ['乙', '丁', '甲', '癸'],
          correct: 2,
          explanation: '甲是阳木，乙是阴木。在十天干中，甲、丙、戊、庚、壬为阳干，乙、丁、己、辛、癸为阴干。'
        },
        {
          question: '地支"午"对应的是什么时辰？',
          options: ['09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00'],
          correct: 1,
          explanation: '午时是11:00-13:00，这是日中之时，火气最旺的时段。'
        },
        {
          question: '五行相生关系中，"木生火"的含义是什么？',
          options: ['木材可以燃烧产生火焰', '树木需要阳光才能生长', '木与火相互促进', '木代表火元素'],
          correct: 0,
          explanation: '木生火的基本含义是木材可以燃烧产生火焰，在五行理论中表示木能够促进和帮助火的发展。'
        },
        {
          question: '以下哪个地支对应的生肖是龙？',
          options: ['寅', '卯', '辰', '巳'],
          correct: 2,
          explanation: '辰对应龙，十二地支与生肖的对应关系是：子鼠、丑牛、寅虎、卯兔、辰龙、巳蛇、午马、未羊、申猴、酉鸡、戌狗、亥猪。'
        },
        {
          question: '金克木的含义是什么？',
          options: ['金属工具可以砍伐树木', '金需要木来支撑', '木能生金', '金与木相互平衡'],
          correct: 0,
          explanation: '金克木的基本含义是金属工具（如斧头）可以砍伐树木，在五行中表示金能够制约和克制木的发展。'
        }
      ]
    },
    {
      id: 'sizhu',
      title: '第二部分：四柱排法',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      difficulty: '进阶',
      estimatedTime: '20分钟',
      content: {
        overview: '四柱排盘是八字分析的核心技术，通过出生时间排出年柱、月柱、日柱、时柱，组成完整的八字命盘。',
        topics: [
          {
            title: '年柱排法',
            content: '年柱由出生年份的天干地支组成，代表祖辈、根基和1-16岁的运势。',
            details: [
              '以农历年份为准，如1990年为庚午年',
              '年柱天干按甲、乙、丙、丁、戊、己、庚、辛、壬、癸循环',
              '年柱地支按子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥循环',
              '年柱的"年"以立春为分界线'
            ]
          },
          {
            title: '月柱排法',
            content: '月柱由出生月份的天干地支组成，代表父母、事业和17-32岁的运势。',
            details: [
              '月支以节气为准，如立春到惊蛰为寅月',
              '月支与月份对应：寅月（立春-惊蛰）、卯月（惊蛰-清明）等',
              '月干根据年干和月支按"五虎遁"规律推算',
              '月柱是命盘中最重要的一柱'
            ]
          },
          {
            title: '日柱排法',
            content: '日柱由出生日期的天干地支组成，代表自己和配偶，以及33-48岁的运势。',
            details: [
              '日干称为"日主"或"日元"，是整个命盘的核心',
              '日支称为"日支"或"坐支"，代表配偶宫',
              '日干地支按六十甲子循环，如甲子、乙丑、丙寅等',
              '日主强弱决定整个命局的基本格局'
            ]
          },
          {
            title: '时柱排法',
            content: '时柱由出生时辰的天干地支组成，代表子女、晚年运势和49岁以后的运势。',
            details: [
              '时支按地支时辰确定：子时（23:00-01:00）等',
              '时干根据日干和时支按"五鼠遁"规律推算',
              '时柱代表一个人的归宿和晚年状况',
              '时柱也反映子女的情况'
            ]
          }
        ]
      },
      quiz: [
        {
          question: '四柱中代表"日主"的是哪一柱的天干？',
          options: ['年柱', '月柱', '日柱', '时柱'],
          correct: 2,
          explanation: '日柱的天干称为"日主"或"日元"，是整个八字命盘的核心，代表命主本人。'
        },
        {
          question: '月支是以什么为标准来确定的？',
          options: ['农历月份', '阳历月份', '节气', '公历日期'],
          correct: 2,
          explanation: '月支是以节气为标准来确定的，不是按农历月份。例如，立春到惊蛰期间出生的人，月支都是寅。'
        },
        {
          question: '出生年份1992年，按农历是壬申年，那么年柱是什么？',
          options: ['壬申', '申壬', '壬年申月', '壬申年'],
          correct: 0,
          explanation: '年柱由天干和地支组成，1992年是壬申年，所以年柱就是壬申。天干在上，地支在下。'
        },
        {
          question: '日柱的地支代表什么？',
          options: ['事业宫', '财帛宫', '配偶宫', '父母宫'],
          correct: 2,
          explanation: '日柱的地支称为"日支"或"坐支"，在八字中代表配偶宫，反映婚姻和感情状况。'
        },
        {
          question: '时辰"酉时"对应的时间段是？',
          options: ['15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'],
          correct: 1,
          explanation: '酉时是17:00-19:00，这是日入之时，在十二时辰中对应西边，五行属金。'
        }
      ]
    },
    {
      id: 'shishen',
      title: '第三部分：十神与格局',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      difficulty: '高级',
      estimatedTime: '25分钟',
      content: {
        overview: '十神是八字分析中最重要的概念，通过分析日主与其他干支的关系，可以判断性格特征、六亲关系和人生运势。',
        topics: [
          {
            title: '十神基本概念',
            content: '十神是根据日主与其他七个干支的生克关系和阴阳属性归纳出的十种基本关系类型。',
            details: [
              '克我者：正官（阴阳不同）、七杀（阴阳相同）',
              '我克者：正财（阴阳不同）、偏财（阴阳相同）',
              '生我者：正印（阴阳不同）、偏印（阴阳相同）',
              '我生者：食神（阴阳不同）、伤官（阴阳相同）',
              '同我者：比肩（阴阳相同）、劫财（阴阳不同）'
            ]
          },
          {
            title: '官杀类十神',
            content: '官杀（正官、七杀）代表事业、权力、纪律和约束。',
            details: [
              '正官：正直、守法、有责任感、适合公职',
              '七杀：威严、果敢、有野心、喜欢挑战',
              '官杀也代表压力、竞争和上级领导',
              '女命中官杀代表丈夫或男友'
            ]
          },
          {
            title: '财星类十神',
            content: '财星（正财、偏财）代表财富、物质和父亲。',
            details: [
              '正财：稳健收入、勤劳节俭、重视理财',
              '偏财：意外之财、投机机会、善于交际',
              '财星也代表妻子（女命除外）和父亲',
              '财星的强弱反映财运的好坏'
            ]
          },
          {
            title: '印星类十神',
            content: '印星（正印、偏印）代表学识、保护、母亲和房产。',
            details: [
              '正印：仁慈温和、重视学习、有爱心',
              '偏印：聪明独特、善于思考、有技艺',
              '印星也代表文凭、名誉和保护力量',
              '印星为用神时有利学习和考试'
            ]
          },
          {
            title: '食伤类十神',
            content: '食伤（食神、伤官）代表才华、表达、创造力。',
            details: [
              '食神：乐观温和、有艺术天赋、享受生活',
              '伤官：聪明叛逆、有创新精神、追求自由',
              '食伤也代表子女（男命）和口才',
              '食伤旺的人适合从事艺术或技术工作'
            ]
          },
          {
            title: '比劫类十神',
            content: '比劫（比肩、劫财）代表朋友、同事、竞争和合作。',
            details: [
              '比肩：独立自信、重视友情、有团队精神',
              '劫财：热情善于交际、人缘好但易冲动',
              '比劫也代表兄弟姐妹和同辈朋友',
              '比劫多时竞争激烈，需要合作共赢'
            ]
          }
        ]
      },
      quiz: [
        {
          question: '日主为甲木，遇到庚金，庚金是甲木的什么十神？',
          options: ['正官', '七杀', '正财', '偏财'],
          correct: 1,
          explanation: '甲木遇到庚金，金克木，且甲（阳）庚（阳）阴阳相同，所以是七杀。如果遇到辛金（阴金），则是正官。'
        },
        {
          question: '日主为丙火，遇到甲木，甲木是丙火的什么十神？',
          options: ['正印', '偏印', '食神', '伤官'],
          correct: 1,
          explanation: '丙火遇到甲木，木生火，且丙（阳）甲（阳）阴阳相同，所以是偏印。如果遇到乙木（阴木），则是正印。'
        },
        {
          question: '正官主要代表以下哪种性格特征？',
          options: ['冒险精神', '正直守法', '聪明叛逆', '热情交际'],
          correct: 1,
          explanation: '正官代表正直、守法、有责任感、重视名誉的品质，适合从事公务员、教师、管理等需要纪律性的工作。'
        },
        {
          question: '在女命中，哪个十神代表丈夫？',
          options: ['正财', '偏财', '正官', '七杀'],
          correct: 2,
          explanation: '在传统八字中，女命的官杀星代表丈夫或男友。正官代表正缘丈夫，七杀代表非正缘或偏夫。'
        },
        {
          question: '食神和伤官的主要区别是什么？',
          options: ['五行属性不同', '阴阳属性不同', '强弱程度不同', '代表意义不同'],
          correct: 1,
          explanation: '食神和伤官都是我生者，区别在于阴阳属性。日主与食神阴阳不同，与伤官阴阳相同。食神温和，伤官叛逆。'
        }
      ]
    }
  ]

  const toggleContent = (topicIndex) => {
    setExpandedContent(expandedContent === topicIndex ? null : topicIndex)
  }

  const handleAnswerSelect = (sectionIndex, questionIndex, answerIndex) => {
    const key = `${sectionIndex}-${questionIndex}`
    setQuizAnswers(prev => ({
      ...prev,
      [key]: answerIndex
    }))
  }

  const submitQuiz = (sectionIndex) => {
    setShowResults(prev => ({
      ...prev,
      [sectionIndex]: true
    }))
  }

  const resetQuiz = (sectionIndex) => {
    const sectionKeyPrefix = `${sectionIndex}-`
    const newAnswers = { ...quizAnswers }
    const newResults = { ...showResults }

    Object.keys(newAnswers).forEach(key => {
      if (key.startsWith(sectionKeyPrefix)) {
        delete newAnswers[key]
      }
    })

    delete newResults[sectionIndex]

    setQuizAnswers(newAnswers)
    setShowResults(newResults)
  }

  const calculateSectionScore = (sectionIndex) => {
    const section = sections[sectionIndex]
    let correct = 0

    section.quiz.forEach((question, qIndex) => {
      const key = `${sectionIndex}-${qIndex}`
      if (quizAnswers[key] === question.correct) {
        correct++
      }
    })

    return { correct, total: section.quiz.length, percentage: Math.round((correct / section.quiz.length) * 100) }
  }

  const calculateOverallScore = () => {
    let totalCorrect = 0
    let totalQuestions = 0

    sections.forEach((section, sIndex) => {
      if (showResults[sIndex]) {
        section.quiz.forEach((question, qIndex) => {
          const key = `${sIndex}-${qIndex}`
          totalQuestions++
          if (quizAnswers[key] === question.correct) {
            totalCorrect++
          }
        })
      }
    })

    return totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  }

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return '优秀！您对这部分内容掌握得很好！'
    if (percentage >= 80) return '良好！继续保持！'
    if (percentage >= 60) return '及格！建议再复习一下相关内容。'
    return '需要加强！请仔细学习后再试一次。'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-title font-bold text-gray-900">八字测验学习</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">首页</Link>
              <Link href="/quiz" className="text-gray-900 hover:text-indigo-600 font-medium transition-colors">测验学习</Link>
              <Link href="/basics" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">基础学习</Link>
              <Link href="/elements" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">五行详解</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-title font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              八字知识测验
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过三个渐进式学习模块和互动测验，系统掌握八字命理的核心知识
          </p>
        </div>

        {/* 学习进度概览 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-title font-bold mb-6">学习进度追踪</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const score = showResults[index] ? calculateSectionScore(index) : null
              return (
                <div key={section.id} className="bg-white/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">{section.title.split('：')[1]}</h3>
                    <span className="text-sm bg-white/30 px-2 py-1 rounded">
                      {section.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{section.estimatedTime}</span>
                  </div>
                  {score ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>得分：</span>
                        <span className={`font-bold ${getScoreColor(score.percentage)}`}>
                          {score.correct}/{score.total}
                        </span>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div
                          className="bg-white h-2 rounded-full transition-all duration-500"
                          style={{ width: `${score.percentage}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-white/80">
                      未开始测验
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 学习内容区域 */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 章节标题 */}
              <div className={`bg-gradient-to-r ${section.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-title font-bold">{section.title}</h2>
                    <div className="flex items-center space-x-4 mt-2 text-white/80">
                      <span className="text-sm">难度：{section.difficulty}</span>
                      <span className="text-sm">预计：{section.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {section.content.overview}
                </p>
              </div>

              {/* 学习内容 */}
              <div className="p-8">
                <div className="space-y-6">
                  {section.content.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => toggleContent(topicIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                          {expandedContent === topicIndex ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{topic.content}</p>
                      </div>

                      {expandedContent === topicIndex && (
                        <div className="p-6 bg-white">
                          <ul className="space-y-2">
                            {topic.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-2">
                                <ChevronRight className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 测验区域 */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lightbulb className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">知识测验</h3>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {section.quiz.length} 道题
                    </span>
                  </div>

                  {!showResults[sectionIndex] ? (
                    <div className="space-y-6">
                      {section.quiz.map((question, qIndex) => (
                        <div key={qIndex} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start space-x-3 mb-4">
                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {qIndex + 1}
                            </span>
                            <p className="text-gray-900 font-medium">{question.question}</p>
                          </div>
                          <div className="space-y-2 ml-9">
                            {question.options.map((option, oIndex) => (
                              <label
                                key={oIndex}
                                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                  quizAnswers[`${sectionIndex}-${qIndex}`] === oIndex
                                    ? 'bg-indigo-100 border-2 border-indigo-500'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`question-${sectionIndex}-${qIndex}`}
                                  checked={quizAnswers[`${sectionIndex}-${qIndex}`] === oIndex}
                                  onChange={() => handleAnswerSelect(sectionIndex, qIndex, oIndex)}
                                  className="text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-center">
                        <button
                          onClick={() => submitQuiz(sectionIndex)}
                          disabled={Object.keys(quizAnswers).filter(key => key.startsWith(`${sectionIndex}-`)).length !== section.quiz.length}
                          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                            Object.keys(quizAnswers).filter(key => key.startsWith(`${sectionIndex}-`)).length === section.quiz.length
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          提交测验
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {section.quiz.map((question, qIndex) => {
                        const userAnswer = quizAnswers[`${sectionIndex}-${qIndex}`]
                        const isCorrect = userAnswer === question.correct

                        return (
                          <div key={qIndex} className={`rounded-lg p-6 border-2 ${
                            isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                          }`}>
                            <div className="flex items-start space-x-3 mb-4">
                              <div className={`rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                                isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                              }`}>
                                {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-900 font-medium mb-2">{question.question}</p>
                                <div className="space-y-1">
                                  <p className="text-sm">
                                    <span className="font-medium">您的答案：</span>
                                    <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                      {question.options[userAnswer]}
                                    </span>
                                  </p>
                                  {!isCorrect && (
                                    <p className="text-sm">
                                      <span className="font-medium">正确答案：</span>
                                      <span className="text-green-700">{question.options[question.correct]}</span>
                                    </p>
                                  )}
                                  <p className="text-sm text-gray-600 mt-2 bg-white p-3 rounded">
                                    <span className="font-medium">解析：</span>{question.explanation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      {/* 成绩统计 */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">测验成绩</h4>
                          <div className="flex items-center justify-center space-x-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-indigo-600" />
                            <span className={`text-3xl font-bold ${getScoreColor(calculateSectionScore(sectionIndex).percentage)}`}>
                              {calculateSectionScore(sectionIndex).percentage}%
                            </span>
                          </div>
                          <p className="text-gray-700 mb-6">
                            {getScoreMessage(calculateSectionScore(sectionIndex).percentage)}
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={() => resetQuiz(sectionIndex)}
                              className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              重新测验
                            </button>
                            {sectionIndex < sections.length - 1 && (
                              <button
                                onClick={() => setCurrentSection(sectionIndex + 1)}
                                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
                              >
                                下一部分
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 总体成绩 */}
        {Object.keys(showResults).length === sections.length && (
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-title font-bold mb-4">🎉 恭喜完成所有测验！</h2>
            <div className="text-5xl font-bold mb-4">
              总分：{calculateOverallScore()}%
            </div>
            <p className="text-xl mb-6">
              {calculateOverallScore() >= 90 ? '您已经是八字高手了！' :
               calculateOverallScore() >= 80 ? '您对八字知识掌握得很好！' :
               calculateOverallScore() >= 60 ? '继续努力，您会越来越好！' :
               '建议多复习，加强基础知识学习。'}
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/example"
                className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                查看实例分析
              </Link>
              <button
                onClick={() => {
                  setQuizAnswers({})
                  setShowResults({})
                  setOverallScore(null)
                }}
                className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-medium"
              >
                重新开始
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 八字智慧学习网站</p>
            <p className="text-sm">通过测验巩固知识，在实践中提升智慧</p>
          </div>
        </div>
      </footer>
    </div>
  )
}