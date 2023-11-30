<script>
//@ts-nocheck
export let showPanel;

</script>



<div class="flex justify-center w-full gap-2">
<button on:click={()=>showPanel= "gridPanel"} 
class="bg-green-800 p-1 m-1 w-3/12 rounded-sm">Grid Panel</button>

<button on:click={()=>showPanel= "globalPanel"}
class="bg-blue-800 p-1 m-1 w-3/12 rounded-sm">Global Panel</button>




<button on:click={()=>showPanel= "SBPanel"}
class="bg-yellow-800 p-1 m-1 w-3/12 rounded-sm">SideBar Panel</button>


</div>