import Signup from "./Signup";
import Signin from "./Signin";
import { BlackLogo, WhiteLogo } from "../../assets";
import { useGlobalStore } from "../../context/useStore";
import { Apple, Facebook, FooterLinks, Google, Microsoft } from "../../components";

const Register = () => {
  const { isSignup, dark } = useGlobalStore();

  return (
    <section className={` ${dark ? "dark " : "light"} max-h-screen w-full `}>
      <div className="dark:text-gray min-h-screen  dark:bg-gradient-to-b from-[#3E404C_11.99%] to-[#18191d_81.92%]  bg-gray text-black">
        <div className="w-full sm:w-[60%] md:w-[55%] lg:w-[35%] sm:px-0 px-7 pb-14 pt-8 md:pt-10 lg:pt-16 flex-col justify-between flex mx-auto h-screen">
          <div className="">
            <div className={`flex ${isSignup ? "pb-5" : "pb-8"} justify-center gap-2.5`}>
              <img src={dark ? WhiteLogo : BlackLogo} alt="NeuroKick Logo" width={45} height={50} />
              <h1 className="font-bold tracking-tight text-4xl">NeuroKick</h1>
            </div>
            {isSignup ? <Signup /> : <Signin />}
            <p className=" text-center text-gray-500 pt-6">or</p>
          </div>
          <div className=" grid grid-cols-2 grid-rows-2 items-center gap-2">
            <Google />
            <Apple />
            <Facebook />
            <Microsoft />
          </div>
          <FooterLinks />
        </div>
      </div>
    </section>
  );
};

export default Register;
