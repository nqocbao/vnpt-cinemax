import { useAuth } from '@/context/AuthContext';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdminRoute = () => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
}

export default ProtectedAdminRoute
