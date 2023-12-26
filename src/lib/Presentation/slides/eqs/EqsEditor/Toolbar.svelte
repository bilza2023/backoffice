<script>
//@ts-nocheck
import {onMount,toast} from "$lib/util";
import { Howl } from "howler";
export let addEq;
export let closeAllSP;
export let openAllSP;
export let soundFile;
let sound;
let maxSliderValue=0;
export let currentTime=0;
let interval=null;
let soundAvailable = false;

onMount(async () => {
// debugger;
console.log(soundFile)
loadSound();
});

function gameloop(){
 if(sound){
    currentTime  = Math.round(sound.seek());
 }
}
function play(){
    if (sound){
    sound.play();
    interval = setInterval(gameloop,1000);    
    }
}
function stop(){if (sound){sound.stop();}}

async function loadSound() {
  try {
    sound = new Howl({
      src: [soundFile],
    // fbise9math/2.1/fbise_cl_9_ch_2_ex_2.1_q_1_pt_0.mp3
    //   src: ['fbise9math/1.2/fbise_cl_9_ch_2_ex_2.1_q_1_pt_0.mp3'],
      volume: 1.0,
      onload: function () {
        maxSliderValue = (sound.duration()).toFixed(0);
        soundAvailable = true;
      },
      onloaderror: function (id, error) {
        // toast.push('failed to load sound');
        soundAvailable = false;
      },
    });
  } catch (e) {
    toast.push('failed to load sound');
    return false;
  }
} 
</script>


<div class="flex justify-left bg-gray-900 p-2">

<button id="saveBtn" class="bg-green-800 p-1   rounded-md"
on:click={addEq}
>&#128161; Add Eq</button>
&nbsp;
<button  class="bg-blue-800 p-1   rounded-md"
on:click={openAllSP}>&#128065; Show Sp</button>
&nbsp;
<button  class="bg-orange-800 p-1   rounded-md"
on:click={closeAllSP}
>&#128064; Hide SP</button>
&nbsp;
&nbsp;

 {#if soundAvailable}
        <button on:click={play} class="p-1 m-1 bg-green-700">▶</button>
        <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
        <div  class="p-1 m-1 bg-orange-700">{currentTime}/{maxSliderValue}</div>
    {:else}  
      <h3 class="flex items-center text-xs">sound Not Available</h3>
    {/if}

</div>