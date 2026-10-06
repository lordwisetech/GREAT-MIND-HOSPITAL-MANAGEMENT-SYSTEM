import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#team">Our Team</a>
      </nav>

      {/* Desktop Login */}
      <a href="#login" className="nav-btn desktop-login">
        Login
      </a>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#team" onClick={closeMenu}>Our Team</a>

        <a href="#login" className="mobile-login" onClick={closeMenu}>
          Login
        </a>
      </nav>
    </header>
  );
}

export default Navbar;