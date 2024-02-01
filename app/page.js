"use client"


import Login from "@/Components/Login/Login";
import Logo from "../Assets/logo.svg";
import Image from "next/image";
import ActionMenu from "@/Components/ActionMenu/ActionMenu";
import Mask from "../Assets/mask.svg";

const Page = () => {
  return (
    <div className="flex w-full h-full">
      <h1>Add Policies</h1>
      <input type="file" />
      <button onClick={() => alert("Policy added to database")}>Submit</button>
    </div> 
  );
};

export default Page;
