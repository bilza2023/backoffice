<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
import PageWrapper from '../../cmp/PageWrapper.svelte';
// import EqPanel from './EqPanel.svelte';
import CodeTxt from './CodeTxt.svelte';
import ImgCodeTxt from "./sp/ImgCodeTxt.svelte";
// import SidePanel from './sp/SidePanel.svelte'
// import getNewEqData from '../../getNewSlide/getNewEqData';
import {onMount} from '$lib/util';

export let pulse;
export let items;
// items.push(JSON.stringify(getNewEqData(0,10,"Slide One")));
export let slideExtra;
export let theme;

// debugger;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor

// onMount(async ()=>{
 
// items = items[1];
// });

//changeSeek
</script>

<PageWrapper background={theme.backgroundColor}>
{#if items}
<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
<!--Main Panel---->
        <div class= "w-7/12 min-h-screen p-2  m-0 overflow-x-auto"  >
        {#each items as item}
        <CodeTxt type={item.name} code={item.content}/>
        {/each}
        </div>

<!--Side Panel---->
        <div class= "w-5/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
         <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        <!-- {#if currentEq && currentEq.extra.sp.length > 0 }    
                {#each currentEq.extra.sp as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        {/if} -->
        </div>
        </div>

</div><!--flex div for 2 panels-->

</div><!--page div-->
{/if}
</PageWrapper>
