import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: 'farmer' | 'admin';
}

// This is a mock authentication check. In a real app, you would check against your auth system
const isAuthenticated = () => {
  return true; // For demo purposes
};

const hasRole = (requiredRole: string) => {
  return true; // For demo purposes
};

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (!hasRole(role)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}