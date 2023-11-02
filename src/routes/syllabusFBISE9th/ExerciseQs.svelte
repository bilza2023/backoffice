<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
export let getUrl;
export let selectedEx;
let showQs=true;

function getStatusIcon(status){
  if (status == 'unlocked') {return ' 🧊'  }
  if (status == 'fill') {return Icons.PENCIL }
  if (status == 'locked') {return '🔒' }
  if (status == 'final') {return Icons.STUDENTCAP }
}
$: totalExQuestion = questions.filter(question => question.partNo.exercise === selectedEx).length
</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Total Exercise Questions ({`${totalExQuestion}`})
    </button>
    </div>
{#if showQs}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each questions as question,index}    
        {#if question.partNo.exercise == selectedEx }
            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}{getStatusIcon(question.status)}</div>
            
            {#if question.status !== 'unlocked' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/eqsPlayer?id=${question._id}`}>{Icons.START}</a>
                </div>
            {/if}
            
            </Card>
            </div>
        {/if}
    <!-- {/if} -->
{/each}
    </div>
{/if}    
</div>    