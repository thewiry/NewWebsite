import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin
// } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  // SocialIcons,
  // SocialIconLink
} from './FooterElements';
import logo_white from '../../images/Logo-white.png';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink as="a" href="tel:+12018902933"> Tel : <br/> +1(201)890-2933</FooterLink>
              <FooterLink as="a" href="mailto:info@Arizinc.com"> Email: info@Arizinc.com</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinkItems>
          <FooterLinkTitle>Services</FooterLinkTitle>
          <FooterLink to="/data-engineering">Data Engineering</FooterLink>
          <FooterLink to="/gen-ai">GEN AI Solutions</FooterLink>
          <FooterLink to="/architecture">Architecture Solutions</FooterLink>
          <FooterLink to="/signin">Agency</FooterLink>
          </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <img src={logo_white} alt="Ariz Inc Logo" style={{height: '70px', width: 'auto'}} />
            </SocialLogo>
            <WebsiteRights>Ariz  ©  {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/briandesignz'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
