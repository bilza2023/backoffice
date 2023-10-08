//@ts-nocheck
import {toast,BASE_URL} from '$lib/util';
//questionType,board,classNo,chapter,exercise,questionNo,part
//questionType,board,classNo,chapter,exercise,questionNo,part
export default async function addSpecialQuestion(questionType,board,classNo,chapter,name){
debugger;
const question = {
questionType,board,classNo,chapter,name,
status : "unlocked",
free : false
}
checkNewQuestionData(question);
const token = localStorage.getItem('token');
const resp = await fetch( `${BASE_URL}/add_special_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token,question} )
    });
    if (resp.ok){
    debugger;
    const data = await resp.json();
    toast.push(data.message);
    return true;
    }else {
    const data = await resp.json();
    toast.push(data.message);
    }
return true;
}

////////////
function checkNewQuestionData(question){


if(!question.name || question.name === ""  ){
toast.push("Question Name is must for Special questions.");
throw new Error('Missing  important data');
}
}