import NavHeader from "../components/NavHeader";
import refund from "../assets/games.svg";

const Refund = () => {
  return (
    <main className="px-2 pb-4 relative">
      <NavHeader />
      <section className="section">
        <div className="flex gap-4 mt-24 max-md:mt-20 px-4 max-md:justify-center max-md:gap-2 max-md:items-end">
          <img src={refund} alt="refund-icon" />
          <h2 className="text-[#1DC30F] md:text-xl ">Platform Commission</h2>
        </div>
        <div>
          <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[70%]   mx-auto text-justify">
            Thanks for being a patron with ApnaLudo. If you are not entirely
            satisfied with your subscription, we are here to help.
            <br />
            Refund
            <br />
            Once we receive your Refund request, we will inspect it and notify
            you on the status of your refund. If your refund request is
            approved, we will initiate a refund to your credit card (or original
            method of payment) within 7 working days. You will receive the
            credit within a certain amount of days, depending on your card
            issuer&apos;s policies. In case of unforeseen technical glitch,
            ApnaLudo would refund subscription upon reviewing the complaint.
            Final decision lies with the company.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Refund;
