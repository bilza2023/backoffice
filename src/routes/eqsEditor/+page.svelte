<script>
//@ts-nocheck
//we are using EqEditor directly here instead of using it throught Presnetation. This is so that teachers / course designer can get this UI without the Presentation setup. SP in this we will always have 1 slide in presentation. 
import save from './save';
import {onMount, toast,BASE_URL} from '$lib/util';
import AdminPanel from './AdminPanel.svelte';
import Nav from '$lib/appComp/Nav.svelte';
import EqEditor from "$lib/Presentation/slides/eqs/EqsEditor/EqsEditor.svelte";
import { themes } from '$lib/Presentation';
import PageHeading from './PageHeading.svelte';

let slide;
let theme = themes.basic;
let question;
let isLogin = false
let isAdmin = false
function savelocal(){
  save(question,slide);
}
onMount(async () => {
  try {
    const token = localStorage.getItem('token');
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/be/get_question?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
        
      });
  
    if (resp.ok) {
        // debugger;
        const data = await resp.json();
        question  = data.question //===> important
        let slides = question.slides;
        slide  = slides[0];
        isLogin = true;
        isAdmin = data.isAdmin;

    }
  }catch(e) {toast.push('failed to load')}
});


</script>
<div class="bg-gray-800 w-full  text-white min-h-screen p-0 m-0">
<Nav {isLogin} {isAdmin} />


{#if slide}
<PageHeading  {question} {savelocal}/>
 <EqEditor pulse=0 bind:startTime={slide.startTime} bind:endTime={slide.endTime} 
 bind:items={slide.items} bind:slideExtra={slide.slideExtra} theme={theme}/>
 


  {#if isAdmin }
    <AdminPanel bind:question={question} />
  {/if}
   
<div class="flex justify-center">
  <button id="saveBtn2" class="w-10/12 bg-green-800 p-2  rounded-md text-xl" on:click={()=>save(question,slide)}>Save</button>
</div>

{:else}
<div class='flex justify-center p-1 m-1'>
<br>
<br>
<h1>loading....</h1>
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

</div>
