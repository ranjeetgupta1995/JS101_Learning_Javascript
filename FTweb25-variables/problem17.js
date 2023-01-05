let i=1;
let count=0;
let sum=0;
while(i<=100){
  if(i%2==0){
    count++;
    sum+=i;
    
  }
  i++;
}
console.log(sum/count);