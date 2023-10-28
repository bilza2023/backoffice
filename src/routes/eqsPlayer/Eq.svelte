<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import Sticky from "./Sticky.svelte";
import { Howl } from 'howler';
import EqPlayer from './EqPlayer/EqPlayer.svelte';
////////////////////////////////////////////////

function updateTimeDiff() {
      runningTime = sound.seek();
    if (runningTime > (sound.duration() * 1000)) {
        stop();
    }
}

function changeSeek(newSeekValue){
 sound.seek(newSeekValue);
 runningTime = sound.seek();
 setCurrentEq();
}
 
function start(){
    // debugger;
    if (isPlaying == true){return;}
    isPlaying = true;
    sound.play();
        sound.on('play', function () {
        interval = setInterval(updateTimeDiff,1000);
        // runningTime = runningTime +0; 
        });
    
}

function stop(){
    sound.stop();
    isPlaying = false;
    runningTime = 0;
    clearInterval(interval);
    window.scrollTo({top: 0,behavior: 'smooth'});
    // setFocus();
}

async function fileExists(url) {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

async function getSoundFile(filename) {
  const soundFile = `./mathSounds/${filename}.mp3`;
  
  if (await fileExists(soundFile)) {
    return soundFile;
  } else {
    return './mathSounds/test.mp3';
  }
}

/////////////////////////
let soundFile;
let sound;
let PresentationTotalTime =0; 
let interval;
let maxSliderValue; //it is not runningTime since it does not change
let isPlaying=false;
let runningTime = 0; 
let eqs=[];
let questionDetails;
let notFreeContent = false;

onMount(async () => {
  try {
  // debugger;
  let  id = new URLSearchParams(location.search).get("id"); 
  const token = localStorage.getItem("token");
  const resp = await fetch( `${BASE_URL}/fe/get_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {id} )
  });
  
    if (resp.ok) {
      
        const data = await resp.json();
      
        const question  = data.question //===> important
        eqs = question.eqs;
        soundFile = await getSoundFile(question.filename);
    questionDetails = question.filename;;

    sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
        PresentationTotalTime = sound.duration();
        maxSliderValue = PresentationTotalTime;
        //--check again
        eqs[eqs.length-1].eqEndTime =  PresentationTotalTime;
    }
    });

//////////////////////////////////////////
    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    toast.push('Unknown Error');
    // console.error(error);
  }
});

/////////////////////////////////////////
</script>

 <div class='p-1 m-0 text-xs bg-gray-800 text-yellow-600  '>
 {questionDetails}
 </div>

<!-- ************** -->
<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>

<Sticky {start} {stop} {runningTime} {changeSeek} maxSliderValue={maxSliderValue}/>
   
<EqPlayer  runningTime=0 {eqs} {changeSeek}/> 

<br>
<br>
<br>
<br>
<br>

</div><!--page div-->
