<script>
//@ts-nocheck
export let question;
export let redraw;
</script>

<div class='flex justify-center  w-10/12 mx-auto bg-gray-700 p-2   rounded-md   text-center '>
   
<button on:click={()=>{question.status = "empty" ;redraw()}}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Empty</button>

<button on:click={()=>{question.status = "fill" ;redraw()}}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Fill</button>

<div class="bg-gray-900 rounded-xl p-1 m-1">Status:{question.status}</div>

</div>


