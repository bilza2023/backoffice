<script>
  //@ts-nocheck
  import { PageWrapper } from '$lib/cmp';
  import { onMount } from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  import readSlides from '$lib/tdf/readSlides';
  import Presentation from '$lib/Presentation/Presentation.svelte';
  import parse from './fn/parse.js';
  import LeftPanel from './LeftPanel.svelte';
import {gridData} from './fn/gridData';

 let currentSlide;
 let slides;
 let id;
 let tcode;

 

// onMount(async ()=>{
//  id = '656871a9fab6e4f916ebff25';
// //   slides  = returnSlides.slides;
// //  debugger;
// //   slides = await parse(returnSlides.slides);
//   slides = [];
//   slides.push(gridData);

//   currentSlide = slides[0];

// });

  onMount(async ()=>{
 id = new URLSearchParams(location.search).get("id");
 tcode = new URLSearchParams(location.search).get("tcode");
  let returnSlides  = await readSlides(id,tcode);
   
 if (returnSlides){
//   slides  = returnSlides.slides;
//  debugger;
  slides = await parse(returnSlides.slides);
  currentSlide = slides[0];
  }
else {throw new Error('Failed to load');}
});

</script>

<PageWrapper>

{#if slides}
    <Toolbar {slides} {id}  /> 
{/if}

<div class='flex justify-start '>

    <LeftPanel   {slides} />

    <div class='p-2 ml-1 min-h-screen  text-center' >
        {#if currentSlide}
        <Presentation {currentSlide}  displayMode={false} />
        {/if}
    </div>
</div>
    
 
  <br>
  <br>
  <br>
  <br>

</PageWrapper>
