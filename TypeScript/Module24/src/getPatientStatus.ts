type EmergencyLevel = 1 | 2 | 3;
interface GeneralPatient{
    name: string;
    age: number;
    type: "general";
}
interface EmergencyPatient{
    name: string;
    age: number;
    type: "emergency";
    emergencyLevel: EmergencyLevel;
}

const getPatientStatus = (patient: GeneralPatient | EmergencyPatient): string => {
    const {type} = patient;
    if(patient.type === "general"){
        return "General patient";
    }

    if(patient.emergencyLevel === 1){
        return "Critical";
    }else if(patient.emergencyLevel === 2){
        return "Serious";
    }

    return "Moderate";
} 

console.log(getPatientStatus({ name: "Rahim", age: 35, type: "emergency",emergencyLevel: 1}))