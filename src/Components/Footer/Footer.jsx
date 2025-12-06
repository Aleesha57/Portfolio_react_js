import React from 'react'
import './footer.css'
import footerlogo from '../../assets/logo.svg'
import usericon from '../../assets/user_icon.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footerlogo} alt=''/>
                <p>I am a full stack developer from ,India </p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt=''/>
                    <input type="email" placeholder='enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Aleesha Thomas.All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
        </div>
    </div>
  )
}
