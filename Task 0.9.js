function vowels(str){
    if(str == str.toUpperCase()){
    var CapitalVowels =  [str.match(/[AEIOU]/g)]; 
    var vowelsResults = CapitalVowels.join();
    console.log(vowelsResults);
    }
    else{
        var lowerVowels =  [str.match(/[aeiou]/g)];
        var vowelsResults = lowerVowels.join();
        console.log(vowelsResults);  
    } 
}
