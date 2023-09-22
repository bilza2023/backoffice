<script>
// @ts-nocheck

import {Display} from '../../../lib/SkillEditor';
import QuestionResult from "./QuestionResult.svelte";

import {Anchor,PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import {Icons,onMount} from '$lib/util';

export let quiz;
import {itemStore} from '../store';
$: item = $itemStore;
onMount(()=>{
console.log("quiz before result",quiz);
    window.scrollTo({top: 0,behavior: 'smooth'});
});
</script>

<PageWrapper>
<br/>
    <Centre>
        <HdgWithIcon icon={Icons.BALANCE}>Result</HdgWithIcon>
    </Centre>
    <br/>
<br>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>

<div class=" bg-gray-700 p-1  text-white rounded-md w-10/12 mx-auto border-2 border-gray-400">

<div class="bg-gray-900 rounded-md p-1 m-1  ">

{#each quiz.questions as question}

    {#each question.content as contentItem}
    <!-- DivDsiplay will show EACH contentItem of content array one by one -->
    <!-- This is where we inser if contentquiz.type == div then -->
    <Display  {contentItem} />  
    {/each}

   <br>
   <QuestionResult {question}  />
   <br/>
   <br/>
{/each}
  </div>
  
</div><!--flex box ends--->



<div class='flex justify-center'>
<Anchor href= {'/'}>
Home
</Anchor>

</PageWrapper>