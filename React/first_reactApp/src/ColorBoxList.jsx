import ColorBox from "./ColorBox";
import "./ColorBoxList.css";

export default function ColorBoxList({ colors }) { //랜덤 상자 25개를 boxes 배열에 push하는 함수
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={colors} />)
    }
    return (
        <div className="ColorBoxList">{boxes}</div>
    )
}