import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#intro"> Home </a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#intro"> Portofolio </a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#intro"> Works </a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#intro"> Testimonials </a>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
                <a href="#contact"> Contact </a>
            </li>
        </ul>

    </div>
  )
}
