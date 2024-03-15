import Video1 from '../../../public/Images/video1.mp4';
import Image1 from '../../../public/Images/image1.png';
import Image2 from '../../../public/Images/image2.png';
import Image3 from '../../../public/Images/image3.png';
import './Background.css';

const Background = ({playStatus, heroCount}) => {
  
if (playStatus) {
  return (
    <video className='background fade-in' autoPlay loop muted>
      <source src={Video1} type='video/mp4'/>
    </video>
  )
}else if(heroCount===0){
  return <img src={Image1} alt='Image' className='background'/>
}else if(heroCount===1){
  return <img src={Image2} alt='Image' className='background'/>
}else if(heroCount===2){
  return <img src={Image3} alt='Image' className='background'/>
}
}

export default Background