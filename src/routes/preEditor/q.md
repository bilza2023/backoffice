i am saving some data into localstorage here is the code and Schema
//@ts-nocheck
import {uuid} from '$lib/util';

export default function save(id , slides){
debugger;
let presentations = JSON.parse(localStorage.getItem('presentations'));

if(presentations == null){
 presentations = [ 
    {slides , title: 'New Presentation' , id : uuid()},
 ];
}


// localStorage.setItem('presentations',JSON.stringify(presentations));
}

 I want of the presentation with id == id exists only then its presentation.slides be updated. 