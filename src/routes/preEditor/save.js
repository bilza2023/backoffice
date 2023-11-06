//@ts-nocheck
import {BASE_URL} from '$lib/util';

export default async function save(id,slides){
// debugger;
let presentation = {slides ,_id:id}
  const resp = await fetch( `${BASE_URL}/pre/update`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {presentation} )
  });
return true;
}