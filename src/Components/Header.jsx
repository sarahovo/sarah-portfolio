import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header(){
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

const HeaderIconsLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const HeaderContainer = styled.div`
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
display:flex;
justify-content: space-between;
align-items: center;
padding:0 20px;
z-index:99;
`

const LogoContainer = styled.img`
display:flex;
justify-content:center;
align-items: center;
height: 50px;
width: 50px;
border-radius: 50%;
border: 2px solid black;
`
const NavTextContainer = styled.div`
background: yellow;
justify-content: space-evenly;
align-items: center;
display:flex;
width:1000px;
`

const NavText = styled.h3`
//   text-decoration: none; 
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
// background: brown;
display:flex;
justify-content: space-evenly;
align-items:center;
width: 120px;
`