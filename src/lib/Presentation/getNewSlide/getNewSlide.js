//@ts-nocheck
import newSlideData from "./newSlideData";
import getNewItem from "./getNewItem";
import uuid from "./uuid.js";

function addHdgImg(){
//start time and end time will be re-written once the slide is inserted
    const newSlide = newSlideData("HdgImg");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('The Title','heading'));
    newSlide.items.push(getNewItem('graph','imgSrc'));
    return newSlide;
}

function addBlinkingJumbotron(){
const newSlide = newSlideData("BlinkingJumbotron");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('This is Great','content'));
    return newSlide;
}

export default function getNewSlide(type) {
 let slide;
 switch (type) {
    case 'HdgImg':
    slide = addHdgImg();
    break;

    case 'BlinkingJumbotron':
    slide = addBlinkingJumbotron();
    break;
 
    default:
    slide = null;
    break;
 }
return slide;
}