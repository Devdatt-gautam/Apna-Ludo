import NavHeader from "../components/NavHeader";
const About = () => {
  return (
    <main className="px-2 pb-4 relative">
      <NavHeader />
      <section className="section  mt-24 max-md:mt-20 px-4">
        <h3 className="md:text-3xl text-xl text-[#1DC30F] text-center mt-4">
          About Us
        </h3>
        <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto  text-center">
          Apna Ludo is a real-money gaming product owned (&quot;Apna Ludo&quot;
          or &quot;We&quot; or &quot;Us&quot; or &quot;Our&quot;).
        </p>
        <h3 className="md:text-3xl text-xl text-[#1DC30F] text-center mt-4">
          Our Business & Products{" "}
        </h3>
        <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
          We are an HTML5 game-publishing company and our mission is to make
          accessing games fast and easy by removing the friction of
          app-installs. Apna Ludo is a skill-based real-money gaming platform
          accessible only for our users in India. It is accessible on{" "}
          <a href=" https://www.apnaludo.com" className="text-[#1E7752]">
            {" "}
            https://www.apnaludo.com
          </a>
          . On Apna Ludo, users can compete for real cash in Tournaments and
          Battles. They can en-cash their winnings via popular options such as
          Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.
        </p>
        <h3 className="md:text-3xl text-xl text-[#1DC30F] text-center mt-4">
          Our Games{" "}
        </h3>
        <p className="text-[#00CB76] text-sm p-4 md:text-lg leading-7 md:max-w-[80%]   mx-auto text-justify">
          Apna Ludo has a wide-variety of high-quality, premium HTML5 games. Our
          games are especially compressed and optimised to work on low-end
          devices, uncommon browsers, and patchy internet speeds.
          <br />
          <br />
          We have games across several popular categories: Arcade, Action,
          Adventure, Sports & Racing, Strategy, Puzzle & Logic. We also have a
          strong portfolio of multiplayer games such as Ludo, Chess, 8 Ball
          Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more!
          Some of our popular titles are: Escape Run, Bubble Wipeout, Tower
          Twist, Cricket Gunda, Ludo With Friends. If you have any suggestions
          around new games that we should add or if you are a game
          developeryourself and want to work with us, don&apos;t hesitate to
          drop in a line at <span>info@apnaludo.com</span>!
        </p>
      </section>
    </main>
  );
};

export default About;
