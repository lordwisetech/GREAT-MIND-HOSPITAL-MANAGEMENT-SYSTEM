import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        <div className="logo-icon">✚</div>

        <div>
          <h2>
            Great<span>Mind</span>
          </h2>
          <small>Hospital Management</small>
        </div>
      </div>

      <nav className="desktop-nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#team">Our Team</a>
      </nav>

      <a href="#login" className="desktop-login">
        Login
      </a>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#team" onClick={() => setMenuOpen(false)}>
          Our Team
        </a>

        <a
          href="#login"
          className="mobile-login"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </a>
      </nav>

    </header>
  );
}

export default Navbar;