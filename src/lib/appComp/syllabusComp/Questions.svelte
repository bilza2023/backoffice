<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,onMount } from '$lib/util';
    import { divide } from 'mathjs';
export let tcode;
export let selectedQuestions;
export let uiMode;
    
     
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
  if (status == 'fill') {return Icons.PENCIL }
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
    <!-- {#if question.exercise == selectedEx && question.status == 'final' } -->
    
            <div class='w-3/12'>

            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {`/player?tcode=${tcode}&id=${question._id}`}
            >
                {#if !uiMode}

                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}
                    &nbsp;&nbsp; {getStatusIcon(question.status)}</div>
    
                {#if question.status !== 'final' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                    <a href= {`/editor?tcode=${tcode}&id=${question._id}`} target="_blank">{Icons.HAMMER_AND_WRENCH}</a>
                </div>
                {/if}
    
                {#if question.status !== 'empty' }
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                    <a href= {`/player?tcode=${tcode}&id=${question._id}`} target="_blank">{Icons.START}</a>
                    </div>
                {/if}
                
                {#if question.status !== 'empty' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/player2?tcode=${tcode}&id=${question._id}`} target="_blank">{Icons.COMPUTER}</a>
                </div>
                {/if}

                {/if}
            </Card>
            </div>
{/each}
</div>
{/if}