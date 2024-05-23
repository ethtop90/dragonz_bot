import EarnedBackground from "./../assets/images/earned-background.png";
import Logo from "./../assets/images/logo.png";
import Fund from "./../assets/images/fund.png";
import Hero from "./../assets/images/hero.png";
import HeroForeground from "./../assets/images/hero-foreground.png";

import ActionButtonComponents from "../component/ActionButtonComponent";

const Earn = () => {
  return (
    <div className="relative h-full bg-[#1C1C1D] overflow-y-auto">
      <div
        style={{
          backgroundImage: `url(${EarnedBackground})`,
        }}
        className="relative w-full h-full opacity-40 bg-no-repeat bg-cover"
      >
        <img
          src={HeroForeground}
          alt="hero-foreground"
          className="w-full absolute z-10 top-5"
        />
        <div className="flex flex-col justify-center items-center pt-5 px-16 z-50">
          <img src={Logo} alt="logo" className="w-[210px] h-auto" />
          <div className="flex gap-3 pt-6 items-center justify-center">
            <img src={Fund} alt="fund" className="w-11 h-11" />
            <p className="text-[45px] text-[#FFC85E] drop-shadow-md font-['LogoFont']">
              3,186
            </p>
          </div>
        </div>
        <img src={Hero} alt="hero" className="pt-4 h-auto" />
        <div className="flex justify-center pt-16 pb-32">
          <button className="relative text-2xl text-[#FFC85E] border-2 border-[#FFC85E] px-6 py-2 boost-btn font-['BreeSerif'] tracking-wider">
            BOOST
          </button>
        </div>
        <ActionButtonComponents />
      </div>
    </div>
  );
};

export default Earn;
