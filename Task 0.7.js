function CelsiusToFahrenheit(celsius){
   let fahrenheitResult = celsius * (9 / 5) + 32;
   return fahrenheitResult;   
}

function FahrenheiToCelsius(fahrenheit){
    let celciusResult = (fahrenheit - 32) * 5 / 9;
    return celciusResult;
}
console.log(CelsiusToFahrenheit(30));
console.log(FahrenheiToCelsius(30));
