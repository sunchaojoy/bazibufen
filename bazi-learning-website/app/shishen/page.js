'use client'

import Link from 'next/link'
import { Users, ArrowLeft, Book, Compass } from 'lucide-react'

export default function ShishenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-title font-bold text-gray-900">十神说明</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">首页</Link>
              <Link href="/basics" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">八字基础</Link>
              <Link href="/elements" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">五行说明</Link>
              <Link href="/shishen" className="text-gray-900 hover:text-purple-600 font-medium transition-colors">十神说明</Link>
              <Link href="/example" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">命盘示例</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-title font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              十神说明
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解十神系统，掌握八字分析中最重要的关系网络
          </p>
        </div>

        {/* 十神概述 */}
        <section className="mb-16">
          <div className="content-card p-8">
            <h2 className="text-2xl font-title font-bold text-gray-900 mb-6">什么是十神？</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <span className="glossary-term" title="十神：正官、七杀、正财、偏财、正印、偏印、食神、伤官、比肩、劫财">
                  十神
                </span>
                是八字命理中的核心概念，它根据日主与其他七个天干的五行生克关系和阴阳属性，将复杂的关系归纳为十种基本类型。
              </p>
              <p>
                十神不仅是八字分析的工具，更是理解人性和命运的钥匙。通过分析命局中十神的分布和强弱，可以准确判断一个人的性格特征、职业倾向、人际关系和运势走向。
              </p>
            </div>
          </div>
        </section>

        {/* 十神分类 */}
        <section className="mb-16">
          <h2 className="text-3xl font-title font-bold text-center text-gray-900 mb-12">十神分类</h2>

          {/* 官杀类 */}
          <div className="mb-12">
            <h3 className="text-2xl font-title font-bold text-gray-800 mb-8 text-center">官杀类（克制我者）</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card p-8 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">正官</h4>
                  <span className="shishen-badge shishen-zhengguan">正官</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>克制日主且阴阳属性不同的天干</p>
                  <p><strong>特性：</strong>正直、守法、有责任感、重视名誉</p>
                  <p><strong>代表：</strong>事业、地位、法律、纪律、配偶（女命）</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">温和有礼，循规蹈矩，有管理才能，适合公务员、教师、管理者等职业。</p>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">七杀</h4>
                  <span className="shishen-badge shishen-qisha">七杀</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>克制日主且阴阳属性相同的天干</p>
                  <p><strong>特性：</strong>威严、果敢、有野心、喜欢挑战</p>
                  <p><strong>代表：</strong>权力、武力、竞争、压力、小人</p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">性格刚烈，敢作敢当，有领导才能，适合军人、警察、企业家等职业。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 财星类 */}
          <div className="mb-12">
            <h3 className="text-2xl font-title font-bold text-gray-800 mb-8 text-center">财星类（我克者）</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card p-8 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">正财</h4>
                  <span className="shishen-badge shishen-zhengcai">正财</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>被日主克制且阴阳属性不同的天干</p>
                  <p><strong>特性：</strong>勤俭、务实、稳健、重视物质</p>
                  <p><strong>代表：</strong>财富、财产、丈夫（女命）、稳健收入</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">脚踏实地，勤俭持家，善于理财，适合做生意、财务管理等。</p>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 border-l-4 border-yellow-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">偏财</h4>
                  <span className="shishen-badge shishen-piancai">偏财</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>被日主克制且阴阳属性相同的天干</p>
                  <p><strong>特性：</strong>慷慨、机智、善于交际、喜欢投机</p>
                  <p><strong>代表：</strong>意外之财、投资、社交、父亲</p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">为人豪爽，善于把握机会，适合销售、投资、贸易等职业。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 印星类 */}
          <div className="mb-12">
            <h3 className="text-2xl font-title font-bold text-gray-800 mb-8 text-center">印星类（生我者）</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card p-8 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">正印</h4>
                  <span className="shishen-badge shishen-zhengyin">正印</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>生日主且阴阳属性不同的天干</p>
                  <p><strong>特性：</strong>仁慈、温和、有爱心、重视学习</p>
                  <p><strong>代表：</strong>母亲、学识、名誉、保护、房产</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">温和善良，喜欢学习，有同情心，适合教师、医生、文化工作者。</p>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 border-l-4 border-indigo-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">偏印</h4>
                  <span className="shishen-badge shishen-pianyin">偏印</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>生日主且阴阳属性相同的天干</p>
                  <p><strong>特性：</strong>聪明、敏感、独特、善于思考</p>
                  <p><strong>代表：</strong>非传统学识、技艺、宗教、继母</p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">思维独特，学习能力强，适合艺术、设计、研究等创造性工作。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 食伤类 */}
          <div className="mb-12">
            <h3 className="text-2xl font-title font-bold text-gray-800 mb-8 text-center">食伤类（我生者）</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card p-8 border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">食神</h4>
                  <span className="shishen-badge shishen-shishen">食神</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>日主所生且阴阳属性不同的天干</p>
                  <p><strong>特性：</strong>乐观、温和、有艺术天赋、享受生活</p>
                  <p><strong>代表：</strong>才艺、乐观、饮食、子女（男命）</p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">性格开朗，有艺术细胞，善于表达，适合演艺、餐饮、设计等行业。</p>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 border-l-4 border-pink-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">伤官</h4>
                  <span className="shishen-badge shishen-shangguan">伤官</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>日主所生且阴阳属性相同的天干</p>
                  <p><strong>特性：</strong>聪明、叛逆、有才华、追求自由</p>
                  <p><strong>代表：</strong>才华、创新、叛逆、口才</p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">聪明敏锐，有创新精神，不喜欢约束，适合自由职业、创新行业。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 比劫类 */}
          <div className="mb-12">
            <h3 className="text-2xl font-title font-bold text-gray-800 mb-8 text-center">比劫类（同类者）</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card p-8 border-l-4 border-teal-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">比肩</h4>
                  <span className="shishen-badge shishen-bijian">比肩</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>与日主五行阴阳都相同的天干</p>
                  <p><strong>特性：</strong>独立、自信、有主见、重视友情</p>
                  <p><strong>代表：</strong>兄弟姐妹、朋友、同事、竞争者</p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">性格独立，有团队精神，适合合作经营、团队工作。</p>
                  </div>
                </div>
              </div>

              <div className="content-card p-8 border-l-4 border-cyan-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-title font-bold text-gray-900">劫财</h4>
                  <span className="shishen-badge shishen-jiecai">劫财</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p><strong>定义：</strong>与日主五行相同但阴阳不同的天干</p>
                  <p><strong>特性：</strong>热情、善于交际、冲动、重视面子</p>
                  <p><strong>代表：</strong>朋友、社交、投机、争夺</p>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>性格特征：</strong></p>
                    <p className="text-sm">善于交际，人缘好，但易冲动，适合销售、公关等需要社交的工作。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 十神关系图 */}
        <section className="mb-16">
          <div className="content-card p-8 bg-gradient-to-r from-purple-50 to-blue-50">
            <h3 className="text-2xl font-title font-bold text-gray-900 mb-6">十神关系总结</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-3">克我者（官杀）</h4>
                <p className="text-sm text-gray-600">代表事业、权力、约束</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-3">我克者（财星）</h4>
                <p className="text-sm text-gray-600">代表财富、物质、支配</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-3">生我者（印星）</h4>
                <p className="text-sm text-gray-600">代表学识、保护、支持</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-3">我生者（食伤）</h4>
                <p className="text-sm text-gray-600">代表才华、表达、创造</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-3">同类者（比劫）</h4>
                <p className="text-sm text-gray-600">代表朋友、竞争、合作</p>
              </div>
            </div>
          </div>
        </section>

        {/* 实用指导 */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-title font-bold mb-6">💡 实用指导</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">十神分析要点</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• 看十神的旺衰强弱</li>
                <li>• 看十神之间的生克关系</li>
                <li>• 看十神所在的位置</li>
                <li>• 结合大运流年综合判断</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">十神应用价值</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• 判断性格特征和行为模式</li>
                <li>• 分析适合的职业发展方向</li>
                <li>• 预测人际关系和感情状况</li>
                <li>• 把握人生机遇和挑战</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            href="/example"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white font-medium rounded-lg hover:from-orange-700 hover:to-purple-700 transition-all duration-300"
          >
            查看实例
            <Compass className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/elements"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            返回五行
          </Link>
        </div>
      </main>
    </div>
  )
}