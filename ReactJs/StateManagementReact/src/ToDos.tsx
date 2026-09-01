import { useEffect, useState } from "react"

export default function ToDos(){
    const [totalTodo,setTodo] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTodo(data)
        })
    },[])

    return (
        <div>
            <h2>ToDos: {totalTodo.length}</h2>
        </div>
    )
}