<script>
// @ts-nocheck
import {onMount,toast , Icons,browser,fade} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import MainPanel from './MainPanel.svelte';
import Sticky from "./Sticky.svelte";
import {BASE_URL} from "$lib/cmn/config.js";
import { Howl } from 'howler';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './sp/FullScreen.svelte';
////////////////////////////////////////////////
function addEndTimeToObjects( ) {
  for (let i = 0; i < eqs.length; i++) {
    if (i < eqs.length - 1) {
      eqs[i].endTime = eqs[i + 1].time;
    } else {
      eqs[i].endTime = PresentationTotalTime;  
    }
  }
}
function addStepsToObjects( ) {
  for (let i = 0; i < eqs.length; i++) {
      eqs[i].step = i + 1;
  }
}
// function fakeTimeToObjects( ) {
//  let time = 0
//   for (let i = 0; i < eqs.length; i++) {
//       eqs[i].time = time;
//       time += 5;
//   }
// }

function updateTimeDiff() {
      timeDiff = sound.seek();
      // setState();  
      setFocus();
      checkFullScreen();
    if (timeDiff > (sound.duration() * 1000)) {
        stop();
    }
}
function checkFullScreen(){
const focused = getIsfTrue();
  if (focused.fs.length > 0) {
     if (timeDiff >= focused.fsStartTime && timeDiff < focused.fsEndTime ){
      // console.log("Full screen data avaialbe");
      fullScreen = true;
     }else {
      fullScreen = false;
     }
  }
}
function changeSeek(newSeekValue){
 sound.seek(newSeekValue);
}
 
function start(){
    // debugger;
    if (isPlaying == true){return;}
    isPlaying = true;
    sound.play();
        sound.on('play', function () {
        interval = setInterval(updateTimeDiff,1000);
        });
    
}

function stop(){
    sound.stop();
    isPlaying = false;
    timeDiff = 0;
    clearInterval(interval);
    window.scrollTo({top: 0,behavior: 'smooth'});
    setFocus();
}
function getIsfTrue() {
    for (let i = 0; i < eqs.length; i++) {
        if (eqs[i].isf === true) {
            return eqs[i];
        }
    }
    return null;
}

function setFocus( ){
  eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
  for (let i = 0; i < eqs.length; i++) {
        const eq = eqs[i];
            if (timeDiff >= eq.eqStartTime && timeDiff < eq.eqEndTime ){
                eq.isf = true;
                fullScreen = false;
                eqs = [...eqs];        
                return; // no need to checkany further
            }
        }
}

async function getSoundFile(id) {
  let soundFile = `./mathSounds/${id}.mp3`;

  // Use a try-catch block to check if the sound file exists
  try {
    // Attempt to import the sound file
    await import(`./mathSounds/${id}.mp3`);
  } catch (e) {
    // If the import fails, use the fallback 'test.mp3'
    soundFile = `./mathSounds/test.mp3`;
  }

  return soundFile;
}
//=======
// let showSP = false; //start with false
// let showMP = true;

/////////////////////////////////////////
/////////////////////////
let soundFile;
let sound;
let PresentationTotalTime =0; 
/////////////////////////
let fullScreen = false;
let interval;
let maxSliderValue; //it is not timeDiff since it does not change
let isPlaying=false;
let timeDiff = 0; // Initialize timeDiff - keep timeDiff and not use sound.seek() since sound.seek() is a function where as the timeDiff is a value that can be passed to the components.
// let content=[];

let eqs=[];
let questionDetails;
onMount(async () => {
  try {
  // debugger;
  //http://localhost/math?id=650a367afdc85038903a4da3
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/math?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        const data = await resp.json();
        const mathQuestion  = data.mathQuestion //===> important
        soundFile = await getSoundFile(id);

    // const data  = (await import(`../../lib/mathData/${id}.js`)).default;  
    eqs = mathQuestion.eqs;
    questionDetails = mathQuestion.filename;;

    sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        // addEndTimeToObjects();
        // addStepsToObjects();
        eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
        console.log("eqs", eqs);
        PresentationTotalTime = sound.duration();
        maxSliderValue = PresentationTotalTime;
        eqs[eqs.length-1].endTime =  PresentationTotalTime;
        setFocus( );
    }
    });

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

{#if !isPlaying}
<MainNav/>
{/if}
 <div class='p-1 m-0 text-xs bg-gray-800 text-yellow-600  '>{questionDetails}</div>

<!-- ************** -->
<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
    <Sticky {start} {stop} {timeDiff} {changeSeek} maxSliderValue={maxSliderValue}/>
<!-- <button on:click={() => {showSP = !showSP}}>SidePanel</button> -->

   

    <div class="flex px-2 rounded-md bg-gray-900" >

<!--Main Panel---->
{#if !fullScreen}
        <div class= "w-8/12 min-h-screen p-2  m-0 overflow-x-auto"  >
        <MainPanel {eqs}  {soundFile} {timeDiff}  />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {eqs} />
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <FullScreen eqs= {eqs} />
        </div>
{/if}
    </div><!--flex div for 2 panels-->
<br>
<br>
<br>
<br>
<br>

</div><!--page div-->

