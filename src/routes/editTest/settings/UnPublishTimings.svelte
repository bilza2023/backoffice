<script>
//@ts-nocheck
import {SectionHead, DDDivs,FormRow,Comment} from "$lib/cmp";
import { fade } from 'svelte/transition';

export let item;
</script>

<SectionHead title={"Un Publish Timings"} icon={"⌛"}>


<DDDivs items={['Never', 'After']}>
    <div slot="item1">
    <Comment>"Never" will keep the test published unless manually unpublished.</Comment>
    </div>

    <div slot="item2" in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
            <FormRow title="Un Publish Hour" >
            <input class="bg-gray-700 m-2 p-2 rounded-2xl text-center" type="number" bind:value={item.publishObj.unpublishHour} min=0 max=23 >
            hours
            </FormRow>

            <FormRow title="Un Publish Minute"  >
            <input class="bg-gray-700 m-2 p-2 rounded-2xl text-center" type="number" bind:value={item.publishObj.unpublishMin} min=0 max=60
            >minutes
            </FormRow>
    </div>



</DDDivs>

<!-- </div> -->
</SectionHead>