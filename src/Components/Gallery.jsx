import styled from 'styled-components';
import image from "../assets/Logo.png"

const Gallery = () => {

    return (
        <GalleryContainer>
            <GalleryHeroContainer>
                {/* <LogoContainer src={image} /> */}
                <SubTitle>I will display my art here</SubTitle>
            </GalleryHeroContainer>
            <AboutMainContainer>
                <SubTitle>body</SubTitle>
            </AboutMainContainer>


        </GalleryContainer>

    )
}

export default Gallery;

const GalleryContainer = styled.div`
background:red;
height:500px;
width:100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;


`

const GalleryHeroContainer = styled.div`
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
background:green;
display:flex;
justify-content:center;
align-items: center;
height: 100px;
width: 100px;
border-radius: 50%;
border: 2px solid black;
`