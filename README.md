# Workflow Management System

A full-stack application built using **React (TypeScript)** and **Node.js (Express)** as part of the given assessment.  
The application includes a login screen and a workflow management dashboard, matching the provided design and functional requirements.

---

---

## Features

### Frontend (React + TypeScript)

- Login page with validation
- Workflow dashboard displaying workflow data
- Dynamic data fetching from backend API
- Loading and error handling states
- Responsive layout as per assessment UI

### Backend (Node.js + Express)

- REST API using Express
- Mock authentication endpoint
- Workflow listing endpoint
- JSON-based responses for frontend integration

---

## API Endpoints

### POST /api/login

Authenticates a user using mock credentials.

**Request**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response**

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "username": "admin"
  }
}
```

### GET /api/workflows

Returns a list of workflows.

**\*Response**

```json
[
  {
    "id": "wf001",
    "name": "Daily ETL Pipeline",
    "status": "Running",
    "startTime": "2025-07-03T08:00:00Z",
    "owner": "India"
  },
  {
    "id": "wf002",
    "name": "Weekly Sync",
    "status": "Completed",
    "startTime": "2025-07-02T06:00:00Z",
    "owner": "India"
  }
]
```

### Getting Started

Prerequisites

Node.js (v16 or higher)

npm

## Clone Project :

https://github.com/riyaj-kalegar03/Workflow-Management-System.git



## Backend Setup

cd backend
npm install
npm start

Runs on : http://localhost:5000

## Frontend Setup

cd frontend
npm install
npm run dev

Runs on : http://localhost:5173

### Frontend and Backend Integration

Frontend communicates with backend using REST APIs

API base URL: http://localhost:5000/api

Workflow and authentication data are fetched dynamically

### Deliverables

Complete frontend and backend source code

Fully working application

Modular and readable code

All requirements implemented as per assessment instructions

### Notes

Authentication and workflows use mock data

No database setup is required

Focus is on React, TypeScript, API integration, and project structure
