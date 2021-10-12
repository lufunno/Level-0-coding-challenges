function vowels(str){
    if(str == str.toUpperCase()){
    let capitalVowels =  [str.match(/[AEIOU]/g)]; 
    let vowelsResults = capitalVowels.join();
    console.log("Vowels: " + vowelsResults);
    }
    else{
        let lowerVowels =  [str.match(/[aeiou]/g)];
        let vowelsResults = lowerVowels.join();
        console.log("Vowels: " + vowelsResults); 
    } 
}
vowels("Umuzi");
