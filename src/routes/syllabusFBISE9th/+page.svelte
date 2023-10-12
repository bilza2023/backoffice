
<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import MainPanel from './MainPanel.svelte';
import SidePanel from './SidePanel.svelte';
import syllabusContent from "./syllabusContent";

let syllabus;
let selChapData=[];
let questions;
let total_questions;

let selectedEx ="1.1";
let selectedChapter = 1;

$:{
    if (syllabus){
      selectedChapter;
      selectedEx;
      selChapData = []; 
      selChapData = syllabus[selectedChapter]; 
        console.log("selChapData",selChapData);
        console.log("selectedEx",selectedEx);
    }
}

function setSelExNChapter(ex,chapter){
  selectedEx = ex;
  selectedChapter = chapter;
  console.log("selected",selectedEx,selectedChapter);
}
let isLogin = false;
let isAdmin = false;
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
              syllabus = syllabusContent(questions);
              console.log("syllabus", syllabus);
              isLogin = true;
                  selectedEx ="1.1";
                  selectedChapter = 1
              total_questions = questions.length;
              // localStorage.setItem('math_syllabus',JSON.stringify(questions));
            }else {
             const data = await resp.json();
              toast.push(data.message);
              // throw new Exception("failed to load")
            }
  } catch (e) {
       toast.push('failed to load');
  }      
});
 
////////////////////////////////////////////////////////
</script>
<Nav {isAdmin} {isLogin}/>
<PageWrapper>
{#if syllabus}
<div class="flex justify-center border-2 border-white">
  <div class="w-2/12">
      <SidePanel {syllabus} {setSelExNChapter}/>
  </div>
  <div class="w-10/12">
    <MainPanel {questions}  {selectedEx} {selectedChapter}/>
    <br>
    <br>
    <br>
    <br>
  </div>

</div>
{:else}
<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.COMPUTER}>Loading Please Wait...</HdgWithIcon>
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
