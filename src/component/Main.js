import React from 'react'
import '../style/Main.scss'
import profile from '../img/eximg.png'
import daon from '../img/Daon.png'
import ieum from '../img/Ieum.png'
import Hongflix from '../img/Hongflix.png'

const Main = () => {
  
  return (
    <div className='mainContainer'>
      <div className='prefaceContainer'>
        <div className='introduceTextBox'>
          <h2 className='introduceText'>안녕하세요 Front-end 주니어 개발자<br/>
          <span>이홍영</span> 입니다.</h2>
          <p className='subIntruoduceText'>안녕하세요. Front-end 주니어 개발자를 꿈꾸는 이홍영 입니다.<br/> 
          코딩 입문은 대학 시절 회로 설계를 위해 기초적인 C언어를 배우며 첫 코딩을 시작했습니다.<br/>
          이를 통해 코딩에 대해 흥미를 갖기 시작하였고, 결과물이 직접 나타나는 프론트엔드에<br/> 
          흥미를 느끼기 시작하였습니다.<br/> 
          새로운 것에 대한 도전과 최선의 길이 맞는지 분석하는 자세로<br/>
          사용자에게 최고의 UX를 제공하는 프론트엔드 개발자가 되기 위해 노력하겠습니다.</p>
        </div>
        <div className='profileImageBox'>
          <span className='profileCircle'/>
          <div className='profileImage'>
            <img src={profile} alt="" />
          </div>
          <span className='profileCircleBg'/>
        </div>
      </div>
      <h2 className='portfolioTitle'>About me</h2>
      <p className='aboutmeText'>언제나 최고의 결과를 위해 분석을 즐기는 이홍영입니다.<br/>
      프로젝트가 끝나면 과정을 돌아보며 피드백을 통해 더 나아가기를 좋아합니다.<br/>
      작은 개선이라도 이루어 내어, 다음 작업에 반영할 수 있도록 노력하고 있습니다.<br/><br/>
      이러한 피드백 과정을 통해 기술적 깊이와 유연함을 갖춘 개발자로 성장하여, <br/>
      어떤 프로젝트에서도 가치를 더하는 개발자가 되겠습니다.</p>
      <h2 className='portfolioTitle'>Team project</h2>
      <ul className='projectList'>
        <li className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={daon} alt="DaonThumbnail" />
          </div>
          <h3 className='projectTitle'>Daon 리뉴얼</h3>
          <p className='projectText'>기술스택 : Html/Sass/JavaScript</p>
             <p className='projectText'>소요 기간 : 약 2주</p>
             <p className='projectText'>담당한 페이지 : 객실안내, 이벤트, 이용후기</p>
             <p className='projectText'>담당한 기능 : Modal 팝업창 </p>
             <p className='projectText'>설명 : Front-end에 입문한 후 가장 초창기에 만든 웹페이지로 기존의 다온펜션 사이트를 리뉴얼 하였습니다.</p>
             <div style={{marginTop:'88px'}} className='projectBtnBox'>
              <a href='https://qodql.github.io/daon/index.html'
                target='_blank'
                rel='noopener noreferrer'
                className='projectBtn'>Start Preview
                </a>
                <a href='https://github.com/Infouse/DaonHongyeong' 
                target="_blank" 
                rel="noopener noreferrer" className='projectBtn'>Go to Github
                </a>
              </div>
        </li>
        <li className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={ieum} alt="IeumThumbnail" />
          </div>
          <h3 className='projectTitle'>IEUM 모바일 웹 (책 소개 사이트)</h3>
             <p className='projectText'>기술스택 : React/Next.js, Zustand, Firestore, Nextauth</p>
             <p className='projectText'>소요 기간 : 약 10일</p>
             <p className='projectText'>담당한 페이지 : 로그인, 회원가입, 아이디찾기, 마이페이지</p>
             <p className='projectText'>담당한 기능 : Firestore DB 구축, Nextauth 활용한 로그인 및 회원가입, 코멘트(DB에 넣는작업)</p>
             <p className='projectText'>설명 : 경험이 없었던 서버 구축과 Nextauth를 활용하여 로그인 기능을 쉽게 만들기 위해 Next를 사용, 책 소개 모바일 홈페이지를 제작 하였습니다(390px). </p>
             <div className='projectBtnBox'>
              <a href='https://ieum-hong.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='projectBtn'>Start Preview
              </a>
              <a href='https://github.com/Infouse/Ieum-hong' 
              target="_blank" 
              rel="noopener noreferrer" className='projectBtn'>Go to Github
              </a>
             </div>
        </li>
      </ul>
      <h2 className='projectListTitle'>Personal Project</h2>
      <ul className='personalProjectList'>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Main