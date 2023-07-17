import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Topbar from "./Components/topbar/Topbar";
import Work from "./Components/work/Work";
import './App.scss'
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import Gallery from "./Components/gallery/Gallery";

function App() {

  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Gallery />
        <Contact/>

      </div>
    </div>
  );
}

export default App;
