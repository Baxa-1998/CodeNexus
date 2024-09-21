import './Awards.scss';
import gartner from '../../assets/gartner.svg';
import stars from '../../assets/stars.svg';
import forester from '../../assets/forrester.svg';
import nucleus from '../../assets/nucleus.svg';
import { useEffect, useState } from 'react';

const company = [
  {
    id: 1,
    logo: gartner,
    text: 'Gartner MQ for B2B Marketing',
  },
  {
    id: 2,
    logo: forester,
    text: '2024 Forester Wave',
  },
  {
    id: 3,
    logo: nucleus,
    text: 'Nucleus Research',
  },
];
const Awards = () => {
  const [active, setActive] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Состояние для анимации

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Запускаем анимацию исчезновения

      setTimeout(() => {
        setActive((prevActive) => !prevActive); // Меняем текст после исчезновения
        setFadeOut(false); // Запускаем анимацию появления
      }, 500); // Даем 1 секунду на исчезновение текста
    }, 3000); // Каждый 3 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='awards'>
      <div className='awards-wrapper'> 
        <h3 className={`awards-title ${fadeOut ? 'hide' : 'show'}`}>
          {active ? 'RECOGNISED AS LEADER BY' : 'USERS LOVE CODENEXUS'}
        </h3>
        <div className="awards-company">
        {company.map((item)=> (
                <div key={item.id} className='award-items'>
   
                <img className={`awards-logo ${fadeOut ? 'hide' : 'show'}`} src={item.logo} alt="logo" />
                <p className={`awards-subtitle ${fadeOut ? 'hide' : 'show'}`}>{active ? item.text : <img src={stars}/>}</p>
              </div>
        ))}

        </div>
      
  
      </div>
    </div>
  );
};

export default Awards;
