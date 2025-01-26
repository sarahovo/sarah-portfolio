import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }
    return(
        <HeaderContainer>
            <LogoContainer src={Logo}/>
            {/* Menu Icon for Small Screens */}
            <MenuButton onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </MenuButton>

            {/* <NavTextContainer>
            <NavText>
                <StyledLink to="/">Home</StyledLink>
            </NavText>
            <NavText>
                <StyledLink to="/about">About</StyledLink>
            </NavText>
            <NavText>
                <StyledLink to="/gallery">Gallery</StyledLink>
            </NavText>


            </NavTextContainer> */}
      <NavMenu isOpen={isMenuOpen}>
        <StyledLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </StyledLink>
        <StyledLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </StyledLink>
        <StyledLink to="/gallery" onClick={() => setIsMenuOpen(false)}>
          Gallery
        </StyledLink>
      </NavMenu>

            <IconsContainer> 
                <HeaderIconsLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </HeaderIconsLink>
                <HeaderIconsLink href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    <XIcon />
                </HeaderIconsLink>
                <HeaderIconsLink href="https://github.com/sarahovo" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </HeaderIconsLink>

            </IconsContainer>
        </HeaderContainer>
    )

}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Keep this if you need spacing for content inside */
  background: white;
  height: 70px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0; /* Aligns it to the left edge */
  width: 100%; /* Ensures it spans the entire width */
  z-index: 1000;
  box-sizing: border-box;

  // /* Hide header when screen width is too small */
  // @media (max-width: 500px) {
  //   display: none;
  }
`;

const LogoContainer = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid black;
  flex-shrink: 0;
`;

const NavTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
  max-width: 800px;
`;

const NavText = styled.h3`
  margin: 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  font-weight: inherit; 
  
  &:hover {
    color: orange; 
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  flex-shrink: 0;
`;

const HeaderIconsLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const MenuButton = styled.div`
  display: none; /* Hide the button by default */

  @media (max-width: 500px) {
    display: block; /* Show the button for small screens */
    cursor: pointer;
    font-size: 24px;
    color: black;
  }
`;

const NavMenu = styled.div`
  display: flex; /* Show the menu by default */
  gap: 20px;

  @media (max-width: 500px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Toggle visibility */
    flex-direction: column;
    position: absolute;
    top: 70px; /* Place below the header */
    right: 20px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    border-radius: 8px;
    z-index: 999;
  }
`;