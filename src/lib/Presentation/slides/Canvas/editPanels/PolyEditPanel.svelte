<script>
//@ts-nocheck
export let item;
export let items;

function handleChange(){
// console.log("handleChange");
//  debugger;
items = [...items];
}

function editPointX(e,i){
 debugger;
item.extra.points[i].x = e.value;
items = [...items];
}

function editPointY(e,i){
 
item.extra.points[i].y = e.value;
items = [...items];
}
</script>

<!-- keep in mind am using content for name and name for component type as drawRay -->
<div class='flex flex-col justify-center text-center overflow-y-auto'>

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Polygone</div>

{#each item.extra.points as point,i}
<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Points:x,y</div>

    <div class='flex gap-1'>
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
    type="number" min=0 max=1200 bind:value={point.x}
    on:change={handleChange}
    />
    <input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1200 bind:value={item.extra.points[i].y} on:change={handleChange}>
    </div>

{/each}

<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Fill Color</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="color"bind:value={item.extra.fillColor} on:change={handleChange}/>


<div class="w-6/12 mx-auto bg-gray-600 text-white text-xs  rounded-md my-1">Opacity</div>
<input class="w-full bg-gray-800 text-white text-center rounded-md"
 type="number" min=0 max=1 step=0.1 bind:value={item.extra.opacity} on:change={handleChange} />
</div>
