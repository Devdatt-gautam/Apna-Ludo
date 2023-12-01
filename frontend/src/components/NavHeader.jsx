import hamburger from "../assets/hamburger.svg";
import navProfile from "../assets/navProfile.svg";
import navMoney from "../assets/navMoney.svg";
import NavCard from "./NavCard";
import profile from "../assets/profile.svg";
import cash from "../assets/cash.svg";
import wallet from "../assets/wallet.svg";
import games from "../assets/games.svg";
import transaction from "../assets/transaction.svg";
import refer from "../assets/refer.svg";
import referral from "../assets/referral.svg";
import penalty from "../assets/penalty.svg";
import notification from "../assets/notification.svg";
import support from "../assets/support.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavHeader = () => {
  const [visible, setVisible] = useState("hidden");
  const hamburgerClick = () => {
    if (visible === "hidden") {
      setVisible("");
    } else {
      setVisible("hidden");
    }
  };
  return (
    <header className=" flex items-center py-2 px-8 justify-between shadow-md shadow-[#6D2A2A40] rounded-b-3xl fixed top-0  left-0 z-[100] bg-white w-[inherit] mx-auto">
      <div className="flex  gap-4 cursor-pointer">
        <img
          src={hamburger}
          alt="hamburger-menu"
          width={40}
          onClick={hamburgerClick}
        />
        <img
          src={navProfile}
          alt="logo-icon"
          className="w-[60px] max-md:w-[30px]"
        />
      </div>
      <nav
        className={`absolute top-20 w-[100%] max-w-xl right-0 py-4 px-12 bg-white h-[80vh] overflow-y-scroll no-scrollbar ${visible}`}
        onClick={hamburgerClick}
      >
        <Link to="/profile">
          <NavCard icon={profile} text="my profile" />
        </Link>
        <NavCard icon={cash} text="win cash" />
        <Link to="/wallet">
          <NavCard icon={wallet} text="my wallet" />
        </Link>
        <NavCard icon={games} text="games history" />
        <NavCard icon={transaction} text="transaction history" />
        <NavCard icon={refer} text="refer & earn" />
        <NavCard icon={referral} text="referral history" />
        <NavCard icon={penalty} text="penalty history" />
        <NavCard icon={notification} text="notification" />
        <NavCard icon={support} text="support" />
      </nav>
      <div className="cursor-pointer">
        <img
          src={navMoney}
          alt="transation-menu"
          className="w-[150px] max-md:w-[85px]"
        />
      </div>
    </header>
  );
};

export default NavHeader;
