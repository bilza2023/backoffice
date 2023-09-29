<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,CardOnly} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import deleteQuestion from './deleteQuestion';
import addQuestion from './addQuestion';
import { isLoginStore, isAdminStore } from '$lib/util';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
let deleteQuestionId = "";  
let newChapter = "";  
let newExercise = "";  
let newQuestionNo = "";  
let newPart = "";  
onMount(async () => {
  try{
  debugger;
   chqLogin();
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Questions CRUD</HdgWithIcon>
</div>

<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-red-600 mt-4" for="">Delete Question</label>

  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-gray-600 mt-4" for="">Question Id</label>
  <input class="p-1 m-1 rounded-md w-6/12 mx-auto bg-gray-700" type="text" bind:value={deleteQuestionId} >
  <button class="bg-red-900 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
  on:click={()=>deleteQuestion(deleteQuestionId)}>Delete Question</button>
</div>

<br/>
 <!-- Add Question -->
<div class="flex flex-col gap-2 w-6/12 mx-auto border-2 border-white rounded-md text-center">
  <label class="p-1 m-1 rounded-md w-6/12 mx-auto bg-green-800 mt-4" for="">Add Question</label>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">chapter</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newChapter} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">exercise</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={newExercise} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">questionNo</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="number" bind:value={newQuestionNo} >
</div>

<div class="flex justify-center items-center">
<label class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-600 mt-4" for="">Part</label>
<input class="p-1 m-1 rounded-md w-5/12 mx-auto bg-gray-700" type="text" bind:value={newPart} >
</div>

<button class="bg-green-900 p-1 m-1 border-2 border-gray-500 rounded-md w-4/12 mx-auto mb-4" 
on:click={()=>addQuestion(newChapter,newExercise,newQuestionNo,newPart)}>Add Question</button>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</PageWrapper>
