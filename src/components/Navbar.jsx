import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MediBook</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/hospitals">Hospitals</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;