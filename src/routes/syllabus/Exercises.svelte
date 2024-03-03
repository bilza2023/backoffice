<script>
    //@ts-nocheck
    export let selectedEx;
    export let setEx;
    export let exercise_bucket;
    
    </script>
    
    <div class="flex justify-center">
        <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
            Select Exercise
        </div>
    </div>
    
    <div class="flex justify-center w-full flex-wrap ">
    
    {#if exercise_bucket.length > 0 }
    {#each  exercise_bucket  as e }
        
        <button on:click={()=>setEx(e) }  class={`p-1 m-1 rounded-lg  px-2 ${selectedEx== e? 'bg-gray-400':'bg-gray-600' }`}>{e}</button>
        
    {/each}
    {:else}
    <p class="p-1 m-1 rounded-lg  px-2 bg-gray-600">No Exercises</p>
    {/if}
    
    </div>