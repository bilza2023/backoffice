<script>
//@ts-nocheck
import { onMount } from 'svelte';
import NavBtns from "./NavBtns.svelte"; 
import Details from "./Details.svelte";
import getTestTotalMarks from "../pure/getTestTotalMarks";
import StudentReportHead from "../StudentReportHead/StudentReportHead.svelte";
export let results;
export let quiz;
let count = 0;
let testTotalMarks;


function inc(){
    count += 1;
    if (count >= results.length - 1) {
        count = results.length - 1;
    }
}

function dec(){
    count -= 1;
    if (count < 0 ){count = 0;}
}

onMount(async () => {
  try {
    // debugger;
    testTotalMarks = await getTestTotalMarks(quiz);
  }catch(e) {
  
  }
});  
/////////////////////////////////////////////
</script>
 
<NavBtns {count} length={results.length} {inc} {dec} />
<br/>
<StudentReportHead result={results[count]}  {testTotalMarks}/>
<br/>
<Details {count} {results}  />
