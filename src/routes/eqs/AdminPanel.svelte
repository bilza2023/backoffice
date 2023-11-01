<script>
//@ts-nocheck
export let question;
export let setFree;
export let setStatus;
export let setType;
</script>

<div class='flex justify-center  w-10/12 mx-auto bg-gray-700 p-2   rounded-md   text-center '>
   
<button on:click={()=>setStatus("unlocked")}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Unlocked</button>

<button on:click={()=>setStatus("fill")}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Fill</button>

<button on:click={()=>setStatus("locked")}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Locked</button>


<button on:click={()=>setStatus("final")}
class='bg-blue-800 rounded-md p-1 mx-2 m-1'>Final</button>

<div class="bg-gray-900 rounded-xl p-1 m-1">Status:&nbsp;&nbsp;{question.status}</div>

</div>


<div class='flex justify-center  w-10/12 mx-auto bg-gray-700 p-2   rounded-md   text-center '>
<button on:click={()=>setType('eqs')}
class='bg-green-800 rounded-md p-1 mx-2 m-1'>Eq</button>

<button on:click={()=>setType('grid')}
class='bg-green-800 rounded-md p-1 mx-2 m-1'>Grid</button>

<div class="bg-gray-900 rounded-xl p-1 m-1">{question.questionType}</div>
   </div>


<div class='flex justify-center  w-10/12 mx-auto bg-gray-700 p-2   rounded-md   text-center '>
<button on:click={()=>setFree(!question.free)}
class='bg-green-800 rounded-md p-1 mx-2 m-1'>Free</button>

<div class="bg-gray-900 rounded-xl p-1 m-1">{question.free}</div>
   </div>
