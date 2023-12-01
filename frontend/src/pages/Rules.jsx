import NavHeader from "./../components/NavHeader";
import rules from "../assets/games.svg";
const Rules = () => {
  return (
    <main>
      <section className="section flex w-full  ">
        <div className="flex-1 pt-24 max-md:pt-16   pb-4 lg:w-[50%] w-[100%] ">
          <NavHeader />
          <div className="flex gap-2 items-end px-4 ">
            <img src={rules} alt="rules-icon" />
            <h2 className="text-[#1DC30F] md:text-xl ">Ludo Rules</h2>
          </div>
          <ol className="px-4 py-4 list-decimal list-inside flex flex-col gap-2">
            <li>Game will be conducted between 2 players.</li>
            <li>Game will be conducted between 2 players.</li>
            <li>
              You will get &quot;SIX&quot; on dice roll, if your dice roll not
              got &quot;SIX&quot; for consecutive 10 turns.
            </li>
            <li>
              For every turn in game, user have 30 seconds to play move, else
              your token will get moved automatically.
            </li>
            <li>
              On disconnect/leaving from game, your turn will be automatically
              played for max 5 times.
            </li>
            <li>
              On sixth (6th) miss/timeout move, player will be considered as
              looser.
            </li>
            <li>
              If all your tokens are at home and your opponent get disconnected,
              game will be considered as &quot;cancelled&quot;.
            </li>
            <li>
              If your opponent leaves/disconnect from game at starting or middle
              of game, result will be declared as 100% win.
            </li>
            <li>
              A player must have to record every game, and if any player is
              hacking or cheating in a game, please contact support with video
              proof.
            </li>
            <li>
              If you don&apos;t have any proof against player cheating and error
              in the game, then you will be considered as lost for a particular
              battle.
            </li>
          </ol>
        </div>
        <div className="max-lg:hidden flex-1 rules-bg h-auto  min-h-screen "></div>
      </section>
    </main>
  );
};

export default Rules;
