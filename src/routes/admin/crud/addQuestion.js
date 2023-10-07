//@ts-nocheck
import {toast,BASE_URL} from '$lib/util';


export default async function addQuestion(chapter,exercise,questionNo,part,board,classNo,questionType){
debugger;
const question = {
board,
questionType,
class : classNo,
chapter,
exercise,
questionNo,
part,
filename : `${"FBISE".toLowerCase()}_cl_${9}_ch_${chapter}_ex_${exercise}_q_${questionNo}_pt_${part}`,
status : "unlocked",
free : false
}

const token = localStorage.getItem('token');
const resp = await fetch( `${BASE_URL}/add_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token,question} )
    });
    if (resp.ok){
    const data = await resp.json();
    toast.push(data.message);
    }else {
    const data = await resp.json();
    toast.push(data.message);
    }

}