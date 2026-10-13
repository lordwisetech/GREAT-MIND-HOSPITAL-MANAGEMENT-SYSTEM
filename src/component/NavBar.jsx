import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setMenuOpen(false);

    // If we are not on the home page, navigate to home first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for the home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <header className="h-[82px] px-[7%] flex items-center justify-between bg-white border-b border-[#edf2f7] sticky top-0 z-[100]">
      
      {/* Logo */}
      <div className="flex items-center gap-[10px] cursor-pointer" onClick={() => scrollToSection("home")}>
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[#0b8f87] text-white flex items-center justify-center text-[24px] font-bold">
          ✚
        </div>
        <div>
          <h2 className="text-[21px] leading-none font-bold text-slate-700">
            Great<span className="text-[#0b8f87]">Mind</span>
          </h2>
          <small className="text-[#718096] text-[8px] block mt-1">
            Hospital Management
          </small>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-[35px]">
        <button 
          onClick={() => scrollToSection("home")} 
          className="text-[#52606d] text-[14px] font-medium hover:text-[#0b8f87] transition-colors bg-transparent border-none cursor-pointer"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("services")} 
          className="text-[#52606d] text-[14px] font-medium hover:text-[#0b8f87] transition-colors bg-transparent border-none cursor-pointer"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection("about")} 
          className="text-[#52606d] text-[14px] font-medium hover:text-[#0b8f87] transition-colors bg-transparent border-none cursor-pointer"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("team")} 
          className="text-[#52606d] text-[14px] font-medium hover:text-[#0b8f87] transition-colors bg-transparent border-none cursor-pointer"
        >
          Our Team
        </button>
      </nav>

      {/* Desktop Login Button */}
      <button 
        onClick={handleLoginClick} 
        className="hidden md:inline-block px-[25px] py-[11px] bg-[#0b8f87] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#087f78] transition-colors cursor-pointer"
      >
        Login
      </button>

      {/* Hamburger Toggle Button */}
      <button
        className="md:hidden flex flex-col justify-between w-[30px] h-[21px] bg-transparent border-none cursor-pointer z-[101]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-full h-[3px] bg-[#102a43] rounded transition-all duration-300 transform ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
        <span className={`w-full h-[3px] bg-[#102a43] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-full h-[3px] bg-[#102a43] rounded transition-all duration-300 transform ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
      </button>

      {/* Mobile Menu Drawer */}
      <nav className={`fixed top-[82px] left-0 w-full bg-white border-b border-[#edf2f7] p-6 flex flex-col gap-4 shadow-lg transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}`}>
        <button 
          onClick={() => scrollToSection("home")} 
          className="text-left text-[#52606d] text-[16px] font-medium py-2 hover:text-[#0b8f87] bg-transparent border-none cursor-pointer"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("services")} 
          className="text-left text-[#52606d] text-[16px] font-medium py-2 hover:text-[#0b8f87] bg-transparent border-none cursor-pointer"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection("about")} 
          className="text-left text-[#52606d] text-[16px] font-medium py-2 hover:text-[#0b8f87] bg-transparent border-none cursor-pointer"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("team")} 
          className="text-left text-[#52606d] text-[16px] font-medium py-2 hover:text-[#0b8f87] bg-transparent border-none cursor-pointer"
        >
          Our Team
        </button>
        <button 
          onClick={handleLoginClick} 
          className="w-full py-[12px] bg-[#0b8f87] text-white rounded-[8px] text-center font-semibold text-[14px] mt-2 cursor-pointer"
        >
          Login
        </button>
      </nav>

    </header>
  );
}

export default Navbar;