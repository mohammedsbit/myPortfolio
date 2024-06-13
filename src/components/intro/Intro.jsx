import "./intro.scss";
import { init } from 'ityped';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef} from "react";
import { Download } from "@mui/icons-material";
export default function Intro() {

  const textRef =  useRef();
  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      strings: ['Analyste' ]});
  },[]);

  //
  const DownloadMyCv = () => {
        const pdfUrl = "assets/my-CV-PHP.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = Date.now() + "-cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/my-image.jpeg" alt="" />
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="title">Hello, I'm</h2>
          <h1 className="full-name">Mohammed Sbit</h1>
          <h3>PHP Developer</h3>
          <div className="actions-buttons">
              <button className="button-download" onClick={DownloadMyCv}>Download cv</button>
              <a href="#contact" className="button-contact">Contact Info</a>

          </div>
        </div>
        <a  className="portfolio-arrow" href="#portfolio">
          <KeyboardArrowDownIcon className="arrow-down" />
        </a>

      </div>
    </div>
  )
}
