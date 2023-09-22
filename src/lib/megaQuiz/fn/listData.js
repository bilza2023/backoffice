import uuid from './uuid.js';


export default function listData (){ 
    const divItem = {
    id : uuid(),
payload : 'List item One \n List item Two \n List item Three',
type : 'list',

            bgColor : 'gray',
            fontColor : 'white',
            borderColor : 'white',

            borderWidth : 0,
            fontSize : 16,

            textAlign: 'left',
            
            marginX : 0,
            marginY : 0,

// not implemented
            paddingX : 2,
            paddingY : 2,

            opacity : 1,
            borderRadius : 0,
            
            fontStyle : 'italic',
            fontWeight : 'bold',
            borderStyle : 'solid',
            
    }
    
 return divItem;   
}