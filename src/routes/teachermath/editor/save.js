//@ts-nocheck
import {toast,get} from "$lib/util";
import { BASE_URL } from '../config';
import { isLoginStore, isAdminStore } from '../store.js';

export  default async function save(question , eqs){
      try {
  debugger;    
  question.eqs = eqs;

  if ( get(isAdminStore) == false && question.staus == "final"){
      toast.push("Only Admin can mark a question final please.")
      return;
  }
  if ( get(isAdminStore) == false){
    question.free = false;
    // question.status = 'fill'; ////??? check again later
  }
  if ( get(isLoginStore) == false){
  toast.push("Please login")
  return;
  }
  if (question.eqs.length < 1 ){
  toast.push("No Equation inserted")
  return;
  }
  if (question.status == 'fill' ){
    await setFakeTimes(question);
  }
  if (question.status == 'final' ){
    await checkFinalTimes(question.eqs);
  }
        const response = await fetch(`${BASE_URL}/upload_math`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question})
        });

        if (response.ok) {
            toast.push('Data uploaded successfully');
        }else {
              toast.push('Response not ok');
        
        } 
      }catch (e) {
              toast.push('Unknown Error');
      }
}
//////////////////////////////////////////////////////

async function setFakeTimes(question) {
  let time = 0;
  for (let i = 0; i < question.length; i++) {
    const eq = question[i];
    eq.startTime = time;
    time += 10;
  }

}
async function checkFinalTimes(eqs) {
  eqs[0].startTime = 0;
  // Iterate through the eqs and validate times
  for (let i = 1; i < eqs.length; i++) {
    const currentStartTime = parseFloat(eqs[i].startTime);
    const previousStartTime = parseFloat(eqs[i - 1].startTime);

    if (isNaN(currentStartTime) || isNaN(previousStartTime) || currentStartTime < previousStartTime) {
      toast.push(`StartTime at Step ${i + 1} is smaller than the previous startTime`);
      throw new Error(`StartTime at Step ${i + 1} is smaller than the previous startTime`);
    }
  }
}


