import { Route, Routes } from 'react-router';
import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Esperienze from './Components/Esperienze';
import Home from './Components/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Esperienze />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
