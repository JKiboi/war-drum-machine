import React,{useState} from "react";
import DrumPad from "./DrumPad";

function App() {
  const [display,setDisplay]=useState("Click pad or Press a Key")

  const handleDisplay =()=>{ 
     setDisplay(display)
    }

  return (
    <div id='drum-machine'>
        <div id='display'>{display}</div>
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={handleDisplay}
            display={display}
            setDisplay={setDisplay}
          />   
         ))}</div>
    </div>
  );
}
const data = [
  { id: 'arrow', letter: 'Q', src: 'http://mightycoach.com/articles/specialeffects/soundeffects/arrow-hit.wav' },
  { id: 'bomb 1', letter: 'W', src: 'http://www.muppetlabs.com/~breadbox/software/tworld/wav/bomb.wav' },
  { id: 'gunshot', letter: 'E', src: 'http://www.hazmatt.net/gaming/starcraft/terran/units/firebat/tfbdth02.wav' },
  { id: 'missile', letter: 'A', src: 'http://www.sa-matra.net/sounds/starcontrol/Owa-Missile.wav' },
  { id: 'rocket', letter: 'S', src: 'http://gamekill.cz/cstrike/sound/rocket1.wav' },
  { id: 'cannon', letter: 'D', src: 'http://www.cs.uit.no/~ken/sounds/Cannon.wav' },
  { id: 'howitzer', letter: 'Z', src: 'http://faculty.nps.edu/brutzman/vrtp/demo/helicopter/HowitzerArtilleryCannonFire-cd23-no6-3sec.wav' },
  { id: 'reload', letter: 'X', src: 'http://www.vertigogaming.org/downloads/zps/sound/Weapons/Firearms/AK-47/AK47_Reload_Empty.wav' },
  { id: 'richochett', letter: 'C', src: 'http://www.nonstick.com/audio/soundsource/FX/ltfx_008.mp3'  },
]


export default App;
