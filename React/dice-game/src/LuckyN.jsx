import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";

export default function LuckyN({ title = "Dice Game", numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice);//더한 주사위값이 목표값과 같은지
    const roll = () => { //주사위를 다시 돌리는 함수
        setDice((getRolls(numDice)))
    }
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button clickFunc={roll} label="Re-Roll" />
        </main>
    )
}