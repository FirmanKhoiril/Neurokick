import { BlackLogo, WhiteLogo } from "../assets";
import { FaHistory, FaMicrophone } from "react-icons/fa";
import { useGlobalStore } from "../context/useStore";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ProfileUser, Settings } from ".";
import { toast } from "sonner";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { dark, listening } = useGlobalStore();

  const handleIsTranscribingOn = () => {
    if (listening) {
      toast.error("You must stop transcribing to see your history");
    } else {
      navigate("/current-history");
    }
  };

  return (
    <aside className="sidebar__container relative">
      <div className="sidebar__topside">
        <div className={`sidebar__logo`}>
          <img src={dark ? WhiteLogo : BlackLogo} alt="NeuroKick Logo" width={38} height={50} />
          <h1 className="font-bold tracking-tight md:block hidden text-3xl">NeuroKick</h1>
        </div>
        <div className={`sidebar__links`}>
          <Link to={"/"}>
            <button type="button" className={` ${pathname === "/" ? "text-black/80 dark:text-gray" : "dark:text-[#667085] text-black/50"} btn__sidebar px-2 md:px-5 lg:px-8`}>
              <FaMicrophone size={20} />
              <span className="md:block hidden">Live Transcribing</span>
            </button>
          </Link>

          {/*  disabled={listening} */}
          <button type="button" onClick={handleIsTranscribingOn} className={`btn__sidebar px-2 md:px-5 lg:px-8 ${pathname === "/current-history" ? "text-black/80 dark:text-gray" : "dark:text-[#667085] text-black/50"}`}>
            <FaHistory size={20} />
            <span className="md:block hidden">Your History</span>
          </button>
        </div>
      </div>

      <div className="sidebar__bottomside ">
        <ProfileUser />
        <Settings />
      </div>
    </aside>
  );
};

export default Sidebar;
