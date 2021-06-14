//first change the input to an array using '...'
function maximumNumber(...input) {
    var temp = 0;

    //check the length of the array
    for (var i = 0; i < input.length; i++) {
      for (var j = i; j < input.length; j++) {
        //swap in ascending order
        if (input[j] < input[i]) {
          temp = input[j];
          input[j] = input[i];
          input[i] = temp;
        }
      }
    }
    //getting the last element of our array
    var finalResult = input[input.length -1];
    return finalResult;
  }