
import { useEffect, useState } from 'react'
import './App.scss'
import Main from './components/Main/Main'
import Sales from './components/Sales/Sales'
import Sport from './components/Sport/Sport'
import Services from './components/Services/Services'
import Platform from './components/Platform/Platform'
import Freedom from './components/Freedom/Freedom'
import Footer from './components/Footer/Footer'

function App() {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    if (modal) {
      // Скрыть прокрутку
      document.body.style.overflow = "hidden";
    } else {
      // Вернуть прокрутку
      document.body.style.overflow = "";
    }

    // Очистка стилей при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  return (
    <>
      <Main modal= {modal} setModal={setModal}/>
      <Sales setModal={setModal}/>
      <Sport/>
      <Services setModal ={setModal}/>
      <Platform setModal= {setModal}/>
      <Freedom/>
      <Footer/>
    </>
  )
}

export default App
