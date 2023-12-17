<script>
//@ts-nocheck
export let item;
export let items;

function handleChange(){
items = [...items];
}
function handleFilled(){
    // debugger;
 item.extra.filled = !item.extra.filled; 
items = [...items];
}
</script>

<!-- keep in mind am using content for name and name for component type as drawRay -->
<div class='flex flex-col justify-center text-center overflow-y-auto'>


<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Circle</div>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Points:x,y</div>

    <div class='flex gap-1'>
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
    type="number" min=0 max=1200 bind:value={item.extra.x1}
    on:change={handleChange}
    />
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y1} on:change={handleChange}>
   </div>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Radius</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.radius} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Border</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.lineWidth} on:change={handleChange} />

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Fill Color</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="color"bind:value={item.extra.fillColor} on:change={handleChange} />


<button class="w-full bg-gray-800 text-white text-center rounded-md mt-2"
   on:click={handleFilled} >Filled</button>


<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Opacity</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1 step=0.1 bind:value={item.extra.opacity} on:change={handleChange} />

</div>
