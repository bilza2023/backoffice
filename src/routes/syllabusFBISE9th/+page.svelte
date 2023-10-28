
<script>  
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Dd from "./Dd.svelte";
import ChapterSpecialQs from "./ChapterSpecialQs.svelte";
import ExerciseQs from "./ExerciseQs.svelte";
import Exercises from "./Exercises.svelte";
import Summary from '$lib/appComp/Summary.svelte';
let questions;
let total_questions;

let selectedEx ="1.1";
let selectedChapter = 1;

function setEx(ex){
  selectedEx = ex;
}

let isLogin = false;
let isAdmin = false;

function setChapter(newChapter){
selectedChapter = newChapter;
// console.log("setChapter",selectedChapter);
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
                  selectedEx ="1.1";
                  selectedChapter = 1
              total_questions = questions.length;
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

<Summary {questions} />
<div class="p-4 m-1 border-2 border-white rounded-lg">
<Dd {setChapter} {selectedChapter}/>
  <br/>
<Exercises  {questions} {selectedChapter} {selectedEx} {setEx} />
</div>

<ExerciseQs {questions} {selectedEx} {getUrl}/>
<br/>
<ChapterSpecialQs {questions} {selectedChapter} {getUrl}/>
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
