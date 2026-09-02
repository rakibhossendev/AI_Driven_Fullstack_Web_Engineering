interface TaskType{
    name: string,
    isDone: boolean
}

export default function Task({name:taskName,isDone}: TaskType){
    if(isDone){
        return <li>Completed: {taskName}</li>
    }
    return <li>Pending Task: {taskName}</li>
}