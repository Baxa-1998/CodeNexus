
import salesBackground from '../../assets/Sales-2.webp';
import automateBackground2 from '../../assets/Automate-2.webp';

import './Sales.scss';
import Title from '../Title/Title';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default function Sales({setModal}) {

  useGSAP(()=>{
  
    gsap.fromTo('.sales-img', {
      opacity: 0, 
      y: 150
    },
    {
      opacity: 1, 
      y: 0, 
      duration: 1,
      ease: 'power3.inOut'
    }
  )
  
  gsap.fromTo('.sales-title', 
    {
    y: 100, 
    
  },
  {
    y: -10, 
    duration: 0.5, 

    scrollTrigger: {
      trigger: '.sales-title',

      start: "bottom bottom"
    }
  }
  
)
gsap.fromTo('.sales-subtitle', 
  {
  y: 80, 
  
},
{
  y: -10, 
  duration: 0.5, 

  scrollTrigger: {
    trigger: '.sales-title',

    start: "bottom bottom"
  }
}

)
gsap.fromTo('.text-fade', 
  {
  y: 80, 
  
},
{
  y: -10, 
  duration: 0.5, 

  scrollTrigger: {
    trigger: '.text-fade',

    start: "bottom bottom"
  }
}

)
gsap.fromTo('.sales-btn', 
  {
  y: 80, 
  
},
{
  y: -10, 
  duration: 0.5, 

  scrollTrigger: {
    trigger: '.sales-btn',

    start: "bottom bottom"
  }
}


)
gsap.fromTo('.sales-automate-img', {
  opacity: 0, 
  y: 150
},
{
  opacity: 1, 
  y: 0, 
  duration: 1,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.sales-automate-img',
  
      start: "bottom bottom"
    }
})
  },[])
  return (
    <section className="sales">
      <div className="sales-wrapper">
        <div  className="sales-customer">
          <div id='test' className="sales-img">
            <img src={salesBackground} alt="sales-background" />
          </div>
          <div className="sales-text-block">
            {/* <h2 className="sales-title">Centralize your customer <br /> data for enhanced efficiency</h2> */}
           <Layer>
                 <Title className={'sales-title'}>
              Centralize your customer <br /> data for enhanced efficiency
            </Title>
           </Layer>
       

         
           
              <p className="sales-subtitle">
              Benefit from the 360-degree view of contact and account data with a <br /> complete
              omnichannel engagement history across the entire customer <br /> journey. Improve
              customers' experience and engagement.
            </p>

            
      
          </div>
        </div>

        <div className="sales-automate">
          <div className="sales-automate-text">
            <Layer>
            <Title className={'text-fade'}>Automate complex <br /> sales processes</Title>
            </Layer>
           <Layer>
           <button onClick={()=>setModal(true)} className='sales-btn'>Get a consultation</button>
           </Layer>
          
          </div>
          <div className="sales-automate-img">
            <img src={automateBackground2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
