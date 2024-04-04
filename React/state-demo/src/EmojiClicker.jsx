import { v4 as uuid } from "uuid";
import { useState } from "react";


export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊" }]);
    const addEmoji = () => { ////스프레드를 사용해 초기값과 다른값이라는걸 리액트에게 인지시켜 재 렌더링으로 값을 변경해준다.
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "🥰" }])
    }
    return (
        <div>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}