//@ts-nocheck


export default function syllabusContent(questions){

    const chapters = getUniqueChapters(questions); 
    const chaptersObjs = getChaptersObjs(chapters); 
       addExtoChapters(chaptersObjs,questions); 
       removeExtraEx(chaptersObjs); 
       ExtoExObj(chaptersObjs); 
       addExReqQs(chaptersObjs,questions); 
    // console.log("chaptersObjs" , chaptersObjs);
return chaptersObjs;
}
function addExReqQs(chaptersObjs , questions){
    //=questions loop
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        //=xchapters loop
        for (let j = 0; j < chaptersObjs.length; j++) {
        const chaptersObj = chaptersObjs[j];

            if (question.chapter == chaptersObj.chapter){
                if (question.isSpecial && (question.partNo.exercise == "" || question.partNo.exercise == undefined)){
                        
                        chaptersObj.specialQuestions.push(question);
                        continue;
                }
                //=xchapters loop
                for (let k = 0; k < chaptersObj.exObj.length; k++) {
                    const exObj = chaptersObj.exObj[k];

                    if (question.isSpecial && question.partNo.exercise == exObj.name){
                        exObj.specialQuestions.push(question);
                    }

                    if (!question.isSpecial && question.partNo.exercise == exObj.name){
                        exObj.questions.push(question);
                    }
                }

            }
        }
    }
}

function ExtoExObj(chaptersObjs){
// debugger;
    for (let i = 0; i < chaptersObjs.length; i++) {
        const chaptersObj = chaptersObjs[i];
        chaptersObj.exObj = [];
        for (let j = 0; j < chaptersObj.exercises.length; j++) {
            const exercise = chaptersObj.exercises[j];
            const o = {name:exercise , questions:[] , specialQuestions:[]};
            chaptersObj.exObj.push(o);
        }
    }

}
function removeExtraEx(chaptersObjs) {
    for (let i = 0; i < chaptersObjs.length; i++) {
        const chaptersObj = chaptersObjs[i];
        chaptersObj.exercises = removeDuplicates(chaptersObj.exercises);
    }
}

function removeDuplicates(inputArray) {
    const uniqueValues = new Set();
    const result = [];
    for (const value of inputArray) {
        if (value !== "" && !uniqueValues.has(value)) {
            result.push(value);
            uniqueValues.add(value);
        }
    }
    return result;
}
function addExtoChapters(chaptersObjs,questions){
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        for (let index = 0; index < chaptersObjs.length; index++) {
            const chaptersObj = chaptersObjs[index];
            if (chaptersObj.chapter == question.chapter){
            chaptersObj.exercises.push(question.partNo.exercise);
            }
        }
    }
}
function getUniqueChapters(questions) {
    const uniqueChapters = new Set();
    questions.forEach((question) => {
      uniqueChapters.add(question.chapter);
    });
    return Array.from(uniqueChapters);
  }
function getChaptersObjs(chapters){
const chaptersObjs = [];
    for (let i = 0; i < chapters.length; i++) {
        const chapter = chapters[i];
        const o = {}
        o.exercises = [];
        o.specialQuestions = [];
        o.chapter = chapter;
        chaptersObjs.push(o);
    }
return chaptersObjs;
}  