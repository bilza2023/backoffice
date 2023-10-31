<script>
//@ts-nocheck
export let runningTime=0;
export let start;
export let stop;
export let changeSeek;
export let maxSliderValue=200;

</script>

<div class="sticky top-0 z-50 bg-stone-900 shadow-sm p-2">
  <div class="flex">
    <button class="bg-blue-500 hover:bg-green-700 text-white text-xs 
    py-1 px-2 rounded" on:click={start}>
      ▶ <!-- This is the UTF-8 play icon -->
    </button>
    <button class="bg-blue-500 hover:bg-red-700 text-white text-xs 
    py-1 px-2 rounded ml-2" on:click={stop}>
      ◼ <!-- This is the UTF-8 stop icon -->
    </button>
    <div class="p-1 bg-gray-700 mx-2 rounded text-xs text-yellow-600 ">
      {(runningTime).toFixed(0)}/{maxSliderValue.toFixed(0)} sec</div>
    <div class='flex-grow'>
    <input class='w-full'  type="range"  id="timeSlider" value={runningTime} min=0 max={maxSliderValue} 
    on:input={(e)=>changeSeek(e.target.value)}
    > </div>  
  </div>
</div>
