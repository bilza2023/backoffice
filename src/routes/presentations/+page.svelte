<script>
//@ts-nocheck
import {browser,onMount} from '$lib/util'
let presentations;
if(browser){
presentations = JSON.parse(localStorage.getItem('presentations'));
}

if(presentations == null){presentations=[];}

</script> 
{#if presentations}
<div class='bg-stone-800 text-white w-full min-h-screen'>
{#each presentations as presentation,i}

    <div class='flex justify-center w-full p-1 m-1 rounded-md'>
    <a href="/">{i}</a>
    </div>
{/each}
</div><!--page wrapper-->
{/if}