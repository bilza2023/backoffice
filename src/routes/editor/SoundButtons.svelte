<script>
//@ts-nocheck
import {onMount,toast} from '$lib/util';
import { Howl } from "howler";

export let soundFile=null;
export let currentTime=0;
let soundAvailable = false;
let sound;
let maxSliderValue=0;
let interval=null;
let isPlaying=false;

onMount(async () => {
// console.log('soundFile',soundFile);
loadSound();
});
function play(){
    if (isPlaying){return;}
    if (sound){
    isPlaying = true;
    sound.play();
    interval = setInterval(gameloop,1000);    
    }
}
function stop(){
    if (sound){
    isPlaying=false;
    sound.stop();
    }

}


function pause() {
  if (sound) {
    if (isPlaying) {
      isPlaying = false;
      sound.pause();
      clearInterval(interval);
    } else {
      isPlaying = true;
      sound.play();
      interval = setInterval(gameloop, 1000);
    }
  }
}
function gameloop(){
 if(sound){
    currentTime  = Math.round(sound.seek());
 }
}
async function loadSound() {
  try {
  //  debugger;
    sound = new Howl({
      src: [soundFile],
      html5:true,
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


<div class='flex justify-center items-center text-xs'>
 {#if soundAvailable}
        <button on:click={play} class="p-1 m-1 bg-green-700">▶</button>
        <button on:click={pause} class="p-1 m-1 bg-green-700">||</button>
        <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
        <div  class="p-1 m-1 bg-orange-700">{currentTime}/{maxSliderValue}</div>
{:else}  
      <h3 class="flex items-center text-xs">sound Not Available</h3>
{/if}
</div>