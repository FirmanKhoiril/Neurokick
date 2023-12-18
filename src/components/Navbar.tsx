import { BlackWallet, WhiteWallet } from "../assets";
import { useGlobalStore } from "../context/useStore";

const Navbar = () => {
  const { dark } = useGlobalStore();
  return (
    <nav className="nav__container">
      <p className="text-[12px] md:text-sm lg:text-base">7 free Transcriptions Remaining</p>
      <button className="btn__uprade__premium" type="button">
        <img width={25} className="w-[23px] md:w-[25px]" src={dark ? WhiteWallet : BlackWallet} alt="Credit Card Wallet" />
        <span>Uprade to Premium</span>
      </button>
    </nav>
  );
};

export default Navbar;
