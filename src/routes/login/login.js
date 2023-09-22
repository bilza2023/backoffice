// @ts-nocheck
import {toast} from '$lib/util';
import { BASE_URL } from '../../lib/util/config';
import { goto } from "$app/navigation";
import {isLoginStore , isAdminStore} from '../../lib/util/appStore';
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

const response = await fetch( `${BASE_URL}/teacher_login` ,{
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
        
    // debugger;
        // console.log("data",data);
        localStorage.setItem("teacher_token", data.token);
        localStorage.setItem("teacher_status", data.status);
        isLoginStore.set(true);
            if (data.status == 'teacher'){
              isAdminStore.set(false);
            }else {
              isAdminStore.set(true);
            }

        goto("/teachermath/syllabus");
  } else {
    isLoginStore.set(false);
    const data = await response.json();
    toast.push(data.msg);
  } 
  }

