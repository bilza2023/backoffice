<script>
//@ts-nocheck
import { onMount, Agent , toast } from '$lib/util';
import Td25 from "./Td25.svelte"; 
// import Avatar from "./Avatar.svelte";
import getObtained from "./getObtained.js";
import getTestTotalMarks from './getTestTotalMarks';
export let result;
export let run;
export let testTotalMarks;

</script>



<div class="flex justify-center text-white ">
<div class="inline-flex w-3/4 p-2 gap-4 bg-gray-600 rounded-lg ">
<!--last 2 divs above  -->


<div class="flex flex-col justify-center text-center h-full  w-full bg-gray-800 rounded-md ">

<div class="flex  justify-center items-center">
<!-- <Td25 bg={"bg-stone-700"}>Id</Td25> -->
<!-- <Td25 bg={"bg-stone-700"}>Name</Td25> -->
<Td25 bg={"bg-stone-700"}>T-Marks</Td25>
<Td25 bg={"bg-stone-700"}>Obtained</Td25>
<Td25 bg={"bg-stone-700"}>%age</Td25>
</div>

<div class="flex  justify-center items-center">
<!-- <Td25>{result.studentId}</Td25> -->
<!-- <Td25>{result.studentName}</Td25> -->
<Td25>{getTestTotalMarks(run)}</Td25>
<Td25>{getObtained(result)}</Td25>
<Td25>{((getObtained(result)/getTestTotalMarks(run))*100).toFixed(1)}%</Td25>
</div>

</div>
 
 <!--last 2 divs blow  -->
</div>
</div>

