let combinationSum3=(k, n)=>{
    var result = [];
    const goThrough = (idx, arr, sum) => {
        if(sum>n){
            return;
        }
        if(arr.length === k){
            if(sum === n){
                result.push([...arr])
            }
            return;
        }
        for(let i = idx; i<10; i++){
            arr.push(i);
            sum+=i;
            goThrough(i+1, arr, sum);
            arr.pop(i);
            sum -=i;
        }
    }
    goThrough(1,[],0);
    return result;
};
combinationSum3();