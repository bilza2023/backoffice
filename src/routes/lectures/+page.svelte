<script>
    //@ts-nocheck  
    import { Card, BtnWIconSm, PageWrapper, HdgWithIcon } from 'sveltetools_bils/src/cmp';
    // import { Button } from '$lib/components/ui/button';
    import { API_URL, onMount,toast,Icons,goto,checkToken,checkAdminToken} from '$lib/util';
    import Nav from '$lib/appComp/Nav.svelte';
    import {testFunction,AppConsts} from "taleemtools";
    import PresentationPlayerBlob from '$lib/Presentation/PresentationObj/PresentationPlayerBlob.svelte';
    let isLogin = false;
    let isAdmin = false;
    // import * as Popover from "$lib/components/ui/popover"; 
    import {questionData} from './questionData.js';
 
function handleClick() {
    console.log('Button clicked!');
  }
    ////////////////////////////////////////////////////////
    </script>
    
    <!-- <MyComponent /> -->
    
    <Nav {isLogin} {isAdmin}/>
    <PageWrapper>

   <PresentationPlayerBlob tcode='fbise9math' {questionData}/>
        
    </PageWrapper>
    