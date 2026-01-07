import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Todos from "@/pages/Todos";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <Routes>
      {/* Root redirect */}
      <Route
        path="/"
        element={user ? <Navigate to="/todos" /> : <Navigate to="/login" />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
