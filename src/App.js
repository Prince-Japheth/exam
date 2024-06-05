import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './styles/navbar.css';
import { logo, menu, close } from './assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';

import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import GetStarted from './components/GetStarted';
import Dashboard from './components/Dashboard';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className='navbar'>
      <div className="log">
        <img src={logo} alt="" className='logo' />
        <p>YAFET</p>
      </div>
      <ul className={toggle ? "navbar-list sidebar" : 'navbar-list'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/get-started">Get Started</Link></li>
      </ul>
      <div className="ok">
        <img
          src={toggle ? close : menu}
          alt=""
          className='toggle-menu'
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      {pathname !== '/dashboard' && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {pathname !== '/dashboard' && <Footer />}
    </div>
  );
}

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;