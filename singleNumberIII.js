function singleNumberIII(arr){
    result = [];
    arr.sort();
    if(arr[0]!=arr[1]){
      result.push(arr[0]);
    }
    if(arr[arr.length-1]!=arr[arr.length-2]){
      result.push(arr[arr.length-1]);
    }
    for(i=1;i<arr.length-1;i++)
        {if(arr[i-1]!=arr[i] && arr[i]!=arr[i+1]){
          result.push(arr[i]);
        }  
        }
    
 return result;
       
}

console.log(singleNumberIII([1,2,1,3,2,5]));