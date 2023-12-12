
//@ts-nocheck
import xToPerc  from './xToPerc';
import yToPerc  from './yToPerc';



export default function getPoint(event,canvas) {
//  debugger;
    // Get the clicked coordinates
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Log the coordinates or perform any other action
    console.log(`Clicked at X: ${(xToPerc(canvas,x).toFixed(0))}, Y: ${(yToPerc(canvas,y)).toFixed(0)}`);
  }