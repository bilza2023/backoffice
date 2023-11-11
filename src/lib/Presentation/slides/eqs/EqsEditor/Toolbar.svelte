<script>
//@ts-nocheck

export let addEq;
export let closeAllSP;
export let openAllSP;

</script>


<div class="flex justify-left bg-gray-900 p-2">

<button id="saveBtn" class="bg-green-800 p-1   rounded-md"
on:click={addEq}
>&#128161; Add Eq</button>
&nbsp;
<button  class="bg-blue-800 p-1   rounded-md"
on:click={openAllSP}>&#128065; Show Sp</button>
&nbsp;
<button  class="bg-orange-800 p-1   rounded-md"
on:click={closeAllSP}
>&#128064; Hide SP</button>
&nbsp;


</div>