<script>
//@ts-nocheck
export let addEq;
export let question;

</script>


<div class="flex justify-left bg-gray-900 p-2">
<a class="bg-blue-800 p-1   rounded-sm" href="/">Home</a>
&nbsp;
<button id="saveBtn" class="bg-green-800 p-1   rounded-sm"
on:click={addEq}
>Add Eq</button>
<span class="bg-blue-900 p-1 rounded-xl text-white ml-4 my-auto">{question.filename}</span>
</div>