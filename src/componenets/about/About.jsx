import "./about.scss";
import Award from "./arrow.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="assets/SatyaMehta.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div>
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Hello everyone! I am a junior web developer who is passionate about
            what I do.
          </p>
          <p className="a-desc">
            I started my journey to being a web developer not too long ago and I
            am loving every second of it! I am very passionate about coding in
            general. My favorite language is JS, and I love to work with React.
            My goal is to become an outstanding front-end, React, web developer.
          </p>
        </div>
        {/* <a href="#about">
          <img src="assets/down.png" alt="" />
        </a> */}
      </div>
    </div>
  );
};

export default About;
