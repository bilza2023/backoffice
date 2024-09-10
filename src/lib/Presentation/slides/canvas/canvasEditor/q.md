

I have CanvasEditor.svelte
which has "items" array of objects


export let items;

I also have in this component

==> This does not get triggered when the addFunctions add item to the items array
$: {
  items;
  console.log("$itemsStore" ,items);
  }


  I have further send items to 

<EditorToolbar
bind:items={items}
bind:showSaveSlideTemplateDialogue ={showSaveSlideTemplateDialogue}
{toggleShowCanvas}
{toggleIgnoreShowAt}
{ignoreShowAt}
{pasteItem}

where I use functions to add items into the items array


<div class="flex">
    <SmallBtnToolbar clk={toggleShowCanvas} icon={Icons.CANVAS} title="Canvas" />

    <!-- Core methods -->
    <SmallBtnToolbar clk={()=>addLine(items)} icon={Icons.LINE} title="Line" />
    <SmallBtnToolbar clk={()=>addCircle(items)} icon={Icons.CIRCLE} title="Circle" />
    <SmallBtnToolbar clk={()=>addEllipse(items)} icon={Icons.ELLIPSE} title="Ellipse" />
    <SmallBtnToolbar clk={()=>addRect(items)} icon={Icons.RECTANGLE} title="Rect" />
    <!-- <SmallBt

Finally I have add Function which actually add items
function addNewItem(data,items){
  const newItem = getNewItem();
  newItem.extra = data;      
  items.unshift(newItem);      
  items = [...items];
}

function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
}
function addReqExtraFields(obj,command,color="black"){
  obj.translate = true;
  obj.command = command;
  obj.name = command + "_" +randNo();
  
  obj.color = getProp(color),
  // obj.setCommands = [];
  //hide at is used when it is larger than showAt. for other use cases use other variables.e.g use "visibility for blinking"
  // obj.hideAt = 0;
  obj.showAt = 0;
  // obj.visibility = 0;
  obj.globalAlpha = getProp(1);

  obj.gap= getProp(0);
  obj.dash= getProp(0);

  obj.shadowOffsetX = 0;
  obj.shadowOffsetY = 0;
  obj.shadowColor = "gray";
  obj.shadowBlur = 0;
  // === TOTAL 14 attrib 3Xsystem (name,command,translate) 1xcolor 4xvisibiity etc 2xdash-gap 4x shadow 
  return obj;
}
//////////////////////////////////
////////======Add Functions 
//////////////////////////////////

function addLine(items){
  const obj ={
            "x1": getProp(20),
            "y1": getProp(10),
            "x2": getProp(500),
            "y2": getProp(200),
            "lineWidth": getProp(2),              
  };
  addNewItem(addReqExtraFields(obj,"line","red"),items); 
}

function addLines(items){
  const obj ={
            "x": 3,
            "y": 3,
            "arr": "2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2",
            "lineWidth": getProp(1),
  };
  addNewItem(addReqExtraFields(obj,"lines","yellow"),items); 
}

function addRect(items){
  // debugger;
    const obj = {
          "x": getProp(100),
          "y": getProp(100),
          "width": getProp(100),
          "height": getProp(100),
          "filled": getProp(false),
          "lineWidth": getProp(1),
          };
          addNewItem(addReqExtraFields(obj,"rect","red"),items); 
  }
function addText(items){
  const obj ={
    "text": getProp("Hello"),
    "x": getProp(100),
    "y": getProp(100),
    "fontSize": getProp(20),
    "font": "20px Arial",
  };
addNewItem(addReqExtraFields(obj,"text","black"),items); 
}




==> This does not get triggered when the addFunctions add item to the items array
$: {
  items;
  console.log("$itemsStore" ,items);
  }