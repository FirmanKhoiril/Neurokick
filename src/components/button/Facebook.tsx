import { BsFacebook } from "react-icons/bs";

const Facebook = () => {
  return (
    <button type="button" className="bg-black/5 text-sm border border-[#98A2B3] dark:border-white/20 dark:bg-white/5 rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2">
      <BsFacebook size={20} color="#3b82f6" />
      <p className="sm:text-base text-[13px]">Sign in with Facebook</p>
    </button>
  );
};

export default Facebook;
