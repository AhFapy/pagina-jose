import React from 'react'

const BodyCards = (props) => {
  return (
    <div className='body-card'>
        {props.img}
        <p>{props.text}</p>
    </div>
  )
}

export default BodyCards
