import "./Navbar.css";

function Navbar() {
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

      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#team">Our Team</a>
      </nav>

      <a href="#login" className="nav-btn">
        Login
      </a>
    </header>
  );
}

export default Navbar;