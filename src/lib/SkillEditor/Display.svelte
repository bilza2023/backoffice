<script>
//@ts-nocheck
export let content;
import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';

import { onMount } from "$lib/util";
onMount(async () => {
    // debugger;
    // console.log( "frm display" , content)
    // const content = $questionsStore[questionIndex].content;
    // contentObj = new ContentObj(content);
});
</script>

{#each content as contentItem }

        {#if contentItem.type === 'div'}
        <DivDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'list'}
        <ListDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'table'}
        <TableDisplay  {contentItem} />
        {/if}

        {#if contentItem.type === 'pre'}
        <PreDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'youtube'}
        <YoutubeDisplay {contentItem} />
        {/if}

        {#if contentItem.type === 'image'}
        <ImageDisplay {contentItem} />
        {/if}

{/each}
