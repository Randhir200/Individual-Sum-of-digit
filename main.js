
var n = 5;
var arr = [12,14,16,17];
var sum=0;
var totalSum=0;
for(var i=0;i<n;i++){
    var x = arr[i];
    sum=0;
    while(x>0){
        sum += x%10;
        x = parseInt(x/10);
    }
    totalSum+=sum;
}
console.log(totalSum);