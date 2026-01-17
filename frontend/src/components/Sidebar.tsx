import type React from "react";
import "../styles/Sidebar.css";

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: "➕", label: "New", id: "new" },
    { icon: "📦", label: "Workspaces", id: "workspaces" },
    { icon: "⏱️", label: "History", id: "history" },
    { icon: "📋", label: "Catalog", id: "catalog" },
    { icon: "⚙️", label: "Workflow", id: "workflow", highlight: true },
    { icon: "🔗", label: "Connectors", id: "connectors" },
  ];

  const bottomItems = [
    { icon: "📊", label: "SQL Editor", id: "sql" },
    { icon: "📈", label: "Dashboard", id: "dashboard" },
    { icon: "🚀", label: "Job Runs", id: "jobruns" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">W</div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${item.highlight ? "active" : ""}`}
                disabled
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sidebar-nav-bottom">
        <ul className="nav-list">
          {bottomItems.map((item) => (
            <li key={item.id}>
              <button className="nav-item" disabled>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
