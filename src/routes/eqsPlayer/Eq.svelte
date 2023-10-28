<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import SoundPlayer from "./EqPlayer/SoundPlayer.svelte";
import EqPlayer from './EqPlayer/EqPlayer.svelte';
////////////////////////////////////////////////
import {runningTime} from './EqPlayer/store';

$:rTime = $runningTime;

 
async function fileExists(url) {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

async function getSoundFile(filename) {
  const soundFile = `./mathSounds/${filename}.mp3`;
  
  if (await fileExists(soundFile)) {
    return soundFile;
  } else {
    return './mathSounds/test.mp3';
  }
}
function changeSeek(newSeekValue){
    moveSeek = parseInt(newSeekValue);
    // console.log("seek", newSeekValue);
}
/////////////////////////
let soundFile;
let eqs=[];
let questionDetails;
let moveSeek = 0;
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
        soundFile = await getSoundFile(question.filename);
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

/////////////////////////////////////////
</script>

 <div class='p-1 m-0 text-xs bg-gray-800 text-yellow-600  '>
 {questionDetails}
 </div>

<!-- ************** -->
<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>

<SoundPlayer  soundFile={soundFile} {moveSeek} />

<EqPlayer  runningTime={rTime} {eqs} {changeSeek}/> 

<br>
<br>
<br>
<br>
<br>

</div><!--page div-->
