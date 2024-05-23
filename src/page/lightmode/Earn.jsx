import Background from "./../../assets/images/background.png";
import Logo from "./../../assets/images/logo.png";
import Coin from "./../../assets/images/coin.png";
import HeroLight from "./../../assets/images/hero-light.png";
import EarnIcon from "./../../assets/images/earned.png";
import SayHello from "./../../assets/images/say-hello.png";
import FundPiece from "../../component/FundPiece";

import ActionButtonComponents from "../../component/ActionButtonComponent";
import { useEffect, useState } from "react";

const Earn = () => {
  const [animationFlag, setAnimationFlag] = useState(false);
  const [coinMoney, setCoinMoney] = useState(3186);
  const [strCoin, setStrCoin] = useState(String(coinMoney) || "");
  const [dipCoin, setDisCoin] = useState();

  useEffect(() => {
    let tp = "";
    let i;
    for (i = 0; i < strCoin.length; i++) {
      if ((strCoin.length - i) % 3 === 1 && i !== strCoin.length - 1) {
        tp += strCoin.charAt(i);
        tp += ",";
      } else tp += strCoin.charAt(i);
    }
    setDisCoin(tp);
  }, [strCoin]);

  const handleClick = () => {
    setAnimationFlag(true);
    setTimeout(() => {
      setAnimationFlag(false);
    }, 500);
    let tp = coinMoney;
    tp++;
    setCoinMoney(tp);
    setStrCoin(String(tp));
  };

  return (
    <div className="relative h-full bg-[#181818] overflow-y-auto">
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "fit-content",
        }}
        className="relative w-full bg-no-repeat bg-cover h-fit"
      >
        <div className="flex flex-col justify-center items-center pt-5 px-16 z-50">
          <img src={Logo} alt="logo" className="w-[210px] h-auto" />
          <div className="flex gap-3 pt-6 items-center justify-center">
            <img src={Coin} alt="coin" className="w-12 h-12" />
            <p className="text-[40px] text-white drop-shadow-md font-['Gabriela']">
              {dipCoin}
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={HeroLight}
            alt="hero-light"
            className={`pt-3 h-auto herolightimg ${
              animationFlag ? "heroimgevent" : ""
            }`}
            onClick={handleClick}
          />
          <FundPiece
            content="10"
            classNm={animationFlag ? "heroevent fundpiece10" : "hidden"}
          />
          <FundPiece
            content="5"
            classNm={animationFlag ? "heroevent fundpiece20" : "hidden"}
          />
          <FundPiece
            content="1"
            classNm={animationFlag ? "heroevent fundpiece30" : "hidden"}
          />
        </div>
        <div className="pt-6 pb-[106px]">
          <button className="flex items-center justify-between gap-[10px] text-base bg-[#FFC85E] hover:bg-opacity-0 hover:text-[#FFC85E] text-[#181818] border-[#FFC85E] border-2 rounded-3xl px-6 py-2 mx-auto font-['MulishBold']">
            <img src={EarnIcon} alt="earn" className="w-6 h-6" />
            <p>BOOST TO EARN</p>
          </button>
          <button className="flex items-center justify-between gap-[10px] text-base hover:bg-[#181818] text-[#FFC85E] border-[#FFC85E] border-[1px] rounded-3xl px-6 py-2 mt-4 mx-auto font-['MulishBold']">
            <img src={SayHello} alt="say-hello" className="w-6 h-6" />
            <p>Invite a Friend</p>
            <div className="flex items-center justify-between border-[1px] bg-[#181818] border-[#BF9D5A] rounded-md px-2 py-1">
              <img src={Coin} alt="coin" className="w-4 h-4" />
              <p className="text-white text-sm font-['MulishBold']">+10,000</p>
            </div>
          </button>
        </div>
        <ActionButtonComponents />
      </div>
    </div>
  );
};

export default Earn;
