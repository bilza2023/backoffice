<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';

let questions;

onMount(async () => {
  try{
    debugger;
    
    //=============================  
    const teacher_name = localStorage.getItem("teacher_name");
    const token = localStorage.getItem("token");

    const resp = await fetch( `${BASE_URL}/be/filled_by_me` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token,teacher_name} )
    });
            if (resp.ok){
              const data = await resp.json();
              questions = data.questions;
            }else {
              toast.push('failed to load');
              throw new Exception("failed to load")
            }
  } catch (e) {
       toast.push('Unknown Error');
  }      
});
function getUrl(question){
 let url;
 if (question.questionType == "eqs"){
    url = `/eqs?id=${question._id}`;
 }else{
    url = `/grid?id=${question._id}`;
 }
return url; 
}
////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Questions Filled By You</HdgWithIcon>
</div>
<br>

{#if questions}
  <div class="bg-stone-700 text-sm text-gray-300 w-5/12 p-2 m-1 rounded-md ">{`Questions filled by you are : ${questions.length}`}</div>
{/if}



<div class='flex  w-full justify-center  flex-wrap'>
{#if questions}
{#each questions as question,index}
    

            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.partNo.exercise} Q-${question.partNo.questionNo} pt ${question.partNo.part}`}
            icon={Icons.TEST}
             url = {getUrl(question)}
            
            >
            </Card>
            </div>
{/each}
{/if}
</div>




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
