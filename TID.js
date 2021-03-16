function numberOfTID(str){
    var count8 = 0;
    var num = 0; 
    for(i=0; i< str.length; i++){
        if(str[i]==="8"){
            count8++;
        }
    }
    let countOfRemaining = str.length - count8; 
    details();
    function details(){        
        if (count8 <= Math.floor(countOfRemaining/10)){
            num = count8;
        } 
        else {
            var temp = count8;
            count8 = Math.floor(countOfRemaining/10);         
            countOfRemaining += temp - count8;
            details();
        }
    }  
    return num;
}
   
x = numberOfTID("812459795823596723456781976588888115437651246756");
console.log(x); 
y = numberOfTID("9795235967234567819765811324");
console.log(y);
z = numberOfTID("8197658");
console.log(z);  