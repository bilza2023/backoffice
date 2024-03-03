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
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Back Office - Teachers Hub</HdgWithIcon>
</div>

<div class='flex justify-center p-8 '>
<div class='flex flex-wrap  justify-center border-2 border-white  gap-1 p-4 m-0 bg-gray-700 rounded-md w-full'>


 <a href={`/syllabus?tcode=fbise8math`}> <img class="p-2  border-2 border-white rounded-md" src={`.\\fbise8math\\images\\thumbnail.png`} alt="fbise8math" /></a>

 <a href={`/syllabus?tcode=fbise9math`}> <img class="p-2  border-2 border-white rounded-md" src={`.\\fbise9math\\images\\thumbnail.png`} alt="fbise9math" /></a>


 <a href={`/syllabus?tcode=fbise9english`}> <img class="p-2  border-2 border-white rounded-md" src={`.\\fbise9english\\images\\thumbnail.png`} alt="fbise9english" /></a>


 <a href={`/syllabus?tcode=fbise10math`}> <img class="p-2  border-2 border-white rounded-md" src={`.\\fbise10math\\images\\thumbnail.png`} alt="fbise10math" /></a>
 
 <a href={`/syllabus?tcode=matrices`}> <img class="p-2  border-2 border-white rounded-md" src={`.\\matrices\\images\\thumbnail.png`} alt="matrices" /></a>
 
</div>
</div>


<div class='flex justify-center w-full'>
 <div class="w-3/12">
  <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
  </div>
 <div class="w-3/12">
  <Card  url="/syllabusByChapter" title="9 Math By Chapter"/>
  </div>
</div>
</PageWrapper>
