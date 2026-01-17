import type React from "react";
import { useState, useEffect } from "react";
import type { Workflow, WorkflowsResponse } from "../types";
import { Sidebar } from "./Sidebar";
import { WorkflowTable } from "./WorkflowTable";
import "../styles/WorkflowPage.css";

interface WorkflowPageProps {
  username: string;
  onLogout: () => void;
}

export const WorkflowPage: React.FC<WorkflowPageProps> = ({
  username,
  onLogout,
}) => {
  // State for workflow data and loading/error states
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        setIsLoading(true);
        setError("");

        // Call backend workflows endpoint
        const response = await fetch("http://localhost:5000/api/workflows");
        const data: WorkflowsResponse = await response.json();

        if (data.success) {
          setWorkflows(data.data);
        } else {
          setError("Failed to load workflows");
        }
      } catch (err) {
        setError(
          "Failed to connect to server. Is the backend running on port 5000?",
        );
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkflows();
  }, []);

  return (
    <div className="workflow-container">
      <Sidebar />

      <main className="workflow-main">
        <header className="workflow-header">
          <h1 className="workflow-title">Workflow List</h1>
          <div className="user-section">
            <span className="username-text">{username}</span>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        </header>

        <div className="workflow-content">
          {isLoading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading workflows...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="error-state">
              <p className="error-text">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="retry-button"
              >
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && <WorkflowTable workflows={workflows} />}
        </div>
      </main>
    </div>
  );
};
