import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
    return (
        <div id='home' className='hero'>
           
            <img src={profile_img} alt="profilePic" className="profile-img"/>
            <h1><span>I’m Aleesha Thomas</span>, a Full Stack Developer and Data Analyst based in India.
                </h1>
            <p>I’m a full-stack developer passionate about building scalable, user-focused applications. With experience in Django REST Framework, React, and modern JavaScript, I love transforming ideas into clean, high-performing digital products.</p>
                <div className='hero-action'>
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                    <a
                        className="hero-resume"
                        href="https://drive.google.com/drive/folders/1FQ33s7W6cbYpYF_mM_rzwYboKEdfmhdD"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume
                    </a>
                </div>
        </div>
    )
}
