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
// import MainLayout from './MainLayout'
function App() {
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeValue = Math.max(1 - scrollY / window.innerHeight, 0); //take the transparency rate make it's never smaller than zero
      setFade(fadeValue);
    };

    window.addEventListener('scroll', handleScroll); //registers the handleScroll function to run whenever the user scrolls
    return () => {
      window.removeEventListener('scroll', handleScroll);
      //Cleanup function to remove the event listener when the component unmounts, preventing memory leaks
    };
  }, []);

  return (
    <div id="root">
    <Router>
      <Header />
      {/* <MainLayout> */}
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
      {/* </MainLayout> */}
      <Footer />
    </Router>
    </div>
  );
}

export default App;
