<script>
// @ts-nocheck
import Loading from '$lib/cmp/Loading.svelte';
import { onMount } from 'svelte';
import { BASE_URL } from '$lib/cmn/config.js';
import {pageStateStore} from "./store";
import {toast} from '$lib/util';
///////////////////////////////////////////////////
import LoginForm from './loginForm/LoginForm.svelte';
import ShowQuizOneByOne from './showQuizOneByOne/ShowQuizOneByOne.svelte';
import ShowQuizAll from './showQuizAll/ShowQuizAll.svelte';
import Result from './result/Result.svelte';
import Goodbye from './goodbye/Goodbye.svelte';
import nextPageState from './fn/nextPageState';

$: pageState = $pageStateStore;

let quiz;
let students;
////////////////////////////////////
onMount(async () => {
  try {
      let  quizId = new URLSearchParams(location.search).get("quizId"); 
      const resp = await fetch( `${BASE_URL}/show/${quizId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        const data = await resp.json();
        quiz = data.quiz //===> important
        students = data.students;
        nextPageState();//loginForm or ShowQuiz
    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    toast.push('Unknown Error');
    // console.error(error);
  }
}); 

</script>

<div class="wrapper w-full p-2 bg-gray-800 min-h-screen text-white ">

{#if quiz}
       
            {#if pageState == 'loginForm'}
              <LoginForm {quiz}{students} />
            {/if}
          
          <!-- //==showQuiz======-->    
            {#if pageState == 'showQuiz'}
                {#if quiz.displayQOneByOne}
                <ShowQuizOneByOne {quiz} />
                {:else}
                <ShowQuizAll {quiz} />
                {/if}
            {/if}

            <!-- //==result======-->  
            {#if pageState == 'result'}
              <Result {quiz} />
            {/if}

            <!-- //=goodbye======-->
            {#if pageState == 'goodbye'}
              <Goodbye  {quiz}/>
            {/if}
{:else}
<Loading />
{/if}
</div>

