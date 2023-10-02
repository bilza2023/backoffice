//@ts-nocheck
import {runningTime,startTime,interval,isPlaying} from "./store.js";
import {get} from "$lib/util";

function start(){
  isPlaying.set(true);
  interval.set(setInterval(updateTimeDiff,1000));  
  startTime.set(Date.now());  
}

function stop(){ 
    isPlaying.set(false);
    clearInterval(get(interval));
    runningTime.set(0);
}
function updateTimeDiff() {
    // debugger;
    const currentTime = Date.now();
    const timeDiff = currentTime - get(startTime);
    runningTime.set(Math.floor(timeDiff / 1000));
    console.log('runningTime' , get(runningTime))
}

export {start,stop,updateTimeDiff}