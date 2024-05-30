<script>
    //@ts-nocheck
    import { Icons } from "../../../../util";   
    import { SmallBtnToolbar } from "$lib/cmp"; 
    export let addRay;
    export let addText;
    // export let addGrid;
    export let addRect;
    export let addLine;
    export let addCircle;
    export let addEllipse;
    export let addDot;
    export let addRepeatDot;
    export let addRepeatText;
    // export let addImage;
    // export let addXYCross;
    export let addTri;
    export let addBezier;
    export let addLines;
    export let addPara;
    export let addSprite;
    // export let addPolygon;
    export let addAngleSymbol;

    export let toggleShowCanvas;
    // export let toggleIgnoreShowAt;
    // export let ignoreShowAt;
</script>

<div class="flex">
    <SmallBtnToolbar clk={toggleShowCanvas} icon={Icons.CANVAS} title="Canvas" />

    <!-- Core methods -->
    <SmallBtnToolbar clk={addLine} icon={Icons.LINE} title="Line" />
    <SmallBtnToolbar clk={addCircle} icon={Icons.CIRCLE} title="Circle" />
    <SmallBtnToolbar clk={addEllipse} icon={Icons.ELLIPSE} title="Ellipse" />
    <SmallBtnToolbar clk={addRect} icon={Icons.RECTANGLE} title="Rect" />
    <SmallBtnToolbar clk={addBezier} icon={Icons.BAZIER} title="Bezier" />
    <!-- <SmallBtnToolbar clk={addPolygon} icon={Icons.POLYGON} title="Polygon" /> -->
    <!-- <SmallBtnToolbar clk={addImage} icon={Icons.IMAGE} title="Image" /> -->
    <SmallBtnToolbar clk={addText} icon={Icons.TEXT} title="Text" />
    <SmallBtnToolbar clk={addPara} icon={Icons.TEMPLATE} title="Para" />

    <!-- Extended from Core -->
    <SmallBtnToolbar clk={addTri} icon={Icons.TRIANGE} title="Tri" />
    <SmallBtnToolbar clk={addRay} icon={Icons.SUNRISE} title="Ray" />
    <SmallBtnToolbar clk={addDot} icon={Icons.DOT} title="Dot" />
    <!-- <SmallBtnToolbar clk={addGrid} icon={Icons.GRID} title="Grid" /> -->
    <SmallBtnToolbar clk={addRepeatDot} icon={`${Icons.DOT}${Icons.DOT}`} title="R-Dot" />
    <SmallBtnToolbar clk={addRepeatText} icon={`${Icons.TEXT2}${Icons.TEXT2}`} title="R-Text" />
    <SmallBtnToolbar clk={addLines} icon={Icons.LINE} title="Lines" />
    <!-- <SmallBtnToolbar clk={addXYCross} icon={Icons.XYCROSS} title="XY Cross" /> -->
    <SmallBtnToolbar clk={addAngleSymbol} icon={Icons.ANGLE} title="Angle" />
    <SmallBtnToolbar clk={addSprite} icon={Icons.SPRITE} title="Sprite" />
</div>
