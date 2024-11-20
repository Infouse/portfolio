import React, { useEffect, useRef, useState } from 'react'
import '../style/Main.scss'
import profile from '../img/eximg.png'
import data from "../Json/Data.json"

const Main = () => {
  const [team,setTeam] = useState([])
  const [personal,setPersonal] = useState([]);
  const [tech,setTech] = useState([]);
  const [front,setFront] = useState([]);
  const [database,setDatabase] = useState([]);
  const personalRef = useRef(null);
  const teamRef = useRef(null);
  const techRef = useRef(null);
  const frontRef = useRef(null);
  const databaseRef = useRef(null);
  const [reflist, setRefList] = useState([]);

  useEffect(() => {
    if (personalRef.current != null) {
      setRefList([personalRef, teamRef, techRef, frontRef, databaseRef]);
    }
  }, []);
  const elementViewpoint = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0.2){
        entry.target.classList.add('active')
      }
      else{
        entry.target.classList.remove('active')
      }
    })    
  })
  reflist.forEach((item)=>{
    if(item.current != null){
    elementViewpoint.observe(item.current)}
  })


  useEffect(()=>{
  setTeam(data.teamproject)
  setPersonal(data.personalproject)
  setTech(data.techstack)
  setFront(data.frontexperience)
  setDatabase(data.database)
  },[]);
  
  const getImage = (imageName) => {
    try {
      return require(`../img/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className='mainContainer'>
      <div className='prefaceContainer'>
        <div className='introduceTextBox'>
          <h2 className='introduceText'>안녕하세요 Front-end 주니어 개발자 <span>이홍영</span> 입니다.</h2>
          <p className='subIntruoduceText'>안녕하세요. Front-end 주니어 개발자를 꿈꾸는 이홍영 입니다.</p>
          <p className='subIntruoduceText'>
          코딩 입문은 대학 시절 회로 설계를 위해 기초적인 C언어를 배우며 첫 코딩을 시작했습니다.</p>
          <p className='subIntruoduceText'>
          이를 통해 코딩에 대해 흥미를 갖기 시작하였고, 결과물이 직접 나타나는 프론트엔드에 
          흥미를 느끼기 시작하였습니다.</p>
          <p className='subIntruoduceText'>
          새로운 것에 대한 도전과 최선의 길이 맞는지 분석하는 자세로</p>
          <p className='subIntruoduceText'>
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
      <ul ref={teamRef} className="projectList">
        {
          team.length > 0 && team.map((item,idx)=>(
        <li key={idx} className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={getImage(item.img)} alt="DaonThumbnail" />
          </div>
          <h3 className='projectTitle'>{item.title}</h3>
          <p className='projectText'>{item.techstack}</p>
             <p className='projectText'>{item.time}</p>
             <p className='projectText'>{item.page}</p>
             <p className='projectText'>{item.function}</p>
             <p className='projectText'>{item.explanation}</p>
             <div className='projectBtnBox'>
              <a href={item.distribution}
                target='_blank'
                rel='noopener noreferrer'
                className='projectBtn'>Start Preview
                </a>
                <a href={item.github} 
                target="_blank" 
                rel="noopener noreferrer" className='projectBtn'>Go to Github
                </a>
              </div>
        </li>
          ))
        }
      </ul>
      <h2 className='portfolioTitle'>Personal Project</h2>
      <ul ref={personalRef} className="projectList" >
      {
        personal.length > 0 && personal.map((item,idx)=>(
        <li key={item.id} className='projectBox'>
          <div className='projectThumbnail'>
            <img className='projectImg' src={getImage(item.img)} alt={`${item.title} Thumbnail`} />
          </div>
          <h3 className='projectTitle'>{item.title}</h3>
          <p className='projectText'>{item.techstack}</p>
             <p className='projectText'>{item.time}</p>
             <p className='projectText'>{item.explanation}</p>
             <div className='projectBtnBox'>
              <a href={item.distribution}
                target='_blank'
                rel='noopener noreferrer'
                className='projectBtn'>Start Preview
                </a>
                <a href={item.github} 
                target="_blank" 
                rel="noopener noreferrer" className='projectBtn'>Go to Github
                </a>
              </div>
        </li>
        )) 
      }
      </ul>
      <h2 className='portfolioTitle'>Tech Stack</h2>
      <ul ref={techRef} className="techStackContainer">
        {
          tech.length > 0 && tech.map((item,idx)=>(
        <li key={idx} className='techStackList'>
          <div className='techStackimg'>
            <img src={getImage(item.img)} alt={`${item.title} 로고 이미지`}/>
          </div>
          <p className='techStackText'>{item.title}</p>
        </li>
          ))
        }
      </ul>
      <h1 className='portfolioTitle'>경험(가제)</h1>
      <div className='experienceBox'>
        <div ref={frontRef} className='experienceList'>
          <h2 className='experienceSubTitle'>Front</h2>
          {
            Object.keys(front).length > 0 &&(
              <>
              <p className='experienceText'>{front.one}</p>
              <p className='experienceText' >{front.two}</p>
              <p className='experienceText'>{front.three}</p>
              </>
            ) 
          }
        </div>
        <div ref={databaseRef} className='experienceList'>
          <h2 className='experienceSubTitle'>Database</h2>
          {
            Object.keys(database).length > 0 &&(
              <>
              <p className='experienceText'>{database.one}</p>
              <p className='experienceText'>{database.two}</p>
              </>
            )
          }
          
        </div>
      </div>
      
    </div>
  )
}

export default Main