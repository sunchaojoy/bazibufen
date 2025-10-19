'use client'

import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // 添加页面滚动动画
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.section-card').forEach(el => {
      observer.observe(el)
    })

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    // 添加简单的交互效果
    document.querySelectorAll('.concept-card, .pillar-box').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)'
      })
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)'
      })
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        <title>零基础八字入门 - 轻松学八字</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className="nav-scroll">
        {/* 头部 */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-yin-yang text-white text-xl"></i>
                </div>
                <h1 className="serif-title text-2xl md:text-3xl font-bold text-gray-800">
                  零基础八字入门
                </h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#core-concepts" className="text-gray-600 hover:text-red-600 transition-colors">核心概念</a>
                <a href="#steps" className="text-gray-600 hover:text-red-600 transition-colors">排盘步骤</a>
                <a href="#dayun-liunian" className="text-gray-600 hover:text-red-600 transition-colors">大运流年</a>
              </nav>
            </div>
          </div>
        </header>

        {/* 主要内容 */}
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* 欢迎语 */}
          <section className="text-center mb-12 fade-in">
            <h2 className="serif-title text-3xl font-bold text-gray-800 mb-4">
              轻松学八字，开启传统文化之旅
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              八字学习并不复杂，掌握三个核心概念就能入门
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span><i className="fas fa-clock mr-1"></i>阅读时间：约10分钟</span>
              <span><i className="fas fa-layer-group mr-1"></i>难度：零基础入门</span>
              <span><i className="fas fa-star mr-1"></i>适合：完全初学者</span>
            </div>
          </section>

          {/* 核心概念部分 */}
          <section id="core-concepts" className="mb-16 fade-in">
            <div className="section-card">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <i className="fas fa-book-open text-2xl text-red-600"></i>
                </div>
                <h2 className="serif-title text-2xl font-bold text-gray-800 mb-4">
                  八字核心概念
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  八字的基础就是三个核心概念：干支、五行、十神。理解了这三样，你就掌握了八字分析的基本工具。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 干支概念 */}
                <div className="concept-card">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                      <i className="fas fa-yin-yang text-xl text-blue-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">天干地支</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">📝 什么是干支？</h4>
                      <p className="text-sm text-gray-600">
                        干支是中国古代的计时系统，就像我们现在用年月日时一样。天干有10个，地支有12个，组合起来就是60年一循环。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🌟 简单理解</h4>
                      <p className="text-sm text-gray-600">
                        天干 = 10个符号（甲乙丙丁...）<br />
                        地支 = 12个符号（子丑寅卯...）<br />
                        八字 = 4组干支组合
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">💡 生活例子</h4>
                      <p className="text-sm text-gray-600">
                        就像你有姓名（干支）和身份证号（具体时间），八字就是你出生时刻的"宇宙姓名"。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 五行概念 */}
                <div className="concept-card">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                      <i className="fas fa-circle-nodes text-xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">五行理论</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🌿 什么是五行？</h4>
                      <p className="text-sm text-gray-600">
                        五行是古代哲学家总结的五种基本物质：金、木、水、火、土。它们之间有相生相克的关系，维持着自然界的平衡。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">⚖️ 相生相克</h4>
                      <p className="text-sm text-gray-600">
                        <strong>相生：</strong>木生火、火生土、土生金、金生水、水生木<br />
                        <strong>相克：</strong>木克土、土克水、水克火、火克金、金克木
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🏠 性格特征</h4>
                      <p className="text-sm text-gray-600">
                        <span className="element-badge wood">木</span>直率善良<br />
                        <span className="element-badge fire">火</span>热情开朗<br />
                        <span className="element-badge earth">土</span>稳重诚实<br />
                        <span className="element-badge metal">金</span>果断坚强<br />
                        <span className="element-badge water">水</span>智慧灵活
                      </p>
                    </div>
                  </div>
                </div>

                {/* 十神概念 */}
                <div className="concept-card">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                      <i className="fas fa-star text-xl text-purple-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">十神关系</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">👥 什么是十神？</h4>
                      <p className="text-sm text-gray-600">
                        十神是用来描述日主（你自己）与其他七个字之间关系的专业术语。就像你在社会中的不同角色一样。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🎭 主要十神</h4>
                      <p className="text-sm text-gray-600">
                        <strong>正官：</strong>事业、纪律、责任感<br />
                        <strong>财星：</strong>财富、理财、商业<br />
                        <strong>印星：</strong>学习、知识、贵人<br />
                        <strong>食伤：</strong>才华、表达、创新<br />
                        <strong>比劫：</strong>朋友、同辈、竞争
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🎯 实际作用</h4>
                      <p className="text-sm text-gray-600">
                        通过十神可以了解一个人的性格特征、适合的工作方向、人际关系模式、财富特点等。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 干支详细表格 */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                  <i className="fas fa-table text-blue-500 mr-2"></i>
                  天干地支速查表
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* 天干表 */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">天干（10个）</h4>
                    <div className="overflow-x-auto">
                      <table className="table-custom">
                        <thead>
                          <tr>
                            <th>符号</th>
                            <th>五行</th>
                            <th>特征</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-bold">甲</td>
                            <td><span className="element-badge wood">木</span></td>
                            <td className="text-left">大树、正直、向上</td>
                          </tr>
                          <tr>
                            <td className="font-bold">乙</td>
                            <td><span className="element-badge wood">木</span></td>
                            <td className="text-left">花草、柔韧、温和</td>
                          </tr>
                          <tr>
                            <td className="font-bold">丙</td>
                            <td><span className="element-badge fire">火</span></td>
                            <td className="text-left">太阳、热情、光明</td>
                          </tr>
                          <tr>
                            <td className="font-bold">丁</td>
                            <td><span className="element-badge fire">火</span></td>
                            <td className="text-left">灯火、温暖、细腻</td>
                          </tr>
                          <tr>
                            <td className="font-bold">戊</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td className="text-left">高山、稳重、诚信</td>
                          </tr>
                          <tr>
                            <td className="font-bold">己</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td className="text-left">田园、包容、温和</td>
                          </tr>
                          <tr>
                            <td className="font-bold">庚</td>
                            <td><span className="element-badge metal">金</span></td>
                            <td className="text-left">刀剑、刚强、决断</td>
                          </tr>
                          <tr>
                            <td className="font-bold">辛</td>
                            <td><span className="element-badge metal">金</span></td>
                            <td className="text-left">珠宝、精致、细腻</td>
                          </tr>
                          <tr>
                            <td className="font-bold">壬</td>
                            <td><span className="element-badge water">水</span></td>
                            <td className="text-left">江河、智慧、变化</td>
                          </tr>
                          <tr>
                            <td className="font-bold">癸</td>
                            <td><span className="element-badge water">水</span></td>
                            <td className="text-left">雨露、滋润、温柔</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 地支表 */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">地支（12个）</h4>
                    <div className="overflow-x-auto">
                      <table className="table-custom">
                        <thead>
                          <tr>
                            <th>符号</th>
                            <th>五行</th>
                            <th>生肖</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-bold">子</td>
                            <td><span className="element-badge water">水</span></td>
                            <td>🐭 鼠</td>
                          </tr>
                          <tr>
                            <td className="font-bold">丑</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td>🐮 牛</td>
                          </tr>
                          <tr>
                            <td className="font-bold">寅</td>
                            <td><span className="element-badge wood">木</span></td>
                            <td>🐯 虎</td>
                          </tr>
                          <tr>
                            <td className="font-bold">卯</td>
                            <td><span className="element-badge wood">木</span></td>
                            <td>🐰 兔</td>
                          </tr>
                          <tr>
                            <td className="font-bold">辰</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td>🐲 龙</td>
                          </tr>
                          <tr>
                            <td className="font-bold">巳</td>
                            <td><span className="element-badge fire">火</span></td>
                            <td>🐍 蛇</td>
                          </tr>
                          <tr>
                            <td className="font-bold">午</td>
                            <td><span className="element-badge fire">火</span></td>
                            <td>🐴 马</td>
                          </tr>
                          <tr>
                            <td className="font-bold">未</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td>🐏 羊</td>
                          </tr>
                          <tr>
                            <td className="font-bold">申</td>
                            <td><span className="element-badge metal">金</span></td>
                            <td>🐒 猴</td>
                          </tr>
                          <tr>
                            <td className="font-bold">酉</td>
                            <td><span className="element-badge metal">金</span></td>
                            <td>🐔 鸡</td>
                          </tr>
                          <tr>
                            <td className="font-bold">戌</td>
                            <td><span className="element-badge earth">土</span></td>
                            <td>🐕 狗</td>
                          </tr>
                          <tr>
                            <td className="font-bold">亥</td>
                            <td><span className="element-badge water">水</span></td>
                            <td>🐷 猪</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 排盘步骤部分 */}
          <section id="steps" className="mb-16 fade-in">
            <div className="section-card">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <i className="fas fa-list-ol text-2xl text-orange-600"></i>
                </div>
                <h2 className="serif-title text-2xl font-bold text-gray-800 mb-4">
                  八字排盘步骤
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  排盘就是根据出生时间确定八个字。虽然有软件可以自动完成，但了解基本原理有助于更好地理解八字。
                </p>
              </div>

              {/* 四柱介绍 */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="pillar-box">
                  <div className="text-lg font-bold text-gray-800 mb-1">年柱</div>
                  <div className="text-2xl font-bold text-red-600 mb-2">干支</div>
                  <div className="text-sm text-gray-600">祖上、早年运势</div>
                  <div className="text-xs text-gray-500 mt-1">1-16岁</div>
                </div>
                <div className="pillar-box">
                  <div className="text-lg font-bold text-gray-800 mb-1">月柱</div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">干支</div>
                  <div className="text-sm text-gray-600">父母、青年运势</div>
                  <div className="text-xs text-gray-500 mt-1">17-32岁</div>
                </div>
                <div className="pillar-box">
                  <div className="text-lg font-bold text-gray-800 mb-1">日柱</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">干支</div>
                  <div className="text-sm text-gray-600">自己、中年运势</div>
                  <div className="text-xs text-gray-500 mt-1">33-48岁</div>
                </div>
                <div className="pillar-box">
                  <div className="text-lg font-bold text-gray-800 mb-1">时柱</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">干支</div>
                  <div className="text-sm text-gray-600">子女、晚年运势</div>
                  <div className="text-xs text-gray-500 mt-1">49岁以后</div>
                </div>
              </div>

              {/* 详细步骤 */}
              <div className="space-y-6">
                {/* 步骤1：年柱 */}
                <div className="flex items-start">
                  <div className="step-number mr-4">1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">确定年柱</h3>
                    <p className="text-gray-600 mb-3">
                      年柱根据出生年份确定，60年一个完整循环。每年对应一个天干和一个地支的组合。
                    </p>
                    <div className="highlight-box">
                      <p className="text-sm">
                        <strong>💡 简单记忆：</strong>记住你的生肖就是年柱的地支。比如1990年属马，年柱地支就是午。
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>⚡ 快速查找：</strong>可以使用在线万年历，输入出生年份就能得到年柱干支。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤2：月柱 */}
                <div className="flex items-start">
                  <div className="step-number mr-4">2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">确定月柱</h3>
                    <p className="text-gray-600 mb-3">
                      月柱根据农历月份确定，但要注意不是按初一到月底算，而是按二十四节气划分。
                    </p>
                    <div className="highlight-box">
                      <p className="text-sm">
                        <strong>🌱 节气规律：</strong>立春到惊蛰是寅月（农历1-2月），惊蛰到清明是卯月（农历2-3月），以此类推。
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>🔍 注意事项：</strong>月柱的天干根据年干来推算，有固定的公式可循。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤3：日柱 */}
                <div className="flex items-start">
                  <div className="step-number mr-4">3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">确定日柱</h3>
                    <p className="text-gray-600 mb-3">
                      日柱根据具体日期确定，60天一个循环。日柱的天干被称为"日主"或"日元"，代表你自己。
                    </p>
                    <div className="highlight-box">
                      <p className="text-sm">
                        <strong>📅 记忆技巧：</strong>记住几个重要日子对应的日柱，如生日、节日，然后通过加减天数推算。
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>⭐ 日主重要性：</strong>日主的五行属性决定了一个人的基本性格特征，是八字分析的核心。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤4：时柱 */}
                <div className="flex items-start">
                  <div className="step-number mr-4">4</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">确定时柱</h3>
                    <p className="text-gray-600 mb-3">
                      时柱根据出生时间确定，一天分为12个时辰，每个时辰2小时。时柱的地支由时间决定，天干由日干推算。
                    </p>
                    <div className="highlight-box">
                      <p className="text-sm">
                        <strong>🕐 时辰对应：</strong>23:00-1:00子时，1:00-3:00丑时，3:00-5:00寅时...以此类推。
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>⏰ 精确要求：</strong>时辰对八字影响很大，出生时间越准确越好。不知道具体时间时，可以按白天或夜晚大致推算。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 完整示例 */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                  完整示例演示
                </h3>
                <p className="text-gray-700 mb-4">
                  假设某人出生于<strong>1995年8月15日上午10:30</strong>：
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-gray-800">年柱</div>
                    <div className="text-2xl font-bold text-red-600">乙亥</div>
                    <div className="text-xs text-gray-600">1995年属猪</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-gray-800">月柱</div>
                    <div className="text-2xl font-bold text-orange-600">甲申</div>
                    <div className="text-xs text-gray-600">8月立秋后</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-gray-800">日柱</div>
                    <div className="text-2xl font-bold text-green-600">丁丑</div>
                    <div className="text-xs text-gray-600">日主为丁火</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-gray-800">时柱</div>
                    <div className="text-2xl font-bold text-blue-600">乙巳</div>
                    <div className="text-xs text-gray-600">上午巳时</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="font-bold text-gray-700 mb-2">完整八字：</div>
                  <div className="text-2xl font-bold text-gray-800">乙亥 甲申 丁丑 乙巳</div>
                  <div className="text-sm text-gray-600 mt-2">日主丁火，生于秋季，需要木火帮扶</div>
                </div>
              </div>
            </div>
          </section>

          {/* 大运与流年部分 */}
          <section id="dayun-liunian" className="mb-16 fade-in">
            <div className="section-card">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <i className="fas fa-chart-line text-2xl text-purple-600"></i>
                </div>
                <h2 className="serif-title text-2xl font-bold text-gray-800 mb-4">
                  大运与流年简介
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  八字不仅能看出一个人的基本特征，还能预测不同时期的运势变化，这就是大运和流年的作用。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 大运介绍 */}
                <div>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                      <i className="fas fa-road text-xl text-blue-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">大运</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🛣️ 什么是大运？</h4>
                      <p className="text-sm text-gray-600">
                        大运是人生不同阶段的运势走向，每10年一个大运。就像人生的"高速公路"，决定了这个十年的基本趋势。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">📅 大运规律</h4>
                      <p className="text-sm text-gray-600">
                        • 男女起运年龄不同<br />
                        • 每个大运持续10年<br />
                        • 大运按阴阳顺行排列<br />
                        • 大运与八字组合影响运势
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🎯 大运作用</h4>
                      <p className="text-sm text-gray-600">
                        大运影响事业发展、财运变化、感情走向、健康状况等各个方面。好的大运如同顺风，差的大运如同逆风。
                      </p>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>💡 例子：</strong>如果八字日主是木，走到水运时期（大运见水），就像树木得到滋润，事业发展会比较顺利。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 流年介绍 */}
                <div>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                      <i className="fas fa-calendar text-xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">流年</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">📆 什么是流年？</h4>
                      <p className="text-sm text-gray-600">
                        流年就是当年的运势，一年的天干地支。它与大运、八字相互作用，决定这一年的具体吉凶。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">🌊 流年变化</h4>
                      <p className="text-sm text-gray-600">
                        • 流年每年都在变化<br />
                        • 60年一个完整循环<br />
                        • 与八字产生冲合刑害<br />
                        • 影响当年的具体事件
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">⚡ 流年特点</h4>
                      <p className="text-sm text-gray-600">
                        流年影响较为直接和短暂，主要影响当年的具体事件，如工作变动、感情变化、财运起伏等。
                      </p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>💡 例子：</strong>2024年是甲辰年，如果八字中有与甲辰相冲的字，这一年就容易出现变动或挑战。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 运势组合示例 */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <i className="fas fa-puzzle-piece text-purple-500 mr-2"></i>
                  八字+大运+流年组合分析
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">八字 - 基础盘</h4>
                      <p className="text-sm text-gray-600">相当于汽车的基础配置，决定了基本性能和特点</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">大运 - 道路状况</h4>
                      <p className="text-sm text-gray-600">相当于行驶的道路状况，决定了是高速公路还是崎岖小路</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">流年 - 天气情况</h4>
                      <p className="text-sm text-gray-600">相当于当天的天气，决定了是晴天朗日还是风雨交加</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>🎯 综合判断：</strong>好车+好路+好天气 = 一帆风顺<br />
                    好车+坏路+坏天气 = 举步维艰<br />
                    普通车+好路+好天气 = 也能顺利到达
                  </p>
                </div>
              </div>

              {/* 学习建议 */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <i className="fas fa-graduation-cap text-orange-500 mr-2"></i>
                  零基础学习建议
                </h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-book text-xl text-orange-500"></i>
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">先懂概念</h4>
                    <p className="text-sm text-gray-600">不要急于排盘，先理解干支、五行、十神的基本含义</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-calculator text-xl text-blue-500"></i>
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">学会排盘</h4>
                    <p className="text-sm text-gray-600">使用排盘软件，对比自己的八字，熟悉基本结构</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-users text-xl text-green-500"></i>
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">多看案例</h4>
                    <p className="text-sm text-gray-600">通过分析真实案例，理解理论在实际中的应用</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 总结部分 */}
          <section className="mb-16 fade-in">
            <div className="section-card bg-gradient-to-br from-red-50 to-yellow-50">
              <div className="text-center">
                <h2 className="serif-title text-2xl font-bold text-gray-800 mb-6">
                  <i className="fas fa-flag-checkered text-yellow-500 mr-2"></i>
                  学习总结
                </h2>

                <div className="max-w-3xl mx-auto">
                  <p className="text-gray-700 mb-6 text-lg">
                    恭喜你！通过今天的学习，你已经掌握了八字入门的三个核心概念：
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <i className="fas fa-yin-yang text-2xl text-blue-500"></i>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">干支系统</h3>
                      <p className="text-sm text-gray-600">了解天干地支的基本含义和对应关系</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <i className="fas fa-circle-nodes text-2xl text-green-500"></i>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">五行理论</h3>
                      <p className="text-sm text-gray-600">掌握五行的特征和相生相克关系</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <i className="fas fa-star text-2xl text-purple-500"></i>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">十神关系</h3>
                      <p className="text-sm text-gray-600">理解基本的十神含义和作用</p>
                    </div>
                  </div>

                  <div className="p-6 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">下一步学习建议</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">📚 理论学习</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 深入学习五行生克制化</li>
                          <li>• 掌握十神的详细含义</li>
                          <li>• 了解神煞和特殊格局</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">🎯 实践应用</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 用软件排自己的八字</li>
                          <li>• 分析家人朋友的八字</li>
                          <li>• 参加学习交流群讨论</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-4">
                      <i className="fas fa-quote-left text-yellow-500 mr-2"></i>
                      八字学习是一个循序渐进的过程，保持好奇心和耐心
                      <i className="fas fa-quote-right text-yellow-500 ml-2"></i>
                    </p>
                    <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
                      <span><i className="fas fa-clock mr-1"></i>持续学习</span>
                      <span><i className="fas fa-heart mr-1"></i>热爱传统文化</span>
                      <span><i className="fas fa-star mr-1"></i>理性看待命理</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 页脚 */}
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 mb-4">
              <i className="fas fa-yin-yang text-red-500 mr-2"></i>
              零基础八字入门 - 传承中华传统智慧
            </p>
            <p className="text-sm text-gray-500">
              本站内容仅供学习参考，请理性看待传统文化
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

        :root {
          --primary-red: #dc2626;
          --primary-gold: #f59e0b;
          --bg-cream: #fefce8;
          --bg-light: #fff7ed;
          --text-primary: #1f2937;
          --text-secondary: #4b5563;
          --border-light: #fed7aa;
        }

        body {
          font-family: 'Noto Sans SC', sans-serif;
          background: linear-gradient(135deg, #fefce8 0%, #fff7ed 100%);
          min-height: 100vh;
        }

        .serif-title {
          font-family: 'Noto Serif SC', serif;
        }

        .section-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .section-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .element-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0.25rem;
        }

        .wood { background: #dcfce7; color: #15803d; }
        .fire { background: #fee2e2; color: #dc2626; }
        .earth { background: #fef3c7; color: #d97706; }
        .metal { background: #f3f4f6; color: #4b5563; }
        .water { background: #dbeafe; color: #2563eb; }

        .step-number {
          width: 36px;
          height: 36px;
          background: var(--primary-red);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .table-custom {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 12px;
          overflow: hidden;
          margin: 1rem 0;
        }

        .table-custom th {
          background: var(--bg-light);
          color: var(--text-primary);
          font-weight: 600;
          padding: 1rem;
          text-align: center;
        }

        .table-custom td {
          padding: 0.75rem 1rem;
          text-align: center;
          border-top: 1px solid var(--border-light);
        }

        .table-custom tr:hover td {
          background: var(--bg-cream);
        }

        .concept-card {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          height: 100%;
        }

        .concept-card:hover {
          border-color: var(--primary-gold);
          box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.1);
        }

        .pillar-box {
          background: linear-gradient(135deg, #fff7ed 0%, #fefce8 100%);
          border: 2px solid var(--border-light);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .pillar-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.1);
        }

        .highlight-box {
          background: linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%);
          border-left: 4px solid var(--primary-red);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        .nav-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}