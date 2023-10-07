<script>
import deleteQuestion from './deleteQuestion';
let deleteQuestionId = "";   
</script>


<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-red-600 mt-4" for="">Delete Question</label>

  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-gray-600 mt-4" for="">Question Id</label>
  <input class="p-1 m-1 rounded-md w-6/12 mx-auto bg-gray-700" type="text" bind:value={deleteQuestionId} >
  <button class="bg-red-900 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
  on:click={()=>deleteQuestion(deleteQuestionId)}>Delete Question</button>
</div>