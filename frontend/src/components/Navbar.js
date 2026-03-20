import { Link } from "react-router-dom";
import { logout } from "../utils/auth";

export default function Navbar() {
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}