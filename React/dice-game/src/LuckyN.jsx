import { useState } from "react";
import { getRolls } from "./utils";
import { sum } from "./utils";
import Dice from "./Dice";

export default function LuckyN({ numDice = 2, goal = 7 }) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === goal //더한 주사위값이 목표값과 같은지
    const roll = () => { //주사위를 다시 돌리는 함수
        setDice((getRolls(numDice)))
    }
    return (
        <main className="LuckyN">
            <h1>Lucky{goal} {isWinner && "You Win"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    )
}