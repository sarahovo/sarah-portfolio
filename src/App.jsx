import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./Components/Hero";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Gallery from './Components/Gallery';
import MainHome from './Components/MainHome';

function App() {
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeValue = Math.max(1 - scrollY / window.innerHeight, 0);
      setFade(fadeValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={ 
              <> 
                <Hero fade={fade} />
                <MainHome />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
