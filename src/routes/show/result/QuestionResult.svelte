<script>
//@ts-nocheck
import {BtnWIconXs } from '$lib/cmp';
import {Icons,onMount} from '$lib/util';
import getOptions from "../fn/getOptions";
export let question;
import gradeMCQ from "../fn/gradeMCQ";

onMount(()=>{
console.log("item",question);
});

</script>



<BtnWIconXs >Correct Options</BtnWIconXs >
{#each getOptions(question.correctOptions , question.options) as correctOption}
<div class='flex flex-col gap-1 mx-4'>
<div class='w-full p-1 m-1 bg-green-800 text-white text-lg rounded-md '>{correctOption.content}</div>
</div>
{/each}

<BtnWIconXs >Your Selected Options</BtnWIconXs >
{#each  getOptions(question.selectedOptions , question.options) as selectedOption}
<div class='flex flex-col gap-1 mx-4'>
<div class='w-full p-1 m-1 bg-blue-800 text-white text-lg rounded-md '>{selectedOption.content}</div>
</div>
{/each}


<BtnWIconXs >Result</BtnWIconXs >
    {#await gradeMCQ(question) then result}
    <div class='w-full p-1 m-1 bg-blue-800 text-white text-lg rounded-md'>{result}%</div>
    {:catch error}
        <div>Error: {error.message}</div>
    {/await}

