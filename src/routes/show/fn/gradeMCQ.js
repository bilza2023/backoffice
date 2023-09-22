//@ts-nocheck

//const question = {
//       "id": "9e1e93ed-e25f-4f7d-8d29-395632ecf827",
//       "required": false,
//       "content": "",
//       "explanation": "",
//       "marks": 0,
//       "questionType": "SurveyMCQ",
//       "tags": [],
//       "_id": {
//         "$oid": "64d73403c9835949e0ec4a90"
//       },
//       "__t": "SurveyMCQ",
//       "multiSelect": false,
//       "selectedOptions": [],
//       "correctOptions": [
//         "31576360-28eb-4930-aa66-a60d9a1c1f1e"
//       ],
//       "displayOptions": "bars",
//       "options": [
//         {
//           "id": "31576360-28eb-4930-aa66-a60d9a1c1f1e",
//           "content": "Option One",
//           "_id": "64d73403c9835949e0ec4a91"
//         },
//         {
//           "id": "b57db87d-bab0-4378-81b9-ced81ed10832",
//           "content": "Option Two",
//           "_id": "64d73403c9835949e0ec4a92"
//         }
//       ]
//     }


export default async function gradeMCQ(question){
    if(question.multiSelect){
    return await gradeMultiSelect(question);
    }else {
    return await gradeSingleSelect(question);
    }

}


async function gradeSingleSelect(question){
    if (question.selectedOptions[0] === question.correctOptions[0]){
        return 100;
    }else {
        return 0;
    }
}

async function gradeMultiSelect(question) {
    // Step 1: Count the number of question.correctOptions and divide 100 / (number of question.correctOptions) to get marks per correct option.
    const marksPerOption = 100 / question.correctOptions.length;

    // Step 2: Find out how many of the selected options by the student are actually present in question.correctOptions. These are the correct answers.
    let correctAnswers = 0;
    for (const option of question.selectedOptions) {
        if (question.correctOptions.includes(option)) {
            correctAnswers++;
        }
    }

    // Step 3: Multiply the number of correct answers with marks for each option and return the value.
    return (correctAnswers * marksPerOption).toFixed(2);
}
