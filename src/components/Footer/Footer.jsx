import React from 'react';
import logo from '../../assets/logo2.png';
import facebook from '../../assets/socials/1.png';
import linkedin from '../../assets/socials/2.png';
import youtube from '../../assets/socials/4.png';
import twitter from '../../assets/socials/3.png';
import './Footer.scss';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  useGSAP(()=>{
    gsap.fromTo('.footer-right',{
      opacity: 0,
      x: -500
    }, 
    {
      opacity: 1, 
      duration: 1,
      ease: 'expo',
      x: 0,
      scrollTrigger: {
        trigger: '.footer-right', 
        start: '20% bottom'
      }
    }
  
  )
  gsap.fromTo('.footer-left',{
    opacity: 0,
    x: 500
  }, 
  {
    opacity: 1, 
    duration: 1,
    ease: 'expo',
    x: 0,
    scrollTrigger: {
      trigger: '.footer-left', 
      start: '20% bottom'
    }
  }

)
gsap.fromTo('#footer-opacity',{
  opacity: 0,
  
}, 
{
  opacity: 1, 
  duration: 1,
  ease: 'expo',
  scrollTrigger: {
    trigger: '#footer-opacity', 
    start: '20% bottom'
  }
}

)
  },[])
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
                <li>nexuscodesystems@gmail.com</li>
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
            <img id='footer-opacity' src={facebook} alt="facebook" />
          </a>
          <a href="http://">
            <img id='footer-opacity' src={linkedin} alt="linkedin" />
          </a>
          <a href="http://">
            <img id='footer-opacity' src={youtube} alt="youtube" />
          </a>
          <a href="http://">
            <img id='footer-opacity' src={twitter} alt="twiiter" />
          </a>
          </div>
          <div className="reserved">
        <span id='footer-opacity'>
            © 2024 Creatio. All rights reserved. Free trial terms Privacy Policy GDPR Site Map
          </span>
        </div>
       
      
        </div>
      
      </div>
    </div>
  );
}
