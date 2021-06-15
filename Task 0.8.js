function timeConverter(minutes){
   var hour = 0;
    while(minutes >= 60){
        minutes -= 60;
        hour++;
    }
    if (hour  == 1)
    console.log(hour + " hour " + minutes + " minutes")
    else{
        console.log(hour + " hours " + minutes + " minutes")   
    }
}
