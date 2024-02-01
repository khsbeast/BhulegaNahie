"use client"

import Logo from "../../Assets/logo.svg";
import countriesData from "./countries";
import Flag from "../../Assets/flag.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FileIcon from "../../Assets/file.jsx";
import InfoCircle from "../../Assets/info-circle.jsx";
import Happy from "../../Assets/happy.jsx";


const countries = (
  <select className="h-6 w-14 outline-none border-r pr-1" defaultValue="IN">
    {countriesData.map((country) => {
      return (
        <option
          key={country.code}
          value={country.code}
          className="text-base font-normal opacity-85"
        >
          {country.dial_code}
        </option>
      );
    })}
  </select>
);

const Page = () => {
  const [claimHover, setClaimHover] = useState(false); 
  const [surveyHover, setSurveyHover] = useState(false);

  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="w-full flex flex-col content-center h-full">
        <div className="flex items-center gap-1 justify-center pt-14">
          <Image src={Logo} alt="Bhulega Nahi" />
          <h1 className="text-3xl">Bhulega Nahi</h1>
        </div>
        <div className="flex flex-col content-center justify-center">
          <section className="flex justify-center pb-10 border-b border-grayLight">
            <div className="w-[420px] pt-[74px]">
              <h2 className="text-3xl font-semibold">Login</h2>
              <h2 className="text-sm font-normal pt-4 opacity-70 pb-3">
                Enter phone to continue
              </h2>
              <div className="border border-black border-opacity-15 h-[46px] rounded flex items-center gap-4">
                <div className="p-3 flex font-semibold">
                  <Image src={Flag} width={23} height={16} alt="flag" />
                  {countries}
                </div>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="h-6 w-full outline-none font-semibold"
                />
              </div>
              <Link href="/">
                <button className="bg-white text-sm font-semibold uppercase text-black border-opacity-15 border border-black opacity-65 w-full h-[46px] rounded mt-10 leading-5 hover:bg-blueprimary hover:text-[#fff] hover:border-blueprimary hover:opacity-100 hover:border-opacity-100">
                  Continue
                </button>
              </Link>
            </div>
          </section>
          <section className="flex justify-center mt-10">
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
                    style={
                      claimHover ? { color: "#fff" } : { color: "#3361E1" }
                    }
                  >
                    Claim assistance
                  </h2>
                </div>
                <InfoCircle
                  color={claimHover ? "#fff" : "#000"}
                  className="mr-4"
                />
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
                    style={
                      surveyHover ? { color: "#fff" } : { color: "#3361E1" }
                    }
                  >
                    Take the Survey
                  </h2>
                </div>
                <InfoCircle color={surveyHover ? "#fff" : "#000"} />
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="text-center mb-10 ">
        <span className="text-sm font-normal underline opacity-40">
          Terms of Use
        </span>
        <span className="text-sm font-normal underline opacity-40 ml-8">
          Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Page;
