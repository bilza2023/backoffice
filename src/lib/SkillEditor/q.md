Here is my svelte components. The +page.svelte has a child component Display. The Display is suppose to display the content item but for some reason nothing gets shown. No error and no display.


+page.svelte
<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons,onMount,toast,ajaxGet} from '$lib/util';
import ThreeCards from '$lib/appComp/ThreeCards.svelte';
import { BASE_URL } from '$lib/cmn/config';
import Display from '../lib/SkillEditor/Display.svelte';
import quizStringifiedQsToArray from '$lib/appComp/fn/quizStringifiedQsToArray';

let items;
onMount(async ()=>{
    try {
        const resp = await ajaxGet(`${BASE_URL}/publicTests`);
        if (resp.ok){
            const data = await resp.json();
            const items = data.items;
            // debugger;
            for (let i = 0; i < items.length; i++) {
                items[i] = await quizStringifiedQsToArray(items[i]); 
            }
            for (let i = 0; i < items.length; i++) {
                console.log('items[i].questions[0].content[0]' , items[i].questions[0].content[0])
            }
            
            console.log("items" , items);
        }else {
            toast.push('failed to load');
        }
    } catch (e) {
            toast.push('failed to load');
        // toast.push( e.message);
    }   
});
</script>

<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.TEST}>Skillza.com</HdgWithIcon>
    </Centre>

<div class='flex bg-gray-900 p-8 m-8 rounded-md border-2 border-white'>
<ThreeCards />
</div>

<br/>
<div class='flex justify-start m-2 p-2 '>
 <HdgWithIcon icon={Icons.TEST}>Public Tests</HdgWithIcon>
</div>

<!-- <div class='flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white'> -->
    {#if items}
    {#each items as item}
   
        <Display  contentItem={item.questions[0].content[0]} /> 
    {/each}
    {/if}
<!-- </div> -->
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>


Display.svelte
<script>
//@ts-nocheck
export let contentItem;
import {ListDisplay,DivDisplay,TableDisplay,PreDisplay,YoutubeDisplay,ImageDisplay} from './index';

  import { onMount } from "$lib/util";
onMount(()=>{
debugger;
console.log(contentItem);

});

</script>

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


DivDisplay.svelte
<script>
//@ts-nocheck

// export let data;
// export let data;
export let contentItem
  import { onMount } from "$lib/util";
onMount(()=>{
debugger;
console.log(contentItem);

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
{contentItem.content}
xcxxzxzzx
</div>

{/if}

The output of
  for (let i = 0; i < items.length; i++) {
                console.log('items[i].questions[0].content[0]' , items[i].questions[0].content[0])
            }
is
{content: 'What is the Holy Trinity in Christian theology?', type: 'div', bgColor: '#bd1f1f', fontColor: '#d3f915', borderColor: 'white', …}
bgColor
: 
"#bd1f1f"
borderColor
: 
"white"
borderRadius
: 
21
borderStyle
: 
"solid"
borderWidth
: 
0
content
: 
"What is the Holy Trinity in Christian theology?"
fontColor
: 
"#d3f915"
fontSize
: 
45
fontStyle
: 
"italic"
fontWeight
: 
"bold"
marginX
: 
0
marginY
: 
0
opacity
: 
1
paddingX
: 
2
paddingY
: 
2
textAlign
: 
"center"
type
: 
"div"            