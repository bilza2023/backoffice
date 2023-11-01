
onMount(async () => {
  try{
    //=============================  
            const token = localStorage.getItem('token');
            const resp = await fetch( `${BASE_URL}/be/fbise_math9th_syllabus`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            }
            });
            if (resp.ok){
            // debugger;
              const data = await resp.json();
              questions = data.questions;
              console.log("questions",questions);
              isLogin = true;
                  selectedChapter = 1
              total_questions = questions.length;
            //   console.log("questions",questions);
            }else {
             const data = await resp.json();
              toast.push(data.message);
            }
  } catch (e) {
      //  toast.push('failed to load');
  }      
});
function getUrl(question){
 let url;
 if (question.questionType == "eqs"){
    url = `/eqs?id=${question._id}`;
 }else{
    url = `/grid?id=${question._id}`;
 }
return url; 
} 