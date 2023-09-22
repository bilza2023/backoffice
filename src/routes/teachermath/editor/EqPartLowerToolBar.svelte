
<script>
//@ts-nocheck
export let i;
export let eq;
export let addEq;
export let moveUpEq;
export let moveDownEq;
export let delEq;
export let toggleSP;
export let toggleFS;
</script>


<div class="flex justify-start bg-stone-500 w-full p-1 m-1 mb-3 gap-1">

<button on:click={addEq} class="bg-green-900 text-white p-1 text-xs rounded-md">Add</button>

<button on:click={()=>toggleSP(i)} class="bg-green-700 text-white p-1 text-xs rounded-md">SideBar</button>

<button on:click={()=>toggleFS(i)} class="bg-green-900 text-white p-1 text-xs rounded-md">FullScreen</button>
<button on:click={()=>moveUpEq(i)} class="bg-gray-900 text-white p-1 text-xs rounded-md">Up</button>

<button on:click={()=>moveDownEq(i)} class="bg-gray-900 text-white p-1 text-xs rounded-md">Down</button>

<div  class="bg-stone-700 text-white p-1 text-xs rounded-md">Full Screen Start Time</div>

<input class='text bg-gray-700 rounded-md text-center' type="number" bind:value={eq.fsStartTime}>

<div  class="bg-stone-600 text-white p-1 text-xs rounded-md text-center">Full Screen End Time</div>

<input class='text bg-gray-600 rounded-md' type="number" bind:value={eq.fsEndTime}>

&nbsp;
&nbsp;
&nbsp;
<button on:click={()=>delEq(i)} class="bg-red-900 text-white p-1 text-xs rounded-md">Del</button>
</div>
