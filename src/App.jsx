import Topbar from "./componenets/topbar/Topbar";
import Contact from "./componenets/contact/Contact";
import Intro from "./componenets/intro/Intro";
import Portfolio from "./componenets/portfolio/Portfolio";
import Works from "./componenets/works/works";
import Menu from './componenets/menu/Menu'
import "../src/app.scss";
import React, { useState } from 'react';
import About from "./componenets/about/About";
// import menuOnClick from "./componenets/HelperFunctions/menuOnClick";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* <menuOnClick setMenuOpen={setMenuOpen}/> */}
      <div className="sections">
        <Intro />
        <About/>
        <Portfolio />
        {/* <Works /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
