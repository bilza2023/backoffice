//@ts-nocheck


export default class Sprite{

constructor(url){
    this.img = new Image();
    this.img.src = url;
    this.url = url;
    this.data = [];
    this.selectedData = null;
}
addItem(name,sx,sy,sw,sh){
    this.data.push({
        name,
        sx,
        sy,
        sw,
        sh,
    });
}

applyItem(name){

    for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i];
        if(item.name == name){
                this.selectedData = item;
        }
    }
}


}