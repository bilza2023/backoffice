<script>
//@ts-nocheck
import {SectionHead, DDDivs,FormRow,Comment} from "$lib/cmp";
import { fade } from 'svelte/transition';

export let item;
let members;

</script>

<SectionHead title={"Publish Timings"} icon={"⏱️"}>

<!-- <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}> -->


<DDDivs items={['Publish Now', 'Publish At']}>
    <div slot="item1">
    <Comment>Publish Now will make the test available immediately</Comment>
    </div>

    <div slot="item2">
        <div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
            <FormRow title="Publish Date"  >
            <input type="date" class="bg-gray-800 w-full text-center m-2 p-2 rounded-2xl"
            bind:value={item.publishObj.publishDate}
            >
            </FormRow>

            <FormRow title="Publish Hour" >
            <input class="bg-gray-700 m-2 p-2 rounded-2xl text-center" type="number" bind:value={item.publishObj.hour} min=0 max=23  
            >hours
            </FormRow>

            <FormRow title="Publish Minute"  >
            <input class="bg-gray-700 m-2 p-2 rounded-2xl text-center" type="number" bind:value={item.publishObj.min} min=0 max=60
            >minutes
            </FormRow>
    </div>



</DDDivs>

<!-- </div> -->
</SectionHead>