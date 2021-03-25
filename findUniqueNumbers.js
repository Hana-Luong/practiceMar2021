given_array = [9, 7, 19, 20, 1, 2, 4, 1, 2, 5, 4, 19, 3, 7, 9];
given_array.sort(function(a, b){
    return a - b;
});
console.log(given_array);
let idx = 0;
result = [];
l = given_array.length;
function findUniqueNumbers(arr, idx){
    if(idx>=l){
        return result;
    }
    else if(arr[idx]===arr[idx+1]){
        idx += 2;
        findUniqueNumbers(arr,idx);
    }
    else {
        result.push(arr[idx]);
        idx += 1;
        findUniqueNumbers(arr,idx);
    }
}
findUniqueNumbers(given_array, 0);
console.log(result);