function stringChar(str1,str2){
    
    var charCompare =[];

    for (var i=0; i<str2.length;i++){
        if (str1.includes (str2[i])){
            charCompare.push(str2[i]);
        }
    }
    var char = charCompare.join();
    console.log(char);
}
