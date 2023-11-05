<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
import getNewSlide  from '$lib/Presentation/getNewSlide.js';
import {getNewItem} from '$lib/Presentation';
export let slides;
export let redraw;
export let showAddNew;

function addHdgImg(){
// debugger;
  let newStartTime = 0;
  if(slides.length > 0){
    newStartTime = slides[slides.length -1].endTime ;
  }
  
    slides.push(getNewSlide(newStartTime,newStartTime + 10,"HdgImg",[]));
    slides[slides.length -1].items = [];
    slides[slides.length -1].items.push(getNewItem('','heading'));
    slides[slides.length -1].items.push(getNewItem('','imgSrc'));

    redraw();
    // showAddNew = false;
}

function addBlinkingJumbotron(){
// debugger;
  let newStartTime = 0;
  if(slides.length > 0){
    newStartTime = slides[slides.length -1].endTime ;
  }
  
    slides.push(getNewSlide(newStartTime,newStartTime + 10,"BlinkingJumbotron",[]));
    slides[slides.length -1].items = [];
    slides[slides.length -1].items.push(getNewItem('This is Great','content'));

    redraw();
    // showAddNew = false;
}

</script>

<div class='flex flex-wrap justify-center w-full bg-stone- 900'>

<NavBtn2  icon={Icons.BUS} title='HdgImg' clk={addHdgImg} />
<NavBtn2  icon={Icons.HOT} title='BlinkingJumbotron' clk={addBlinkingJumbotron} />



</div>