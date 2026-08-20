interface Ticket{
    name: string;
    movie: string;
    time: string;
}

const formatTicketConfirmation = (movieObject: Ticket): string =>{
    const {name,movie,time} = movieObject;
    return `${name}'s ticket for ${movie} is confirm at ${time}`;
}

console.log(formatTicketConfirmation({name: "Nabila", movie: "Interstellar",time: "9:15 PM" }))