const getBatteryStatus = (batteryCharge: number): string => {
    if(batteryCharge <= 100 && batteryCharge >= 91){
        return "Full";
    }else if(batteryCharge <= 90 && batteryCharge >= 51){
        return "High";  
    }else if( batteryCharge <= 50 && batteryCharge >= 21){
        return "Medium"
    }
    return "Low";
}

console.log(getBatteryStatus(200))