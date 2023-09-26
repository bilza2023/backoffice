//@ts-nocheck
import {toast,get} from "$lib/util";
import { BASE_URL } from '../../../lib/util/config';
import { isLoginStore, isAdminStore,teacherNameStore } from '../../../lib/util/appStore.js';

export  default async function save(question , eqs){
  try {
    // debugger;
    question.eqs = eqs;
    const token = localStorage.getItem('token');
        if ( !token){
        toast.push("Please login")
        return;
        }
        //---add teacher name at back end but for now its ok
        if ( !get(teacherNameStore) ){
        toast.push("Please login")
        return;
        }

 //==MUst 3 steps
  question.eqs = eqs;
  //--do not over write filledBy once it is entered and no need for status here
  //-filledby once filled cann ot bechanged- no need so far ||====>
  if (!question.filledBy || question.filledBy == ""){
   //MUST NOT REMOVE- 
    question.filledBy = get(teacherNameStore);
  }
  if ( question.status !== "locked" &&  question.status !== "final"  ){
      setFakeTimes(question);
  }

  assignSteps(question);
 
        const response = await fetch(`${BASE_URL}/upload_math`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token,question})
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

function setFakeTimes(question) {
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
function assignSteps(question) {
  for (let i = 0; i < question.eqs.length; i++) {
    const eq = question.eqs[i];
    eq.step = i +1;
  }

}

function checkFinalTimings(eqs) {
  // Rule 1: Ensure eqStartTime of the first step is always 0
  eqs[0].eqStartTime = 0;

  // Loop through the array to check other rules starting with index 1
  for (let i = 1; i < eqs.length; i++) {
    const currentStep = eqs[i];
    const previousStep = eqs[i - 1];

    // Rule 2: Check if the start time of the current step is equal to the end time of the previous step
    if (currentStep.eqStartTime !== previousStep.eqEndTime) {
      toast.push(`Validation error at step ${i + 1}: Start time does not match the end time of the previous step.`);
      return;
    }

    // Rule 3: Check if eqStartTime is not smaller than eqEndTime
    if (currentStep.eqStartTime >= currentStep.eqEndTime) {
      toast.push(`Validation error at step ${i + 1}: eqStartTime is greater than or equal to eqEndTime.`);
      return;
    }

    // Rule 4: Check if fsStartTime and fsEndTime fall within eqStartTime and eqEndTime
    if (
      currentStep.fsStartTime < currentStep.eqStartTime ||
      currentStep.fsEndTime > currentStep.eqEndTime
    ) {
      toast.push(`Validation error at step ${i + 1}: fsStartTime or fsEndTime is not within the range of eqStartTime and eqEndTime.`);
      return;
    }

    // Rule 5: Check if fsStartTime is smaller than fsEndTime
    if (currentStep.fsStartTime >= currentStep.fsEndTime) {
      toast.push(`Validation error at step ${i + 1}: fsStartTime is greater than or equal to fsEndTime.`);
      return;
    }

    // Rule 6: Check if fs.length is 0, set fsStartTime and fsEndTime to null
    if (currentStep.fs.length === 0) {
      currentStep.fsStartTime = null;
      currentStep.fsEndTime = null;
    }
  }

  // All rules passed
  return true;
}
