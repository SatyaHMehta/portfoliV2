import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";

export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "design",
  //     title: "Design",
  //   },
  //   {
  //     id: "content",
  //     title: "Content",
  //   },
  // ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        <a
          className="item"
          href="https://satyahmehta.github.io/firstGroupProject/"
          target="_blank"
        >
          <img src="assets/barhopv1.png" alt="" />
          <h3>BarHop App</h3>
        </a>

        <a
          className="item"
          href="https://note-taker-satya2.herokuapp.com/"
          target="_blank"
        >
          <img src="assets/noteTaker.png" alt="" />
          <h3>NoteTaker App</h3>
        </a>
        <a
          className="item"
          href="https://satyahmehta.github.io/password-generator/"
          target="_blank"
        >
          <img src="assets/passwordGenerator.png" alt="" />
          <h3>Password Generator</h3>
        </a>
        <a
          className="item"
          href="https://barhopv2.herokuapp.com/"
          target="_blank"
        >
          <img src="assets/barhopv2.png" alt="" />
          <h3>BarHopV2 App</h3>
        </a>
        <a
          className="item"
          href="https://github.com/SatyaHMehta/Team_rofile_Generator.git"
          target="_blank"
        >
          <img src="assets/teamGenerator.png" alt="" />
          <h3>Team Generator</h3>
        </a>
        <a
          className="item"
          href="https://satyahmehta.github.io/coding_quiz/"
          target="_blank"
        >
          <img src="assets/codeQuiz.png" alt="" />
          <h3>Code Quiz</h3>
        </a>
      </div>
    </div>
  );
}
