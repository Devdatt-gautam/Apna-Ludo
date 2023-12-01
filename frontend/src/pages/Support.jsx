import NavHeader from "../components/NavHeader";
import support from "../assets/support-illustration.svg";
const Support = () => {
  return (
    <main>
      <section className="section flex w-full h-screen ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] h-screen overflow-y-scroll no-scrollbar">
          <NavHeader />
          <div className="mx-4 min-h-[80vh]  flex flex-col items-center gap-4 p-4 max-md:px-0">
            <div className="text-center md:text-lg">
              <img src={support} alt="illustration" />
              <h5 className="text-[#1DC30F] my-2">WhatsApp @ +918786858890</h5>
              <p className="text-[#D3A2A2] my-2">
                Support Timing Is Form 10:00 Am To 6:00 Pm{" "}
              </p>
              <p className="text-[#A70000] my-2">(Monday & Saturday)</p>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Support;
