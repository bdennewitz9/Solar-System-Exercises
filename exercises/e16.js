// see e16.md

export function find(array, callback) {
    let arr = [];
    for(let element of array) {
        if(callback(element)) {
            arr.push(element);
        }
    }  
    if(arr.length) {
        return arr[0];
    } else {
        return undefined;
    }  
    return arr;
}
