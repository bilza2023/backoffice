<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let type;
export let code;

</script>

<div class='flex justify-center '>

    {#if type == undefined || type == 'code' || type == ''}
        <Katex>{code}</Katex>
    {/if}

    {#if type == 'txt' || type == 'text'}
        <p>{code}</p>
    {/if}
    {#if type == 'hdg' || type == 'heading'}
        <h1 class='text-yellow-400'>{code}</h1>
    {/if}

    {#if type == 'html'}
        <div>
        {@html code }
        </div>
    {/if}

</div>