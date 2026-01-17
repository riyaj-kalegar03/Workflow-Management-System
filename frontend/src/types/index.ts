// TypeScript interfaces for API data and state management

// Interface for workflow data received from backend
export interface Workflow {
  id: string
  name: string
  status: "Scheduled" | "Running" | "Completed" | "Failed"
  startTime: string
  owner: string
}

// Interface for login API response
export interface LoginResponse {
  success: boolean
  message: string
  user?: {
    username: string
    id: string
  }
}

// Interface for workflows API response
export interface WorkflowsResponse {
  success: boolean
  data: Workflow[]
}
