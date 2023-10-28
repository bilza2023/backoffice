<script>
//@ts-nocheck
import {onMount} from "$lib/util";
import { Howl } from 'howler';
//=============================
export let soundFile;
export let callBack;
//=============================
let maxSliderValue=0;
let  sound;
let  runningTime      = 0;
let  isPlaying        = false;  
let  interval         = null;


async function start(){
try{
debugger;
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
    runningTime =0;
    return true;
}
function updateTimeDiff() {
    runningTime = sound.seek();
    callBack(runningTime);
}

function changeSeek(newSeekValue){
    sound.seek(newSeekValue);
    updateTimeDiff();
}

async function loadSound(){
sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
        maxSliderValue = sound.duration();
        console.log("sound loaded..");
    }
    });
}
onMount(async()=>{
    // loadSound();
});
</script>

<div class="sticky top-0 z-50 bg-stone-900 shadow-sm p-2">
  <div class="flex">
    <button class="bg-blue-500 hover:bg-green-700 text-white text-xs 
    py-1 px-2 rounded" on:click={start}>
      ▶ <!-- This is the UTF-8 play icon -->
    </button>
    <button class="bg-blue-500 hover:bg-red-700 text-white text-xs 
    py-1 px-2 rounded ml-2" on:click={stop}>
      ◼ <!-- This is the UTF-8 stop icon -->
    </button>
    <div class="p-1 bg-gray-700 mx-2 rounded text-xs text-yellow-600 ">
      {(runningTime).toFixed(0)}/{maxSliderValue.toFixed(0)} sec</div>
    <div class='flex-grow'>
    <input class='w-full'  type="range"  id="timeSlider" value={runningTime} min=0 max={maxSliderValue} 
    on:change={(e)=>changeSeek(e.target.value)}
    > </div>  
  </div>
</div>
