Check this function
async function fixEndTime(slides){
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const lastItemEndTime = slide.endTime;
        if (slide.type == 'Eqs' || slide.type == 'eqs'){
            for (let j = 0; j < slide.items.length; j++) {
                const item = slide.items[j];
                item.extra.endTime = slide.items[j+1].extra.startTime;
            }
        }
    }

}

Explanation
- I have slides array of objects in which some slides are of type 'Eqs'.
- Each slide has slide.startTime and slide.endTime. 
- These slides have an array of items called  "items". each item has item.extra.startTime and item.extra.endTime values.

Requirements
 1: Each slide with type == 'Eqs' items must have item.extra.endTime == the item.extra.startTime of the next item (I think this far the function achieve).
 2: The problem is that the last item does not have a next item so the function gives error so for the last item.extra.endTime should be the end time of the slide const lastItemEndTime = slide.endTime; . Please add this to the function