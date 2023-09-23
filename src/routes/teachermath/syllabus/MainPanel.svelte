<script>
//@ts-nocheck
import { HdgWithIcon,Card } from '$lib/cmp';
import {Icons } from '$lib/util';

import { isLoginStore, isAdminStore,selectedExStore } from '../../../lib/util/appStore.js';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  $: selectedEx = $selectedExStore;

export let questions;
let questionStatus = 'empty';

function setQuestionStatus(status){
    questionStatus = status;
}
</script>


<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Syllabus FBISE Class 9th</HdgWithIcon>
</div>

{#if questions}
<div class='  p-2 text-center '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOK}>Exercise &nbsp&nbsp{selectedEx}&nbspTotal {questions.length} &nbsp</HdgWithIcon>
</div>

<!------------------------>
<div class="flex justify-center m-1 p-1 bg-gray-700">
{#if isAdmin == true}
<button class= {`${questionStatus == 'empty' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`} 
on:click={()=>setQuestionStatus('empty')}>Get Empty</button>
{/if}
<button class={`${questionStatus == 'fill' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`}  on:click={()=>setQuestionStatus('fill')}>Get Fill</button>
<button class={`${questionStatus == 'final' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`}  on:click={()=>setQuestionStatus('final')}>Get Final</button>
</div>
<!------------------------>

    <div class='flex  w-full justify-center  flex-wrap'>
{#each questions as question,index}
    
    {#if question.exercise == selectedEx  && question.status ==questionStatus}

        <div class='w-3/12'>
        <Card
        title = {`Ex ${question.exercise} Q-${question.questionNo} pt ${question.part}`}
        icon={Icons.TEST}
        url = {`/teachermath/editor?id=${question._id}`}>
        </Card>
        </div>

    {/if}
{/each}
    </div>

{/if}
