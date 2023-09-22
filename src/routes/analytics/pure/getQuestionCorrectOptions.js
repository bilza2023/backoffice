
export default function getQuestionCorrectOptions(survey, id) {
  const question = survey.questions.find(q => q.id === id);
  return question.correctOptions;
}
