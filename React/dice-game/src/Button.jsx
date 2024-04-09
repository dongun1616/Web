import "./Button.css";

export default function Button({ clickFunc, label = "Click Me" }) { //해당 프로퍼티 받아옴
    return <button onClick={clickFunc} className="Button">
        {label}
    </button>
}