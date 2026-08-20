const getSignalStatus = (signal: number): string => {
    if(signal <= 25){
        return "Poor"
    }else if(signal <= 55){
        return "Fair";
    }else if(signal <= 85){
        return "Good";
    }else if(signal <= 100){
        return "Excellent"
    }

    return "Invalid";
}

console.log(getSignalStatus(70))