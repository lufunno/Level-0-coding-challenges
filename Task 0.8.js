function timeConverter(minutes){
    var hour = 0;
    var min = minutes
    while(minutes > 60){
        minutes -= 60;
        hour++;
    }
    if (minutes == 60){
        hour++;
        if(hour > 1){
        console.log(hour + " hours");
        }
        else{
            console.log(hour + " hour");    
        }
    }
    else if(hour > 1 && minutes < 60 ){
        console.log(hour + " hours " + minutes + " minutes")
    }
    else if(hour == 1 && minutes < 60 || minutes > 60){
        console.log(hour + " hour " + minutes + " minutes")
    }
    else if (min < 60){
        console.log(min + " minutes ")
    }  
}
