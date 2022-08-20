import React from 'react'
import { useEffect } from 'react'


const DrumPad = ({key,id,letter,src,handleDisplay,audio,play,currentTime}) => {

   
    
    useEffect(()=>{
        console.log(audio)
        
        document.addEventListener('keydown',handleKeydown)
        window.focus()
      },[])
      
      useEffect(()=> {
       return ()=>{
        document.removeEventListener('keydown', handleKeydown) 
       }
     },[])
      
      const handleKeydown = e => {
        if(e.keyCode === letter.charCodeAt()) {

          audio.play()
          audio.currentTime = 0
          handleDisplay(id)
        }
      }
     
      const handleClick = () => {
        play()
        currentTime = 0
        handleDisplay(id)
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
      ref={ref => audio=ref }       
        ></audio>
    </div>
  )
}

export default DrumPad