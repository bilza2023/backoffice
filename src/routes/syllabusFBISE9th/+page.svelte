
<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto,chqLogin } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import MainPanel from './MainPanel.svelte';
  import SidePanel from './SidePanel.svelte';

let questions;
let total_questions;

let selectedEx ="1.1";

function setSelectedEx(ex){
  selectedEx =ex;
}
onMount(async () => {
  try{
    // debugger;
    if (!chqLogin()){
    goto('/login');
    return;
    }  
    //=============================  
            const resp = await fetch( `${BASE_URL}/fbise_math9th_syllabus`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer 000`,
            }
            });
            if (resp.ok){
              const data = await resp.json();
              questions = data.questions;
              total_questions = data.total_questions;
              localStorage.setItem('math_syllabus',JSON.stringify(questions));
            }else {
              toast.push('failed to load');
              throw new Exception("failed to load")
            }
  } catch (e) {
       toast.push('failed to load');
  }      
});
 
////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>
{#if questions}
<div class="flex justify-center border-2 border-white">
  <div class="w-2/12">
      <SidePanel {questions} {setSelectedEx}/>
  </div>
  <div class="w-10/12">
    <MainPanel {questions}  {selectedEx} {total_questions}/>
    <!-- code here -->
    <br>
    <br>
    <br>
    <br>
  </div>

</div>
{:else}
<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.COMPUTER}>Loading Please Wait...</HdgWithIcon>
</div>
{/if}
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</PageWrapper>
