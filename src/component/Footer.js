import React from 'react'
import '../style/Footer.scss'

const Footer = () => {
  return (
    <>
    <h2 className='portfolioTitle'>Contact Me</h2>
    <div className='contactBox'>
      <div className='contactTextBox'>
        <p>Name : 이 홍 영</p>
        <p>Email : hongyeong575@naver.com</p>
      </div>
      <div className='contactTextBox'>
        <p>CellPhone : 010-6660-1578</p>
        <p>residence : Incheon</p>
      </div>  
    </div>

    <h2 className='endText'>끝까지 봐주셔서 감사합니다.</h2>
    </>
  )
}

export default Footer