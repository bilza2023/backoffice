<script>
//@ts-nocheck
import { toast,BASE_URL } from "$lib/util";
import TcodeDd from "./TcodeDD.svelte";
let id;
let classNo =9;
let tcode='fbise10math';

async function deleteQuestion(){
  debugger;
  if(!tcode || tcode == null || tcode == undefined){
    toast.push("missing tcode");
    return;
}
  // let tcode = 'fbise' + classNo + 'math';
  let token = localStorage.getItem("token");
    const response = await fetch( `${BASE_URL}/be/delete_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ id,tcode } )
    });

    if (response.ok) {
        // const data = await response.json();
        toast.push('Question deleted');
        id='';
    }else {
        const data = await response.json();
        toast.push(data.message)
    }

}
</script>


<div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-red-950 m-2 p-2'>

<h1 class='mx-auto'>Delete Question</h1>


<TcodeDd bind:tcode={tcode}/>
<!--id-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Id</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={id}/>
</div>

<br>
<div class='flex justify-center'>
<button class='bg-orange-700 p-2 m-2 rounded-md hover:bg-green-500' on:click={()=>deleteQuestion(tcode)}>Delete</button>
</div>

</div><!--wrapper-->

