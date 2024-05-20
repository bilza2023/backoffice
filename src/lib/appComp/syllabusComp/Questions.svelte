<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,toast,ajaxPost,API_URL } from '$lib/util';
export let tcode;
export let selectedQuestions;
export let uiMode;
    
async function save(e,question){
    question.sortOrder = e.target.value;

const resp = await ajaxPost( `${API_URL}/tcode/update` , { 	question } );
    if(resp.ok){
    toast.push('saved');}
    else {toast.push('failed to saved');
    }

}    
      
function getTitle(question){
    
    if (question.name && question.name !== ''){
        return `${question.name} `;
    }else {
        let r = `Ex ${question.exercise} Q-${question.questionNo}`;
        if(question.part || question.part != 0){
            r+= ` pt ${question.part}`
        }
        return r;
    }
}

function getStatusIcon(status){
  if (status == 'empty') {return '🧊'  }
  if (status == 'filled' ) {return Icons.PENCIL }
  if (status == 'fill' ) {return Icons.PENCIL }
  if (status == 'locked') {return '🔒' }
  if (status == 'final') {return Icons.STUDENTCAP }
}

</script>
{#if selectedQuestions.length <= 0 }
<div class="flex justify-center w-full">
    <h1 class="bg-stone-600 p-2 m-2 rounded-lg">No Question found!</h1>
</div>
{:else}
<div class='flex  bg-gray-700 p-2 m-2 rounded-md w-full justify-center  flex-wrap  '>

        {#each selectedQuestions as question,index}    
    
            <div class='w-3/12'>

            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {"#"}
            >
                {#if !uiMode}
                <input class="text-xs items-center  bg-gray-700 text-white w-8 h-8" type="number" bind:value={question.sortOrder} on:blur={(e)=>save(e,question)} />

                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-1">{question.status}
                    &nbsp;&nbsp; {getStatusIcon(question.status)}</div>
        
                    
                {#if question.status !== 'final' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                    <a href= {`/editor?tcode=${tcode}&filename=${question.filename}`} target="_blank">{Icons.HAMMER_AND_WRENCH}</a>
                </div>
                {/if}
    
                {#if question.status !== 'empty' }
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                    <a href= {`/player?tcode=${tcode}&filename=${question.filename}`} target="_blank">{Icons.START}</a>
                    </div>
                {/if}
                
                <!-- const resp = await ajaxPost( `${API_URL}/command` , { command : "getByFilename",tcode,filename}); -->

                {#if question.status !== 'empty' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/player2?tcode=${tcode}&filename=${question.filename}`} target="_blank">{Icons.COMPUTER}</a>
                </div>
                {/if}

                {/if}

            </Card>
            </div>
{/each}
</div>
{/if}