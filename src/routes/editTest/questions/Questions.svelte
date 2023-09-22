<script>
// @ts-nocheck
import {Icons, fade} from '$lib/util';
import { FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import SectionHeadQuestion from './SectionHeadQuestion.svelte'
import Content from '../Content.svelte';
import {Display} from '$lib/ContentEditor';
// import { questionsStore } from '../store';
// import QuestionSettings from './QuestionSettings.svelte';
import Options from './Options.svelte';
export let quiz;

function getQuestionTitle(question){
 // debugger;
  if (question.content.divs.length > 0){
    return question.content.divs[0].payload;
  }
return 'Add Title';  
}
let showContent = true;
let showOptions = true;
</script>

{#if quiz.questions.getQuestions().length > 0}

{#each quiz.questions.getQuestions()  as question, qIndex}
          
<!-- ****************************************** -->
<SectionHeadQuestion title={getQuestionTitle(question)} 
deleteFn={()=>quiz.questions.deleteQuestion(question.id)}  
moveQuestionUp={()=>quiz.questions.moveQuestionUp(question.id)}  
moveQuestionDown={()=>quiz.questions.moveQuestionDown(question.id)}  
ser={qIndex+1}
>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
  class="border-2 border-gray-500 p-1 m-2 mt-0" >

<!-- content section -->

<div class="flex justify-center">
<button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200"
on:click={()=>showContent = !showContent}
>{Icons.TEMPLATE}
Content</button>
</div>

<div class='bg-gray-900 m-1 p-4 py-6  rounded-md mb-4 ' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  {#if showContent}
  <Display  contentObj={question.content}  {qIndex}/>
  {/if}
</div>


<div class="flex justify-center">
  <button class="bg-gray-900 p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200"
  on:click={() =>showOptions = !showOptions}
  >{Icons.QUESTIONMARK}Options</button>
</div>


  <div class='bg-gray-900 m-1 p-4 rounded-md mb-4' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
    {#if showOptions }
      <Options  {question}/>
    {/if}  
  </div>

</SectionHeadQuestion>
<br/>

{/each}
{/if}

