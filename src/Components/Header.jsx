import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer src={Logo}>
          </LogoContainer>

            <NavTextContainer>
            <NavText>
                <StyledLink to="/">Home</StyledLink>
            </NavText>
            <NavText>
                <StyledLink to="/about">About</StyledLink>
            </NavText>
            <NavText>
                <StyledLink to="/gallery">Gallery</StyledLink>
            </NavText>


            </NavTextContainer>

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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 99;
  position: fixed; 
  top: 0; 
  width: 100%;
  background: white; 
  height: 70px;
  box-sizing: border-box; 

  /* Hide header when screen width is too small */
  @media (max-width: 500px) {
    display: none;
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