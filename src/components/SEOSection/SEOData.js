import google_search from "../../images/Google_search.png";
import data_processing from "../../videos/Search_engine_optimization.mp4";
import data_architecture from "../../videos/data_architecture.mp4";

export const homeObjOne = {
  id: 'googlesearch',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Google Search',
  headline: 'What We Offer in SEO',
  description: `There are a number of different elements that determine your Google organic footprint and our job is to understand and act on these for optimal SEO page rankings.

SEO Services at Wiry: Elevate Your Online Presence\n
Welcome to Wiry, your go-to destination for top-notch SEO services that are designed to boost your digital visibility and drive meaningful results. In a world where online competition is fierce, having a strong SEO strategy is crucial to stand out and reach your target audience. At Wiry, we're here to make that happen for you.`,
  buttonLabel: 'Scroll Top',
  imgStart: false,
  img: google_search,
  alt: 'google search',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'ourapproach',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'SEO',
  headline: 'Our Approach:',
  description:
    `1. Comprehensive SEO Audits.\n
    2. Keyword Optimization.\n
    3. On-Page Optimization.\n
    4. Content Strategy.\n
    5. Link Building.
    `,
  buttonLabel: 'Home',
  imgStart: true,
  video: data_processing,
  alt: 'SEO strategy',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'whychooseus',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Complete Solution',
  headline: 'Why Choose our Infrastructure',
  description:
    `Proven Results: Our track record speaks for itself\n
    Transparent Reporting: We believe in keeping you informed\n
    Continuous Optimization: The digital landscape is ever-evolving, and so are our strategies.\n
    Dedicated Support:Your success is our priority`,
  buttonLabel: 'Contact Us',
  imgStart: false,
  video: data_architecture,
  alt: 'infrastructures',
  dark: false,
  primary: false,
  darkText: true
};


