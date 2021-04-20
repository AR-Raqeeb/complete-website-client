import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const openHours = [
        {name: "Monday 11am-7pm"},
        {name: "Tuesday-Friday 11am-8pm"},
        {name: "Saturday 10am-6pm"},
        {name: "Sunday 11am-6pm"}
    ]
    const contacts = [
        {name: "102 Broadmay, New York, NY, 246814"},
        {name: "example@dance_class.com"},
        {name: "1-002-448-568"},

       
    ]
    const socials = [
    ]
    const about = [
        {name: "Our Story" , link: "/story"},
        {name: "Partners" , link: "/partners"},
        {name: "Events Calendar" , link: "/events"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Open Hours" menuItems={openHours}/>
                    <FooterCol key={2} menuTitle="About" menuItems={about}/>
                    <FooterCol key={3} menuTitle="Socials" menuItems={socials}>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <FooterCol key={4} menuTitle="Contacts" menuItems={contacts}/>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;