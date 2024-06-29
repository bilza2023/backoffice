<script>
    //@ts-nocheck
    import { Icons } from "$lib/util";   
    import { SmallBtnToolbar } from "$lib/cmp"; 
    import Groupdiv from "./Groupdiv.svelte"; 
    export let items;
    export let pasteItem;
    import { addEllipse,addCircle,addBezier,addRect,addAngleSymbol,addDot,addGrid,addPolygon,addTri,addLines,addLine,addRay,addRepeatDot,addRepeatText,addPara,addText,addSprite,addSysImage,addImage} from "./addFunctions";

    let groupDiv = false;

    function showGroup(){groupDiv = !groupDiv;}

/////////////////////////////////////////
export let toggleShowCanvas;

</script>

<div class="flex">
    <SmallBtnToolbar clk={toggleShowCanvas} icon={Icons.CANVAS} title="Canvas" />

    <!-- Core methods -->
    <SmallBtnToolbar clk={()=>addLine(items)} icon={Icons.LINE} title="Line" />
    <SmallBtnToolbar clk={()=>addCircle(items)} icon={Icons.CIRCLE} title="Circle" />
    <SmallBtnToolbar clk={()=>addEllipse(items)} icon={Icons.ELLIPSE} title="Ellipse" />
    <SmallBtnToolbar clk={()=>addRect(items)} icon={Icons.RECTANGLE} title="Rect" />
    <SmallBtnToolbar clk={()=>addBezier(items)} icon={Icons.BAZIER} title="Bezier" />
    <SmallBtnToolbar clk={()=>addText(items)} icon={Icons.TEXT} title="Text" />
    <SmallBtnToolbar clk={()=>addPara(items)} icon={Icons.TEMPLATE} title="Para" />

    <!-- Extended from Core -->
    <SmallBtnToolbar clk={()=>addTri(items)} icon={Icons.TRIANGE} title="Tri" />
    <SmallBtnToolbar clk={()=>addRay(items)} icon={Icons.SUNRISE} title="Ray" />
    <SmallBtnToolbar clk={()=>addDot(items)} icon={Icons.DOT} title="Dot" />
    <SmallBtnToolbar clk={()=>addRepeatDot(items)} icon={`${Icons.DOT}${Icons.DOT}`} title="R-Dot" />
    <SmallBtnToolbar clk={()=>addRepeatText(items)} icon={`${Icons.TEXT2}${Icons.TEXT2}`} title="R-Text" />
    <!-- <SmallBtnToolbar clk={()=>addLines(items)} icon={Icons.RULER} title="Lines" /> -->
    <SmallBtnToolbar clk={()=>addAngleSymbol(items)} icon={Icons.ANGLE} title="Angle" />
    <SmallBtnToolbar clk={()=>addSprite(items)} icon={Icons.SPRITE} title="Sprite" />
    <!-- <SmallBtnToolbar clk={()=>addSysImage(items)} icon={Icons.TV} title="SysImage" /> -->
    <SmallBtnToolbar clk={()=>addImage(items)} icon={Icons.MAP} title="Image" />
    <SmallBtnToolbar clk={showGroup} icon={Icons.MAGICWAND} title="Group" />
    <SmallBtnToolbar clk={pasteItem} icon={Icons.PALETTE} title="Paste" />
</div>

{#if groupDiv}

    <Groupdiv {items}/>

{/if}