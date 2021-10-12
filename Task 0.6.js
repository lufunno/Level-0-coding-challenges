function maximumNumber(...args) {
    let maxNumber = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] > maxNumber) {
            maxNumber = args[i];
        }
    }
    return maxNumber;
}
console.log(maximumNumber(20, 30));
