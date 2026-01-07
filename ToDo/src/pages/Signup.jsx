import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup(email, password);
    nav("/todos");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-3">
      <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <Button onClick={handleSignup} className="w-full">Signup</Button>
    </div>
  );
}
