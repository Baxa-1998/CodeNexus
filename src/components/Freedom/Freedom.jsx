import React from 'react'
import './Freedom.scss'
import Title from '../Title/Title'
import crm from '../../assets/crm-back.jpg';
import Button from '../Button/Button';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Layer from '../Layer/Layer';
import { ScrollTrigger } from 'gsap/all';
export default function Freedom() {
  useGSAP(()=>{
    gsap.fromTo('.freedom-title', 
      {
      y: 150, 
      opacity: 0
      
    },
    {
      y: 0, 
      duration: 0.5, 
      opacity: 1,
      scrollTrigger: {
        trigger: '.freedom-title',
  
        start: "bottom bottom"
      }
    }
    
  )
  gsap.fromTo('#right-img',{
    x: -600, 
    opacity: 0
  },
  {
    x: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: '#right-img',
      start: "20% bottom"
    }
  }
  
)
gsap.fromTo('#left-img',{
  x: 600, 
  opacity: 0
},
{
  x: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: '#left-img',
    start: "20% bottom"
  }
}

)
  },[])

  return (
    <div className='freedom'>
      <Layer>
      <Title className={'freedom-title'}>Achieve sales, automation and customer service <br /> excellence</Title>
      </Layer>
     
        <div className="freedom-items">
          <div id='left-img' className="freedom-item">
         <h3>CRM workflows for <br /> 20+ industries</h3>
          </div>
          <div className="freedom-item">
          <h3>Enterprise-grade <br /> scalability</h3>
          </div>
          <div id='right-img' className="freedom-item">
           <h3>Boost productivity</h3>
          </div>
        </div>
    
    </div>
  )
}
