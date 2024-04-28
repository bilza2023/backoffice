<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,onMount } from '$lib/util';
export let questions;
export let tcode;
export let selectedEx;
let sortedArray=[];


$:{
  selectedEx;  
  if(questions){
  let filteredQuestions = questions.filter(question => question.exercise === selectedEx);
  sortedArray =  filteredQuestions.sort((a, b) =>  a.sortOrder - b.sortOrder );
  }  
//   console.log("sortedArray",sortedArray);
}

    let showQs=true;
    // let sortedArray;
    
function getTitle(question){
    
    if (question.name && question.name !== ''){
        return `${question.name} `;
    }else {
        return `Ex ${question.exercise} Q-${question.questionNo} pt ${question.part}`;
    }
}

function getStatusIcon(status){
  if (status == 'empty') {return ' 🧊'  }
  if (status == 'fill') {return Icons.PENCIL }
  if (status == 'locked') {return '🔒' }
  if (status == 'final') {return Icons.STUDENTCAP }
}

$: totalExQuestion = questions.filter(question => question.exercise === selectedEx).length

</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Total Exercise Questions ({`${totalExQuestion}`})
    </button>
    </div>
{#if sortedArray}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each sortedArray as question,index}    
        {#if question.exercise == selectedEx }
            <div class='w-3/12'>
            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {`/editor?tcode=${tcode}&id=${question._id}`}
            >

            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}{getStatusIcon(question.status)}</div>

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
           
        
            
         
            
            </Card>
            </div>
        {/if}
{/each}
    </div>
{/if}    
</div>    