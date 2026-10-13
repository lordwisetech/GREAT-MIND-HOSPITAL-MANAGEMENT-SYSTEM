export default function Footer() {
  return (
    <footer className="bg-[#102a43] text-white px-[7%] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#28445c]">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-[#0b8f87] text-white flex items-center justify-center font-bold text-[24px]">
              ✚
            </div>
            <div>
              <h2 className="text-[21px] font-bold leading-none">
                Great<span className="text-[#4fd1c5]">Mind</span>
              </h2>
              <small className="text-[#9fb3c8] text-[8px] block mt-1">
                Hospital Management
              </small>
            </div>
          </div>
          <p className="text-[#9fb3c8] text-[12px] max-w-[300px] leading-relaxed">
            A modern hospital management platform connecting healthcare professionals and patients.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-[13px] font-semibold mb-5 text-white">Platform</h4>
          <ul className="space-y-3">
            <li>
              <a href="#login" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                Patient Portal
              </a>
            </li>
            <li>
              <a href="#login" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                Doctor Portal
              </a>
            </li>
            <li>
              <a href="#login" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                Nurse Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-[13px] font-semibold mb-5 text-white">Company</h4>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="text-[#9fb3c8] text-[11px] hover:text-white transition-colors">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[13px] font-semibold mb-5 text-white">Contact</h4>
          <div className="space-y-3">
            <p className="text-[#9fb3c8] text-[11px]">support@greatmind.com</p>
            <p className="text-[#9fb3c8] text-[11px]">Healthcare Technology Team</p>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[#9fb3c8] text-[11px] gap-4">
        <p>© 2026 Great Mind Hospital Management System</p>
        <p>Built by the Great Mind Team</p>
      </div>
    </footer>
  );
}