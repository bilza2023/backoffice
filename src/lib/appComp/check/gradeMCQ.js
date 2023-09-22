
import getQuestionCorrectOptions from "../../../routes/analytics/pure/getQuestionCorrectOptions";

export default function gradeMCQ(answer,quiz) {
    const correctOptions = getQuestionCorrectOptions(quiz,answer.questionId);
    if (answer.multiSelect === false) {
        answer.marksObtained = singleSelect(answer,correctOptions);
    } else {
        answer.marksObtained = multiSelect(answer,correctOptions);
    }    
}

function singleSelect(answer,correctOptions) {
    
    if (answer.selectedOptions[0] === correctOptions[0]) {
        return 10;
    } else {
        return 0;
    }
}

function multiSelect(answer,correctOptions) {
    // let marksPerOption = Math.ceil(answer.marks / correctOptions.length);
    let marksPerOption = Math.ceil(3.3);
    let marks = 0;
    for (let i = 0; i < answer.selectedOptions.length; i++) {
        if (correctOptions.includes(answer.selectedOptions[i])) {
            marks += marksPerOption;
        } else {
            marks -= marksPerOption;
        }
    }
    return Math.max(marks, 0);
}
