import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AgentPsy',
      description: '大语言模型人格与认知稳定性科学评估'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AgentPsy',
      description: 'Scientific Assessment of LLM Personality and Cognitive Stability'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        lang: 'zh-CN',
        title: 'AgentPsy',
        description: '大语言模型人格与认知稳定性科学评估',
        nav: [
          { text: '首页', link: '/' },
          { text: '使命', link: '/mission/' },
          { text: '关于我们', link: '/about/' },
          { text: '产品', link: '/products/' },
          { text: '文档', link: '/documentation/' },
          { text: '联系我们', link: '/contact/' }
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '技术文档',
              items: [
                { text: '系统架构', link: '/documentation/architecture' },
                { text: '快速开始', link: '/documentation/quick-start' },
                { text: '测评方法论', link: '/documentation/methodology' },
                { text: '数据隐私与安全', link: '/documentation/security' },
                { text: '故障排除', link: '/documentation/troubleshooting' }
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        lang: 'en-US',
        title: 'AgentPsy',
        description: 'Scientific Assessment of LLM Personality and Cognitive Stability',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Mission', link: '/en/mission/' },
          { text: 'About', link: '/en/about/' },
          { text: 'Products', link: '/en/products/' },
          { text: 'Documentation', link: '/en/documentation/' },
          { text: 'Contact', link: '/en/contact/' }
        ],
        sidebar: {
          '/en/documentation/': [
            {
              text: 'Documentation',
              items: [
                { text: 'System Architecture', link: '/en/documentation/architecture' },
                { text: 'Quick Start', link: '/en/documentation/quick-start' },
                { text: 'Assessment Methodology', link: '/en/documentation/methodology' },
                { text: 'Data Privacy and Security', link: '/en/documentation/security' },
                { text: 'Troubleshooting', link: '/en/documentation/troubleshooting' }
              ]
            }
          ]
        }
      }
    }
  }
})