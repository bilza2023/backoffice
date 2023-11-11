import {BASE_URL} from '$lib/util';

export default async function getSyllabus() {
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
        return  data.questions;
    }else {
        return false;
    }
 }catch (e){
    console.error(e);
 }
}