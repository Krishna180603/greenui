import React from "react";
import MasterCard from "./Mastercard";
import "../styles/MastercardList.css"

const questions = [
  { q: "Do you believe AI will replace most jobs?", yes: 68, no: 32 },
  { q: "Should we colonize Mars in this century?", yes: 54, no: 46 },
  { q: "Is blockchain the future of finance?", yes: 72, no: 28 },
  { q: "Do you think VR will become mainstream?", yes: 61, no: 39 },
  { q: "Should governments regulate social media?", yes: 80, no: 20 },
  { q: "Should governments regulate social media?", yes: 80, no: 20 },
];

const MasterCardList: React.FC = () => {
  return (
    <div className="mastercard-list">
      {questions.map((item, index) => (
        <MasterCard
          key={index}
          baseSvg="/mastercardwhite/mastercardwhitehover.svg"
          hoverBaseSvg="/mastercardwhite/mastercardwhite.svg"
          topSvg="/mastercardwhite/mastercardwhitetop.svg"
          leftSvg="/mastercardwhite/mastercardwhitebleft.svg"
          rightSvg="/mastercardwhite/mastercardwhitebright.svg"
          question={item.q}
          pollYes={item.yes}
          pollNo={item.no}
        />
      ))}
    </div>
  );
};

export default MasterCardList;
