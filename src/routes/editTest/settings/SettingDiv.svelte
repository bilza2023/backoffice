<script>
// @ts-nocheck
import { SectionHead, FormRow, Tf } from '$lib/cmp';
import {itemStore} from '../store';
import Access from './Access.svelte';

export let quiz;
export let visible;


</script>

  <SectionHead title={quiz.title} {visible}>
    <FormRow title="Quiz Title">
      <input
        type="text"
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={quiz.title}
      />
    </FormRow>

    <FormRow title="Intro Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={quiz.introText}
      ></textarea>
    </FormRow>

    <FormRow title="Farewell Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={quiz.farewellText}
      />
    </FormRow>
    <FormRow title="Show Student Result">
      <Tf bool_prop='showResult' obj={quiz} />
    </FormRow>
   
    <FormRow title="Show Questions">
    <div class='flex justify-center  w-full'>
       <select class='bg-gray-700 text-white w-10/12 rounded-md  
       m-1 p-1 min-h-[50px]'
         bind:value={quiz.displayQOneByOne} >
        <option class='text-center w-full mx-4' value={true} 
        selected={quiz.displayQOneByOne === true}
        >One By One</option>
        <option class='text-center w-full mx-4' value= {false}
        selected={quiz.displayQOneByOne === false}
        >Show All</option>
       </select>
    </div>
    </FormRow>
    
    <FormRow title="Access">
      <Access {quiz}/>
    </FormRow>


    <!-- Additional FormRows for 'saveResponse', 'showIntro', 'showResult' properties -->

  </SectionHead>
