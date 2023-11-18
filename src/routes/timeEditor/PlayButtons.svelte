<script>
  //@ts-nocheck
  import { ThemeDD } from '$lib/Presentation';

  export let start;
  export let stop;
  export let pulse;
  export let callback;
</script>

<div class="flex items-center space-x-2">
    &nbsp;&nbsp;  
    <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
    on:click={start}>▶️ Start</button>

    <button class="p-1 rounded-sm bg-red-800 text-white text-sm" 
    on:click={stop}>■ Stop</button>
 
    <div class="p-1 rounded-sm bg-gray-900 text-yellow-500 text-sm">
    {pulse} sec</div>

    <ThemeDD {callback}/>

</div>


