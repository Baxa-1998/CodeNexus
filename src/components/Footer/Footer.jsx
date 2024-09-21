import React from 'react';
import logo from '../../assets/logo2.png';
import facebook from '../../assets/socials/1.png';
import linkedin from '../../assets/socials/2.png';
import youtube from '../../assets/socials/4.png';
import twitter from '../../assets/socials/3.png';
import './Footer.scss';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-right">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-left">
            <ul>
              <a href="">
                <li>CodeNexus Systems</li>
              </a>
              <a href="">
                <li>codenexus@gmail.com</li>
              </a>
              <a href="">
                <li>+1 (904) 793-2100</li>
              </a>
              <a href="">
                <li>
                  {' '}
                  USAUSMAN CORPORATION , 10541 63RD DR <br /> FL 2 FOREST HILLS, NY 11375
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-links">
          <a href="http://">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="http://">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="http://">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="http://">
            <img src={twitter} alt="twiiter" />
          </a>
          </div>
          <div className="reserved">
        <span>
            © 2024 Creatio. All rights reserved. Free trial terms Privacy Policy GDPR Site Map
          </span>
        </div>
       
      
        </div>
      
      </div>
    </div>
  );
}
