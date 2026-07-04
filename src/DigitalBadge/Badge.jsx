// import React from "react";

// const Badge = ({ data, member, style = {} }) => {
//   return (
//     <div
//       className="Badge glassMorphism rounded-xl text-white/90 w-64 aspect-[2/3] pb-4 flex flex-col z-20"
//       style={style}
//     >
//       <div className="flex justify-between items-end border-b border-red-300/30 px-4">
//         <div className="grow border-r border-red-300/30 mr-2 pb-2 pt-7">
//           <img src="./badge_title.png" alt="" className="w-24" />
//         </div>
//         <img src="./badge_logo.png" alt="" className="w-10 mb-1" />
//       </div>
//       <div className="grow flex flex-col justify-center">
//         <h1 className="text-4xl px-4 ubuntu-medium">
//           {member.split(" ")[0]}
//           <br />
//           {member.split(" ")[1]}
//         </h1>
//         <p className="text-xs px-4 mt-2 roboto-regular">Team: {data.teamName}</p>{" "}
//         <h2 className="text-2xl mt-2 font-semibold  border-y py-2 px-4 border-red-300/30 alatsi-regular">
//           HACKER
//         </h2>
//       </div>
//       <div className="flex justify-between ubuntu-regular">
//         <div className="flex flex-col justify-between grow">
//           <p className="text-xs px-4">
//             Valid for: <br />
//             27 to 29 Sep, 2024
//           </p>
//           <hr className="border-red-300/30" />
//           <p className="text-xs px-4">
//             Issued by: <br />
//             ITSA, SFIT
//           </p>
//         </div>
//         <img
//           src="badge_qr.png"
//           alt=""
//           className="w-[5rem] rounded-md mix-blend-screen border-[1.5px] border-red-300/30 mr-4"
//         />
//       </div>
//     </div>
//   );
// };

// export default Badge;
import React, { useState } from "react";
import { teams } from "./teamData";
import "./DigitalBadge.css";

import bg from "./assets/badge.png";
import logo from "./assets/badge_logo.png";
import qrImg from "./assets/badge_qr.png";

export default function DigitalBadge() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
    const found = teams.find(t => t.teamName === team);
    setMembers(found ? found.members : []);
    setSelectedMember("");
  };

  return (
    <div
      className="badge-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* LEFT BADGE */}
      <div className="badge-text">

        {/* LOGO IMAGE */}
        <img src={logo} alt="logo" className="logo-img" />

        <h2>HACKER ID</h2>

        <h1>{selectedMember || "Your Name"}</h1>
        <p>Team: {selectedTeam || "Select your team"}</p>

        <p className="date">Valid: 03–05 April 2026</p>

        {/* QR IMAGE */}
        <div className="qr-box">
          <img src={qrImg} alt="qr" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="team-panel">

        <select onChange={(e) => handleTeamChange(e.target.value)}>
          <option>Select your team</option>
          {teams.map((t, i) => (
            <option key={i} value={t.teamName}>
              {t.teamName}
            </option>
          ))}
        </select>

        <div className="members">
          {members.map((m, i) => (
            <button key={i} onClick={() => setSelectedMember(m)}>
              👤 {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}