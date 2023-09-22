<script>
//@ts-nocheck
export let contentItem;
export let questionIndex;
export let contentIndex;
export let moveDown;
export let moveUp;
export let deleteDiv;

import {ListEditor,DivEditor , TableEditor ,PreEditor , YoutubeEditor ,ImageEditor} from './index';


</script>

{#if contentItem.type == 'div'}
<DivEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'list'}
<ListEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'table'}
<TableEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'pre'}
<PreEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'youtube'}
<YoutubeEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}

{#if contentItem.type == 'image'}
<ImageEditor {questionIndex}  {contentIndex} {moveDown} {moveUp} {deleteDiv} />
{/if}