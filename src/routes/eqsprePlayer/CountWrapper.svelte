<script>
// @ts-nocheck
import {BASE_URL,onMount,toast} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PlayButtons from "./PlayButtons.svelte";
import EqPlayer from '$lib/Presentation/slides/eqs/EqPlayer/EqPlayer.svelte';
////////////////////////////////////////////////
let interval=null;
let pulse =0;
let isPlaying =false;
let currentSlide = {
  startTime : 0,    //This is slide start and end time
  endTime : 50,    
  type : 'Eqs',    
  slideExtra : [],    
  /////////////////
 items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            step : 1,
            code : 'This is a heading',
            startTime : 0,//This is item start and end time
            endTime : 10,
            sp:[ 
                  {code : 'Step one', type: 'text', },
                  {code : 'Step one', type: 'text', },
                  ],
            fs:[
                  {code : 'This is full Screen', type: 'text', }
            ]
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            step : 2,
            code : 'Step Two',
            startTime : 10,
            endTime : 20,
            sp:[ 
                  {code : 'Step Two', type: 'text', },
                  {code : 'Step Two', type: 'text', },
                  ],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            step : 3,
            code : '4^2',
            startTime : 20,
            endTime : 30,
            sp:[ 
                  {code : 'Step Three', type: 'text', },
                  {code : 'Step Three', type: 'text', },
                  ],
            fs:[]
      }},
  ]

};

//////

function changeSeek(newSeekValue){
      // debugger;
    pulse = parseInt(newSeekValue);
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
    pulse = 0;
    return true;
}
function updateTimeDiff() {
    pulse +=1;
}

/////////////////////////////////////////
</script>

<!-- ************** -->

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>


<PlayButtons  runningTime={pulse} {start} {stop} {changeSeek}/>
<!-- <EqPlayer  {pulse} {eqs} {changeSeek}/>  -->
 <EqPlayer  
      {pulse}
      startTime={currentSlide.startTime} 
      endTime={currentSlide.endTime} 
      items={currentSlide.items} 
      slideExtra={currentSlide.slideExtra} 
      {changeSeek}
  />

</div><!--page div-->


