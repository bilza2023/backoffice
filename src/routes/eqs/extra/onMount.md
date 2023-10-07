onMount(async () => {
  try {
   //http://localhost/math?id=6508bff7c970727df5e0ac85
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/math?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        // debugger;
        const data = await resp.json();
        question  = data.mathQuestion //===> important
        eqs = question.eqs;
        questionDetails = question.filename;

    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    // toast.push('Unknown Error');
    // console.error(error);
  }
});
