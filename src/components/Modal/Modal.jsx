import { createTheme, ThemeProvider } from '@mui/material';
import './Modal.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import Select from 'react-select'
import React from 'react';
import Button from '../Button/Button';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import close from '../../assets/close.png';
export default function Modal({modal, setModal}) { 

  useGSAP(()=>{
    gsap.fromTo('#fade', {
     
      opacity: 0
    }, 
    {
    
      opacity: 1, 
      duration: 1,
     

    }
  )
  },[])
  const [inputValue, setInputValue] = React.useState({
  
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const sendToTelegram = async (data) => {
    const botToken = '7540969717:AAGEb1FQQRoHXt5D4SSMHme_qnsAMRMxWmo';
    const chatId = ['57844596', '503118393', '563246689'];
    const message = `Full Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;

    const promises = chatId.map((chatId)=>{
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message,
      )}`;
      return fetch(url)
    })
  

    try {
      await Promise.all(promises);
      alert('Message sent to Telegram');
    } catch (error) {
      console.error(error);
      alert('Error sending message to Telegram');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram(inputValue);
    setInputValue({fullName:'', email: '', phone: '', message: ''})
  };

  return (
      <div className={`layer ${modal ? 'layer-active' : ''}`} onClick={()=> setModal(false)}>
           <div id='fade' className={`modal ${modal ? 'modal-active' : ''}`} onClick={e => e.stopPropagation()}> 
        <div className="modal-wrapper">
          {modal &&    <img onClick={()=> setModal(false)} src={close} alt="close" /> }
       
          <h2 className="modal-title">Get a Free Consultation for Your Project</h2>
          <p className="modal-subtitle">
            Talk to an expert and find out what CodeNexus Systems can do for your business
          </p>
          <form onSubmit={handleSubmit} action="">
            {/* <label htmlFor="">BUSSINES EMAIL*</label> */}
            <label htmlFor="bussines email">Full Name*</label>
            <input
              onChange={(e) => setInputValue({ ...inputValue, fullName: e.target.value })}
              value={inputValue.fullName}
              id="bussines email"
              className="modal-input"
              type='text'
              required
            />
            <label htmlFor="company">Email*</label>
            <input
              onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
              value={inputValue.email}
              id="company"
              className="modal-input"
              label="Email*"
              type="email"
              required
            />
            <label htmlFor="phone">PHONE</label>
           
              <PhoneInput
                inputStyle={{ width: '100%', height: '45px', border: '1px solid #303030' }}
                value={inputValue.phone}
                onChange={(value) => setInputValue({ ...inputValue, phone: value })}
                country={'us'}
              />
              <label htmlFor='message'>Message*</label>
              <input
              onChange={(e) => setInputValue({ ...inputValue, message: e.target.value })}
              value={inputValue.message}
              id="message"
              className="modal-input"
              type='text'
              
            />
          
            {/* <Select placeholder='' options={options}/> */}
            {/* <button type='submit'>send</button> */}
            <Button type="submit" className={'input-btn'} >GET NOW</Button>
            <span className='modal-policy'>
              By submitting this form, you confirm that you agree to the storing and processing of
              your personal data by CodeNexus Systems
           
            </span>
          </form>
        </div>
      </div>

      </div>
   
  
  );
}
