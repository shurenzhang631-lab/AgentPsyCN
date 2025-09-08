---
title: 系统架构
---

# 系统架构

## 整体架构设计

AgentPsy平台采用模块化设计，主要包括以下组件：

1. **测评引擎层** - 负责与各种大语言模型交互
2. **评估算法层** - 实现心理学评估算法
3. **数据处理层** - 处理测评数据和结果分析
4. **接口服务层** - 提供Web API和用户界面
5. **存储管理层** - 管理测评数据和用户信息

## 技术栈

- **后端** - Python 3.8+, Flask, SQLAlchemy
- **前端** - Vue.js 3, Element Plus
- **数据库** - PostgreSQL, Redis
- **AI服务** - OpenAI API, Google Vertex AI, 阿里云百炼平台
- **部署** - Docker, Kubernetes, Nginx