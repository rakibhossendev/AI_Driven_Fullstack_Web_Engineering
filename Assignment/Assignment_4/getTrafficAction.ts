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