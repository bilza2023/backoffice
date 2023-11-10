<script>
//@ts-nocheck
import { Icons,onMount, toast,BASE_URL, goto,uuid } from '$lib/util';
import Editor from '../../lib/Editor/Editor.svelte';
import readSlides from '$lib/tdf/readSlides';
let slides=[];
let id;
let tcode;
// async function saveLocal(){
// // debugger;
// setFakeTimings();
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
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let returnSlides  = await readSlides(id,tcode);
if (returnSlides){slides = returnSlides}
else {throw new Error('Failed to load');}

});


</script> 

<div class='bg-gray-900 text-white w-full min-h-screen '>
<!-- nav -->
{#if slides}
<Editor    bind:slides={slides} />
{/if}
</div><!--page wrapper-->