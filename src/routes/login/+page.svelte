<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm , BtnWIcon,FormElm,Lbl} from 'sveltetools_bils/src/cmp';
import { Icons } from '$lib/util';

import loginFn from '$lib/loginFns/loginFn';

let email ="";
let password =""; 
//--nav is at a wrong place
import Nav from '$lib/appComp/Nav.svelte';
</script>

<Nav/>
<PageWrapper>
<br/><br/>

<div class='flex justify-center w-full'>
    <div class='w-10/12 '>
        <FormElm>
            <div class='flex justify-center'>
                    <HdgWithIcon icon={Icons.KEY} >Math Teachers Login</HdgWithIcon>
            </div>

            <div class='flex justify-center pt-1 text-white'>
                Email
            </div>


            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                    bind:value={email} 
                    autocomplete="email" required
                    />
                </div>
            </div>
            
            <div class='flex justify-center pt-1 text-white'>
            Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    
                <input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                bind:value={password} 
                required
                >
                </div>
            </div>
           
           <div class='flex justify-center '>
                <BtnWIconSm icons={ Icons.SAVE }
                clk = {()=>loginFn(email,password)}
                >Login</BtnWIconSm>
           </div>

                <!-- <button class= {`bg-blue-800 p-2 m-2 rounded-md px-8 hover:bg-gray-500`}
                on:click={()=>loginFn(email,password)} >
                    {Icons.SAVE}&nbsp;Save
                </button> -->

        </FormElm>
    </div>
</div>


</PageWrapper>


