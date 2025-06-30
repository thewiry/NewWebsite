import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import SocialSection from '../SocialSection';
import {
  homeObjOne,
  homeObjTwo
} from '../SocialSection/SocialData';
import SocialHome from './SocialHome';
import NavbarSocial from '../Navbar Social';

function Social() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarSocial toggle={toggle} />
      <SocialHome />
      <SocialSection {...homeObjOne} />
      <SocialSection {...homeObjTwo} />
      {/* <GenaiSection {...homeObjThree} />  */}
    </>
  );
}

export default Social;
