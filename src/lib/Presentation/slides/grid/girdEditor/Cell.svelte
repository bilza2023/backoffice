<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
import {onMount} from '$lib/util'
import Katex from "svelte-katex";
export let item;
export let pulse;
export let itemIndex;

function clr(item){
    return 'white';
 if (pulse >= item.showAt ){
    return 'white';
 }else {
    return '#1F2937';
 }
}


</script>

        <td class="border-2 border-white" 
        style= {`
            min-width: 70px;
            min-height: 70px;
            border-left-color : ${item.blc};
            border-top-color : ${item.btc};
            border-right-color : ${item.brc};
            border-bottom-color : ${item.bbc};
            font-size : 1em;
            margin : 2px;
            padding : 2px;
            color : ${clr(item)};
        `}
        
        
        id={`${itemIndex}`}
        >
            <Katex>{item.content}</Katex>
          
        </td>
