<script>
//@ts-nocheck
import {slides} from './data.js'

let interval=null;
let pulse=0;
let currentSlide = null;

function gameloop(){
    pulse++;
    setCurrentSlide();
}

function start(){
    interval= setInterval(gameloop,1000);
}

function stop(){
    clearInterval(interval);
    pulse = 0;
}

function setCurrentSlide(){
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (pulse >= slide.startTime && pulse < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}
</script> 


<button on:click={start}>Start</button>
<button on:click={stop}>Stop</button>

{#if currentSlide}
    <p>pulse :{pulse}</p>
    <h1>{currentSlide.content}</h1>
{/if}
