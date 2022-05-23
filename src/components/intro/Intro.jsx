import "./intro.scss";
import { init } from 'ityped';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef} from "react";
export default function Intro() {

  const textRef =  useRef();
  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      strings: ['Analyste', 'Yeah!' ]});
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/my-image.jpeg" alt="" />
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Mohammed Sbit</h1>
          <h3>Freelance <span ref={textRef}>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrow-down" />
        </a>

      </div>
    </div>
  )
}
