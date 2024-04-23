<script>
  //@ts-nocheck
  import { ThemeDD } from '$lib/Presentation';
  import { Icons ,goto} from '$lib/util';

  export let start;
  export let stop;
  export let pause;
  export let callback;
  export let isPlaying;
  export let isPaused;
  export let setVolume;
function home(){
stop();
goto('/');
}

</script>

<div class="flex items-center space-x-2">
    &nbsp;&nbsp;  
<button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
  style='background-color:#065d7f' on:click={home}>{Icons.HOUSE}</button>

    {#if isPlaying}
        {#if isPaused}
        <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
        on:click={pause} style='background-color:gray '> || </button>
      {:else}
        <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
        on:click={pause} style='background-color:#00A6ED'> || </button>
      {/if}
   {:else}
   <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
    on:click={start} style='background-color:#00A6ED '>▶ </button>
    {/if}

    <button class="p-1 rounded-sm bg-red-800 text-white text-sm " 
    on:click={stop}>■ </button>
 
 <input type="range" min="0" max="1" step='0.1' value="0.8" on:input={(e)=>setVolume(e.target.value)} />


    <ThemeDD {callback}/>

</div>


