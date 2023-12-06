//@ts-nocheck
import stringify from "./stringify";
import {toast,BASE_URL} from '$lib/util';



export default async function save(slides,id){
// debugger;
stringify(slides);
  const presentation = {slides ,_id:id};
  const resp = await fetch( `${BASE_URL}/pre/update`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 000`,
  },
  body: JSON.stringify( {presentation} )
  });
  // debugger;
  if(resp.ok){
    toast.push('saved');}
    else {toast.push('failed to saved');
  }
}