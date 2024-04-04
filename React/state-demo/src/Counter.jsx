import { useState } from "react";

export default function Counter() {
    console.log("Re-Rendering!!!")
    const [count, setCount] = useState(0)
    const addOne = () => setCount(c => c + 1)
    const addThree = () => setCount(c => c + 3)
    const setToTen = () => setCount(10)
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>set to 10</button>
        </div>
    )
}