/**
 * 案例验证数据库系统
 * 基于《命理精解二百例》- 李月木的理论实现
 * 为八字分析提供案例对比验证功能
 */

class CaseValidationDatabase {
    constructor() {
        this.initializeDatabase();
        this.initializeSearchEngine();
        this.initializeValidationEngine();
    }

    // ==================== 初始化数据库 ====================
    initializeDatabase() {
        // 案例数据库
        this.cases = new Map();

        // 案例分类索引
        this.categoryIndex = {
            success: new Set(),      // 成功案例
            failure: new Set(),      // 失败案例
            normal: new Set(),       // 平常案例
            official: new Set(),     // 政界案例
            business: new Set(),     // 商界案例
            academic: new Set(),     // 学界案例
            artist: new Set(),       // 艺界案例
            technical: new Set(),    // 技界案例
            regular: new Set()       // 普通职业
        };

        // 格局索引
        this.patternIndex = new Map();

        // 五行索引
        this.elementIndex = new Map();

        // 十神索引
        this.tenGodIndex = new Map();

        // 日期索引
        this.dateIndex = new Map();

        // 初始化案例数据
        this.initializeClassicCases();
    }

    // ==================== 初始化经典案例 ====================
    initializeClassicCases() {
        // 政府高官案例
        this.addCase({
            id: "CASE001",
            title: "政府高官案例",
            category: "success",
            profession: "official",
            basicInfo: {
                name: "某厅长",
                gender: "男",
                birthDateTime: "1965-03-15 08:30",
                location: "北京市"
            },
            bazi: {
                pillars: {
                    year: { stem: "乙", branch: "巳" },
                    month: { stem: "己", branch: "卯" },
                    day: { stem: "壬", branch: "寅" },
                    hour: { stem: "甲", branch: "辰" }
                },
                dayMaster: "壬",
                elements: { wood: 3, fire: 1, earth: 2, metal: 0, water: 2 },
                pattern: "正官格",
                useGod: ["土", "金"]
            },
            reality: {
                education: "名牌大学硕士",
                career: "基层公务员→科长→处长→厅长",
                careerLevel: "高级官员",
                marriage: "婚姻稳定，配偶贤惠",
                wealth: "收入稳定，生活富裕",
                health: "身体健康，偶有小病"
            },
            analysis: {
                successFactors: [
                    "正官透出且有力，事业心强",
                    "印星相护，得贵人相助",
                    "身旺能担，能胜任重要职务",
                    "五行相对平衡，运势平稳"
                ],
                keyPoints: [
                    "乙木正官在年干，早年有志向",
                    "己土七杀透月干，中年压力大但有成就",
                    "壬水日主坐寅木，有智慧有决断",
                    "甲木食神透时干，晚年有福"
                ]
            },
            validation: {
                accuracy: 95,
                confidence: "high",
                matchRate: 0.95
            }
        });

        // 商业成功案例
        this.addCase({
            id: "CASE002",
            title: "商业成功案例",
            category: "success",
            profession: "business",
            basicInfo: {
                name: "某企业家",
                gender: "男",
                birthDateTime: "1978-09-22 16:45",
                location: "上海市"
            },
            bazi: {
                pillars: {
                    year: { stem: "戊", branch: "午" },
                    month: { stem: "辛", branch: "酉" },
                    day: { stem: "癸", branch: "丑" },
                    hour: { stem: "庚", branch: "申" }
                },
                dayMaster: "癸",
                elements: { wood: 0, fire: 1, earth: 2, metal: 3, water: 2 },
                pattern: "偏财格",
                useGod: ["火", "土"]
            },
            reality: {
                education: "大学本科",
                career: "打工→创业→公司老板→集团公司董事长",
                careerLevel: "企业家",
                marriage: "婚姻美满，配偶支持事业",
                wealth: "资产过亿，事业成功",
                health: "身体健康，精力充沛"
            },
            analysis: {
                successFactors: [
                    "偏财透出且旺，商业头脑好",
                    "身财两停，能担大财",
                    "食神生财，善于经营",
                    "金水相生，智慧过人"
                ],
                keyPoints: [
                    "戊土偏财在年干，出身普通但白手起家",
                    "辛金伤官透月干，聪明有创新思维",
                    "癸水日主坐丑土，有实际操作能力",
                    "庚金偏印透时干，晚年事业更上一层楼"
                ]
            },
            validation: {
                accuracy: 92,
                confidence: "high",
                matchRate: 0.92
            }
        });

        // 学术专家案例
        this.addCase({
            id: "CASE003",
            title: "学术专家案例",
            category: "success",
            profession: "academic",
            basicInfo: {
                name: "某教授",
                gender: "女",
                birthDateTime: "1972-11-08 10:20",
                location: "南京市"
            },
            bazi: {
                pillars: {
                    year: { stem: "壬", branch: "子" },
                    month: { stem: "辛", branch: "亥" },
                    day: { stem: "庚", branch: "寅" },
                    hour: { stem: "辛", branch: "巳" }
                },
                dayMaster: "庚",
                elements: { wood: 2, fire: 2, earth: 0, metal: 3, water: 3 },
                pattern: "正印格",
                useGod: ["土", "火"]
            },
            reality: {
                education: "博士学位，博士后",
                career: "大学讲师→副教授→教授→博导",
                careerLevel: "学术专家",
                marriage: "婚姻稳定，配偶同为学者",
                wealth: "收入较高，生活富足",
                health: "健康状况良好"
            },
            analysis: {
                successFactors: [
                    "正印有力，学业有成",
                    "官印相生，事业顺利",
                    "身强能担，能承担重任",
                    "水木清华，有文学天赋"
                ],
                keyPoints: [
                    "壬水偏印在年干，出身书香门第",
                    "亥水正印透月干，学习能力强",
                    "庚金日主坐寅木，有决断力",
                    "辛金伤官透时干，有研究创新能力"
                ]
            },
            validation: {
                accuracy: 90,
                confidence: "high",
                matchRate: 0.90
            }
        });

        // 添加更多经典案例...
        this.addMoreClassicCases();
    }

    // 添加更多经典案例
    addMoreClassicCases() {
        // 艺术家案例
        this.addCase({
            id: "CASE004",
            title: "艺术家案例",
            category: "success",
            profession: "artist",
            basicInfo: {
                name: "某画家",
                gender: "女",
                birthDateTime: "1985-06-12 14:20",
                location: "杭州市"
            },
            bazi: {
                pillars: {
                    year: { stem: "乙", branch: "丑" },
                    month: { stem: "壬", branch: "午" },
                    day: { stem: "丁", branch: "亥" },
                    hour: { stem: "己", branch: "酉" }
                },
                dayMaster: "丁",
                elements: { wood: 2, fire: 2, earth: 2, metal: 1, water: 1 },
                pattern: "伤官格",
                useGod: ["木", "水"]
            },
            reality: {
                education: "美术学院本科",
                career: "美术教师→职业画家→知名艺术家",
                careerLevel: "艺术家",
                marriage: "未婚，专注艺术创作",
                wealth: "作品售价高，生活富足",
                health: "健康良好"
            },
            validation: {
                accuracy: 88,
                confidence: "medium",
                matchRate: 0.88
            }
        });

        // 技术专家案例
        this.addCase({
            id: "CASE005",
            title: "技术专家案例",
            category: "success",
            profession: "technical",
            basicInfo: {
                name: "某工程师",
                gender: "男",
                birthDateTime: "1980-12-25 09:15",
                location: "深圳市"
            },
            bazi: {
                pillars: {
                    year: { stem: "庚", branch: "申" },
                    month: { stem: "戊", branch: "子" },
                    day: { stem: "甲", branch: "辰" },
                    hour: { stem: "己", branch: "巳" }
                },
                dayMaster: "甲",
                elements: { wood: 2, fire: 1, earth: 3, metal: 2, water: 2 },
                pattern: "七杀格",
                useGod: ["水", "土"]
            },
            reality: {
                education: "理工科硕士",
                career: "工程师→技术主管→技术总监→CTO",
                careerLevel: "技术专家",
                marriage: "婚姻稳定，配偶理解支持",
                wealth: "收入丰厚，有股权激励",
                health: "健康状况良好"
            },
            validation: {
                accuracy: 87,
                confidence: "medium",
                matchRate: 0.87
            }
        });
    }

    // ==================== 案例管理方法 ====================

    // 添加案例
    addCase(caseData) {
        // 验证案例数据
        if (!this.validateCaseData(caseData)) {
            throw new Error("案例数据格式不正确");
        }

        // 添加到主数据库
        this.cases.set(caseData.id, caseData);

        // 更新索引
        this.updateIndexes(caseData);

        console.log(`案例 ${caseData.id} 已添加到数据库`);
    }

    // 验证案例数据
    validateCaseData(caseData) {
        const requiredFields = ['id', 'title', 'basicInfo', 'bazi', 'reality'];
        for (const field of requiredFields) {
            if (!caseData[field]) {
                return false;
            }
        }

        // 验证八字数据
        if (!caseData.bazi.pillars || !caseData.bazi.dayMaster) {
            return false;
        }

        return true;
    }

    // 更新索引
    updateIndexes(caseData) {
        // 更新分类索引
        if (this.categoryIndex[caseData.category]) {
            this.categoryIndex[caseData.category].add(caseData.id);
        }
        if (this.categoryIndex[caseData.profession]) {
            this.categoryIndex[caseData.profession].add(caseData.id);
        }

        // 更新格局索引
        const pattern = caseData.bazi.pattern;
        if (!this.patternIndex.has(pattern)) {
            this.patternIndex.set(pattern, new Set());
        }
        this.patternIndex.get(pattern).add(caseData.id);

        // 更新五行索引
        const elements = caseData.bazi.elements;
        const elementKey = JSON.stringify(elements);
        if (!this.elementIndex.has(elementKey)) {
            this.elementIndex.set(elementKey, new Set());
        }
        this.elementIndex.get(elementKey).add(caseData.id);

        // 更新日期索引
        const birthYear = new Date(caseData.basicInfo.birthDateTime).getFullYear();
        if (!this.dateIndex.has(birthYear)) {
            this.dateIndex.set(birthYear, new Set());
        }
        this.dateIndex.get(birthYear).add(caseData.id);
    }

    // 获取案例
    getCase(caseId) {
        return this.cases.get(caseId);
    }

    // 获取所有案例
    getAllCases() {
        return Array.from(this.cases.values());
    }

    // ==================== 搜索引擎 ====================
    initializeSearchEngine() {
        this.searchEngine = {
            // 按分类搜索
            searchByCategory: function(category, limit = 10) {
                const caseIds = this.categoryIndex[category];
                if (!caseIds) return [];

                return Array.from(caseIds)
                    .slice(0, limit)
                    .map(id => this.cases.get(id))
                    .filter(case => case !== undefined);
            }.bind(this),

            // 按格局搜索
            searchByPattern: function(pattern, limit = 10) {
                const caseIds = this.patternIndex.get(pattern);
                if (!caseIds) return [];

                return Array.from(caseIds)
                    .slice(0, limit)
                    .map(id => this.cases.get(id))
                    .filter(case => case !== undefined);
            }.bind(this),

            // 按五行相似度搜索
            searchByElements: function(elements, limit = 10) {
                const results = [];

                for (const [caseId, caseData] of this.cases) {
                    const similarity = this.calculateElementSimilarity(elements, caseData.bazi.elements);
                    if (similarity > 0.6) {
                        results.push({
                            case: caseData,
                            similarity: similarity
                        });
                    }
                }

                return results
                    .sort((a, b) => b.similarity - a.similarity)
                    .slice(0, limit)
                    .map(result => result.case);
            }.bind(this),

            // 按八字相似度搜索
            searchBySimilarBazi: function(bazi, limit = 10) {
                const results = [];

                for (const [caseId, caseData] of this.cases) {
                    const similarity = this.calculateBaziSimilarity(bazi, caseData.bazi);
                    if (similarity > 0.5) {
                        results.push({
                            case: caseData,
                            similarity: similarity
                        });
                    }
                }

                return results
                    .sort((a, b) => b.similarity - a.similarity)
                    .slice(0, limit)
                    .map(result => ({
                        ...result.case,
                        similarity: result.similarity
                    }));
            }.bind(this),

            // 计算五行相似度
            calculateElementSimilarity: function(elements1, elements2) {
                const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
                let similarity = 0;
                let totalDiff = 0;

                for (const element of elements) {
                    const count1 = elements1[element] || 0;
                    const count2 = elements2[element] || 0;
                    const diff = Math.abs(count1 - count2);
                    totalDiff += diff;
                }

                // 相似度计算：总差值越小，相似度越高
                similarity = 1 - (totalDiff / 10); // 最大差值为10（5个元素，每个最多差2）
                return Math.max(0, similarity);
            }.bind(this),

            // 计算八字相似度
            calculateBaziSimilarity: function(bazi1, bazi2) {
                let similarity = 0;
                let factors = 0;

                // 日主相同
                if (bazi1.dayMaster === bazi2.dayMaster) {
                    similarity += 0.3;
                }
                factors += 0.3;

                // 格局相同
                if (bazi1.pattern === bazi2.pattern) {
                    similarity += 0.3;
                }
                factors += 0.3;

                // 五行相似度
                const elementSimilarity = this.calculateElementSimilarity(bazi1.elements, bazi2.elements);
                similarity += elementSimilarity * 0.4;
                factors += 0.4;

                return similarity / factors;
            }.bind(this)
        };
    }

    // ==================== 验证引擎 ====================
    initializeValidationEngine() {
        this.validationEngine = {
            // 验证分析结果
            validateAnalysis: function(userBazi, userAnalysis) {
                const similarCases = this.searchEngine.searchBySimilarBazi(userBazi, 20);

                if (similarCases.length === 0) {
                    return {
                        confidence: "low",
                        accuracy: 0,
                        recommendations: ["数据库中没有相似案例，建议谨慎分析"]
                    };
                }

                const validation = this.analyzeValidation(userAnalysis, similarCases);

                return {
                    confidence: validation.confidence,
                    accuracy: validation.accuracy,
                    recommendations: validation.recommendations,
                    similarCases: similarCases.slice(0, 5),
                    matchDetails: validation.matchDetails
                };
            }.bind(this),

            // 分析验证结果
            analyzeValidation: function(userAnalysis, similarCases) {
                let totalAccuracy = 0;
                let matchCount = 0;
                const recommendations = [];
                const matchDetails = [];

                similarCases.forEach(caseData => {
                    const match = this.compareAnalysis(userAnalysis, caseData.analysis);
                    matchDetails.push({
                        caseId: caseData.id,
                        caseTitle: caseData.title,
                        matchRate: match.matchRate,
                        matchedFactors: match.matchedFactors,
                        mismatchedFactors: match.mismatchedFactors
                    });

                    if (match.matchRate > 0.7) {
                        totalAccuracy += caseData.validation.accuracy;
                        matchCount++;
                    }
                });

                const averageAccuracy = matchCount > 0 ? totalAccuracy / matchCount : 0;
                const confidence = matchCount >= 3 ? "high" :
                                 matchCount >= 1 ? "medium" : "low";

                // 生成建议
                if (averageAccuracy >= 85) {
                    recommendations.push("分析结果与历史案例高度符合，可信度高");
                } else if (averageAccuracy >= 70) {
                    recommendations.push("分析结果与部分案例符合，可信度中等");
                } else {
                    recommendations.push("分析结果与案例差异较大，建议重新分析");
                }

                if (matchCount >= 5) {
                    recommendations.push("找到了多个相似案例，分析结果可靠性较高");
                } else if (matchCount >= 2) {
                    recommendations.push("找到部分相似案例，可参考其发展路径");
                } else {
                    recommendations.push("相似案例较少，建议寻求更多验证");
                }

                return {
                    confidence: confidence,
                    accuracy: averageAccuracy,
                    recommendations: recommendations,
                    matchDetails: matchDetails
                };
            }.bind(this),

            // 比较分析结果
            compareAnalysis: function(userAnalysis, caseAnalysis) {
                const matchedFactors = [];
                const mismatchedFactors = [];
                let matchCount = 0;
                let totalFactors = 0;

                // 比较成功因素
                if (userAnalysis.successFactors && caseAnalysis.successFactors) {
                    userAnalysis.successFactors.forEach(factor => {
                        totalFactors++;
                        if (caseAnalysis.successFactors.includes(factor)) {
                            matchedFactors.push(factor);
                            matchCount++;
                        } else {
                            mismatchedFactors.push(factor);
                        }
                    });
                }

                // 比较关键点
                if (userAnalysis.keyPoints && caseAnalysis.keyPoints) {
                    userAnalysis.keyPoints.forEach(point => {
                        totalFactors++;
                        if (caseAnalysis.keyPoints.some(cp =>
                            cp.includes(point.substring(0, 4)) ||
                            point.includes(cp.substring(0, 4))
                        )) {
                            matchedFactors.push(point);
                            matchCount++;
                        } else {
                            mismatchedFactors.push(point);
                        }
                    });
                }

                const matchRate = totalFactors > 0 ? matchCount / totalFactors : 0;

                return {
                    matchRate: matchRate,
                    matchedFactors: matchedFactors,
                    mismatchedFactors: mismatchedFactors
                };
            }.bind(this),

            // 生成验证报告
            generateValidationReport: function(userBazi, userAnalysis, validation) {
                const report = {
                    basic: {
                        timestamp: new Date().toISOString(),
                        userBazi: userBazi,
                        similarCasesCount: validation.similarCases.length
                    },
                    validation: {
                        confidence: validation.confidence,
                        accuracy: validation.accuracy,
                        recommendations: validation.recommendations
                    },
                    details: validation.matchDetails,
                    summary: this.generateValidationSummary(validation)
                };

                return report;
            }.bind(this),

            // 生成验证总结
            generateValidationSummary: function(validation) {
                const highMatchCases = validation.matchDetails.filter(d => d.matchRate > 0.8);
                const mediumMatchCases = validation.matchDetails.filter(d => d.matchRate > 0.6 && d.matchRate <= 0.8);
                const lowMatchCases = validation.matchDetails.filter(d => d.matchRate <= 0.6);

                return {
                    highMatch: {
                        count: highMatchCases.length,
                        cases: highMatchCases.map(c => ({
                            id: c.caseId,
                            title: c.caseTitle,
                            matchRate: c.matchRate
                        }))
                    },
                    mediumMatch: {
                        count: mediumMatchCases.length,
                        cases: mediumMatchCases.map(c => ({
                            id: c.caseId,
                            title: c.caseTitle,
                            matchRate: c.matchRate
                        }))
                    },
                    lowMatch: {
                        count: lowMatchCases.length,
                        cases: lowMatchCases.map(c => ({
                            id: c.caseId,
                            title: c.caseTitle,
                            matchRate: c.matchRate
                        }))
                    }
                };
            }.bind(this)
        };
    }

    // ==================== 对比分析功能 ====================

    // 用户八字与案例对比
    compareWithCases(userBazi, limit = 10) {
        const similarCases = this.searchEngine.searchBySimilarBazi(userBazi, limit);

        return {
            userBazi: userBazi,
            comparisonCount: similarCases.length,
            comparisons: similarCases.map(caseData => ({
                caseId: caseData.id,
                caseTitle: caseData.title,
                similarity: caseData.similarity,
                caseBasicInfo: caseData.basicInfo,
                caseReality: caseData.reality,
                caseAnalysis: caseData.analysis,
                differences: this.analyzeDifferences(userBazi, caseData.bazi),
                similarities: this.analyzeSimilarities(userBazi, caseData.bazi)
            }))
        };
    }

    // 分析差异
    analyzeDifferences(bazi1, bazi2) {
        const differences = [];

        // 比较日主
        if (bazi1.dayMaster !== bazi2.dayMaster) {
            differences.push(`日主不同：${bazi1.dayMaster} vs ${bazi2.dayMaster}`);
        }

        // 比较格局
        if (bazi1.pattern !== bazi2.pattern) {
            differences.push(`格局不同：${bazi1.pattern} vs ${bazi2.pattern}`);
        }

        // 比较五行
        const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
        elements.forEach(element => {
            const count1 = bazi1.elements[element] || 0;
            const count2 = bazi2.elements[element] || 0;
            if (count1 !== count2) {
                differences.push(`${element}元素数量不同：${count1} vs ${count2}`);
            }
        });

        return differences;
    }

    // 分析相似性
    analyzeSimilarities(bazi1, bazi2) {
        const similarities = [];

        // 比较日主
        if (bazi1.dayMaster === bazi2.dayMaster) {
            similarities.push(`日主相同：${bazi1.dayMaster}`);
        }

        // 比较格局
        if (bazi1.pattern === bazi2.pattern) {
            similarities.push(`格局相同：${bazi1.pattern}`);
        }

        // 比较五行分布
        const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
        elements.forEach(element => {
            const count1 = bazi1.elements[element] || 0;
            const count2 = bazi2.elements[element] || 0;
            if (count1 === count2 && count1 > 0) {
                similarities.push(`${element}元素数量相同：${count1}`);
            }
        });

        return similarities;
    }

    // ==================== 统计分析功能 ====================

    // 获取数据库统计信息
    getStatistics() {
        const stats = {
            totalCases: this.cases.size,
            categoryStats: {},
            professionStats: {},
            patternStats: {},
            accuracyStats: {
                high: 0,
                medium: 0,
                low: 0
            },
            yearDistribution: {}
        };

        // 统计分类
        Object.keys(this.categoryIndex).forEach(category => {
            stats.categoryStats[category] = this.categoryIndex[category].size;
        });

        // 统计格局
        this.patternIndex.forEach((caseIds, pattern) => {
            stats.patternStats[pattern] = caseIds.size;
        });

        // 统计准确性
        this.cases.forEach(caseData => {
            if (caseData.validation) {
                const accuracy = caseData.validation.accuracy;
                if (accuracy >= 90) {
                    stats.accuracyStats.high++;
                } else if (accuracy >= 70) {
                    stats.accuracyStats.medium++;
                } else {
                    stats.accuracyStats.low++;
                }
            }
        });

        // 统计年份分布
        this.dateIndex.forEach((caseIds, year) => {
            stats.yearDistribution[year] = caseIds.size;
        });

        return stats;
    }

    // ==================== 导出功能 ====================

    // 导出案例数据
    exportCases(format = 'json') {
        const cases = Array.from(this.cases.values());

        switch (format.toLowerCase()) {
            case 'json':
                return JSON.stringify(cases, null, 2);
            case 'csv':
                return this.convertToCSV(cases);
            case 'xml':
                return this.convertToXML(cases);
            default:
                throw new Error(`不支持的导出格式: ${format}`);
        }
    }

    // 转换为CSV格式
    convertToCSV(cases) {
        const headers = ['ID', '标题', '姓名', '性别', '出生日期', '日主', '格局', '职业', '准确性'];
        const rows = cases.map(caseData => [
            caseData.id,
            caseData.title,
            caseData.basicInfo.name,
            caseData.basicInfo.gender,
            caseData.basicInfo.birthDateTime,
            caseData.bazi.dayMaster,
            caseData.bazi.pattern,
            caseData.profession,
            caseData.validation ? caseData.validation.accuracy : ''
        ]);

        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // 转换为XML格式
    convertToXML(cases) {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<Cases>\n';

        cases.forEach(caseData => {
            xml += '  <Case>\n';
            xml += `    <ID>${caseData.id}</ID>\n`;
            xml += `    <Title>${caseData.title}</Title>\n`;
            xml += `    <Name>${caseData.basicInfo.name}</Name>\n`;
            xml += `    <Gender>${caseData.basicInfo.gender}</Gender>\n`;
            xml += `    <BirthDateTime>${caseData.basicInfo.birthDateTime}</BirthDateTime>\n`;
            xml += `    <DayMaster>${caseData.bazi.dayMaster}</DayMaster>\n`;
            xml += `    <Pattern>${caseData.bazi.pattern}</Pattern>\n`;
            xml += `    <Profession>${caseData.profession}</Profession>\n`;
            xml += `    <Accuracy>${caseData.validation ? caseData.validation.accuracy : ''}</Accuracy>\n`;
            xml += '  </Case>\n';
        });

        xml += '</Cases>';
        return xml;
    }

    // ==================== 数据管理功能 ====================

    // 备份数据库
    backupDatabase() {
        const backup = {
            timestamp: new Date().toISOString(),
            cases: Array.from(this.cases.entries()),
            statistics: this.getStatistics()
        };

        return JSON.stringify(backup, null, 2);
    }

    // 恢复数据库
    restoreDatabase(backupData) {
        try {
            const backup = JSON.parse(backupData);

            // 清空现有数据
            this.cases.clear();
            this.categoryIndex = {
                success: new Set(),
                failure: new Set(),
                normal: new Set(),
                official: new Set(),
                business: new Set(),
                academic: new Set(),
                artist: new Set(),
                technical: new Set(),
                regular: new Set()
            };
            this.patternIndex.clear();
            this.elementIndex.clear();
            this.dateIndex.clear();

            // 恢复案例数据
            backup.cases.forEach(([id, caseData]) => {
                this.addCase(caseData);
            });

            console.log(`数据库已恢复，共恢复 ${backup.cases.length} 个案例`);
            return true;
        } catch (error) {
            console.error('数据库恢复失败:', error);
            return false;
        }
    }

    // 清空数据库
    clearDatabase() {
        this.cases.clear();
        this.categoryIndex = {
            success: new Set(),
            failure: new Set(),
            normal: new Set(),
            official: new Set(),
            business: new Set(),
            academic: new Set(),
            artist: new Set(),
            technical: new Set(),
            regular: new Set()
        };
        this.patternIndex.clear();
        this.elementIndex.clear();
        this.dateIndex.clear();

        console.log('数据库已清空');
    }
}

module.exports = CaseValidationDatabase;