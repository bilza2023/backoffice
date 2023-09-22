<script>
// @ts-nocheck

import { onMount } from 'svelte';
import { goto } from '$app/navigation';

export let quiz;

</script>
<div class="flex justify-center "><!--contianer-->


<div class="w-8/12"><!--contianer-->
<br/>
<br/>
<br/>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>


    <div class="flex justify-center text-white">
          <p class="text-1xl  bg-gray-800 w-4/5 leading-10 
          m-3 p-3 rounded-lg mx-auto inline-block">
          {#if quiz.farewellText == ""}
               Goodbye! Have a great day! 😊 
          {:else}
              {quiz.farewellText}
          {/if}
          </p>
    </div>



<br/>
<br/>

<div class="flex justify-start gap-3 w-full p-1 m-1 rounded-md bg-gray-500">
<button class="bg-gray-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
  Home
</button>
</div>


</div><!--container-->
</div><!--container-->