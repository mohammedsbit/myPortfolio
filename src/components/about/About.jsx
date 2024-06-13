import './about.scss'
import { FaMedal } from "react-icons/fa6";

export default function About() {
    return (
        <section className='about' id='about'>
            <div className='career-top'>
                <h3>Get To Know More</h3>
                <h1>About Me</h1>
            </div>
            <div className='about-my-career'>
                <div className='image'>
                <img src="assets/my-image.jpeg" alt="" />
                </div>
                <div className='career-wrapper'>
                    <div className='career'>
                        <div className='experience'>
                            <div><FaMedal /></div>
                            <h1>Experience</h1>
                            <p>4+ years</p>
                            <p>Full Stack Development</p>
                        </div>

                        <div className='education'>
                        <div><FaMedal /></div>
                            <h1>Education</h1>
                            <p>Eng. Computer Science</p>
                            <p>Dess. Software</p>
                        </div>
                    </div>
                    <div>
                        <p>I am Mohammed Sbit, an experienced PHP developer with over 4 years of experience. Having worked on various projects and developed strong skills, I am eager to contribute my expertise to your team.</p>
                    </div>
                </div>
            </div>
        </section>

    );


}