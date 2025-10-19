/**
 * 八字流年分析系统
 * 基于《八字批流年实务》- 潘东光的理论实现
 * 为八字网页应用提供专业的流年分析功能
 */

class LiunianAnalysisSystem {
    constructor() {
        this.initializeDatabases();
        this.initializeAlgorithms();
        this.initializeAnalysisEngine();
    }

    // ==================== 初始化系统 ====================
    initializeDatabases() {
        // 天干数据库
        this.heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

        // 地支数据库
        this.earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

        // 十神数据库
        this.tenGods = {
            正官: { element: '克我者', relationship: '克制', nature: '阳性' },
            七杀: { element: '克我者', relationship: '克制', nature: '阴性' },
            正财: { element: '我克者', relationship: '财星', nature: '阳性' },
            偏财: { element: '我克者', relationship: '财星', nature: '阴性' },
            正印: { element: '生我者', relationship: '印星', nature: '阳性' },
            偏印: { element: '生我者', relationship: '印星', nature: '阴性' },
            比肩: { element: '同我者', relationship: '比劫', nature: '阳性' },
            劫财: { element: '同我者', relationship: '比劫', nature: '阴性' },
            食神: { element: '我生者', relationship: '食伤', nature: '阳性' },
            伤官: { element: '我生者', relationship: '食伤', nature: '阴性' }
        };

        // 流年类型数据库
        this.liunianTypes = {
            吉利流年: {
                score: [80, 100],
                description: "运势顺利，机遇增多，适合积极进取",
                suggestions: "把握机遇，发挥才能，乘势而上",
                warnings: "不可骄傲自满，要居安思危"
            },
            平稳流年: {
                score: [60, 79],
                description: "运势平稳，稳中有进，适合积累实力",
                suggestions: "稳扎稳打，学习提升，等待时机",
                warnings: "不可冒进，要耐心积累"
            },
            困难流年: {
                score: [40, 59],
                description: "运势不顺，挑战增多，需要谨慎应对",
                suggestions: "修身养性，化解危机，积蓄力量",
                warnings: "不可灰心，要保持信心"
            },
            变动流年: {
                score: [0, 100],
                description: "环境变动，变化较大，需要灵活应对",
                suggestions: "顺应变化，把握机遇，灵活调整",
                warnings: "不可抗拒，要审时度势"
            }
        };

        // 五行生克关系
        this.elementRelations = {
            木: { 生: '火', 克: '土', 被生: '水', 被克: '金' },
            火: { 生: '土', 克: '金', 被生: '木', 被克: '水' },
            土: { 生: '金', 克: '水', 被生: '火', 被克: '木' },
            金: { 生: '水', 克: '木', 被生: '土', 被克: '火' },
            水: { 生: '木', 克: '火', 被生: '金', 被克: '土' }
        };

        // 地支刑冲合害关系
        this.branchRelations = {
            六冲: {
                子午: true, 丑未: true, 寅申: true, 卯酉: true, 辰戌: true, 巳亥: true
            },
            六合: {
                子丑: true, 寅亥: true, 卯戌: true, 辰酉: true, 巳申: true, 午未: true
            },
            三合: {
                申子辰: '水', 亥卯未: '木', 寅午戌: '火', 巳酉丑: '金'
            },
            三会: {
                寅卯辰: '木', 巳午未: '火', 申酉戌: '金', 亥子丑: '水'
            },
            相刑: {
                寅刑巳, 巳刑申, 申刑寅, 丑刑戌, 戌刑未, 未刑丑, 子刑卯, 卯刑子, 辰午酉亥自刑
            },
            相害: {
                子未: true, 丑午: true, 寅巳: true, 卯辰: true, 申亥: true, 酉戌: true
            }
        };
    }

    // ==================== 初始化算法 ====================
    initializeAlgorithms() {
        // 流年推算算法
        this.liunianCalculation = {
            // 推算流年天干
            calculateStem: function(year) {
                return (year - 3) % 10;
            }.bind(this),

            // 推算流年地支
            calculateBranch: function(year) {
                return (year - 3) % 12;
            }.bind(this),

            // 获取流年干支
            getLiunianGanZhi: function(year) {
                const stemIndex = this.calculateStem(year);
                const branchIndex = this.calculateBranch(year);

                return {
                    stem: this.heavenlyStems[stemIndex],
                    branch: this.earthlyBranches[branchIndex],
                    stemIndex: stemIndex,
                    branchIndex: branchIndex,
                    year: year
                };
            }.bind(this),

            // 判断春节节气（简化版）
            isSpringFestivalPassed: function(year, month, day) {
                // 这里应该使用精确的节气计算，简化处理
                // 假设每年2月4日左右为立春
                if (month > 2) return true;
                if (month < 2) return false;
                return day >= 4; // 2月4日之后算新的一年
            }
        };

        // 关系分析算法
        this.relationshipAnalysis = {
            // 分析天干关系
            analyzeStemRelations: function(liunianStem, baziStems) {
                const relations = [];

                baziStems.forEach(stem => {
                    const relation = this.analyzeStemRelation(liunianStem, stem);
                    if (relation) {
                        relations.push({
                            type: relation.type,
                            elements: [liunianStem, stem],
                            strength: relation.strength,
                            influence: relation.influence
                        });
                    }
                });

                return relations;
            }.bind(this),

            // 分析单个天干关系
            analyzeStemRelation: function(stem1, stem2) {
                // 获取五行属性
                const element1 = this.getElementByStem(stem1);
                const element2 = this.getElementByStem(stem2);

                // 判断生克关系
                if (this.elementRelations[element1].生 === element2) {
                    return { type: '生', strength: '中等', influence: '积极' };
                } else if (this.elementRelations[element1].克 === element2) {
                    return { type: '克', strength: '强烈', influence: '消极' };
                } else if (this.elementRelations[element1].被生 === element2) {
                    return { type: '被生', strength: '中等', influence: '积极' };
                } else if (this.elementRelations[element1].被克 === element2) {
                    return { type: '被克', strength: '强烈', influence: '消极' };
                } else if (element1 === element2) {
                    return { type: '比和', strength: '温和', influence: '中性' };
                }

                return null;
            }.bind(this),

            // 分析地支关系
            analyzeBranchRelations: function(liunianBranch, baziBranches) {
                const relations = [];

                baziBranches.forEach(branch => {
                    const relation = this.analyzeBranchRelation(liunianBranch, branch);
                    if (relation) {
                        relations.push({
                            type: relation.type,
                            elements: [liunianBranch, branch],
                            strength: relation.strength,
                            influence: relation.influence
                        });
                    }
                });

                return relations;
            }.bind(this),

            // 分析单个地支关系
            analyzeBranchRelation: function(branch1, branch2) {
                // 检查六冲
                if (this.branchRelations.六冲[branch1 + branch2] ||
                    this.branchRelations.六冲[branch2 + branch1]) {
                    return { type: '冲', strength: '强烈', influence: '变动' };
                }

                // 检查六合
                if (this.branchRelations.六合[branch1 + branch2] ||
                    this.branchRelations.六合[branch2 + branch1]) {
                    return { type: '合', strength: '温和', influence: '和谐' };
                }

                // 检查相刑
                if (this.branchRelations.相刑[branch1 + branch2] ||
                    this.branchRelations.相刑[branch2 + branch1]) {
                    return { type: '刑', strength: '中等', influence: '不顺' };
                }

                // 检查相害
                if (this.branchRelations.相害[branch1 + branch2] ||
                    this.branchRelations.相害[branch2 + branch1]) {
                    return { type: '害', strength: '中等', influence: '阻碍' };
                }

                return null;
            }.bind(this),

            // 根据天干获取五行
            getElementByStem: function(stem) {
                const stemElements = {
                    '甲': '木', '乙': '木',
                    '丙': '火', '丁': '火',
                    '戊': '土', '己': '土',
                    '庚': '金', '辛': '金',
                    '壬': '水', '癸': '水'
                };
                return stemElements[stem];
            }.bind(this)
        };

        // 运势评估算法
        this.fortuneEvaluation = {
            // 计算基础分数
            calculateBaseScore: function(relations, useGod, favorElements) {
                let score = 50; // 基础分数

                relations.forEach(relation => {
                    switch(relation.type) {
                        case '生':
                            score += this.isFavorableRelation(relation, useGod, favorElements) ? 10 : 5;
                            break;
                        case '被生':
                            score += this.isFavorableRelation(relation, useGod, favorElements) ? 8 : 3;
                            break;
                        case '克':
                            score += this.isFavorableRelation(relation, useGod, favorElements) ? -5 : -10;
                            break;
                        case '被克':
                            score += this.isFavorableRelation(relation, useGod, favorElements) ? -3 : -8;
                            break;
                        case '合':
                            score += 6;
                            break;
                        case '冲':
                            score -= 8;
                            break;
                        case '刑':
                            score -= 5;
                            break;
                        case '害':
                            score -= 4;
                            break;
                    }
                });

                return Math.max(0, Math.min(100, score));
            }.bind(this),

            // 判断是否为有利关系
            isFavorableRelation: function(relation, useGod, favorElements) {
                // 简化判断逻辑
                return relation.influence === '积极' || relation.influence === '和谐';
            }.bind(this),

            // 评估各方面运势
            evaluateAspects: function(score, relations, tenGodInfluence) {
                return {
                    事业: this.evaluateCareer(score, relations, tenGodInfluence),
                    财运: this.evaluateWealth(score, relations, tenGodInfluence),
                    感情: this.evaluateRelationship(score, relations, tenGodInfluence),
                    健康: this.evaluateHealth(score, relations, tenGodInfluence),
                    学业: this.evaluateStudy(score, relations, tenGodInfluence)
                };
            }.bind(this),

            // 评估事业运势
            evaluateCareer: function(baseScore, relations, tenGodInfluence) {
                let score = baseScore;

                // 根据十神影响调整
                if (tenGodInfluence.includes('正官')) score += 10;
                if (tenGodInfluence.includes('七杀')) score += 5;
                if (tenGodInfluence.includes('印星')) score += 8;

                return this.adjustScore(score);
            }.bind(this),

            // 评估财运
            evaluateWealth: function(baseScore, relations, tenGodInfluence) {
                let score = baseScore;

                if (tenGodInfluence.includes('正财')) score += 10;
                if (tenGodInfluence.includes('偏财')) score += 8;
                if (tenGodInfluence.includes('食神')) score += 5;

                return this.adjustScore(score);
            }.bind(this),

            // 评估感情运势
            evaluateRelationship: function(baseScore, relations, tenGodInfluence) {
                let score = baseScore;

                if (tenGodInfluence.includes('财星')) score += 8;
                if (tenGodInfluence.includes('官星')) score += 8;
                if (relations.some(r => r.type === '合')) score += 5;
                if (relations.some(r => r.type === '冲')) score -= 5;

                return this.adjustScore(score);
            }.bind(this),

            // 评估健康运势
            evaluateHealth: function(baseScore, relations, tenGodInfluence) {
                let score = baseScore;

                if (relations.some(r => r.type === '冲')) score -= 8;
                if (relations.some(r => r.type === '刑')) score -= 5;
                if (relations.some(r => r.type === '害')) score -= 3;

                return this.adjustScore(score);
            }.bind(this),

            // 评估学业运势
            evaluateStudy: function(baseScore, relations, tenGodInfluence) {
                let score = baseScore;

                if (tenGodInfluence.includes('印星')) score += 15;
                if (tenGodInfluence.includes('食神')) score += 8;
                if (tenGodInfluence.includes '比劫') score += 5;

                return this.adjustScore(score);
            }.bind(this),

            // 调整分数到0-100范围
            adjustScore: function(score) {
                return Math.max(0, Math.min(100, score));
            }.bind(this)
        };
    }

    // ==================== 初始化分析引擎 ====================
    initializeAnalysisEngine() {
        this.analysisEngine = {
            // 综合流年分析
            comprehensiveAnalysis: function(bazi, year) {
                // 1. 推算流年干支
                const liunianGZ = this.liunianCalculation.getLiunianGanZhi(year);

                // 2. 分析关系
                const stemRelations = this.relationshipAnalysis.analyzeStemRelations(
                    liunianGZ.stem,
                    Object.values(bazi.pillars).map(p => p.stem)
                );
                const branchRelations = this.relationshipAnalysis.analyzeBranchRelations(
                    liunianGZ.branch,
                    Object.values(bazi.pillars).map(p => p.branch)
                );

                // 3. 计算十神影响
                const tenGodInfluence = this.calculateTenGodInfluence(liunianGZ, bazi);

                // 4. 评估运势
                const baseScore = this.fortuneEvaluation.calculateBaseScore(
                    [...stemRelations, ...branchRelations],
                    bazi.useGod,
                    bazi.favorElements
                );
                const aspectScores = this.fortuneEvaluation.evaluateAspects(
                    baseScore,
                    [...stemRelations, ...branchRelations],
                    tenGodInfluence
                );

                // 5. 确定流年类型
                const liunianType = this.determineLiunianType(baseScore, stemRelations, branchRelations);

                // 6. 生成建议
                const suggestions = this.generateSuggestions(liunianType, aspectScores, tenGodInfluence);

                return {
                    year: year,
                    liunianGanZhi: liunianGZ,
                    relations: {
                        stems: stemRelations,
                        branches: branchRelations
                    },
                    tenGodInfluence: tenGodInfluence,
                    scores: {
                        overall: baseScore,
                        aspects: aspectScores
                    },
                    type: liunianType,
                    suggestions: suggestions,
                    summary: this.generateSummary(liunianType, aspectScores)
                };
            }.bind(this),

            // 计算十神影响
            calculateTenGodInfluence: function(liunianGZ, bazi) {
                const influences = [];

                // 简化的十神判断逻辑
                // 实际应该根据日主和流年干支的完整关系来判断

                return influences;
            }.bind(this),

            // 确定流年类型
            determineLiunianType: function(score, stemRelations, branchRelations) {
                // 检查是否有重大变动
                const hasMajorChange = stemRelations.some(r => r.type === '克' && r.strength === '强烈') ||
                                      branchRelations.some(r => r.type === '冲');

                if (hasMajorChange) {
                    return '变动流年';
                }

                // 根据分数确定类型
                if (score >= 80) return '吉利流年';
                if (score >= 60) return '平稳流年';
                return '困难流年';
            }.bind(this),

            // 生成建议
            generateSuggestions: function(type, aspectScores, tenGodInfluence) {
                const suggestions = {
                    overall: this.liunianTypes[type].suggestions,
                    aspects: {},
                    warnings: this.liunianTypes[type].warnings
                };

                // 根据各方面分数生成具体建议
                Object.keys(aspectScores).forEach(aspect => {
                    const score = aspectScores[aspect];
                    if (score >= 80) {
                        suggestions.aspects[aspect] = `${aspect}运势极佳，把握机遇，积极进取`;
                    } else if (score >= 60) {
                        suggestions.aspects[aspect] = `${aspect}运势平稳，稳扎稳打，持续积累`;
                    } else {
                        suggestions.aspects[aspect] = `${aspect}运势有挑战，谨慎应对，化解危机`;
                    }
                });

                return suggestions;
            }.bind(this),

            // 生成总结
            generateSummary: function(type, aspectScores) {
                const typeInfo = this.liunianTypes[type];
                const bestAspect = Object.keys(aspectScores).reduce((a, b) =>
                    aspectScores[a] > aspectScores[b] ? a : b
                );
                const worstAspect = Object.keys(aspectScores).reduce((a, b) =>
                    aspectScores[a] < aspectScores[b] ? a : b
                );

                return {
                    type: typeInfo.description,
                    highlight: `${bestAspect}方面运势最佳，建议重点关注`,
                    challenge: `${worstAspect}方面需要多加注意，做好应对准备`,
                    overall: typeInfo.suggestions
                };
            }.bind(this)
        };
    }

    // ==================== 核心分析方法 ====================

    // 分析单年流年
    analyzeSingleYear(bazi, year) {
        return this.analysisEngine.comprehensiveAnalysis(bazi, year);
    }

    // 分析多年流年
    analyzeMultipleYears(bazi, startYear, endYear) {
        const analyses = [];

        for (let year = startYear; year <= endYear; year++) {
            const analysis = this.analyzeSingleYear(bazi, year);
            analyses.push(analysis);
        }

        return {
            range: `${startYear}-${endYear}`,
            analyses: analyses,
            trends: this.analyzeTrends(analyses),
            summary: this.generateMultiYearSummary(analyses)
        };
    }

    // 分析趋势
    analyzeTrends(analyses) {
        const trends = {
            overall: [],
            aspects: {
                事业: [],
                财运: [],
                感情: [],
                健康: [],
                学业: []
            }
        };

        analyses.forEach(analysis => {
            trends.overall.push(analysis.scores.overall);
            Object.keys(analysis.scores.aspects).forEach(aspect => {
                trends.aspects[aspect].push(analysis.scores.aspects[aspect]);
            });
        });

        return trends;
    }

    // 生成多年总结
    generateMultiYearSummary(analyses) {
        const bestYear = analyses.reduce((best, current) =>
            current.scores.overall > best.scores.overall ? current : best
        );
        const worstYear = analyses.reduce((worst, current) =>
            current.scores.overall < worst.scores.overall ? current : worst
        );

        return {
            bestYear: {
                year: bestYear.year,
                score: bestYear.scores.overall,
                type: bestYear.type
            },
            worstYear: {
                year: worstYear.year,
                score: worstYear.scores.overall,
                type: worstYear.type
            },
            average: analyses.reduce((sum, a) => sum + a.scores.overall, 0) / analyses.length,
            recommendation: this.generateMultiYearRecommendation(analyses)
        };
    }

    // 生成多年建议
    generateMultiYearRecommendation(analyses) {
        const goodYears = analyses.filter(a => a.scores.overall >= 70);
        const badYears = analyses.filter(a => a.scores.overall < 50);

        let recommendation = "";

        if (goodYears.length > 0) {
            recommendation += `运势较好的年份有：${goodYears.map(a => a.year).join('、')}年，建议在这些年份把握机遇，积极进取。`;
        }

        if (badYears.length > 0) {
            recommendation += `需要谨慎的年份有：${badYears.map(a => a.year).join('、')}年，建议提前准备，稳扎稳打。`;
        }

        return recommendation;
    }

    // ==================== 应期计算 ====================

    // 计算婚姻应期
    calculateMarriageTiming(bazi, startYear, endYear) {
        const timings = [];

        for (let year = startYear; year <= endYear; year++) {
            const analysis = this.analyzeSingleYear(bazi, year);

            // 检查感情相关指标
            const loveScore = analysis.scores.aspects.感情;
            const hasGoodRelation = analysis.relations.stems.some(r => r.type === '合') ||
                                 analysis.relations.branches.some(r => r.type === '合');

            if (loveScore >= 75 && hasGoodRelation) {
                timings.push({
                    year: year,
                    score: loveScore,
                    reason: '感情运势佳，且有合相，利于婚恋',
                    confidence: Math.min(95, loveScore + (hasGoodRelation ? 10 : 0))
                });
            }
        }

        return timings.sort((a, b) => b.confidence - a.confidence);
    }

    // 计算事业应期
    calculateCareerTiming(bazi, startYear, endYear) {
        const timings = [];

        for (let year = startYear; year <= endYear; year++) {
            const analysis = this.analyzeSingleYear(bazi, year);

            // 检查事业相关指标
            const careerScore = analysis.scores.aspects.事业;
            const hasOfficialInfluence = analysis.tenGodInfluence.includes('正官') ||
                                       analysis.tenGodInfluence.includes('七杀');

            if (careerScore >= 75) {
                timings.push({
                    year: year,
                    score: careerScore,
                    reason: '事业运势佳，利于职业发展',
                    confidence: Math.min(95, careerScore + (hasOfficialInfluence ? 8 : 0))
                });
            }
        }

        return timings.sort((a, b) => b.confidence - a.confidence);
    }

    // 计算财运应期
    calculateWealthTiming(bazi, startYear, endYear) {
        const timings = [];

        for (let year = startYear; year <= endYear; year++) {
            const analysis = this.analyzeSingleYear(bazi, year);

            // 检查财运相关指标
            const wealthScore = analysis.scores.aspects.财运;
            const hasWealthInfluence = analysis.tenGodInfluence.includes('正财') ||
                                      analysis.tenGodInfluence.includes('偏财');

            if (wealthScore >= 75) {
                timings.push({
                    year: year,
                    score: wealthScore,
                    reason: '财运运势佳，利于求财',
                    confidence: Math.min(95, wealthScore + (hasWealthInfluence ? 8 : 0))
                });
            }
        }

        return timings.sort((a, b) => b.confidence - a.confidence);
    }

    // ==================== 可视化方法 ====================

    // 创建流年趋势图
    createTrendChart(analyses) {
        return {
            type: 'line',
            data: {
                labels: analyses.map(a => a.year),
                datasets: [
                    {
                        label: '整体运势',
                        data: analyses.map(a => a.scores.overall),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    },
                    {
                        label: '事业运势',
                        data: analyses.map(a => a.scores.aspects.事业),
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1
                    },
                    {
                        label: '财运运势',
                        data: analyses.map(a => a.scores.aspects.财运),
                        borderColor: 'rgb(54, 162, 235)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '流年运势趋势图'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };
    }

    // 创建各年度对比图
    createYearComparisonChart(analyses) {
        return {
            type: 'bar',
            data: {
                labels: analyses.map(a => a.year),
                datasets: [
                    {
                        label: '事业',
                        data: analyses.map(a => a.scores.aspects.事业),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)'
                    },
                    {
                        label: '财运',
                        data: analyses.map(a => a.scores.aspects.财运),
                        backgroundColor: 'rgba(54, 162, 235, 0.5)'
                    },
                    {
                        label: '感情',
                        data: analyses.map(a => a.scores.aspects.感情),
                        backgroundColor: 'rgba(255, 206, 86, 0.5)'
                    },
                    {
                        label: '健康',
                        data: analyses.map(a => a.scores.aspects.健康),
                        backgroundColor: 'rgba(75, 192, 192, 0.5)'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '各年度运势对比'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };
    }

    // ==================== 导出方法 ====================

    // 导出流年分析报告
    exportLiunianReport(bazi, analyses) {
        const report = {
            basic: {
                name: bazi.name,
                gender: bazi.gender,
                birthDateTime: bazi.birthDateTime,
                bazi: bazi.pillars
            },
            analysis: analyses,
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        };

        return report;
    }

    // 导出应期分析报告
    exportTimingReport(bazi, timings) {
        const report = {
            basic: {
                name: bazi.name,
                gender: bazi.gender,
                birthDateTime: bazi.birthDateTime
            },
            timings: timings,
            summary: this.generateTimingSummary(timings),
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        };

        return report;
    }

    // 生成应期总结
    generateTimingSummary(timings) {
        const summary = {
            marriage: timings.marriage ? timings.marriage.length : 0,
            career: timings.career ? timings.career.length : 0,
            wealth: timings.wealth ? timings.wealth.length : 0,
            recommendation: ""
        };

        if (summary.marriage > 0) {
            summary.recommendation += `建议关注感情发展，特别是${timings.marriage[0].year}年前后。`;
        }
        if (summary.career > 0) {
            summary.recommendation += `事业发展黄金期在${timings.career[0].year}年，要把握机会。`;
        }
        if (summary.wealth > 0) {
            summary.recommendation += `财运最佳时机是${timings.wealth[0].year}年，可以积极投资理财。`;
        }

        return summary;
    }
}

module.exports = LiunianAnalysisSystem;