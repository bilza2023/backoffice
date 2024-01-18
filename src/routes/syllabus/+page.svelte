
<script>  
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Dd from "./Dd.svelte";
//import ChapterSpecialQs from "./ChapterSpecialQs.svelte";
import ExerciseQs from "./ExerciseQs.svelte";
import Exercises from "./Exercises.svelte";
import Summary from '$lib/appComp/Summary.svelte';
// import getSyllabus from '$lib/appComp/getSyllabus';
let tcode;
/////////////////////////////////
let questions;
let selectedEx ="1.1";
let selectedChapter = 1;
let chapterTotalQuestions = 0;

$:  {
  if (questions){
    chapterTotalQuestions = questions.filter(question => question.chapter == selectedChapter).length;
  }
}
function setEx(ex){
  selectedEx = ex;
}

let isLogin = false;
let isAdmin = false;

function setChapter(newChapter){
selectedChapter = newChapter;
}
/////////////////-----on-mount
function getUrl(question){
 return `/eqs?id=${question._id}`;
} 

onMount(async () => {
try{
    // debugger;
    tcode = new URLSearchParams(location.search).get("tcode");
    let token = localStorage.getItem("token");
    const resp = await fetch( `${BASE_URL}/be/syllabus` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ tcode} )
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
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
</div>
{#if questions}

<Summary {questions} />
<div class="p-4 m-1 border-2 border-white rounded-lg">
<Dd {setChapter} {selectedChapter}/>
  <br/>
<Exercises  {questions} {selectedChapter} {selectedEx} {setEx} />
</div>
<!-- <HdgWithIcon>{`Chapter Total: ${chapterTotalQuestions}`}</HdgWithIcon> -->
<div class='flex justify-start text-xs p-1 m-1 '>
{`Total Chapter Questions: ${chapterTotalQuestions}`}
</div>

<ExerciseQs {questions} {selectedEx} {getUrl} {isAdmin} {tcode}/>

<br/>
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
