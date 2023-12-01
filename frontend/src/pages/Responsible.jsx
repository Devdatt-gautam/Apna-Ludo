import NavHeader from "../components/NavHeader";
import responsible from "../assets/games.svg";

const Responsible = () => {
  return (
    <main className="px-2 pb-4 relative">
      <NavHeader />
      <section className="section">
        <div className="flex gap-4 mt-24 max-md:mt-20 px-4 max-md:justify-center max-md:gap-2 max-md:items-end">
          <img src={responsible} alt="responsible-icon" />
          <h2 className="text-[#1DC30F] md:text-xl ">Responsible gaming</h2>
        </div>
        <div>
          <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
            Play Games 24x7 encourages all its players to play responsibly. We
            are committed to helping players who wish to stop playing or who
            wish to limit the amount that they play.
            <br />
            Ensure Responsible Play
          </p>
          <ul className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify list-disc list-inside">
            <li>
              Players must be 18 years of age to play skill games for real
              money.
            </li>
            <li>
              Players can request for their accounts to be temporarily blocked,
              if they want to self-exclude themselves for some time.
            </li>
            <li>
              Players can follow our &apos;Guide to Responsible Play&apos; in
              order to keep a check on their play behaviour.
            </li>
          </ul>
          <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
            {" "}
            Recognize whether you are not playing responsibly.
            <br />
            Do you do any of the following:
          </p>
          <ul className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify list-disc list-inside">
            <li>
              Do you spend more money and time than you intend to playing games?{" "}
            </li>
            <li>Do you feel guilty or ashamed while game playing habits?</li>
            <li>Do you try to win back your losses?</li>
            <li>
              Do you miss important things in life such as family time, work,
              leisure activities, appointments to play games?
            </li>
            <li>Do you think about your gameplay all day long?</li>
            <li>
              Do you have arguments with friends or family about you playing
              habits?
            </li>
            <li>Do you lie or steal to get money to play games?</li>
            <li>Do you have debts or struggled financially to play games?</li>
            <li>
              Has playing games negatively impacted your professional life?
            </li>
            <li>
              Do you have relationship problems like arguments, disagreements or
              loss of Connection with friends and family?
            </li>
            <li>
              Have you experienced an increase in stress, depression or panic
              attacks due to playing games?
            </li>
          </ul>
          <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
            Game Prudence
            <br />
            Game Prudence is an independent body which aims to help players,
            playing on skill-gaming websites, in incorporating responsible
            gaming habits into their lifestyles. Game Prudence is a
            non-judgemental platform providing you with private, confidential
            and free of cost psychological counselling, wherein you can identify
            how healthy your gaming habits are aswell as receive professional
            guidance from experts. All Game Prudence experts are certified by
            iGaming Academy. To Learn More.. <br />
            Get Help from Game Prudence.
            <br />
            If you suspect that you are facing any of the issues mentioned above
            and as a result have not been playing responsibly,
            <br />
            or if you know someone who is facing similar issues, kindly seek
            help immediately. You can get help by registering your request at
            Game Prudence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Responsible;
