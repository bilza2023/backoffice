//@ts-nocheck
import {uuid} from '$lib/util';

export default function createNewPresentation(){
debugger;
let presentations = JSON.parse(localStorage.getItem('presentations'));

if(presentations == null){
presentations = [];
}
const newPresentation = {slides:[] , title: 'New Presentation' , id : uuid()}; 
 presentations.push( newPresentation );
//--imp
localStorage.setItem('presentations', JSON.stringify(presentations));

return newPresentation;
}