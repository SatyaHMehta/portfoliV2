import "./about.scss";
import Satya2 from "../../assets/SatyaMehta.PNG"

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Satya2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div>
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Hello everyone! I am a junior web developer who is very passionate about
            coding.
          </p>
          <p className="a-desc">
          I am a dedicated and results-driven professional. My specialties include quickly learning new skills and programing languages, problem solving, using OOP/ ORM, and agile scrum methodology to design and complete applications. So far, I have JS, TypeScript, HTML, CSS, Node, Express, React, Bootstrap, jQuery, MySQL, and MongoDB under my belt. I have also started learning Angular and I am enthusiastically learning any other programing principles, frameworks or languages that I can integrate into my coding brain.
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
