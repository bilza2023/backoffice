<script>
//@ts-nocheck
import { onMount } from 'svelte';
import getTestTotalMarks from "../pure/getTestTotalMarks";
import StudentReportHead from "../StudentReportHead/StudentReportHead.svelte";
export let results;
export let quiz;
let testTotalMarks;


onMount(async () => {
  try {
    testTotalMarks = await getTestTotalMarks(quiz);
  }catch(e) {
  
  }
});  
/////////////////////////////////////////////
</script>
 <div class="flex justify-center">
<h1 class="inline-flex bg-blue-800 text-white rounded-md p-2 m-2 px-14">Class Report</h1>
 </div>


<br/>
{#each results as result }
<StudentReportHead {result}  {testTotalMarks}/>
<br/>
{/each}

