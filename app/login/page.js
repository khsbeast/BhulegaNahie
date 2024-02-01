import Login from "@/Components/Login/Login";
import Logo from "../../Assets/logo.svg";
import Image from "next/image";
import ActionMenu from "@/Components/ActionMenu/ActionMenu";

const Page = () => {
  return (
      <div className="flex flex-col w-1/2 h-full">
        <div className="w-full flex flex-col content-center h-full">
          <div className="flex items-center gap-1 justify-center pt-14">
            <Image src={Logo} alt="Bhulega Nahi" />
            <h1 className="text-3xl">Bhulega Nahi</h1>
          </div>
          <div className="flex flex-col content-center justify-center">
            <section className="flex justify-center pb-10 border-b border-grayLight">
              <Login />
            </section>
            <section className="flex justify-center mt-10">
              <ActionMenu />
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
