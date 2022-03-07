import "./menu.scss";
// import menuOnClick from "../HelperFunctions/menuOnClick"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li> */}

        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/SatyaHMehta" target="_blank">
            <img class="logo" src="assets/github.png" />
          </a>
          <a href="linkedin.com/in/satya-mehta-9743431b8" target="_blank">
            <img class="logo" src="assets/linkedin.png" />
          </a>
        </li>
      </ul>
    </div>
  );
}
