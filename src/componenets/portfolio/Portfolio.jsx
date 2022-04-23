
import "./portfolio.scss";

import barHopV2 from '../../assets/barhopv2.PNG'
import barHopV1 from '../../assets/barhopv1.PNG'
import noteTaker from '../../assets/noteTaker.PNG'
import passwordGen from '../../assets/passwordGenerator.PNG'


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
          rel="noreferrer"
        >
          <img src={barHopV1} alt="" />
          <h3>BarHop App</h3>
        </a>

        <a
          className="item"
          href="https://note-taker-satya2.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={noteTaker} alt="" />
          <h3>NoteTaker App</h3>
        </a>
        <a
          className="item"
          href="https://satyahmehta.github.io/password-generator/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={passwordGen} alt="" />
          <h3>Password Generator</h3>
        </a>
        <a
          className="item"
          href="https://barhopv2.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={barHopV2} alt="" />
          <h3>BarHopV2 App</h3>
        </a>
        <a
          className="item"
          href="https://github.com/SatyaHMehta/Team_rofile_Generator.git"
          target="_blank"
        >
          <img src={teamGen} alt="" />
          <h3>Team Generator</h3>
        </a>
        {/* <a
          className="item"
          href="https://satyahmehta.github.io/coding_quiz/"
          target="_blank"
        >
          <img src={codeQuiz} alt="" />
          <h3>Code Quiz</h3>
        </a> */}
      </div>
    </div>
  );
}
