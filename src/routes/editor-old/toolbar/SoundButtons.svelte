<script>
//@ts-nocheck
import {Icons,onMount,toast} from '$lib/util';
import { Howl } from "howler";
import {NavBtn2} from 'sveltetools_bils/src/cmp';

export let soundFile=null;
export let currentTime=0;
let soundAvailable = false;
let sound;
let maxSliderValue=0;
let interval=null;
let isPlaying=false;

onMount(async () => {
  // debugger;
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
    clearInterval(interval);
    currentTime=0;
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
function goto(time) {
  if (sound && time >= 0 && time <= sound.duration()) {
    sound.seek(time);
    currentTime = Math.round(time);
  }
}

</script>


<div class='flex justify-center items-center text-xs bg-green-700 p-1 rounded-md'>
 {#if soundAvailable}
        <div class="flex flex-col">
        <div class="flex justify-center bg-red-900 text-white  text-xs ">
          <div >🎵{currentTime}/{Math.round(sound.duration())}</div>
        </div>
              <!-- sound scroller -->
          <div class="flex w-full">
            <!-- <button on:click={play} class="p-1 m-1 bg-green-700">▶</button> -->
            <button on:click={pause} class="p-1 m-1 bg-green-700">▶||</button>
            <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
            
            <input class="w-full" type="range"  min={0} max={sound.duration()}  
            bind:value={currentTime} on:input={(e) => goto(e.target.value)}/>

            
          </div>
        </div>
{:else}  
      <!-- <h3 class="flex items-center text-xs">sound Not Available</h3> -->
  <div class='text-lg'>
    
    <NavBtn2 title='No Sound' icon={Icons.NOSPEAKER}  />
  </div>

{/if}
</div>