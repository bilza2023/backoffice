<script>
import addQuestion from './addQuestion';
let newChapter = "";  
let newName = "";  
</script>

<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-pink-800 mt-4" for="">Add Special Question</label>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">chapter</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newChapter} >
</div>


<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Part</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={newName} >
</div>

<button class="bg-pink-900 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
on:click={()=>addQuestion(newChapter,newName)}>Add Special Question</button>
</div>

