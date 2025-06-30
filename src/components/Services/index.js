// import React from 'react';
// import { Link } from 'react-router-dom'; 
// import Icon1 from '../../images/svg-1.png';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-5.svg';
// import {
//   ServicesContainer,
//   ServicesH1,
//   ServicesWrapper,
//   ServicesCard,
//   ServicesIcon,
//   ServicesH2,
//   ServicesP
// } from './ServicesElements';

// const Services = () => {
//   return (
//     <ServicesContainer id='services'>
//       <ServicesH1>Our Services</ServicesH1>
//       <ServicesWrapper>
//       <Link to="/data-engineering" style={{ textDecoration: 'none' }}>
//         <ServicesCard>
//           <ServicesIcon src={Icon1} />
//           <ServicesH2>Data Engineering</ServicesH2>
//           <ServicesP>
//             We help reach your goals through data collection and Engineering techniques.
//           </ServicesP>
//         </ServicesCard>
//         </Link>
//         <Link to="/gen-ai" style={{ textDecoration: 'none' }}>
//         <ServicesCard>
//           <ServicesIcon src={Icon2} />
//           <ServicesH2>GEN AI</ServicesH2>
//           <ServicesP>
//             We provide GEN AI solution of all types from bots to media.
//           </ServicesP>
//         </ServicesCard>
//         </Link>
//         <Link to="/architecture" style={{ textDecoration: 'none' }}>
//         <ServicesCard>
//           <ServicesIcon src={Icon3} />
//           <ServicesH2>Cloud Architecture</ServicesH2>
//           <ServicesP>
//             Be Cloud or On-prem, we architect solutions tailored to your business.
//           </ServicesP>
//         </ServicesCard>
//         </Link>
//       </ServicesWrapper>
//     </ServicesContainer>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesCardContent,
  ServicesDefaultText,
  ServicesHoverText,
  ServicesPopup,
  PopupContent,
  PopupImage,
  PopupText,
} from './ServicesElements';

const Services = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const handleCardNavigation = (serviceId) => {
    // Use navigate to navigate to the specified path with dynamic serviceId
    history.push(`/service/${serviceId}`);
  };

  const handleCardClick = (content) => {
    console.log('Card clicked');
    // Set the popup content for the clicked card
    setPopupContent(content);
  };

  const handlePopupClose = () => {
    console.log('Popup closed');
    // Close the popup by resetting the content
    setPopupContent(null);
  };

  const handleCardHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {/* Card 1 */}
        <ServicesCard
          onClick={() => {
            handleCardNavigation('seo');
            handleCardClick(
              <PopupContent>
                <PopupImage src={Icon1} alt="SEO Image" />
                <PopupText>SEO Popup Content</PopupText>
              </PopupContent>
            );
          }}
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <ServicesIcon src={Icon1} />
          <ServicesCardContent>
            <ServicesH2>SEO</ServicesH2>
            <ServicesDefaultText isHovered={isHovered}>
              Curated Search Engine Optimization
            </ServicesDefaultText>
            <ServicesHoverText isHovered={isHovered}>
            The Most powerful and effective tool to get you on top of Search Engines
            </ServicesHoverText>
          </ServicesCardContent>
        </ServicesCard>

        {/* Card 2 */}
        <ServicesCard
          onClick={() => {
            handleCardNavigation('social');
            handleCardClick(
              <PopupContent>
                <PopupImage src={Icon2} alt="Social Media Image" />
                <PopupText>Social Media Popup content</PopupText>
              </PopupContent>
            );
          }}
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <ServicesIcon src={Icon2} />
          <ServicesCardContent>
            <ServicesH2>Social Media</ServicesH2>
            <ServicesDefaultText isHovered={isHovered}>
              Instagram, Facebook, Twitter ETC.
            </ServicesDefaultText>
            <ServicesHoverText isHovered={isHovered}>
            A-Z handling of your social media pages to increase engagement with customers
            </ServicesHoverText>
          </ServicesCardContent>
        </ServicesCard>

        {/* Card 3 */}
        <ServicesCard
          onClick={() => {
            handleCardNavigation('digital');
            handleCardClick(
              <PopupContent>
                <PopupImage src={Icon3} alt="Virtual Tours Image" />
                <PopupText>Virtual Tours Popup content</PopupText>
              </PopupContent>
            );
          }}
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <ServicesIcon src={Icon3} />
          <ServicesCardContent>
            <ServicesH2>Virtual Tours</ServicesH2>
            <ServicesDefaultText isHovered={isHovered}>
              Create Virtual Tours,Paid Ads and Branding.
            </ServicesDefaultText>
            <ServicesHoverText isHovered={isHovered}>
            Create the 360 virtual views & Brand of your own & a lot more.
            </ServicesHoverText>
          </ServicesCardContent>
        </ServicesCard>
      </ServicesWrapper>
      {popupContent && <ServicesPopup onClick={handlePopupClose}>{popupContent}</ServicesPopup>}
    </ServicesContainer>
  );
};

export default Services;

