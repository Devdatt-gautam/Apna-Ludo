import NavHeader from "../components/NavHeader";
import ring from "../assets/gray-ring.svg";
import classic from "../assets/ludo-classic.svg";
import t1 from "../assets/ludo-tournament-1.svg";
import t2 from "../assets/ludo-tournament-2.svg";
import big from "../assets/earn-big.png";
import apnaLudo from "../assets/footer-img.svg";
import { Link } from "react-router-dom";
const Home = () => {
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
            <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-2 bg-[#00000025] py-4 mx-2 my-6 px-6 rounded-[2.5rem]">
              <h6 className="text-[#1DC30F] text-3xl text-shadow-black-lg">
                KYC Pending !
              </h6>
              <button className="py-3 px-10 bg-gradient-to-b from-[#F73207] to-[#C90327] rounded-xl text-white  max-md:text-sm text-shadow-black-sm">
                Complete Here
              </button>
            </div>
            <div className="mx-2">
              <h3 className="text-[#1DC30F] text-3xl text-shadow-black-lg">
                Our Games
              </h3>
              <div className="flex gap-3 my-2 px-4">
                <img src={ring} alt="ring" width={15} />
                <p className="text-[#00CB76]">Ludo Classic Only (Live)</p>
              </div>
              <div className="flex gap-4 ">
                <Link to="/battle">
                  <button>
                    <img src={classic} alt="ludo-classic" className="" />
                  </button>
                </Link>
                <button className="relative">
                  <img src={t1} alt="ludo-tournament" className="" />
                  <img
                    src={t2}
                    alt="ludo-tournament-2"
                    className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[70%]"
                  />
                </button>
                <button>
                  <img src={big} alt="Earn big" className="" />
                </button>
              </div>
            </div>
          </div>
          <footer className="flex items-start justify-evenly my-2 py-16 mx-4 rounded-[2rem] max-md:flex-wrap ">
            <img src={apnaLudo} alt="ApnaLudo icon" />

            <ul className="text-center flex flex-col gap-6 max-md:gap-4">
              <li className="capitalise ">
                <Link to="/about">About Us</Link>
              </li>
              <li className="capitalise ">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="capitalise ">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="capitalise ">
                <Link to="/commision">Platform Commission</Link>
              </li>
            </ul>
            <ul className="text-center flex flex-col gap-6 max-md:gap-4 max-md:mt-4">
              <li className="capitalise ">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li className="capitalise ">
                <Link to="/refund">Refund / Cancellation Policy</Link>
              </li>
              <li className="capitalise ">
                <Link to="/responsible">Responsible Gaming</Link>
              </li>
            </ul>
          </footer>
        </div>

        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Home;
