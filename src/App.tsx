import WoprXPanelbtn from "./components/ComputerButtons_buttons";
import "./styles/ComputerButtons_buttons.css";
import WoprXPanelvol from "./components/ComputerButtons_volume";
import "./styles/ComputerButtons_volume.css"
import WoprXPanelemp from "./components/ComputerButtons_empty";
import "./styles/ComputerButtons_empty.css"
import NavButtonGroup from "./components/NavButtonGroup.tsx";
import "./styles/NavButton.css"
import SmallCard from "./components/SmallCard.tsx"
import "./styles/SmallCard.css"
import YesButton from "./components/YesButton.tsx"
import "./styles/YesButton.css"
export default function App() {
  return (
    <div style={{ padding: "2rem", background: "#111", height: "100vh" }}>
      <WoprXPanelbtn />
      <WoprXPanelvol />
      <WoprXPanelemp />
      <NavButtonGroup />
      <br />
     <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
  <SmallCard
    label="Example"
    centerSvg="/fox.svg"
    topSvg="/smallcardtop.svg"
    leftSvg="/smallcardleft.svg"
    rightSvg="/smallcardright.svg"
    baseSvg="/smallcardoff.svg"
    hoverBaseSvg="/smallcardon.svg"
  />

  <YesButton
    label="YES"
    baseSvg="/yesbuttonoff.svg"
    hoverBaseSvg="/yesbuttonon.svg"
    topRightSvg="/yestopright.svg"
    bottomLeftSvg="/yesbottomleft.svg"
  />
</div>

    </div>
  );
}
