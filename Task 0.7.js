function celsiusToFahrenheit(celsius){
   var fahrenheitResult = celsius * (9 / 5) + 32;
   return fahrenheitResult + ' \xB0F';   
}

function fahrenheiToCelsius(fahrenheit){
    var celciusResult = (fahrenheit - 32) * 5 / 9;
    return celciusResult + ' \xB0C';
}