function  matchChar(str1,str2){
    
  let charCompare =[];

  for (let i=0; i<str2.length;i++){
      if (str1.includes (str2[i])){
          charCompare.push(str2[i]);
      }
  }
  let char = charCompare.join();
  console.log("Common Letters: " + char);
}
matchChar("house","computers")
