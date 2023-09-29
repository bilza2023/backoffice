<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,CardOnly} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import backupFn from "./backupFn.js";
import { isLoginStore, isAdminStore } from '$lib/util';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
onMount(async () => {
  try{
       toast.push('Use only in localhost');
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Backup</HdgWithIcon>
</div>


<button on:click={backupFn}>BackUp</button>
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
