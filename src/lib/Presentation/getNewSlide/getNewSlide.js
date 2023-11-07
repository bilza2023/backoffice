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

function addBlinkingMessage(){
const newSlide = newSlideData("BlinkingMessage");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem(
    '',
    `
    In web development, "Lorem Ipsum" is often used as a placeholder text. It's not directly related to code, but it's a common practice to use it for filling content areas in website mockups before real content is available. This helps in designing layouts and testing how text fits within elements.
    `));
    return newSlide;
}

export default function getNewSlide(type) {
 let slide;
 switch (type) {
    case 'HdgImg':
    slide = addHdgImg();
    break;

    case 'BlinkingMessage':
    slide = addBlinkingMessage();
    break;
 
    default:
    slide = null;
    break;
 }
return slide;
}