<script>
  //@ts-nocheck
  export let contentItem;
  console.log(contentItem)
</script>

{#if contentItem}
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

<!-- {#if typeof contentItem } -->
  {#each contentItem.payload as row, rowIndex}
    <div style="display: flex; justify-content: space-between;">
      {#each row as cell, cellIndex}
        <div
          style="flex: 1; padding: 5px; border: 1px solid black;"

        >{cell}</div>
      {/each}
    </div>
  {/each}
</div>
{/if}
