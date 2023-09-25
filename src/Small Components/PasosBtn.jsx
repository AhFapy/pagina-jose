import React from 'react'
import "../Component Styles/pasos-btn.css"

const PasosBtn = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/jsegomeez-ak/llamada-de-cualificacion-para-monetizar-tu-audiencia/';
      };
  return (
    <button className="button" onClick={handleButtonClick}>
        Contactar
    </button>)
}

export default PasosBtn
