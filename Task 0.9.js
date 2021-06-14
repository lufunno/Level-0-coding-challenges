function vowels(str){
    var matchingVowels =  [str.match(/[aeiou]/gi)]; 
    var vowelsResults = matchingVowels.join();
    return vowelsResults;     
} 
