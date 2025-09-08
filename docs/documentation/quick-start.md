---
title: 快速开始
---

# 快速开始

## 环境要求

- Python 3.8或更高版本
- Node.js 16或更高版本
- PostgreSQL 12或更高版本
- Docker (可选，用于本地开发)

## 安装步骤

1. 克隆代码仓库
```bash
git clone https://github.com/your-org/agentpsy.git
cd agentpsy
```

2. 安装后端依赖
```bash
pip install -r requirements.txt
```

3. 安装前端依赖
```bash
cd frontend
npm install
```

4. 配置环境变量
```bash
cp .env.example .env
# 编辑.env文件，填入必要的API密钥和配置
```

5. 初始化数据库
```bash
python manage.py db upgrade
```

6. 启动服务
```bash
# 启动后端服务
python run.py

# 启动前端服务（新终端）
cd frontend
npm run dev
```