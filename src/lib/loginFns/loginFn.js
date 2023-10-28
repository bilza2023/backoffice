// @ts-nocheck
import {isLoginStore , isAdminStore, goto,BASE_URL,toast} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

export default async function loginFn(email,password){

  // event.preventDefault();
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

const response = await fetch( `${BASE_URL}/be/teacher_login` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 000`,
      },
      body: JSON.stringify( {email,password} )
    });

// const response = await ajaxPost( `${BASE_URL}/login` , {email,password});
    if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem("token", data.token);
        // localStorage.setItem("teacher_status", data.status);
        localStorage.setItem("teacher_name", data.teacher_name);
        isLoginStore.set(true);
            if (data.status == 'admin'){
              isAdminStore.set(true);
              localStorage.setItem("teacher_status", 'admin');
            }else {
              isAdminStore.set(false);
              localStorage.setItem("teacher_status", 'teacher');
            }
        goto("/");
  } else {
    isLoginStore.set(false);
    isAdminStore.set(false);
    const data = await response.json();
    toast.push(data.message);
  } 
  }

