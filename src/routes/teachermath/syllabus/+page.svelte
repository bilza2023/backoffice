
<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto,chqLogin } from '$lib/util';
import Nav from '../Nav.svelte';
import MainPanel from './MainPanel.svelte';
  import SidePanel from './SidePanel.svelte';

let questions;

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
    // const math_syllabus =  JSON.parse(localStorage.getItem('math_syllabus'));
    //     if (math_syllabus !== null){
    //         questions = math_syllabus;
    //     }else {
            const resp = await fetch( `${BASE_URL}/math_fbise`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer 000`,
            }
            });
            if (resp.ok){
              const data = await resp.json();
              questions = data.questions;
              localStorage.setItem('math_syllabus',JSON.stringify(questions));
            }else {
              toast.push('failed to load');
              throw new Exception("failed to load")
            }
        // }
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
    <MainPanel {questions}  {selectedEx}/>
    <!-- code here -->
  </div>

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
