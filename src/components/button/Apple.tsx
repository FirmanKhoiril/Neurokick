import { useGlobalStore } from "../../context/useStore";
import { AiFillApple } from "react-icons/ai";
const Apple = () => {
  const { dark } = useGlobalStore();
  return (
    <button type="button" className="bg-black/5 text-sm border border-[#98A2B3] dark:border-white/20 rounded-[6px] py-2 dark:bg-white/5 bg-white tracking-tight flex items-center gap-2 px-2">
      <AiFillApple size={25} color={dark ? "white" : "black"} />
      <p className="sm:text-base text-[13px]">Sign in with Apple</p>
    </button>
  );
};

export default Apple;
