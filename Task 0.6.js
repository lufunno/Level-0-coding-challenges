function MaximumNumber(...input) {
    let temp = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            if (input[j] < input[i]) {
                temp = input[j];
                input[j] = input[i];
                input[i] = temp;
            }
        }
    }
    let finalResult = input[input.length -1];
    return finalResult;
}
console.log(MaximumNumber(20, 30));
