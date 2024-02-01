import React from "react";
import countriesData from "./countries";
import Flag from "../../Assets/flag.svg";
import Image from "next/image";
import Link from "next/link";

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

const Login = () => {
  return (
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
  );
};

export default Login;
