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

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加应用场景部分
  const homeContainer = document.querySelector('.VPHome')
  if (homeContainer) {
    const applicationsSection = document.createElement('section')
    applicationsSection.className = 'applications'
    applicationsSection.innerHTML = `
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
    `
    homeContainer.appendChild(applicationsSection)
  }
})
</script>

<style scoped>
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
</style>