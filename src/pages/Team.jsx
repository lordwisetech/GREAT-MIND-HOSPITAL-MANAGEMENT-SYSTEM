import { useState } from "react";

// Import your images from the assets folder
import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.png";


export default function Team() {
  const [frontendTeam] = useState([
    { name: "Mayowa Uzumaki", role: "Frontend Developer", image: member1 },
    { name: "Member Name", role: "Frontend Developer", image: member2 },
    { name: "Member Name", role: "Frontend Developer", image: member2 }
   
  ]);

  const [backendTeam] = useState([
    { name: "Member Name", role: "Backend Developer", image: member2 },
     { name: "Member Name", role: "Backend Developer", image: member2 },
      { name: "Member Name", role: "Backend Developer", image: member2 },
    
 
  ]);

  const [contributorsTeam] = useState([
    { name: "Member Name", role: "Developer", image: member2 },
    { name: "Member Name", role: "Developer", image: member2 },
    
  ]);

  return (
    <section id="team" className="px-[7%] py-[100px] bg-white">
      
      {/* Section Heading */}
      <div className="text-center max-w-[650px] mx-auto mb-[55px]">
        <span className="text-[#0b8f87] text-[11px] font-bold tracking-[1.5px] uppercase">
          MEET THE TEAM
        </span>
        <h2 className="text-[35px] font-bold text-[#102a43] my-[10px]">
          The People Behind Great Mind
        </h2>
        <p className="text-[#718096] text-[14px]">
          A team of developers working together to build a smarter healthcare experience.
        </p>
      </div>

      {/* Frontend Team Category */}
      <div className="max-w-[950px] mx-auto mb-[60px] text-center">
        <h3 className="text-[18px] font-bold mb-[25px] text-[#40566c]">
          Frontend Team
        </h3>
        <div className="flex justify-center gap-[55px] flex-wrap">
          {frontendTeam.map((member, index) => (
            <div key={index} className="w-[160px]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-[105px] h-[105px] rounded-full object-cover mx-auto bg-[#dceff0] border-[5px] border-[#f1faf9]"
              />
              <h4 className="mt-[13px] text-[14px] font-bold text-[#102a43]">{member.name}</h4>
              <span className="text-[10px] text-[#829ab1]">{member.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Team Category */}
      <div className="max-w-[950px] mx-auto mb-[60px] text-center">
        <h3 className="text-[18px] font-bold mb-[25px] text-[#40566c]">
          Backend Team
        </h3>
        <div className="flex justify-center gap-[55px] flex-wrap">
          {backendTeam.map((member, index) => (
            <div key={index} className="w-[160px]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-[105px] h-[105px] rounded-full object-cover mx-auto bg-[#dceff0] border-[5px] border-[#f1faf9]"
              />
              <h4 className="mt-[13px] text-[14px] font-bold text-[#102a43]">{member.name}</h4>
              <span className="text-[10px] text-[#829ab1]">{member.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Developers & Contributors Category */}
      <div className="max-w-[950px] mx-auto mb-[60px] text-center">
        <h3 className="text-[18px] font-bold mb-[25px] text-[#40566c]">
          Developers & Contributors
        </h3>
        <div className="flex justify-center gap-[55px] flex-wrap">
          {contributorsTeam.map((member, index) => (
            <div key={index} className="w-[160px]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-[105px] h-[105px] rounded-full object-cover mx-auto bg-[#dceff0] border-[5px] border-[#f1faf9]"
              />
              <h4 className="mt-[13px] text-[14px] font-bold text-[#102a43]">{member.name}</h4>
              <span className="text-[10px] text-[#829ab1]">{member.role}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}