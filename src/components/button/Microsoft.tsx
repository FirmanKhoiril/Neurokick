import { MicrosoftLogo } from "../../assets";

const Microsoft = () => {
  return (
    <button type="button" className="bg-black/5 text-sm border border-[#98A2B3] rounded-[6px] py-2 dark:bg-white/5 dark:border-white/20 bg-white tracking-tight flex items-center gap-2 px-2">
      <img src={MicrosoftLogo} height={30} width={22} alt="Google Logo" />
      <p className="sm:text-base text-[13px]">Sign in with Microsoft</p>
    </button>
  );
};

export default Microsoft;
