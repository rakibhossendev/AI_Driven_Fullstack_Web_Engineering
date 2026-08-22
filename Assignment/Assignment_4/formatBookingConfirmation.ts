interface UserInfo{
    name: string;
    guests: number;
    time: string;
}

const formatBookingConfirmation = (userInformationObject: UserInfo): string =>{
    return `${userInformationObject.name}'s table for ${userInformationObject.guests} guests is confirmed at ${userInformationObject.time}.`;
}

console.log(formatBookingConfirmation({name: "Aisha", guests: 4, time:" 7:00 PM" }))