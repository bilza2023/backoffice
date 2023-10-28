<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,BtnWIconSm,Card} from  '$lib/cmp';
import { BASE_URL, onMount,toast,Icons,goto,checkToken,checkAdminToken} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Instructions from '$lib/appComp/Instructions.svelte';

let showInstructions = true;  
let showSyllabus = true;  
let showNotes = true;  

function closeInstructions(){showInstructions = !showInstructions}  
function closeSyllabus(){showSyllabus = !showSyllabus}  
function closeNotes(){showNotes = !showNotes}  
let isLogin = false;
let isAdmin = false;
onMount(async () => {
  try{
    if (checkToken()){
      isLogin = true;
        if (checkAdminToken()){
            isAdmin = true;
        }
    }     

  } catch (e) {
       toast.push('failed to load');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav {isLogin} {isAdmin}/>
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Teachers Hub</HdgWithIcon>
</div>

<BtnWIconSm clk ={closeInstructions}>Sample Questions</BtnWIconSm>
{#if showInstructions}
<div class="flex justify-center flex-col">
<a class="mx-auto m-1 p-1 bg-gray-400 rounded-lg px-10"
 href="https://backoffice-navy.vercel.app/eqsPlayer?id=653113340a6eaa163e9f89d0">Ex 1.1 Q 1</a>
</div>
{/if}

<br>

<BtnWIconSm clk ={closeSyllabus}>Toggle Syllabus</BtnWIconSm>
{#if showSyllabus}
<div class="flex justify-center p-2 m-2 ">
  <div class="w-3/12">
<Card  url="/syllabusFBISE9th" title="FBISE 9th Syllbus" icon={Icons.BOOKS}/>
  </div>
</div>
{/if}
<br>

<BtnWIconSm clk ={closeNotes}>Toggle Notes</BtnWIconSm>
{#if showNotes}
<div class="flex justify-center  p-2 m-2 ">
  <div class="w-3/12">
  <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
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
<br>

</PageWrapper>
