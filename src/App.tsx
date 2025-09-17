import WoprXPanelbtn from "./components/ComputerButtons_buttons";
import WoprXPanelvol from "./components/ComputerButtons_volume";
import WoprXPanelemp from "./components/ComputerButtons_empty";
import NavButtonGroup from "./components/NavButtonGroup.tsx";
import SmallCard from "./components/SmallCard.tsx"
import YesButton from "./components/YesButton.tsx"
import MasterCard from "./components/Mastercard.tsx";
import YesResultBox from "./components/LongGreenButton.tsx"
import MasterCardGreen from "./components/MastercardGreen.tsx";
import MasterCardRed from "./components/MastercardRed.tsx";
export default function App() {
  return (
    <div style={{ padding: "2rem",height: "100vh" }}>
      <WoprXPanelbtn />
      <WoprXPanelvol />
      <WoprXPanelemp />
      <NavButtonGroup />
      <br />
  
  <SmallCard
    label="Example"
    centerSvg="/fox.svg"
    topSvg="/smallcardtop.svg"
    leftSvg="/smallcardleft.svg"
    rightSvg="/smallcardright.svg"
    baseSvg="/smallcardoff.svg"
    hoverBaseSvg="/smallcardon.svg"
  />
<br /><br />
  <YesButton
    label="YES"
    baseSvg="/yesbuttonoff.svg"
    hoverBaseSvg="/yesbuttonon.svg"
    topRightSvg="/yestopright.svg"
    bottomLeftSvg="/yesbottomleft.svg"
  />
<br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <MasterCard
  baseSvg="/mastercardwhitehover.svg"       // default base image
  hoverBaseSvg="/mastercardwhite.svg"       // hover base image
  topSvg="/mastercardwhitetop.svg"
  leftSvg="/mastercardwhitebleft.svg"
  rightSvg="/mastercardwhitebright.svg"
  question="WILL INDIA INVADE PAKISTAN IN 2025?"
  pollYes={93}
  pollNo={7}
/>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<YesResultBox value={34} text="YES" status="WON" />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<MasterCardGreen
        baseSvg="/mastercardgreen.svg"
        topSvg="/mastercardgreentop.svg"
        leftSvg="/mastercardgreenbleft.svg"
        rightSvg="/mastercardgreenbright.svg"
        question="Do you want to proceed?"
        pollYes={72}
        pollNo={28}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <MasterCardRed
        baseSvg="/mastercardred.svg"
        topSvg="/mastercardredtop.svg"
        leftSvg="/mastercardredbleft.svg"
        rightSvg="/mastercardredbright.svg"
        question="Do you want to proceed?"
        pollYes={72}
        pollNo={28}
      />
      </div>



  );
}
