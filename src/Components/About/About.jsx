import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
// about_profile.svg

export const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="themepattern" /> */}
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a dedicated Full-Stack Developer skilled in Django REST Framework and React.js, building scalable back-end APIs and modern, responsive front-end applications with a focus on clean architecture and seamless user experience.</p>
                        <p>I develop scalable full-stack solutions using Django REST Framework and React.js, combining strong backend logic with modern, responsive front-end design. I enjoy creating clean, maintainable applications and continuously improving my technical skills.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "85%" }} /></div>
                        <div className="about-skill"><p>JavaScript (ES6+)</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React.js</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Django REST Framework</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "78%" }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Git & GitHub</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Responsive Web Design</p><hr style={{ width: "80%" }} /></div>


                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>PROJECTS COMPLETED</p>
                    
                </div>
        
            </div>
        </div>
    )
}
