interface TodoType{
    task: string,

}

function Todo({task:myTask}: TodoType){
    return <ul>Work is: {myTask}</ul>
}

export default Todo;