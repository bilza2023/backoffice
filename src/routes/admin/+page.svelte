
<script>  
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Dd from "./Dd.svelte";
import DdStatus from "./DdStatus.svelte";
import Summary from '$lib/appComp/Summary.svelte';

let questions;
let total_questions;

let selectedChapter = 1;
let selectedStatus = 'fill';

let isLogin = false;
let isAdmin = false;

function setStatus(n){
selectedStatus = n;
}
function setChapter(newChapter){
selectedChapter = newChapter;
}
onMount(async () => {
  try{
    //=============================  
            const token = localStorage.getItem('token');
            const resp = await fetch( `${BASE_URL}/be/fbise_math9th_syllabus`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            }
            });
            if (resp.ok){
            // debugger;
              const data = await resp.json();
              questions = data.questions;
              isLogin = true;
                  selectedChapter = 1
              total_questions = questions.length;
            //   console.log("questions",questions);
            }else {
             const data = await resp.json();
              toast.push(data.message);
            }
  } catch (e) {
       toast.push('failed to load');
  }      
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
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Syllabus FBISE Class 9th</HdgWithIcon>
</div>
{#if questions}
<Summary {questions}/>
<div class="p-4 m-1 border-2 border-white rounded-lg">
<Dd {setChapter} {selectedChapter}/>
  <br/>
<DdStatus {setStatus} {selectedStatus} />  
  <br/>
<div class="flex flex-wrap justify-center w-full">
    {#each questions as question}
        {#if question.chapter == selectedChapter}
        {#if question.status == selectedStatus}
        <div class='w-3/12'>
            <Card
            title = {`Ch:${question.chapter} Ex:${question.partNo.exercise} Q:${question.partNo.questionNo}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}</div>
            </Card>
        </div>
        {/if}
        {/if}
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
