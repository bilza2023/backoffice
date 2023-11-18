//@ts-nocheck
import {toast} from "$lib/util";
import { BASE_URL } from '$lib/util';

export  default async function save(question){
  try {
  const token = localStorage.getItem('token');
  
const resp = await fetch( `${BASE_URL}/be/update` ,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify( {question} )
  });
        if (resp.ok) {
            toast.push('Data uploaded successfully');
        }else {
              const data = await  resp.json();
        toast.push(data.message);
        } 
      }catch (e) {
              toast.push('Unknown Error');
      }
}
//////////////////////////////////////////////////////

function checkFinalTimings(items) {
  
  // Rule 1: Ensure startTime of the first step is always 0
  items[0].extra.startTime = 0;
  items[items.length - 1].extra.endTime = 5000; // a larage number which will later be replaces before run

  // Loop through the array to check other rules starting with index == 1
  for (let i = 1; i < items.length; i++) {
    const currentStep = items[i].extra;
    const previousStep = items[i - 1].extra;

    // Rule 2: Check if the start time of the current step is equal to the end time of the previous step. It should be same ==>start time of the current step to be equal to the end time of the previous step
    if (currentStep.startTime !== previousStep.endTime) {
      toast.push(`Validation error at step ${i + 1}: Start time does not match the end time of the previous step.`);
      return;
    }

    // Rule 3: Check if startTime is not smaller than endTime
    //if step-1 fullscreen ends at 20 and step also ends at 20 the next step -2 can also start at 20 no problems
//This if conditon check if the rule is violated
    if (currentStep.startTime >= currentStep.endTime) {
      toast.push(`Validation error at step ${i + 1}: startTime is greater than or equal to endTime.`);
      return;
    }
 // Rule 4: Check if fsStartTime and fsEndTime fall within startTime and endTime. BUT check only if fs has some thing
    if (currentStep.fs.length > 0){
      if (
        currentStep.fsStartTime < currentStep.startTime ||
        currentStep.fsEndTime > currentStep.endTime
      ) {
        toast.push(`FS timings error at step ${i + 1}: fsStartTime or fsEndTime is not within the range of startTime and endTime.`);
        return;
      }
    }
    // Rule 5: Check if fsStartTime is smaller than fsEndTime
    if (currentStep.fs.length > 0){
    if (currentStep.fsStartTime >= currentStep.fsEndTime) {
      toast.push(`Validation error at step ${i + 1}: fsStartTime is greater than or equal to fsEndTime.`);
      return;
    }
    }

    // Rule 6: Check if fs.length is 0, set fsStartTime and fsEndTime to null
    if (currentStep.fs.length === 0) {
      currentStep.fsStartTime = null;
      currentStep.fsEndTime = null;
    }
  }
  toast.push('Timings checked successfully');
  return true;
}
