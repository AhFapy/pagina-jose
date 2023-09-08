import React from 'react'

const HeaderComponent = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/';
      };
    
  return (
    <div>
    <div className='header-container'>
      <div className='img-container'>
        <img className='header-img' src='/usuario.png'></img>
      </div>
      <h2>Jose Gómez</h2>
      <div className='main-header'>
        <h1 className='header-h1'>
          Inviertes 0€,<br/>
          Ganas Miles.
        </h1>
        <p className='header-p'>Monetiza tu audiencia y <b>multiplica tus ingresos</b> con una estrategia <b>exclusiva de stories</b> de Instagram.</p>
      </div>
      <div className='plazas-div'>
        <p className='plazas-text'>Plazas: </p>
        <svg xmlns="http://www.w3.org/2000/svg" className='plazas-svg' height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        <p className='plazas-month'>Septiembre</p>
        <svg className='plazas-svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        <p className='plazas-month'>Octubre</p>
      </div>
      <div className='default-btn-div'>
      <button onClick={handleButtonClick} className='default-btn'>Agendar Llamada</button>
    </div>

    </div>

    </div>
  )
}

export default HeaderComponent
