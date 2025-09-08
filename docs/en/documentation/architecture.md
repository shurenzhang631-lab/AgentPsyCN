---
title: System Architecture
---

# System Architecture

## Overall Architecture Design

The AgentPsy platform adopts a modular design, primarily consisting of the following components:

1. **Assessment Engine Layer** - Responsible for interacting with various large language models
2. **Assessment Algorithm Layer** - Implements psychological assessment algorithms
3. **Data Processing Layer** - Processes assessment data and result analysis
4. **Content Generation Layer** - Generates assessment reports and visualization results
5. **Storage Management Layer** - Manages assessment data and user information

## Tech Stack

- **Core Language** - Python 3.8+
- **Frontend Framework** - VitePress (Static documentation generation)
- **Data Processing** - Pandas, NumPy
- **AI Services** - OpenAI API, Google Vertex AI, Alibaba Cloud Bailian Platform
- **Deployment** - Docker, Nginx