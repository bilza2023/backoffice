<script>
import addSpecialQuestion from './addSpecialQuestion';
let questionType = "eqs";  
let newBoard = "FBISE";  
let newClassNo = 9;  
let newChapter = "";  
let name = "";  

async function useAddSpecial(){
const rez = await addSpecialQuestion(questionType,newBoard,newClassNo,newChapter,name);
 if(rez){
 name = "";
 }
}
</script>

<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-yellow-800 mt-4" for="">Add Question Special</label>


<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Board</label>
<!-- ['Punjab', 'Pakhtoonkhwa', 'Sind', 'Balochistan', 'FBISE'], -->
<select class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700"  bind:value={newBoard}>
<option value="FBISE" selected>FBISE</option>
<option disabled value="Punjab">Punjab</option>
<option disabled value="Pakhtoonkhwa">Pakhtoonkhwa</option>
<option disabled value="Sind">Sind</option>
<option disabled value="Balochistan">Balochistan</option>
</select>
</div>



<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Question Type</label>
<select class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700"  bind:value={questionType}>
<option value="eqs" selected>Eqs</option>
<option value="grid">Grid</option>
</select>
</div>


<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Class</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newClassNo} disabled min=1 max=12>
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Chapter</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newChapter} min=1 max=100 >
</div>


<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">
Name</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={name} >
</div>

<button class="bg-yellow-800 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
on:click={()=>useAddSpecial()}>Add Special Question</button>
</div>

