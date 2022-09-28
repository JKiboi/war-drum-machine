import React from 'react'
import { useEffect,useState } from 'react'


const DrumPad = ({id,letter,src,setDisplay,display}) => {

  const [audio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(false);

  //const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
      },
    [audio,playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  const handleClick=()=>{
    audio.play()
    audio.currentTime=0
    setDisplay(id)
  
  }
  
  return (
    <div 
    className='drum-pad' 
    id={id}
    onClick={handleClick}
>
  <h1>{letter}</h1>
  <audio id={letter}
         className='clip'
         src={src}
                 
    ></audio>
</div>
)    
  
}

export default DrumPad;