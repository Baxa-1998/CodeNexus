import React, { useState } from 'react';
import './Main.scss';
import logo from '../../assets/logo2.png';
import dashboard from '../../assets/dashboard2.webp';
import Modal from '../Modal/Modal';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

export default function Main({modal, setModal}) {
  useGSAP(()=>{
    gsap.fromTo('#stagger-text', {
      y: 50,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1, 
      duration: 1, 
    
       ease: 'power4.out',
      stagger: {
        amount: 0.5,
      }

    }
    
  )
  },[])

 
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="main_text-container">
          <img id='stagger-text' className="logo" src={logo} alt="logo" />
          <h1 id='stagger-text' className="main_text-title">
            An Innovative CRM Platform for Efficient <br /> Business Management
          </h1>
          <p id='stagger-text' className="main_text-subtitle">
            Improve customer engagement, boost sales, and automate key <br /> business processes to help
            your business grow faster and more  effectively.
          </p>
        </div>

        <img  className="dashboard-img" src={dashboard} alt="dashboard" />
      </div>
      <div>
        <Modal modal={modal} setModal={setModal}/>
        
      </div>
    </div>
  );
}
