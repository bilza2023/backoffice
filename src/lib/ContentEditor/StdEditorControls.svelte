<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
export let contentItem;

</script>
<!-- content is not for table -->
  {#if contentItem.type !== 'table'}
    <FormRow title="Content">
    <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" 
    bind:value={contentItem.payload}
      
    />
    </FormRow>
  {/if}  
     
    <FormRow title="Background Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.bgColor} />
    </FormRow>

    <FormRow title="Font Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.fontColor} />
    </FormRow>


    <FormRow title="Border Color">
    <input type="color" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderColor} />
    </FormRow>

    <FormRow title= {`Border Width: ${contentItem.borderWidth}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderWidth} min=0 max=100/>
    </FormRow>

    <FormRow title= {`Font Size: ${contentItem.fontSize}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.fontSize} min=0 max=200/>
    </FormRow>

    <FormRow title= 'Text Alignment'>
    <select type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.textAlign} >
    <option value="justify">justify</option>
    <option value="left" selected>Left</option>
    <option value="right">Right</option>
    <option value="center">Center</option>
    </select>
    </FormRow>

  <!-- marginX & Y -->

    <FormRow title= {`Margin X: ${contentItem.marginX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.marginX} min=0 max= 500/>
    </FormRow>

    <FormRow title= {`Margin Y: ${contentItem.marginY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.marginY} min=0 max= 50/>
    </FormRow>

  <!-- paddingX & Y  -->

    <FormRow title= {`Padding X: ${contentItem.paddingX}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.paddingX} min=0 max= 300/>
    </FormRow>

    <FormRow title= {`Padding Y: ${contentItem.paddingY}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.paddingY} min=0 max= 300 step=0.1 />
    </FormRow>

    <FormRow title= {`Opacity: ${contentItem.opacity}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.opacity} min=0 max= 1 step=0.1/>
    </FormRow>

    <FormRow title= {`Border Radius: ${contentItem.borderRadius}`}>
    <input type="range" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={contentItem.borderRadius} min=0 max=100 step=1/>
    </FormRow>

