function celsiusToFahrenheit(celsius){
   let fahrenheitResult = celsius * (9 / 5) + 32;
   return fahrenheitResult;   
}

function fahrenheiToCelsius(fahrenheit){
    let celciusResult = (fahrenheit - 32) * 5 / 9;
    return celciusResult;
}
console.log(celsiusToFahrenheit(30));
console.log(fahrenheiToCelsius(30));
