import React from 'react';
import styled, { keyframes } from 'styled-components';
import IFrameTemplate from '../components/IFrameTemplate';
import WaterIcon from '../assets/cardWater.png';

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

const WaterIconImage = styled.img`
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

const OptimizingWaterConsumptionPage = () => {
  return (
    <Container>
      <PageTitle>Optimizing Water Consumption</PageTitle>


      <AnimationContainer>
        <AnimationText>
        By using IoT devices, you can optimize your water consumption and reduce waste. 
        Check out the real-time data on this ThingsBoard dashboard to see how you can make a difference.
        </AnimationText>
        <WaterIconImage src={WaterIcon} alt="Water Icon" />

      </AnimationContainer>

      <AnimationContainer>
        <WaterIconImage src={WaterIcon} alt="Water Icon" />
        <AnimationText>
          Our smart IoT devices continuously monitor water usage and provide real-time insights to help you conserve water effectively.
        </AnimationText>
      </AnimationContainer>

      
      {/* Real-Time Dashboard */}
      <IframeContainer>
        <IFrameTemplate title='WaterDashboard' src="https://app.hittest.smarty.camp/dashboard/9ff093c0-28cb-11ee-87d4-cff6bc55cfcd?publicId=25d84fd0-5912-11ed-804e-411dde1247cf" />
      </IframeContainer>
    </Container>
  );
};

export default OptimizingWaterConsumptionPage;
