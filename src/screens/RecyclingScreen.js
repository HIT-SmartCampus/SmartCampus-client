import React from 'react';
import styled, { keyframes } from 'styled-components';
import IFrameTemplate from '../components/IFrameTemplate';
import RecyclingIcon from '../assets/cardRecycle.png'; // Replace this with the recycling icon image

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 2rem;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const PageTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #0066ff;
  animation: ${fadeInUp} 1s ease;
`;


const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 1s ease;
`;

const AnimationText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  position: relative;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease;
`;

const RecyclingIconImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 1rem; /* Move the icon to the right */
  margin-right: 1rem; /* Space between icon and text */
  animation: fadeInRight 1s ease;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  border: none;
  animation: ${fadeInUp} 1s ease;
`;

const RecyclingAndGarbageEfficiencyPage = () => {
  return (
    <Container>
      <PageTitle>Recycling and Garbage Efficiency</PageTitle>

      {/* First animation container */}
      <AnimationContainer>
        <AnimationText>
          Harness the power of IoT sensors to optimize recycling and garbage disposal processes. 
          Achieve efficiency in waste management and contribute to a cleaner environment.
        </AnimationText>
        <RecyclingIconImage src={RecyclingIcon} alt="Recycling Icon" />
      </AnimationContainer>

      {/* Real-Time Dashboard */}
      <IframeContainer>
        <IFrameTemplate title='RecyclingDashboard' src="https://your-real-time-dashboard-url.com" />
      </IframeContainer>
    </Container>
  );
};

export default RecyclingAndGarbageEfficiencyPage;
