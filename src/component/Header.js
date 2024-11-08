import React from 'react'
import '../style/Header.scss'
const Header = () => {
  return (
    <div className='headerBox'>
      <p className='headerText'>Portfolio</p>
      <div className='headerFlexBox'>
        <p className='headerText'>About me</p>
        <p className='headerText'>Project</p>
        <p className='headerText'>Tech Stack</p>
        <p className='headerText'>Contact me</p>
      </div>
    </div>
  )
}

export default Header