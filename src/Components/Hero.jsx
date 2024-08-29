import styled from 'styled-components';

function Hero() {

    return (
        <HeroContainer>
            <HeroText>
                I am sarah
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
// text-align: center;
font-size:120px;

`