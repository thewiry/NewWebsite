import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import SEOSection from '../SEOSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../SEOSection/SEOData';
import SEOHome from './SEOHome';
import NavbarData from '../Navbar SEO';

function SEO() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarData toggle={toggle} />
      <SEOHome />
      <SEOSection {...homeObjOne} />
      <SEOSection {...homeObjTwo} />
      <SEOSection {...homeObjThree} />
    </>
  );
}

export default SEO;
