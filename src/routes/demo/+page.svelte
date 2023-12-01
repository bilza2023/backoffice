<script>
//@ts-nocheck

import {browser,onMount,toast,BASE_URL} from '$lib/util'
import GridEditor from './gridEditor/GridEditor.svelte';
import Presentation from '$lib/Presentation/Presentation.svelte';
import demoData from '$lib/Presentation/slides/grid/demoData';
import Cell from './gridEditor/Cell.svelte';
let pulse = 0;
function gameLoop(){pulse+=1;console.log(pulse);currentSlide=currentSlide;}

let currentSlide = {
        startTime : 0,
        endTime : 100,
        slideExtra : [],
        type : 'grid',

       items: [
    {
        name: "",
        content: [
            { "content": "aaa", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "bbb", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    },
    {
        name: "",
        content: [
            { "content": "ccc", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "ddd", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    }
]

}
onMount(async ()=>{
    // for (let i = 0; i < currentSlide.items.length; i++) {
    //     const item = currentSlide.items[i].content;
    //     console.log(item);
    // }
// currentSlide = demoData();
    // setInterval(gameLoop,1000);
});

function save(){
console.log(currentSlide);
}
</script> 


<GridEditor  {pulse}  {currentSlide} />