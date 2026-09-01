export default function AddCart(){
    let counter: number = 0;
    return (
        <div>
            <h3>Shopping Cart</h3>
            <h3>Total Cart: {counter}</h3>
            <button onClick={()=> counter+=1}>Add</button>
        </div>
    )
}