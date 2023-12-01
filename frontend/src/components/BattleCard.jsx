import cash from "../assets/cash-icon.svg";
const BattleCard = () => {
  return (
    <div>
      {" "}
      <div className="mt-4 bg-[#EEEEEE6E] border-black border-[0.1px] rounded-lg p-2 my-2">
        <p className="text-[#1DC30F]">
          CREATE A BATTLE IN CASH ROUND{" "}
          <span className="text-[#2758D5]">100+ SE AANA WARNA CANCEL</span>{" "}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between bg-[#EEEEEE43] px-4 border-black border-[0.1px] rounded-lg max-md:flex-col">
          <div className="flex gap-16 my-2 py-2">
            <div>
              <h6 className="text-[#00CB76]">ENTRY FEE</h6>
              <div className="flex gap-2">
                <img src={cash} alt="cash-icon" />
                <p>200</p>
              </div>
            </div>
            <div>
              <h6 className="text-[#00CB76]">PRIZE</h6>
              <div className="flex gap-2">
                <img src={cash} alt="cash-icon" />
                <p>200</p>
              </div>
            </div>
          </div>
          <button className="py-3 px-10 bg-gradient-to-b from-[#F73207] to-[#C90327] rounded-xl text-white  max-md:text-sm text-2xl text-shadow-black-sm max-md:mb-2">
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default BattleCard;
