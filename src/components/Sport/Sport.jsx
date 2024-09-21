import React from 'react';
import './Sport.scss';
import sport from '../../assets/Sport.png';
import avatar from '../../assets/avatar.png';
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
export default function Sport() {
  useGSAP(()=>{
    gsap.fromTo('.sport-text-container', {
       opacity: 0,
     
    },
    {
      opacity: 1,
      duration: 1,
    
    
      scrollTrigger: {
        trigger: ".sport-text-container",
        start: "top center"

      }
    }
  )
  },[])
  return (
    <div className="sport">
      <div className="sport-review">
        <div className="sport-text-container">
          <h2 className="sport-title">
            BSN Sports, the US largest distributor of sports apparel <br /> & equipment, improved
            the productivity of 3000 sales <br /> reps by 28% with Creatio
          </h2>
          <p className="sport-subtitle">
            Creatio became our strategic partner to automate key sales processes and ensure
            foundation for business growth. We have seen tremendous improvements in all key areas of
            our revenue function including field sales, account management, inside sales and order
            processing.
          </p>
          <div className="sport-sign">
            <div className="sport-line"></div>
            <img src={avatar} alt="avatar" />
            <div className='sport-avatar-bio'>
            <h3>Jim Slomka</h3>
            <p>CRO BSN Sports </p>

            </div>
          
          </div>
        </div>
      </div>
      <img className="sport-background" src={sport} alt="sport-img" />
    </div>
  );
}
