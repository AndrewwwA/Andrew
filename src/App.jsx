import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";

function App() {
  const navigate = useNavigate();
  const [on, setOn] = useState(true);
  const [mode, setMode] = useState("easy");

  const onEasy = () => {
    setMode("easy");
    setOn(!on ? true : false);
  };
  const onHard = () => {
    setMode("hard");
    setOn(!on ? true : false);
  };
  const home = () => {
    navigate("/");
  };
  const MtextToT = () => {
    navigate("/Mtext/T");
  };
  const TextToS = () => {
    navigate("/Text/S");
  };
  const TextToMt = () => {
    navigate("Text/Mt");
  };

  return (
    <>
      <ul id="header_box">
        <div id="home" onClick={home}>
          Home
        </div>
        <div id="circle_boxes" onClick={TextToS}>
          Text To Morse (Speech)
        </div>
        <div id="circle_boxes" onClick={TextToMt}>
          Text To Morse (Words)
        </div>
        <div id="circle_boxes" onClick={MtextToT}>
          Morse (Text) To Text{" "}
        </div>
        <div id="buttons">
          <button id="Easy" className={on ? "on" : "off"} onClick={onEasy}>
            Easy Mode
          </button>
          <button id="Hard" className={!on ? "on" : "off"} onClick={onHard}>
            Hard Mode
          </button>
        </div>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Mtext/T" element={<Home />} />
        <Route exact path="/Text/S" element={<Home />} />
        <Route exact path="/Text/Mt" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
