import { useState } from "react";
import "./ColorBox.css";

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length); //랜덤한 배열의 인덱스 번호
    return arr[idx] //랜덤 배열 인덱스값 반환
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors))
    const changeColor = () => { //클릭시 랜덤 색상을 가져오는 함수
        const randomColor = randomChoice(colors)
        setColor(randomColor)
    }
    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}>
        </div>
    )
}