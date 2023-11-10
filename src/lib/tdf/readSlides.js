//@ts-nocheck
import { BASE_URL } from "$lib/util";

export default async function readSlides(id,tcode){
try{

  const resp = await fetch( `${BASE_URL}/pre/read`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {id , tcode} )
  });
// debugger;
  if(resp.ok){
   const data = await resp.json();
   return data.slides; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 