<script>
    //@ts-nocheck  
    
    import { Card, BtnWIconSm, PageWrapper, HdgWithIcon } from 'sveltetools_bils/src/cmp';
    
    import { API_URL, onMount,toast,Icons,goto,checkToken,checkAdminToken} from '$lib/util';
    import Nav from '$lib/appComp/Nav.svelte';
    import {AppConsts} from "taleemtools";
    
    
    
    let isLogin = false;
    let isAdmin = false;
    onMount(async () => {
      try{
      // debugger;
      // console.log(testFunction());
      // console.log('cmp' , cmp);
      
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
    
    <!-- <MyComponent /> -->
    
    <Nav {isLogin} {isAdmin}/>
    <PageWrapper>
    
    <div class='flex justify-center  p-2 '>
     <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Back Office - Teachers Hub</HdgWithIcon>
    </div>
    
    <!-- ================================================================= -->
    {#if AppConsts.TCODE_LIST}
    <div class='flex justify-center p-8 '>
    <div class='flex flex-wrap  justify-center border-2 border-white  gap-1 p-4 m-0 bg-gray-700 rounded-md w-full'>
    
    {#each AppConsts.TCODE_LIST as tcode}
      
       <a href={`/syllabus?tcode=${tcode}`}> <img class="p-2  border-2 border-white rounded-md" 
        src= {`${AppConsts.MEDIA_URL}/images/thumbs/${tcode}.png`} 
        
        alt= {tcode} /></a>
      
    {/each}
    
    </div>
    </div>
    {/if}
    
    <!-- ================================================================= -->
    
    <div class='flex justify-center w-full'>
     <div class="w-3/12">
      <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
      </div>
     <div class="w-3/12">
      <Card  url="/syllabusByChapter" title="9 Math By Chapter"/>
      
      </div>
    </div>
    </PageWrapper>
    