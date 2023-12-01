import NavHeader from "../components/NavHeader";
import penalty from "../assets/penalty-history-illustration.svg";
const PenaltyHistory = () => {
  return (
    <main>
      <section className="section flex w-full h-screen ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] h-screen overflow-y-scroll no-scrollbar">
          <NavHeader />
          <div className="mx-4 min-h-[80vh]  flex flex-col items-center gap-4 p-4 max-md:px-0">
            <div className="text-center md:text-lg">
              <img src={penalty} alt="illustration" />
              <h5 className="text-[#1DC30F]">No Transactions Yet.</h5>
              <p className="text-[#D3A2A2]">
                Seems like you haven&apos;t done any activity yet
              </p>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default PenaltyHistory;
