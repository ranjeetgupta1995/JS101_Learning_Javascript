let new_str="";
let sum=0;
let str=["ram", "shyam", "kanha", "shiv", "radha", "shakti"];
for(let i=0; i<str.length; i++){
  new_str=str[i];
  sum=sum+new_str.length;
}
console.log(sum);