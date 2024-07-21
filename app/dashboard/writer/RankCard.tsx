import React from "react";
import { MdStar } from "react-icons/md";
import "./writer.css";

const RankCard = () => {
  // To be gotten from the DB
  const experience = {
    experienceLevel: "Expert",
    XP: 500,
  };

  return (
    <div className="card bg-white p-2 rounded-lg shadow-md">
      <div className="flex items-center justify-between gap-1 md:gap-3 text-xs md:text-xl">
        <h3 className=" font-semibold">{experience.experienceLevel}</h3>
        <p className="text-gray-700">{experience.XP} XP</p>
      </div>
      <div className="flex mb-2 text-yellow-400">
        <MdStar />
        <MdStar />
        <MdStar />
      </div>
      <div className="progress mb-1">
        <div className="progress-bar" style={{ width: "50%" }}></div>
      </div>
    </div>
  );
};

export default RankCard;
