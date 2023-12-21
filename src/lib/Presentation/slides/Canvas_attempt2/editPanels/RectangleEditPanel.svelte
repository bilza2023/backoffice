<script>
//@ts-nocheck
export let item;
export let items;

function handleChange(){
// console.log("handleChange");
//  debugger;
items = [...items];
}
</script>

<!-- keep in mind am using content for name and name for component type as drawRay -->
<div class='flex flex-col justify-center text-center overflow-y-auto'>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Rectangle</div>


<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Points:1</div>

    <div class='flex gap-1'>
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
    type="number" min=0 max=1200 bind:value={item.extra.x1}
    on:change={handleChange}
    />
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y1} on:change={handleChange}>
   </div>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Points:2</div>

    <div class='flex gap-1'>
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
    type="number" min=0 max=1200 bind:value={item.extra.x2}
    on:change={handleChange}
    />
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y2} on:change={handleChange}>
   </div>
<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Fill Color</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="color"bind:value={item.extra.fillColor} on:change={handleChange}/>


<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Opacity</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1 step=0.1 bind:value={item.extra.opacity} on:change={handleChange} />
</div>
