
<script>  
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Dd from "./Dd.svelte";
import DdStatus from "./DdStatus.svelte";
import Summary from '$lib/appComp/Summary.svelte';
import {questions} from './questions.js';

// let questions;
let totalChapterQuestions;
let totalChapterUnlocked;
let totalChapterFill;
let totalChapterLocked;
let totalChapterFinal;

let selectedChapter = 1;
let selectedStatus = 'fill';
let showAllStatus = true;

function toggleShowAllStatus(){
showAllStatus = !showAllStatus;
return showAllStatus;
}
let isLogin = false;
let isAdmin = false;
// let totalCount = false;
let printableQuestions;

$:{
  selectedChapter;
  if(questions){
  const tcq  = questions.filter(question => 
      question.chapter ===     selectedChapter);
  totalChapterQuestions = tcq.length;
  /////////////////////////////////////
  const tcu  = questions.filter(question => 
      question.chapter === selectedChapter && question.status === 'unlocked');
  totalChapterUnlocked = tcu.length;
  /////////////////////////////////////
  const dsssaw  = questions.filter(question => 
      question.chapter === selectedChapter && question.status === 'fill');
  totalChapterFill = dsssaw.length;
  /////////////////////////////////////
  const ssdsddsd  = questions.filter(question => 
      question.chapter === selectedChapter && question.status === 'locked');
  totalChapterLocked = ssdsddsd.length;
  /////////////////////////////////////
  const kipojhg  = questions.filter(question => 
  question.chapter === selectedChapter && question.status === 'final');
  totalChapterFinal = kipojhg.length;

  }
}

$: {
  // debugger;
  selectedChapter;
  showAllStatus;
  if(questions){
    if (showAllStatus){
    printableQuestions = questions.filter(question => question.chapter === selectedChapter);
    }else {
    printableQuestions = questions.filter(question => question.chapter === selectedChapter && question.status === selectedStatus);
    }
  }
}


function setStatus(n){
selectedStatus = n;
}
function setChapter(newChapter){
selectedChapter = newChapter;
}
onMount(()=>{

isLogin = checkToken();
isAdmin = checkAdminToken();

});
function getUrl(question){
 let url;
 if (question.questionType == "eqs"){
    url = `/eqs?id=${question._id}`;
 }else{
    url = `/grid?id=${question._id}`;
 }
return url; 
} 
////////////////////////////////////////////////////////
</script>
<Nav {isAdmin} {isLogin}/>
<PageWrapper>

<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-500' icon={Icons.MANAGER }>Syllabus FBISE-9th ADMIN</HdgWithIcon>
</div>
{#if questions}
<Summary {questions}/>
<div class="p-4 m-1 border-2 border-white rounded-lg">
<Dd {setChapter} {selectedChapter}/>
  <br/>
<DdStatus {setStatus} {selectedStatus}  {toggleShowAllStatus} {showAllStatus} {totalChapterQuestions} {totalChapterUnlocked}
{totalChapterFill}
{totalChapterLocked}
{totalChapterFinal}
/>  
  <br/>
<div class="flex flex-wrap justify-center w-full">
    {#each printableQuestions as question}
        <!-- {#if question.chapter == selectedChapter} -->
        <!-- {#if question.status == selectedStatus || selectedStatus == 'all' } -->
        <div class='w-3/12'>
            <Card
            title = {`Ch:${question.chapter} Ex:${question.partNo.exercise} Q:${question.partNo.questionNo}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}</div>
            </Card>
        </div>
        <!-- {/if} -->
        <!-- {/if} -->
    {/each}

</div>

</div>
{/if}
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
