import React from "react";

const ArtCard = ({ title, description, image }) => {
  const cardStyles = {
    container: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#fff",
      maxWidth: "200px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "18px",
      margin: "10px 0",
    },
    description: {
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <div style={cardStyles.container}>
      <img src={image} alt={title} style={cardStyles.image} />
      <h3 style={cardStyles.title}>{title}</h3>
      <p style={cardStyles.description}>{description}</p>
    </div>
  );
};

export default ArtCard;