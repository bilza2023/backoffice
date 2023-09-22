//@ts-nocheck
import Div from "./div.js";
import TableObj from "./tableObj.js";
import ImageObj from "./imageObj.js";
import Pre from "./pre.js";
import ListObj from "./listObj.js";
import YoutubeObj from "./youtubeObj.js";
//////////////////////////////////////
export default class Content {

constructor(data = {}) {
    this.divs = data.divs || [];
    this.images = data.images || [];
    this.lists = data.lists || [];
    this.pres = data.pres || [];
    this.tables = data.tables || [];
    this.youtubes = data.youtubes || [];
    this.sortOrder = data.sortOrder || [];
}

addDiv(payload='New content'){ 
        const newDiv = new Div(payload);
        this.divs.push(newDiv); 
        this.sortOrder.push(newDiv.id);
        }
//=============|
addTable(){
    const data = new TableObj();//no payload for a new table
    this.tables.push(data);
    this.sortOrder.push(data.id);
}

addImage(){
    // debugger;
    const data = new ImageObj();
    this.images.push(data);
    this.sortOrder.push(data.id);
    // console.log('content after image added' , content);
}

addPre(){
    const data = new Pre();
    this.pres.push(data);
    this.sortOrder.push(data.id);
}

addList(){
    const data = new ListObj();
    this.lists.push(data);
    this.sortOrder.push(data.id);
}

addYoutube( ){
    const data = new YoutubeObj();
    this.youtubes.push(data);
    this.sortOrder.push(data.id);
}

//=============|
}//============|
//=============|