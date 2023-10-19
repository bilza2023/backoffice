<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
export let selectedEx;
export let getUrl;
</script>


<div class='flex  w-full justify-center  flex-wrap  px-2 '>
{#each questions as question,index}    
        {#if question.isSpecial == true && question.partNo.exercise == selectedEx }
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