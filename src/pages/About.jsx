export default function About() {
  return (
    <section id="about" className="px-[7%] py-[100px] bg-white grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
      
      {/* About Image Graphic Area */}
      <div className="h-[430px] rounded-[25px] bg-gradient-to-br from-[#dff9f6] to-[#b9e9e4] flex items-center justify-center relative">
        
        {/* Medical Symbol Circle */}
        <div className="w-[180px] h-[180px] rounded-full bg-white text-[#0b8f87] flex items-center justify-center text-[90px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          ✚
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-[30px] -right-[25px] px-[25px] py-[18px] bg-white rounded-[12px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
          <strong className="block text-[#0b8f87] font-bold">Great Mind</strong>
          <span className="block text-[11px] text-[#718096]">Connecting Healthcare</span>
        </div>

      </div>

      {/* About Content */}
      <div className="about-content">
        <span className="text-[#0b8f87] text-[11px] font-bold tracking-[1.5px] uppercase">
          ABOUT GREAT MIND
        </span>

        <h2 className="text-[38px] leading-[1.2] my-[10px] mb-[20px] font-bold text-[#102a43]">
          Technology That Makes<br />
          Healthcare <strong className="text-[#0b8f87]">Better.</strong>
        </h2>

        <p className="text-[#718096] text-[14px] mb-[15px] leading-relaxed">
          Great Mind is designed to simplify the way hospitals manage patients, healthcare professionals and daily medical activities.
        </p>

        <p className="text-[#718096] text-[14px] mb-[15px] leading-relaxed">
          By bringing patients, doctors and nurses into one connected platform, Great Mind makes healthcare management faster, simpler and more organized.
        </p>

        {/* Check List */}
        <div className="grid gap-[10px] mt-[25px]">
          <div className="text-[13px] font-semibold text-[#40566c]">✓ Easy patient management</div>
          <div className="text-[13px] font-semibold text-[#40566c]">✓ Secure medical information</div>
          <div className="text-[13px] font-semibold text-[#40566c]">✓ Simple appointment management</div>
          <div className="text-[13px] font-semibold text-[#40566c]">✓ Connected healthcare professionals</div>
        </div>
      </div>

    </section>
  );
}