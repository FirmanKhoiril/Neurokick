import { CiSettings } from "react-icons/ci";
import { useGlobalStore } from "../../context/useStore";

const Settings = () => {
  const { setOpenSettings, openSettings } = useGlobalStore();

  const toogleSetting = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <button className="btn__settings " onClick={toogleSetting} type="button">
      <CiSettings size={25} />
      <span className="md:block hidden">Settings</span>
    </button>
  );
};

export default Settings;
