
for(let i=1; i<=23; i++){
  let number=i;
  let count=0;
  for(let j=1; j<=number; j++){
    if(number%j==0){
      count++;
    }
  }
    if(count<3 && number!=1){
      console.log(number);
    }
  }

