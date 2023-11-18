<script>
//@ts-nocheck
import {onMount,Icons} from "$lib/util";
import { Howl } from 'howler';

//=============================
export let pulse=0;
export let isPlaying=false;
export let soundFile;
export let moveSeek=()=>{};
//=============================

$:{
  moveSeek;
  if ( sound && !isNaN(moveSeek) ) {
    const seekPosition = parseInt(moveSeek);
    if (seekPosition >= 0 && seekPosition <= maxSliderValue) {
      sound.seek(seekPosition);
      pulse = seekPosition;
      // console.log("Seeking to position:", seekPosition);
    } else {
      // console.error("Invalid seek position:", seekPosition);
    }
  }
}

//=============================
let maxSliderValue=0;
let  sound;
let  interval  = null;


async function start(){
try{
// debugger;
  await loadSound();
 if (isPlaying == true){return;}
        sound.play();
        sound.on('play', function () {
        isPlaying = true;
        interval = setInterval(updateTimeDiff,1000);
    });

}catch(e){
  throw new Error("Can not load");
}
    
 return true;     
}

function stop(){ 
    isPlaying = false;
    sound.stop();
    clearInterval(interval);
    pulse = 0; 
    return true;
}
function updateTimeDiff() {
    const r = sound.seek();
    pulse = r;
}

function changeSeek(newSeekValue){
//  debugger;
    sound.seek(parseInt(newSeekValue));
    pulse = parseInt(newSeekValue);
    // updateTimeDiff();
}

async function loadSound(){
sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        maxSliderValue = sound.duration();
        // console.log("sound loaded..");
    }
    });
}
onMount(async()=>{
    // loadSound();
});
</script>

<div class="sticky top-0 z-50 bg-stone-900 shadow-sm p-2">

  <div class="flex">
 <a class="border-2 border-white hover:bg-green-900 text-white text-xs 
    py-1 px-2 mx-2 rounded" href='/'>
      {Icons.HOUSE}
 </a>

    <button class="bg-blue-500 hover:bg-green-700 text-white text-xs 
    py-1 px-2 mx-2 rounded" on:click={start}>
      ▶ <!-- This is the UTF-8 play icon -->
    </button>

    <button class="bg-blue-500 hover:bg-red-700 text-white text-xs 
    py-1 px-2 mx-2 rounded ml-2" on:click={stop}>
      ◼ <!-- This is the UTF-8 stop icon -->
    </button>

    <div class="p-1 bg-gray-700 mx-2 rounded text-xs text-yellow-600 ">
      {(pulse).toFixed(0)}/{maxSliderValue.toFixed(0)} sec</div>
    <div class='flex-grow'>
    <input class='w-full'  type="range"  id="timeSlider" value={pulse} min=0 max={maxSliderValue} 
    on:change={(e)=>changeSeek(e.target.value)}
    > </div>  
  </div>
</div>
