<script>
//@ts-nocheck
import { HdgWithIcon,Card } from '$lib/cmp';
import {Icons } from '$lib/util';

import { isLoginStore, isAdminStore,selectedExStore,teacherNameStore } from '../../lib/util/appStore.js';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  $: teacherName = $teacherNameStore;  
  $: selectedEx = $selectedExStore;

export let questions;
export let total_questions;
let questionStatus = 'empty';

function getUrl(question){
 let url;
 if (question.questionType == "eqs"){
    url = `/eqs?id=${question._id}`;
 }else{
    url = `/grid?id=${question._id}`;
 }
return url; 
}
</script>


<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Syllabus FBISE Class 9th</HdgWithIcon>
</div>

{#if questions}
<div class='  p-2 text-center '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOK}>Exercise &nbsp&nbsp{selectedEx}</HdgWithIcon>
</div>

<div class="bg-stone-700 text-sm text-gray-300 w-5/12 p-2 m-1 rounded-md ">{`Total Questions ${total_questions} Empty Questions ${questions.length}`}</div>


<div class='flex  w-full justify-center  flex-wrap'>
{#each questions as question,index}
    

    <!-- {#if questionStatus == 'empty'} -->
        {#if question.partNo.exercise == selectedEx}
            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}</div>
            </Card>
            </div>
        {/if}
    <!-- {/if} -->

{/each}
    </div>

{/if}
