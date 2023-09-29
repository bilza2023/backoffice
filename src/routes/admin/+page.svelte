<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card} from  '$lib/cmp';
import { isLoginStore, isAdminStore,BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '../teachermath/Nav.svelte';
// import deleteQuestion from './crud/deleteQuestion';
    // import Allfilled from './allFilled/+page.svelte';
  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
// let allfilled = false; 
onMount(async () => {
  try{
    if (!isLogin || !isAdmin){
    goto('/login');
    return;
    }  //
    
  
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Admin Panel</HdgWithIcon>
</div>

<div class="flex justify-center w-full">
  <div class="w-3/12">
  <Card title='All Filled'  url="/admin/allFilled"/>
  </div>

  <div class="w-3/12">
  <Card title='CRUD'  url="/admin/crud"/>
  </div>
  <div class="w-3/12">
  <Card title='Backup'  url="/admin/backup"/>
  </div>
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
