import React from 'react'
import "../Component Styles/widget-container.css"

function WidgetContainer() {
  return (
<div className='widget-section'>
  <div className='widget-container' id='image-container'>
    <img className='mailchimp widget' src='/mailchimp.png'></img>
    <img className='canva widget' src='/Canva.png'></img>
    <img className='activecampaign widget' src='/activecampaign.png'></img>
    <img className='zapier widget' src='/zapier.png'></img>
    <img className='systeme widget' src='/systeme.png'></img>
    <img className='hubspot widget' src='/hubspot.png'></img>
    <img className='ig widget' src='/instagram.png'></img>
  </div>
</div>
  )
}

export default WidgetContainer
