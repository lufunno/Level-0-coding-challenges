function timeConverter(minutes){
    var hour = 0;
    while(minutes >= 60){
        minutes -= 60;
        hour++;
    }
    if(hour && minutes < 10){
        return "0"+ hour + ":" + "0" +minutes;
    }else{
        return "0"+ hour + ":" +minutes;
    }
}
