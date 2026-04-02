// import React, { useState } from "react";
// import SectionTitle from "../SectionTitle";
// import HTproblemStatements from "./HealthTech";
// import ECproblemStatements from "./Ecommerce";
// import ETproblemStatements from "./EdTech";
// import LGproblemStatements from "./Logistics";
// import FTproblemStatements from "./FinTech";
// import ProblemStatementCard from "./ProblemStatementCard";

// const RadioButton = ({ id, value, name, label, onChange }) => {
//   return (
//     <div className="flex items-center border-black shadow rounded-2xl bg-red-950">
//       <input
//         id={id}
//         type="radio"
//         value={value}
//         name={name}
//         className="w-20 h-5 bg-red-950"
//         onChange={onChange}
//       />
//       <label
//         htmlFor={id}
//         className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
//       >
//         {label}
//       </label>
//     </div>
//   );
// };

// const ProblemStatement = () => {
//   const [selectedTrack, setSelectedTrack] = useState("");

//   const handleTrackChange = (event) => {
//     setSelectedTrack(event.target.value);
//   };

//   return (
//     <div
//       id="ProblemStatement"
//       className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
//     >
//       <SectionTitle>Problem Statement</SectionTitle>

//       <div className="max-w-sm mx-auto mt-10">
//         <div className="flex flex-row flex-wrap gap-4 justify-center items-center md:flex-nowrap">
//           <RadioButton
//             id="radio-healthtech"
//             value="HealthTech"
//             name="track"
//             label="HealthTech"
//             onChange={handleTrackChange}
//           />
//           <RadioButton
//             id="radio-fintech"
//             value="FinTech"
//             name="track"
//             label="FinTech"
//             onChange={handleTrackChange}
//           />
//           <RadioButton
//             id="radio-edtech"
//             value="EdTech"
//             name="track"
//             label="EdTech"
//             onChange={handleTrackChange}
//           />
//           <RadioButton
//             id="radio-logistics"
//             value="Logistics"
//             name="track"
//             label="Logistics"
//             onChange={handleTrackChange}
//           />
//           <RadioButton
//             id="radio-ecommerce"
//             value="ECommerce"
//             name="track"
//             label="E-Commerce"
//             onChange={handleTrackChange}
//           />
//         </div>
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         {selectedTrack === "HealthTech" && (
//           <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
//             {HTproblemStatements.map((statement, index) => (
//               <ProblemStatementCard
//                 key={index}
//                 statementId={statement.statementId}
//                 problemStatement={statement.problemStatement}
//                 exampleFeatures={statement.exampleFeatures}
//                 extracontent={statement.extracontent}
//               />
//             ))}
//           </div>
//         )}

//         {selectedTrack === "FinTech" && (
//           <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
//             {FTproblemStatements.map((statement, index) => (
//               <ProblemStatementCard
//                 key={index}
//                 statementId={statement.statementId}
//                 problemStatement={statement.problemStatement}
//                 exampleFeatures={statement.exampleFeatures}
//                 extracontent={statement.extracontent}
//               />
//             ))}
//           </div>
//         )}

//         {selectedTrack === "EdTech" && (
//           <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
//             {ETproblemStatements.map((statement, index) => (
//               <ProblemStatementCard
//                 key={index}
//                 statementId={statement.statementId}
//                 problemStatement={statement.problemStatement}
//                 exampleFeatures={statement.exampleFeatures}
//                 extracontent={statement.extracontent}
//               />
//             ))}
//           </div>
//         )}

//         {selectedTrack === "ECommerce" && (
//           <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
//             {ECproblemStatements.map((statement, index) => (
//               <ProblemStatementCard
//                 key={index}
//                 statementId={statement.statementId}
//                 problemStatement={statement.problemStatement}
//                 exampleFeatures={statement.exampleFeatures}
//                 extracontent={statement.extracontent}
//               />
//             ))}
//           </div>
//         )}

//         {selectedTrack === "Logistics" && (
//           <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
//             {LGproblemStatements.map((statement, index) => (
//               <ProblemStatementCard
//                 key={index}
//                 statementId={statement.statementId}
//                 problemStatement={statement.problemStatement}
//                 exampleFeatures={statement.exampleFeatures}
//                 extracontent={statement.extracontent}
//               />
//             ))}
//           </div>
//         )}

//         {selectedTrack === "" && (
//           <p className="text-center mt-10 font-extrabold text-3xl">
//             Please select a track to view the problem statements.
//           </p>
//         )}

//         <div className="mt-10 text-center bg-red-950 p-6 rounded-lg shadow-lg max-w-lg ">
//           <p className="font-extrabold text-2xl mb-4 text-white">
//             You can also Download Problem Statement from here:
//           </p>
//           <a
//             href="ProblemStatements.pdf"
//             download
//             className="inline-block px-6 py-2 bg-white text-red-950 font-bold rounded-lg shadow hover:bg-gray-200 transition duration-300"
//           >
//             Download
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProblemStatement;
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import HTproblemStatements from "./HealthTech";
import SGproblemStatements from "./Smart Governance";
import ETproblemStatements from "./EdTech";
import AUTproblemStatements from "./Automation";
import FTproblemStatements from "./FinTech";
import ProblemStatementCard from "./ProblemStatementCard";

const ProblemStatement = () => {
  const [activePS, setActivePS] = useState(0);

  const tracks = [
    { name: "HealthTech", data: HTproblemStatements },
    { name: "FinTech", data: FTproblemStatements },
    { name: "EdTech", data: ETproblemStatements },
    { name: "Automation", data: AUTproblemStatements },
    { name: "Smart Governance", data: SGproblemStatements }
  ];

  return (
    <div className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
      
      <SectionTitle>Problem Statement</SectionTitle>

      {/* 🔥 NOTE ADDED HERE */}
      <div className="mt-6 bg-red-950/60 border border-red-800 p-4 rounded-lg text-sm md:text-base leading-relaxed text-gray-200">
        <p>
          <span className="font-bold text-white">Note:</span> The example features provided are for reference purposes only. This is the core idea; all features are not mandatory.
        </p>

        <p className="mt-2">
          Participants are encouraged to innovate, add new features, and expand the solution based on their own ideas and creativity.
        </p>

        <p className="mt-2">
          Focus on the judging criteria such as{" "}
          <span className="font-semibold text-white">
            Technicality, Originality, Practicality, Aesthetics
          </span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            Wow Factor
          </span>{" "}
          to maximize your chances of scoring higher.
        </p>
      </div>

      {/* 🔥 Tabs with Track Names */}
      <div className="relative mt-10 overflow-x-auto">

        <div className="relative flex min-w-max md:min-w-0 bg-white/10 rounded-lg">

          {/* Sliding White Background */}
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
            style={{
              width: `${100 / tracks.length}%`,
              transform: `translateX(${activePS * 100}%)`
            }}
          />

          {tracks.map((track, i) => (
            <button
              key={i}
              onClick={() => setActivePS(i)}
              className={`flex-1 min-w-[110px] md:min-w-0 py-3 px-2 text-sm md:text-base font-bold z-10 ${
                activePS === i ? "text-red-600" : "text-white"
              }`}
            >
              {track.name}
            </button>
          ))}

        </div>
      </div>

      {/* 🔥 Problem Cards */}
      <div className="flex flex-col justify-center items-center">

        <div className="flex flex-wrap justify-around mt-10 gap-8 text-center items-stretch">
          {tracks[activePS].data.map((statement, index) => (
            <ProblemStatementCard
              key={index}
              statementId={statement.statementId}
              problemStatement={statement.problemStatement}
              exampleFeatures={statement.exampleFeatures}
              extracontent={statement.extracontent}
            />
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-10 text-center bg-red-950 p-6 rounded-lg shadow-lg max-w-lg">
          <p className="font-extrabold text-2xl mb-4 text-white">
            You can also Download Problem Statement from here:
          </p>
          <a
            href="Problem Statements.pdf"
            download
            className="inline-block px-6 py-2 bg-white text-red-950 font-bold rounded-lg shadow hover:bg-gray-200 transition duration-300"
          >
            Download
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProblemStatement;