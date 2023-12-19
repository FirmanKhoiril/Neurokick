import { useGlobalStore } from "../../context/useStore";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const { showPassword, setShowPassword, setIsSignup, setIsAuth } = useGlobalStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAuth(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold text-black/80 dark:text-gray tracking-tight">
          Name*
        </label>
        <input type="text" id="name" placeholder="Enter your name" required className="register__input" />
      </div>
      <div className="flex flex-col pt-1.5 gap-2">
        <label htmlFor="email" className="font-semibold text-black/80 dark:text-gray ">
          Email*
        </label>
        <input type="email" id="email" placeholder="Enter your email" required className="register__input" />
      </div>
      <div className="flex flex-col relative pt-1.5 gap-2">
        <label htmlFor="password" className="font-semibold text-black/80 dark:text-gray">
          Password*
        </label>
        <input type={showPassword ? "text" : "password"} id="password" placeholder="Create a password" required className="register__input" />
        <button type="button" className="absolute bottom-3 right-4" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
      <div className="pt-1 pb-4">
        <p className="text-[11px] dark:text-white/80 text-black/80">Must be 8 characters.</p>
      </div>
      <button type="submit" className="bg-primary rounded-[6px] py-3 mt-2 text-white text-[12px] w-full">
        Sign up
      </button>
      <div className="w-full justify-center flex pt-4">
        <p className="dark:text-white/30 text-black/40">Already have an account?</p>
        <button
          type="button"
          className="pl-2 tracking-tight font-semibold text-blue-500"
          onClick={() => {
            setIsSignup(false);
            setShowPassword(false);
          }}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignUp;
