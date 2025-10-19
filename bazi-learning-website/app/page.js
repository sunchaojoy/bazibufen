'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Book, Users, Calendar, Compass, Sparkles, ChevronRight,
  ChevronDown, ChevronUp, ArrowRight, Star, Target,
  TrendingUp, Shield, Heart, Zap
} from 'lucide-react'

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredElement, setHoveredElement] = useState(null)

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  // 天干数据
  const tianganData = [
    { name: '甲', element: 'wood', yinYang: '阳', description: '阳木，代表大树、森林' },
    { name: '乙', element: 'wood', yinYang: '阴', description: '阴木，代表花草、藤蔓' },
    { name: '丙', element: 'fire', yinYang: '阳', description: '阳火，代表太阳、烈火' },
    { name: '丁', element: 'fire', yinYang: '阴', description: '阴火，代表烛光、星火' },
    { name: '戊', element: 'earth', yinYang: '阳', description: '阳土，代表高山、大地' },
    { name: '己', element: 'earth', yinYang: '阴', description: '阴土，代表田园、泥土' },
    { name: '庚', element: 'metal', yinYang: '阳', description: '阳金，代表刀剑、金属' },
    { name: '辛', element: 'metal', yinYang: '阴', description: '阴金，代表珠宝、首饰' },
    { name: '壬', element: 'water', yinYang: '阳', description: '阳水，代表大海、江河' },
    { name: '癸', element: 'water', yinYang: '阴', description: '阴水，代表雨露、泉水' }
  ]

  // 地支数据
  const dizhiData = [
    { name: '子', animal: '鼠', element: 'water', time: '23:00-01:00', description: '夜半之时，水旺' },
    { name: '丑', animal: '牛', element: 'earth', time: '01:00-03:00', description: '鸡鸣之时，土旺' },
    { name: '寅', animal: '虎', element: 'wood', time: '03:00-05:00', description: '平旦之时，木旺' },
    { name: '卯', animal: '兔', element: 'wood', time: '05:00-07:00', description: '日出之时，木旺' },
    { name: '辰', animal: '龙', element: 'earth', time: '07:00-09:00', description: '食时之时，土旺' },
    { name: '巳', animal: '蛇', element: 'fire', time: '09:00-11:00', description: '隅中之时，火旺' },
    { name: '午', animal: '马', element: 'fire', time: '11:00-13:00', description: '日中之时，火旺' },
    { name: '未', animal: '羊', element: 'earth', time: '13:00-15:00', description: '日昳之时，土旺' },
    { name: '申', animal: '猴', element: 'metal', time: '15:00-17:00', description: '晡时之时，金旺' },
    { name: '酉', animal: '鸡', element: 'metal', time: '17:00-19:00', description: '日入之时，金旺' },
    { name: '戌', animal: '狗', element: 'earth', time: '19:00-21:00', description: '黄昏之时，土旺' },
    { name: '亥', animal: '猪', element: 'water', time: '21:00-23:00', description: '人定之时，水旺' }
  ]

  const knowledgeCards = [
    {
      id: 'tiangan',
      title: '天干',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      brief: '十天干是构成八字的基本元素，代表天体运行规律',
      content: {
        description: '天干是中国古代历法中用来记年的符号，共十个：甲、乙、丙、丁、戊、己、庚、辛、壬、癸。它们分别代表不同的五行属性和阴阳特性。',
        details: tianganData,
        tips: '天干的阴阳属性决定了它们之间的相互作用关系，阳干与阳干同性，阴干与阴干同性。'
      }
    },
    {
      id: 'dizhi',
      title: '地支',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      brief: '十二地支代表地球自转的十二个时段，对应十二生肖',
      content: {
        description: '地支是中国古代历法中用来记月的符号，共十二个：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。每个地支对应一个生肖动物。',
        details: dizhiData,
        tips: '地支不仅代表时间，还包含了空间方位和五行属性，是八字分析的重要组成部分。'
      }
    },
    {
      id: 'wuxing',
      title: '五行生克',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      brief: '五行相生相克是八字分析的核心理论',
      content: {
        description: '五行学说是中国古代哲学的重要理论，金、木、水、火、土五种基本物质之间存在着相生相克的辩证关系。',
        tips: '掌握五行生克关系是理解八字命理的关键，通过分析五行平衡可以判断命运的吉凶。'
      }
    },
    {
      id: 'shishen',
      title: '十神简介',
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      brief: '十神是八字分析中最重要的关系网络',
      content: {
        description: '十神是根据日主与其他干支的生克关系和阴阳属性归纳出的十种基本类型：正官、七杀、正财、偏财、正印、偏印、食神、伤官、比肩、劫财。',
        tips: '十神不仅代表六亲关系，还反映一个人的性格特征、职业倾向和人生运势。'
      }
    },
    {
      id: 'sizhu',
      title: '四柱八字',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      brief: '四柱由年柱、月柱、日柱、时柱组成，共八个字',
      content: {
        description: '四柱八字是以一个人出生的年、月、日、时为基础，分别排出四柱，每柱由一个天干和一个地支组成，共八个字。',
        tips: '四柱分别代表不同的人生阶段：年柱代表祖辈和早年，月柱代表父母和青年，日柱代表自己和配偶，时柱代表子女和晚年。'
      }
    },
    {
      id: 'rizhu',
      title: '日主强弱',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-teal-500 to-green-500',
      brief: '判断日主强弱是八字分析的首要步骤',
      content: {
        description: '日主（日干）的强弱决定了整个命局的基本格局。通过分析日主是否得令、得地、得势来判断其强弱。',
        tips: '身强需要克泄耗，身弱需要生扶，这是选取用神的基本原则。'
      }
    }
  ]

  const getElementColor = (element) => {
    const colors = {
      wood: 'bg-green-100 text-green-800 border-green-200',
      fire: 'bg-red-100 text-red-800 border-red-200',
      earth: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      metal: 'bg-gray-100 text-gray-800 border-gray-200',
      water: 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return colors[element] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-title font-bold text-gray-900">八字智慧学习</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">首页</Link>
              <Link href="/quiz" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">测验学习</Link>
              <Link href="/basics" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">基础学习</Link>
              <Link href="/elements" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">五行详解</Link>
              <Link href="/shishen" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">十神精解</Link>
              <Link href="/example" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">实例分析</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 英雄区域 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-title font-bold text-gray-900 mb-6">
            探索
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              八字智慧
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过现代化的卡片式学习体验，轻松掌握中国传统八字命理学的精髓
          </p>
        </div>

        {/* 学习路径提示 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-2xl font-title font-bold">推荐学习路径</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-2">1</div>
              <p className="text-sm">了解天干地支</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-2">2</div>
              <p className="text-sm">掌握五行生克</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-2">3</div>
              <p className="text-sm">学习十神关系</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-2">4</div>
              <p className="text-sm">实践实例分析</p>
            </div>
          </div>
        </div>

        {/* 知识卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {knowledgeCards.map((card) => (
            <div
              key={card.id}
              className="group"
            >
              <div
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  expandedCard === card.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => toggleCard(card.id)}
              >
                {/* 卡片头部 */}
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 rounded-lg p-2">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-title font-bold">{card.title}</h3>
                    </div>
                    <div className="transform transition-transform duration-300">
                      {expandedCard === card.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {card.brief}
                  </p>
                </div>

                {/* 卡片内容 */}
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedCard === card.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {card.content.description}
                    </p>

                    {/* 天干详细内容 */}
                    {card.id === 'tiangan' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {card.content.details.map((item, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-lg border ${getElementColor(item.element)} hover:scale-105 transition-transform cursor-pointer`}
                              onMouseEnter={() => setHoveredElement(item.name)}
                              onMouseLeave={() => setHoveredElement(null)}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-lg font-bold">{item.name}</span>
                                <span className="text-xs">{item.yinYang}</span>
                              </div>
                              <p className="text-xs">{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-sm text-blue-800">
                            💡 <strong>学习提示：</strong> {card.content.tips}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 地支详细内容 */}
                    {card.id === 'dizhi' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          {card.content.details.map((item, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-lg border ${getElementColor(item.element)} hover:scale-105 transition-transform cursor-pointer text-center`}
                            >
                              <div className="text-lg font-bold mb-1">{item.name}</div>
                              <div className="text-xs mb-1">{item.animal}</div>
                              <div className="text-xs text-gray-600">{item.time}</div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm text-green-800">
                            💡 <strong>学习提示：</strong> {card.content.tips}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 五行生克详细内容 */}
                    {card.id === 'wuxing' && (
                      <div className="space-y-6">
                        {/* 五行相生图 */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">五行相生关系</h4>
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                            <div className="grid grid-cols-5 gap-2 text-center">
                              <div className="bg-green-100 rounded-lg p-3">
                                <span className="element-badge element-wood">木</span>
                                <p className="text-xs mt-1">↓生</p>
                              </div>
                              <div className="bg-red-100 rounded-lg p-3">
                                <span className="element-badge element-fire">火</span>
                                <p className="text-xs mt-1">↓生</p>
                              </div>
                              <div className="bg-yellow-100 rounded-lg p-3">
                                <span className="element-badge element-earth">土</span>
                                <p className="text-xs mt-1">↓生</p>
                              </div>
                              <div className="bg-gray-100 rounded-lg p-3">
                                <span className="element-badge element-metal">金</span>
                                <p className="text-xs mt-1">↓生</p>
                              </div>
                              <div className="bg-blue-100 rounded-lg p-3">
                                <span className="element-badge element-water">水</span>
                                <p className="text-xs mt-1">↓生</p>
                              </div>
                            </div>
                            <div className="text-center mt-2">
                              <span className="text-xs text-gray-600">木→火→土→金→水→木 (循环相生)</span>
                            </div>
                          </div>
                        </div>

                        {/* 五行相克图 */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">五行相克关系</h4>
                          <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-lg p-4">
                            <div className="grid grid-cols-5 gap-2 text-center">
                              <div className="bg-green-100 rounded-lg p-3">
                                <span className="element-badge element-wood">木</span>
                                <p className="text-xs mt-1 text-red-600">克→</p>
                              </div>
                              <div className="bg-yellow-100 rounded-lg p-3">
                                <span className="element-badge element-earth">土</span>
                                <p className="text-xs mt-1 text-red-600">克→</p>
                              </div>
                              <div className="bg-blue-100 rounded-lg p-3">
                                <span className="element-badge element-water">水</span>
                                <p className="text-xs mt-1 text-red-600">克→</p>
                              </div>
                              <div className="bg-red-100 rounded-lg p-3">
                                <span className="element-badge element-fire">火</span>
                                <p className="text-xs mt-1 text-red-600">克→</p>
                              </div>
                              <div className="bg-gray-100 rounded-lg p-3">
                                <span className="element-badge element-metal">金</span>
                                <p className="text-xs mt-1 text-red-600">克→</p>
                              </div>
                            </div>
                            <div className="text-center mt-2">
                              <span className="text-xs text-gray-600">木克土，土克水，水克火，火克金，金克木</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-4">
                          <p className="text-sm text-purple-800">
                            💡 <strong>学习提示：</strong> {card.content.tips}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 其他卡片内容 */}
                    {(card.id === 'shishen' || card.id === 'sizhu' || card.id === 'rizhu') && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-800">
                            💡 <strong>学习提示：</strong> {card.content.tips}
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <Link
                            href={card.id === 'shishen' ? '/shishen' : card.id === 'sizhu' ? '/basics' : '/basics'}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            深入学习
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 测验学习入口 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full">
            <Brain className="w-5 h-5" />
            <span className="font-bold">准备好测验你的知识了吗？</span>
            <ChevronRight className="w-5 h-5" />
          </div>
          <Link
            href="/quiz"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
          >
            开始测验学习
            <Award className="ml-3 w-6 h-6" />
          </Link>
        </div>

        {/* 互动练习区域 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-title font-bold mb-6">🎯 互动学习</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">快速测试</h3>
              <p className="text-indigo-100 text-sm mb-4">
                点击上方的知识卡片，学习天干地支和五行生克关系。每个卡片都包含详细的知识点。
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>今日目标：</strong>掌握天干地支的基本属性和五行相生相克关系
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3">进阶学习</h3>
              <p className="text-indigo-100 text-sm mb-4">
                完成基础学习后，可以进入详细页面深入学习十神关系和实例分析。
              </p>
              <div className="flex space-x-3">
                <Link
                  href="/elements"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors text-sm font-medium"
                >
                  五行详解
                </Link>
                <Link
                  href="/shishen"
                  className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                >
                  十神精解
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 八字智慧学习网站</p>
            <p className="text-sm">传承中华传统文化，弘扬民族智慧</p>
          </div>
        </div>
      </footer>
    </div>
  )
}