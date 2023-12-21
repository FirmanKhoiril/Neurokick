import { MdLightMode } from "react-icons/md";
import { useGlobalStore } from "../context/useStore";
import { CiDark, CiLogout } from "react-icons/ci";

const SettingsPopup = () => {
  const { setIsAuth, setDark, dark, openSettings, setOpenSettings, setListening, setNamePersonCall } = useGlobalStore();

  const handleLogOut = () => {
    setIsAuth(false);
    setOpenSettings(false);
    setNamePersonCall("");
    setListening(false);
  };

  return (
    <div className={`${openSettings ? "translate-y-[0%]" : "translate-y-[134%]"} transition duration-200  settings__container`}>
      <button type="button" onClick={() => setDark(true)} className={`${dark ? "bg-black/10 dark:bg-white/10" : "bg-transparent"} flex items-center py-2 px-4  w-full rounded-lg gap-2`}>
        <CiDark size={22} />
        <span>Dark Mode</span>
      </button>
      <button type="button" onClick={() => setDark(false)} className={`${!dark ? "bg-black/10 dark:bg-white/10" : "bg-transparent"} flex items-center py-2 px-4  w-full rounded-lg gap-2`}>
        <MdLightMode size={22} />
        <span>Light Mode</span>
      </button>
      <button type="button" onClick={handleLogOut} className="flex items-center py-2 px-4 bg-black/10 dark:bg-white/10 w-full rounded-lg gap-2">
        <CiLogout size={22} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default SettingsPopup;
