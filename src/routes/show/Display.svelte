<script> 
//@ts-nocheck
export let contentItem;

import {DivDisplay,TableDisplay  ,ImageDisplay,ListDisplay , PreDisplay , YoutubeDisplay } from '$lib/ContentEditor';

</script>

        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'div'}
            <DivDisplay {contentItem} />
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'table'}
        <TableDisplay {contentItem} />
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'image'}
        <ImageDisplay {contentItem} />
        {/if}
       
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'pre'}
        <PreDisplay {contentItem} />
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'list'}
        <ListDisplay {contentItem} />
        {/if}
       
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'youtube'}
        <YoutubeDisplay {contentItem} />
        {/if}
        
