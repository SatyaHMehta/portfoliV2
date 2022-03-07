import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Proficient In", "MERN", "MVC", "React"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
    
        <div className="left">
          <div className="imgContainer">
            <img src="assets/SatyaMehta.PNG" alt="" />
          </div>
        </div>
     

      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I am</h2>
          <h1>Satya Mehta</h1>
          <h3>
            Full-Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
