//@ts-nocheck
import {toast} from "$lib/util";
import { BASE_URL } from '$lib/util/config';

export  default async function save(question , eqs){
  try {

 //==MUst 3 steps
  question.eqs =[];
  question.eqs =eqs;
  assignSteps(question);
//--fill is no staus , fill is just having filledBy field with a name  
  if ( question.status !== "locked" || question.status !== "final" ){
      //filledBy is set at backend
      question.status = 'fill'; //important
      setFakeTimes(question);
  }
  
  if ( question.status == "final" ){
      setEndTimes(question);
      checkFinalTimings(question.eqs)
  }
    // debugger;
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
function setEndTimes(question) {
// debugger;
  for (let i = 0; i < question.eqs.length - 1; i++) {
    const eq = question.eqs[i];
    eq.eqEndTime = question.eqs[i+1].eqStartTime;
  }
  //--set the last time very high so that it does not create problems in checking for now and before play we can set it equal to narration length.
  question.eqs[question.eqs.length-1].eqEndTime = 50000;
}

function setFakeTimes(question) {
  let time = 0;
  for (let i = 0; i < question.eqs.length; i++) {
    const eq = question.eqs[i];
    eq.eqStartTime = time;//eq.eqStartTime of first is always zero
     time += 10;
          if (eq.fs.length >0){
            eq.fsStartTime = time;
            time +=10; 
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
  eqs[eqs.length - 1].eqEndTime = 5000; // a larage number which will later be replaces before run
  // Loop through the array to check other rules starting with index == 1
  for (let i = 1; i < eqs.length; i++) {
    const currentStep = eqs[i];
    const previousStep = eqs[i - 1];

    // Rule 2: Check if the start time of the current step is equal to the end time of the previous step. It should be same ==>start time of the current step tobe equal to the end time of the previous step
    if (currentStep.eqStartTime !== previousStep.eqEndTime) {
      toast.push(`Validation error at step ${i + 1}: Start time does not match the end time of the previous step.`);
      return;
    }

    // Rule 3: Check if eqStartTime is not smaller than eqEndTime
    if (currentStep.eqStartTime >= currentStep.eqEndTime) {
      toast.push(`Validation error at step ${i + 1}: eqStartTime is greater than or equal to eqEndTime.`);
      return;
    }
//==correct: it is > and < so it means if step-1 fullscreen ends at 20 and step also ends at 20 the next step -2 can also start at 20 no problems
    // Rule 4: Check if fsStartTime and fsEndTime fall within eqStartTime and eqEndTime. BUT check only if fs has some thing
    if (currentStep.fs.length > 0){
      if (
        currentStep.fsStartTime < currentStep.eqStartTime ||
        currentStep.fsEndTime > currentStep.eqEndTime
      ) {
        toast.push(`FS timings error at step ${i + 1}: fsStartTime or fsEndTime is not within the range of eqStartTime and eqEndTime.`);
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

  // All rules passed
  return true;
}
