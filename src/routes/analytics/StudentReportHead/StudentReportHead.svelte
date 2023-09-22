<script>
//@ts-nocheck
import Td25 from "./Td25.svelte";
import Avatar from "./Avatar.svelte";
import getObtained from "./getObtained.js";
export let result;
let obtained;
export let testTotalMarks;

////////////////////////////////////////////////
async function updateObtained(result) {
        obtained = await getObtained(result);
}
//--adding result to arguments worked. we need result in this
 $: updateObtained(result);

</script>



<div class="flex justify-center text-white ">
<div class="inline-flex w-3/4 p-2 gap-4 bg-gray-600 rounded-lg ">
<!--last 2 divs above  -->

<Avatar />


<div class="flex flex-col justify-center text-center h-full  w-full bg-gray-800 rounded-md ">

<div class="flex items-center">
<Td25 bg={"bg-stone-700"}>Id</Td25>
<Td25 bg={"bg-stone-700"}>Name</Td25>
<Td25 bg={"bg-stone-700"}>T-Marks</Td25>
<Td25 bg={"bg-stone-700"}>Obtained</Td25>
<Td25 bg={"bg-stone-700"}>%age</Td25>
</div>

<div class="flex items-center">
<Td25>{result.studentId}</Td25>
<Td25>{result.studentName}</Td25>
<Td25>{testTotalMarks}</Td25>
<Td25>{obtained}</Td25>
<Td25>{((obtained/testTotalMarks)*100).toFixed(1)}%</Td25>
</div>

</div>
 
 <!--last 2 divs blow  -->
</div>
</div>

