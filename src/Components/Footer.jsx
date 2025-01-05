import styled from "styled-components"
import Logo from "../assets/Logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return(
        <HeaderContainer>
        © {new Date().getFullYear()} Sarahovo. All Rights Reserved.
            <LogoContainer src={Logo}>
          </LogoContainer>

            <NavTextContainer>
            <NavText>
                Home
            </NavText>
            <NavText>
                About
            </NavText>
            <NavText>
                Resume
            </NavText>


            </NavTextContainer>
{/* 
            <IconsContainer> 
                <HeaderIcons href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </HeaderIcons>
                <HeaderIcons href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    <XIcon />
                </HeaderIcons>
                <HeaderIcons href="https://github.com/sarahovo" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </HeaderIcons>

            </IconsContainer> */}
        </HeaderContainer>
    )

}

export default Footer

const HeaderIcons = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const HeaderContainer = styled.div`
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 0 20px;
z-index: 99;
position: fixed; 
bottom: 0; 
width: 100%;
background: white; 
`

const LogoContainer = styled.img`
background:green;
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
// display:flex;
`

const IconsContainer = styled.div`
// background: brown;
display:flex;
justify-content: space-evenly;
align-items:center;
width: 120px;
`