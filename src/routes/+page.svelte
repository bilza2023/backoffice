<script>
//@ts-nocheck 
import { PageWrapper,HdgWithIcon,BtnWIconSm,Card} from  '$lib/cmp';
import { BASE_URL, onMount,toast,Icons,goto,checkToken,checkAdminToken} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';

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


<div class="flex justify-center w-full items-center">
  
  <div class="w-3/12">
  <Card  url="/syllabusByChapter" title="Syllbus By Chapter" icon={Icons.COMPUTER}/>
  </div>

  <div class="w-3/12">
  <Card  url="/syllabusFBISE9th" title="FBISE 9th Syllbus" icon={Icons.BOOKS}/>
  </div>

  <div class="w-3/12">
  <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
  </div>

</div>
</PageWrapper>
