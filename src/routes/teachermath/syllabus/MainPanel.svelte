<script>
//@ts-nocheck
import { HdgWithIcon,Card } from '$lib/cmp';
import {Icons } from '$lib/util';
import AdminPanelSyllabus from './AdminPanelSyllabus.svelte';
import TeacherPanelSyllabus from './TeacherPanelSyllabus.svelte';

import { isLoginStore, isAdminStore } from '../../../lib/util/appStore.js';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;

export let questions;
export let selectedEx;
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
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOK}>Exercise &nbsp&nbsp&nbsp{selectedEx}</HdgWithIcon>
</div>

<!-- {#if isAdmin == true}
<AdminPanelSyllabus {questions} {setQuestionStatus}/>
{:else}
<TeacherPanelSyllabus {questions} {setQuestionStatus} />
{/if}
<br> -->

    <div class='flex  w-full justify-center  flex-wrap'>
{#each questions as question,index}
    
    {#if question.exercise == selectedEx }

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
