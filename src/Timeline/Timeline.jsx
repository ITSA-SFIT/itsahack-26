// import React from "react";
// import itsahackLogo from "./../logo.svg";
// import SectionTitle from "../SectionTitle";
// import { useGlobalContext } from "../context";
// import schedule from "./schedule.js";

// const TimelineCard = ({ reverse, date, time, event, description, index }) => {
//   const { windowSize } = useGlobalContext();
//   const mobile = windowSize.width < 640;

//   return (
//     <div
//       className={`relative flex sm:mb-14 mb-10 group ${
//         reverse === true ? "flex-row-reverse" : ""
//       }`}
//     >
//       {!mobile && (
//         <div
//           className={`w-[50%] pt-4 transition-all duration-300 group-hover:text-red-400 ${
//             reverse === true ? "text-left pl-10" : "text-right pr-10"
//           }`}
//           style={{
//             textShadow: "0 0 8px rgba(220,38,38,0.6)",
//           }}
//         >
//           <div className="font-semibold">{date}</div>
//           {time && <div className="text-red-400">{time}</div>}
//         </div>
//       )}

//       {/* Glowing Icon Node */}
//       <div
//         className={`w-12 h-12 rounded-full bg-[#440000] absolute top-0 p-1.5 border-2 mt-2 border-red-500 translate-x-[-50%] z-10
//           transition-all duration-300 group-hover:scale-110
//           ${!mobile ? "left-[50%]" : "left-[2.5rem]"}`}
//         style={{
//           boxShadow:
//             "0 0 10px rgba(220,38,38,0.7), 0 0 25px rgba(220,38,38,0.4), 0 0 50px rgba(220,38,38,0.2)",
//           animation: `pulse-glow 2s ease-in-out infinite`,
//           animationDelay: `${index * 0.4}s`,
//         }}
//       >
//         <img src={itsahackLogo} alt="" className="w-full drop-shadow-lg" />
//       </div>

//       {/* Card */}
//       <div
//         className={`${reverse === true ? "pr-12" : "pl-12"} ${
//           !mobile ? "w-[50%]" : "w-full pl-20"
//         }`}
//       >
//         {mobile && (
//           <p className="mb-2 font-semibold text-red-400">
//             {date}
//             {time && " | "}
//             {time}
//           </p>
//         )}
//         <div
//           className={`bg-[#2a0000] border border-red-900 rounded-lg p-4
//             transition-all duration-300 group-hover:border-red-500 group-hover:bg-[#3d0000]`}
//           style={{
//             boxShadow: "0 0 0px rgba(220,38,38,0)",
//             transition: "box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease",
//           }}
//           onMouseEnter={e => {
//             e.currentTarget.style.boxShadow =
//               "0 0 15px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.2), inset 0 0 20px rgba(220,38,38,0.05)";
//           }}
//           onMouseLeave={e => {
//             e.currentTarget.style.boxShadow = "0 0 0px rgba(220,38,38,0)";
//           }}
//         >
//           <h3
//             className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300"
//             style={{ textShadow: "0 0 10px rgba(220,38,38,0.4)" }}
//           >
//             {event}
//           </h3>
//           <p className="text-sm pl-2 ml-1 border-l-red-600 border-l-2 text-gray-300">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Timeline = () => {
//   const { windowSize } = useGlobalContext();
//   const mobile = windowSize.width < 640;

//   return (
//     <div
//       id="timeline"
//       className="Timeline bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
//     >
//       {/* Keyframe injection */}
//       <style>{`
//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 10px rgba(220,38,38,0.7), 0 0 25px rgba(220,38,38,0.4), 0 0 50px rgba(220,38,38,0.2);
//           }
//           50% {
//             box-shadow: 0 0 20px rgba(220,38,38,1), 0 0 50px rgba(220,38,38,0.7), 0 0 90px rgba(220,38,38,0.4);
//           }
//         }

//         @keyframes line-glow {
//           0%, 100% { box-shadow: 0 0 6px rgba(220,38,38,0.5); }
//           50% { box-shadow: 0 0 18px rgba(220,38,38,1), 0 0 40px rgba(220,38,38,0.5); }
//         }
//       `}</style>

//       <SectionTitle>TIMELINE</SectionTitle>

//       <div className="mt-10 relative pt-10">
//         {/* Glowing vertical line */}
//         <div
//           className="w-1 h-full absolute bg-red-600 top-0 bottom-0"
//           style={{
//             left: !mobile ? "50%" : "2.5rem",
//             transform: "translateX(-50%)",
//             animation: "line-glow 2s ease-in-out infinite",
//           }}
//         />

//         {schedule.map((event, index) => (
//           <TimelineCard
//             key={index}
//             index={index}
//             date={event.date}
//             time={event.time}
//             event={event.event}
//             description={event.description}
//             reverse={index % 2 === 0 && !mobile}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;
import React from "react";
import itsahackLogo from "./../logo.svg";
import SectionTitle from "../SectionTitle";
import { useGlobalContext } from "../context";
import schedule from "./schedule.js";

const parseDate = (dateStr) => {
  const cleaned = dateStr.replace(/(st|nd|rd|th)/, "");
  return new Date(cleaned);
};

const getActiveIndex = () => {
  const now = new Date();
  let activeIndex = 0;
  schedule.forEach((event, index) => {
    const eventDate = parseDate(event.date);
    if (now >= eventDate) {
      activeIndex = index;
    }
  });
  return activeIndex;
};

const TimelineCard = ({ reverse, date, time, event, description, isActive, isPast }) => {
  const { windowSize } = useGlobalContext();
  const mobile = windowSize.width < 640;

  return (
    <div
      className={`relative flex sm:mb-14 mb-10 group ${
        reverse === true ? "flex-row-reverse" : ""
      }`}
    >
      {/* Date/Time side */}
      {!mobile && (
        <div
          className={`w-[50%] pt-4 font-semibold ${
            reverse === true ? "text-left pl-10" : "text-right pr-10"
          } ${
            isActive
              ? "text-red-400"
              : isPast
              ? "text-red-300"
              : "text-gray-400"
          }`}
          style={isActive ? { textShadow: "0 0 8px rgba(220,38,38,0.8)" } : {}}
        >
          <div>{date}</div>
          {time && <div className="text-sm font-normal mt-0.5">{time}</div>}
        </div>
      )}

      {/* Node Icon */}
      <div
        className={`w-12 h-12 rounded-full absolute top-0 p-1.5 border-2 mt-2 translate-x-[-50%] z-10 transition-all duration-500
          ${isActive
            ? "bg-[#440000] border-red-500 scale-110"
            : isPast
            ? "bg-[#2a0000] border-red-700"
            : "bg-[#1a0000] border-red-900"
          }
          ${!mobile ? "left-[50%]" : "left-[2.5rem]"}`}
        style={
          isActive
            ? { animation: "pulse-glow 2s ease-in-out infinite" }
            : {}
        }
      >
        <img
          src={itsahackLogo}
          alt=""
          className={`w-full transition-opacity duration-300 ${
            isActive ? "opacity-100" : isPast ? "opacity-60" : "opacity-30"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`${reverse === true ? "pr-12" : "pl-12"} ${
          !mobile ? "w-[50%]" : "w-full pl-20"
        }`}
      >
        {mobile && (
          <p className={`mb-2 font-semibold ${isActive ? "text-red-400" : "text-gray-400"}`}>
            {date}
            {time && ` | ${time}`}
          </p>
        )}

        <div
          className={`rounded-lg p-4 border transition-all duration-500 ${
            isActive
              ? "bg-[#3d0000] border-red-500"
              : isPast
              ? "bg-[#220000] border-red-800"  // past: visible dark red
              : "bg-[#150000] border-[#3a0000]" // future: subtle but visible
          }`}
          style={
            isActive
              ? {
                  boxShadow:
                    "0 0 15px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.2), inset 0 0 20px rgba(220,38,38,0.05)",
                }
              : {}
          }
        >
          <h3
            className={`text-xl font-bold mb-2 transition-colors duration-300 ${
              isActive
                ? "text-red-400"
                : isPast
                ? "text-red-200"   // past: clearly visible
                : "text-gray-300"  // future: white-ish, readable
            }`}
            style={isActive ? { textShadow: "0 0 10px rgba(220,38,38,0.8)" } : {}}
          >
            {event}
          </h3>
          <p
            className={`text-sm pl-2 ml-1 border-l-2 ${
              isActive
                ? "border-l-red-500 text-gray-200"
                : isPast
                ? "border-l-red-700 text-gray-400"
                : "border-l-red-900 text-gray-400"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const { windowSize } = useGlobalContext();
  const mobile = windowSize.width < 640;
  const activeIndex = getActiveIndex();

  return (
    <div
      id="timeline"
      className="Timeline bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(220,38,38,1), 0 0 50px rgba(220,38,38,0.7), 0 0 90px rgba(220,38,38,0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(220,38,38,1), 0 0 80px rgba(220,38,38,0.9), 0 0 130px rgba(220,38,38,0.5);
          }
        }
        @keyframes line-glow {
          0%, 100% { box-shadow: 0 0 6px rgba(220,38,38,0.4); }
          50% { box-shadow: 0 0 18px rgba(220,38,38,0.9), 0 0 40px rgba(220,38,38,0.4); }
        }
      `}</style>

      <SectionTitle>TIMELINE</SectionTitle>

      <div className="mt-10 relative pt-10">
        <div
          className="w-1 h-full absolute bg-red-600 top-0 bottom-0"
          style={{
            left: !mobile ? "50%" : "2.5rem",
            transform: "translateX(-50%)",
            animation: "line-glow 2s ease-in-out infinite",
          }}
        />

        {schedule.map((event, index) => (
          <TimelineCard
            key={index}
            date={event.date}
            time={event.time}
            event={event.event}
            description={event.description}
            reverse={index % 2 === 0 && !mobile}
            isActive={index === activeIndex}
            isPast={index < activeIndex}  // 👈 completed stages
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;