// Backend Express server with CORS enabled and mock API endpoints
// Serves POST /api/login for authentication and GET /api/workflows for workflow data

import express, { type Request, type Response } from "express";
import cors from "cors";

// Initialize Express app
const app = express();
const PORT = 5000;

// Enable CORS middleware to allow frontend requests
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// Mock user credentials for login validation
const VALID_USERS = [
  { username: "admin@example.com", password: "admin123" },
  { username: "user@example.com", password: "user123" },
  { username: "test@example.com", password: "password123" },
];

// Mock workflow data with different statuses and owners
const WORKFLOWS_DATA = [
  {
    id: "wf001",
    name: "Nightly automated utility job at 03:00pm",
    status: "Scheduled",
    startTime: "2025-01-20 at 03:15 PM",
    owner: "admin",
  },
  {
    id: "wf002",
    name: "Nightly nights recent time-in data",
    status: "Running",
    startTime: "Jul 3, 2025 at 08:30 AM",
    owner: "admin",
  },
  {
    id: "wf003",
    name: "Example job job on 01/18/am",
    status: "Completed",
    startTime: "Jan 1, 2025 at 10:45 AM",
    owner: "admin",
  },
  {
    id: "wf004",
    name: "Process monthly subscription data",
    status: "Failed",
    startTime: "Jul 2, 2025 at 02:30 PM",
    owner: "admin",
  },
  {
    id: "wf005",
    name: "Sync external API data nightly",
    status: "Scheduled",
    startTime: "Jul 4, 2025 at 01:00 AM",
    owner: "india",
  },
  {
    id: "wf006",
    name: "Nightly data sync to cloud storage",
    status: "Running",
    startTime: "Jul 3, 2025 at 07:00 PM",
    owner: "india",
  },
  {
    id: "wf007",
    name: "Batch user import and validation",
    status: "Completed",
    startTime: "Jul 2, 2025 at 11:45 AM",
    owner: "india",
  },
];

// POST /api/login - Validate user credentials
app.post("/api/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  // Check if credentials match any valid user
  const user = VALID_USERS.find(
    (u) => u.username === username && u.password === password,
  );

  if (user) {
    // Return success response with user data
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: user.username,
        id: Math.random().toString(36).substr(2, 9),
      },
    });
  } else {
    // Return error for invalid credentials
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }
});

// GET /api/workflows - Return mock workflow data
app.get("/api/workflows", (req: Request, res: Response) => {
  // Simulate network delay
  setTimeout(() => {
    res.status(200).json({
      success: true,
      data: WORKFLOWS_DATA,
    });
  }, 500);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
