interface FindOnDuty{
    name: string;
    onDuty: boolean;
}
const findOnDutyEmployees = (onDutyArray: FindOnDuty[]): FindOnDuty[] =>{
    const EmpOnDuty = onDutyArray.filter((el)=> el.onDuty)
    return EmpOnDuty;
}

console.log(findOnDutyEmployees([{name: "Lima", onDuty: true},{name: "Karim",onDuty:false},{name: "Mafuza",onDuty: true}]))