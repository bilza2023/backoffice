<script>
//@ts-nocheck
import {Agent , Icons, onMount,toast} from '$lib/util';
import {Loading,PageWrapper} from '$lib/cmp';
import Indl from './indl/Indl.svelte';
import Summary from './summary/Summary.svelte';
import Combined from './combined/Combined.svelte';
import ToolBar from './toolbar/ToolBar.svelte';
import check from '$lib/appComp/check/check.js';

let pageState = "loading";
let results= null;
let quiz;
// let studentResports =[];
function setPageState(val){
pageState = val;
}
////////////////////////////////////
onMount(async () => {
  try {
  const  quizId = new URLSearchParams(location.search).get("quizId");
  // const resp = await ajaxPost(`${BASE_URL}/result/analytics`,{quizId});
  const resp = await Agent.where('result' , {whereItem : 'runId' , whereValue : quizId });

          if (resp.ok){
            const data = await resp.json();
            results = data.items;

            const resp2 = await Agent.readone('run' , {id: quizId });
              if (resp2.ok){
                  const data2 = await resp2.json();    
                  quiz = data2.item;
              }
            // console.log('results' ,  results);
            // console.log('quiz' ,  quiz);
              // debugger;
              await check(results,quiz);
            pageState = "indl";
            return;
          }
  } catch (error) {
    // console.error(error);
    toast.push("page load error");
 }
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- <Nav /> -->
<PageWrapper>
<ToolBar {setPageState} />
{#if quiz}
<div class="wrapper bg-gray-800 text-white w-full min-h-screen p-6 ">

{#if pageState == "loading" }
  <div class="flex justify-center w-full">
  <Loading  />
  </div>
{/if}


{#if pageState == "indl" }
<Indl {quiz} {results}/>
{/if}

{#if pageState == "summary" }
<Summary {quiz} {results} />
{/if}

{#if pageState == "combined" }
<Combined  {quiz} {results}/>
{/if}

<!-- {#if pageState == "loaded" }
  <h1 class="rounded-lg p-2  bg-blue-900 text-center text-white text-2xl underline mb-4">Results: {quiz.title}</h1>
  <StudentResportsTable  {studentResports}/>
{/if} -->

</div>

{:else}
<Loading />
{/if} 
</PageWrapper>