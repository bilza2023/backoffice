<script>
//@ts-nocheck
import { toast,BASE_URL } from "$lib/util";

let board = 'FBISE';
let classNo =9;
let chapter= "1";
let isSpecial= "false";
let exercise ='1.1';
let questionNo =99;
let part=9;
let name='';

function convertToUrlFriendlyName(name) {
    const urlFriendlyName = name.replace(/\s+/g, '_');
    const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
    return sanitizedUrlFriendlyName;
}

function checkName(isSpecial,name){
    const isSpecialBool = isSpecial === "true";
    if (isSpecialBool && (name === null || name === undefined || name.trim() === '')) {
        return false; // Special Questions must have a name
    }
    return true; // Name is valid
}

async function addQuestion(){

if (!checkName(isSpecial,name)){
    toast.push('Special Questions must have a name');
return;
}

name = convertToUrlFriendlyName(name);

  let token = localStorage.getItem("token");
    const response = await fetch( `${BASE_URL}/be/new_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ qData :{board, classNo, chapter, isSpecial, exercise, questionNo, part, name}} )
    });

    if (response.ok) {
        // const data = await response.json();
        toast.push('Question Created');
    }else {
        const data = await response.json();
        toast.push(data.message)
    }

}
</script>


<div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-green-950 m-2 p-2'>

<h1 class='mx-auto'>Add Question</h1>

<!--Board-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Board</div>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12'>fbise</div>
</div>

<!--Class no-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Class</div>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12'>9</div>
</div>

<!--Chapter-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Chapter</div>
    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={chapter}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    </select>
</div>


<!--Exercise-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Exercise</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={exercise}/>
</div>

<!--Question No-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Question No</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={questionNo}/>
</div>

<!--Part No-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Part No</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={part}/>
</div>


<!--isSpecial-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>isSpecial</div>
    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={isSpecial}>
    <option value="false">False</option>
    <option value="true">True</option>
    </select>
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