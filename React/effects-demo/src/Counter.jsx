import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect() { //함수를 전달해 렌더링이후 실행되는 함수
        console.log("Effect was called!!")
    }, [])
    const increment = () => {
        setCount((c) => c + 1)
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input value={name} onChange={handleChange} type="text"></input>
        </div>
    )
}