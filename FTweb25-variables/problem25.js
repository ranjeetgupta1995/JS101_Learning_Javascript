let n=15;
for(let h=0; h<=n; h++){
  let bag="";
  for(let v=0; v<=n; v++){
    if(h==0 || h==n){
      bag=bag+"*";
    }
    else if(v==0 || v==n){
    bag=bag+"*";
  }
  else{
    bag=bag+" ";
  }
  }
console.log(bag);
}