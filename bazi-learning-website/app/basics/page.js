'use client'

import Link from 'next/link'
import { Book, ArrowLeft, Users, Sparkles } from 'lucide-react'

export default function BasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Book className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-title font-bold text-gray-900">八字基础</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">首页</Link>
              <Link href="/basics" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">八字基础</Link>
              <Link href="/elements" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">五行说明</Link>
              <Link href="/shishen" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">十神说明</Link>
              <Link href="/example" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">命盘示例</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-title font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              八字基础
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解八字命理的基本概念，掌握四柱排盘的核心原理
          </p>
        </div>

        {/* 什么是八字 */}
        <section className="mb-16">
          <div className="content-card p-8">
            <h2 className="text-2xl font-title font-bold text-gray-900 mb-6">什么是八字？</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <span className="glossary-term" title="八字：由年、月、日、时的天干地支组合而成的八个字">
                  八字命理
                </span>
                ，又称四柱预测学，是中国传统命理学的重要组成部分。它通过一个人出生的年、月、日、时，用天干地支排列成"四柱"，共八个字，来推算一个人的命运轨迹。
              </p>
              <p>
                八字的核心理论建立在阴阳五行、天干地支的基础上，通过分析五行的生克制化关系，揭示人生的运势变化规律。
              </p>
            </div>
          </div>
        </section>

        {/* 四柱组成 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">四柱组成</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="content-card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">年</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">年柱</h3>
              <p className="text-gray-600 text-sm">
                代表1-16岁，祖辈、父母、根基、早年运势
              </p>
            </div>

            <div className="content-card p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">月</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">月柱</h3>
              <p className="text-gray-600 text-sm">
                代表17-32岁，父母、兄弟、事业、青年运势
              </p>
            </div>

            <div className="content-card p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">日</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">日柱</h3>
              <p className="text-gray-600 text-sm">
                代表33-48岁，自己、配偶、中年运势
              </p>
            </div>

            <div className="content-card p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">时</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">时柱</h3>
              <p className="text-gray-600 text-sm">
                代表49岁后，子女、晚年运势
              </p>
            </div>
          </div>
        </section>

        {/* 天干地支 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-card p-8">
              <h3 className="text-2xl font-title font-bold text-gray-900 mb-6">
                <span className="glossary-term" title="天干：甲乙丙丁戊己庚辛壬癸">
                  天干
                </span>
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">天干共有十个，分为阴阳五组：</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="element-badge element-wood">甲</span> 乙
                    <p className="text-xs text-gray-600 mt-1">阳木 阴木</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <span className="element-badge element-fire">丙</span> 丁
                    <p className="text-xs text-gray-600 mt-1">阳火 阴火</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <span className="element-badge element-earth">戊</span> 己
                    <p className="text-xs text-gray-600 mt-1">阳土 阴土</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="element-badge element-metal">庚</span> 辛
                    <p className="text-xs text-gray-600 mt-1">阳金 阴金</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg col-span-2">
                    <span className="element-badge element-water">壬</span> 癸
                    <p className="text-xs text-gray-600 mt-1">阳水 阴水</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-card p-8">
              <h3 className="text-2xl font-title font-bold text-gray-900 mb-6">
                <span className="glossary-term" title="地支：子丑寅卯辰巳午未申酉戌亥">
                  地支
                </span>
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">地支共有十二个，对应十二生肖：</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">子</span> 鼠
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">丑</span> 牛
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">寅</span> 虎
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">卯</span> 兔
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">辰</span> 龙
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">巳</span> 蛇
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">午</span> 马
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">未</span> 羊
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">申</span> 猴
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">酉</span> 鸡
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">戌</span> 狗
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-bold">亥</span> 猪
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 学习步骤 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">学习步骤</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-2">掌握基础概念</h3>
                <p className="text-gray-600">
                  理解阴阳五行、天干地支的基本含义和特性
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-2">学习排盘方法</h3>
                <p className="text-gray-600">
                  掌握如何根据出生时间排出四柱八字
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-2">分析五行关系</h3>
                <p className="text-gray-600">
                  理解五行的生克制化，判断日主强弱
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 学习建议 */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-title font-bold mb-6">💡 学习建议</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">初学者注意</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• 不要急于求成，循序渐进学习</li>
                <li>• 多练习排盘，熟悉天干地支</li>
                <li>• 理论与实践相结合</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">进阶方向</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• 深入学习十神理论</li>
                <li>• 掌握格局分析方法</li>
                <li>• 研究大运流年推算</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            href="/elements"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
          >
            继续学习五行
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/example"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            查看实例
          </Link>
        </div>
      </main>
    </div>
  )
}