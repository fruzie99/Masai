import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
    nav("/todos");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-3">
      <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <Button onClick={handleLogin} className="w-full">Login</Button>
      <p className="text-sm text-center">
        No account? <Link to="/signup" className="text-blue-500">Signup</Link>
      </p>
    </div>
  );
}
