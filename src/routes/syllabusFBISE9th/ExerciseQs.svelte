<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
// export let getUrl;
// export let isAdmin=false;
export let selectedEx;

    let showQs=true;
    let sortedArray;

$:{
 if(questions){
    const sortOne = questions.filter(question =>question.partNo.exercise == selectedEx);
    sortedArray = sortOne.sort((a, b) => {
        const questionNoA = a.partNo.questionNo;
        const questionNoB = b.partNo.questionNo;
    return questionNoA - questionNoB;
    });
    console.log(sortedArray);
 }
}
function getStatusIcon(status){
  if (status == 'empty') {return ' 🧊'  }
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
{#each sortedArray as question,index}    
        <!-- {#if question.partNo.exercise == selectedEx } -->
            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.TEST}
            url = {`/editor?tcode=fbise9math&id=${question._id}`}
            >

            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}{getStatusIcon(question.status)}</div>

            {#if question.status !== 'final' }
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/editor?tcode=fbise9math&id=${question._id}`} target="_blank">{Icons.HAMMER_AND_WRENCH}</a>
            </div>
            {/if}

            {#if question.status !== 'empty' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/player?tcode=fbise9math&id=${question._id}`} target="_blank">{Icons.START}</a>
                </div>
            {/if}
            
         
            
            </Card>
            </div>
        <!-- {/if} -->
    <!-- {/if} -->
{/each}
    </div>
{/if}    
</div>    