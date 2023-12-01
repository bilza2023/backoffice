<script>
//@ts-nocheck
import { Icons,onMount, toast,BASE_URL, goto,uuid } from '$lib/util';
import Presentation from '../../lib/Presentation/Presentation.svelte';
import readSlides from '$lib/tdf/readSlides';

let currentSlide;
let id;
let tcode;

// async function save(){
// // debugger;
//   const presentation = {slides ,_id:id};
//   const resp = await fetch( `${BASE_URL}/pre/update`, {
//     method: 'POST',
//       headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 000`,
//   },
//   body: JSON.stringify( {presentation} )
//   });
//   if(resp.ok){toast.push('saved');}else {toast.push('failed to saved');}
  
// }


onMount(async ()=>{
// debugger;
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");
let returnSlides  = await readSlides(id,tcode);
if (returnSlides){currentSlide = returnSlides.slides[0];}
else {throw new Error('Failed to load');}

});
function save(){}

</script> 

<div class='bg-gray-900 text-white w-full min-h-screen '>

  {#if currentSlide}
  <Presentation {currentSlide} {save} displayMode={false} />
  {/if}

</div><!--page wrapper-->