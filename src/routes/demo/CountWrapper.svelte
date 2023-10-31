<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PlayButtons from "./PlayButtons.svelte";
import EqPlayer from '$lib/EqPlayer/EqPlayer.svelte';
import eqData from './data/first.js';
////////////////////////////////////////////////
let eqs=[];
let questionDetails;
let interval=null;
let runningTime =0;
let isPlaying =false;

onMount(async () => {
        eqs = eqData;
        questionDetails = 'static data..'
});

//////

function changeSeek(newSeekValue){
    runningTime = parseInt(newSeekValue);
}

function start(){
try{

 if (isPlaying == true){return;}
        isPlaying = true;
        interval = setInterval(updateTimeDiff,1000);
}catch(e){
  throw new Error("Can not load");
}
 return true;     
}

function stop(){ 
    isPlaying = false;
    clearInterval(interval);
    runningTime = 0;
    return true;
}
function updateTimeDiff() {
    runningTime +=1;
}

/////////////////////////////////////////
</script>
{#if !isPlaying}
<Nav isAdmin={false} isLogin={true}/>
{/if}

 <div class='p-1 m-0 text-xs bg-gray-800 text-yellow-600  '>
 {questionDetails}
 </div>

<!-- ************** -->

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>


{#if eqs}
<PlayButtons  {runningTime} {start} {stop} {changeSeek}/>
<EqPlayer  {runningTime} {eqs} {changeSeek}/> 
{/if}
</div><!--page div-->


