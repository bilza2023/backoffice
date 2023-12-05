<script>
//@ts-nocheck
import { Icons,onMount, toast,BASE_URL, goto,uuid } from '$lib/util';
import Presentation from '../../lib/Presentation/Presentation.svelte';
import readSlides from '$lib/tdf/readSlides';

let currentSlide;
let slides;
let id;
let tcode;


function stringify(){
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      if (slide.type == 'grid'){
        for (let j = 0; j < slide.items.length; j++) {
          const item = slide.items[j];
          item.content = JSON.stringify(item.content);
        }
      }
  }
}
function parse(){
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      if (slide.type == 'grid'){
        for (let j = 0; j < slide.items.length; j++) {
          const item = slide.items[j];
          item.content = JSON.parse(item.content);
        }
      }
  }
}

 
async function save(){
debugger;
stringify();
  const presentation = {slides ,_id:id};
  const resp = await fetch( `${BASE_URL}/pre/update`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 000`,
  },
  body: JSON.stringify( {presentation} )
  });
  // debugger;
  if(resp.ok){
    toast.push('saved');}
    else {toast.push('failed to saved');
  }
}

onMount(async ()=>{
// debugger;
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");
  let returnSlides  = await readSlides(id,tcode);
   
if (returnSlides){
  slides  = returnSlides.slides;
  parse();
  currentSlide = returnSlides.slides[0];
  }
else {throw new Error('Failed to load');}

});
// function save(){}

</script> 

<div class='bg-gray-900 text-white w-full min-h-screen'>

  <button on:click={save}>Save</button>

  {#if currentSlide}
  <Presentation {currentSlide} {save} displayMode={false} />
  {/if}

</div><!--page wrapper-->