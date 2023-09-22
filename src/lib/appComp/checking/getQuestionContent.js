//@ts-nocheck
export default function getQuestionContent(survey, id) {
  const question = survey.questions.find(q => q.id === id);
  return question.content.substring(0,50) ;
}