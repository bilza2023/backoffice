//@ts-nocheck


export default async function quizStringifiedQsToArray(quiz){
        for (let i = 0; i < quiz.questions.length; i++) {
            quiz.questions[i].content  = await stringToArray(quiz.questions[i].content);
        }
return quiz;
}
//This function return a vlaid Array or [].Every content of a question is an array of objects.
async function stringToArray(content){
 debugger;
 try{
 let items1 = await JSON.parse(content);
 let items2 = await JSON.parse(items1);
 let items = await JSON.parse(items2);
    if (items.length > 0){
        return items;
    }else {
        return [];
    }
 }catch(e){
        return [];
    }
}