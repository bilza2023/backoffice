<script>
    //@ts-nocheck
    import { onMount } from "$lib/util";
    import TblStr from "./slides/TblStr.svelte";
    import TblStrEd from "./slides/TblStrEd.svelte";
    import EqPlayer from "./slides/eqs/EqPlayer/EqPlayer.svelte";
    import EqsEditor from "./slides/eqs/EqsEditor/EqsEditor.svelte";
    import CanvasEditor from "./slides/canvas/canvasEditor/CanvasEditor.svelte";
    import CanvasPlayer from "./slides/canvas/canvasPlayer/CanvasPlayer.svelte";
    import GridPlayer from "./slides/grid/gridPlayer/GridPlayer.svelte";
    import GridEditor from "./slides/grid/gridEditor/GridEditor.svelte";
//sprite - sheet    
    import { students } from "./sprite/students";
    import { figs } from "./sprite/figs";
    import { alphabets } from "./sprite/alphabets";
    import { people } from "./sprite/people";
    let spriteImgArray  = []; 

    let bgImages  = []; 

    export let currentSlide;
    export let currentTime;
    export let tcode = "fbise9math";
    export let setPulse = () => {};
    export let displayMode = true;
      
onMount(async()=>{
    // debugger;
    students.img = new Image(); students.img.src = students.url;
    figs.img = new Image(); figs.img.src = figs.url;
    alphabets.img = new Image(); alphabets.img.src = alphabets.url;
    people.img = new Image(); people.img.src = people.url;
    
    spriteImgArray.push(students);
    spriteImgArray.push(figs);
    spriteImgArray.push(alphabets);
    spriteImgArray.push(people);
    //////////////////////////////////////
const paper01 = new Image(); paper01.src = "systemImages/paper01.jpg";
bgImages.push({"name" : "systemImages/paper01.jpg" , "img" : paper01});

const drywall = new Image(); drywall.src = "systemImages/drywall.jpg";
bgImages.push({"name" : "systemImages/drywall.jpg" , "img" : drywall});

const black_board = new Image(); black_board.src = "systemImages/black_board.jpg";
bgImages.push({"name" : "systemImages/black_board.jpg" , "img" : black_board});

const black_board_mat = new Image(); black_board_mat.src = "systemImages/black_board_mat.jpg";
bgImages.push({"name" : "systemImages/black_board_mat.jpg" , "img" : black_board_mat});

const wood = new Image(); wood.src = "systemImages/wood.jpg";
bgImages.push({"name" : "systemImages/wood.jpg" , "img" : wood});

const tinted = new Image(); tinted.src = "systemImages/tinted.jpg";
bgImages.push({"name" : "systemImages/tinted.jpg" , "img" : tinted});

const black_mat = new Image(); black_mat.src = "systemImages/black_mat.jpg";
bgImages.push({"name" : "systemImages/black_mat.jpg" , "img" : black_mat});

const white_mat = new Image(); white_mat.src = "systemImages/white_mat.jpg";
bgImages.push({"name" : "systemImages/white_mat.jpg" , "img" : white_mat});


const granite = new Image(); granite.src = "systemImages/granite.jpg";
bgImages.push({"name" : "systemImages/granite.jpg" , "img" : granite});


const gray_marble = new Image(); gray_marble.src = "systemImages/gray_marble.jpg";
bgImages.push({"name" : "systemImages/gray_marble.jpg" , "img" : gray_marble});


const brown_stone = new Image(); brown_stone.src = "systemImages/brown_stone.jpg";
bgImages.push({"name" : "systemImages/brown_stone.jpg" , "img" : brown_stone});

const gray_stone = new Image(); gray_stone.src = "systemImages/gray_stone.jpg";
bgImages.push({"name" : "systemImages/gray_stone.jpg" , "img" : gray_stone});

const design_old = new Image(); design_old.src = "systemImages/design_old.jpg";
bgImages.push({"name" : "systemImages/design_old.jpg" , "img" : design_old});

const blue_waves = new Image(); blue_waves.src = "systemImages/blue_waves.jpg";
bgImages.push({"name" : "systemImages/blue_waves.jpg" , "img" : blue_waves});


}) ;  
</script>

<!-- TblStr -->
{#if currentSlide.type == "TblStr"}
    {#if displayMode}
        <TblStr
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
        />
    {:else}
        <TblStrEd
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
        />
    {/if}
{/if}

<!-- Eqs -->
{#if currentSlide.type == "Eqs"}
    {#if displayMode}
        <EqPlayer
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
            {setPulse}
        />
    {:else}
        <EqsEditor
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
            {currentTime}
            startTime={currentSlide.startTime}
        />
    {/if}
{/if}

<!-- grid -->
{#if currentSlide.type == "grid"}
    {#if displayMode}
        <GridPlayer
            pulse={currentTime}
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            items={currentSlide.items}
            slideExtra={currentSlide.slideExtra}
            {setPulse}
        />
    {:else}
        <GridEditor
            bind:items={currentSlide.items}
            bind:slideExtra={currentSlide.slideExtra}
            {currentTime}
        />
    {/if}
{/if}

<!-- CanvasEditor -->
{#if currentSlide.type == "canvas"}
    {#if displayMode }
        <CanvasPlayer
            {currentTime}
            items={currentSlide.items}
            extra={currentSlide.extra}
            {spriteImgArray}
            {bgImages}
        />
    {:else}
        <CanvasEditor
            bind:items={currentSlide.items}
            bind:extra={currentSlide.extra}
            {tcode}
            bind:currentTime
            startTime={currentSlide.startTime}
            endTime={currentSlide.endTime}
            {spriteImgArray}
            {bgImages}
        />
    {/if}
{/if}
