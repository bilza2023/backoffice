Here is my svelte component which takes an array of objects and create a dialogue box from it using / placing different svelte components.

<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import TrNo from "./TrNo.svelte";
    import TrText from "./TrText.svelte";
    import TrPropColor from "./TrPropColor.svelte";
    import TrPropBoolean from "./TrPropBoolean.svelte";
    import TrPropNumber from "./TrPropNumber.svelte";

    export let selectedItem;

    onMount(() => {
        // Any initialization logic can go here
    });
</script>

{#if selectedItem}
    <div class="p-4 bg-gray-800 rounded-lg shadow-md">
        <h1 class="text-xl font-bold mb-4 text-white">Selected Item</h1>
        <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse border border-gray-600 bg-gray-700 rounded-lg">
                <tbody>
                    {#each selectedItem.dialogueBox as dialogueItem}
                        <tr class="border-b border-gray-600">
                            <td class="p-1 text-white text-sm">
                                {#if dialogueItem.componentName === 'TrPropNumber'}
                                    <TrPropNumber 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrPropBoolean'}
                                    <TrPropBoolean 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrText'}
                                    <TrText 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrPropColor'}
                                    <TrPropColor 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrNo'}
                                    <TrNo 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {/if}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
{:else}
    <h6 class="text-sm text-gray-400">No item selected</h6>
{/if}


Here is the example of array which is fed/given to this component in selectedItem.dialogueBox
        this. dialogueBox = [
    {
      componentName: 'TrPropNumber',
      title: 'x',
      props: {}
    },
    {
      componentName: 'TrPropNumber',
      title: 'y',
      props: {}
    },
    {
      componentName: 'TrPropNumber',
      title: 'width',
      props: {
        min: '1',
        max: '500'
      }
    },
    {
      componentName: 'TrPropNumber',
      title: 'height',
      props: {
        min: '1',
        max: '500'
      }
    },
    {
      componentName: 'TrPropNumber',
      title: 'lineWidth',
      props: {}
    },
    {
      componentName: 'TrPropBoolean',
      title: 'filled',
      props: {}
    },


  ];


in the past instead of using this array of props i would use individual svelte components like 
<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrTFWithSet from "./TrTFWithSet.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   
import TrNo from "./TrNo.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrPropNumber title="x"  bind:extra={item} min=0 max=1000 />  
        <TrPropNumber title="y"  bind:extra={item} min=0 max=500 />  
        <TrPropNumber title="radius"  bind:extra={item} min=0 max=500 />  
        <TrPropNumber title="startAngle"  bind:extra={item} min=0 max=25 />  
        <TrPropNumber title="endAngle"  bind:extra={item} min=0 max=25 />  
        <TrPropNumber title="lineWidth"  bind:extra={item} min=0 max=25 />  
      
<!--/////////////////////-->

    <TrPropBoolean title="fill"  bind:extra={item} />   
        
    <CommonCommands  bind:item={item} />   
    <ShadowCommands  bind:item={item} /> 
    
    </table>
</div>


===> Requirement : I will give you the svelte components in the old format and you will convert it into the array of objects format. 




in the end add these to all (each and every one) array of objects ..

    //CommonCommands
    {
      componentName: 'TrText',
      title: 'name',
      props: {}
    },
    {
      componentName: 'TrPropColor',
      title: 'color',
      props: {}
    },
    {
      componentName: 'TrNo',
      title: 'showAt',
      props: {}
    },
    {
      componentName: 'TrPropNumber',
      title: 'globalAlpha',
      props: {
        min: '0.0',
        max: '1.0',
        step: '0.1'
      }
    },
    //gap-dash
    {
      componentName: 'TrPropNumber',
      title: 'dash',
      props: {}
    },
    {
      componentName: 'TrPropNumber',
      title: 'gap',
      props: {}
    },
  //shadow
    {
      componentName: 'TrNo',
      title: 'shadowOffsetX',
      props: {}
    },
    {
      componentName: 'TrNo',
      title: 'shadowOffsetY',
      props: {}
    },
    {
      componentName: 'TrNo',
      title: 'shadowBlur',
      props: {}
    },
    {
      componentName: 'TrColor',
      title: 'shadowColor',
      props: {}
    },



Here are some Examples

tHE FOLLOWING FILE WAS CONVERTED AS 


FILE---

<script>
//@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   

import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   

export let item;

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
    
      <TrPropNumber title="x"  bind:extra={item} min=0 max=50/>    
      <TrPropNumber title="y"  bind:extra={item} min=0 max=50/>    
      <TrPropNumber title="radiusX"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="radiusY"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="rotation"  bind:extra={item} min=0 max=200/>    
      <TrPropNumber title="startAngle"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="endAngle"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="lineWidth"  bind:extra={item} min=0 max=25/>    

      <TrPropBoolean title="fill" bind:extra={item}/>
       
       
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>







Result---
this. dialogueBox = [
            {
              componentName: 'TrPropNumber',
              title: 'x',
              props: {
                min: 0,
                max: 50
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'y',
              props: {
                min: 0,
                max: 50
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'radiusX',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'radiusY',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'rotation',
              props: {
                min: 0,
                max: 200
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'startAngle',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'endAngle',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'lineWidth',
              props: {
                min: 0,
                max: 25
              }
            },
            {
              componentName: 'TrPropBoolean',
              title: 'fill',
              props: {}
            },
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'color',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'showAt',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'globalAlpha',
              props: {
                min: '0.0',
                max: '1.0',
                step: '0.1'
              }
            },
            // gap-dash
            {
              componentName: 'TrPropNumber',
              title: 'dash',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'gap',
              props: {}
            },
            // ShadowCommands
            {
              componentName: 'TrNo',
              title: 'shadowOffsetX',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'shadowOffsetY',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'shadowBlur',
              props: {}
            },
            {
              componentName: 'TrColor',
              title: 'shadowColor',
              props: {}
            }
          ];