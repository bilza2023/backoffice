<script>
//@ts-nocheck
export let count;
export let results;

</script>

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

        {#each results[count].answers as answer, index}
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
