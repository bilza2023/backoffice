<script>  
    //@ts-nocheck
    import { PageWrapper,HdgWithIcon } from 'sveltetools_bils/src/cmp';
    import { API_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken,ajaxPost } from '$lib/util';
    // import Nav from '$lib/appComp/Nav.svelte';
    import Nav from '$lib/appComp/Nav.svelte';
    
    
    import SyllabusComp from '$lib/appComp/syllabusComp/SyllabusComp.svelte';
    import Summary from '$lib/appComp/Summary.svelte';
    
    let tcode; 
    /////////////////////////////////
    let questions;
    let isLogin = false;
    let isAdmin = false;
    
  onMount(async () => {
  try{
      // debugger;
      tcode = new URLSearchParams(location.search).get("tcode");
      const resp = await ajaxPost( `${API_URL}/tcode/syllabus` , { tcode } );
  
  /////////////////////    
      if (resp){
        const data = await resp.json();
        questions = data.items; //data.data.syllabus
        
        isLogin = checkToken();
        isAdmin = checkAdminToken();
      }else {
       const data = await resp.json();
       chapter_map_array = await chapter_map(questions);
        toast.push(data.message);
      }
  
    } catch (e) {
         toast.push('System error');
    }      
  });
  
    ////////////////////////////////////////////////////////
    </script>
    <Nav {isAdmin} {isLogin}/>
    <PageWrapper>
    
    <div class='flex justify-center   p-2 '>
     <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
    </div>
    
    {#if questions}
      
        <Summary {questions} />
    
    <SyllabusComp  {questions} {tcode} uiMode={false}/>
    {/if}
    
    <!-- <HdgWithIcon>{`Chapter Total: ${chapterTotalQuestions}`}</HdgWithIcon> -->
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    </PageWrapper>
    