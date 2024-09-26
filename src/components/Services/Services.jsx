import './Services.scss';
import marketing from '../../assets/marketing.png';
import Title from '../Title/Title';
import Button from '../Button/Button';
import agent from '../../assets/agent.png';
import applications from '../../assets/Applications.png';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
gsap.registerPlugin(ScrollTrigger);
export default function Services({ setModal }) {
  useGSAP(()=>{
    gsap.fromTo('#marketing-img', {
      opacity: 0, 
      y: 150
    },
    {
      opacity: 1, 
      y: 0, 
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger:{
        trigger: '#marketing-img',
        start: "20% bottom"
      }
    }
  )
  gsap.fromTo('#marketing-title', {
    opacity: 0, 
    y: 150
  },
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: 'power3.inOut',
    delay: 0.3,
    scrollTrigger:{
      trigger: '#marketing-img',
      start: "bottom bottom"
    }
  }
)
gsap.fromTo('.services-marketing-img', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: 0, 
  duration: 1,
  ease: 'power3.inOut',
  scrollTrigger:{
    trigger: '.services-marketing-img',
    start: "bottom bottom"
  }
}
)
gsap.fromTo('#services-title', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: 0, 
  duration: 1,
  ease: 'power3.inOut',
  delay: 0.3,
  scrollTrigger:{
    trigger: '#services-title',
    start: "bottom bottom"
  }
}
)
gsap.fromTo('.services-marketing-btn', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: 0, 
  duration: 1,
  ease: 'power3.inOut',
  delay: 0.3,
  scrollTrigger:{
    trigger: '.services-marketing-btn',
    start: "bottom bottom"
  }
}
)
gsap.fromTo('.services-application-img', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: 0, 
  duration: 1,
  ease: 'power3.inOut',
  scrollTrigger:{
    trigger: '.services-application-img',
    start: "20% bottom"
  }
}
)

gsap.fromTo('.services-application-title', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: -150, 
  duration: 1,
  ease: 'power3.inOut',
  delay: 0.3,
  scrollTrigger:{
    trigger: '.services-application-title',
    start: "20% bottom"
  }
}
)
  },[])
  return (
    <div className="services">
      <div className="services-wrapper">
        <div className="services-marketing">
          <img id='marketing-img' src={marketing} alt="marketing" />
          <Layer>
          <Title id='marketing-title'>
            Effectively drive leads & revenue with your marketing <br /> campaigns
          </Title>
          </Layer>
         
        </div>
        <div className="services-marketing">
          <div className="services-marketing-text">
            <Layer>
            <Title id='services-title'>
              Boost client <br /> satisfaction through <br /> simplified service processes
            </Title>
            </Layer>
         
            <Button onClick={() => setModal(true)} className={'services-marketing-btn'}>
            Book a free consultation
            </Button>
          </div>
          <div className="services-marketing-img">
            <img src={agent} alt="" />
          </div>
        </div>
        <div className="services-application">
          <div className="services-application-img">
            <img src={applications} alt="sales-applications" />
          </div>
          <div className="services-application-text-block">
            {/* <h2 className="sales-title">Centralize your marketing <br /> data for enhanced efficiency</h2> */}
       
            <Title className={'services-application-title'}>
              Centralize your marketing <br /> data for enhanced efficiency
            </Title>
           
         
          </div>
        </div>
      </div>
    </div>
  );
}
