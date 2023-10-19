//@ts-nocheck


export default function removeDuplicates(inputArray) {
    const uniqueValues = new Set();
    const result = [];
    for (const value of inputArray) {
        if (value !== "" && !uniqueValues.has(value)) {
            result.push(value);
            uniqueValues.add(value);
        }
    }
    return result;
}