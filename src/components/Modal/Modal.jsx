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
    email: '',
    company: '',
    phone: '',
  });

  const sendToTelegram = async (data) => {
    const botToken = '7540969717:AAGEb1FQQRoHXt5D4SSMHme_qnsAMRMxWmo';
    const chatId = '563246689';
    const message = `Email: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message,
    )}`;

    try {
      await fetch(url);
      alert('Message sent to Telegram');
    } catch (error) {
      console.error(error);
      alert('Error sending message to Telegram');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram(inputValue);
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
            <label htmlFor="bussines email">BUSSINES EMAIL*</label>
            <input
              onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
              value={inputValue.email}
              id="bussines email"
              className="modal-input"
              type="email"
              required
            />
            <label htmlFor="company">COMPANY*</label>
            <input
              onChange={(e) => setInputValue({ ...inputValue, company: e.target.value })}
              value={inputValue.company}
              id="company"
              className="modal-input"
              label="COMPANY*"
              type="text"
              required
            />
            <label htmlFor="fdsa">PHONE</label>
           
              <PhoneInput
                inputStyle={{ width: '100%', height: '45px', border: '1px solid #303030' }}
                value={inputValue.phone}
                onChange={(value) => setInputValue({ ...inputValue, phone: value })}
                country={'uz'}
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
