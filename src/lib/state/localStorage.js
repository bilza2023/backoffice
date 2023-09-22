
import { get } from 'svelte/store';
import { templatesStore,testsStore,runsStore,studentsStore ,classStore,resultsStore} from '../cmn/appStore.js';


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

static updateResults(){
localStorage.setItem('results', JSON.stringify(get(resultsStore)));
}//updateClasses

static updateAll(){
localStorage.setItem('templates', JSON.stringify(get(templatesStore)));
localStorage.setItem('tests', JSON.stringify(get(testsStore)));
localStorage.setItem('runs', JSON.stringify(get(runsStore)));
localStorage.setItem('students', JSON.stringify(get(studentsStore)));
localStorage.setItem('classes', JSON.stringify(get(classStore)));
localStorage.setItem('results', JSON.stringify(get(resultsStore)));
}//updateClasses

////////////////////////////////////////
////////////////////////////////////////
}//local storage class
