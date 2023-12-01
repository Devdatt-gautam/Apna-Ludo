import moneyImg from "../assets/login-bg-money.png";
import apnaLudo from "../assets/login-apna-ludo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [visible, setVisible] = useState("hidden");
  const [buttonText, setButtonText] = useState("Get OTP");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (buttonText === "Get OTP") {
      setVisible(" ");
      setButtonText("Submit");
      return;
    } else {
      setVisible("hidden");
      navigate("/about");
      setButtonText("Get OTP");
    }
  };
  return (
    <section className="min-w-[100vw] min-h-[100vh] text-shadow-black-lg flex ">
      <div className="w-[100%] min-h-[100vh] bg-[url('./assets/login-bg.png')] bg-no-repeat bg-cover bg-center  p-8 relative md:w-[50%]">
        <h3 className="font-poetsenone text-white text-2xl lg:text-4xl font-normal  text-center mt-8 mb-4">
          Welcome To Apna Ludo
        </h3>
        <form className="bg-[#58DA65BD] flex flex-col items-center gap-4 lg:gap-8  min-h-[200px] rounded-3xl max-w-lg mx-auto">
          <h4 className="text-white  text-lg lg:text-2xl mt-8 ">
            Sign In Or Sign Up
          </h4>
          <div className="min-w-[70%] relative ">
            <input
              className="bg-[#96CBE9] border-[#0029FF] border-2  h-8 rounded-lg text-xs lg:text-md text-white placeholder:text-white w-full placeholder:text-center text-center text-shadow-black-sm mx-auto "
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="enter mobile number"
            />
            <span className="text-2xl text-white absolute left-4">+91</span>
          </div>
          <input
            className={`bg-[#96CBE9] border-[#0029FF] border-2  h-8 rounded-lg text-xs lg:text-md min-w-[70%] text-white placeholder:text-white placeholder:text-center text-center ${visible} text-shadow-black-sm `}
            type="number"
            name="otp"
            id="otp"
            placeholder="enter OTP"
          />
          <button
            style={{ boxShadow: "0px 5px 2px green" }}
            className="block bg-gradient-to-b from-[#07F728] to-[#03C91E] py-2 px-10 text-lg capitalize text-white mb-4 rounded-2xl border-gray-300 border-[1px]  "
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </form>
        <div>
          <p className="text-white text-xs md:text-md mt-2 max-w-lg mx-auto lg:text-lg">
            By proceeding, you agree to our
            <Link to="/privacy">
              <span className="text-[#10E057] text-xs md:text-md lg:text-lg text-shadow-black-lg">
                {"  "}
                Terms Of Use Privacy Policy{"  "}
              </span>
            </Link>
            and that you are 18 years or older. You are not playing from Assam,
            Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana.
          </p>
          <img
            src={moneyImg}
            alt="money image"
            className="absolute bottom-0 right-0 w-[150px] "
          />
        </div>
      </div>
      <div className="max-md:hidden w-[50%] p-2 grid place-content-center">
        <img src={apnaLudo} alt="Apna Ludo" />
      </div>
    </section>
  );
};

export default LoginPage;
