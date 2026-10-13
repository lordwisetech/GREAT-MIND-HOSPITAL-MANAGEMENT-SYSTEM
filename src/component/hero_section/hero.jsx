function Hero() {
  return (
    <section id="home" className="min-h-[650px] px-[7%] py-[90px] flex flex-col lg:flex-row items-center justify-between gap-[70px] bg-gradient-to-br from-[#f0fffd] via-[#ffffff] to-[#edfafa]">

      {/* LEFT CONTENT */}
      <div className="max-w-[590px]">

        <div className="inline-block px-[14px] py-[8px] rounded-[30px] bg-[#d9f7f4] text-[#087f78] text-[12px] font-semibold mb-[22px]">
          ● Smart Healthcare Management
        </div>

        <h1 className="text-[40px] md:text-[58px] leading-[1.1] tracking-[-2px] font-bold text-[#102a43] mb-[22px]">
          Better Healthcare.<br />
          <span className="text-[#0b8f87]">Smarter Management.</span>
        </h1>

        <p className="text-[#617386] text-[16px] max-w-[530px] leading-relaxed">
          Great Mind is a modern hospital management system designed
          to connect patients, doctors, and nurses in one simple and
          secure platform.
        </p>

        <div className="flex gap-[15px] mt-[30px]">
          <a href="#login" className="px-[25px] py-[13px] rounded-[8px] text-[14px] font-semibold bg-[#0b8f87] text-white hover:bg-[#087f78] transition-colors text-center">
            Get Started →
          </a>

          <a href="#about" className="px-[25px] py-[13px] rounded-[8px] text-[14px] font-semibold border border-[#d4dee8] bg-white text-[#102a43] hover:bg-[#f7fafc] transition-colors text-center">
            Learn More
          </a>
        </div>

        <div className="flex gap-[45px] mt-[50px]">
          <div className="flex flex-col">
            <strong className="text-[22px] font-bold text-[#102a43]">24/7</strong>
            <span className="text-[#718096] text-[11px]">Healthcare Access</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-[22px] font-bold text-[#102a43]">100%</strong>
            <span className="text-[#718096] text-[11px]">Secure System</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-[22px] font-bold text-[#102a43]">3+</strong>
            <span className="text-[#718096] text-[11px]">User Roles</span>
          </div>
        </div>

      </div>

      {/* RIGHT DASHBOARD */}
      <div className="w-full lg:w-[470px] p-[25px] rounded-[22px] bg-white shadow-[0_25px_70px_rgba(28,75,91,0.13)] border border-[#edf2f7]">

        <div className="flex justify-between items-center mb-[20px]">
          <div>
            <span className="text-[11px] text-[#829ab1]">Today's Overview</span>
            <h3 className="text-[17px] font-bold text-[#102a43]">Hospital Dashboard</h3>
          </div>

          <div className="text-[11px] text-[#159957] font-semibold">
            ● Live
          </div>
        </div>

        {/* HEALTH STATUS */}
        <div className="flex items-center gap-[15px] p-[17px] bg-[#eafaf8] rounded-[14px] mb-[15px]">
          <div className="w-[45px] h-[45px] bg-[#0b8f87] text-white rounded-[12px] flex items-center justify-center text-[25px]">
            ♡
          </div>
          <div>
            <small className="text-[10px] text-[#718096] block">Patient Monitoring</small>
            <h3 className="text-[14px] font-bold text-[#102a43]">Healthy & Stable</h3>
          </div>
        </div>

        {/* DASHBOARD NUMBERS */}
        <div className="grid grid-cols-2 gap-[12px]">
          <div className="p-[15px] border border-[#edf2f7] rounded-[12px]">
            <span className="block text-[10px] text-[#829ab1]">Patients</span>
            <strong className="block text-[23px] font-bold text-[#102a43] my-[3px]">248</strong>
            <small className="block text-[10px] text-[#829ab1]">+12 today</small>
          </div>

          <div className="p-[15px] border border-[#edf2f7] rounded-[12px]">
            <span className="block text-[10px] text-[#829ab1]">Doctors</span>
            <strong className="block text-[23px] font-bold text-[#102a43] my-[3px]">36</strong>
            <small className="block text-[10px] text-[#829ab1]">Available</small>
          </div>

          <div className="p-[15px] border border-[#edf2f7] rounded-[12px]">
            <span className="block text-[10px] text-[#829ab1]">Appointments</span>
            <strong className="block text-[23px] font-bold text-[#102a43] my-[3px]">84</strong>
            <small className="block text-[10px] text-[#829ab1]">Today</small>
          </div>

          <div className="p-[15px] border border-[#edf2f7] rounded-[12px]">
            <span className="block text-[10px] text-[#829ab1]">Emergencies</span>
            <strong className="block text-[23px] font-bold text-[#102a43] my-[3px]">07</strong>
            <small className="block text-[10px] text-[#829ab1]">Active</small>
          </div>
        </div>

        {/* APPOINTMENT */}
        <div className="flex items-center gap-[12px] mt-[15px] pt-[15px] border-t border-[#edf2f7]">
          <div className="w-[42px] h-[42px] rounded-full bg-[#dceff0] text-[#0b8f87] flex items-center justify-center text-[11px] font-bold shrink-0">
            DR
          </div>

          <div className="flex-1">
            <strong className="block text-[12px] font-bold text-[#102a43]">Dr. Mayowa Uzumaki</strong>
            <span className="block text-[10px] text-[#829ab1]">Cardiology • 10:30 AM</span>
          </div>

          <button className="px-[12px] py-[7px] bg-[#edfafa] text-[#0b8f87] rounded-[6px] text-[10px] font-semibold hover:bg-[#d9f7f4] transition-colors cursor-pointer">
            View
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;