import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={textStyle}>
          <p>Proyecto Final React</p>
          <p>Pablo Archila</p>
        </div>
        <img 
          src="/Logo%20INTECAP%20Oficial%20azul2.png" 
          alt="Logo INTECAP" 
          style={logoStyle}
        />
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#583bf7",
  color: "#fff",
  padding: "1rem",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "relative",
};

const textStyle = {
  textAlign: "center",
  flex: 1,
};

const logoStyle = {
  width: "120px",
  height: "auto",
  position: "absolute",
  right: "85px",
};

export default Footer;
