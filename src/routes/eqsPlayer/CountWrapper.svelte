<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PlayButtons from "./PlayButtons.svelte";
import EqPlayer from '../../lib/EqPlayer/EqPlayer.svelte';
////////////////////////////////////////////////
let eqs=[];
let questionDetails;
let interval=null;
let runningTime =0;
let isPlaying =false;

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
        eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
        // soundFile = await getSoundFile(question.filename);
    questionDetails = question.filename;;


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
<!-- {#if !isPlaying} -->
<Nav isAdmin={false} isLogin={true}/>
<!-- {/if} -->

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


