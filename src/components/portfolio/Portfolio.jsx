import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list =[
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web-app",
            title: "Web App"
        },
        {
            id: "mobile-apps",
            title: "Mobile apps"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ]
  return (
    <div className='portfolio' id="portfolio">
        <h1>Porfolio</h1>
        <ul>
            {list.map((item) => (
                <PortfolioList title={item.title} active={item.id === selected} setSelected={setSelected} id={item.id}/>
            )) }
        </ul>
        <div className="container">
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
            <div className="item">
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/30b44759695445.586b7a138be61.png" alt="" />
                <h3>Web App</h3>
            </div>
        </div>
    </div>
  )
}
