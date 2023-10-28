
<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputFormCancel,ShowIfTrue,Loading} from '$lib/cmp';
import {onMount,toast , Icons,browser,fade} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import MainPanel from './MainPanel.svelte';
import Sticky from "./Sticky.svelte";
import { Howl } from 'howler';
import SidePanel from './SidePanel.svelte';

/////////////////////////
const soundFile = './sounds/math/eq.mp3';
const questionDetails = 'Punjab TBB, Class 9th, Exercise 4.4 Q # 1'
/////////////////////////
let interval;
let maxSliderValue; //it is not timeDiff since it does not change
let isPlaying=false;
let timeDiff = 0; // Initialize timeDiff - keep timeDiff and not use sound.seek() since sound.seek() is a function where as the timeDiff is a value that can be passed to the components.
let content=[];
/////////////////////////////////////////
let PresentationTotalTime =0;
let sound = new Howl({
    src: [soundFile],
    volume: 1.0,
    onload: function() {
    PresentationTotalTime = sound.duration();
    maxSliderValue = PresentationTotalTime;
    eqs[eqs.length-1].endTime =  PresentationTotalTime;
     addEndTimeToObjects();
    setFocus( );
    // console.log('Sound loaded!',PresentationTotalTime);
  }
});
/////////////////////////
let permContent = [
{code : "This is first line of Permanent Content"},
{code : "This is Second line of Permanent Content"},
];
/**
 * Rules
        - permContent :==> The presence of permContent has no effect on the show/hide of SP or MP. They are passed once at the start we do not add or remove them.
        
        - SP content :==> If there is any SP content the SP will show.

        - Un-hidable sp :==> In SP content we can give content.endTime == null to make it display till end that also makes the SP un-hidable FROM THAT POINT ONWARDS.
        - SP content can hide MP :==> Each SP content can make MP disapper. MP will appear after that content is gone THATS WHY content with endTime = null cant hide MP even of they do we will check it in setState.

        - The difference between permContent and SP content is that the existince of permContent does not guarantee display of SP but the presence of SP content guarantee that. 
 */
 
let spContent = [
    {startTime : 5 , endTime : 10, code : "This is first line of SP Content",hideMP :false},
    {startTime : 15 , endTime : 20, code : "This is Second line of SP Content",hideMP :true},
    {startTime : 25 , endTime : null, code : "PERMANENT SP Content",hideMP :false},
    {startTime : 30 , endTime : 35, code : "Added after PERMANENT",hideMP :false},
    {startTime : 40 , endTime : 45, code : "HIDE after PERMANENT",hideMP :true},
];

//--we have to give first time = 1 and not zero
let eqs = [
   {time:1,code: "\\frac{3}{4 \\sqrt{3}}"},

   {time:22,code:`\\begin{aligned} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times  
   \\newline 
   \\frac{\\sqrt{3}}{\\sqrt{3}} 
   \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} 
   \\newline 
   \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}  \\frac{3}{4 \\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\end{aligned}`},

   {time:55,code: "\\frac{3 \\sqrt{3}}{4 (\\sqrt{3})^2} "},
   {time:83,code: "\\frac{3 \\sqrt{3}}{4 (\\cancel{\\sqrt{3}})\\cancel{^2}}"},
   {time:98,code:"\\frac{3 \\sqrt{3}}{4 \\times 3}"},
   {time:106,code:"\\frac{3 \\sqrt{3}} {12}"}
];


function addEndTimeToObjects( ) {
  for (let i = 0; i < eqs.length; i++) {
    if (i < eqs.length - 1) {
      eqs[i].endTime = eqs[i + 1].time;
    } else {
      eqs[i].endTime = PresentationTotalTime;  
    }
  }
}

function updateTimeDiff() {
      timeDiff = sound.seek();
      setState();  
      setFocus();
    if (timeDiff > (sound.duration() * 1000)) {
        stop();
    }
}

function changeSeek(newSeekValue){
 sound.seek(newSeekValue);
}
 
function start(){
    // debugger;
    if (isPlaying == true){return;}
    isPlaying = true;
    sound.play();
        sound.on('play', function () {
        interval = setInterval(updateTimeDiff,1000);
        });
    
}

function stop(){
    sound.stop();
    isPlaying = false;
    timeDiff = 0;
    clearInterval(interval);
    window.scrollTo({top: 0,behavior: 'smooth'});
    setFocus();
}

let eqsForMP = [];
function setFocus( ){
  eqsForMP = [];
  for (let i = 0; i < eqs.length; i++) {
        const eq = eqs[i];
            if (timeDiff < eq.endTime ){
                eqsForMP.push(eq);
            }
        }
//    eqsForMP[0].isf = true;         
}
////////////////////////////////
function setState(){
 content = [];
 showSP = false;
 showMP = true; //start each time Fresh no old baggage

    for (let i = 0; i < spContent.length; i++) {
    const spItem = spContent[i];
            //-if found
            if (timeDiff >= spItem.startTime && 
                (timeDiff <= spItem.endTime || spItem.endTime == null) ){
                showSP = true;
                content.push(spItem);
                    if (spItem.hideMP == true && spItem.endTime != null){
                        showMP=false;
                    }
            }
    }
}
//=======
let showSP = false; //start with false
let showMP = true;
</script>

{#if !isPlaying}
<MainNav/>
{/if}
<!-- ************** -->
<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
    <Sticky {start} {stop} {timeDiff} {changeSeek} maxSliderValue={maxSliderValue}/>
<button on:click={() => {showSP = !showSP}}>SidePanel</button>

    <div class='p-1 m-0 text-xs text-yellow-800  '>{questionDetails}</div>


    <div class="flex px-2 rounded-md bg-gray-900" >

<!--Main Panel---->
        {#if showMP}
        <div class= {`${ showSP ? 'w-8/12' : 'w-full'}   min-h-screen p-2  m-0 overflow-x-auto` } in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
        <MainPanel eqs={eqsForMP}  {soundFile} {timeDiff}  />
        </div>
        {/if}

<!--Side Panel---->
        {#if showSP}
        <div class= {`${ showMP ? 'w-4/12' : 'w-full'}  min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b`} in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
        <SidePanel  {permContent} {content} />
        </div>
        {/if}

    </div><!--flex div for 2 panels-->

<br>
<br>
<br>
<br>
<br>

</div><!--page div-->

