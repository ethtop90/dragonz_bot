import FundBlack from "./../assets/images/fund-black.png";
import Fund from "./../assets/images/fund.png";
import Boost from "./../assets/images/Boost.png";
import Play from "./../assets/images/play.png";
import Cards from "./../assets/images/cards.png";
import { useState } from "react";

const ActionButtonComponents = () => {
  const [state, setState] = useState(0);

  return (
    <div className="fixed bottom-0 w-full pt-11 pb-3">
      <div className="flex px-4 py-2 mx-2 justify-between items-center rounded-2xl bg-[#181818] bg-opacity-80 border-2 border-[#BF9D5A]">
        <button
          className={
            "py-1 px-3 rounded-xl flex flex-col justify-center items-center " +
            (state === 0 && "bg-[#FFC85E]")
          }
          onClick={() => setState(0)}
        >
          <img
            src={state === 0 ? FundBlack : Fund}
            alt="fund-black"
            className="w-6 h-6"
          />
          <p
            className={
              "font-['mulish'] text-[12px] " +
              (state === 0 ? "text-black" : "text-[#FFC85E]")
            }
          >
            Earn
          </p>
        </button>
        <button
          className={
            "py-1 px-3 rounded-xl flex flex-col justify-center items-center " +
            (state === 1 && "bg-[#FFC85E]")
          }
          onClick={() => setState(1)}
        >
          <img src={Boost} alt="boost" className="w-6 h-6" />
          <p
            className={
              "font-['mulish'] text-[12px] " +
              (state === 1 ? "text-black" : "text-[#FFC85E]")
            }
          >
            Boost
          </p>
        </button>
        <button
          className={
            "py-1 px-3 rounded-xl flex flex-col justify-center items-center " +
            (state === 2 && "bg-[#FFC85E]")
          }
          onClick={() => setState(2)}
        >
          <img src={Play} alt="play" className="w-6 h-6" />
          <p
            className={
              "font-['mulish'] text-[12px] " +
              (state === 2 ? "text-black" : "text-[#FFC85E]")
            }
          >
            Play
          </p>
        </button>
        <button
          className={
            "py-1 px-3 rounded-xl flex flex-col justify-center items-center " +
            (state === 3 && "bg-[#FFC85E]")
          }
          onClick={() => setState(3)}
        >
          <img src={Cards} alt="fund-black" className="w-6 h-6" />
          <p
            className={
              "font-['mulish'] text-[12px] " +
              (state === 3 ? "text-black" : "text-[#FFC85E]")
            }
          >
            Cards
          </p>
        </button>
      </div>
    </div>
  );
};

export default ActionButtonComponents;
