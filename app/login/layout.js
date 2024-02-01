import Mask from "../../Assets/mask.svg"
import Image from "next/image";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LoginLayout({ children }) {
  return (
    <div className="flex w-full h-full">
      {children}
      <div className="w-1/2 bg-[linear-gradient(180deg,_#0575E6_0%,_#02298A_84.79%,_#021B79_100%)] relative">
        <Image src={Mask} alt="mask" className="absolute bottom-0 right-0 " />
      </div>
    </div>
  );
}
