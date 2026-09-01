import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const counterUpdate = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Counter</h2>
            <p>Count Value: {count}</p>
            <button onClick={counterUpdate}>Increase</button>
        </div>
    )
}