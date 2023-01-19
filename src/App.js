import { Route, Routes } from 'react-router';
import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Home from './Components/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Experiences from './Components/Experiences';
import { ErrorPage } from './Components/Error';
import PaginaIniziale from './Components/PaginaIniziale';


function App() {
  return (
    <div className='altezza'>
       {/* <PaginaIniziale/> */}
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
