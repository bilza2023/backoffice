//@ts-nocheck


function findIn( arrayName, id,content,rez ){
    for (let i = 0; i < content[arrayName].length; i++) {
        const item = content[arrayName][i];
        if (item.id == id){
            rez.push(item);
            return;
        } 
    }
    return;
}

//////////////////////////////////////////////
export default function sortContent(content) {
    // debugger;
    const rez = [];
    for (let i = 0; i < content.sortOrder.length; i++) {
        const sortOrderId = content.sortOrder[i];
            findIn( 'divs' ,sortOrderId ,content ,rez);
            findIn( 'images' ,sortOrderId ,content,rez);
            findIn( 'lists' ,sortOrderId ,content,rez);
            findIn( 'pres' ,sortOrderId ,content,rez);
            findIn( 'tables' ,sortOrderId ,content,rez);
            findIn( 'youtubes' ,sortOrderId ,content,rez);

    }
    return rez;
} 