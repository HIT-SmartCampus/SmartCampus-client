import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const isLoggedIn = localStorage.getItem('@token');

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, remove the token from local storage and redirect to the homepage
    localStorage.removeItem('@token');
    window.location.href = '/';
  };

  return (
    <Container>
      <CustomNavBar>
        <MenuIcon onClick={handleMenuClick}>
          <FaBars />
        </MenuIcon>
        <Title>
          <Link to="/">Smart Campus</Link>
        </Title>
        {!isLoggedIn ? (
          <ButtonsContainer>
            <LoginInput type="text" placeholder="Username" />
            <LoginInput type="password" placeholder="Password" />
            <LoginButton>Sign In</LoginButton>
            <Link to="/signup">Create a new user</Link>
          </ButtonsContainer>
        ) : (
          <UserContainer>
            <Username>Welcome, {JSON.parse(localStorage.getItem('@user')).firstName}</Username>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </UserContainer>
        )}
      </CustomNavBar>
      <MenuLinks show={showMenu}>
        <MenuList show={showMenu}>
          <MenuListItem>
            <MenuLinkItem to="/">Home</MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/students">Students</MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/stuff">Stuff</MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/contact">Contact Us</MenuLinkItem>
          </MenuListItem>
        </MenuList>
      </MenuLinks>
    </Container>
  );
};

export default MainHeader;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
`;

const CustomNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
`;

const MenuLinks = styled.div`
  position: left;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    padding: 8px 16px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

const LoginInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  background-color: #000; /* Background color for the opened menu */
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 20px;
`;

const MenuListItem = styled.li`
  margin-bottom: 10px;
`;

const MenuLinkItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff; /* Keep the color white on hover as well */
  }
`;
