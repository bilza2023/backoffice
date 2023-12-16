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

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">x1</div>

<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.x1}
 on:change={handleChange}
 />

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">y1</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y1} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">x2</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.x2} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">y2</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y2} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">x3</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.x3} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">y3</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.y3} on:change={handleChange}>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Fill Color</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="color"bind:value={item.extra.fillColor} on:change={handleChange}/>

</div>
