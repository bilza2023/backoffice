<script>
import addQuestion from './addQuestion';
let newBoard = "";  
let newClassNo = "";  
let newChapter = "";  
let newExercise = "";  
let newQuestionNo = "";  
let newPart = "";  
let questionType = "";  
</script>

<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-green-800 mt-4" for="">Add Question</label>


<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Board</label>
<!-- ['Punjab', 'Pakhtoonkhwa', 'Sind', 'Balochistan', 'FBISE'], -->
<select class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700"  bind:value={newBoard}>
<option value="FBISE" selected>FBISE</option>
<option value="Punjab">Punjab</option>
<option value="Pakhtoonkhwa">Pakhtoonkhwa</option>
<option value="Sind">Sind</option>
<option value="Balochistan">Balochistan</option>
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
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newClassNo} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Chapter</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newChapter} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Exercise</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={newExercise} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">QuestionNo</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newQuestionNo} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Part</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={newPart} >
</div>

<button class="bg-green-900 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
on:click={()=>addQuestion(newChapter,newExercise,newQuestionNo,newPart,newBoard,newClassNo,questionType)}>Add Question</button>
</div>

