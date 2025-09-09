---
layout: home
title: 首页
titleTemplate: 大语言模型人格与认知稳定性科学评估

hero:
  name: AgentPsy
  text: 大语言模型人格与认知稳定性科学评估
  tagline: 基于心理学理论框架的专业AI智能体测评平台
  actions:
    - theme: brand
      text: 开始测评
      link: /assessment/
    - theme: alt
      text: 查看文档
      link: /documentation/

features:
  - icon: 🧠
    title: 科学严谨性
    details: 基于大五人格理论、DASS量表、认知失调理论等经典心理学框架
  - icon: ⚙️
    title: 技术先进性
    details: 结合最新AI技术，支持多种大语言模型评估
  - icon: 📊
    title: 标准化流程
    details: 统一的测评标准和流程，确保结果可比性
  - icon: 🔒
    title: 安全可靠
    details: 数据安全和隐私保护，符合国际标准

head:
  - - meta
    - name: description
      content: AgentPsy是一个基于心理学理论框架的专业AI智能体测评平台，提供科学严谨的LLM人格测评服务
---

<div class="home-content">
  <section class="hero">
    <div class="container">
      <h1>大语言模型人格与认知稳定性科学评估</h1>
      <p class="subtitle">基于心理学理论框架的专业AI智能体测评平台</p>
      <p class="description">在人工智能快速发展的时代，如何科学评估AI系统的认知特征和稳定性成为关键挑战。</p>
      <div class="cta-buttons">
        <a href="/assessment/" class="btn primary">开始测评</a>
        <a href="/documentation/" class="btn secondary">查看文档</a>
      </div>
    </div>
  </section>

  <section class="value-props">
    <div class="container">
      <div class="value-prop">
        <h3>科学严谨性</h3>
        <p>基于大五人格理论、DASS量表、认知失调理论等经典心理学框架</p>
      </div>
      <div class="value-prop">
        <h3>技术先进性</h3>
        <p>结合最新AI技术，支持多种大语言模型评估</p>
      </div>
      <div class="value-prop">
        <h3>标准化流程</h3>
        <p>统一的测评标准和流程，确保结果可比性</p>
      </div>
      <div class="value-prop">
        <h3>安全可靠</h3>
        <p>数据安全和隐私保护，符合国际标准</p>
      </div>
    </div>
  </section>

  <section id="assessment" class="assessment-section">
    <div class="container">
      <h2>核心功能</h2>
      <div class="assessment-types">
        <div class="assessment-type">
          <h3>大五人格测评</h3>
          <p>基于IPIP-FFM-50国际标准，全面评估AI智能体的人格特征，包括：</p>
          <ul>
            <li><strong>外向性</strong> (Extraversion) - 衡量社交性、主动性和活力</li>
            <li><strong>宜人性</strong> (Agreeableness) - 衡量合作性、信任和同理心</li>
            <li><strong>尽责性</strong> (Conscientiousness) - 衡量自律性、组织性和目标导向</li>
            <li><strong>神经质</strong> (Neuroticism) - 衡量情绪稳定性和压力反应</li>
            <li><strong>开放性</strong> (Openness) - 衡量创造性和对新体验的开放程度</li>
          </ul>
        </div>
        <div class="assessment-type">
          <h3>认知稳定性评估</h3>
          <p>通过认知失调理论和压力测试，评估AI智能体在复杂环境下的稳定性表现，包括：</p>
          <ul>
            <li>逻辑一致性检测</li>
            <li>价值观稳定性分析</li>
            <li>压力环境下的行为模式</li>
            <li>长期交互中的性格保持度</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="applications">
    <div class="container">
      <h2>应用场景</h2>
      <div class="application-grid">
        <div class="application">
          <h3>AI智能体研发评估</h3>
          <p>为AI系统开发者提供科学的评估工具，优化模型性能</p>
        </div>
        <div class="application">
          <h3>企业智能化系统选型</h3>
          <p>帮助企业选择最适合的AI解决方案</p>
        </div>
        <div class="application">
          <h3>学术研究和论文支撑</h3>
          <p>为心理学和AI研究提供数据支持</p>
        </div>
        <div class="application">
          <h3>教育培训和人才评估</h3>
          <p>应用于教育和人力资源管理领域</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style scoped>
.home-content {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 首页英雄区域 */
.hero {
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn.primary {
  background-color: #e74c3c;
  color: white;
}

.btn.primary:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

.btn.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn.secondary:hover {
  background-color: white;
  color: #3498db;
}

/* 价值主张区域 */
.value-props {
  padding: 4rem 0;
  background-color: white;
}

.value-props .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-prop {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.value-prop:hover {
  transform: translateY(-5px);
}

.value-prop h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* 测评区域 */
.assessment-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.assessment-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.assessment-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.assessment-type {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.assessment-type h3 {
  color: #3498db;
  margin-bottom: 1rem;
}

.assessment-type ul {
  list-style-type: none;
  padding-left: 0;
}

.assessment-type li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.assessment-type li:before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

/* 应用场景区域 */
.applications {
  padding: 4rem 0;
  background-color: white;
}

.applications h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.application {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.application:hover {
  transform: translateY(-5px);
}

.application h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 80%;
    text-align: center;
  }
  
  .container {
    padding: 0 10px;
  }
}
</style>