<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import {PageWrapper} from '$lib/cmp';
import Katex from 'svelte-katex'
import Table from './Table.svelte';
import TableCode from './TableCode.svelte';

export let runningTime=0;
export let data;
</script>

<PageWrapper>

<div class='justify-center line-clamp-4 text-yellow-300'>
<div class='w-full  rounded-md m-1 p-1  text-center'>
{#each data as item}
{#if (item.startTime <  runningTime && item.endTime > runningTime)}    

 <div class='flex justify-center '>

    {#if item.type == undefined || item.type == 'txt' || item.type == 'text'}
        <p class="bg-stone-700 p-2 m-1 rounded-md">{item.code}</p>
    {/if}

    {#if item.type == 'code'}
        <div class="bg-stone-900 p-2 m-1 rounded-md">    
        <Katex>{item.code}</Katex>
        </div>
    {/if}

    {#if item.type == 'img' || item.type == 'image'}
        <img src= "/mathImages/{item.code}.png" alt="Not found">
    {/if}
    
    {#if item.type == 'table' || item.type == 'tbl'}
        <!-- <img src={item.code} alt="Not found"> -->
        <Table code={item.code}/>
    {/if}
    
    {#if item.type == 'tableCode' }
        <!-- <img src={item.code} alt="Not found"> -->
        <TableCode code={item.code}/>
    {/if}
   
    {#if item.type == 'html'}
        <div>
        {@html item.code }
        </div>
    {/if}

</div>

{/if}
{/each}
</div>
</div>

</PageWrapper>
