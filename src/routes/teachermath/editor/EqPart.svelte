
<script>
//@ts-nocheck
import CodeTxt from './CodeTxt.svelte';
export let eq;
export let i;
</script> 
 
 <div class="flex justify-centre   w-full p-0 m-1 gap-1 rounded-md">
    <div class="bg-stone-700 w-1/12 p-0 m-0 rounded-md">{i+1}</div>

    <input type="text" class="bg-stone-700 w-1/12 p-0 m-0 rounded-md" bind:value={eq.startTime} />

    <textarea id={`ta-${i}`} class="bg-stone-700 w-5/12 p-0 m-0 rounded-md" bind:value={eq.code}></textarea>

    <div  class="bg-stone-700 w-5/12 p-0 m-0 rounded-md">
          <CodeTxt {eq}/>
    </div>
    
</div>

