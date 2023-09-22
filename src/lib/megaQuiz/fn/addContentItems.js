//@ts-nocheck
import getDivData from './getDivData.js';
import tableData from './tableData.js';
import imageData from './imageData.js';
import preData from './preData.js';
import listData from './listData.js';
import youtubeData from './youtubeData.js';


////////////////////////////////////////

function addDiv( content,  payload){
    // debugger;
    const data = getDivData(payload);
    content.divs.push(data);
    content.sortOrder.push(data.id);
}

function addTable(content){
    const data = tableData();
    content.tables.push(data);
    content.sortOrder.push(data.id);
}

function addImage(content){
    // debugger;
    const data = imageData();
    content.images.push(data);
    content.sortOrder.push(data.id);
    // console.log('content after image added' , content);
}

function addPre(content){
    const data = preData();
    content.pres.push(data);
    content.sortOrder.push(data.id);
}

function addList(content){
    const data = listData();
    content.lists.push(data);
    content.sortOrder.push(data.id);
}

function addYoutube(content){
    const data = youtubeData();
    content.youtubes.push(data);
    content.sortOrder.push(data.id);
}

/////////////------------------------------
export  {addDiv,addTable,addImage,addPre,addList,addYoutube}