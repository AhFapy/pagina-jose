import React from 'react'
import BodyCards from './BodyCards'
import CardBtn from '../Small Components/CardBtn'

const MainBodyComponent = () => {
    const cardImage1 = <img className='card-gif' src='/img1.gif'></img>
  return (
    <div className='body'>
        <h1 className='body-title'>¿No te lo crees?</h1>
        <p className='body-p'>Suena demasiado bien pero es la Realidad</p>
        <br/>
        <p className='body-p'>Tú no te encargas de <u className='underline-1'>nada</u>, no pagas <u className='underline-2'>nada</u>, y puedes ganar <span className='mucho'>(mucho)</span> dinero.</p>
        <div className='card-container'>
            <BodyCards text="Sin Inversion" img={cardImage1}/>
            <BodyCards text="Sin Riesgo" img={cardImage1}/>
        </div>
        <CardBtn/>
        <div className='monetize-container'>
            <div className='monetize-img-div'>
                <img src='/image-instagram.png' className='monetize-img'></img>
            </div>
            <div className='monetize-text-div'>
                <p className='monetize-text'>El <u className='underline-2'>90%</u> De Los Expertos En Instagram <u className='underline-1'>No</u> Saben Cómo Monetizar Su Audiencia</p>
            </div>
        </div>
        <div className='pasos'>
            <div className='pasos-header'>
                <h2><b className='pasos-orange'>4</b> SIMPLES PASOS.</h2>
                <br/>
                <h2>EN 28 DÍAS</h2>
            </div>
            <div className='pasos-text'><p>Descubre el poder de <b>transformar tus historias de Instagram en una máquina generadora de ingresos</b>. Con esta estrategia <b>100% orgánica</b>, en tan solo 28 días, podrás desbloquear el potencial para ganar miles de euros sin invertir ni un euro. <b><u>Real</u></b>.</p>
            </div>
        </div>
    </div>
  )
}

export default MainBodyComponent
