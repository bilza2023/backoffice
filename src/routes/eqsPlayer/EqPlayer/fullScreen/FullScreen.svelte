<script>
//@ts-nocheck
// import HdgImg from "./HdgImg.svelte";
import FullScreenPanel from './FullScreenPanel.svelte'; 
// import {currentEqStore} from "../store";

export let runningTime;
export let currentEq;
// $:currentEq   = $currentEqStore;
// const typeData = JSON.stringify({
//         hdgContent : 'JSON Content',
//         imgSrc : 'graph',
// }); 
</script> 
{#if currentEq}
<div class='justify-center line-clamp-4 text-yellow-300'>
   
        <div   class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
                {#if currentEq.fs.type !== "Null"} 
                <FullScreenPanel fs={currentEq.fs} {runningTime}/>  
                {/if}
        </div>

</div>
{/if}
