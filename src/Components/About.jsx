import styled from 'styled-components';
import image from "../assets/me.png"

const About = () => {

    return (
        <AboutContainer>
             {/* <Title>About</Title> */}
            <AboutHeroContainer>
               
                <LogoContainer src={image} />
                <SubTitle>hello I am Sarah and I am makeing an about page</SubTitle>
            </AboutHeroContainer>
            <AboutMainContainer>
                <SubTitle>body</SubTitle>
            </AboutMainContainer>


        </AboutContainer>

    )
}

export default About;

const AboutContainer = styled.div`
background:red;
height:500px;
width:100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;


`

const AboutHeroContainer = styled.div`
background:blue;
height:200px;
width:70%;
display:flex;
justify-content: space-between;
align-items: center;
padding:30px 0px;
@media (max-width:400px){
    flex-direction:column;
    align-items:center;
    width:90%;
    height:50%;
}
`
const AboutMainContainer = styled.div`
background:purple;
width:50%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:400px){
    flex-direction:column;
    align-items:center;
    width:75%;
    height:50%;
}
`


const Title = styled.div`
background:green;
@media (max-width:400px){
    flex-direction:column;
    align-items:center;
    height:auto;
}

`
const SubTitle = styled.div`
background:pink;

`



const HeroButton = styled.button`
height:40px;
width: 100px;
border:none;
border-radius:20px;
cursor:pointer;
`

const LogoContainer = styled.img`
display:flex;
justify-content:center;
align-items: center;
object-fit:contain;
background-color:green;
max-width:300px;
margin-top:100px;
z-index:100;
// height: 300px;
// width: 300px;
border-radius: 10px;
// border: 2px solid black;
`