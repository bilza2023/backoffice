<script>
    //@ts-nocheck  
    import { Card, BtnWIconSm, PageWrapper, HdgWithIcon } from 'sveltetools_bils/src/cmp';
    
    import { API_URL, onMount,toast,Icons,goto,checkToken,checkAdminToken} from '$lib/util';
    import Nav from '$lib/appComp/Nav.svelte';
    import {testFunction,AppConsts} from "taleemtools";
    import PresentationPlayerBlob from '$lib/Presentation/PresentationObj/PresentationPlayerBlob.svelte';
    let isLogin = false;
    let isAdmin = false;
 
    import {questionData} from './questionData.js';
    ////////////////////////////////////////////////////////
    </script>
    
    <!-- <MyComponent /> -->
    
    <Nav {isLogin} {isAdmin}/>
    <PageWrapper>
   <PresentationPlayerBlob tcode='fbise9math' {questionData}/>
        
    </PageWrapper>
    