import { v4 as uuid } from "uuid";
import { useState } from "react";

function randomEmoji() { //랜덤으로 이모지를 반환 함수
    const choices = ["😊", "🤩", "😁", "😍", "🤑", "😴"];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    const addEmoji = () => { //스프레드를 사용해 초기값과 다른값이라는걸 리액트에게 인지시켜 재 렌더링으로 값을 변경해준다.
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }])
    }

    const deleteEmoji = (id) => {  //선택한 이모지가 아닌 이모지들을 모은 배열을 복사해서 상태변경하는 함수
        setEmojis((prevEmojis) => prevEmojis.filter(e => e.id !== id))
    }

    const changeHeartEmoji = () => {  //모든 배열 요소를 하트로 변경하는 함수
        setEmojis((prevEmojis) => {
            return prevEmojis.map(e => {
                return { ...e, emoji: "❤️" }
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)} //콜백형식을 사용해 함수가 실행되도록 한다.
                    key={e.id}
                    style={{ fontSize: "4rem" }}>
                    {e.emoji}
                </span>
            ))
            }
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={changeHeartEmoji}>Make them all hearts</button>
        </div >
    )
}