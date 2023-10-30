<script>
//@ts-nocheck
import {runningTime,isPlayingStore} from './store';

$:rTime = $runningTime;
$:isPlaying = $isPlayingStore;
//=============================
export let moveSeek;

$:{
  moveSeek;
  runningTime.set( moveSeek  );
}

//=============================
let maxSliderValue=5000;
let  interval         = null;


async function start(){
try{

 if (isPlaying == true){return;}
        isPlayingStore.set(true);
        interval = setInterval(updateTimeDiff,1000);
}catch(e){
  throw new Error("Can not load");
}
 return true;     
}

function stop(){ 
    isPlayingStore.set(false);
    clearInterval(interval);
    runningTime.set(0);
    return true;
}
function updateTimeDiff() {
    runningTime.set(rTime+1);
}

function changeSeek(newSeekValue){
    runningTime.set(parseInt(newSeekValue));
}

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
      {(rTime).toFixed(0)}/{maxSliderValue.toFixed(0)} sec</div>
    <div class='flex-grow'>
    <input class='w-full'  type="range"  id="timeSlider" value={rTime} min=0 max={maxSliderValue} 
    on:change={(e)=>changeSeek(e.target.value)}
    > </div>  
  </div>
</div>
