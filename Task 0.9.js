function Vowels(str){
    if(str == str.toUpperCase()){
    let capitalVowels =  [str.match(/[AEIOU]/g)]; 
    let vowelsResults = capitalVowels.join();
    console.log(vowelsResults);
    }
    else{
        let lowerVowels =  [str.match(/[aeiou]/g)];
        let vowelsResults = lowerVowels.join();
        console.log(vowelsResults);  
    } 
}
