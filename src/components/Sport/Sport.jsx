import React from 'react';
import './Sport.scss';
import sport from '../../assets/Sport.webp';
import avatar from '../../assets/avatar.jpg';
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
export default function Sport() {
  useGSAP(() => {
    gsap.fromTo(
      '.sport-text-container',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: '.sport-text-container',
          start: 'top center',
        },
      },
    );
  }, []);
  return (
    <div className="sport">
      <div className="sport-review">
        <div className="sport-text-container">
          <h2 className="sport-title">“BuildTech Solutions”</h2>
          <p className="sport-subtitle">
             Our company would like to extend our sincere gratitude to your team for
            developing and implementing a CRM system that has truly transformed our business
            operations. The system has significantly streamlined our processes, helping us optimize
            client management, accelerate order processing, and enhance communication between our
            production, sales, and logistics departments. It has made a remarkable difference in the
            way we operate.
          </p>
          <div className="sport-sign">
            <div className="sport-line"></div>
            <img src={avatar} alt="avatar" />
            <div className="sport-avatar-bio">
              <h3>Adam Johnson</h3>
              {/* <p>CRO BSN Sports </p> */}
            </div>
          </div>
        </div>
      </div>
      <img className="sport-background" src={sport} alt="sport-img" />
    </div>
  );
}
