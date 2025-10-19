'use client'

import Link from 'next/link'
import { Compass, ArrowLeft, Book, Sparkles } from 'lucide-react'

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-title font-bold text-gray-900">命盘示例</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">首页</Link>
              <Link href="/basics" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">八字基础</Link>
              <Link href="/elements" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">五行说明</Link>
              <Link href="/shishen" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">十神说明</Link>
              <Link href="/example" className="text-gray-900 hover:text-orange-600 font-medium transition-colors">命盘示例</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-title font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
              命盘示例
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过完整命盘案例分析，学习八字解析的实际应用方法
          </p>
        </div>

        {/* 案例基本信息 */}
        <section className="mb-16">
          <div className="content-card p-8">
            <h2 className="text-2xl font-title font-bold text-gray-900 mb-6">案例基本信息</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">姓名：</span>
                  <span className="text-gray-600">张三（化名）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">性别：</span>
                  <span className="text-gray-600">男</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">出生时间：</span>
                  <span className="text-gray-600">1990年3月15日 上午10时30分</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">农历：</span>
                  <span className="text-gray-600">庚午年二月十九日巳时</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">节气：</span>
                  <span className="text-gray-600">惊蛰后（春木当令）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-700">日主：</span>
                  <span className="element-badge element-wood">甲木</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 四柱排盘 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">四柱排盘</h2>
          <div className="content-card p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-purple-50">
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-900">四柱</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900">天干</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900">五行</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900">地支</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900">五行</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-900">十神</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-bold text-blue-600">年柱</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-metal">庚</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="text-gray-600">金</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="font-bold">午</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-fire">火</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="shishen-badge shishen-qisha">七杀</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-bold text-green-600">月柱</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-earth">己</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-earth">土</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="font-bold">卯</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-wood">木</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="shishen-badge shishen-zhengcai">正财</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-yellow-50">
                    <td className="border border-gray-300 px-6 py-4 font-bold text-orange-600">日柱</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-wood text-lg">甲</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-wood">木</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="font-bold">戌</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-earth">土</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="text-gray-600">日主</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-bold text-purple-600">时柱</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-earth">己</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-earth">土</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="font-bold">巳</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="element-badge element-fire">火</span>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <span className="shishen-badge shishen-zhengcai">正财</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 五行分析 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">五行分析</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">五行统计</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="element-badge element-wood">木</span>
                    <span className="font-medium">甲木（日主）</span>
                  </span>
                  <span className="text-sm text-gray-600">得令（卯月）</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="element-badge element-fire">火</span>
                    <span className="font-medium">午火、巳火</span>
                  </span>
                  <span className="text-sm text-gray-600">2个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="element-badge element-earth">土</span>
                    <span className="font-medium">己土×2、戌土</span>
                  </span>
                  <span className="text-sm text-gray-600">3个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="element-badge element-metal">金</span>
                    <span className="font-medium">庚金</span>
                  </span>
                  <span className="text-sm text-gray-600">1个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="element-badge element-water">水</span>
                    <span className="font-medium">无</span>
                  </span>
                  <span className="text-sm text-red-600">缺水</span>
                </div>
              </div>
            </div>

            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">日主强弱分析</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800 mb-2">✅ 得令优势</p>
                  <p className="text-sm">甲木生于卯月，木当令，得月令帮扶</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-800 mb-2">✅ 坐支分析</p>
                  <p className="text-sm">日坐戌土，虽克但为财，有承担能力</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-bold text-yellow-800 mb-2">⚠️ 综合判断</p>
                  <p className="text-sm">身财两旺，需水调候，用神为水</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 十神分析 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">十神分析</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="content-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900">七杀</h4>
                <span className="shishen-badge shishen-qisha">庚金</span>
              </div>
              <p className="text-sm text-gray-600">年柱七杀，早年有压力，能激发上进心，适合从军或管理。</p>
            </div>

            <div className="content-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900">正财</h4>
                <span className="shishen-badge shishen-zhengcai">己土×2</span>
              </div>
              <p className="text-sm text-gray-600">月时双正财，财运稳定，重视物质，适合经商或财务管理。</p>
            </div>

            <div className="content-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900">日主</h4>
                <span className="element-badge element-wood">甲木</span>
              </div>
              <p className="text-sm text-gray-600">甲木正直仁慈，有上进心，喜欢学习，有领导才能。</p>
            </div>
          </div>
        </section>

        {/* 性格特征分析 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">性格特征分析</h2>
          <div className="content-card p-8 bg-gradient-to-r from-orange-50 to-purple-50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-6">优点特征</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>正直仁慈，有责任心</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>上进心强，不甘平凡</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>重视财富，理财能力强</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>抗压能力强，能承受压力</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-6">需要注意</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">!</span>
                    <span>容易过于追求物质</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">!</span>
                    <span>有时压力大，需要调节</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">!</span>
                    <span>缺乏耐心，容易急躁</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">!</span>
                    <span>需要加强学习充电</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 运势建议 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">运势建议</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">事业发展</h3>
              <div className="space-y-4 text-gray-700">
                <p>适合从事与木、水相关的行业：</p>
                <ul className="space-y-2">
                  <li>• <strong>教育行业：</strong>教师、培训、咨询</li>
                  <li>• <strong>文化出版：</strong>编辑、写作、设计</li>
                  <li>• <strong>贸易商业：</strong>进出口、销售、管理</li>
                  <li>• <strong>园林绿化：</strong>景观设计、花卉种植</li>
                </ul>
              </div>
            </div>

            <div className="content-card p-8">
              <h3 className="text-xl font-title font-bold text-gray-900 mb-6">健康养生</h3>
              <div className="space-y-4 text-gray-700">
                <p>五行缺水，需要注意：</p>
                <ul className="space-y-2">
                  <li>• <strong>多喝水：</strong>保持充足水分</li>
                  <li>• <strong>养肾：</strong>黑色食物，早睡早起</li>
                  <li>• <strong>运动：</strong>游泳、跑步等有氧运动</li>
                  <li>• <strong>心态：</strong>保持平和，避免急躁</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 学习总结 */}
        <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-title font-bold mb-6">📚 学习要点总结</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-3">分析步骤</h3>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>1. 确定日主五行</li>
                <li>2. 分析得令得地</li>
                <li>3. 统计五行数量</li>
                <li>4. 判断日主强弱</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">关键因素</h3>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• 月令最重要</li>
                <li>• 地支藏干影响大</li>
                <li>• 五行平衡是核心</li>
                <li>• 用神决定运势</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">实践建议</h3>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• 多练习排盘</li>
                <li>• 熟记天干地支</li>
                <li>• 理解五行生克</li>
                <li>• 结合实际验证</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            href="/basics"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-300"
          >
            重新学习基础
            <Book className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/shishen"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            深入十神
          </Link>
        </div>
      </main>
    </div>
  )
}