// import { useGoogleLogin } from '@react-oauth/google'
import { LogoGoogle } from "../../assets";
// import { useGlobalStore } from '../../useStore'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'sonner'

const Google = () => {
  return (
    <button type="button" className="bg-black/5 text-sm border border-[#98A2B3] dark:border-white/20 dark:bg-white/5 rounded-[6px] py-2 bg-white tracking-tight flex items-center gap-2 px-2">
      <img src={LogoGoogle} height={30} width={25} alt="Google Logo" />
      <p className="sm:text-base text-[13px]">Sign in with Google</p>
    </button>
  );
};

export default Google;
