import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  border: none;
`;

const DashboardIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const OptimizingWaterConsumptionPage = () => {
  return (
    <Container>
      <Title>Optimizing Water Consumption</Title>
      <Description>
        By using IoT devices, you can optimize your water consumption and reduce waste. 
        Check out the real-time data on this ThingsBoard dashboard to see how you can make a difference.
      </Description>
      <IframeContainer>
        <DashboardIframe src="https://app.hittest.smarty.camp/dashboard/94cd0fd0-a61e-11ed-aa55-4bc57f85b6ff?publicId=25d84fd0-5912-11ed-804e-411dde1247cf" />
      </IframeContainer>
    </Container>
  );
};

export default OptimizingWaterConsumptionPage;
