<script>
    //@ts-nocheck

    import {browser } from '$lib/util';
export let selectedTcode;
let data = null;
let questions = [];
// onMount(async () => {
// // debugger;
    
// });
$: {
    selectedTcode;
    if (browser) {
        const storedValue = localStorage.getItem(`${selectedTcode}_download_time`);
        if (storedValue) {
            let storedTime = JSON.parse(storedValue);
            let currentTime = Date.now();
            let timeDifferenceMs = currentTime - storedTime;
            let timeDifferenceHours = (timeDifferenceMs / (1000 * 3600)).toFixed(2);
            console.log("Time difference in hours:", timeDifferenceHours);
            data = timeDifferenceHours;
        } else {
            console.log("No stored value found for", selectedTcode);
            // Handle the case when there's no stored value
        }
    }

    if(browser){
        questions = JSON.parse(localStorage.getItem(`${selectedTcode}_questions`));
    }
}
</script>



<div class="flex flex-col justify-center">
<h1>This data is {data} hours old</h1>
<h1>Number of Questions: {questions.length}</h1>


</div>