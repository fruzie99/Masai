import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="p-4 flex justify-between bg-gray-800 text-white">
      <h1>Todos App</h1>
      <Button variant="secondary" onClick={logout}>Logout</Button>
    </nav>
  );
}
