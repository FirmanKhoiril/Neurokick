import { BlackLogo, WhiteLogo } from "../assets";
import { FaHistory, FaMicrophone } from "react-icons/fa";
import { useGlobalStore } from "../context/useStore";
import { useLocation, Link } from "react-router-dom";
import { ProfileUser, Settings } from ".";

const Sidebar = () => {
  const location = useLocation();
  const { dark, listening } = useGlobalStore();

  return (
    <aside className="sidebar__container relative">
      <div className="sidebar__topside">
        <div className={`sidebar__logo`}>
          <img src={dark ? WhiteLogo : BlackLogo} alt="NeuroKick Logo" width={38} height={50} />
          <h1 className="font-bold tracking-tight md:block hidden text-3xl">NeuroKick</h1>
        </div>
        <div className={`sidebar__links`}>
          <Link to={"/"}>
            <button type="button" className={` ${location.pathname === "/" ? "text-black/80 dark:text-gray" : "dark:text-[#667085] text-black/50"} btn__sidebar px-2 md:px-5 lg:px-8`}>
              <FaMicrophone size={20} />
              <span className="md:block hidden">Live Transcribing</span>
            </button>
          </Link>
          <Link to="/current-history">
            <button type="button" disabled={listening} className={`btn__sidebar px-2 md:px-5 lg:px-8 ${location.pathname === "/current-history" ? "text-black/80 dark:text-gray" : "dark:text-[#667085] text-black/50"}`}>
              <FaHistory size={20} />
              <span className="md:block hidden">Your History</span>
            </button>
          </Link>
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
