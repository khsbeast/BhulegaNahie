"use client";

import React, { useState } from "react";
import FileIcon from "../../Assets/file.jsx";
import InfoCircle from "../../Assets/info-circle.jsx";
import Happy from "../../Assets/happy.jsx";

const ActionMenu = () => {
  const [claimHover, setClaimHover] = useState(false);
  const [surveyHover, setSurveyHover] = useState(false);
  return (
    <div className="w-[420px]">
      <button
        onMouseLeave={() => setClaimHover(false)}
        onMouseEnter={() => setClaimHover(true)}
        className="flex justify-between items-center bg-white text-sm font-semibold uppercase text-black border border-blueprimary pl-4 w-full h-[46px] rounded mt-10 leading-5 hover:bg-blueprimary hover:border-blueprimary hover:opacity-100 hover:border-opacity-100"
      >
        <div className="flex gap-3 items-center">
          <FileIcon color={claimHover ? "#fff" : "#3361E1"} />
          <h2
            className="text-blueprimary text-sm leading-5 font-semibold"
            style={claimHover ? { color: "#fff" } : { color: "#3361E1" }}
          >
            Claim assistance
          </h2>
        </div>
        <InfoCircle color={claimHover ? "#fff" : "#000"} className="mr-4" />
      </button>
      <button
        onMouseLeave={() => setSurveyHover(false)}
        onMouseEnter={() => setSurveyHover(true)}
        className="mt-4 flex justify-between items-center bg-white text-sm font-semibold uppercase text-black border border-blueprimary pl-4 w-full h-[46px] rounded leading-5 hover:bg-blueprimary hover:border-blueprimary hover:opacity-100 hover:border-opacity-100"
      >
        <div className="flex gap-3 items-center">
          <Happy color={surveyHover ? "#fff" : "#3361E1"} />
          <h2
            className="text-blueprimary text-sm leading-5 font-semibold"
            style={surveyHover ? { color: "#fff" } : { color: "#3361E1" }}
          >
            Take the Survey
          </h2>
        </div>
        <InfoCircle color={surveyHover ? "#fff" : "#000"} />
      </button>
    </div>
  );
};

export default ActionMenu;
