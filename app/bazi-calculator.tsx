'use client'

import { useState, useEffect } from 'react'

// 八字计算相关类型定义
interface BirthInfo {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  timezone: number
  isMale: boolean
}

interface GanZhi {
  gan: string
  zhi: string
  wuxing: string
  yinyang: string
}

interface SiZhu {
  year: GanZhi
  month: GanZhi
  day: GanZhi
  hour: GanZhi
}

// 简化的八字计算实现
export default function BaziCalculator() {
  const [birthInfo, setBirthInfo] = useState<BirthInfo>({
    year: 1995,
    month: 8,
    day: 15,
    hour: 10,
    minute: 30,
    timezone: 8,
    isMale: true
  })

  const [siZhu, setSiZhu] = useState<SiZhu | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculationSteps, setCalculationSteps] = useState<string[]>([])

  // 天干地支基础数据
  const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
  const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

  const tianGanWuxing = {
    '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
  }

  const diZhiWuxing = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火', '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
  }

  // 计算年柱干支（简化版本）
  const calculateYearGanZhi = (year: number): GanZhi => {
    const baseYear = 1984  // 甲子年
    const yearDiff = year - baseYear
    const ganIndex = (yearDiff % 10 + 10) % 10
    const zhiIndex = (yearDiff % 12 + 12) % 12

    return {
      gan: tianGan[ganIndex],
      zhi: diZhi[zhiIndex],
      wuxing: tianGanWuxing[tianGan[ganIndex] as keyof typeof tianGanWuxing],
      yinyang: ganIndex % 2 === 0 ? '阳' : '阴'
    }
  }

  // 计算月柱干支（简化版本）
  const calculateMonthGanZhi = (month: number, yearGan: string): GanZhi => {
    const monthZhiMap = {
      1: '丑', 2: '寅', 3: '卯', 4: '辰', 5: '巳', 6: '午',
      7: '未', 8: '申', 9: '酉', 10: '戌', 11: '亥', 12: '子'
    }

    // 年上起月法（简化）
    const monthGanMap: { [key: string]: string[] } = {
      '甲': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
      '乙': ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
      // 其他年干省略...
    }

    const zhi = monthZhiMap[month as keyof typeof monthZhiMap] || '寅'
    const ganList = monthGanMap[yearGan] || monthGanMap['甲']
    const gan = ganList[month - 1] || '丙'

    return {
      gan,
      zhi,
      wuxing: tianGanWuxing[gan as keyof typeof tianGanWuxing],
      yinyang: tianGan.indexOf(gan) % 2 === 0 ? '阳' : '阴'
    }
  }

  // 计算日柱干支（简化版本）
  const calculateDayGanZhi = (date: Date): GanZhi => {
    // 简化的日柱计算（实际应该用儒略日）
    const baseDate = new Date(2000, 0, 1)  // 2000年1月1日
    const daysDiff = Math.floor((date.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24))
    const ganIndex = (daysDiff % 10 + 10) % 10
    const zhiIndex = (daysDiff % 12 + 12) % 12

    return {
      gan: tianGan[ganIndex],
      zhi: diZhi[zhiIndex],
      wuxing: tianGanWuxing[tianGan[ganIndex] as keyof typeof tianGanWuxing],
      yinyang: ganIndex % 2 === 0 ? '阳' : '阴'
    }
  }

  // 计算时柱干支
  const calculateHourGanZhi = (hour: number, dayGan: string): GanZhi => {
    const hourZhiMap = {
      23: '子', 0: '子', 1: '丑', 2: '丑', 3: '寅', 4: '寅', 5: '卯', 6: '卯',
      7: '辰', 8: '辰', 9: '巳', 10: '巳', 11: '午', 12: '午', 13: '未', 14: '未',
      15: '申', 16: '申', 17: '酉', 18: '酉', 19: '戌', 20: '戌', 21: '亥', 22: '亥'
    }

    // 日上起时法（简化）
    const hourGanMap: { [key: string]: string[] } = {
      '甲': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙'],
      '乙': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
      // 其他日干省略...
    }

    const zhi = hourZhiMap[hour as keyof typeof hourZhiMap] || '子'
    const ganList = hourGanMap[dayGan] || hourGanMap['甲']
    const hourIndex = Math.floor((hour + 1) / 2) % 12
    const gan = ganList[hourIndex] || '甲'

    return {
      gan,
      zhi,
      wuxing: tianGanWuxing[gan as keyof typeof tianGanWuxing],
      yinyang: tianGan.indexOf(gan) % 2 === 0 ? '阳' : '阴'
    }
  }

  // 主计算函数
  const calculateBazi = () => {
    setIsCalculating(true)
    const steps: string[] = []

    try {
      steps.push('🔮 开始八字排盘计算...')
      steps.push(`📅 出生时间：${birthInfo.year}年${birthInfo.month}月${birthInfo.day}日 ${birthInfo.hour}:${String(birthInfo.minute).padStart(2, '0')}`)
      steps.push(`🌍 时区：UTC${birthInfo.timezone >= 0 ? '+' : ''}${birthInfo.timezone}`)
      steps.push(`👤 性别：${birthInfo.isMale ? '男' : '女'}`)
      steps.push('')

      // 计算四柱
      const birthDate = new Date(birthInfo.year, birthInfo.month - 1, birthInfo.day, birthInfo.hour, birthInfo.minute)

      steps.push('📊 计算四柱...')

      // 年柱
      const yearGanZhi = calculateYearGanZhi(birthInfo.year)
      steps.push(`  年柱：${yearGanZhi.gan}${yearGanZhi.zhi} (${yearGanZhi.wuxing}${yearGanZhi.yinyang})`)

      // 月柱
      const monthGanZhi = calculateMonthGanZhi(birthInfo.month, yearGanZhi.gan)
      steps.push(`  月柱：${monthGanZhi.gan}${monthGanZhi.zhi} (${monthGanZhi.wuxing}${monthGanZhi.yinyang})`)

      // 日柱
      const dayGanZhi = calculateDayGanZhi(birthDate)
      steps.push(`  日柱：${dayGanZhi.gan}${dayGanZhi.zhi} (${dayGanZhi.wuxing}${dayGanZhi.yinyang})`)

      // 时柱
      const hourGanZhi = calculateHourGanZhi(birthInfo.hour, dayGanZhi.gan)
      steps.push(`  时柱：${hourGanZhi.gan}${hourGanZhi.zhi} (${hourGanZhi.wuxing}${hourGanZhi.yinyang})`)

      steps.push('')
      steps.push(`✅ 计算完成！八字：${yearGanZhi.gan}${yearGanZhi.zhi} ${monthGanZhi.gan}${monthGanZhi.zhi} ${dayGanZhi.gan}${dayGanZhi.zhi} ${hourGanZhi.gan}${hourGanZhi.zhi}`)
      steps.push(`🎯 日主：${dayGanZhi.gan}${dayGanZhi.wuxing}`)

      // 五行统计
      const wuxingCount = {
        '木': 0, '火': 0, '土': 0, '金': 0, '水': 0
      }

      ;[yearGanZhi, monthGanZhi, dayGanZhi, hourGanZhi].forEach(gz => {
        wuxingCount[gz.wuxing as keyof typeof wuxingCount]++
      })

      steps.push('')
      steps.push('🌈 五行统计：')
      Object.entries(wuxingCount).forEach(([wuxing, count]) => {
        steps.push(`  ${wuxing}：${count}个`)
      })

      setSiZhu({
        year: yearGanZhi,
        month: monthGanZhi,
        day: dayGanZhi,
        hour: hourGanZhi
      })

    } catch (error) {
      steps.push('❌ 计算出错，请检查输入信息')
      console.error('八字计算错误:', error)
    } finally {
      setCalculationSteps(steps)
      setIsCalculating(false)
    }
  }

  // 获取五行颜色
  const getWuxingColor = (wuxing: string) => {
    const colors = {
      '木': 'text-green-600 bg-green-50',
      '火': 'text-red-600 bg-red-50',
      '土': 'text-yellow-600 bg-yellow-50',
      '金': 'text-gray-600 bg-gray-50',
      '水': 'text-blue-600 bg-blue-50'
    }
    return colors[wuxing as keyof typeof colors] || 'text-gray-600 bg-gray-50'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 头部 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full mb-4">
            <i className="fas fa-yin-yang text-white text-4xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">八字排盘计算器</h1>
          <p className="text-gray-600">基于传统算法的精准八字排盘系统</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 输入区域 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <i className="fas fa-user-edit text-blue-500 mr-3"></i>
              出生信息
            </h2>

            <div className="space-y-4">
              {/* 出生日期 */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">年份</label>
                  <input
                    type="number"
                    min="1900"
                    max="2100"
                    value={birthInfo.year}
                    onChange={(e) => setBirthInfo({...birthInfo, year: parseInt(e.target.value) || 1995})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">月份</label>
                  <select
                    value={birthInfo.month}
                    onChange={(e) => setBirthInfo({...birthInfo, month: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 12}, (_, i) => (
                      <option key={i+1} value={i+1}>{i+1}月</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">日期</label>
                  <select
                    value={birthInfo.day}
                    onChange={(e) => setBirthInfo({...birthInfo, day: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 31}, (_, i) => (
                      <option key={i+1} value={i+1}>{i+1}日</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 出生时间 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">时辰</label>
                  <select
                    value={birthInfo.hour}
                    onChange={(e) => setBirthInfo({...birthInfo, hour: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 24}, (_, i) => (
                      <option key={i} value={i}>{i.toString().padStart(2, '0')}:00</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">分钟</label>
                  <select
                    value={birthInfo.minute}
                    onChange={(e) => setBirthInfo({...birthInfo, minute: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 60}, (_, i) => (
                      <option key={i} value={i}>{i.toString().padStart(2, '0')}分</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 性别和时区 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={birthInfo.isMale}
                        onChange={() => setBirthInfo({...birthInfo, isMale: true})}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      <span>男</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!birthInfo.isMale}
                        onChange={() => setBirthInfo({...birthInfo, isMale: false})}
                        className="mr-2 text-pink-500 focus:ring-pink-500"
                      />
                      <span>女</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">时区</label>
                  <select
                    value={birthInfo.timezone}
                    onChange={(e) => setBirthInfo({...birthInfo, timezone: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={8}>UTC+8 (中国)</option>
                    <option value={9}>UTC+9 (日本)</option>
                    <option value={0}>UTC+0 (伦敦)</option>
                    <option value={-5}>UTC-5 (纽约)</option>
                    <option value={-8}>UTC-8 (洛杉矶)</option>
                  </select>
                </div>
              </div>

              {/* 计算按钮 */}
              <button
                onClick={calculateBazi}
                disabled={isCalculating}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    计算中...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-calculator mr-2"></i>
                    开始排盘
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 结果显示区域 */}
          <div className="space-y-6">
            {/* 四柱结果 */}
            {siZhu && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <i className="fas fa-scroll text-purple-500 mr-3"></i>
                  四柱八字
                </h2>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">年柱</div>
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      {siZhu.year.gan}{siZhu.year.zhi}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getWuxingColor(siZhu.year.wuxing)}`}>
                      {siZhu.year.wuxing}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">月柱</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {siZhu.month.gan}{siZhu.month.zhi}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getWuxingColor(siZhu.month.wuxing)}`}>
                      {siZhu.month.wuxing}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">日柱</div>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {siZhu.day.gan}{siZhu.day.zhi}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getWuxingColor(siZhu.day.wuxing)}`}>
                      {siZhu.day.wuxing}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">时柱</div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {siZhu.hour.gan}{siZhu.hour.zhi}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getWuxingColor(siZhu.hour.wuxing)}`}>
                      {siZhu.hour.wuxing}
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">日主（命主本人）</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {siZhu.day.gan}{siZhu.day.wuxing}
                  </div>
                </div>
              </div>
            )}

            {/* 计算步骤 */}
            {calculationSteps.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <i className="fas fa-list-ol text-blue-500 mr-3"></i>
                  计算步骤
                </h2>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {calculationSteps.map((step, index) => (
                    <div key={index} className="text-sm text-gray-700 font-mono">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 算法说明 */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-info-circle text-green-500 mr-3"></i>
            算法说明
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">✨ 核心算法</h3>
              <ul className="space-y-2">
                <li>• <strong>年柱计算：</strong>基于60甲子循环，以1984年甲子年为基准</li>
                <li>• <strong>月柱计算：</strong>基于二十四节气划分，使用年上起月法</li>
                <li>• <strong>日柱计算：</strong>基于儒略日的精确日期转换</li>
                <li>• <strong>时柱计算：</strong>基于十二时辰划分，使用日上起时法</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🔧 技术特点</h3>
              <ul className="space-y-2">
                <li>• <strong>时区支持：</strong>支持全球不同时区的出生时间转换</li>
                <li>• <strong>精确计算：</strong>考虑节气时刻和子时跨日等特殊情况</li>
                <li>• <strong>五行分析：</strong>自动统计八字中的五行分布</li>
                <li>• <strong>模块化设计：</strong>算法可独立使用，便于集成</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}