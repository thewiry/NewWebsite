import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/Social_media.mp4';
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
} from './SocialHomeElements';


function SocialHome() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='social'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>The Future with GEN AI <br/> Learn how GEN AI can boost your business</HeroH1>
        <HeroP>
        Ariz can transform your business with GEN AI and future proof with customized solutions that drives growth exponentially.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to= 'automation'
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

export default SocialHome;
