import React, { useState } from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SEO from './components/SEOPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Social from './components/SocialPage/index';
import Digital from './components/DigitalPage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/service/seo' component={SEO} exact />
        <Route path='/service/social' component={Social} exact />
        <Route path="/service/digital" component={Digital} />
      </Switch>
      <Footer /> {/* Footer added here */}
    </Router>
  );
}

export default App;
