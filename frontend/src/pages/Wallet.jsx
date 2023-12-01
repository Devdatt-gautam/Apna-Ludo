import NavHeader from "./../components/NavHeader";
import time from "../assets/time-icon.svg";
import master from "../assets/mastercard_logo.svg";
const Wallet = () => {
  return (
    <main>
      <section className="section flex w-full h-screen ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] h-screen overflow-y-scroll no-scrollbar">
          <NavHeader />
          <div className="mx-4 min-h-[80vh]  flex flex-col items-center gap-4 p-4 max-md:px-0">
            <div className="border-[00000040] border-[1px] text-center py-3 my-4 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%] relative">
              <button>Order History</button>
              <img
                src={time}
                alt="history-icon"
                className="absolute left-10 top-[50%] translate-y-[-50%] w-[50px] max-md:w-[25px] max-md:left-5"
              />
            </div>

            <div className="w-full md:h-[340px] max-w-[580px] rounded-[2.5rem] add-card p-8 max-md:px-2 flex flex-col justify-between  ">
              <div className="flex items-start justify-between">
                <div className="text-gray-200 ">
                  <h4 className="font-extralight text-lg max-md:text-sm">
                    Current Balance
                  </h4>
                  <p className="text-5xl max-md:text-2xl">$4,570,80</p>
                </div>
                <div>
                  <img
                    src={master}
                    alt="mastercard"
                    className="w-[80px] max-md:w-[40px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-10 max-md:gap-6">
                <div>
                  <button className="py-3 max-md:px-4 bg-gradient-to-b from-[#F73207] to-[#C90327] rounded-xl text-white md:w-[230px] max-md:text-sm">
                    Add Cash
                  </button>
                </div>
                <div className="text-white text-lg max-md:text-sm flex justify-between w-full">
                  <p>5294 2436 4780 2468</p>
                  <p>12/24</p>
                </div>
              </div>
            </div>

            <div className="w-full md:h-[340px]  rounded-[2.5rem] withdraw-card p-8 max-md:px-2 flex flex-col justify-between max-w-[580px] ">
              <div className="flex items-start justify-between">
                <div className="text-gray-200 ">
                  <h4 className="font-extralight text-lg max-md:text-sm">
                    Current Balance
                  </h4>
                  <p className="text-5xl max-md:text-2xl">$4,570,80</p>
                </div>
                <div>
                  <img
                    src={master}
                    alt="mastercard"
                    className="w-[80px] max-md:w-[40px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-10 max-md:gap-6">
                <div>
                  <button className="py-3 max-md:px-4 bg-gradient-to-b from-[#F73207] to-[#C90327] rounded-xl text-white md:w-[230px] max-md:text-sm">
                    Withdraw
                  </button>
                </div>
                <div className="text-white text-lg max-md:text-sm flex justify-between w-full">
                  <p>5294 2436 4780 2468</p>
                  <p>12/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Wallet;
