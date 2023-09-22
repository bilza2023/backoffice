<script>
//@ts-nocheck
export let contentItem
import { onMount } from "$lib/util";
onMount(async () => {
    // debugger;
    // console.log( "frm contentItem" , contentItem)
    // const content = $questionsStore[questionIndex].content;
    // contentObj = new ContentObj(content);
});
</script>
{#if contentItem}
<!-- {#each items as contentItem} -->
<div
  style:padding="{contentItem.paddingY}px {contentItem.paddingX}px"
  style:margin="{contentItem.marginY}px {contentItem.marginX}px"
  style:opacity="{contentItem.opacity}"
  style:border="{contentItem.borderWidth}px {contentItem.borderStyle} {contentItem.borderColor}"
  style:border-radius="{contentItem.borderRadius}px"
  style:background-color="{contentItem.bgColor}"
  style:color="{contentItem.fontColor}"
  style:font-style="{contentItem.fontStyle}"
  style:font-size="{contentItem.fontSize}px"
  style:font-weight="{contentItem.fontWeight}"
  style:text-align="{contentItem.textAlign}"
>
{contentItem.payload}
</div>

{/if}

