<script> 
// @ts-nocheck
import Btns from "./Btns.svelte";
import ShowQuestions from "./ShowQuestions.svelte";
import ProgressBar from "$lib/cmp/ProgressBar.svelte";
import Display from '../Display.svelte';
import arrangeContent from '../fn/arrangeContent';

//--we need these only if we want to react to them
export let quiz;

let cq = 0;

const next = ()=>{
  if (cq < quiz.questions.length-1){ // This is correct
    cq += 1;
  }else {
  cq = ( quiz.questions.length-1 );
  }
}
const prev = ()=>{
  if (cq > 0){
  cq -=1;
  }else {
    cq= 0;
  }
}
// async function getcontent(cont){
//   const r = await JSON.parse(cont);
//   return r;
// }
</script>


<br>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>

<div class=" bg-gray-700 p-1  text-white rounded-md w-10/12 mx-auto border-2 border-gray-400">

<ProgressBar total={quiz.questions.length} current={cq}/>

  <div class="bg-gray-900 rounded-md p-1 m-1  ">

    {#each arrangeContent(quiz.questions[cq].content) as contentItem}
    <!-- {#each quiz.questions[cq].content as contentItem} -->
    <!-- DivDsiplay will show EACH contentItem of content array one by one -->
    <!-- This is where we inser if contentItem.type == div then -->
    <Display  {contentItem} />  
    {/each}

  </div>
<br>
<ShowQuestions  questions={quiz.questions} {cq} />
  
<Btns   questions={quiz.questions} {cq}  {quiz}  {next} {prev} />
</div><!--flex box ends--->

