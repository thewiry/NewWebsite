import robo from '../../images/robo.png';
import generation from '../../images/generation.png';
// import contact_us from '../../images/contact_us.png';

export const homeObjOne = {
  id: 'automation',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Automation',
  headline: 'GEN AI Auto',
  description:
    'With GEN AI automation it streamlines processes by automating repetitive tasks, freeing up human resources for more strategic activities.',
  buttonLabel: 'Scroll Top',
  imgStart: false,
  img: robo,
  alt: 'genai',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'mediageneration',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Media Generation',
  headline: 'GEN AI for Creativity',
  description:
    'Gen AI can enhance creativity by generating new ideas, inspiring novel approaches, and providing a diverse range of perspectives. It can also assist in refining existing creative works, suggesting improvements, and exploring alternative possibilities.',
  buttonLabel: 'Home',
  imgStart: true,
  img: generation,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

// export const homeObjThree = {
//   id: 'contactus',
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: 'Join our Team',
//   headline: 'Joining Our Team is Easy',
//   description:
//     "Contact us to know more about open position",
//   buttonLabel: 'Contact Us',
//   imgStart: false,
//   img: contact_us,
//   alt: 'Papers',
//   dark: false,
//   primary: false,
//   darkText: true
// };
