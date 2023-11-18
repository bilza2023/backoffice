<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
import {browser,onMount,toast,BASE_URL} from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';
// import MainNav from '$lib/appComp/MainNav.svelte';
import SoundPlayer from './SoundPlayer.svelte';
import readSlides from '$lib/tdf/readSlides';
import save from './save.js';

let slides;
let item;
let id;
let tcode;
let isPlaying=false;
let theme = themes.basic;
let editTimeCounter = 1;
 
onMount(async ()=>{
//http://localhost:5173/player?tcode=fbise9math&id=653113340a6eaa163e9f89d0  
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let data  = await readSlides(id,tcode);
let returnSlides  = data.slides;
item  = data.item;

if (returnSlides){slides = returnSlides}
else {throw new Error('Failed to load');}

let soundFileUrl = `/mathSounds/${item.filename}.mp3`;
// debugger;
let sound = new Howl({
    src: [soundFileUrl],
    volume: 1.0,
    onload: function() {
        // console.log('sound.duration()' , sound.duration());
        slides[0].startTime = 0;
        slides[0].endTime = Math.ceil(sound.duration());

        slides[0].items[0].extra.startTime = 0;
        slides[0].items[slides[0].items.length -1].extra.endTime = Math.ceil(sound.duration());
        editTimeCounter =1; //this will next start 1 and end 0
        // console.log('slides', slides);
    }
    });

});

function saveLocal(){
// debugger;
const question = item;
question.slides = slides; 
save(question);

}
let interval=null;
let pulse=0;
let currentSlide = null;

function setTime(time){
  slides[0].items[editTimeCounter - 1].extra.endTime = Math.round(pulse);
  slides[0].items[editTimeCounter].extra.startTime = Math.round(pulse);
  const msg = "Time :" +  pulse + "added to :"  +editTimeCounter;
 toast.push( msg  );
  editTimeCounter +=1;
console.log("Time Now : " , slides);
}
function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}
function gameloop(){
    pulse++;
    setCurrentSlide();
}


function setCurrentSlide(){
 if (!slides ){return;}
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (pulse >= slide.startTime && pulse < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}

$:{
 pulse;
//  console.log(pulse);
setCurrentSlide();
}
</script> 


<div class='bg-gray-800 text-white w-full min-h-screen'>

{#if  item  }
<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-600'>
<SoundPlayer   bind:pulse={pulse} bind:isPlaying={isPlaying} soundFile={`/mathSounds/${item.filename}.mp3`} save={saveLocal} {setTime}/>
<!-- <SoundPlayer   bind:pulse={pulse} bind:isPlaying={isPlaying} soundFile={`/mathSounds/test.mp3`} save={saveLocal}/> -->
</div>
{/if}

{#if  currentSlide  }
<!-- {currentSlide} {theme} {pulse} and displayMode -->
<!-- Thats all only these 4 inputs keep in mind there is just 1 slide that being currentSlide AND theme is external -->
    <Presentation {currentSlide} {theme} {pulse}/>
{/if}

</div><!--page wrapper-->