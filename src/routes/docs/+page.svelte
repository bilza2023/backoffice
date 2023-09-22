<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,P,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {Agent , Icons, onMount,toast} from '$lib/util';
import MainLink from './MainLink.svelte';

</script>


<PageWrapper>
  <br/>
  <div class='flex justify-center '>
  <HdgWithIcon icon ={Icons.BOOKS} bgColor='bg-green-800'>Skillzaa.com Help</HdgWithIcon>
  </div>

<P>Skillzaa.com is an "Exam Automation Tool for online and offline educational instutions". It is used for online teaching , classes and assesment.</P>

<P> It allow teachers to create classes, add students and then create tests for these classes. Students can access these tests using the provided credeantials finally the results are stored and graded.</P>

<div class="mx-8 bg-gray-600  text-white p-4 rounded-md shadow-md">
  Skillzaa.com ::  An Exam Automation Tool for online and offline educational instutions"
</div>


<br>

<P>Lets look at each step one by one:</P>

<br>


<div class='p-2 m-1 bg-gray-600 mx-16 pt-12 pb-12 rounded-md'>

<MainLink href='/docs/creatingClasses'>{Icons.TEAM} Creating Classes</MainLink>
<br>
<MainLink href='/docs/creatingStudents'>{Icons.STUDENT} Creating Students</MainLink>
<br>
<MainLink href='/docs/creatingTests'>{Icons.TEST} Creating Tests</MainLink>
<br>
<MainLink href='/docs/runningTests'>{Icons.RUN} Running Tests</MainLink>
<br>
<MainLink href='/docs/analytics'>{Icons.CHARTUP} Analytics / Result</MainLink>

</div>

<br/>
<br/>
<br/>
<br/>
</PageWrapper>