<script>
//@ts-nocheck

import {browser,onMount,toast,BASE_URL} from '$lib/util'
// import GridEditor from './gridEditor/GridEditor.svelte';
// import GridPlayer from './gridPlayer/GridPlayer.svelte';
// import {theme} from 
import { themes ,Presentation} from '$lib/Presentation';
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

<div class='bg-gray-800 text-white w-full min-h-screen'>

<br>
<Presentation {currentSlide} {pulse} {themes} displayMode={false}/>

</div>