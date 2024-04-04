import { useState } from "react"

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 })
    function plusP1Score() {
        setScores(oldScores => {//스프레드를 사용해 초기값과 다른값이라는걸 리액트에게 인지시켜 재 렌더링으로 값을 변경해준다.
            return { ...oldScores, p1Score: oldScores.p1Score + 1 }
        })
    }
    function plusP2Score() {
        setScores(oldScores => {
            return { ...oldScores, p2Score: oldScores.p2Score + 1 }
        })
    }
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={plusP1Score}>+1 Player 1</button>
            <button onClick={plusP2Score}>+1 Player 2</button>
        </div>
    )
}