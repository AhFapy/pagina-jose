import React from 'react'
import BodyCards from './BodyCards'
import CardBtn from '../Small Components/CardBtn'

const MainBodyComponent = () => {
    const cardImage1 = <img className='card-gif' src='../../public/img1.gif'></img>
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
    </div>
  )
}

export default MainBodyComponent
