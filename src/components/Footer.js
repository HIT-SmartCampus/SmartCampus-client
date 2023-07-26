import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Quote>
        An innovative approach to optimal resource use and maximal comfort.
      </Quote>
      <Link href="https://www.hit.ac.il/">HIT College Site</Link>
      <Copyright>&copy; 2023 Smart Campus Project</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000; /* Set to black to match the header */
  color: #fff;
  padding: 16px;
  text-align: center;
`;

const Quote = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #fff;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
`;
