let no_days=0;
for(let month=1; month<=12; month++){
  if(month==2){
      no_days=28;
    }
    else if(month==4 || month==6 || month==9 || month==11){
      no_days=30;
    }
    else{
      no_days=31;  
    }
  for(let date=1; date<=no_days; date++){
  console.log(date,"-",month);
    
  }
}