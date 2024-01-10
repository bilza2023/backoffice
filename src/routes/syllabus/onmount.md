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
              
              console.log('questions' , questions);

              isLogin = true;
                  selectedEx ="1.1";
                  selectedChapter = 1
              total_questions = questions.length;
            }else {
             const data = await resp.json();
              toast.push(data.message);
            }
  } catch (e) {
       toast.push('failed to load');
  }      
});