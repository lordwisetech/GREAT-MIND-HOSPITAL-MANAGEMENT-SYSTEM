import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo-icon">✚</div>

        <div>
          <h2 className="text-slate-700">
            Great<span>Mind</span>
          </h2>
          <small>Hospital Management</small>
        </div>
      </div>

      <nav className="desktop-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/team">Our Team</NavLink>
      </nav>

      <NavLink to="/login" className="desktop-login">
        Login
      </NavLink>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>

        <NavLink to="/features" onClick={() => setMenuOpen(false)}>
          Features
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/team" onClick={() => setMenuOpen(false)}>
          Our Team
        </NavLink>

        <button className="mobile-login" onClick={handleLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
