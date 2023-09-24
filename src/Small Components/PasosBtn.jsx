import React from 'react'
import "../Component Styles/pasos-btn.css"

const PasosBtn = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/';
      };
  return (
    <button className="button" onClick={handleButtonClick}>
        Contactar
    </button>)
}

export default PasosBtn
