// MainHeader.js

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import axios from 'axios';


const MainHeader = () => {
 const [showMenu, setShowMenu] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const customNavBarRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  
  const handleLogout = () => {
    localStorage.removeItem('@token');
    setIsLoggedIn(false);
    setUserData(null);
    window.location.href = '/';
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  const handleOutsideMenuClick = (e) => {
    if (customNavBarRef.current && !customNavBarRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideMenuClick);
    return () => {
      document.removeEventListener('click', handleOutsideMenuClick);
    };
  }, []);

  useEffect(() => {
    const headerElement = customNavBarRef.current;
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  // Check if the user is logged in based on the presence of the token
  const token = localStorage.getItem('@token');
  if (token) {
    try {
      const decodedToken = jwt.verify(token, '1234');
      setIsLoggedIn(true);
      setUserData(decodedToken);
      console.log(token)
    } catch (error) {
      console.error('Error while verifying token:', error);
      setIsLoggedIn(false);
      setUserData(null);
    }
  } else {
    setIsLoggedIn(false);
    setUserData(null);
  }
}, []);
  
const handleLogin = () => {
  const { email, password } = loginData;

  axios
    .post('/login', { email, password }) 
    .then((response) => {
      const user = response.data.user
      // Save the token in local storage
      localStorage.setItem('@token', response.data.token);
      setIsLoggedIn(true);
      localStorage.setItem('@user', user)
      setUserData(user);
    })
    .catch((error) => {
      console.error('Error while logging in:', error);
      // Optionally, you can show an error message to the user
    });
    
};


  return (
    <Container>
      <CustomNavBar ref={customNavBarRef} className="header">
        <MenuIcon onClick={handleMenuClick}>
          <FaBars />
        </MenuIcon>
        <Title>
          <Link to="/">Smart Campus</Link>
        </Title>
        {!isLoggedIn ? (
          <ButtonsContainer>
            <LoginInput
              type="email" 
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
            <LoginButton onClick={handleLogin}>Sign In</LoginButton>
            <Link to="/signup">Create a new user</Link>
          </ButtonsContainer>
        ) : (
          <UserContainer>
            <Username> {userData.firstName}</Username>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </UserContainer>
        )}
      </CustomNavBar>
      <MenuLinks show={showMenu} headerHeight={headerHeight}>
        <MenuList show={showMenu}>
          <MenuListItem>
            <MenuLinkItem to="/" onClick={handleMenuItemClick}>
              Home
            </MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/students" onClick={handleMenuItemClick}>
              Students
            </MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/stuff" onClick={handleMenuItemClick}>
              Stuff
            </MenuLinkItem>
          </MenuListItem>
          <MenuListItem>
            <MenuLinkItem to="/contact" onClick={handleMenuItemClick}>
              Contact Us
            </MenuLinkItem>
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  padding: 10px;
  z-index: 1000;
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

const MenuLinks = styled.div`
  position: fixed;
  top: ${({ headerHeight }) => headerHeight}px;
  left: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  background-color: #000;
  width: 100%;
  z-index: 999;
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
  left: 0;
  width: 100%;
  padding: 10px;
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
