import React from 'react'
import '../style/Header.scss'
const Header = () => {

  const aboutScroll = () => {
    window.scrollTo({
      top : 525,
      behavior : 'smooth'
    });
  }
    const projectScroll = () => {
      window.scrollTo({
        top : 1156,
        behavior : 'smooth'
      });
    }
    const persnoalScroll = () => {
      window.scrollTo({
        top : 2205,
        behavior : 'smooth'
      });
    }
    const techScroll = () => {
      window.scrollTo({
        top : 3183,
        behavior : 'smooth'
      });
  }

  return (
    <div className='headerBox'>
      <p className='headerText'>Portfolio</p>
      <div className='headerFlexBox'>
        <p onClick={aboutScroll} className='headerText'>About me</p>
        <p onClick={projectScroll} className='headerText'>Team Project</p>
        <p onClick={persnoalScroll} className='headerText'>Personal Project</p>
        <p onClick={techScroll} className='headerText'>Tech Stack</p>
        <p className='headerText'>Contact me</p>
      </div>
    </div>
  )
}

export default Header