<script>
//@ts-nocheck
import {Agent , Icons, onMount,toast} from '$lib/util';
import {PageWrapper,Centre,HdgWithIcon,SectionHead} from '$lib/cmp';
import Details from './Details.svelte';

let results= null;
let student;

////////////////////////////////////
onMount(async () => {
  try {
  // debugger;
  const  id = new URLSearchParams(location.search).get("quizId");
  // console.log(id);
  const resp = await Agent.readone('student' , {id});
          if (resp.ok){
            const data = await resp.json();
            student = data.item;
            console.log("student",student);

            const resp2 = await Agent.where('result' , {whereItem : 'studentId' , whereValue : student.id }); //id not _id
              if (resp2.ok){
                  const data2 = await resp2.json();    
                  results = data2.items;
                  // console.log('results' ,  results);
              } else {
                // console.log('');g
              }
          
          }
  } catch (error) {
    // console.error(error);
    toast.push("page load error");
 }
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- <Nav /> -->
<PageWrapper>
{#if student && results}
<br/>
  <Centre>
    <HdgWithIcon icon={Icons.TEMPLATE }>{student.name} (Result)</HdgWithIcon>
  </Centre>
<br/>
<br/>
        
{#each results as result}
  <div class='flex justify-center'>
  <div class='w-10/12'>
    <SectionHead title={result.runTitle} >
    <div class='bg-gray-700 p-2 m-2 border-1 border-white'>
      
      <Details  {result}/>
    </div>
    </SectionHead>
  </div>
  </div>
  <br/>
{/each}

{/if}

<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>