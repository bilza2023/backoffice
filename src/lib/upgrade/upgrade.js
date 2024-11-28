



export  async function upgrade(slides){

    // debugger;
console.log("before",slides);
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        
        if(slide.extra){
            //in last code slideExtra is an array now it is an object.
            slide.slideExtra = null; 
            slide.slideExtra = slide.extra;
            
                for (let j = 0; j < slide.items.length; j++) {
                    const item = slide.items[j];
                    if(item.extra){
                        item.itemExtra = item.extra;      
                        item.itemExtra = simplifyJSON(item.itemExtra);
                        item.extra=null;      
                    }
                }
        }//slide loop
        
    }

    console.log("upgrade",slides);
    return slides;
}


function simplifyJSON(data) {
    // Handle non-object types directly
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    // Create a new object to store simplified results
    const simplified = {};

    // Iterate through all keys in the original object
    for (const [key, value] of Object.entries(data)) {
        // Skip 'setCommands' key
        if (key === 'setCommands') {
            continue;
        }

        // If value is an object with 'initialValue', use that value directly
        if (typeof value === 'object' && value !== null && 'initialValue' in value) {
            simplified[key] = value.initialValue;
        } 
        // If value is an object, recursively simplify it
        else if (typeof value === 'object' && value !== null) {
            simplified[key] = simplifyJSON(value);
        } 
        // For other types, keep the original value
        else {
            simplified[key] = value;
        }
    }

    return simplified;
}


// // Transform the JSON
// const simplifiedJSON = simplifyJSON(exampleData);
// console.log(JSON.stringify(simplifiedJSON, null, 2));