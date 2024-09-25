import Awards from '../Awards/Awards';
import './Platform.scss';
import card from '../../assets/platform/1.png';
import mobile from '../../assets/platform/2.png';
import service from '../../assets/platform/3.png';
import communication from '../../assets/platform/4.png';
import marketing from '../../assets/platform/5.png';
import target from '../../assets/platform/6.png';
import logo2 from '../../assets/logo2-black.png';
import Button from '../Button/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
import { ScrollTrigger } from 'gsap/all';

const awards = [
  {
    id: 1,
    title: 'CRM',
  },
  {
    id: 2,
    img: mobile,
    text: 'Mobile',
  },
  {
    id: 3,
    img: service,
    text: 'Service',
  },
  {
    id: 4,
    img: communication,
    text: 'Location',
  },
  {
    id: 5,
    img: marketing,
    text: 'Messages',
  },
  {
    id: 6,
    img: card,
    text: 'e-commerce',
  },
  {
    id: 7,
    img: target,
    text: 'Sales',
  },
];

export default function Platform({ setModal }) {
  useGSAP(() => {
    gsap.to(
      '.platform-left-item',
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power3',
        scrollTrigger: {
          trigger: '.platform-left-item',
          start: 'bottom bottom',
        },

        stagger: {
          amount: 1,
        },
      },
      // {
      //   opacity: 1,
      //   duration: 1,
      //   stagger: {
      //     amount: 0.5,
      //   }
      // }
    );
    gsap.fromTo(
      '.platform-right-title-block',
      { x: 1000 },
      {
        x: 0,
        duration: 0.5,
        ease: 'power3',
        scrollTrigger: {
          trigger: '.platform-right-title-block',
          start: 'bottom bottom',
        },
      },
      // {
      //   opacity: 1,
      //   duration: 1,
      //   stagger: {
      //     amount: 0.5,
      //   }
      // }
    );
  }, []);

  return (
    <div className="platform">
      <Awards />
      <div className="platform-wrapper">
        <div className="platform-left">
          <div className="platform-left-items">
            {awards.map((item) => (
              <div key={item.id} className="platform-left-item">
                {item.img ? <img src={item.img} alt="platform" /> : <p>{item.title}</p>}
                <h4>{item.text}</h4>
              </div>
            ))}

            {/* <div className="platform-left-item"></div>
          <div className="platform-left-item"></div>
          <div className="platform-left-item"></div>
          <div className="platform-left-item"></div>
          <div className="platform-left-item"></div>
          <div className="platform-left-item"></div> */}
          </div>
        </div>
        <div className="platform-right">
          <div className="platform-right-title-block">
            <h3 className="platform-right-title">
              Tale control of <br /> your business with CodeNexus Systems' flexible pricing model.
            </h3>
            <p className="platform-right-subtitle">
              Design a custom CRM by selecting only the features that meet your unique needs.
              Eliminate unnecessary costs and focus on the tools that drive growth and efficiency.
              With a tailored solution, you'll streamline operations and accelerate business success
              on your terms.
            </p>
            <Button onClick={() => setModal(true)} className={'platform-right-btn'}>
              Get a consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
