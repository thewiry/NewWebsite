import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: flex;
  justify-content: flex-start;   /* Align content to the left */
  align-items: flex-start;       /* Align content to the top-left */
  flex-direction: column;
  width: 100%;                   /* Ensure full width */
  height: auto;                  /* Adjust height dynamically */
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

// export const ImgWrap = styled.div`
//   max-width: 555px;
//   height: 100%;
// `;

export const ImgWrap = styled.div`
  width: 100%;                /* Ensure full width */
  max-width: 100%;            /* Allow it to stretch fully */
  height: auto;               /* Adjust height dynamically */
  display: flex;              /* Flexbox for better alignment */
  justify-content: flex-start; /* Align content to the left */
`;


export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;

// export const Video = styled.video`
//   width: 100%;
//   max-width: 100px;  /* Increase the maximum width */
//   height: 1200px;  /* Maintain aspect ratio */
//   margin-top: 0;
//   margin-right: 0;
//   margin-left: 0px;
//   padding-right: 0;
//   border-radius: 10px; /* Optional: To match image styling or give a softer look */
// `;

export const Video = styled.video`
  width: 100%;                /* Take full width of the parent container */
  max-width: 900px;           /* Set a maximum width for the video */
  height: auto;               /* Maintain aspect ratio */
  border-radius: 10px;        /* Optional: Rounded corners */
  margin: 0;                  /* Remove any margin */
  padding: 0;                 /* Ensure no extra padding */
  display: block;
`;




