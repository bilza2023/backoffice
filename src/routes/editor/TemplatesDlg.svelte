<script>
    //@ts-nocheck
import {NavBtn2,AreYouSure} from 'sveltetools_bils/src/cmp';
import {Icons} from '$lib/util';
export let slideTemplateCollection=[]
export let addSlideTemplate;
export let deleteSlideTemplate;
</script>

{#if slideTemplateCollection.length > 0}
<div class='flex flex-wrap  bg-gray-900 border-2 border-white rounded-md gap-2 p-2'>

    {#each slideTemplateCollection as slide,index }
        <div class="flex flex-col rounded-md border-2 border-gray-400 gap-1 ">
        
            <div class="bg-gray-950 p-1 m-1 rounded-md text-sm">
                {slide.name.substring(0, 20)}
            </div>
            <div class="bg-gray-950 p-1 m-1 rounded-md text-xs">
                {slide.description.substring(0, 30)}
            </div>
            <div class="flex justify-center gap-4  p-1 m-1 rounded-md text-xs">
                <button class="bg-green-700 p-1 rounded-md" on:click={()=>addSlideTemplate(index) }>Add</button>
                <button class="text-xs text-red-500" on:click={()=>deleteSlideTemplate(slide._id) } >Del</button>
            </div>

        </div>
    {/each}
    
</div>        
{:else}
<h3>waiting for data..</h3>
{/if}