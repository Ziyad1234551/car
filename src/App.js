import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Book } from './components/Book';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Service } from './components/Service';
import { Top } from './components/Top';
function App() {
  useEffect(() => {
    AOS.init({
      delay:2000,
      easing:"ease-in-out",
      duration:4000,
    });
  }, [])
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Book/>
    <Service/>
    <Banner/>
    <Top/>
    <Footer/>
   </div>
  );
}

export default App;
