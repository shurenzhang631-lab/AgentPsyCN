---
title: API Reference
---

# API Reference

## Authentication API

### Get Access Token
```http
POST /api/v1/auth/token
Content-Type: application/json

{
  "username": "your_username",
  "password": "your_password"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600
}
```

## Assessment API

### Create Assessment Task
```http
POST /api/v1/assessments
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "model_name": "gpt-3.5-turbo",
  "assessment_type": "big-five",
  "parameters": {
    "temperature": 0.7,
    "max_tokens": 2000
  }
}
```

Response:
```json
{
  "assessment_id": "assess_1234567890",
  "status": "pending",
  "created_at": "2025-09-08T10:00:00Z"
}
```

### Get Assessment Results
```http
GET /api/v1/assessments/assess_1234567890
Authorization: Bearer <access_token>
```

Response:
```json
{
  "assessment_id": "assess_1234567890",
  "model_name": "gpt-3.5-turbo",
  "assessment_type": "big-five",
  "status": "completed",
  "results": {
    "extraversion": 65.2,
    "agreeableness": 72.8,
    "conscientiousness": 68.5,
    "neuroticism": 32.1,
    "openness": 78.9
  },
  "reliability": 0.89,
  "validity": 0.85,
  "completed_at": "2025-09-08T10:15:30Z"
}
```