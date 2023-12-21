import { useGlobalStore } from "../../context/useStore";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
  const { showPassword, setShowPassword, setIsSignup, setIsAuth } = useGlobalStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-black/80 dark:text-gray">
          Email*
        </label>
        <input type="email" id="email" placeholder="Enter your email" required className="register__input" />
      </div>
      <div className="flex flex-col relative pt-3 gap-2">
        <label htmlFor="password" className="font-semibold text-black/80 dark:text-gray">
          Password*
        </label>
        <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" required className="register__input" />
        <button type="button" className="absolute bottom-3 right-4" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
      <div className="pt-2 pb-6 flex justify-between items-center">
        <div className="flex relative items-center gap-2">
          <input type="checkbox" className=" border-[#616370] checked:border-[#7b7575] peer rounded-sm border w-4 h-4  appearance-none" />
          <svg
            className="
      absolute top-0 left-[2px]
      w-3 h-3 mt-1
      hidden peer-checked:block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <p className="text-[13px] text-black/70 dark:text-white/70">Remember me</p>
        </div>
        <a href="#" className="text-[12px] hover:underline text-black/70 dark:text-white/70 hover:text-black cursor-pointer">
          Forgot Password ?
        </a>
      </div>
      <button type="submit" className="bg-primary rounded-[6px] py-3 mt-4 text-white text-[12px] w-full">
        Log in
      </button>
      <div className="w-full justify-center flex pt-4">
        <p className="dark:text-white/30 text-black/50">Don't have an account?</p>
        <button type="button" className="pl-2 tracking-tight font-semibold text-blue-500" onClick={() => setIsSignup(true)}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignIn;
