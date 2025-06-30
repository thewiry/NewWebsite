// import styled from 'styled-components';

// export const ServicesContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #010606;

//   @media screen and (max-width: 768px) {
//     height: 1100px;
//   }

//   @media screen and (max-width: 480px) {
//     height: 1300px;
//   }
// `;

// export const ServicesWrapper = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   align-items: center;
//   grid-gap: 16px;
//   padding: 0 50px;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
//   }
// `;

// export const ServicesCard = styled.div`
//   background: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 10px;
//   max-height: 340px;
//   padding: 30px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;

// export const ServicesIcon = styled.img`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `;

// export const ServicesH1 = styled.h1`
//   font-size: 2.5rem;
//   color: #fff;
//   margin-bottom: 64px;

//   @media screen and (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

// export const ServicesH2 = styled.h2`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// export const ServicesP = styled.p`
//   font-size: 1rem;
//   text-align: center;
// `;

import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesDefaultText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #333; /* Default text color */
  opacity: ${(props) => (props.isHovered ? '0' : '1')};
  transition: opacity 0.2s ease-in-out;
`;

export const ServicesHoverText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #333; /* Hovered text color */
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;


export const ServicesPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the popup appears above other content */
`;

export const PopupContent = styled.div`
  margin-top: 50px; /* Add some top margin to PopupContent */
  background: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

export const PopupImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const PopupText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

// Other styled components for ServicesContainer, ServicesWrapper, etc.
