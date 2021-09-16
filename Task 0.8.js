function TimeConverter(minutes){
    let hour = 0;
    let min = minutes
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
    else if(hour > 1 && minutes > 1){
        console.log(hour + " hours " + minutes + " minutes")
    }
    else if(hour > 1 && minutes == 1){
        console.log(hour + " hours " + minutes + " minute")
    }
    else if(hour == 1 && minutes > 1){
        console.log(hour + " hour " + minutes + " minutes")
    }
    else if(hour == 1 && minutes == 1){
        console.log(hour + " hour " + minutes + " minute")
    }
    else if (min == 1){
        console.log(min + " minute ")
    }
    else if (min > 1 ){
        console.log(min + " minutes ")
    }  
}
TimeConverter(120);
