<script>
//@ts-nocheck
import {Comment , BtnWIconSm , HdgWithIcon} from '$lib/cmp';
import { Icons } from '$lib/util';
export let quiz;
import run from './fn/run';
</script>

<!-- <InputForm clk={ runFn  } title='Run Test' btnTitle='Run' btnColor='bg-orange-800'/> -->

<div class='flex flex-col  justify-center   border-2 boder-white p-1 m-4 rounded-md'>
 
    <div class= 'flex justify-center '>
        <HdgWithIcon icon= {Icons.RUN} bgColor='bg-green-800'>
            Run a Copy
        </HdgWithIcon>
    </div> 
    <Comment>Run a copy of this test. You can run as many copies as you want of each test with different titles , settings and timings. You can assign each copy to different classes.</Comment>

<div class='flex justify-center w-full'>
    <BtnWIconSm icon= {Icons.RUN} clk={()=>run(quiz)}>Run</BtnWIconSm>
</div>

</div>