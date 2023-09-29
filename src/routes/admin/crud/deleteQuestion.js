//@ts-nocheck
import {toast,BASE_URL} from '$lib/util';

export default async function deleteQuestion(id){
// debugger;
const token = localStorage.getItem('token');
const resp = await fetch( `${BASE_URL}/delete_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token,id} )
    });
    if (resp.ok){
    const data = await resp.json();
    toast.push(data.message);
    }else {
    const data = await resp.json();
    toast.push(data.message);
    }




}//deleteQuestion