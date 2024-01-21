import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Best } from './components/Best';
import { Book } from './components/Book';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Service } from './components/Service';
import { Top } from './components/Top';
function App() {
  useEffect(() => {
    AOS.init({
      delay:500,
      offset:100,
      easing:"ease-in-out",
      duration:1000,
    });
  }, [])
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Book/>
    <Service/>
    <Best/>
    <Banner/>
    <Top/>
    <Footer/>
   </div>
  );
}

export default App;
