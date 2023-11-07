//@ts-nocheck
import newSlideData from "./newSlideData";
import getNewItem from "./getNewItem";
import uuid from "./uuid.js";

export default function getNewSlide(type) {
 let slide;
 switch (type) {
    case 'HdgImg':
    slide = addHdgImg();
    break;

    case 'BlinkingMessage':
    slide = addBlinkingMessage();
    break;
    
    case 'ImgWCaption':
    slide = addImgWCaption();
    break;
 
    default:
    slide = null;
    break;
 }
return slide;
}
/////////////////////////////////////////////

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
    newSlide.items.push(getNewItem('',''));
    return newSlide;
}

function addImgWCaption(){
const newSlide = newSlideData("ImgWCaption");
    newSlide.uuid = uuid();
    newSlide.items.push(getNewItem('graph','img'));
    newSlide.items.push(getNewItem('This is a graph of the company','caption'));
    return newSlide;
}
//////////////////////////////////////////////////
