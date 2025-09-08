import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/AgentPsy/',
  lang: 'en-US',
  title: 'AgentPsy',
  description: 'Scientific Assessment of LLM Personality and Cognitive Stability',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mission', link: '/mission/' },
      { text: 'About', link: '/about/' },
      { text: 'Products', link: '/products/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/documentation/': [
        {
          text: 'Documentation',
          items: [
            { text: 'System Architecture', link: '/documentation/architecture' },
            { text: 'Quick Start', link: '/documentation/quick-start' },
            { text: 'Assessment Methodology', link: '/documentation/methodology' },
            { text: 'Data Privacy and Security', link: '/documentation/security' },
            { text: 'Troubleshooting', link: '/documentation/troubleshooting' }
          ]
        }
      ]
    }
  }
})