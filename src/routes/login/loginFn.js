// @ts-nocheck
import {toast} from '$lib/util';
import {ajaxPost} from '$lib/ajax';
import {BASE_URL} from '$lib/cmn/config';
import { goto } from "$app/navigation";
import {isLoginStore} from '$lib/cmn/appStore';
import validateString from "./validateString"
import validateEmail from "./validateEmail"
import {loadApp} from '$lib/ajax';
/**
 * @param {string} email
 * @param {string} password
 */
export default async function loginFn(email,password){
// console.log(email,password);
// debugger;
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

const response = await ajaxPost( `${BASE_URL}/login` , {email,password});
    if (response.ok) {
        const data = await response.json();
        console.log("data",data);
        localStorage.setItem("token", data.token);
            loadApp();
        isLoginStore.set(true);
        goto("/dashboard");
  } else {
    isLoginStore.set(false);
    const data = await response.json();
    toast.push(data.msg);
  } 
  }

