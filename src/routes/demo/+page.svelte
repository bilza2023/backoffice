<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck

import {browser,onMount,toast,BASE_URL} from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';
import Katex from "svelte-katex";
import Cell from './Cell.svelte';
import Grid from './Grid.svelte';

let pulse = 0;
function gameLoop(){pulse+=1;console.log(pulse);currentSlide=currentSlide;}

onMount(async ()=>{
    setInterval(gameLoop,1000);
});

let currentSlide = [
    {
        startTime : 0,
        endTime : 100,
        type : 'grid',
        items : [
            {
            name:"",
            content : 'aaa',
            showAt : 0,
            extra : {}
            },
            {
            name:"",
            content : 'ssss',
            showAt : 2,
            extra : {}
            },
            {
            name:"",
            content : 'bbbb',
            showAt : 4,
            extra : {}
            },
        ]
    }
];
const rowsCount = 2;
</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>
<br>
<br>
<br>

<div class='flex justify-center   w-full'>

   <Grid  {currentSlide} {pulse}  {rowsCount}/>

</div>
</div><!--page wrapper-->
