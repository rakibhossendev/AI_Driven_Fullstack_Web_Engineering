'use client'
import { useState } from "react"
export default function Counter(){

    const [count,updateCounter] = useState<number>(0);
    
    const handleCounter = (): void => {
        updateCounter(count + 1);
    }

    console.log("Counter components rendered")

    return (
        <section>
            <h2 className="text-2xl">Counter</h2>
            <p>Count: {count}</p>
            <button className="p-2 font-bold rounded m-3 bg-green-500 text-white" onClick={handleCounter}>
                Count Start
            </button>
        </section>
    )
}