
<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { onMount,toast,Icons,goto } from '$lib/util';
import { BASE_URL } from '../config.js';
import Nav from '../Nav.svelte';
import { isLoginStore, isAdminStore } from '../store.js';
import AdminPanelSyllabus from './AdminPanelSyllabus.svelte';
import TeacherPanelSyllabus from './TeacherPanelSyllabus.svelte';

  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;

let questions;
onMount(async () => {
      try{
        if (!isLogin){
      goto('/teachermath/login');
      return;
      }
       //http://localhost/math?id=6508bff7c970727df5e0ac85
    //   let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/math_syllabus/empty`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });

    if (resp.ok){
      const data = await resp.json();
      questions = data.questions;
    //   console.log( 'list'  ,questions);
    }else {
        toast.push('failed to load');
    }
  } catch (e) {
       toast.push('failed to load');
  }      
});

async function getRecords(status){
  // debugger;
      const resp = await fetch( `${BASE_URL}/math_syllabus/${status}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });

    if (resp.ok){
      const data = await resp.json();
      questions = data.questions;
    //   console.log( 'list'  ,questions);
    }else {
        toast.push('failed to load');
    }
}
////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Syllabus FBISE Class 9th</HdgWithIcon>
</div>
<br>

{#if questions}
<div class='  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.QUESTIONMARK}>Total Questions &nbsp&nbsp&nbsp{questions.length}</HdgWithIcon>
</div>
<br>

{#if isAdmin == true}
<AdminPanelSyllabus {questions} {getRecords}/>
{:else}
<TeacherPanelSyllabus {questions} {getRecords} />
{/if}
<br>

{#each questions as question,index}
    <div class='flex flec-col w-full justify-center'>

        <div class='bg-gray-700 p-1 m-1 px-12 rounded-md'>
            <span>{`#-${index+1} -`}</span>
            <a href={`/teachermath/editor?id=${question._id}`}>{question.filename}</a>
            <!-- <span class="bg-gray-900">{}</span> -->
        </div>
    </div>    
{/each}
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
