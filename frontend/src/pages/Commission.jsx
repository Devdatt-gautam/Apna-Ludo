import NavHeader from "../components/NavHeader";
import commision from "../assets/games.svg";

const Commission = () => {
  return (
    <main className="px-2 pb-4 relative">
      <NavHeader />
      <section className="section">
        <div className="flex gap-4 mt-24 max-md:mt-20 px-4 max-md:justify-center max-md:gap-2 max-md:items-end">
          <img src={commision} alt="commission-icon" />
          <h2 className="text-[#1DC30F] md:text-xl ">Platform Commission</h2>
        </div>
        <div>
          <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
            Platfrom commission is taken by each participant equally in every
            contest or battle. Commission of any battle/contest is shown to
            participant before joining the contest/battle. Below 200 cash games
          </p>
          <ul className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify list-disc list-inside">
            <li>
              We charge flat 10% commission on each battle.
              <br /> Above 200 & Below 500 cash games
            </li>
            <li>
              We charge flat 25 coin commission on each battle.
              <br /> Above 500 cash games
            </li>
            <li>We charge flat 5% commission on each battle.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Commission;
