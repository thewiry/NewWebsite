import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import data_video from "../../videos/SEO.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './SEOHomeElements';


function SEOHome() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='seo-home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={data_video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Search Engine Optimization <br/> Get your Product to the top of all searches </HeroH1>
        <HeroP>
        Wiry specializes in Ranking your website to the top of searches so that your product get enough exposure and traffic which results in to lead generation with the top listing.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to= 'googlesearch'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default SEOHome;
