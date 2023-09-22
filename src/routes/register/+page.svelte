<script>
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm,BtnWIcon,FormElm,Lbl} from '$lib/cmp';
import { Icons } from '$lib/util';
import register from './register';

let item = {
    email : '',
    password : '',
    password2 : ''

}

async function handleRegisterClick() {
    await register(item); // Wait for the register function to complete
}

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>

<PageWrapper>

<br/>
<br/>

<div class='flex justify-center w-full py-8'>
    <div class='w-10/12 '>
        <FormElm>
            <div class='flex justify-center'>
                    <HdgWithIcon icon={Icons.KEY} >Register</HdgWithIcon>
            </div>

            <div class='flex justify-center pt-1 text-white'>
                Email
            </div>


            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm {item}  value={"email"} />
                </div>
            </div>
            
            <div class='flex justify-center pt-1 text-white'>
            Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm  {item} value={"password"} />
                </div>
            </div>
           
            <div class='flex justify-center pt-1 text-white'>
            Confirm Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    <InputElm {item}  value={"password2"} />
                </div>
            </div>


            <div class='flex justify-center'>
            <BtnWIconSm icon={Icons.SAVE}
            clk={handleRegisterClick}
            >Register</BtnWIconSm>
            </div>
        </FormElm>
    </div>
</div>


</PageWrapper>


