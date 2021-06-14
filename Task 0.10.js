function stringCompare(str, strng) {
    var strCmp = [];
   
    for (i=0; i<str.length; i++) {
        for (j=0; j<strng.length; j++) {
            if (str.charAt(i) == strng.charAt(j)) {
                strCmp += str.charAt(i) + ', ';        
            }
        }
    } 
    return strCmp;
}
console.log(stringCompare('lufuno', 'lu'));