// import styled from 'styled-components';
// import image from "../assets/Logo.png"

// const Gallery = () => {

//     return (
//         <GalleryContainer>
//             <GalleryHeroContainer>
//                 {/* <LogoContainer src={image} /> */}
//                 <SubTitle>I will display my art here</SubTitle>
//             </GalleryHeroContainer>
//             <AboutMainContainer>
//                 <SubTitle>body</SubTitle>
//             </AboutMainContainer>


//         </GalleryContainer>

//     )
// }

// export default Gallery;

// const GalleryContainer = styled.div`
// background:red;
// height:500px;
// width:100%;
// display:flex;
// flex-direction:column;
// justify-content: space-evenly;
// align-items: center;


// `

// const GalleryHeroContainer = styled.div`
// background:blue;
// height:200px;
// width:70%;
// display:flex;
// justify-content: space-between;
// align-items: center;
// padding:30px 0px;
// @media (max-width:400px){
//     flex-direction:column;
//     align-items:center;
//     width:90%;
//     height:50%;
// }
// `
// const AboutMainContainer = styled.div`
// background:purple;
// width:50%;
// height:100px;
// display:flex;
// justify-content:center;
// align-items:center;
// @media (max-width:400px){
//     flex-direction:column;
//     align-items:center;
//     width:75%;
//     height:50%;
// }
// `


// const Title = styled.div`
// background:green;
// @media (max-width:400px){
//     flex-direction:column;
//     align-items:center;
//     height:auto;
// }

// `
// const SubTitle = styled.div`
// background:pink;

// `



// const HeroButton = styled.button`
// height:40px;
// width: 100px;
// border:none;
// border-radius:20px;
// cursor:pointer;
// `

// const LogoContainer = styled.img`
// background:green;
// display:flex;
// justify-content:center;
// align-items: center;
// height: 100px;
// width: 100px;
// border-radius: 50%;
// border: 2px solid black;
// `



import React, { useState } from "react";
import artData from "../data/artData.js";
import ArtCard from "./ArtCard.jsx";

const Gallery = () => {
  const tabs = [
    { label: "Paintings", key: "paintings" },
    { label: "Sculptures", key: "sculptures" },
    { label: "Photography", key: "photography" },
  ];

  const [activeTab, setActiveTab] = useState("paintings");

  const tabStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      border: "1px solid #ddd",
      backgroundColor: "#f9f9f9",
      margin: "0 5px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    activeButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      borderColor: "#007bff",
    },
  };

  const galleryStyles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>
      <div style={tabStyles.container}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            style={{
              ...tabStyles.button,
              ...(activeTab === tab.key ? tabStyles.activeButton : {}),
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={galleryStyles.container}>
        {artData
          .filter((art) => art.category === activeTab)
          .map((art) => (
            <ArtCard key={art.id} {...art} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;