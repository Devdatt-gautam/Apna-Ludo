import arrow from "../assets/arrow-nav.svg";
// eslint-disable-next-line react/prop-types
const NavCard = ({ icon, text }) => {
  return (
    <div className="bg-[#E5EDB242] flex p-2 justify-between border-[0.1px] border-[#67B95940] rounded-lg items-center shadow-[#67B95940] shadow-lg my-2 cursor-pointer">
      <div className="flex gap-4 items-center">
        <img src={icon} alt={text} width={32} />
        <h4 className="capitalize text-[#1DC30F] text-sm">{text}</h4>
      </div>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default NavCard;
