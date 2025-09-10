<template>
  <div class="agentpsy-layout">
    <header class="agentpsy-header">
      <nav class="agentpsy-nav">
        <div class="logo">AgentPsy</div>
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.text">
            <a :href="item.link">{{ item.text }}</a>
          </li>
          <li class="lang-switch">
            <a v-if="currentLang === 'zh-CN'" href="/en/">English</a>
            <a v-else href="/">中文</a>
          </li>
        </ul>
      </nav>
    </header>
    
    <main>
      <Content />
    </main>
    
    <footer class="agentpsy-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4 v-if="currentLang === 'zh-CN'">AgentPsy</h4>
            <h4 v-else>AgentPsy</h4>
            <p v-if="currentLang === 'zh-CN'">专业的大语言模型人格与认知稳定性评估平台</p>
            <p v-else>Professional LLM Personality and Cognitive Stability Assessment Platform</p>
          </div>
          <div class="footer-section">
            <h4 v-if="currentLang === 'zh-CN'">快速链接</h4>
            <h4 v-else>Quick Links</h4>
            <ul>
              <li v-for="item in navItems" :key="item.text">
                <a :href="item.link">{{ item.text }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 v-if="currentLang === 'zh-CN'">联系方式</h4>
            <h4 v-else>Contact</h4>
            <p v-if="currentLang === 'zh-CN'">邮箱: <a href="mailto:contact@agentpsy.org">contact@agentpsy.org</a></p>
            <p v-else>Email: <a href="mailto:contact@agentpsy.org">contact@agentpsy.org</a></p>
          </div>
        </div>
        <div class="copyright">
          <p v-if="currentLang === 'zh-CN'">© 2025 AgentPsy. 保留所有权利。</p>
          <p v-else>© 2025 AgentPsy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { site, page } = useData()

// 获取当前页面的语言
const currentLang = page.value.lang || 'zh-CN'

// 根据语言获取导航项
const getNavItems = () => {
  if (site.value.themeConfig.locales) {
    if (currentLang === 'zh-CN' && site.value.themeConfig.locales['/']) {
      return site.value.themeConfig.locales['/'].nav || []
    } else if (currentLang === 'en-US' && site.value.themeConfig.locales['/en/']) {
      return site.value.themeConfig.locales['/en/'].nav || []
    }
  }
  return site.value.themeConfig.nav || []
}

const navItems = getNavItems()
</script>

<style scoped>
.agentpsy-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.agentpsy-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.agentpsy-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #3498db;
}

.lang-switch {
  background-color: #3498db;
  border-radius: 4px;
}

.lang-switch a {
  color: white !important;
  padding: 0.5rem 1rem;
  display: block;
}

.agentpsy-footer {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0 1rem 0;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: #3498db;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.copyright {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid #34495e;
}
</style>