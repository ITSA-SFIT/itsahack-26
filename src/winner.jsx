
import React from "react";
import "./winner.css";
import {
  Trophy,
  Medal,
  Award,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Winners = () => {
  return (
    <section className="winners VIP bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-20 sm:px-20 px-6 py-8 font-inter">
      <div className="winner-heading">
        <SectionTitle>WINNERS</SectionTitle>
       
      </div>

      <div className="podium">
        {/* 2nd Place */}
        <div className="podium-card second">
          <div className="icon silver">
            <Medal size={50} />
          </div>
          <h3>2nd Place</h3>
          <h4>Sankalpsquad</h4>
          <p>CivicResource.ai-Intelligent Complaint Managment</p>
        </div>

        {/* 1st Place */}
        <div className="podium-card first">
          <div className="icon gold">
            <Trophy size={60} />
          </div>
          <h3>1st Place</h3>
          <h4>Vision X Coders</h4>
          <p>PayMatrix "Fewer Transaction.Zero Confusion"</p>
        </div>

        {/* 3rd Place */}
        <div className="podium-card third">
          <div className="icon bronze">
            <Award size={50} />
          </div>
          <h3>3rd Place</h3>
          <h4>CodeAstra</h4>
          <p>NagarFlow-Smart Governance Platform</p>
        </div>
      </div>
    </section>
  );
};

export default Winners;