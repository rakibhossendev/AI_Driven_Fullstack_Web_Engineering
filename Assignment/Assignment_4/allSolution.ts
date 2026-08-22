//Problem-01: Battery Level Status
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

//Problem-02: Table Booking Confirmation
interface UserInfo{
    name: string;
    guests: number;
    time: string;
}

const formatBookingConfirmation = (userInformationObject: UserInfo): string =>{
    return `${userInformationObject.name}'s table for ${userInformationObject.guests} guests is confirmed at ${userInformationObject.time}.`;
}


//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (arrayOfAmount: number[]): number => {
    return arrayOfAmount.reduce((accumulator,value) => accumulator + value,0);
}


//Problem-04: Traffic Light Action
type trafficSignal = "red" | "yellow" | "green";
type trafficSignalBasedAction = "Stop" | "Slow Down" | "Go";

const getTrafficAction = (signal: trafficSignal): trafficSignalBasedAction => {
    if(signal === "red"){
        return "Stop";
    }else if(signal === "yellow"){
        return "Slow Down"
    }
    
    return "Go"
}

//Problem-05: Quiz Score Summary
interface QuizSummary{
    total: number;
    average: number;
}

const getQuizSummary = (marks: number[]): QuizSummary => {
    let total = marks.reduce((accumulator,value) => accumulator + value,0);

    return {total: total, average: marks.length===0? 0:total/marks.length};
}

