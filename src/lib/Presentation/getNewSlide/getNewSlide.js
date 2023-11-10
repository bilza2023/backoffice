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
 
    case 'HdgList':
    slide = addHdgList();
    break;
    case 'TblStr':
    slide = addTblStr();
    break;

    case 'Eqs':
    slide = addEqs();
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
function addHdgList(){
const newSlide = newSlideData("HdgList");
    newSlide.uuid = uuid();
    // newSlide.items.push(getNewItem('graph','img'));
    // newSlide.items.push(getNewItem('This is a graph of the company','caption'));
    newSlide.slideExtra.push({key : "data" , value: "This is some data"});
    newSlide.slideExtra.push({key : "rows" , value:2});
    return newSlide;
}

function addTblStr(){
const newSlide = newSlideData("TblStr");
    newSlide.uuid = uuid();
    // newSlide.items.push(getNewItem('graph','img'));
    newSlide.slideExtra.push({key : "data" , value: "first,second"});
    return newSlide;
}

function addEqs(){
const newSlide =  {
  startTime : 0,    //This is slide start and end time
  endTime : 50,    
  type : 'Eqs',    
  slideExtra : [],    
  /////////////////
 items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            step : 1,
            code : 'This is a heading',
            startTime : 0,//This is item start and end time
            endTime : 10,
            sp:[ 
                  {code : 'Step one', type: 'text', },
                  {code : 'Step one', type: 'text', },
                  ],
            fs:[
                  {code : 'This is full Screen', type: 'text', }
            ]
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            step : 2,
            code : 'Step Two',
            startTime : 10,
            endTime : 20,
            sp:[ 
                  {code : 'Step Two', type: 'text', },
                  {code : 'Step Two', type: 'text', },
                  ],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            step : 3,
            code : '4^2',
            startTime : 20,
            endTime : 30,
            sp:[ 
                  {code : 'Step Three', type: 'text', },
                  {code : 'Step Three', type: 'text', },
                  ],
            fs:[]
      }},
  ]

};
    newSlide.uuid = uuid();
    return newSlide;
}
//////////////////////////////////////////////////
