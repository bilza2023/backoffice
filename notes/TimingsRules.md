I have an array of objects "eqs". This array contain 1 math question and The objects are the steps of this math question.  

Each object (step of the question) has following fields

    eqStartTime = The start time for that step of the question.
    eqEndTime = The end time for that step of the question
    fsStartTime = The start time for images to be displayed on the board (for each step)
    fsEndTime = The end time for images to be displayed on the board.
    fs[] = This array contain images for full screen display.

I want to write a javascript function that takes in eqs array and check if any of the following rules have been violated.

    1 : The start time of first step (eqs[0].eqStartTime = 0); The function should alwasy set it = 0.
    2. The start time of next step should always be = to the eqEndTime of the previous step.(so that there is no gap and next step begin where the previous step ends). 
    3. he eqStartTime can not be smaller than eqEndTime.
    4. The fsStartTime and fsEndTime of each step should fall with in the eqStartTime and eqEndTime of that step.
    5. Each step fsStartTime should be smaller than fsEndTime. The start time can not be later than the end time.
    6. if fs.length =0. In that case we will not consider  fsStartTime and fsEndTime since we will be showing blank screen since there are no content.in that case fsStartTime and fsEndTime should both be null

example for Rule 6
    item x : 
        eqStartTime : 0
        eqEndTime : 10
        fsStartTime : null
        fsEndTime : null
        fs.length = 0

 for example Eqs:
    item 1 : 
        eqStartTime : 0
        eqEndTime : 10
        fsStartTime : 4
        fsEndTime : 8
        fs.length = 2
    item 2 : 
        eqStartTime : 10
        eqEndTime : 20
        fsStartTime : 15
        fsEndTime : 18
        fs.length = 2
    item 3 : 
        eqStartTime : 20
        eqEndTime : 30
        fsStartTime : 34
        fsEndTime : 38
        fs.length = 2
function validateEqs(eqs) {
  // Rule 1: Ensure eqStartTime of the first step is always 0
  eqs[0].eqStartTime = 0;

  // Loop through the array to check other rules starting with index 1
  for (let i = 1; i < eqs.length; i++) {
    const currentStep = eqs[i];
    const previousStep = eqs[i - 1];

    // Rule 2: Check if the start time of the current step is equal to the end time of the previous step
    if (currentStep.eqStartTime !== previousStep.eqEndTime) {
      throw new Error(`Validation error at step ${i + 1}: Start time does not match the end time of the previous step.`);
    }

    // Rule 3: Check if eqStartTime is not smaller than eqEndTime
    if (currentStep.eqStartTime >= currentStep.eqEndTime) {
      throw new Error(`Validation error at step ${i + 1}: eqStartTime is greater than or equal to eqEndTime.`);
    }

    // Rule 4: Check if fsStartTime and fsEndTime fall within eqStartTime and eqEndTime
    if (
      currentStep.fsStartTime < currentStep.eqStartTime ||
      currentStep.fsEndTime > currentStep.eqEndTime
    ) {
      throw new Error(`Validation error at step ${i + 1}: fsStartTime or fsEndTime is not within the range of eqStartTime and eqEndTime.`);
    }

    // Rule 5: Check if fsStartTime is smaller than fsEndTime
    if (currentStep.fsStartTime >= currentStep.fsEndTime) {
      throw new Error(`Validation error at step ${i + 1}: fsStartTime is greater than or equal to fsEndTime.`);
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
