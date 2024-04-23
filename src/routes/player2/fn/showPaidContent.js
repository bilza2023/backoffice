//@ts-nocheck
import { toast, ajaxPost } from '$lib/util'


export default async function showPaidContent(tcode){

    const email = localStorage.getItem("email");
    if(!email){toast.push('You may not be logged in or the course has not been purchase');return false;}
    const resp = await ajaxPost(`${BASE_URL}/auth/ispaid` ,{email,tcode})  
    // console.log('resp',resp);
   if(resp.ok){
    const data = await resp.json();
            if(data.allowed==true){
            // console.log("data.allowed",data.allowed);
            return true;
            }else {
            return false;
            }
  }else {
  // toast.push('failed to authenticate');
    return false;
  }


}