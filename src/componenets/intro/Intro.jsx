import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Satya from '../../assets/SatyaMehta.PNG'
import DArrow from '../../assets/down.png'


export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["JS", "HTML/CSS", "React", "MERN", "MVC", "OOP"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
    
        <div className="left">
          <div className="imgContainer">
            <img src={Satya} alt="" />
          </div>
        </div>
     

      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I am</h2>
          <h1>Satya Mehta</h1>
          <h3>
            Full-Stack Web Developer
          </h3>
          <h3>
            Proficient in: <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src={DArrow} alt="" />
        </a>
      </div>
    </div>
  );
}
