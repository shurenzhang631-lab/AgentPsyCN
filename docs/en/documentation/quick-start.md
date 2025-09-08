---
title: Quick Start
---

# Quick Start

## System Requirements

- Python 3.8 or higher
- Node.js 16 or higher
- PostgreSQL 12 or higher
- Docker (optional, for local development)

## Installation Steps

1. Clone the repository
```bash
git clone https://github.com/your-org/agentpsy.git
cd agentpsy
```

2. Install backend dependencies
```bash
pip install -r requirements.txt
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Configure environment variables
```bash
cp .env.example .env
# Edit .env file and fill in necessary API keys and configurations
```

5. Initialize database
```bash
python manage.py db upgrade
```

6. Start services
```bash
# Start backend service
python run.py

# Start frontend service (new terminal)
cd frontend
npm run dev
```