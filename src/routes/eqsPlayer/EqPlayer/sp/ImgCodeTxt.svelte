<script>
//@ts-nocheck
import Katex from 'svelte-katex'
import Table from './Table.svelte';
import TableCode from './TableCode.svelte';
import {HdgWithIcon} from "$lib/cmp"
export let eq;

</script>

<div class='flex justify-center '>

    {#if eq.type == undefined || eq.type == 'txt' || eq.type == 'text'}
        <p class="bg-stone-700 p-2 m-1 rounded-md">{eq.code}</p>
    {/if}

    {#if eq.type == 'code'}
        <div class="bg-stone-900 p-2 m-1 rounded-md">    
        <Katex>{eq.code}</Katex>
        </div>
    {/if}

    {#if eq.type == 'img' || eq.type == 'image'}
        <img src= "/mathImages/{eq.code}.png" alt="Not found">
    {/if}
    
    {#if eq.type == 'table' || eq.type == 'tbl'}
        <Table code={eq.code}/>
    {/if}
    
    {#if eq.type == 'tableCode' }
        <TableCode code={eq.code}/>
    {/if}
    
    {#if eq.type == 'heading' || eq.type == 'hdg' }
        <div class="flex justify-center items-center w-full ">
        <HdgWithIcon size=1.5 bgColor=bg-stone-700>{eq.code}</HdgWithIcon>
        </div>
    {/if}
   

</div>