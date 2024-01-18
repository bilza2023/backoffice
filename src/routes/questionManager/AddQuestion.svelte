<script>
//@ts-nocheck
import { toast,BASE_URL } from "$lib/util";
import TcodeDd from "./TcodeDD.svelte";
let tcode='fbise9math';
// let classNo =10;
let chapter= "1";
let exercise ='1.1';
let questionNo =1;
let part=0;
let name='';

function convertToUrlFriendlyName(name) {
    const urlFriendlyName = name.replace(/\s+/g, '_');
    const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
    return sanitizedUrlFriendlyName;
}

async function addQuestion(){
 debugger;
if(!tcode || tcode == null || tcode == undefined){
    toast.push("missing tcode");
    return;
}
if(name && name !== ''){
name = convertToUrlFriendlyName(name);
}
// debugger;
//   let tcode = 'fbise' + classNo + 'math';
  let token = localStorage.getItem("token");
    const response = await fetch( `${BASE_URL}/be/add_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ qData :{chapter, exercise, questionNo, part, name,tcode}} )
    });

    if (response.ok) {
        const data = await response.json();
        // toast.push('Question Created');
        toast.push(data.message);
    }else {
        const data = await response.json();
        toast.push(data.message)
    }

}
</script>


<div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-green-950 m-2 p-2'>

<h1 class='mx-auto'>Add Question</h1>

<TcodeDd bind:tcode={tcode}/>
<!--Chapter-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Chapter</div>
    <input type='number' class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={chapter} min=1 max=500/>
    
</div>


<!--Exercise-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Exercise</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={exercise}/>
</div>

<!--Question No-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Question No</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={questionNo}  min=0 max=500/>
</div>

<!--Part No-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Part No</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={part}  min=0 max=500/>
</div>

<!--Name-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Name</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={name}/>
</div>

<br>
<div class='flex justify-center'>
<button class='bg-green-700 p-2 m-2 rounded-md hover:bg-green-500' on:click={addQuestion}>Save</button>
</div>



</div><!--wrapper-->


<style>

</style>