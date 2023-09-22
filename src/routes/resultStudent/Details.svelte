<script>
//@ts-nocheck
import { onMount, Agent , toast } from '$lib/util';
export let result;
import check from '$lib/appComp/check/check.js';
import StudentReportHead from './StudentReportHead.svelte';
let run;

onMount(async () => {
try {
 
  const resp = await Agent.readone('run' , {id : result.runId });
          if (resp.ok){
            const data = await resp.json();
            run = data.item;
            // const result = 
            await check([result],run);
            // console.log('run' , run);
          }
  } catch (error) {
    toast.push("page load error");
 }
});
</script>

{#if run}

<StudentReportHead {result}  {run} />

<div class="w-3/4 mx-auto">
    <table class="w-full   bg-gray-900 border-separate 
    text-center ">
        <thead>
            <tr>
                <th class="py-2 px-3 border border-white">Ques</th>
                <th class="py-2 px-3 border border-white">T-Marks</th>
                <th class="py-2 px-3 border border-white">Obtained</th>
                <th class="py-2 px-3 border border-white">%age</th>
                <th class="py-2 px-3 border border-white">Status</th>
            </tr>
        </thead>

        {#each result.answers as answer, index}
            <tr>
                <td class="py-1 px-3 border border-white">{index + 1}</td>
                <td class="py-1 px-3 border border-white">10</td>
                <td class="py-1 px-3 border border-white">{answer.marksObtained}</td>
                
                <td class="py-1 px-3 border border-white">{answer.marksObtained/10*100}%</td>

                <td class="py-1 px-3 border border-white">
                    {#if (answer.marksObtained/10*100) >= 50 }
                      <span class= "p-1 bg-green-800">Passed</span>
                        {:else}
                      <span class="p-1 bg-red-800">Fail</span>
                    {/if}

                </td>
            </tr>
        {/each}
    </table>
</div>

{/if}