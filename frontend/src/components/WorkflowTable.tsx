// Workflow Table Component - Displays workflow data in a responsive table with status badges

import type React from "react";
import type { Workflow } from "../types";
import "../styles/WorkflowTable.css";

interface WorkflowTableProps {
  workflows: Workflow[];
}

export const WorkflowTable: React.FC<WorkflowTableProps> = ({ workflows }) => {
  const getStatusClass = (status: string): string => {
    const statusMap: Record<string, string> = {
      Scheduled: "status-scheduled",
      Running: "status-running",
      Completed: "status-completed",
      Failed: "status-failed",
    };
    return statusMap[status] || "status-unknown";
  };

  return (
    <div className="table-wrapper">
      <table className="workflow-table">
        <thead>
          <tr>
            <th>Workflow ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>Owner</th>
          </tr>
        </thead>

        <tbody>
          {workflows.map((workflow) => (
            <tr key={workflow.id} className="table-row">
              <td className="cell-id">{workflow.id}</td>
              <td className="cell-name">{workflow.name}</td>
              <td className="cell-status">
                <span
                  className={`status-badge ${getStatusClass(workflow.status)}`}
                >
                  {workflow.status}
                </span>
              </td>
              <td className="cell-time">{workflow.startTime}</td>
              <td className="cell-owner">{workflow.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
