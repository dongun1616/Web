import { useState } from "react"
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0)) //빈 배열 원하는 인원만큼 채우기
    let someoneHasWon = false;  //누군가 이겼음을 확인해주는 불리언
    const addScore = (idx) => {  //점수를 +1 해주는 함수
        if (someoneHasWon) return scores; //누군가 이겼으면 점수올리지 않고 그대로 반환
        else {
            setScores(prevScores => {
                return prevScores.map((score, i) => {
                    if (i === idx) return score + 1;
                    return score;
                })
            })
        }
    }

    const reset = (idx) => { //점수를 초기화 해주는 함수
        setScores(new Array(numPlayers).fill(0));
        someoneHasWon = false;
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}>Player{idx + 1} : {score}
                        <button onClick={() => addScore(idx)}>+1</button>
                        {score >= target ? "Winner!" : null}
                        {score >= target ? someoneHasWon = true : null}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}