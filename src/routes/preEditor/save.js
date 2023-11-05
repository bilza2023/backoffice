//@ts-nocheck


export default function save(slides){
debugger;
let presentations = JSON.parse(localStorage.getItem('presentations'));

if(presentations == null){presentations=[];}

presentations.push(slides);

localStorage.setItem('presentations',JSON.stringify(presentations));

console.log(slides);

}