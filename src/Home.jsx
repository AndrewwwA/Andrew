import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./store/storeslice";

const Home = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  return (
    <>
      <div id="flex_me">
        <p id="paragraph">
          <big>My Site is designed for the user to learn Morse Code. </big>
          <br />
          <br />
          We firstly have a Easy Mode toggle button which will display a Morse
          Code chart on the side for you to refer to. Then we provide multiple
          ways for the User to learn to learn Morse Code.
          <br />
          <br />
          Firstly, we have Words to Morse Code (audio) which translate your
          written text into audio which u can play over as many times as needed
          with the handy replay button.
          <br />
          <br />
          Secondly, we have Text to Morse Code (text) which displays Morse Code
          Text output of your written text.
          <br />
          <br />
          Finally, we have Morse Code (text) which convertes into English
          sentences using our backend convserion algorithim.
        </p>
        <img
          id="image"
          src="https://www.retevis.com/BlogImage/20230106/1825542202/morse-code.webp"
        ></img>
      </div>
      <br />
      <h1 id="info">Info</h1>
      <p>
        dawdwawddw wd <br></br>
        daw <br />
        dwadawdw a <br />
        dwadw <br />
      </p>
    </>
  );
};
export default Home;
