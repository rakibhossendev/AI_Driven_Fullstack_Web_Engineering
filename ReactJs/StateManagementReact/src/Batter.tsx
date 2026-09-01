import { useState } from "react";

export default function Batter(){
    const [runs,updateRuns] = useState(0);

    const updateBatterRuns = (runNumber: number) => {
        if(runNumber === 1){
            updateRuns(runs + 1)
        }else if(runNumber === 4){
            updateRuns(runs + 4)
        }else if(runNumber === 6){
            updateRuns(runs + 6)
        }
    }

    return (
        <div>
            <h2>---------------------</h2>
            <h3>Runs: {runs}</h3>
            <button onClick={()=> updateBatterRuns(1)}> Add One</button>
            <button onClick={() => updateBatterRuns(4)}> Add Four</button>
            <button onClick={()=> updateBatterRuns(6)}> Add Six</button>
        </div>
    )
}