<script>
//@ts-nocheck
import {Icons,fade} from '$lib/util';
import { FormRow , Tf , BtnWIconSm } from '$lib/cmp';
import Options from './Options.svelte';
export let question;
let show = true;
</script>

<div class='flex justify-center'>
<BtnWIconSm bgColor ="bg-gray-900" icon={Icons.QUESTIONMARK} 
    clk={()=>show = !show}>Question Settings</BtnWIconSm>
</div>

{#if show}

   <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >

    <FormRow title="Multi Select">
    <Tf obj={question} bool_prop="multiSelect"  />
    </FormRow>

    <FormRow title="Explanation">
    <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={question.explanation}></textarea>
    </FormRow>
    
    <FormRow title="Options">
    <Options {question} />
    </FormRow>

    <br/>
</div>
{/if}
