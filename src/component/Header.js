import React, { useState } from 'react'
import '../style/Header.scss'
const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = ()=>{
    if (window.scrollY > 50) {
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }
  
    const topScroll = () =>{
      window.scrollTo({
        top : 0,
        behavior : 'smooth'
      });
    }
    const projectScroll = () => {
      window.scrollTo({
        top : 1100,
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
    <>
    {
    <div className='headerBox'>
      <p onClick={topScroll} className='headerText'>Portfolio</p>
      <div className='headerFlexBox'>
        <p onClick={projectScroll} className='headerText'>Team Project</p>
        <p onClick={persnoalScroll} className='headerText'>Personal Project</p>
        <p onClick={techScroll} className='headerText'>Tech Stack</p>
        <p className='headerText'>Contact me</p>
      </div>
    </div>
    }
    </>

  )
}

export default Header