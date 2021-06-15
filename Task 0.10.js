function stringChar(str,strng){
    
    var charCompare =[];

    for (var i=0; i<strng.length;i++){
        if (str.includes (strng[i])){
            charCompare.push(strng[i]);
        }
    }
    var char = charCompare.join();
    return char;   
}
