//@ts-nocheck
export default function getQuestionCorrectOptions(survey, id) {
  const question = survey.questions.find(q => q.id === id);
  //correctOptions is an array and incase of single select we use just its index 0
  return question.correctOptions;
}