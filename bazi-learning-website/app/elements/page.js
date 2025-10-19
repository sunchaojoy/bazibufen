'use client'

import Link from 'next/link'
import { Sparkles, ArrowLeft, Book, Users } from 'lucide-react'

export default function ElementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-title font-bold text-gray-900">五行说明</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">首页</Link>
              <Link href="/basics" className="text-gray-600 hover:text-green-600 font-medium transition-colors">八字基础</Link>
              <Link href="/elements" className="text-gray-900 hover:text-green-600 font-medium transition-colors">五行说明</Link>
              <Link href="/shishen" className="text-gray-600 hover:text-green-600 font-medium transition-colors">十神说明</Link>
              <Link href="/example" className="text-gray-600 hover:text-green-600 font-medium transition-colors">命盘示例</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-title font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              五行说明
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解金木水火土五行的特性与相互关系，掌握八字分析的核心理论
          </p>
        </div>

        {/* 五行概述 */}
        <section className="mb-16">
          <div className="content-card p-8">
            <h2 className="text-2xl font-title font-bold text-gray-900 mb-6">什么是五行？</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <span className="glossary-term" title="五行：金木水火土五种基本物质的运动变化">
                  五行学说
                </span>
                是中国古代哲学的重要理论，它认为宇宙万物都由金、木、水、火、土这五种基本物质构成，它们之间存在着相生相克的辩证关系。
              </p>
              <p>
                在八字命理中，五行是分析命局的基本工具。通过判断日主（日干）与其他干支的五行关系，可以推算出一个人的性格特征、运势走向和人生轨迹。
              </p>
            </div>
          </div>
        </section>

        {/* 五行特性 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">五行特性</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="content-card p-6 text-center border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="element-badge element-wood text-2xl">木</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">木</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>特性：</strong>生长、升发、条达</p>
                <p><strong>季节：</strong>春季</p>
                <p><strong>方位：</strong>东方</p>
                <p><strong>颜色：</strong>青绿</p>
                <p><strong>脏器：</strong>肝胆</p>
              </div>
            </div>

            <div className="content-card p-6 text-center border-l-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="element-badge element-fire text-2xl">火</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">火</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>特性：</strong>温热、上炎、光明</p>
                <p><strong>季节：</strong>夏季</p>
                <p><strong>方位：</strong>南方</p>
                <p><strong>颜色：</strong>赤红</p>
                <p><strong>脏器：</strong>心小肠</p>
              </div>
            </div>

            <div className="content-card p-6 text-center border-l-4 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="element-badge element-earth text-2xl">土</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">土</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>特性：</strong>承载、生化、包容</p>
                <p><strong>季节：</strong>长夏</p>
                <p><strong>方位：</strong>中央</p>
                <p><strong>颜色：</strong>黄</p>
                <p><strong>脏器：</strong>脾胃</p>
              </div>
            </div>

            <div className="content-card p-6 text-center border-l-4 border-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="element-badge element-metal text-2xl">金</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">金</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>特性：</strong>收敛、清洁、刚硬</p>
                <p><strong>季节：</strong>秋季</p>
                <p><strong>方位：</strong>西方</p>
                <p><strong>颜色：</strong>白</p>
                <p><strong>脏器：</strong>肺大肠</p>
              </div>
            </div>

            <div className="content-card p-6 text-center border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="element-badge element-water text-2xl">水</span>
              </div>
              <h3 className="text-xl font-title font-bold text-gray-900 mb-3">水</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>特性：</strong>滋润、向下、寒凉</p>
                <p><strong>季节：</strong>冬季</p>
                <p><strong>方位：</strong>北方</p>
                <p><strong>颜色：</strong>黑</p>
                <p><strong>脏器：</strong>肾膀胱</p>
              </div>
            </div>
          </div>
        </section>

        {/* 五行相生 */}
        <section className="mb-16">
          <div className="content-card p-8 bg-gradient-to-r from-green-50 to-blue-50">
            <h3 className="text-2xl font-title font-bold text-gray-900 mb-6">五行相生关系</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">相生规律</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-wood">木</span>
                    <span className="text-gray-600">生</span>
                    <span className="element-badge element-fire">火</span>
                    <span className="text-sm text-gray-600">（木生火）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-fire">火</span>
                    <span className="text-gray-600">生</span>
                    <span className="element-badge element-earth">土</span>
                    <span className="text-sm text-gray-600">（火生土）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-earth">土</span>
                    <span className="text-gray-600">生</span>
                    <span className="element-badge element-metal">金</span>
                    <span className="text-sm text-gray-600">（土生金）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-metal">金</span>
                    <span className="text-gray-600">生</span>
                    <span className="element-badge element-water">水</span>
                    <span className="text-sm text-gray-600">（金生水）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-water">水</span>
                    <span className="text-gray-600">生</span>
                    <span className="element-badge element-wood">木</span>
                    <span className="text-sm text-gray-600">（水生木）</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">相生含义</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>木生火：</strong>木可以燃烧生火</li>
                  <li>• <strong>火生土：</strong>火燃烧后化为灰土</li>
                  <li>• <strong>土生金：</strong>土中孕育金属矿物</li>
                  <li>• <strong>金生水：</strong>金属表面凝结水汽</li>
                  <li>• <strong>水生木：</strong>水滋润树木生长</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 五行相克 */}
        <section className="mb-16">
          <div className="content-card p-8 bg-gradient-to-r from-red-50 to-gray-50">
            <h3 className="text-2xl font-title font-bold text-gray-900 mb-6">五行相克关系</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">相克规律</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-wood">木</span>
                    <span className="text-red-600">克</span>
                    <span className="element-badge element-earth">土</span>
                    <span className="text-sm text-gray-600">（木克土）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-earth">土</span>
                    <span className="text-red-600">克</span>
                    <span className="element-badge element-water">水</span>
                    <span className="text-sm text-gray-600">（土克水）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-water">水</span>
                    <span className="text-red-600">克</span>
                    <span className="element-badge element-fire">火</span>
                    <span className="text-sm text-gray-600">（水克火）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-fire">火</span>
                    <span className="text-red-600">克</span>
                    <span className="element-badge element-metal">金</span>
                    <span className="text-sm text-gray-600">（火克金）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="element-badge element-metal">金</span>
                    <span className="text-red-600">克</span>
                    <span className="element-badge element-wood">木</span>
                    <span className="text-sm text-gray-600">（金克木）</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">相克含义</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>木克土：</strong>树木根系破土而出</li>
                  <li>• <strong>土克水：</strong>土壤可以阻挡水流</li>
                  <li>• <strong>水克火：</strong>水可以熄灭火焰</li>
                  <li>• <strong>火克金：</strong>火可以熔化金属</li>
                  <li>• <strong>金克木：</strong>金属工具可以砍伐树木</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 五行在八字中的应用 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">五行在八字中的应用</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">判断日主强弱</h3>
              <div className="space-y-4 text-gray-700">
                <p>通过分析日主与其他七个字的五行关系，判断日主的强弱：</p>
                <ul className="space-y-2">
                  <li>• <strong>得令：</strong>日主在月支得生扶</li>
                  <li>• <strong>得地：</strong>日主坐支为同类五行</li>
                  <li>• <strong>得势：</strong>命局中同类五行较多</li>
                </ul>
              </div>
            </div>

            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">寻找用神</h3>
              <div className="space-y-4 text-gray-700">
                <p>根据五行平衡原理，找出能够平衡命局的五行作为用神：</p>
                <ul className="space-y-2">
                  <li>• <strong>身强：</strong>用克泄耗的五行</li>
                  <li>• <strong>身弱：</strong>用生扶的五行</li>
                  <li>• <strong>寒暖：</strong>用火调候，用水润局</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 实用技巧 */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-title font-bold mb-6">💡 实用技巧</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">记忆口诀</h3>
              <ul className="space-y-2 text-green-100">
                <li>• 相生：木火土金水，循环不息</li>
                <li>• 相克：木土水火金，隔位相克</li>
                <li>• 顺生：木→火→土→金→水→木</li>
                <li>• 逆克：金→木→土→水→火→金</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">应用要点</h3>
              <ul className="space-y-2 text-green-100">
                <li>• 五行关系不是绝对的，要看具体组合</li>
                <li>• 相生相克可以同时存在</li>
                <li>• 要考虑五行的旺衰强弱</li>
                <li>• 结合大运流年综合分析</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            href="/shishen"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-green-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-green-700 transition-all duration-300"
          >
            学习十神
            <Users className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/basics"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            返回基础
          </Link>
        </div>
      </main>
    </div>
  )
}