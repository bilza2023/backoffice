//@ts-nocheck

import { BASE_URL } from "$lib/util";

export default async function readSlides(id,tcode){
 try{
//  debugger;
  let token = localStorage.getItem("token");
  const resp = await fetch( `${BASE_URL}/be/read`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify( {id , tcode} )
  });
// 
  if(resp.ok){
    const data = await resp.json();
    return data; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 