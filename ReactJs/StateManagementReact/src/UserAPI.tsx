// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))

import { use } from "react"
import UserCard from "./UserCard"

// async function userData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json()
// }

export default function Users({userData}){
    const data = use(userData)
    console.log(data)
    return (
        <div>
            <h2>Data: {data.length}</h2>
            <p>{data.map(item => <UserCard user={item}></UserCard>)}</p>
        </div>
    )
}