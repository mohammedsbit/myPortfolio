import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
export default function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Mohammed Sbit</a>
                <div className="item-container">
                <PersonIcon className="icon" />
                <span>+1 438 528 1138</span>
                </div>
                <div className="item-container">
                <MailIcon className="icon"/>
                <span>mohammedsbit123@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </div>
    </div>
  )
}
