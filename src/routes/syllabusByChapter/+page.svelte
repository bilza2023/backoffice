
<script>  
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Dd from "./Dd.svelte";
import DdStatus from "./DdStatus.svelte";
import Summary from '$lib/appComp/Summary.svelte';
import getSyllabus from '$lib/appComp/getSyllabus';

let questions;
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
      question.chapter === selectedChapter && question.status === 'empty');
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
function getStatusIcon(status){
  if (status == 'empty') {return ' 🧊'  }
  if (status == 'fill') {return Icons.PENCIL }
  if (status == 'locked') {return '🔒' }
  if (status == 'final') {return Icons.STUDENTCAP }
}

function setStatus(n){
selectedStatus = n;
}
function setChapter(newChapter){
selectedChapter = newChapter;
}

onMount(async () => {
try{
    let token = localStorage.getItem("token");
    const resp = await fetch( `${BASE_URL}/be/syllabus` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ tcode:'fbise9math'} )
    });
     if (resp){
      const data = await resp.json();
      questions = data.questions;
      // console.log("questions",questions);
      isLogin = checkToken();
      isAdmin = checkAdminToken();
    }else {
     const data = await resp.json();
      toast.push(data.message);
    }

  } catch (e) {
       toast.push('System error');
  }      
});


////////////////////////////////////////////////////////
</script>
<Nav {isAdmin} {isLogin}/>
<PageWrapper>

<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-500' icon={Icons.MANAGER }>
 FBISE 9 Math </HdgWithIcon>
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

        <div class='w-3/12'>
            <Card
            title = {`Ch:${question.chapter} Ex:${question.exercise} Q:${question.questionNo}`}
            icon={Icons.TEST}
            url = {`/editor?tcode=fbise9math&id=${question._id}`}
            > 
            
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}{getStatusIcon(question.status)}</div>
            
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/editor?tcode=fbise9math&id=${question._id}`} target="_blank">{Icons.HAMMER_AND_WRENCH}</a>
            </div>


            {#if question.status !== 'empty' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/player?tcode=fbise9math&id=${question._id}`} target="_blank">{Icons.START}</a>
                </div>
            {/if}

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
