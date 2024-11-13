import React, { useEffect, useState } from 'react'
import '../style/Main.scss'
import profile from '../img/eximg.png'
import daon from '../img/Daon.png'
import ieum from '../img/Ieum.png'
import Hongflix from '../img/Hongflix.png'
import html from '../img/HtmlCss.png'
import sass from '../img/Sass.png'
import javascript from '../img/JavaScript.png'
import react from '../img/React.png'
import next from '../img/Next.png'
import firesbase from '../img/Firebase.png'
import typescript from '../img/TypeScript.png'
import vue from '../img/Vue.png'
import data from "../Json/Data.json"

const Main = () => {
  const [team,setTeam] = useState([])
  const [personal,setPersonal] = useState([]);
  const [tech,setTech] = useState([]);
  useEffect(()=>{
  setTeam(data.teamproject)
  setPersonal(data.personalproject)
  setTech(data.techstack)
  },[]);
  if(team.length > 0){
    console.log(tech)
  }
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
             <div className='projectBtnBox'>
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
      <h2 className='portfolioTitle'>Personal Project</h2>
      <ul className='projectList'>
        <li className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={daon} alt="DaonThumbnail" />
          </div>
          <h3 className='projectTitle'>Todolist</h3>
          <p className='projectText'>기술스택 : React</p>
             <p className='projectText'>소요 기간 : 약 3일</p>
             <p className='projectText'>설명 : React에 입문 후 첫 미니 프로젝트로 CRUD를 활용하여 Todolist 페이지를 만들었습니다.</p>
             <div style={{marginTop:'88px'}} className='projectBtnBox'>
              <a href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='projectBtn'>Start Preview
                </a>
                <a href='#' 
                target="_blank" 
                rel="noopener noreferrer" className='projectBtn'>Go to Github
                </a>
              </div>
        </li>
        <li className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={Hongflix} alt="IeumThumbnail" />
          </div>
          <h3 className='projectTitle'>HongFilx</h3>
             <p className='projectText'>기술스택 : 기술스택 : React, Zustand, Axios</p>
             <p className='projectText'>소요 기간 : 약 1주일</p>
             <p className='projectText'>담당한 페이지 : 로그인, 회원가입, 아이디찾기, 마이페이지</p>
             <p className='projectText'>설명 : TMDB Api를 활용하여 검색이 가능한 영화 소개 사이트를 제작하였습니다.(390px). </p>
             <div className='projectBtnBox'>
              <a href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='projectBtn'>Start Preview
              </a>
              <a href='https://github.com/Infouse/Hongflix' 
              target="_blank" 
              rel="noopener noreferrer" className='projectBtn'>Go to Github
              </a>
             </div>
        </li>
      </ul>
      <h2 className='portfolioTitle'>Tech Stack</h2>
      <ul className='techStackContainer'>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={html} alt="html이미지" />
          </div>
          <p className='techStackText'>Html/css</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={sass} alt="sass로고이미지" />
          </div>
          <p className='techStackText'>Sass</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={javascript} alt="javascript로고이미지" />
          </div>
          <p className='techStackText'>Javascript</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={next} alt="next로고이미지" />
          </div>
          <p className='techStackText'>Next</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={react} alt="react로고이미지" />
          </div>
          <p className='techStackText'>React</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={typescript} alt="typescript로고이미지" />
          </div>
          <p className='techStackText'>Typescript</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={firesbase} alt="firebase로고이미지" />
          </div>
          <p className='techStackText'>Firebase</p>
        </li>
        <li className='techStackList'>
          <div className='techStackimg'>
            <img src={vue} alt="vue로고이미지" />
          </div>
          <p className='techStackText'>Vue</p>
        </li>
      </ul>
      <h1 className='portfolioTitle'>경험(가제)</h1>
      <div className='experienceBox'>
        <div className='experienceList'>
          <h2 className='experienceSubTitle'>React</h2>
          <p>전역 상태 관리인 Zustand  사용 경험이 있습니다.</p>
          <p>Axios 사용 경험이 있습니다.</p>
          <p>Next.js를 활용하여 SSR 개발 경험이 있습니다.</p>
          <p>NextAuth를 활용하여 회원가입 및 커스텀,sns로그인 
          개발 경험이 있습니다</p>
        </div>
        <div className='experienceList'>
          <h2 className='experienceSubTitle'>React</h2>
          <p>Firestore를 활용하여 DB를 구축하고, 이를 활용하여 CRUD를제작한 경험이 있습니다.</p>
          <p>Firestore의 실시간 데이터 동기화 기능을 활용하여, 사용자 인터페이스에서 데이터 변경을 즉시 반영하는 실시간 업데이트 시스템을 구축한 경험이 있습니다."</p>

        </div>
      </div>
      
    </div>
  )
}

export default Main