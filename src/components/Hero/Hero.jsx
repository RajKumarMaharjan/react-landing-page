import Arrow_btn from "../../../public/Images/arrow_btn.png";
import Play_icon from "../../../public/Images/play_icon.png";
import Pause_icon from "../../../public/Images/pause_icon.png"
import './Hero.css'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={Arrow_btn} alt="arrow"/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?Pause_icon:Play_icon} alt=""/>
          <p>see the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero