
//@ts-nocheck
import xToPerc  from './xToPerc';
import yToPerc  from './yToPerc';

import {pointsStore} from '../../store';
import {updateStoreArray} from '$lib/util';


export default function getPoint(event,canvas) {
//  debugger;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    // Log the coordinates or perform any other action
    const xx = (xToPerc(canvas,x).toFixed(0));
    const yy = (yToPerc(canvas,y).toFixed(0));
    //=== store array
    updateStoreArray(pointsStore , { x: xx, y: yy });

    console.log(`Clicked at X: ${xx}, Y: ${yy}`);
  }