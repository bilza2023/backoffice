<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import MainPanel from './MainPanel.svelte';
import Sticky from "./Sticky.svelte";
import { Howl } from 'howler';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './sp/FullScreen.svelte';
////////////////////////////////////////////////

function updateTimeDiff() {
      timeDiff = sound.seek();
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
 timeDiff = sound.seek();
 setFocus();
//  console.log('sound.seek',r);
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
async function fileExists(url) {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

async function getSoundFile(filename) {
  const soundFile = `./sounds/math_fbise_9/${filename}.mp3`;
  
  if (await fileExists(soundFile)) {
    return soundFile;
  } else {
    return './mathSounds/test.mp3';
  }
}

//=======
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
let notFreeContent = false;
let eqs=[];
let questionDetails;
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
        // if (data.errorCode == "notFree"){
        //     notFreeContent = true;
        //     return;
        // }
        const question  = data.question //===> important
        // eqs = data.eqs.eqs; //its twice eqs.eqs
        eqs = question.eqs;
        soundFile = await getSoundFile(question.filename);
        // soundFile =  `./mathSounds/${mathQuestion.filename}.mp3`;

    // const data  = (await import(`../../lib/mathData/${id}.js`)).default;  
    questionDetails = question.filename;;

    sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        // addEndTimeToObjects();
        // addStepsToObjects();
        eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
        // console.log("eqs", eqs);
        PresentationTotalTime = sound.duration();
        maxSliderValue = PresentationTotalTime;
        //--check again
        eqs[eqs.length-1].eqEndTime =  PresentationTotalTime;
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
<Nav isAdmin=false isLogin=true/>
{/if}

{#if notFreeContent}
<div>
This is premier content
</div>
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
        <MainPanel {eqs}  {soundFile} {timeDiff}  {changeSeek}/>
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
