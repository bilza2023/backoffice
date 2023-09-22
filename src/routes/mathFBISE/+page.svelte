<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,CardImg,Card,InputFormCancel,ShowIfTrue,Loading} from '$lib/cmp';
import { BASE_URL} from '$lib/cmn/config.js';
import {onMount,toast , Icons,Agent} from '$lib/util';
let mathQuestions = [];
onMount(async () => {
  try {
  // debugger;
//   http://localhost/mathboard?board=FBISE
    //   let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/mathboard?board=FBISE`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
      // debugger;
        const data = await resp.json();
        mathQuestions  = data.mathQuestions;
    } else {
        // const data = await resp.json();
        toast.push('Download Error');
    }
  } catch (error) {
    toast.push('Unknown Error');
    // console.error(error);
  }
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- ************** -->
<PageWrapper>
<br>
<Centre>
    <HdgWithIcon bgColor='bg-stone-600'  icon='📜'>Math Class 9th FBISE</HdgWithIcon>
</Centre>
<br>

<div class="flex justify-center gap-2 flex-wrap">
<CardImg title='Math Class 9th (PTBB)' img='/images/math_9thPTBB.png'/>
</div>

<div class="flex flex-col  justify-center  w-full  ">
{#each mathQuestions as li,index}
    <div class="flex flex-col justify-center mx-auto bg-stone-500 p-2 m-1 rounded-lg">
     <a href= {`/uploadmath?id=${li._id}`}>
      <div class="flex ">
        <div class="p-1 m-1 border-2 border-gray-700"># :{index}</div>
        <div class="p-1 m-1 border-2 border-gray-700">Chapter :{li.chapter}</div>
        <div class="p-1 m-1 border-2 border-gray-700">Exercise :{li.exercise}</div>
        <div class="p-1 m-1 border-2 border-gray-700">Question :{li.questionNo}</div>
        <div class="p-1 m-1 border-2 border-gray-700">Part :{li.part}</div>
      </div>
    </a>
    </div>
{/each}
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>

