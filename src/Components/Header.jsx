import styled from "styled-components"
import Logo from "../assets/Logo.png"

function Header(){
    return(
        <HeaderContainer>
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

            <IconsContainer> ICON </IconsContainer>
        </HeaderContainer>
    )

}

export default Header

const HeaderContainer = styled.div`
background:purple;
display:flex;
justify-content: space-between;
align-items: center;
padding:0 20px;
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
background: brown;
display:flex;
justify-content:center;
align-items:center;

`