
import { get } from 'svelte/store';
import { templatesStore,testsStore,runsStore,studentsStore ,classStore} from '$lib/cmn/appStore';


export default class LocalStorage{

static updateTemplates(){
localStorage.setItem('templates', JSON.stringify(get(templatesStore)));
}//updateTemplates

static updateTests(){
localStorage.setItem('tests', JSON.stringify(get(testsStore)));
}//updateTests

static updateRuns(){
localStorage.setItem('runs', JSON.stringify(get(runsStore)));
}//updateRuns

static updateStudents(){
localStorage.setItem('students', JSON.stringify(get(studentsStore)));
}//updateStudents

 static updateClasses(){
localStorage.setItem('classes', JSON.stringify(get(classStore)));
}//updateClasses

////////////////////////////////////////
////////////////////////////////////////
}//local storage class
