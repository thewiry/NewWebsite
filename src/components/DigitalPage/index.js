import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import DigitalSection from '../DigitalSection';
import {
  homeObjOne,
  homeObjTwo
} from '../DigitalSection/SocialData';
import DigitalHome from './DigitalHome';
import NavbarDigital from '../Navbar Digital';

function Digital() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarDigital toggle={toggle} />
      <DigitalHome />
      <DigitalSection {...homeObjOne} />
      <DigitalSection {...homeObjTwo} />
      {/* <GenaiSection {...homeObjThree} />  */}
    </>
  );
}

export default Digital;
