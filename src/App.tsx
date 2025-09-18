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
import MasterCardWhite from "./components/MastercardWhiteResult.tsx";
import Logo from "./components/Logo.tsx";
import Text from "./components/text.tsx";
import Loading from "./components/Loading.tsx";
import MasterCardList from "./components/MastercardList.tsx";
import Tab from "./components/Tab.tsx";
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
    centerSvg="/smallcard/fox.svg"
    topSvg="/smallcard/smallcardtop.svg"
    leftSvg="/smallcard/smallcardleft.svg"
    rightSvg="/smallcard/smallcardright.svg"
    baseSvg="/smallcard/smallcardoff.svg"
    hoverBaseSvg="/smallcard/smallcardon.svg"
  />
<br /><br />
  <YesButton
    label="YES"
    baseSvg="/yesbutton/yesbuttonoff.svg"
    hoverBaseSvg="/yesbutton/yesbuttonon.svg"
    topRightSvg="/yesbutton/yestopright.svg"
    bottomLeftSvg="/yesbutton/yesbottomleft.svg"
  />
<br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <MasterCard
  baseSvg="/mastercardwhite/mastercardwhitehover.svg"       // default base image
  hoverBaseSvg="/mastercardwhite/mastercardwhite.svg"       // hover base image
  topSvg="/mastercardwhite/mastercardwhitetop.svg"
  leftSvg="/mastercardwhite/mastercardwhitebleft.svg"
  rightSvg="/mastercardwhite/mastercardwhitebright.svg"
  question="WILL INDIA INVADE PAKISTAN IN 2025?"
  pollYes={93}
  pollNo={7}
/>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<YesResultBox value={34} text="YES" status="WON" />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<MasterCardGreen
        baseSvg="/mastercardgreen/mastercardgreen.svg"
        topSvg="/mastercardgreen/mastercardgreentop.svg"
        leftSvg="/mastercardgreen/mastercardgreenbleft.svg"
        rightSvg="/mastercardgreen/mastercardgreenbright.svg"
        question="Do you want to proceed?"
        pollYes={72}
        pollNo={28}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <MasterCardRed
        baseSvg="/mastercardred/mastercardred.svg"
        topSvg="/mastercardred/mastercardredtop.svg"
        leftSvg="/mastercardred/mastercardredbleft.svg"
        rightSvg="/mastercardred/mastercardredbright.svg"
        question="Do you want to proceed?"
        pollYes={72}
        pollNo={28}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <MasterCardWhite
        baseSvg="/mastercardwhite/mastercardwhite.svg"
        topSvg="/mastercardwhite/mastercardwhitetop.svg"
        leftSvg="/mastercardwhite/mastercardwhitebleft.svg"
        rightSvg="/mastercardwhite/mastercardwhitebright.svg"
        question="Do you want to proceed?"
        pollYes={72}
        pollNo={28}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div>
      <div >
        <Logo width={101.87} />
      </div>
      </div>
       <div>
      <Text variant="heading">Main Heading (44px)</Text>
      <Text variant="b1">Section Title (32px)</Text>
      <Text variant="b2">Subheading / Button Size (28px)</Text>
      <Text variant="b3">Paragraph Text (24px)</Text>
    </div>
<br /><br /><br /><br />
    <div>
      <Loading percent={50} />
      
      </div>
      <br /><br /><br /><br /><br /><br />
      <MasterCardList/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Tab src="/tab/whitetab.svg">
  <span style={{ fontFamily: "VT323", fontSize: "20px", color: "black" }}>
        <Text variant="b2" className="colors" >Market List</Text>

  </span>
</Tab>

    </div>
  



  );
}
