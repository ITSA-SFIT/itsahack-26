
import React from "react";
import "./winner.css";
import {
  Trophy,
  Medal,
  Award,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Winners = () => {
  const winners = [
    {
      place: "2nd Place",
      team: "Sankalpsquad",
      project: 'CivicResource.ai - Intelligent Complaint Management',
      icon: <Medal size={44} />,
      ring: "from-slate-300 to-slate-400",
      glow: "shadow-[0_0_35px_rgba(203,213,225,0.35)]",
      order: "order-1 md:order-1",
      lift: "md:mt-10",
    },
    {
      place: "1st Place",
      team: "Vision X Coders",
      project: 'PayMatrix "Fewer Transactions. Zero Confusion."',
      icon: <Trophy size={54} />,
      ring: "from-yellow-400 to-amber-500",
      glow: "shadow-[0_0_45px_rgba(250,204,21,0.45)]",
      order: "order-first md:order-2",
      lift: "md:mt-0",
    },
    {
      place: "3rd Place",
      team: "CodeAstra",
      project: "NagarFlow - Smart Governance Platform",
      icon: <Award size={44} />,
      ring: "from-amber-600 to-orange-700",
      glow: "shadow-[0_0_35px_rgba(217,119,6,0.35)]",
      order: "order-3 md:order-3",
      lift: "md:mt-16",
    },
  ];

  return (
    <section className="winners VIP bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-20 sm:px-20 px-6 py-16 font-inter">
      <div className="winner-heading mb-12">
        <SectionTitle>WINNERS</SectionTitle>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-center gap-6 md:gap-8">
        {winners.map((w) => (
          <div
            key={w.place}
            className={`${w.order} ${w.lift} w-full md:w-72 rounded-2xl border border-red-900/30 bg-black/40 backdrop-blur-sm px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:border-red-500/50`}
          >
            <div
              className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${w.ring} ${w.glow}`}
            >
              {w.icon}
            </div>
            <h3 className="text-xl font-bold">{w.place}</h3>
            <h4 className="mt-1 text-red-500 font-semibold">{w.team}</h4>
            <p className="mt-2 text-sm text-gray-300">{w.project}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winners;