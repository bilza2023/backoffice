
//@ts-nocheck


export default function arrangeContent(content) {
    // debugger;
    // Combine all arrays into one
    var combinedArrays = [...content.divs, ...content.images, ...content.lists, ...content.pres, ...content.tables, ...content.youtubes];

    // Create a map for quick lookup
    var contentMap = new Map();
    combinedArrays.forEach(item => contentMap.set(item.id, item));

    // Arrange the content based on sortOrder
    var arrangedContent = content.sortOrder.map(id => contentMap.get(id));

    return arrangedContent;
}
