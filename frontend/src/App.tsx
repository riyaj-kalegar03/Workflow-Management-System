"use client";

import type React from "react";
import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { WorkflowPage } from "./components/WorkflowPage";
import "./App.css";

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleLoginSuccess = (loginUsername: string) => {
    setUsername(loginUsername);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <WorkflowPage username={username} onLogout={handleLogout} />
      )}
    </div>
  );
};
