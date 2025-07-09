import svg_1 from '../../images/svg-1.png';
import new_york from '../../images/newyork.png';
import contact_us from '../../images/contact_us.png';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Us',
  headline: 'Who we are?',
  description:
    'Wiry is a digital marketing company dedicated to helping businesses enhance their online presence and achieve their marketing goals in the ever-evolving digital landscape.',
  buttonLabel: 'Scroll Top',
  imgStart: false,
  img: svg_1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'expertise',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Big APPLE',
  headline: 'Why Businesses Trust Us',
  description:
    'As a New York-based firm which is the hub of marketing, we understand the unique challenges and opportunities that local businesses face. Our deep knowledge of the market, combined with our technical expertise, makes us the ideal partner for your digital needs.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: new_york,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'contactus',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Joining Our Team is Easy',
  description:
    "Contact us to know more about open position",
  buttonLabel: 'Contact Us',
  imgStart: false,
  img: contact_us,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};
