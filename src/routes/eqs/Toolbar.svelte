<script>
//@ts-nocheck
import {BASE_URL} from '$lib/util';
export let addEq;
export let question;
export let closeAllSP;
export let setSPTrue;

</script>


<div class="flex justify-left bg-gray-900 p-2">
<a class="bg-blue-800 p-1   rounded-sm" href="/">Home</a>
&nbsp;
<button id="saveBtn" class="bg-green-800 p-1   rounded-sm"
on:click={addEq}
>Add Eq</button>
&nbsp;
<button  class="bg-blue-800 p-1   rounded-sm"
on:click={setSPTrue}>Show Sp</button>
&nbsp;
<button  class="bg-orange-800 p-1   rounded-sm"
on:click={closeAllSP}
>Hide SP</button>
&nbsp;
<a href={`eqsPlayer?id=${question._id}`} target="_blank" 
class="bg-blue-900 p-1 rounded-xl text-white ml-4 my-auto">{question.filename}</a>
</div>