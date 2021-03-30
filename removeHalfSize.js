/* Given an array arr.  You can choose a set of integers and remove all the occurrences 
of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array 
are removed. 
Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 
(i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] 
which has size greater than half of the size of the old array. */

given_array = [3,3,9,1,5,5,5,2,2,7,7]
hist = [];
sum = 0;
count = 0;
// initialize the histogram with the maximum elements.
for (i = 0; i < given_array.length; i++){
    hist.push(0);
}
console.log(hist);// just to see what hist array is like
function getHistogram(array){
    for (i = 0; i < array.length; i++){
        hist[array[i]]++;
    }
    console.log(hist);// just to see the new hist array
    hist.sort(function(a, b){
        return b - a;
    });
    console.log(hist);// just to see the hist array in reverse sorting
    // at first, I stopped here to see what the new hist array was like.
    // therefore I named the function as getHistogram(); 
    // you can change it back to removeHalfSize();

    for(j = 0; j <= hist.length; j++){
        sum += hist[j];
        count += 1;
        if(sum >= array.length/2){
            break;
        }
    }
    return count;
}
console.log(getHistogram(given_array));



