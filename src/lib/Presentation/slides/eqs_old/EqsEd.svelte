<script>
//@ts-nocheck
import PageWrapper from '../../cmp/PageWrapper.svelte';
export let pulse;
export let items = [];
import getNewItem from "../../getNewSlide/getNewItem.js";
    import ToolBar from './sp/ToolBar.svelte';
// items.push({content : JSON.stringify(getNewEqData(0,10,"Slide One")) });
// items.push({content : JSON.stringify(getNewEqData(10,20,'Slide Two')) });
// items.push({content : JSON.stringify(getNewEqData(20,30,'Slide Three')) });
// export let slideExtra = [{key:'rows' , value: 2}];
export let slideExtra;
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor
let itemType = 'hdg';
let itemCode = '';
function redraw(){items = [...items];}
function addSpItem(){
//  debugger;
    items.push(getNewItem(itemCode,itemType, {sp : []} ));
    itemType = 'hdg';
    itemCode = '';
// console.log(items);
items = [...items];
}
</script>

<!-- <div style={`background-color : ${theme.primaryColor}`}> -->
<PageWrapper background={theme.primaryColor}>

<div class='flex flex-col justify-center p-2'>

    <div>
    <label for="">Code</label>
    <input 
    bind:value={itemCode}
     class=" rounded-md  p-1   w-full border-2" 
         style = {`
            color: ${theme.textColor};
            background-color: ${theme.backgroundColor};
            border-color: ${theme.secondaryColor};
        `}
    >
<button on:click={addSpItem}>Add Sp Item</button>
    </div>


<ToolBar />

        <h1 class=''
     style = {`color: ${theme.secondaryColor};`}
    >Heading</h1>
 <!-- bind:value={items[0].content} -->
    <textarea rows='5' 
        class=" rounded-md  p-1   w-full border-2" 
         style = {`
            color: ${theme.textColor};
            background-color: ${theme.backgroundColor};
            border-color: ${theme.secondaryColor};
        `}
    />
        
</div>
</PageWrapper>