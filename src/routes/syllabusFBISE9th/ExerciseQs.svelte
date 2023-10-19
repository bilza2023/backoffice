<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
export let getUrl;
export let selectedEx;
let showQs=true;
</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Exercise Questions
    </button>
    </div>
{#if showQs}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each questions as question,index}    
        {#if question.isSpecial == false && 
        question.partNo.exercise == selectedEx }
            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}</div>
            </Card>
            </div>
        {/if}
    <!-- {/if} -->
{/each}
    </div>
{/if}    
</div>    