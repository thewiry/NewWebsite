import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/Virtual_Tours.mp4';
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
} from './DigitalHomeElements';


function DigitalHome() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='digital'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>The Ariz Solution <br/> Migrate your Infrastructure to Cloud with Ease</HeroH1>
        <HeroP>
        Ariz can Architect and migrate your business into the cloud seamlessly with its expert solutions architects.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to= 'on-demand'
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

export default DigitalHome;
