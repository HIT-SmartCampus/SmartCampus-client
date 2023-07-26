import React from 'react';
import styled from 'styled-components';
import "../Style.css";
import CardsRow from './card/CardsRow';
import InfoSection from './InfoSection';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Add any additional styling for the container if needed */
  /* For example, you can set a fixed width or max-width to limit its size */
  /* width: 100%; */
  /* max-width: 1200px; */
  /* margin: 0 auto; */
`;

const MainBody = () => {
  return (  
    <>
      <InfoSection />
      <br />
      <MainContainer>
        <CardsRow />
      </MainContainer>
      <br />
    </>
  );
};

export default MainBody;
