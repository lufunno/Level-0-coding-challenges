function CelsiusToFahrenheit(celsius){
   var fahrenheitResult = celsius * (9 / 5) + 32;
   return fahrenheitResult + ' \xB0F';   
}

function FahrenheiToCelsius(fahrenheit){
    var celciusResult = (fahrenheit - 32) * 5 / 9;
    return celciusResult + ' \xB0C';
}
console.log(CelsiusToFahrenheit(30));
console.log(FahrenheiToCelsius(30));
