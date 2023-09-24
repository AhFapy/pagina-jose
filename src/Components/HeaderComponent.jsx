import React from 'react'

const HeaderComponent = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/';
      };
    
  return (
    <div>
    <div className='header-container'>
      <div className='img-container'>
        <img className='header-img' src='/pfp.jpg'></img>
      </div>
      <h2>Jose Gómez</h2>
      <div className='main-header'>
        <h1 className='header-h1'>
          Inviertes 0€,<br/>
          Ganas Miles.
        </h1>
        <p className='header-p'>Monetiza tu audiencia y <b>multiplica tus ingresos</b> con una metodologia rusa<b> exclusiva</b> de Instagram.</p>
      </div>
      <div className='default-btn-div'>
      <button onClick={handleButtonClick} className='default-btn'>Agendar Llamada</button>
    </div>

    </div>

    </div>
  )
}

export default HeaderComponent
