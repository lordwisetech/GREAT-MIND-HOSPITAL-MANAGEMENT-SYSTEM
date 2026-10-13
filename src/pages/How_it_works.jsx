export default function HowItWorks() {
  return (
    <section className="px-[7%] py-[100px] bg-[#f7fafc]" id="how-it-works">
      
      {/* Section Heading */}
      <div className="text-center max-w-[650px] mx-auto mb-[55px]">
        <span className="text-[#0b8f87] text-[11px] font-bold tracking-[1.5px] uppercase">
          HOW IT WORKS
        </span>
        <h2 className="text-[35px] font-bold text-[#102a43] my-[10px]">
          Healthcare Made Simple
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        
        {/* Step 1 */}
        <div className="text-center">
          <div className="w-[55px] h-[55px] mx-auto mb-[18px] rounded-full bg-[#0b8f87] text-white flex justify-center items-center font-bold text-base">
            01
          </div>
          <h3 className="text-[17px] font-bold text-[#102a43] mb-[8px]">
            Choose Your Portal
          </h3>
          <p className="text-[#718096] text-[12px] leading-relaxed">
            Login through the portal that matches your role in the hospital.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="w-[55px] h-[55px] mx-auto mb-[18px] rounded-full bg-[#0b8f87] text-white flex justify-center items-center font-bold text-base">
            02
          </div>
          <h3 className="text-[17px] font-bold text-[#102a43] mb-[8px]">
            Manage Your Activities
          </h3>
          <p className="text-[#718096] text-[12px] leading-relaxed">
            Access appointments, records, patients and other important information.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="w-[55px] h-[55px] mx-auto mb-[18px] rounded-full bg-[#0b8f87] text-white flex justify-center items-center font-bold text-base">
            03
          </div>
          <h3 className="text-[17px] font-bold text-[#102a43] mb-[8px]">
            Stay Connected
          </h3>
          <p className="text-[#718096] text-[12px] leading-relaxed">
            Doctors, nurses and patients can work together through one platform.
          </p>
        </div>

      </div>

    </section>
  );
}