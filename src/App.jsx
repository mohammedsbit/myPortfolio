import TopBar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
       <TopBar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro />
         <Contact />
       </div>
    </div>
  );
}

export default App;
