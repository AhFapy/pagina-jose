import React from 'react'
import { useEffect, useRef } from 'react';

function Calendly(props) {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        // Limpiar el script si el componente se desmonta
        document.body.removeChild(script);
      };
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente
  
    return (
      <div ref={props.func("animate")} className="calendly-inline-widget" data-url="https://calendly.com/jsegomeez-ak/llamada-de-cualificacion-para-monetizar-tu-audiencia" style={{ minWidth: '320px', height: '700px' }}>
        <h1>Agenda una llamada conmigo</h1>
      </div>
    );
  }
  

export default Calendly
