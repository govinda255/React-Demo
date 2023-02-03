import React from 'react'
import '../Style.css'

function Header(props) {
    let {title,image} = props
  return (
    <div className='card'>
       
      <img src={image}/>
      <p className='title'>{title}</p>
    </div>
  )

}

export default Header
