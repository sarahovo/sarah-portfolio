import styled from 'styled-components';

function Hero() {

    return (
        <HeroContainer>
            <HeroText>
                <HeroButton>About me</HeroButton>
                <HeroButton>Projects</HeroButton>
                <HeroButton>Contact</HeroButton>
                <HeroButton>Resume</HeroButton>
            </HeroText>
        </HeroContainer>

    )
}

export default Hero;

const HeroContainer =styled.div`
background:red;
height:500px;
width:100%;
display:flex;
justify-content:center; //centers content horixontally
align-items: center;      // Centers content vertically

`
const HeroText = styled.div`
display:flex;
background:green;
width:70%;
justify-content: space-between;
@media (max-width:400px){
    flex-direction:column;
    align-items:center;
    height:50%;
}

`

const HeroButton = styled.button`
height:40px;
width: 100px;
border:none;
border-radius:20px;
cursor:pointer;
`