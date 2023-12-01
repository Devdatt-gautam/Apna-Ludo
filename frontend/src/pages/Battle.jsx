import NavHeader from "../components/NavHeader";
import battle from "../assets/games.svg";
import i from "../assets/i-icon.svg";
import BattleCard from "../components/BattleCard";
import { Link } from "react-router-dom";
const Battle = () => {
  return (
    <main>
      <section className="section flex w-full h-screen ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] h-screen overflow-y-scroll no-scrollbar">
          <NavHeader />

          <div>
            <div className="bg-[#CA2525] text-white px-4 py-3 mx-2 text-center rounded-3xl">
              <p>
                हमारी वेबसाइट का कोई भी WhatApp and Instagram Group नहीं है और
                ना कोई channel है कोई भी अपना OTP या ID share न करें धन्यवाद |
              </p>
            </div>
            <div className="flex flex-col items-center mt-2">
              <p className="text-[#D3A2A2]">CREATE A BATTLE IN CASH ROUND</p>
              <div className="mt-2 flex gap-8">
                <button className="py-3 px-10 bg-white border-black border-[1.5px] rounded-xl text-[#957B7B] max-md:text-sm text-xl">
                  Amount
                </button>
                <button className="py-3 px-10 bg-gradient-to-b from-[#F73207] to-[#C90327] rounded-xl text-white  max-md:text-sm text-xl text-shadow-black-sm">
                  Set
                </button>
              </div>
            </div>

            <div className="border-black border-2  rounded-lg mx-2 mt-6 py-4 px-2">
              <div className="flex justify-between  items-center  ">
                <div className="flex items-end gap-2">
                  <img src={battle} alt="battles icon" />
                  <h4 className="text-[#1DC30F] text-xl">Open Battles</h4>
                </div>
                <div className="flex items-end gap-2">
                  <Link to="/rules">
                    {" "}
                    <p className="text-[#CA257E]">RULES</p>
                    <img src={i} alt="i-icon" />
                  </Link>
                </div>
              </div>

              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
              <BattleCard />
            </div>
          </div>
        </div>

        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Battle;
