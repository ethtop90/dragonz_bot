import Earned from "./../assets/images/earned.png";

const FundPiece = (props) => {
  return (
    <div
      className={
        props.classNm +
        " flex items-center justify-between py-1 px-4 bg-[#FFC85E] rounded-md"
      }
    >
      <img src={Earned} alt="fund" className="w-6 h-6" />
      <p className="font-['MulishBold'] text-base">+{props.content}</p>
    </div>
  );
};

export default FundPiece;
