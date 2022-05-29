import TopBar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
       <TopBar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro />
         <Portfolio/>
         <Contact />
       </div>
    </div>
  );
}

export default App;
