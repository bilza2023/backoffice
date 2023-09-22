<script>
//14-Aug-2023 : This is an example where I am editing a store variable and the change show effect in the page.svelte.
//14-Aug-2023 : I may add Theme into it later

import {showQuestionsStore} from './store';

$:showQuestions = $showQuestionsStore;
</script>


<div class= 'flex justify-center p-1 px-4'>
    <div class='flex justify-center  w-4/12 bg-gray-700 p-1 m-1 rounded-md'>

        <button class='
        {showQuestions ?  'bg-gray-800' : 'bg-blue-700'}
        mx-8 px-8 hover:bg-green-700 hover:cursor-pointer rounded-md text-sm'
        on:click={()=>showQuestionsStore.set(false)}
        >
            Settings</button>
        
        <button class='
        {showQuestions ?  'bg-blue-700' : 'bg-gray-800'}
        mx-8 px-8 hover:bg-green-700 hover:cursor-pointer rounded-md text-sm'
        on:click={()=>showQuestionsStore.set(true)}
        >
            Questions</button>    

    </div>

</div>