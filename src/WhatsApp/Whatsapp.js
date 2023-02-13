import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Whatsapp.css";
export default function Whatsapp() {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=923161424024", "_blank");
  };
  return (
    <div className="whatsapp-button-container">
      <div
        onClick={() => handleClick()}
        style={{
          height: "65px",
          width: "65px",
          borderRadius: "65px",
          backgroundColor: "#1BD040",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "35px",
          cursor: "pointer",
        }}
      >
        <AiOutlineWhatsApp />
      </div>
    </div>
  );
}
