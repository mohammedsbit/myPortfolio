import './skills.scss'
import { FaBolt } from "react-icons/fa";
export default function Skills() {
    return (

        <div className='skills' id='skills'>
            <div className='section-title'>Skills</div>
            <div className='section-data'>
                <div className='frontend-skills'>
                    <div className='subtitle'>Front end developement</div>
                    <div className='skills'>
                        <div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>HTML</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>css</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>JavaScript</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                        </div>
                        <div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Angular</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Reacts js</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Vue js</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='backend-skills'>
                    <div className='subtitle'>Backend development</div>
                    <div className='skills'>
                        <div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>PHP</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Python</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Laravel</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                        </div>
                        <div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>MySql</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>AWS</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                            <div className='skill-set'>
                                <FaBolt />
                                <span className='skill-name'>Serverless</span>
                                <div className='skill-level'>Intermediate</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
