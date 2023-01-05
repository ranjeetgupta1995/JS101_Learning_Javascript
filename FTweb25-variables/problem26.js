//Given an array find the unique items in the array

let arr= ["raju", "sanjay", "pankaj", "raju", "sanjay", "pankaj", "rahul", "krishna", "raju", "sanjay", "rohit", "nimrit"];

let object={};

for(let i=0; i<arr.length; i++){
  object[arr[i]]=1;
}

console.log(object);