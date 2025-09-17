import WoprXPanelbtn from "./components/ComputerButtons_buttons";
import "./styles/ComputerButtons_buttons.css";
import WoprXPanelvol from "./components/ComputerButtons_volume";
import "./styles/ComputerButtons_volume.css"
import WoprXPanelemp from "./components/ComputerButtons_empty";
import "./styles/ComputerButtons_empty.css"
import NavButtonGroup from "./components/NavButtonGroup.tsx";
import "./styles/NavButton.css"
export default function App() {
  return (
    <div style={{ padding: "2rem", background: "#111", height: "100vh" }}>
      <WoprXPanelbtn/>
      <WoprXPanelvol/>
      <WoprXPanelemp/>
      <NavButtonGroup/>
    </div>
  );
}
