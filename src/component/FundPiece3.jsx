import Earned from "./../assets/images/earned.png";

const FundPiece = () => {
  return (
    <div className="heroevent flex items-center justify-between py-1 px-4 bg-[#FFC85E] rounded-md fundpiece10">
      <img src={Earned} alt="fund" className="w-6 h-6" />
      <p className="font-['MulishBold'] text-base">+10</p>
    </div>
  );
};

export default FundPiece;
