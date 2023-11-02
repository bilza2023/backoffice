<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;
export let selectedChapter;
export let getUrl;
let showChapterSpecial=true;
</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showChapterSpecial = !showChapterSpecial}
    >
Chapter Special Questions 
    </button>
    </div>
{#if showChapterSpecial}
<div class='flex  w-full justify-center  flex-wrap  '>
{#each questions as question,index}    
        {#if question.isSpecial == true && 
        question.chapter == selectedChapter &&
        (question.partNo.exercise == "" ||  question.partNo.exercise == undefined) }
            <div class='w-3/12'>
            <Card
            title = {`${question.partNo.name}`}
            icon={Icons.TEST}
            url = {getUrl(question)}
            >
            <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">{question.status}</div>
                <!-- correct if question.status !== 'unlocked' -->
            {#if question.status !== 'unlocked' }
                <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                <a href= {`/eqsPlayer?id=${question._id}`} target="_blank">{Icons.START}</a>
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