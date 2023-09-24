import React from 'react'
import "../Component Styles/trabajo.css"

function TrabajoComponent() {
    const miTrabajoArray = [
        "Llamada de 50 mins Para Entrevista de Personalidad",
        "Análisis Completo de Audiencia",
        "Entender tu Nicho y diseñar un Prototipo de Producto de Valor Adaptado",
        "Producción y Guión de todas las Stories",
        "Edición (y subida) de todas los Stories de Instagram",
        "Diseño de la Estrategia de Ventas adaptado a tí y tus seguidores",
        "Diseño y creación del embudo de ventas",
        "Desarrollo de tu Storytelling para generar un vínculo de Confianza",
        "Estrategia de Calentamiento de la Audiencia en 3 fases",
        "Desarrollo de la Oferta Irresistible",
        "Implementación de las herramientas para la fase de ventas",
        "Mentoría paso a paso sobre cómo crear un curso/producto online",
        "Implementación y creación del curso en las plataformas correspondientes",
        "Hacer el lanzamiento del producto/servicio",
        "Ayudarte a monetizar tu audiencia",        
    ];

    const tuTrabajoArray = [
        "Llamada de 50 mins Para Entrevista de Personalidad",
        "Hacer las Stories que te marque en el Guión",
        "Video de Ventas con el Guión que te envíe",
        "Recoger los Beneficios 😬",
    ]

    const renderInformation = function(array) {
        const finalArray = []
        for(let i = 0; i < array.length; i++) {
            finalArray.push(<p key={i} className='trabajo-text'><svg className='svg' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"/></svg> {array[i]}<br/></p>)
        }
        return finalArray;
    }

  return (
    <div className='trabajo-container'>
        <div className='mi-trabajo'>
            <h2><b className='underline-2'>Mi</b> Trabajo</h2>
            <div className='mi-trabajo-text'>
                {renderInformation(miTrabajoArray)}
            </div>
        </div>
        <div className='tu-trabajo'>
            <h2><b className='underline-2'>Tú</b> Trabajo</h2>
            <div className='tu-trabajo-text'>
                {renderInformation(tuTrabajoArray)}
            </div>
        </div>

        </div>
  )
}

export default TrabajoComponent
