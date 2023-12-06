<script>
//@ts-nocheck
import {onMount} from '$lib/util'
import Katex from "svelte-katex";
export let item;
export let pulse;
export let itemIndex;

function clr(item){
    // return 'white';
 if (pulse >= item.showAt ){
    return 'white';
 }else {
    return '#1F2937';
 }
}

</script>

        <td class="border-2  text-center" 
        style= {`
            min-width: 70px;
            min-height: 70px;
            border-left-color : ${item.bl ? 'red' : '#344356'};
            border-top-color : ${item.bt ? 'red' : '#344356'};
            border-right-color : ${item.br ? 'red' : '#344356'};
            border-bottom-color : ${item.bb ? 'red' : '#344356'};
            font-size : 1em;
            margin : 2px;
            padding : 2px;
            color : ${pulse >= item.showAt ? 'white' : '#1F2937'};
        `}
        
        
        id={`${itemIndex}`}
        >
            <div
             style= {`
            border-left-color : ${item.bl ? 'red' : '#344356'};
            border-top-color : ${item.bt ? 'red' : '#344356'};
            border-right-color : ${item.br ? 'red' : '#344356'};
            border-bottom-color : ${item.bb ? 'red' : '#344356'};
        `}
            >
                <Katex>{item.content}</Katex>
            </div>
          
        </td>
