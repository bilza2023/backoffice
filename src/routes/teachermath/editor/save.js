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
    await assignSteps(question);
    await setFakeTimes(question);
  }
  if (question.status == 'final' ){
    await assignSteps(question);
    //--add fs timings also in check final times
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
  for (let i = 0; i < question.eqs.length; i++) {
    const eq = question.eqs[i];
    eq.eqStartTime = time;//eq.eqStartTime of first is always zero
     time += 5;
          if (eq.fs.length >0){
            eq.fsStartTime = time;
            time +=5; 
          }
    eq.eqEndTime = time;
    // time += 5; // for next iteration
  }

}
async function assignSteps(question) {
  for (let i = 0; i < question.eqs.length; i++) {
    const eq = question.eqs[i];
    eq.step = i +1;
  }

}
async function checkFinalStartTimes(eqs) {
  eqs[0].eqStartTime = 0;
  // Iterate through the eqs and validate times
  for (let i = 1; i < eqs.length; i++) {
    const currentStartTime = parseFloat(eqs[i].eqStartTime);
    const previousStartTime = parseFloat(eqs[i - 1].eqStartTime);

    if (isNaN(currentStartTime) || isNaN(previousStartTime) || currentStartTime < previousStartTime) {
      toast.push(`StartTime at Step ${i + 1} is smaller than the previous startTime`);
      throw new Error(`StartTime at Step ${i + 1} is smaller than the previous startTime`);
    }
  }
}


