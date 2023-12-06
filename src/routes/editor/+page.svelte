<script>
  //@ts-nocheck
  import { PageWrapper } from '$lib/cmp';
  import { onMount } from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  import readSlides from '$lib/tdf/readSlides';
  import Presentation from '$lib/Presentation/Presentation.svelte';
  import parse from './fn/parse.js';

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

  onMount(async ()=>{
//  debugger;
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

</script>

<PageWrapper>

<Toolbar /> 

    <div 
    class='p-2 ml-1 min-h-screen bg-blue-900 text-center'
    >
        {#if currentSlide}
        <Presentation {currentSlide}  displayMode={false} />
        {/if}
    </div>
    
 
  <br>
  <br>
  <br>
  <br>

</PageWrapper>
