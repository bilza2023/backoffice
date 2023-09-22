
//@ts-nocheck
import validateString from './validateString';
import validateEmail from './validateEmail';
import {toast,goto} from '$lib/util';
import {BASE_URL,SUSPEND_NEW_ACCOUNT_CREATION } from '$lib/cmn/config';

///////////////////////////////////////////////
export default async function register(item){

console.log('item',item);

    if (SUSPEND_NEW_ACCOUNT_CREATION == true){
          toast.push('New Account Creation has been suspended for now');  
          return;  
    }

    if (item.password !== item.password2){
          toast.push('Passwords do not match');  
          return;  
    }
const emailError = validateEmail(item.email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(item.password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Short or non  valid password, 6 to 30 characters required');  
      return;
    }

// isLoading = true; 
    const response = await fetch( `${BASE_URL}/register` , {
    // const response = await fetch('http://localhost/user/register', {
      method: 'POST',
      body: JSON.stringify({email: item.email,password : item.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    debugger;
    const data = await response.json();
     
      if (data.status == "ok"){

    //   localStorage.setItem('token', data.token);
    //   is_login.set(true); //login in appstore
        goto('/login');
        toast.push( 'Account has been created' );
      }else {
        // isLoading = false;
        toast.push( data.msg );
      }
  }