import NavHeader from "./../components/NavHeader";
import profile from "../assets/navProfile.svg";
import edit from "../assets/edit.png";
const Rules = () => {
  return (
    <main>
      <section className="section flex w-full h-screen ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] h-screen overflow-y-scroll no-scrollbar">
          <NavHeader />
          <div className="mx-4 min-h-[80vh] border-black border-[1px] rounded-2xl shadow-[#00000040] shadow-xl flex flex-col items-center py-4 ">
            <div className="flex flex-col gap-2 ">
              <img src={profile} alt="profile pic" className="w-[150px]" />
              <h5 className="text-[#D3A2A2] text-xs text-center">6756587878</h5>
              <div className="relative">
                <h4 className="text-[#1DC30F] text-center text-xl">
                  Jatin Sharma
                </h4>
                <img
                  src={edit}
                  alt="edit"
                  className="w-[21px] absolute top-[50%] translate-y-[-50%] right-[-20px]"
                />
              </div>
            </div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-2 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>My wallet</button>
            </div>
            <div className="w-[90%] h-[10px] bg-[#E2E2E2] rounded-full  my-2"></div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-2 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>Complete KYC</button>
            </div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-2 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>Update Email ID</button>
            </div>
            <div className="w-[90%] h-[10px] bg-[#E2E2E2] rounded-full  my-2"></div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-2 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>Cash Won</button>
            </div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-2 text-[#1DC30F] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>Battle played</button>
            </div>
            <div className="w-[90%] h-[10px] bg-[#E2E2E2] rounded-full my-2"></div>
            <div className="border-[00000040] border-[1px] text-center py-3 my-4 text-[#D3A2A2] text-lg rounded-2xl shadow-md shadow-[#00000040] w-[85%]">
              <button>Logout</button>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden flex-1 rules-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Rules;
