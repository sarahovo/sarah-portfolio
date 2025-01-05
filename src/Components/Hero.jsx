import styled from 'styled-components';
import HeroHome from '../assets/Hero.jpg';

function Hero({ fade }) {
  return (
    <HeroContainer style={{ opacity: fade }}>
      <HeroText>
        <HeroButton>About me</HeroButton>
        <HeroButton>Projects</HeroButton>
        <HeroButton>Contact</HeroButton>
        <HeroButton>Resume</HeroButton>
      </HeroText>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeroHome});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: opacity 0.3s ease-out;
`;

const HeroText = styled.div`
  display: flex;
  background: rgba(0, 128, 0, 0.7); 
  padding: 20px;
  border-radius: 10px;

//   @media (max-width: 400px) {
//     flex-direction: column;
//     align-items: center;
//   }
`;

const HeroButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  font-weight: bold;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;